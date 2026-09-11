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

  /* ============================================================
     The second thing that leaves the browser: the student's sentences.

     A separate consent rather than a wider reading of the first one, for
     two reasons. It is a different fact — the voice goes to the browser
     vendor, the sentences go to whichever of four companies the student
     picked — and it is a different decision: somebody who accepts speech
     recognition has not thereby accepted sending their written answers to
     an American company, and revoking one must not revoke the other.

     Same shape as above, and for the same reason: the gate lives in one
     place (llm.js), not in the views that will come to call it.
     ============================================================ */

  var pytajLlm = null;

  /** Whether the student agreed to send their answers to a model provider. */
  function udzielonaLlm() { return ustawienia().llmConsent === true; }

  /** Stores the decision. `false` revokes consent given earlier. */
  function ustawLlm(wartosc) {
    var s = ustawienia();
    s.llmConsent = !!wartosc;
    if (global.Core && global.Core.save) global.Core.save();
  }

  function uzyjPytaniaLlm(fn) { pytajLlm = fn; }

  /** Runs `akcja()` only if consent exists or is granted. */
  function zZgodaLlm(akcja, odmowa) {
    if (udzielonaLlm()) { akcja(); return; }
    if (!pytajLlm) { odmowa && odmowa(); return; }
    pytajLlm(function (tak) {
      if (!tak) { odmowa && odmowa(); return; }
      ustawLlm(true);
      akcja();
    });
  }

  /* ============================================================
     The third thing that leaves the browser: a whole conversation.

     A separate consent again, and for the reason that made the second one
     separate: it is a different FACT. The judge sends one sentence of the
     student's and the sentences it was compared against; the free
     conversation sends everything they have said in that scene, turn after
     turn, to a company of their choosing. Somebody who agreed to have an
     answer checked has not agreed to that, and revoking one must not revoke
     the other.

     Same shape as the two above, same reason: the gate lives in one place
     (`Llm.chat`), not in the view that happens to call it.
     ============================================================ */

  var pytajChat = null;

  /** Whether the student agreed to send a whole conversation to a provider. */
  function udzielonaChat() { return ustawienia().llmChatConsent === true; }

  /** Stores the decision. `false` revokes consent given earlier. */
  function ustawChat(wartosc) {
    var s = ustawienia();
    s.llmChatConsent = !!wartosc;
    if (global.Core && global.Core.save) global.Core.save();
  }

  function uzyjPytaniaChat(fn) { pytajChat = fn; }

  /** Runs `akcja()` only if consent exists or is granted. */
  function zZgodaChat(akcja, odmowa) {
    if (udzielonaChat()) { akcja(); return; }
    if (!pytajChat) { odmowa && odmowa(); return; }
    pytajChat(function (tak) {
      if (!tak) { odmowa && odmowa(); return; }
      ustawChat(true);
      akcja();
    });
  }

  Consent.udzielona = udzielona;
  Consent.ustaw = ustaw;
  Consent.uzyjPytania = uzyjPytania;
  Consent.zZgoda = zZgoda;
  Consent.udzielonaLlm = udzielonaLlm;
  Consent.ustawLlm = ustawLlm;
  Consent.uzyjPytaniaLlm = uzyjPytaniaLlm;
  Consent.zZgodaLlm = zZgodaLlm;
  Consent.udzielonaChat = udzielonaChat;
  Consent.ustawChat = ustawChat;
  Consent.uzyjPytaniaChat = uzyjPytaniaChat;
  Consent.zZgodaChat = zZgodaChat;
  global.Consent = Consent;

})(window);
