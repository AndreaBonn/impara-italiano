/* ============================================================
   srs.js — the review deck: what the student repeats today and when it returns.

   Pulled out of core.js, where it sat next to lesson progress without
   sharing a single call with it: two independent things in one file.
   Only the deck lives here.

   Two algorithms at once, and that is deliberate, not a leftover:
   - `schedule` is SM-2 and since F1 serves the mistake notebook ONLY
     (errors.js), which drops a card before SM-2 ever reaches the
     `interval * ef` branch;
   - the vocabulary deck runs on FSRS (`gradeCard`), with the parameters
     from fsrs.js and the retention from the student's settings.

   SM-2 cards move to FSRS one at a time, at their first review after the
   change (`naFsrs`): a bulk migration would shift the due dates of cards
   the student is not even going to see today.
   ============================================================ */
(function (global) {
  "use strict";

  var Store = global.Store;
  var save = Store.save;
  var cardKey = Store.cardKey;
  var isForbidden = Store.isForbidden;
  var norm = global.Txt.norm;
  var registry = global.Registry.registry;

  /* ---------------- SRS: SM-2 (simplified) ----------------
     A card = a unit to memorise (a word or a rule).
     grade q: 0 = wrong, 3 = with effort, 4 = good, 5 = easy
     ------------------------------------------------------- */
  var DAY = 86400000;

  /**
   * Adds a card or — if it already exists — only the translation in the
   * current language. That way a student who switches to English does not
   * lose the review schedule: the same card gains a second gloss.
   */
  /**
   * Adds a card. Returns the key, or `null` when the content is rejected.
   *
   * REJECTING RESERVED KEYS. `merge()` filters out `__proto__`,
   * `constructor` and `prototype`, but this path does not go through it: it
   * goes straight from `cardKey` to `Store.state.srs[k] = {…}`, and `norm()`
   * leaves underscores alone. A card with such content would set the
   * PROTOTYPE of the object instead of creating a property on it — it would
   * disappear from `Object.keys` and from the save, and reading any missing
   * key would start hitting the substituted object. Silently, because
   * nothing crashes.
   *
   * Unreachable until now: only the course created cards. Importing someone
   * else's deck from a file turns this into a vector, so the defence comes
   * in together with it. We reject rather than rename: these are not Italian
   * words and there is nothing to save, and renaming would leave a key in
   * the deck the student cannot connect to anything.
   */
  function addCard(it, tr, src) {
    var k = cardKey(it);
    if (!k || isForbidden(k)) return null;
    var lang = Store.state.settings.lang;
    var card = Store.state.srs[k];
    if (!card) {
      card = Store.state.srs[k] = { it: it, tr: {}, src: src || "", ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0 };
    }
    if (tr && card.tr[lang] !== tr) { card.tr[lang] = tr; }
    save();
    return k;
  }

  /**
   * A card's translation in the current language. Three sources, in this order:
   * 1. the gloss stored on the card,
   * 2. the dictionary of the loaded course — a card added in Polish should
   *    show the English meaning here once the student switches languages,
   *    without waiting for the lesson to be redone,
   * 3. any gloss the card has, because an empty row is worse than a foreign one.
   *
   * The result taken from the course is NOT written back to the card: if the
   * overlay for that language were not loaded yet, we would store the Polish
   * text under the "en" key for good.
   */
  function cardTr(card) {
    if (!card || !card.tr) return "";
    var lang = Store.state.settings.lang;
    if (card.tr[lang]) return card.tr[lang];

    var fromCourse = registry.vocabIndex[norm(card.it)];
    if (fromCourse) return fromCourse;

    var any = Object.keys(card.tr).filter(function (k) { return card.tr[k]; });
    return any.length ? card.tr[any[0]] : "";
  }

  /**
   * The SM-2 schedule on any card: {ef, reps, interval, due, lapses}.
   *
   * Split out of gradeCard, because the mistake notebook (errors.js) runs a
   * second deck by the same rules. Two copies of this arithmetic would drift
   * apart at the first threshold change — and silently, because both would
   * keep working.
   *
   * SINCE F1 IT SERVES THE MISTAKE NOTEBOOK ONLY. The vocabulary deck is on
   * FSRS (see gradeCard below). Left here rather than moved into errors.js,
   * because it is still schedule arithmetic and not notebook logic, and it
   * is still part of the public API as `Core.schedule`.
   */
  function schedule(c, q) {
    if (q < 3) {
      c.reps = 0;
      c.interval = 0;
      c.lapses = (c.lapses || 0) + 1;
      c.due = Date.now() + 10 * 60000;   // repeat within the same session, in 10 min
    } else {
      c.reps = (c.reps || 0) + 1;
      if (c.reps === 1) c.interval = 1;
      else if (c.reps === 2) c.interval = 3;
      else c.interval = Math.round(c.interval * c.ef);
      c.ef = Math.max(1.3, c.ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)));
      c.due = Date.now() + c.interval * DAY;
    }
    return c;
  }

  /* ---------------- FSRS on the vocabulary deck ----------------

     The vocabulary deck moves to FSRS, the mistake notebook stays on the
     SM-2 above. That is not an inconsistency but a conclusion drawn from
     measurement: errors.js drops a card at `ok && reps >= 2`
     (GRADUATE_REPS), while the `interval * ef` branch in `schedule` only
     starts at `reps >= 3`. A notebook card NEVER gets there — `ef` is
     written there and never read. Swapping the algorithm somewhere invisible
     enlarges the surface for no gain at all.

     The grade scale in the interface stayed the same (0/3/4/5), because
     those are labels the student already knows, and changing their meaning
     alongside a change of engine would mix two things into one step.
     ------------------------------------------------------- */

  var OCENA_FSRS = { 0: 1, 3: 2, 4: 3, 5: 4 };   // again / hard / good / easy

  /**
   * Moves an SM-2 card onto FSRS rails at its FIRST review after the change.
   *
   * There is no bulk migration and there must not be one: recomputing the
   * whole deck at startup would shift the due dates of cards the student is
   * not going to touch today, and the schema number stays at 2 precisely
   * because no existing field changes meaning (R1). `ef` becomes ballast on
   * old cards: we do not read it outside this single conversion.
   *
   * The mapping is approximate and cannot be otherwise — SM-2 stores nothing
   * from which stability could be reconstructed. We take what carries
   * meaning: the current interval IS an estimate of stability (that is how
   * many days the card held), and `ef` maps onto difficulty inversely,
   * because a high `ef` means an easy card while high FSRS difficulty means
   * a hard one.
   */
  function naFsrs(c) {
    if (typeof c.s === "number" && typeof c.d === "number") return c;
    if (!c.reps) return c;                     // a new card starts from zero in FSRS
    var interval = c.interval || 1;
    var ef = typeof c.ef === "number" ? c.ef : 2.5;
    c.st = "review";
    c.step = null;
    c.s = Math.max(interval, 0.001);
    c.d = Math.min(Math.max(10 - (ef - 1.3) * 7.5, 1), 10);
    c.last = (c.due || Date.now()) - interval * DAY;
    return c;
  }

  /* The engine depends only on retention, and that changes once in a blue
     moon: we keep the last one instead of building it on every answer. */
  var silnikCache = { retencja: null, silnik: null };

  function silnikFsrs() {
    var r = Store.state.settings.retention || 0.9;
    if (silnikCache.retencja !== r) {
      silnikCache = { retencja: r, silnik: global.Fsrs.silnik({ retencja: r }) };
    }
    return silnikCache.silnik;
  }

  /**
   * @param {string} key
   * @param {number} q    0/3/4/5
   * @param {string} [mode] how the card was asked (views-flash.js). Written
   *   to the journal when it is not the default "write": once recognition and
   *   recall reviews are mixed there is no telling them apart afterwards, and
   *   an FSRS optimiser fed both as recall learns the wrong curve.
   */
  function gradeCard(key, q, mode) {
    var c = Store.state.srs[key];
    if (!c) return null;

    naFsrs(c);
    var wynik = silnikFsrs().powtorz(
      typeof c.s === "number" ? c : null,
      OCENA_FSRS[q] || 3,
      Date.now()
    );

    c.st = wynik.st;
    c.step = wynik.step;
    c.s = wynik.s;
    c.d = wynik.d;
    c.due = wynik.due;
    c.last = wynik.last;
    /* `reps`, `interval` and `lapses` keep their meaning, because the
       dictionary view and the statistics read them. `interval` in days, as
       it has been so far. */
    if (q === 0) { c.reps = 0; c.lapses = (c.lapses || 0) + 1; }
    else c.reps = (c.reps || 0) + 1;
    c.interval = Math.max(0, Math.round((wynik.due - wynik.last) / DAY));

    zapiszPowtorke(key, q, wynik.last, mode);
    save();
    return c;
  }

  /* How many reviews we keep. A record is three fields, about 40 bytes: five
     thousand is some 200 kB against a 5 MB quota shared with everything else.
     The FSRS optimiser needs on the order of a thousand, so the ceiling has
     room to spare. */
  var MAX_REVIEWS = 5000;

  function zapiszPowtorke(key, q, kiedy, mode) {
    if (!Array.isArray(Store.state.reviews)) Store.state.reviews = [];
    var wpis = { k: key, t: kiedy, q: q };
    if (mode && mode !== "write") wpis.m = mode;
    Store.state.reviews.push(wpis);
    /* We trim from the oldest: recent history describes memory as it is now,
       and that is what has value for tuning. */
    if (Store.state.reviews.length > MAX_REVIEWS) {
      Store.state.reviews.splice(0, Store.state.reviews.length - MAX_REVIEWS);
    }
  }

  function dueCards(limit) {
    var now = Date.now(), out = [];
    Object.keys(Store.state.srs).forEach(function (k) {
      if (Store.state.srs[k].due <= now) out.push(Object.assign({ key: k }, Store.state.srs[k]));
    });
    out.sort(function (a, b) { return a.due - b.due; });
    return limit ? out.slice(0, limit) : out;
  }

  function dueCount() { return dueCards().length; }

  global.Srs = {
    addCard: addCard, cardTr: cardTr,
    schedule: schedule, gradeCard: gradeCard,
    dueCards: dueCards, dueCount: dueCount,
    /* Exposed like Errors.GRADUATE_REPS: it is a number that came from a
       decision, not an implementation detail, so the test should read it
       from here instead of repeating it. */
    MAX_REVIEWS: MAX_REVIEWS
  };

})(window);
