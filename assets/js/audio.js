/* ============================================================
   audio.js — speech playback and speech recognition

   Two sources of voice, in this order:

   1. NEURAL RECORDINGS (the default). Every Italian sentence in the course
      is synthesised in advance with Edge TTS voices (Isabella — the main
      voice, Giuseppe — the other speaker in dialogues) and lives in
      audio/<xx>/<hash>.mp3. Which file belongs to which sentence is
      recordings.js's job.
   2. SYSTEM SYNTHESIS (as a fallback). The Web Speech API — for texts from
      outside the course (verb conjugation, dictionary lookup) and whenever
      the recordings have not been generated.

   The reason for that order: on Linux the Web Speech API usually reaches
   for espeak-ng alone, that is formant synthesis that sounds mechanical.
   Recordings solve this without a backend — a static file works the same
   from file://, from a local server and from GitHub Pages.

   Speech recognition: SpeechRecognition (Chrome / Edge / Safari 16+).
   When it is missing, spoken exercises fall back to typing.

   Requires recordings.js (the recording index) loaded earlier.
   ============================================================ */
(function (global) {
  "use strict";

  /* ─────────────── System synthesis (fallback) ─────────────── */

  var synth = global.speechSynthesis || null;
  var voices = [];

  function refreshVoices() {
    if (!synth) return;
    voices = synth.getVoices() || [];
  }
  if (synth) {
    refreshVoices();
    if (typeof synth.addEventListener === "function") synth.addEventListener("voiceschanged", refreshVoices);
    else synth.onvoiceschanged = refreshVoices;
  }

  function italianVoices() {
    return voices.filter(function (v) { return /^it(-|_)/i.test(v.lang); });
  }

  /** Ranking of system voices: neural ahead of formant. */
  var GOOD = /(natural|neural|google|siri|premium|enhanced|wavenet)/i;
  var POOR = /(espeak|festival|pico|flite|robot)/i;

  function pickVoice() {
    var its = italianVoices().slice();
    its.sort(function (a, b) {
      return (GOOD.test(b.name) - GOOD.test(a.name)) || (POOR.test(a.name) - POOR.test(b.name));
    });
    return its[0] || null;
  }

  /* ─────────────── Neural recordings ─────────────── */

  /* The recording index (content hash, lookup, file address) sits in
     recordings.js: it is a pure function of a string and has a twin in
     Python, so it can be tested without a single browser double. */
  var Rec = global.Recordings;
  var norm = Rec.norm;

  var player = null;
  function getPlayer() {
    if (!player) {
      player = new global.Audio();
      player.preload = "auto";
    }
    return player;
  }

  var naturalAvailable = Rec.available;

  /* ─────────────── Shared API ─────────────── */

  var currentToken = 0;

  function stop() {
    currentToken++;
    if (synth) { try { synth.cancel(); } catch (e) { /* not supported */ } }
    if (player) { try { player.pause(); player.currentTime = 0; } catch (e) { /* empty player */ } }
  }

  /* Warnings are shown once per session: on a word list they would fire on every entry. */
  var warnedNoVoice = false;
  var warnedRecording = false;

  function speakSystem(text, opts, token) {
    if (!synth) { opts.onend && opts.onend(); return false; }

    var v = pickVoice();
    if (!v) {
      /*
       * With no it-* voice the browser does NOT honour u.lang: it takes the
       * default voice and reads the Italian sentence in English. For a
       * pronunciation course that is worse than silence, because the student
       * repeats the very accent they are learning not to have.
       * The same decision as with the autoplay block below.
       */
      if (!warnedNoVoice) {
        warnedNoVoice = true;
        try { Core.toast(I18n.t("audio.noItalianVoice")); } catch (e) { /* toast optional */ }
      }
      opts.onend && opts.onend();
      return false;
    }

    try {
      synth.cancel();
      var u = new global.SpeechSynthesisUtterance(text);
      u.voice = v;
      u.lang = v.lang;
      u.rate = opts.rate || Core.state.settings.rate || 0.95;
      u.pitch = 1.05;
      u.onstart = function () { if (token === currentToken) opts.onstart && opts.onstart(); };
      u.onend = function () { if (token === currentToken) opts.onend && opts.onend(); };
      u.onerror = function () { if (token === currentToken) opts.onend && opts.onend(); };
      synth.speak(u);
      return true;
    } catch (e) {
      opts.onend && opts.onend();
      return false;
    }
  }

  /**
   * Speaks a text in Italian.
   * @param {string} text
   * @param {{rate?:number, onend?:Function, onstart?:Function, forceSystem?:boolean}} opts
   */
  function speak(text, opts) {
    opts = opts || {};
    var clean = norm(text);
    if (!clean) { opts.onend && opts.onend(); return false; }

    stop();
    var token = currentToken;
    var wantSystem = opts.forceSystem || Core.state.settings.voiceSource === "system";

    if (!wantSystem && naturalAvailable) {
      var digest = Rec.hash(clean);
      if (Rec.inIndex(digest)) {
        var el = getPlayer();
        el.onended = null; el.onerror = null;
        el.src = Rec.url(digest);
        el.playbackRate = Math.min(2, Math.max(0.5, opts.rate || Core.state.settings.rate || 1));
        /*
         * A missing file reports itself TWICE: through el.onerror and through
         * the rejection of the promise from play(). Without this flag the
         * sentence would play twice.
         */
        var failed = false;
        function onLoadFailure() {
          if (token !== currentToken || failed) return;
          failed = true;
          /*
           * The recording is in the index but the file did not load: the
           * audio/ directory is missing, the path is wrong, or the network is
           * blocked. That is a different failure from a missing system voice,
           * so we say so separately — otherwise the diagnosis goes the wrong way.
           */
          if (!warnedRecording) {
            warnedRecording = true;
            try { Core.toast(I18n.t("audio.recordingFailed")); } catch (e) { /* toast optional */ }
          }
          speakSystem(clean, opts, token);
        }
        el.onended = function () { if (token === currentToken) opts.onend && opts.onend(); };
        el.onerror = onLoadFailure;
        var p = el.play();
        if (p && typeof p.then === "function") {
          p.then(function () { if (token === currentToken) opts.onstart && opts.onstart(); })
           .catch(function (err) {
             if (token !== currentToken) return;
             // An autoplay block (no prior click) is not a file failure:
             // falling back to system synthesis here would swap the narrator for a robotic voice.
             // We stay silent — the user has a play button, and their click is the gesture.
             if (err && err.name === "NotAllowedError") { opts.onend && opts.onend(); return; }
             onLoadFailure();
           });
        } else {
          opts.onstart && opts.onstart();
        }
        return true;
      }
    }
    return speakSystem(clean, opts, token);
  }

  /** Plays a list of lines one after another (a dialogue, a word list). */
  function speakSequence(lines, opts) {
    opts = opts || {};
    var i = 0, cancelled = false;
    function next() {
      if (cancelled) return;
      if (i >= lines.length) { opts.onend && opts.onend(); return; }
      var line = lines[i++];
      opts.onLine && opts.onLine(line, i - 1);
      speak(line.it || line, {
        rate: opts.rate,
        onend: function () { global.setTimeout(next, 380); }
      });
    }
    next();
    return { cancel: function () { cancelled = true; stop(); } };
  }

  /** Whether a given text has a neural recording (for markers in the interface). */
  function hasNatural(text) {
    return Rec.has(text);
  }

  /* ─────────────── Speech recognition ─────────────── */

  var SR = global.SpeechRecognition || global.webkitSpeechRecognition || null;
  var sttSupported = !!SR;
  var activeRec = null;

  /**
   * Speech recognition — with a consent gate BEFORE the voice is first sent.
   *
   * This is the only place in the course from which anything leaves the
   * student's browser: browsers that expose SpeechRecognition send the
   * recording to the vendor's server. The gate sits here, and not in the
   * three views that call it, because a defence spread over call sites works
   * until the first new call site.
   *
   * Without consent we behave exactly as we do without support: the views
   * already know how to turn the exercise into a written one then, so no new
   * path has to be added and a refusal does not end in an empty screen.
   */
  function listen(handlers) {
    handlers = handlers || {};
    if (!SR) { handlers.onerror && handlers.onerror("unsupported"); return { abort: function () {} }; }

    var C = global.Consent;
    if (C && !C.udzielona()) {
      var pusty = { abort: function () {} };
      C.zZgoda(
        function () { listen(handlers); },
        function () { handlers.onerror && handlers.onerror("no-consent"); }
      );
      return pusty;
    }
    try { if (activeRec) activeRec.abort(); } catch (e) { /* nothing active */ }

    var rec = new SR();
    rec.lang = "it-IT";
    rec.interimResults = true;
    rec.maxAlternatives = 5;
    rec.continuous = false;

    var finalText = "", alts = [];

    rec.onstart = function () { handlers.onstart && handlers.onstart(); };
    rec.onresult = function (ev) {
      var interim = "";
      for (var i = ev.resultIndex; i < ev.results.length; i++) {
        var r = ev.results[i];
        if (r.isFinal) {
          finalText += r[0].transcript;
          for (var a = 0; a < r.length; a++) alts.push(r[a].transcript);
        } else {
          interim += r[0].transcript;
        }
      }
      handlers.oninterim && handlers.oninterim(interim || finalText);
    };
    rec.onerror = function (ev) {
      activeRec = null;
      handlers.onerror && handlers.onerror(ev.error || "error");
    };
    rec.onend = function () {
      activeRec = null;
      handlers.onend && handlers.onend(finalText.trim(), alts);
    };

    activeRec = rec;
    try { rec.start(); } catch (e) { handlers.onerror && handlers.onerror("start-failed"); }
    return { abort: function () { try { rec.abort(); } catch (e) { /* already closed */ } activeRec = null; } };
  }

  /** Scores an utterance against a target: 0..100, by the best alternative. */
  function scoreSpeech(heard, alternatives, target) {
    var pool = [heard].concat(alternatives || []).filter(Boolean);
    var best = 0;
    for (var i = 0; i < pool.length; i++) {
      var s = Core.similarity(pool[i], target);
      if (s > best) best = s;
    }
    return Math.round(best * 100);
  }

  /* The three fields below are a pass-through to Recordings under the names
     the interface speaks in ("does this sentence have a recording", "how many
     are there"). Audio2 no longer exposes the hash and the file address:
     whoever needs them asks Recordings directly, because two names for the
     same thing drift apart at the first change. */
  global.Audio2 = {
    ttsSupported: !!synth,
    sttSupported: sttSupported,
    naturalAvailable: naturalAvailable,
    naturalCount: Rec.count,
    speak: speak,
    stop: stop,
    speakSequence: speakSequence,
    hasNatural: hasNatural,
    listen: listen,
    scoreSpeech: scoreSpeech,
    italianVoices: italianVoices,
    refreshVoices: refreshVoices
  };

})(window);
