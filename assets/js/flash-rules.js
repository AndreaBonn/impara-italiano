/* ============================================================
   flash-rules.js — the five-minute card session: the pure decisions.

   The screen exists for a student who has five minutes and not twenty.
   Everything here answers a question that breaks silently when answered
   wrong: when the session is over, how much time is left. A session that
   runs past its bound does not crash; it just teaches the student that
   "five minutes" was not true, and they stop opening it.

   The same split as retention-rules.js / retention.js: pure functions of
   numbers here, the clock and the DOM in views-flash.js.

   Classic script. Reads Txt (norm) and Core (seededShuffle) at call time,
   so it loads after core.js.
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

  /* ---------------- Distractors ----------------

     A choice between four words teaches something only when the wrong three
     cannot be ruled out without knowing the answer. "un gatto / una casa"
     is answered by the article alone, and "un gatto / un consiglio" by
     meaning alone, so distractors share the article and come from the same
     lesson first: a lesson's words share a topic. */

  var ARTICLE = /^(l'|un'|il |lo |la |i |gli |le |un |uno |una )/;

  /* "un po'" (a little) is an adverb, not "un" before a noun: grouped with
     "un caffè" it would sit among the drinks as a free elimination. */
  var NOT_AN_ARTICLE = /^un po'/;

  /** The article a word starts with ("il", "l'", "un'"...), or "" for none. */
  function articleOf(it) {
    if (NOT_AN_ARTICLE.test(String(it || "").toLowerCase().trim())) return "";
    var m = ARTICLE.exec(String(it || "").toLowerCase().replace(/\s+/g, " ").replace(/^ /, ""));
    return m ? m[1].replace(/ $/, "") : "";
  }

  /* Meaning compared without the glosses in parentheses: "bar (lokal)" and
     "bar" are the same answer, and offering both makes a right choice wrong. */
  function sense(tr) {
    return global.Txt.norm(String(tr || "").replace(/\([^)]*\)/g, " "));
  }

  /**
   * Up to n Italian words to set next to the answer.
   *
   * @param {object} answer {it, tr}
   * @param {Array}  tiers  lists of {it, tr}, nearest first (lesson, unit, level)
   * @param {number} n      how many are wanted
   * @param {string} seed   same seed, same options: a reload must not reshuffle
   * @returns {Array<string>} possibly fewer than n; the caller decides if that is enough
   */
  function distractors(answer, tiers, n, seed) {
    var art = articleOf(answer.it);
    var seen = {};
    seen[global.Txt.norm(answer.it)] = true;
    var zly = sense(answer.tr);
    var out = [];
    tiers.forEach(function (tier, t) {
      if (out.length >= n) return;
      global.Core.seededShuffle(tier, seed + "#" + t).forEach(function (w) {
        if (out.length >= n || !w || !w.it) return;
        var k = global.Txt.norm(w.it);
        if (seen[k] || articleOf(w.it) !== art || sense(w.tr) === zly) return;
        seen[k] = true;
        out.push(w.it);
      });
    });
    return out;
  }

  function vocabOf(lessons) {
    var out = [];
    lessons.forEach(function (l) {
      (l.vocab || []).forEach(function (v) { if (v.it && v.tr) out.push({ it: v.it, tr: v.tr }); });
    });
    return out;
  }

  /**
   * Where a card's distractors come from, nearest first. A card whose source
   * is a lesson gets that lesson, its unit, its level, then everything
   * loaded; a card from an import or the coverage screen has no lesson to be
   * near, so it gets everything loaded.
   */
  function tiersFor(src, levels) {
    var all = lessonsOf(levels, function () { return true; });
    var own = null;
    levels.forEach(function (lv) {
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).forEach(function (l) { if (l.id === src) own = { l: l, u: u, lv: lv }; });
      });
    });
    if (!own) return [vocabOf(all)];
    return [
      vocabOf([own.l]),
      vocabOf(own.u.lessons || []),
      vocabOf(lessonsOf([own.lv], function () { return true; })),
      vocabOf(all)
    ];
  }

  /* ---------------- Modes ----------------

     One card, several ways of asking. Recognising a word comes before
     producing it, so the card's FSRS stability picks the family: a card
     still being learned is recognised (pick or flip), a card that has held
     for three weeks is produced (typed or flip). Inside a family the mode
     turns with the day, so the same word is not always asked the same way. */

  var STABLE_DAYS = 21;

  function hash(text) {
    var h = 2166136261;
    for (var i = 0; i < text.length; i++) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }

  /**
   * @param {object} card  a deck card ({key, st, s}) or a reserve word ({fresh: true})
   * @param {object} avail {choice: whether enough distractors exist,
   *                        audio: whether the word may be heard (audioAvailable)}
   * @param {string} day   the date, so the mode holds for a day and then turns
   * @returns {"flip"|"choice"|"write"}
   */
  function pickMode(card, avail, day) {
    /* A word never seen cannot be picked or typed, only recognised on sight. */
    if (card.fresh) return "flip";
    var stable = typeof card.s === "number" && card.st === "review" && card.s >= STABLE_DAYS;
    var family;
    if (stable) {
      family = avail.audio ? ["write", "flip", "listen-write"] : ["write", "flip"];
    } else if (avail.choice) {
      family = avail.audio ? ["choice", "flip", "listen-choice"] : ["choice", "flip"];
    } else {
      family = ["flip"];
    }
    return family[hash(String(card.key) + "|" + day) % family.length];
  }

  /**
   * The grade FSRS receives. A right pick is "with effort" (3), not "good":
   * choosing among four is easier than recalling, and grading it as recall
   * would stretch the interval until the word comes back when the student
   * can no longer produce it.
   */
  function gradeFor(mode, ok, selfGrade) {
    if (mode === "choice" || mode === "listen-choice") return ok ? 3 : 0;
    return selfGrade;
  }

  /**
   * Whether a card may be asked by ear. Only a recording will do: system
   * synthesis on Linux is espeak, and a listening card read by it teaches
   * the wrong sounds. A student who picked the system voice in Settings gets
   * that voice everywhere, so this screen does not quietly override the
   * choice; it just stops asking by ear.
   */
  function audioAvailable(hasRecording, voiceSource) {
    return !!hasRecording && voiceSource !== "system";
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
    compose: compose,
    STABLE_DAYS: STABLE_DAYS,
    articleOf: articleOf,
    distractors: distractors,
    tiersFor: tiersFor,
    pickMode: pickMode,
    gradeFor: gradeFor,
    audioAvailable: audioAvailable
  };

})(window);
