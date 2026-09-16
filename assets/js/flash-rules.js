/* ============================================================
   flash-rules.js — the five-minute card session: the pure decisions.

   The screen exists for a student who has five minutes and not twenty.
   Everything here answers a question that breaks silently when answered
   wrong: when the session is over, how much time is left. A session that
   runs past its bound does not crash; it just teaches the student that
   "five minutes" was not true, and they stop opening it.

   The same split as retention-rules.js / retention.js: pure functions of
   numbers here, the clock and the DOM in views-flash.js.

   Classic script. No dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  /* Whichever comes first. Twenty cards is the ceiling for a student who
     answers fast; five minutes the ceiling for one who does not. */
  var LIMITS = { ms: 5 * 60000, cards: 20 };

  /**
   * Why the session is over, or null while it is not.
   *
   * Checked only BETWEEN cards, never during one: a timer that cut a card in
   * half would leave an answer typed and never graded, which looks to the
   * student like the course ate it.
   *
   * @param {number} start    session start, ms
   * @param {number} now      current time, ms
   * @param {number} answered cards answered so far
   * @returns {"cap"|"time"|null}
   */
  function isOver(start, now, answered) {
    if (answered >= LIMITS.cards) return "cap";
    if (now - start >= LIMITS.ms) return "time";
    return null;
  }

  /** Milliseconds left, clamped to [0, LIMITS.ms] so a clock moved backwards gives no bonus. */
  function remaining(start, now) {
    return Math.max(0, Math.min(LIMITS.ms, LIMITS.ms - (now - start)));
  }

  /**
   * "m:ss". A started second rounds UP: showing 0:00 while a few hundred
   * milliseconds are left would tell the student the time is over when the
   * session is still waiting for their answer.
   */
  function clock(ms) {
    var s = Math.ceil(Math.max(0, ms) / 1000);
    var m = Math.floor(s / 60);
    var r = s % 60;
    return m + ":" + (r < 10 ? "0" : "") + r;
  }

  global.FlashRules = {
    LIMITS: LIMITS,
    isOver: isOver,
    remaining: remaining,
    clock: clock
  };

})(window);
