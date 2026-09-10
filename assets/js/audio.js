/* ============================================================
   audio.js — odtwarzanie mowy i rozpoznawanie mowy

   Dwa źródła głosu, w tej kolejności:

   1. NAGRANIA NEURALNE (domyślne). Wszystkie włoskie zdania kursu są
      wcześniej zsyntezowane głosami Edge TTS (Isabella — głos główny,
      Giuseppe — rozmówca w dialogach) i leżą w audio/<xx>/<hash>.mp3.
      Który plik dla którego zdania — o tym mówi recordings.js.
   2. SYNTEZA SYSTEMOWA (awaryjnie). Web Speech API — dla tekstów spoza
      kursu (odmiana czasowników, wyszukiwanie w słowniku) oraz gdy
      nagrania nie zostały wygenerowane.

   Powód takiej kolejności: na Linuksie Web Speech API sięga zwykle tylko
   po espeak-ng, czyli syntezę formantową brzmiącą mechanicznie. Nagrania
   rozwiązują to bez backendu — plik statyczny działa tak samo z file://,
   z serwera lokalnego i z GitHub Pages.

   Rozpoznawanie mowy: SpeechRecognition (Chrome / Edge / Safari 16+).
   Gdy go brak, ćwiczenia mówione przechodzą w tryb pisany.

   Wymaga recordings.js (indeks nagrań) wczytanego wcześniej.
   ============================================================ */
(function (global) {
  "use strict";

  /* ─────────────── Synteza systemowa (awaryjna) ─────────────── */

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

  /** Ranking głosów systemowych: neuronowe przed formantowymi. */
  var GOOD = /(natural|neural|google|siri|premium|enhanced|wavenet)/i;
  var POOR = /(espeak|festival|pico|flite|robot)/i;

  function pickVoice() {
    var its = italianVoices().slice();
    its.sort(function (a, b) {
      return (GOOD.test(b.name) - GOOD.test(a.name)) || (POOR.test(a.name) - POOR.test(b.name));
    });
    return its[0] || null;
  }

  /* ─────────────── Nagrania neuralne ─────────────── */

  /* Indeks nagrań (skrót treści, wyszukiwanie, adres pliku) siedzi w
     recordings.js: jest czystą funkcją napisu i ma bliźniaka w Pythonie,
     więc daje się przetestować bez ani jednej atrapy przeglądarki. */
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

  /* ─────────────── Wspólne API ─────────────── */

  var currentToken = 0;

  function stop() {
    currentToken++;
    if (synth) { try { synth.cancel(); } catch (e) { /* brak wsparcia */ } }
    if (player) { try { player.pause(); player.currentTime = 0; } catch (e) { /* pusty player */ } }
  }

  /* Ostrzeżenia pokazujemy raz na sesję: przy liście słówek poleciałyby przy każdym haśle. */
  var warnedNoVoice = false;
  var warnedRecording = false;

  function speakSystem(text, opts, token) {
    if (!synth) { opts.onend && opts.onend(); return false; }

    var v = pickVoice();
    if (!v) {
      /*
       * Bez głosu it-* przeglądarka NIE honoruje u.lang: bierze głos domyślny
       * i czyta włoskie zdanie po angielsku. Dla kursu wymowy to gorsze niż cisza,
       * bo uczeń powtarza akcent, którego się właśnie uczy nie mieć.
       * Ta sama decyzja co przy blokadzie autoodtwarzania niżej.
       */
      if (!warnedNoVoice) {
        warnedNoVoice = true;
        try { Core.toast(I18n.t("audio.noItalianVoice")); } catch (e) { /* toast opcjonalny */ }
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
   * Wypowiada tekst po włosku.
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
         * Brakujący plik zgłasza się DWA razy: przez el.onerror i przez odrzucenie
         * obietnicy z play(). Bez tej flagi zdanie poleciałoby dwa razy.
         */
        var failed = false;
        function onLoadFailure() {
          if (token !== currentToken || failed) return;
          failed = true;
          /*
           * Nagranie jest w indeksie, ale plik się nie wczytał: brakuje katalogu
           * audio/, zła ścieżka albo blokada sieci. To inna awaria niż brak głosu
           * systemowego, więc mówimy o niej osobno — inaczej diagnoza idzie w złą stronę.
           */
          if (!warnedRecording) {
            warnedRecording = true;
            try { Core.toast(I18n.t("audio.recordingFailed")); } catch (e) { /* toast opcjonalny */ }
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
             // Blokada autoodtwarzania (brak wcześniejszego kliknięcia) to nie awaria pliku:
             // schodzenie tu na syntezę systemową podmieniłoby lektora na głos robotyczny.
             // Zostajemy w ciszy — użytkownik ma przycisk odtwarzania, a jego klik jest gestem.
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

  /** Odtwarza listę linii po kolei (dialog, lista słówek). */
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

  /** Czy dany tekst ma nagranie neuralne (do oznaczeń w interfejsie). */
  function hasNatural(text) {
    return Rec.has(text);
  }

  /* ─────────────── Rozpoznawanie mowy ─────────────── */

  var SR = global.SpeechRecognition || global.webkitSpeechRecognition || null;
  var sttSupported = !!SR;
  var activeRec = null;

  /**
   * Rozpoznawanie mowy — z bramką zgody PRZED pierwszym wysłaniem głosu.
   *
   * To jedyne miejsce w kursie, z którego coś opuszcza przeglądarkę ucznia:
   * przeglądarki, które udostępniają SpeechRecognition, wysyłają nagranie
   * na serwer dostawcy. Bramka stoi tutaj, a nie w trzech widokach, które
   * to wołają, bo obrona rozłożona po miejscach wywołania działa do
   * pierwszego nowego miejsca wywołania.
   *
   * Bez zgody zachowujemy się dokładnie jak przy braku obsługi: widoki już
   * umieją zamienić wtedy ćwiczenie na pisane, więc nie trzeba dokładać
   * żadnej nowej ścieżki, a odmowa nie kończy się pustym ekranem.
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
    try { if (activeRec) activeRec.abort(); } catch (e) { /* nic aktywnego */ }

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
    return { abort: function () { try { rec.abort(); } catch (e) { /* już zamknięty */ } activeRec = null; } };
  }

  /** Ocena wypowiedzi wobec wzorca: 0..100, po najlepszej z alternatyw. */
  function scoreSpeech(heard, alternatives, target) {
    var pool = [heard].concat(alternatives || []).filter(Boolean);
    var best = 0;
    for (var i = 0; i < pool.length; i++) {
      var s = Core.similarity(pool[i], target);
      if (s > best) best = s;
    }
    return Math.round(best * 100);
  }

  /* Trzy pola niżej to przepustka do Recordings pod nazwami, którymi mówi
     interfejs („czy to zdanie ma nagranie", „ile ich jest"). Skrótu i adresu
     pliku Audio2 już nie wystawia: kto ich potrzebuje, pyta wprost Recordings,
     bo dwie nazwy tej samej rzeczy rozjeżdżają się przy pierwszej zmianie. */
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
