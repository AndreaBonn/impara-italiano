/* ============================================================
   consent.js — consent before the voice first leaves the browser.

   The course README promised that nothing leaves the browser. That was not
   true and is not: speech recognition (`SpeechRecognition`), in the
   browsers that expose it, sends the voice recording to the vendor's server
   and sends text back. It affects 150 `speak` exercises and ten
   conversations, which means it has been happening for a long time and
   without asking anyone.

   The sentence in the README has been corrected. This module closes the
   other half: the student must FIND OUT before their voice goes out for the
   first time, not afterwards.

   THE GATE SITS IN ONE PLACE, in `Audio2.listen`, and not in the three
   views that call it today. A defence scattered across call sites works
   until the first new call site, and those are exactly what we add with
   shadowing and with the exam. One passage that cannot be bypassed is
   cheaper than three that have to be remembered.

   The consent is stored in the settings and revocable. The container is
   ADDED, so an older profile gets it empty by itself and the schema number
   does not move.

   Classic script. Requires core.js; the view supplies its own asking function.
   ============================================================ */
(function (global) {
  "use strict";

  var Consent = {};

  /* The asking function, substituted by the view layer. We refuse by
     default: a module with no interface has no way to ask, and silent
     consent is precisely what this file is there to prevent. */
  var pytaj = null;

  function ustawienia() {
    return (global.Core && global.Core.state && global.Core.state.settings) || {};
  }

  /** Whether the student has already agreed to send their voice for recognition. */
  function udzielona() { return ustawienia().sttConsent === true; }

  /** Stores the decision. `false` revokes consent given earlier. */
  function ustaw(wartosc) {
    var s = ustawienia();
    s.sttConsent = !!wartosc;
    if (global.Core && global.Core.save) global.Core.save();
  }

  /**
   * Substitutes the way the question is asked.
   * @param {function(function(boolean))} fn receives a callback with the decision
   */
  function uzyjPytania(fn) { pytaj = fn; }

  /**
   * Runs `akcja()` only if consent exists or is granted.
   *
   * @param {function} akcja  what to do once consent is given
   * @param {function} [odmowa]  what to do on refusal or with no way to ask
   */
  function zZgoda(akcja, odmowa) {
    if (udzielona()) { akcja(); return; }
    if (!pytaj) { odmowa && odmowa(); return; }
    pytaj(function (tak) {
      if (!tak) { odmowa && odmowa(); return; }
      ustaw(true);
      akcja();
    });
  }

  Consent.udzielona = udzielona;
  Consent.ustaw = ustaw;
  Consent.uzyjPytania = uzyjPytania;
  Consent.zZgoda = zZgoda;
  global.Consent = Consent;

})(window);
