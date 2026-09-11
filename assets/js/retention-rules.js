/* ============================================================
   retention-rules.js — the three decisions behind coming back tomorrow.

   The course had no way of being remembered. There is no backend, so there
   is no push, and the browser offers nothing that wakes code at an agreed
   hour. What is left is three small things, and each of them is a decision
   before it is an effect — which is why the decisions live here, apart from
   the file that touches the browser, exactly as pwa-rules.js lives apart
   from pwa.js.

   WHY EACH ONE HAS A CONDITION instead of simply happening:

   - PERMANENT STORAGE. `navigator.storage.persist()` raises a permission
     prompt, and a refusal is remembered by the browser rather than by us: we
     get one attempt per profile. Spending it on somebody who has not yet
     finished a single lesson is spending it on a stranger, and this is the
     defence that keeps the whole profile alive under storage pressure — the
     course has no account and no sync, so what the browser evicts is gone.
   - INSTALLING. The offer means nothing to somebody already inside the
     installed app, and a refusal has to be final: an invitation that returns
     is the behaviour people install an ad blocker for.
   - THE BADGE. It is written when the student leaves and nothing updates it
     while they are away, so the quantity has to be one that stays true in
     their absence. See `odznaka`.

   Pure: no DOM, no storage, no clock. Everything arrives as an argument.
   Classic script. No dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  /* One finished lesson is enough to ask about storage: at that point there
     is something to lose, and the question is about not losing it. */
  var PROG_MIEJSCA = 1;

  /* Three for the installation offer. Higher than the one above because this
     one interrupts with something the student did not ask for, while the
     other protects work they have already done. */
  var PROG_INSTALACJI = 3;

  /* How far ahead the badge looks. A day, because the badge is a statement
     about tomorrow morning and it is written the evening before. */
  var HORYZONT_MS = 24 * 60 * 60 * 1000;

  /**
   * Whether to ask the browser to keep this profile under storage pressure.
   *
   * @param {{lekcje:number, pytano:boolean, trwale:boolean}} stan
   */
  function pytacOMiejsce(stan) {
    var s = stan || {};
    if (s.trwale) return false;        /* already granted */
    if (s.pytano) return false;        /* our one attempt is spent */
    return (s.lekcje || 0) >= PROG_MIEJSCA;
  }

  /**
   * Whether to offer installing the course as an app.
   *
   * @param {{lekcje:number, pytano:boolean, odrzucona:boolean, samodzielna:boolean}} stan
   */
  function proponowacInstalacje(stan) {
    var s = stan || {};
    if (s.samodzielna) return false;   /* this IS the installed app */
    if (s.odrzucona) return false;     /* asked and answered, for good */
    if (s.pytano) return false;
    return (s.lekcje || 0) >= PROG_INSTALACJI;
  }

  /**
   * The number to put on the icon.
   *
   * TWO DECKS, NOT ONE, and that is not a detail: the badge inside the course
   * — the one next to "Powtórki" — is `Core.dueCount() + Errors.dueCount()`
   * (app.js), because flashcards and the mistake notebook share a tab. A
   * badge on the icon counting only the vocabulary would show a different
   * number under the same name: seven on the home screen, twelve once the
   * course is open. Both decks keep the same `{due}` shape, so this is a
   * second deck to walk rather than a second rule to write.
   *
   * It counts cards due within HORYZONT_MS, not cards due at this instant,
   * and the difference is the whole design. The badge is written as the
   * student closes the tab and nothing touches it until they come back: a
   * count of what is due right then gives zero to everybody who has just
   * finished their reviews, which is to say the badge would stay dark for
   * precisely the people who use the course well.
   *
   * The quantity is named under that meaning in the settings ("due within a
   * day"), so it is a declared horizon rather than a wrong instant. It also
   * degrades in the safe direction: the longer the student stays away, the
   * more cards come due, so an old badge understates the work waiting and
   * never oversells it.
   *
   * @param {Array<object>} talie  decks, each card key -> {due}
   * @param {number} teraz
   */
  function odznaka(talie, teraz) {
    var granica = teraz + HORYZONT_MS;
    var n = 0;
    (Array.isArray(talie) ? talie : []).forEach(function (talia) {
      var deck = talia || {};
      Object.keys(deck).forEach(function (k) {
        var c = deck[k];
        if (!c || typeof c.due !== "number") return;
        if (c.due <= granica) n++;
      });
    });
    return n;
  }

  global.RetentionRules = {
    pytacOMiejsce: pytacOMiejsce,
    proponowacInstalacje: proponowacInstalacje,
    odznaka: odznaka,
    PROG_MIEJSCA: PROG_MIEJSCA,
    PROG_INSTALACJI: PROG_INSTALACJI,
    HORYZONT_MS: HORYZONT_MS
  };

})(window);
