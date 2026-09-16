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
   * @param {Array}  queue cards as Core.dueCards returns them ({key, it, ...})
   * @param {number} start session start, ms
   */
  function create(queue, start) {
    var kolejka = (queue || []).slice();
    var i = 0;
    var dobre = 0;
    var powod = kolejka.length ? null : "empty";

    function current() {
      return powod ? null : kolejka[i];
    }

    /**
     * Grades the open card and moves on.
     * @param {number}  q   the grade on the 0/3/4/5 scale Core.gradeCard takes
     * @param {boolean} ok  whether the answer was right, for the summary only
     * @param {number}  now ms
     * @param {string}  [mode] how the card was asked, for the review journal
     * @returns {"cap"|"time"|"empty"|null} why the session ended, or null
     */
    function answer(q, ok, now, mode) {
      if (powod) return powod;
      var c = kolejka[i];
      /* A new word joins the deck here, at its first answer, and not when the
         queue was built: a word shown and left unanswered stays out. */
      var key = c.fresh ? global.Core.addCard(c.it, c.tr, c.src) : c.key;
      if (key) global.Core.gradeCard(key, q, mode);
      i++;
      if (ok) dobre++;
      powod = Rules.isOver(start, now, i) || (i >= kolejka.length ? "empty" : null);
      return powod;
    }

    /** Whether time is up, without touching the open card. */
    function tick(now) {
      if (powod) return powod;
      return Rules.remaining(start, now) === 0 ? "time" : null;
    }

    function summary() {
      return { answered: i, right: dobre, reason: powod };
    }

    return { current: current, answer: answer, tick: tick, summary: summary, start: start };
  }

  global.FlashRun = { create: create };

})(window);
