/* ============================================================
   recorder.js — nagrywanie głosu ucznia.

   Po co, skoro kurs ma już rozpoznawanie mowy: bo tamto porównuje
   TRANSKRYPCJĘ z oczekiwanym napisem, czyli mierzy słowa, nie dźwięk.
   Uczeń może wymawiać „gli" jak „li" i dostawać pełne punkty. Shadowing
   nie ocenia niczego — daje usłyszeć własny głos zaraz po lektorze, i to
   ucho robi resztę. To jedyna rzecz w tym kursie, której nie da się
   podrobić automatem.

   CO WIEMY Z POMIARU (spike T080, nie z dokumentacji):

   - Chromium na localhost i z `file://`: nagrywa, 4924 bajty w
     `audio/webm;codecs=opus` na 0,8 sekundy. `isSecureContext` jest
     prawdziwe także dla plików lokalnych, więc założenie „to nie zadziała
     z dysku" było fałszywe;
   - obsługiwane typy to `audio/webm`, `audio/webm;codecs=opus` i
     `audio/mp4`. NIE MA ogg ani wav;
   - Safari ma MediaRecorder od 14.1 (macOS) i 14.5 (iOS), ale do iOS 18.3
     tylko `audio/mp4` z AAC. Dlatego typ jest NEGOCJOWANY, nie wpisany na
     sztywno: wpisany „webm" wyłączyłby funkcję dla każdego iPhone'a
     starszego niż marzec 2025;
   - nagrywanie musi wystartować z gestu użytkownika.

   NAGRANIA NIE SĄ ZAPISYWANE. Żyją w pamięci na czas ćwiczenia i giną
   przy zamknięciu. `localStorage` to jedna kwota pięciu megabajtów dzielona
   z postępami lekcji, a blob audio zjadłby ją w kilkanaście prób; potarcie
   chroni postępy, ale nie jest pisane pod zalew blobów.

   Skrypt klasyczny. Bez zależności.
   ============================================================ */
(function (global) {
  "use strict";

  var Recorder = {};

  /* Kolejność ma znaczenie: opus jest mniejszy i lepszy, mp4 jest jedynym,
     który zna starszy iPhone. Pusty łańcuch = niech przeglądarka wybierze. */
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
   * Dlaczego nagrywanie jest niedostępne — albo `null`, gdy jest dostępne.
   *
   * Zwracamy KLUCZ napisu, nie zdanie: kurs mówi pięcioma językami, a to
   * jest komunikat, który uczeń czyta dokładnie wtedy, gdy coś nie działa.
   * Sprawdzenie idzie po kolei od najbardziej podstawowego, żeby powód był
   * najwęższy z prawdziwych, a nie pierwszy z brzegu.
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

  /* Stan modułu. Jedno nagranie naraz: dwa strumienie z mikrofonu to dwie
     czerwone kropki w pasku przeglądarki i pytanie, które z nich słychać. */
  var strumien = null;
  var rec = null;
  var urlOstatni = null;

  /** Zwalnia poprzedni obiekt URL. Bez tego każda próba zostawia blob w pamięci. */
  function zwolnij() {
    if (urlOstatni) { global.URL.revokeObjectURL(urlOstatni); urlOstatni = null; }
  }

  /**
   * Prosi o mikrofon i zaczyna nagrywać.
   *
   * @param {object} h  {onstart, onstop({url,blob,ms}), onerror(kluczNapisu)}
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
      /* Odmowa uprawnienia i brak urządzenia to dwie różne sytuacje i uczeń
         musi wiedzieć, na którą patrzy: pierwszą odkręca sam w pasku adresu,
         drugiej nie odkręci wcale. */
      var n = e && e.name;
      /* `NotSupportedError` produkuje headless Chromium przy odmowie w
         teście; prawdziwa przeglądarka daje wtedy `NotAllowedError`. Ścieżki
         PRAWDZIWEJ odmowy nie da się tu odtworzyć, więc jest zmapowana, ale
         nie sprawdzona — i tak jest zapisane w raporcie. */
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

  /** Kończy nagrywanie. Bezpieczne, gdy nic nie trwa. */
  function stop() {
    if (rec && rec.state !== "inactive") { try { rec.stop(); } catch (e) { posprzataj(); } }
    else posprzataj();
  }

  /** Wyrzuca ostatnie nagranie z pamięci. Woła to widok przy wyjściu. */
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
