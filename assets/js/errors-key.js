/* ============================================================
   errors-key.js — the identity of a mistake card.

   The key: <lesson id>#<content signature>#<twin number>

   Three parts, each for a reason:

   - the lesson id, because in the neutral layer an exercise is sometimes
     bare. A whole `mcq` is { t: "mcq", a: 1 } — the question and the
     options sit in the overlay, one per language. The content hash alone
     would collide hundreds of exercises from across the course.
   - the content signature, because an ordinal number shifts at the first
     insertion in the middle of a lesson and the card would silently start
     pointing at its neighbour. The signature is computed EXCLUSIVELY from
     neutral fields: if anything from the overlay entered it, switching
     languages would orphan the whole notebook.
   - the twin number, because a1-u01-l1 has two { t: "mcq", a: 1 }
     exercises standing next to each other. Without it they would be one card.

   The intended consequence: changing an exercise's content invalidates its
   card. Better that it stops being found than that it points at another
   exercise and shows the student a sentence they have never seen.

   Separated from errors.js, which runs the deck: these are two different
   things and the tests split the same way.

   Classic script. Requires core.js; drills.js for generated cards.
   ============================================================ */
(function (global) {
  "use strict";

  var Errors = global.Errors = global.Errors || {};

  /* ---------------- The hash ---------------- */

  /**
   * FNV-1a 32-bit. Two passes with different seeds concatenated into 16
   * characters give 64 bits without BigInt, and therefore without a
   * separate path for older browsers — unlike audio.js, where parity with
   * Python forces exactly one variant.
   */
  function fnv32(s, seed) {
    var h = seed >>> 0;
    for (var i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619) >>> 0;
    }
    return h >>> 0;
  }

  function pad8(n) {
    var s = n.toString(16);
    while (s.length < 8) s = "0" + s;
    return s;
  }

  var SEED_A = 2166136261;   // the FNV-1a offset basis
  var SEED_B = 40389;        // any other seed: what matters is a second, independent pass

  function hash(s) {
    return pad8(fnv32(s, SEED_A)) + pad8(fnv32(s, SEED_B));
  }

  /* ---------------- Canonicalising the content ---------------- */

  /**
   * Language-neutral fields, common to all types.
   * The list is closed on purpose: a field added to an exercise will not
   * enter the signature until someone deliberately writes it here. The
   * opposite rule (everything except…) would pull in overlay text at the
   * first opportunity.
   */
  var PLAIN_FIELDS = [
    "t", "a", "dir", "verb", "tense", "persons",
    "tokens", "text", "gaps", "it", "alt", "say"
  ];

  /* Array fields from which we take only the neutral sub-fields. */
  var NESTED_FIELDS = {
    pairs: ["it"],
    items: ["it", "a"],
    lines: ["sp", "it", "choices", "a"]
  };

  /**
   * `opts` is the only field that is sometimes in Italian and sometimes in
   * the student's language. In `gender` it is a closed set of Italian forms
   * that has to agree with `items[].a`, so it sits in core and counts
   * towards the signature. Everywhere else it is the translated answers —
   * letting them into the signature would mean a different card for the
   * same exercise in every language.
   */
  function optsCount(ex) { return ex.t === "gender"; }

  function part(value) {
    if (value === undefined || value === null) return "";
    if (Array.isArray(value)) return "[" + value.map(part).join(",") + "]";
    if (typeof value === "object") {
      return "{" + Object.keys(value).sort().map(function (k) {
        return k + ":" + part(value[k]);
      }).join(",") + "}";
    }
    return String(value);
  }

  /** A stable rendering of an exercise's content: the same fields, always in the same order. */
  function canon(ex) {
    var out = [];
    PLAIN_FIELDS.forEach(function (f) {
      if (ex[f] !== undefined) out.push(f + "=" + part(ex[f]));
    });
    if (optsCount(ex) && ex.opts !== undefined) out.push("opts=" + part(ex.opts));
    Object.keys(NESTED_FIELDS).forEach(function (f) {
      if (!Array.isArray(ex[f])) return;
      var sub = NESTED_FIELDS[f];
      out.push(f + "=" + ex[f].map(function (row) {
        return sub.map(function (k) { return k + ":" + part(row && row[k]); }).join("|");
      }).join(";"));
    });
    return out.join("&");
  }

  /** The content signature: the same in every language of explanation. */
  function sigOf(ex) { return hash(canon(ex)); }

  /* ---------------- The key ---------------- */

  function keyFor(lessonId, sig, twin) {
    return lessonId + "#" + sig + "#" + twin;
  }

  /**
   * The keys of all the exercises in a lesson, in order of appearance.
   * The twin number is counted on the spot, so there is no state to keep in
   * sync between writing and reading.
   */
  function keysIn(lesson) {
    var seen = {};
    return (lesson.exercises || []).map(function (ex) {
      var sig = sigOf(ex);
      var n = seen[sig] === undefined ? 0 : seen[sig] + 1;
      seen[sig] = n;
      return keyFor(lesson.id, sig, n);
    });
  }

  /** The key of one exercise; it needs the lesson in order to count twins. */
  function keyOf(lesson, index) {
    return keysIn(lesson)[index];
  }

  /* Generated tasks have neither a lesson nor content to remember: the pair
     (generator, seed) is enough, because a generator is a pure function.
     The prefix separates them from authored exercise keys within one set. */
  var GEN_PREFIX = "drill:";

  function generatedKey(topicId, seed) { return GEN_PREFIX + topicId + "#" + seed; }

  /**
   * From a key back to an exercise. Returns null when the lesson does not
   * exist, when it is not loaded, or when the exercise's content has
   * changed — and the last of those is a feature, not a fault.
   *
   * A generated card is restored the opposite way: nothing could have
   * changed, so it is enough to call the generator with the same seed. That
   * way the review view handles both kinds of card identically.
   */
  function locate(key) {
    var raw = String(key);
    if (raw.indexOf(GEN_PREFIX) === 0) {
      var cut = raw.indexOf("#");
      var topicId = raw.slice(GEN_PREFIX.length, cut);
      var seed = raw.slice(cut + 1);
      var item = global.Drills && global.Drills.make(topicId, seed);
      if (!item) return null;
      return { generated: true, ex: item.ex, index: 0, topicId: topicId, seed: seed, lesson: null };
    }

    var parts = raw.split("#");
    if (parts.length !== 3) return null;
    var found = global.Core && global.Core.getLesson(parts[0]);
    if (!found) return null;
    var keys = keysIn(found.lesson);
    var i = keys.indexOf(key);
    if (i < 0) return null;
    return { lesson: found.lesson, unit: found.unit, level: found.level, ex: found.lesson.exercises[i], index: i };
  }

  Errors.sigOf = sigOf;
  Errors.keysIn = keysIn;
  Errors.keyOf = keyOf;
  Errors.locate = locate;
  Errors.generatedKey = generatedKey;

})(window);
