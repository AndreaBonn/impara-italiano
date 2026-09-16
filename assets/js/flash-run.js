/* ============================================================
   flash-run.js — the run of one five-minute session.

   Knows nothing about the DOM. Holds the queue, the position and the count,
   grades the real deck card through Core, and says why the session ended.
   views-flash.js draws what this returns.

   ONE DECISION this code holds and which is easy to undo by accident: the
   bound is checked AFTER an answer, never in its place. `tick` only reports
   that time is up; the card on screen stays the student's until they answer
   it, and that answer is graded like any other. Ending the session on the
   timer would throw away an answer half typed, with nothing on screen to say
   it did not count.

   Classic script. Requires Core, FlashRules.
   ============================================================ */
(function (global) {
  "use strict";

  var Rules = global.FlashRules;

  /**
   * Grades the open card and moves on.
   * @param {object}  st  the run state built by create
   * @param {number}  q   the grade on the 0/3/4/5 scale Core.gradeCard takes
   * @param {boolean} ok  whether the answer was right, for the summary only
   * @param {object}  at  {now: ms, mode: how the card was asked, for the journal}
   * @returns {"cap"|"time"|"empty"|null} why the session ended, or null
   */
  function answer(st, q, ok, at) {
    if (st.powod) return st.powod;
    var c = st.kolejka[st.i];
    /* A new word joins the deck here, at its first answer, and not when the
       queue was built: a word shown and left unanswered stays out. */
    var key = c.fresh ? global.Core.addCard(c.it, c.tr, c.src) : c.key;
    if (key) global.Core.gradeCard(key, q, at.mode);
    st.i++;
    if (ok) st.dobre++;
    st.powod = Rules.isOver(st.start, at.now, st.i) || (st.i >= st.kolejka.length ? "empty" : null);
    return st.powod;
  }

  /** Whether time is up, without touching the open card. */
  function tick(st, now) {
    if (st.powod) return st.powod;
    return Rules.remaining(st.start, now) === 0 ? "time" : null;
  }

  /**
   * @param {Array}  queue cards as Core.dueCards returns them ({key, it, ...})
   * @param {number} start session start, ms
   */
  function create(queue, start) {
    var kolejka = (queue || []).slice();
    var st = { kolejka: kolejka, i: 0, dobre: 0, start: start, powod: kolejka.length ? null : "empty" };
    return {
      start: start,
      current: function () { return st.powod ? null : st.kolejka[st.i]; },
      answer: function (q, ok, now, mode) { return answer(st, q, ok, { now: now, mode: mode }); },
      tick: function (now) { return tick(st, now); },
      summary: function () { return { answered: st.i, right: st.dobre, reason: st.powod }; }
    };
  }

  global.FlashRun = { create: create };

})(window);
