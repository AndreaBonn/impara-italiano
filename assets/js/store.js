/* ============================================================
   store.js — persistent state: save, load, migrations, file import.

   Pulled out of core.js, which because of it was three modules in one
   file: browser storage, the review schedule and learning progress.
   Only the first of those lives here, that is everything that touches
   localStorage.

   Two things hold this file together and must not be split apart:
   - `state` is ONE object under one key, so a failed write loses
     everything at once — hence the pruning inside persist(), rather than
     "we will save the rest next time";
   - `cardKey` lives here, not next to the SRS, because it is the identity
     of a record in the state: both the v1 -> v2 migration and the deck use
     it. Two definitions would drift apart silently, and the symptom would
     be an orphaned deck.

   Core re-exposes all of this under the existing names (Core.state,
   Core.save, Core.importState, …), so nobody outside changes a line.
   ============================================================ */
(function (global) {
  "use strict";

  var norm = global.Txt.norm;
  var notice = global.Notice.notice;

  var STORE_KEY = "linguai.italiano.v2";
  var SCHEMA = 2;

  /* The key from before languages were split apart: read once, on migration. */
  var STORE_KEY_V1 = "linguai.italiano.pl.v1";

  /* ---------------- Persistent state ---------------- */
  var defaultState = function () {
    return {
      schema: SCHEMA,
      createdAt: Date.now(),
      lessons: {},        // id -> {score, total, done, ts, attempts}
      srs: {},            // cardKey (Italian alone) -> {it, tr:{lang->string}, src, ef, reps, interval, due, lapses}
      saved: {},          // cardKey -> true (words marked "to remember")

      /* The adaptive engine. Containers are ADDED, not migrated: load()
         applies the stored data on top of these defaults, so an older
         profile gets them empty by itself. The schema number stays at 2 —
         raising it is reserved for a change in the MEANING of an existing
         field, the way v1 -> v2 was, and nothing here changes any meaning.
         A bump instead would reject every file students have exported so
         far. */
      /* Review journal: {k card key, t time, q grade 0/3/4/5}. Input for
         FUTURE tuning of the FSRS parameters against the learner's own
         history — the Anki optimiser does that locally, on the device,
         from about a thousand reviews on, so the consumer is real, not
         imagined. The reason it sits here already is asymmetric: it costs
         pennies today and cannot be reconstructed backwards. Whoever
         studies for a year without a journal has zero history after that
         year and nobody can give it back. */
      reviews: [],
      errors: {},         // exercise key -> mistake card
      /* There used to be a `gsrs` here — a schedule per grammar topic.
         Declared together with the adaptive engine and never written or
         read by anyone; the only thing touching it was a test that filled
         it in by hand to check persistence. An empty container in SHAPE is
         a contract nobody honours, and FSRS does not need it: it schedules
         cards, not topics.

         Removing it is safe both ways, but not for the reason this comment
         used to give. merge() does NOT skip keys outside the defaults: it
         walks the keys of the SAVE, so an unknown one is copied across
         verbatim and then re-serialised on every write. An older save
         carrying `gsrs` still loads, and quietly keeps carrying it, which is
         harmless only because nothing reads it.

         The same mechanism is load-bearing elsewhere, so it is worth naming
         rather than half-remembering: `llmConsent` and `llmOrder` are
         written into settings by consent.js and by the settings screen, are
         absent from defaultState(), and survive a reload for exactly this
         reason. */
      drills: {},         // generator id -> attempt counter
      session: {},        // composition and progress of today's session
      writing: {},        // task id -> the student's composition
      /* Exam simulation runs. Container ADDED: an older profile gets it
         empty through merge(), so the schema number does not move. We keep
         the points of the two skills the simulator can score, the list of
         sections where time ran out, and the verdict — not the answers:
         those are an exercise, not history. */
      cils: { runs: [] },
      placement: null,    // placement test result, until there is one
      /* Whether the student has already been through the welcome screen.
         Field ADDED, so the schema number does not move — but on its own
         it is not enough: an older profile gets `false` through merge()
         and without the two other conditions (no progress, no test result)
         would see the welcome screen after forty lessons of study. */
      onboarded: false,
      streak: { count: 0, lastDay: null, best: 0 },
      xp: 0,
      minutes: 0,
      settings: {
        lang: "pl",         // language of explanations; Italian is always the language taught
        theme: "light",
        voiceSource: "natural", // "natural" = Edge TTS recordings, "system" = Web Speech API
        rate: 1,
        autoplay: true,
        showPl: true,       // translations visible right away
        strictAccents: false,
        /* Target chance of recall at review time (FSRS). Higher = more
           frequent reviews and less forgetting, lower = fewer and more.
           0.9 is the default of the reference implementation. */
        retention: 0.9,
        /* Consent to send voice for speech recognition. It is NOT given by
           default: silent consent is exactly what consent.js is there to
           prevent. Container added, the schema does not move. */
        sttConsent: false
      },
      stats: { correct: 0, wrong: 0, lessonsDone: 0, days: {} },
      /* State of the backup reminder. `at` is the number of finished
         lessons at the moment the last copy was saved, so the threshold
         counts from there, not from the beginning of the course. Container
         ADDED: an older profile gets it at zero through merge and sees the
         first reminder after ten new lessons, not immediately. */
      backup: { at: 0, ts: 0, snoozed: 0 },
      /* The return hook. Container ADDED, so an older profile gets it empty
         through merge() and the schema number does not move.

         Three of the four fields exist to make something happen AT MOST
         ONCE. `pytanoOMiejsce` is spent on the first attempt because the
         browser, not us, remembers a refusal of the storage prompt;
         `instalacjaOdrzucona` outlives the session on purpose, since an
         invitation that comes back is the thing people install a blocker
         for.

         `odznaka` is off until the student turns it on, and that is a
         privacy decision rather than a preference: it is the only part of
         this course that draws anything outside its own page, and what it
         draws is visible to whoever is holding the phone. */
      retention: {
        pytanoOMiejsce: false,
        trwale: false,
        pytanoOInstalacje: false,
        instalacjaOdrzucona: false,
        odznaka: false,
        /* {godzina, minuta} once the student has picked one, null before. */
        przypomnienie: null
      }
    };
  };

  var state = defaultState();

  /** Card key: the Italian alone. The translation depends on the language and may not be part of it. */
  function cardKey(it) { return norm(it); }


  /**
   * Loads the state, walking an older save up through the migration steps.
   *
   * Until recently the condition was `parsed.schema === SCHEMA`, strict
   * equality, and `migrateUp` hung off `importState` alone. A save with a
   * different schema number was therefore skipped silently: no error, no
   * trace, an empty profile on screen and no way for the student to undo
   * it. It did not blow up only because nobody had raised the schema yet —
   * that is, it would have blown up at the first raise, at the worst
   * possible moment.
   *
   * The directions are not symmetric and have no right to be:
   * - an older save (`schema < SCHEMA`) goes through `MIGRATIONS` — we know
   *   how to lift it, because we wrote every step ourselves;
   * - a save from the future (`schema > SCHEMA`) is rejected outright.
   *   Loading it halfway would be worse than refusing: fields whose meaning
   *   changed would enter the state looking correct. `validateImport` does
   *   the same on import from a file.
   *
   * `MIGRATIONS` is assigned further down this file, but `load()` is only
   * called by app.js after the whole module has run, so the table is ready.
   */
  function load() {
    try {
      var raw = global.localStorage.getItem(STORE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (!parsed || typeof parsed.schema !== "number") return;
        if (parsed.schema > SCHEMA) return;
        if (parsed.schema === SCHEMA) { state = merge(defaultState(), parsed); return; }

        var podniesiony = migrateUp(parsed);
        /* A step may not exist: then the number does not move and the save
           stays untouched on disk instead of entering in an inconsistent shape. */
        if (podniesiony.schema !== SCHEMA) return;
        state = podniesiony;
        save();
        return;
      }
      var old = global.localStorage.getItem(STORE_KEY_V1);
      if (old) { state = migrateV1(JSON.parse(old)); save(); }
    } catch (e) { /* first visit, or storage blocked */ }
  }

  /**
   * v1 -> v2. In v1 a card was keyed by the Italian TOGETHER WITH the Polish
   * translation, so changing the language of explanations would orphan the
   * whole deck. In v2 the key is the Italian alone and the translations sit
   * in a `tr` sub-object, one per language.
   *
   * Lesson progress, streak, XP and statistics come across unchanged: lesson
   * ids are language-neutral, so learning does not start from zero.
   */
  function migrateV1(old) {
    var next = merge(defaultState(), old);
    next.schema = SCHEMA;
    next.settings.lang = "pl";        // v1 existed in Polish only
    next.srs = {};

    Object.keys(old.srs || {}).forEach(function (oldKey) {
      var c = old.srs[oldKey];
      if (!c || !c.it) return;
      var key = cardKey(c.it);
      var card = {
        it: c.it, tr: { pl: c.pl || "" }, src: c.src || "",
        ef: c.ef, reps: c.reps, interval: c.interval, due: c.due, lapses: c.lapses
      };
      // two v1 cards with the same Italian collapse into one: the more urgent one
      // survives with its own gloss; the loser's gloss only fills an empty slot
      var prev = next.srs[key];
      if (!prev) { next.srs[key] = card; return; }
      var win = card.due < prev.due ? card : prev;
      var lose = win === card ? prev : card;
      if (!win.tr.pl && lose.tr.pl) win.tr.pl = lose.tr.pl;
      next.srs[key] = win;
    });
    return next;
  }

  /**
   * What gives way when storage runs out — and in what order.
   *
   * Only things that come back on their own through further study are
   * listed. Lesson progress, streak, XP, statistics and settings are not
   * here and have no right to be: the whole state sits under a single key,
   * so before this list a full storage meant NOTHING was saved and they
   * were lost along with everything else.
   *
   * Compositions are not here either, although they are large: those are
   * sentences the student wrote, the only content in this file nobody can
   * reconstruct.
   *
   * Order: best-mastered cards first (long correct streak, few lapses,
   * added long ago), because they are the closest to leaving circulation.
   */
  function pruneCandidates() {
    var out = [];
    Object.keys(state.errors).forEach(function (k) {
      var c = state.errors[k] || {};
      out.push({
        bag: "errors", key: k,
        score: (c.reps || 0) * 10 - (c.lapses || 0) * 5 - (c.ts || 0) / 1e12
      });
    });
    Object.keys(state.drills).forEach(function (k) {
      out.push({ bag: "drills", key: k, score: 1000 });   // counters only, reproducible
    });
    /* The review journal gives way AFTER mistakes and drills, because those
       come back by themselves through further study and it does not. It
       gives way before lesson progress and compositions, though: it is input
       for tuning that does not exist yet, while those are study the learner
       has already done. */
    if (Array.isArray(state.reviews) && state.reviews.length) {
      out.push({ bag: "reviews", key: "", score: 500 });
    }
    return out.sort(function (a, b) { return b.score - a.score; });
  }

  var PRUNE_BATCH = 20;

  /** Drops a batch of the least needed data. false = there is nothing left. */
  function pruneOnce() {
    var cands = pruneCandidates();
    if (!cands.length) return false;
    var n = Math.min(PRUNE_BATCH, cands.length);
    for (var i = 0; i < n; i++) {
      /* The review journal is an array, not a bag under a key: it gives way
         by half of its oldest entries rather than one item at a time. */
      if (cands[i].bag === "reviews") {
        state.reviews.splice(0, Math.ceil(state.reviews.length / 2));
        continue;
      }
      delete state[cands[i].bag][cands[i].key];
    }
    return true;
  }

  /** Whether this really is lack of space, and not some other refusal to write. */
  function brakMiejsca(e) {
    if (!e) return false;
    return e.name === "QuotaExceededError" ||
      e.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
      e.code === 22 || e.code === 1014;
  }

  function persist() {
    var lost = false;
    for (;;) {
      try {
        global.localStorage.setItem(STORE_KEY, JSON.stringify(state));
        if (lost) notice("core.storagePruned");
        return true;
      } catch (e) {
        /* Pruning deletes data irreversibly, so ONLY a lack of space may
           trigger it. Blocked storage (private mode, browser policy) throws
           something else: there, dropping cards fixes nothing and destroys
           what the student did in this session. */
        if (!brakMiejsca(e)) { notice("core.saveBlocked"); return false; }
        if (!pruneOnce()) { notice("core.saveBlocked"); return false; }
        lost = true;
      }
    }
  }

  var saveTimer = null;
  function save() {
    if (saveTimer) return;
    saveTimer = global.setTimeout(function () {
      saveTimer = null;
      persist();
    }, 180);
  }

  /**
   * Keys an outside file has no right to bring in.
   *
   * JSON.parse turns "__proto__" into an ordinary object property, but
   * reading base["__proto__"] on an ordinary object returns
   * Object.prototype — so merge would walk down it and write to the
   * prototype shared by the whole page. "constructor" and "prototype" are
   * closed off by the same rule, so there is no way around.
   *
   * The list is an array, not an object: the literal { "__proto__": true }
   * does not create a property of that name, it sets the prototype, so a
   * guard built that way guards nothing.
   */
  var FORBIDDEN_KEYS = ["__proto__", "constructor", "prototype"];

  function isForbidden(k) { return FORBIDDEN_KEYS.indexOf(k) >= 0; }

  function merge(base, over) {
    Object.keys(over).forEach(function (k) {
      if (isForbidden(k)) return;
      if (over[k] && typeof over[k] === "object" && !Array.isArray(over[k]) && base[k] && typeof base[k] === "object") {
        base[k] = merge(base[k], over[k]);
      } else if (over[k] !== undefined) {
        base[k] = over[k];
      }
    });
    return base;
  }

  /* ---------------- Import / export ---------------- */
  function exportState() { return JSON.stringify(state, null, 2); }

  /**
   * The migration stairs. Each step lifts a save by one version, so a file
   * from any older one reaches the current version by walking through them
   * in order.
   *
   * Today there is a single step, and that is precisely why this table
   * exists: the policy "we do not raise the schema without a change of
   * meaning" only holds as long as import can accept an older file.
   * Otherwise it is a postponed decision, not a decision.
   */
  var MIGRATIONS = [
    { from: 1, run: migrateV1 }
  ];

  function migrateUp(parsed) {
    var out = parsed;
    for (var i = 0; i < MIGRATIONS.length; i++) {
      if (out.schema === MIGRATIONS[i].from) out = MIGRATIONS[i].run(out);
    }
    return out;
  }

  /* A full set of cards, mistakes and progress fits in hundreds of kilobytes,
     and localStorage runs out at around 5 MB anyway. The threshold is a barrier
     against a file not worth parsing, not a functional limit. */
  var MAX_IMPORT_CHARS = 8 * 1024 * 1024;

  /* Expected type of the top-level fields. A missing field is fine, it gets
     the default value from merge. A present field of the wrong type is not:
     it passes the import without a murmur and blows up in the view that
     iterates over it, that is three screens later and with no visible link
     to the cause. */
  var SHAPE = {
    schema: "number", createdAt: "number", xp: "number", minutes: "number",
    lessons: "object", srs: "object", saved: "object",
    settings: "object", streak: "object", stats: "object",
    errors: "object", drills: "object", reviews: "array",
    session: "object", writing: "object", cils: "object",
    backup: "object", onboarded: "boolean", retention: "object"
  };

  function typeOf(v) {
    if (v === null) return "null";
    return Array.isArray(v) ? "array" : typeof v;
  }

  /**
   * An import error carries a string KEY, not ready-made text.
   *
   * The reason: this message is read by a student trying to restore a
   * backup, and the course speaks five languages. A sentence written here
   * in Polish would reach a Spaniard in Polish too — exactly at the moment
   * they most need to understand what went wrong.
   */
  function importError(key, vars) {
    var e = new Error(key);
    e.key = key;
    e.vars = vars || null;
    return e;
  }

  function validateImport(parsed) {
    if (typeOf(parsed) !== "object") throw importError("set.errNotSave");
    if (typeof parsed.schema !== "number") throw importError("set.errNoVersion");
    if (parsed.schema > SCHEMA) throw importError("set.errFromFuture");
    if (parsed.schema < 1) throw importError("set.errNoVersion");
    if (parsed.placement !== undefined && ["object", "null"].indexOf(typeOf(parsed.placement)) < 0) {
      throw importError("set.errBadField", { field: "placement" });
    }
    Object.keys(SHAPE).forEach(function (k) {
      if (parsed[k] === undefined) return;
      if (typeOf(parsed[k]) !== SHAPE[k]) throw importError("set.errBadField", { field: k });
    });
  }

  /**
   * The check runs in full BEFORE the state is swapped: a file rejected
   * halfway would leave the student with half of someone else's progress
   * and none of their own.
   */
  function importState(json) {
    if (typeof json !== "string" || json.length > MAX_IMPORT_CHARS) {
      throw importError("set.errTooBig");
    }
    var parsed = JSON.parse(json);
    validateImport(parsed);
    state = merge(defaultState(), migrateUp(parsed));
    save();
  }

  function resetState() {
    // Settings stay: the message promises to erase progress, cards and statistics,
    // not the language of explanations. Without this, a student who chose en/es/fr/de
    // gets a Polish interface after clearing, that is a language they may not know.
    var keep = state.settings;
    state = defaultState();
    state.settings = keep;
    save();
  }

  global.Store = {
    KEY: STORE_KEY,
    SCHEMA: SCHEMA,
    get state() { return state; },
    load: load, save: save,
    isForbidden: isForbidden, cardKey: cardKey,
    exportState: exportState, importState: importState, resetState: resetState
  };

})(window);
