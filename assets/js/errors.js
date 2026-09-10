/* ============================================================
   errors.js — quaderno degli errori: the deck and the capture.

   The identity of a card (key, content signature, finding the exercise)
   sits in errors-key.js and must be loaded earlier.

   Classic script. Requires core.js and errors-key.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Errors = global.Errors = global.Errors || {};

  /* The identity functions, exposed by errors-key.js. */
  var keyOf = Errors.keyOf;
  var generatedKey = Errors.generatedKey;


  /* ---------------- The deck ---------------- */

  /**
   * How many correct answers in a row retire a card from the notebook.
   *
   * Two, that is intervals of 1 day and 3 days under SM-2, and then it is
   * over. This is a product decision (C1 in § 7.6 of the plan), not a fact
   * following from the code: with a lower threshold the notebook empties
   * faster than the student learns, with a higher one it turns into a
   * second flashcard deck.
   */
  var GRADUATE_REPS = 2;

  /** A boolean answer mapped onto the SM-2 scale. */
  function quality(ok) { return ok ? 5 : 2; }

  function bag() { return global.Core.state.errors; }

  /** Which tag describes this exercise: its own, or failing that the lesson's first. */
  function tagFor(lesson, ex) {
    if (ex && ex.tag) return ex.tag;
    return (lesson.tags || [])[0] || null;
  }

  /**
   * Records an answer on a lesson exercise.
   *
   * A correct answer on an exercise that is not in the notebook does not
   * create a card: the set is meant to hold what the student does NOT
   * know. A correct answer on an existing card moves it forward, because
   * doing it right during a lesson counts the same as doing it right in a
   * review.
   */
  function record(lesson, index, ok) {
    var ex = (lesson.exercises || [])[index];
    if (!ex) return null;
    var key = keyOf(lesson, index);
    var deck = bag();
    var card = deck[key];

    if (!card && ok) return null;
    if (!card) {
      card = deck[key] = {
        kind: "authored",
        tag: tagFor(lesson, ex),
        srcId: lesson.id,
        ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0, ts: Date.now()
      };
    }
    global.Core.schedule(card, quality(ok));
    var out = withKey(key, card);
    if (ok && card.reps >= GRADUATE_REPS) delete deck[key];
    global.Core.save();
    return out;
  }

  /**
   * Records an answer on a generated task.
   *
   * The same threshold and schedule logic as for authored exercises, but a
   * different identity: the tag comes from the generator rather than the
   * lesson, and the card carries `kind: "generated"`. The distinction is
   * declared rather than implicit — two species of card with different
   * granularity live in one set and the view has to know which one it holds.
   */
  function recordGenerated(item, ok) {
    if (!item) return null;
    var key = generatedKey(item.topicId, item.seed);
    var deck = bag();
    var card = deck[key];

    if (!card && ok) return null;
    if (!card) {
      card = deck[key] = {
        kind: "generated",
        tag: item.tag,
        srcId: item.topicId,
        ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0, ts: Date.now()
      };
    }
    global.Core.schedule(card, quality(ok));
    var out = withKey(key, card);
    if (ok && card.reps >= GRADUATE_REPS) delete deck[key];
    global.Core.save();
    return out;
  }

  /**
   * Removes a card whose exercise no longer exists.
   *
   * A review shows the REAL exercise from the lesson rather than a separate
   * flashcard with its own grading — that way updating goes down the same
   * path as answering during a lesson and there is no second place to
   * maintain. When the exercise's content has changed in the course,
   * however, locate() finds nothing and the card has nothing to show: then
   * it leaves this way.
   */
  function drop(key) {
    var deck = bag();
    if (!deck[key]) return false;
    delete deck[key];
    global.Core.save();
    return true;
  }

  function withKey(key, card) {
    var out = { key: key };
    Object.keys(card).forEach(function (k) { out[k] = card[k]; });
    return out;
  }

  /** The cards whose due date has passed, the most urgent first. */
  function due(limit) {
    var now = Date.now(), deck = bag(), out = [];
    Object.keys(deck).forEach(function (k) {
      if (deck[k].due <= now) out.push(withKey(k, deck[k]));
    });
    out.sort(function (a, b) { return a.due - b.due; });
    return limit ? out.slice(0, limit) : out;
  }

  function dueCount() { return due().length; }

  /** All the cards grouped by topic — for the "where do I stand" view. */
  function byTag() {
    var deck = bag(), out = {};
    Object.keys(deck).forEach(function (k) {
      var t = deck[k].tag || "?";
      (out[t] || (out[t] = [])).push(withKey(k, deck[k]));
    });
    return out;
  }

  /* ---------------- Capturing answers ---------------- */

  /**
   * Wraps Ex.build so that every answer reaches the notebook.
   *
   * What is wrapped is `wire` alone, not the building and not any of the
   * thirteen builders: each of them still calls its own onDone exactly
   * once, and we add ourselves alongside. If instead every builder had to
   * call Errors.record itself, there would be thirteen places to forget at
   * the fourteenth type — and forgetting would produce no symptom at all.
   *
   * The `seed` that views.js passes as the third argument is the lesson id
   * (views.js:313). That is how we know which lesson an exercise belongs
   * to, without threading anything new through the whole chain.
   */
  function install(Ex) {
    if (!Ex || Ex.recordsErrors) return false;
    var original = Ex.build;

    Ex.build = function (ex, idx, seed) {
      var built = original(ex, idx, seed);
      var wire = built.wire;
      built.wire = function (root, onDone) {
        return wire(root, function (ok) {
          noteAnswer(ex, idx, seed, ok);
          if (onDone) onDone(ok);
        });
      };
      return built;
    };

    Ex.recordsErrors = true;
    return true;
  }

  /**
   * The record is only written when the exercise REALLY is the one the seed
   * and the index point at. Otherwise a card would be created under someone
   * else's key — for instance when an exercise is built outside a lesson,
   * where the seed is an arbitrary string.
   */
  function noteAnswer(ex, idx, seed, ok) {
    var Core = global.Core;
    if (!Core || typeof seed !== "string") return;
    var found = Core.getLesson(seed);
    if (!found) return;
    if ((found.lesson.exercises || [])[idx] !== ex) return;
    record(found.lesson, idx, ok);
  }

  Errors.install = install;
  Errors.record = record;
  Errors.recordGenerated = recordGenerated;
  Errors.drop = drop;
  Errors.due = due;
  Errors.dueCount = dueCount;
  Errors.byTag = byTag;
  Errors.GRADUATE_REPS = GRADUATE_REPS;

  global.Errors = Errors;

  /* exercises.js comes earlier in index.html, so Ex already exists.
     In unit tests, where we load the state engine alone, it does not, and
     install() returns without effect — the notebook works without exercises
     too. */
  install(global.Ex);

})(window);
