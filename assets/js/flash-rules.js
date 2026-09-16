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

  /* ---------------- The reserve deck ----------------

     A student with nothing due still opened the screen for five minutes of
     work. The reserve fills the session with words from the lessons they
     finished, and a new word becomes a deck card only once it is answered:
     adding the whole reserve up front would grow the "due" badge by words the
     student never saw. */

  /* A product decision, not a measurement: ten new words a day keeps the
     reviews they cause tomorrow inside a five-minute session. */
  var NEW_PER_DAY = 10;

  /** "a1-u01-l1" -> "A1", when that level is registered; null otherwise. */
  function levelOfLesson(id, codes) {
    var code = String(id || "").split("-")[0].toUpperCase();
    return code && codes.indexOf(code) !== -1 ? code : null;
  }

  function lessonsOf(levels, pick) {
    var out = [];
    levels.forEach(function (lv) {
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).forEach(function (l) { if (pick(l, u)) out.push(l); });
      });
    });
    return out;
  }

  /**
   * New words for the session, in course order.
   *
   * @param {Array}  levels Core.registry.levels (only loaded units are seen)
   * @param {object} opts   {isDone(id), inDeck(key), keyOf(it), unitId?}
   * @returns {Array} [{it, tr, src, fresh: true}]
   *
   * The gloss comes from the word's OWN lesson: registry.vocabIndex keeps
   * the last lesson indexed, and the same word glossed differently in two
   * lessons would show the student a translation from a lesson they have not
   * reached. Without anything finished the first unit stands in, so a new
   * student is never shown an empty screen.
   */
  function reserve(levels, opts) {
    var lekcje;
    if (opts.unitId) {
      lekcje = lessonsOf(levels, function (l, u) { return u.id === opts.unitId; });
    } else {
      lekcje = lessonsOf(levels, function (l) { return opts.isDone(l.id); });
      if (!lekcje.length) {
        var pierwsza = null;
        lessonsOf(levels, function (l, u) { if (!pierwsza) pierwsza = u.id; return false; });
        lekcje = lessonsOf(levels, function (l, u) { return u.id === pierwsza; });
      }
    }
    var seen = {};
    var out = [];
    lekcje.forEach(function (l) {
      (l.vocab || []).forEach(function (v) {
        if (!v.it || !v.tr) return;
        var k = opts.keyOf(v.it);
        if (!k || seen[k] || opts.inDeck(k)) return;
        seen[k] = true;
        out.push({ it: v.it, tr: v.tr, src: l.id, fresh: true });
      });
    });
    return out;
  }

  /**
   * How many keys had their FIRST review at or after dayStart. The journal
   * is trimmed from the oldest end past Srs.MAX_REVIEWS, so for a very long
   * history an old card can look new: that errs towards fewer new words,
   * which is the safe side.
   */
  function newToday(reviews, dayStart) {
    var first = {};
    (reviews || []).forEach(function (r) {
      if (!(r.k in first) || r.t < first[r.k]) first[r.k] = r.t;
    });
    return Object.keys(first).filter(function (k) { return first[k] >= dayStart; }).length;
  }

  /** Due cards first, then new words, within the card cap and today's allowance. */
  function compose(due, fresh, newSoFar) {
    var q = due.slice(0, LIMITS.cards);
    var room = Math.min(LIMITS.cards - q.length, Math.max(0, NEW_PER_DAY - newSoFar));
    return q.concat(fresh.slice(0, room));
  }

  global.FlashRules = {
    LIMITS: LIMITS,
    NEW_PER_DAY: NEW_PER_DAY,
    isOver: isOver,
    remaining: remaining,
    clock: clock,
    levelOfLesson: levelOfLesson,
    reserve: reserve,
    newToday: newToday,
    compose: compose
  };

})(window);
