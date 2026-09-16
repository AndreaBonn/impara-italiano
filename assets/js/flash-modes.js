/* ============================================================
   flash-modes.js — how a five-minute card is asked: articles, distractors, modes.

   The same card can be flipped, picked among four, typed, heard and picked,
   or dictated. Which one, and against which wrong answers, is decided here,
   in pure functions of the card and the course. The cards themselves are
   drawn by flash-cards.js; when the session ends is flash-rules.js's
   business.

   Split out of flash-rules.js along the line the two already had: that file
   changes for session reasons (limits, the reserve, the daily allowance),
   this one for teaching reasons (what makes a choice a real question).

   Classic script. Reads Txt (norm) and Core (seededShuffle) at call time,
   so it loads after core.js.
   ============================================================ */
(function (global) {
  "use strict";

  function allLessons(levels) {
    var out = [];
    levels.forEach(function (lv) {
      (lv.units || []).forEach(function (u) { out = out.concat(u.lessons || []); });
    });
    return out;
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
    var all = allLessons(levels);
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
      vocabOf(allLessons([own.lv])),
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

  global.FlashModes = {
    STABLE_DAYS: STABLE_DAYS,
    articleOf: articleOf,
    distractors: distractors,
    tiersFor: tiersFor,
    pickMode: pickMode,
    gradeFor: gradeFor,
    audioAvailable: audioAvailable
  };

})(window);
