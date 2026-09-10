/* ============================================================
   recorder.js — recording the student's voice.

   What for, given the course already has speech recognition: because that
   compares a TRANSCRIPT with an expected string, that is, it measures
   words, not sound. A student can pronounce "gli" like "li" and get full
   marks. Shadowing grades nothing — it lets you hear your own voice right
   after the narrator, and the ear does the rest. It is the one thing in
   this course that cannot be faked by an automaton.

   WHAT WE KNOW FROM MEASUREMENT (spike T080, not from documentation):

   - Chromium on localhost and from `file://`: it records, 4924 bytes of
     `audio/webm;codecs=opus` for 0.8 seconds. `isSecureContext` is true for
     local files too, so the assumption "this will not work from disk" was
     false;
   - the supported types are `audio/webm`, `audio/webm;codecs=opus` and
     `audio/mp4`. There is NO ogg and no wav;
   - Safari has had MediaRecorder since 14.1 (macOS) and 14.5 (iOS), but up
     to iOS 18.3 only `audio/mp4` with AAC. That is why the type is
     NEGOTIATED and not hard-coded: hard-coding "webm" would disable the
     feature for every iPhone older than March 2025;
   - recording must start from a user gesture.

   RECORDINGS ARE NOT SAVED. They live in memory for the duration of the
   exercise and die when it closes. `localStorage` is a single five-megabyte
   quota shared with lesson progress, and an audio blob would eat it in a
   dozen attempts; pruning protects progress, but it is not written for a
   flood of blobs.

   Classic script. No dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var Recorder = {};

  /* The order matters: opus is smaller and better, mp4 is the only one an
     older iPhone knows. An empty string = let the browser choose. */
  var TYPY = ["audio/webm;codecs=opus", "audio/webm", "audio/mp4", ""];

  function wspieranyTyp() {
    if (typeof global.MediaRecorder === "undefined") return null;
    for (var i = 0; i < TYPY.length; i++) {
      if (TYPY[i] === "") return "";
      if (global.MediaRecorder.isTypeSupported(TYPY[i])) return TYPY[i];
    }
    return null;
  }

  /**
   * Why recording is unavailable — or `null` when it is available.
   *
   * We return a string KEY, not a sentence: the course speaks five
   * languages, and this is a message the student reads exactly when
   * something does not work. The checks run from the most fundamental one
   * down, so the reason is the narrowest true one rather than the first one
   * at hand.
   */
  function powodBraku() {
    if (!global.isSecureContext) return "rec.errInsecure";
    if (!global.navigator || !global.navigator.mediaDevices ||
        !global.navigator.mediaDevices.getUserMedia) return "rec.errNoMic";
    if (typeof global.MediaRecorder === "undefined") return "rec.errNoRecorder";
    if (wspieranyTyp() === null) return "rec.errNoFormat";
    return null;
  }

  function dostepne() { return powodBraku() === null; }

  /* Module state. One recording at a time: two microphone streams mean two
     red dots in the browser bar and the question of which one you hear. */
  var strumien = null;
  var rec = null;
  var urlOstatni = null;

  /** Releases the previous URL object. Without it every attempt leaks a blob. */
  function zwolnij() {
    if (urlOstatni) { global.URL.revokeObjectURL(urlOstatni); urlOstatni = null; }
  }

  /**
   * Asks for the microphone and starts recording.
   *
   * @param {object} h  {onstart, onstop({url,blob,ms}), onerror(stringKey)}
   * @returns {object}  {stop()}
   */
  function start(h) {
    h = h || {};
    var powod = powodBraku();
    if (powod) { h.onerror && h.onerror(powod); return { stop: function () {} }; }
    if (rec) { h.onerror && h.onerror("rec.errBusy"); return { stop: function () {} }; }

    var typ = wspieranyTyp();
    var parti = [];
    var t0 = Date.now();

    global.navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
      strumien = s;
      rec = new global.MediaRecorder(s, typ ? { mimeType: typ } : {});
      rec.ondataavailable = function (e) { if (e.data && e.data.size) parti.push(e.data); };
      rec.onerror = function () { posprzataj(); h.onerror && h.onerror("rec.errFailed"); };
      rec.onstop = function () {
        var blob = new global.Blob(parti, { type: typ || "audio/webm" });
        posprzataj();
        zwolnij();
        urlOstatni = global.URL.createObjectURL(blob);
        h.onstop && h.onstop({ url: urlOstatni, blob: blob, ms: Date.now() - t0 });
      };
      rec.start();
      h.onstart && h.onstart();
    }).catch(function (e) {
      /* A denied permission and a missing device are two different
         situations and the student must know which one they are looking at:
         the first one they can undo themselves in the address bar, the
         second one they cannot undo at all. */
      var n = e && e.name;
      /* `NotSupportedError` is what headless Chromium produces on a denial in
         a test; a real browser gives `NotAllowedError` there. The path of a
         REAL denial cannot be reproduced here, so it is mapped but not
         verified — and that is how the report describes it. */
      h.onerror && h.onerror(
        n === "NotAllowedError" || n === "SecurityError" ? "rec.errDenied" :
        n === "NotFoundError" ? "rec.errNoDevice" :
        n === "NotSupportedError" ? "rec.errNoRecorder" : "rec.errFailed");
    });

    return { stop: stop };
  }

  function posprzataj() {
    if (strumien) { strumien.getTracks().forEach(function (t) { t.stop(); }); strumien = null; }
    rec = null;
  }

  /** Ends the recording. Safe when nothing is running. */
  function stop() {
    if (rec && rec.state !== "inactive") { try { rec.stop(); } catch (e) { posprzataj(); } }
    else posprzataj();
  }

  /** Drops the last recording from memory. The view calls this on the way out. */
  function zapomnij() { stop(); zwolnij(); }

  Recorder.dostepne = dostepne;
  Recorder.powodBraku = powodBraku;
  Recorder.typ = wspieranyTyp;
  Recorder.start = start;
  Recorder.stop = stop;
  Recorder.zapomnij = zapomnij;
  Recorder.nagrywa = function () { return !!rec && rec.state === "recording"; };
  global.Recorder = Recorder;

})(window);
