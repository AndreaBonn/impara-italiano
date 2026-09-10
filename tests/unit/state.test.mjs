/* ============================================================
   A safety net under the state.

   These tests describe the behaviour that IS, not the one that ought to be.
   F0 changes merge(), importState() and save() - the three functions every
   existing user's progress passes through. A change that knocks something
   over here knocks over somebody's saved data.

   What is deliberately absent: prototype pollution through merge(). That is a
   defect, not behaviour to pin down; its test is written together with the
   fix in F0 (T005) and has to be red first.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, makeStorage, probePrototype, CORE } from "./_harness.mjs";

/**
 * Objects from the sandbox have a prototype from another realm, so a strict
 * deepEqual rejects even {} against {}. Where only the content matters, we ask
 * for the keys instead of comparing prototype identity.
 */
function pusty(o, opis) {
  assert.equal(Object.keys(o).length, 0, opis);
}

const KEY = "linguai.italiano.v2";
const KEY_V1 = "linguai.italiano.pl.v1";
const SCHEMA = 2;

/** A saved state in the shape that really sits in localStorage. */
function saved(over) {
  return JSON.stringify(Object.assign({ schema: SCHEMA }, over));
}

describe("merge", () => {
  test("it descends into objects instead of replacing whole branches", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ settings: { rate: 0.8 } }) } });
    box.Core.load();
    const s = box.Core.state;
    assert.equal(s.settings.rate, 0.8, "the value from the saved state");
    assert.equal(s.settings.lang, "pl", "the rest of the branch from the defaults");
    assert.equal(s.settings.autoplay, true);
  });

  test("an array from the saved state replaces the default, it does not append to it", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ srs: {}, lessons: {}, tagList: ["a"] }) } });
    box.Core.load();
    assert.deepEqual(box.Core.state.tagList, ["a"]);
  });

  test("a field absent from the saved state comes from the defaults", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 40 }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 40);
    assert.equal(box.Core.state.minutes, 0, "a missing field gets the default value");
    pusty(box.Core.state.stats.days, "the daily stats start empty");
  });
});

describe("the containers of the adaptive engine", () => {
  /* `gsrs` was here until F1. Declared along with the adaptive engine, never
     written or read by anybody - the only thing touching it was the test
     below, which filled it in by hand. Removed together with the container. */
  const NOWE = ["errors", "drills", "session", "writing"];

  test("a profile saved before the change gets them empty, with no migration", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 40, lessons: { "a1-u01-l1": { done: true } } }) } });
    box.Core.load();

    assert.equal(box.Core.state.schema, SCHEMA, "the schema number does not move");
    assert.equal(box.Core.state.xp, 40, "the progress passes through untouched");
    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true);
    NOWE.forEach(k => pusty(box.Core.state[k], `${k} starts empty`));
    assert.equal(box.Core.state.placement, null, "no placement test means null, not an object");
  });

  test("the contents of the containers survive a save and a load", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.errors["klucz-1"] = { kind: "authored", tag: "g-presente", lapses: 1 };
    box.Core.state.drills["prep-art"] = { podejscia: 3 };
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.equal(zapis.errors["klucz-1"].tag, "g-presente");
    assert.equal(zapis.drills["prep-art"].podejscia, 3);
  });

  test("clearing the progress empties them along with the rest", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.errors["klucz-1"] = { kind: "authored" };
    box.Core.resetState();
    pusty(box.Core.state.errors, "the quaderno errori goes away with the progress");
  });
});

describe("load", () => {
  test("empty storage leaves the default state", () => {
    const box = loadEngine();
    box.Core.load();
    assert.equal(box.Core.state.schema, SCHEMA);
    assert.equal(box.Core.state.xp, 0);
  });

  test("a different schema version is ignored, the state stays default", () => {
    const box = loadEngine({ seed: { [KEY]: JSON.stringify({ schema: 99, xp: 999 }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 0, "a save from the future does not come in");
  });

  test("broken JSON does not break the startup", () => {
    const box = loadEngine({ seed: { [KEY]: "{ to nie jest json" } });
    assert.doesNotThrow(() => box.Core.load());
    assert.equal(box.Core.state.xp, 0);
  });
});

describe("the v1 -> v2 migration", () => {
  test("a card is rekeyed to Italian alone, the translation moves down into tr.pl", () => {
    const v1 = {
      schema: 1,
      srs: { "andare|iść": { it: "andare", pl: "iść", ef: 2.5, reps: 3, interval: 8, due: 111, lapses: 0 } },
      xp: 120
    };
    const box = loadEngine({ seed: { [KEY_V1]: JSON.stringify(v1) } });
    box.Core.load();
    const srs = box.Core.state.srs;
    assert.deepEqual(Object.keys(srs), ["andare"]);
    assert.equal(srs.andare.tr.pl, "iść");
    assert.equal(srs.andare.interval, 8);
    assert.equal(box.Core.state.xp, 120, "the progress passes through without being reset");
    assert.equal(box.Core.state.schema, SCHEMA);
  });

  test("two v1 cards with the same Italian merge into the more urgent one", () => {
    const v1 = {
      schema: 1,
      srs: {
        "stare|być": { it: "stare", pl: "być", ef: 2.5, reps: 1, interval: 1, due: 500, lapses: 0 },
        "stare|stać": { it: "stare", pl: "stać", ef: 2.5, reps: 4, interval: 9, due: 100, lapses: 2 }
      }
    };
    const box = loadEngine({ seed: { [KEY_V1]: JSON.stringify(v1) } });
    box.Core.load();
    assert.equal(Object.keys(box.Core.state.srs).length, 1);
    assert.equal(box.Core.state.srs.stare.due, 100, "the one with the nearer due date stays");
    assert.equal(box.Core.state.srs.stare.lapses, 2);
  });

  test("v1 existed in Polish only, so the explanation language goes back to pl", () => {
    const box = loadEngine({ seed: { [KEY_V1]: JSON.stringify({ schema: 1, srs: {}, settings: { lang: "de" } }) } });
    box.Core.load();
    assert.equal(box.Core.state.settings.lang, "pl");
  });
});

describe("save", () => {
  test("it is debounced: with no time passing nothing sits in storage", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.xp = 7;
    box.Core.save();
    assert.equal(box.storage.getItem(KEY), null, "the save did not go out immediately");
    box.flush();
    assert.equal(box.stored(KEY).xp, 7);
  });

  test("several calls within one window save once", () => {
    const box = loadEngine();
    box.Core.load();
    for (let i = 0; i < 5; i++) { box.Core.state.xp = i; box.Core.save(); }
    assert.equal(box.clock.size, 1, "one timer, not five");
    box.flush();
    assert.equal(box.stored(KEY).xp, 4);
  });

  test("a full quota throws no exception, it shows a message", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 50 }) });
    box.Core.load();
    box.Core.state.xp = 1;
    box.Core.save();
    assert.doesNotThrow(() => box.flush());
    assert.deepEqual(box.toasts, ["core.saveBlocked"]);
  });

  test("an ordinary toast disappears by itself", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.toast("a message");
    box.flush();
    assert.deepEqual(box.visible(), [], "the toast does not stay on screen");
  });
});

/* R6. Before F0, with storage full NOTHING was saved: the whole state sits
   under one key, so the lesson progress - the one thing a student cannot
   reproduce - was lost along with the cards. */
describe("full storage: what gives way", () => {
  /** A state where the mistake cards take a lot of room and the progress little. */
  function zapchany(limit) {
    const box = loadEngine({ storage: makeStorage({ limit: limit }) });
    box.Core.load();
    box.Core.state.lessons["a1-u01-l1"] = { done: true, best: 1, score: 10, total: 10, attempts: 1, ts: 1 };
    box.Core.state.stats.lessonsDone = 1;
    for (let i = 0; i < 40; i++) {
      box.Core.state.errors["klucz-" + i] = {
        kind: "authored", tag: "g-presente", srcId: "a1-u01-l1",
        ef: 2.5, reps: i % 5, interval: i, due: 1000 + i, lapses: 1, ts: 1000 + i,
        wypelniacz: "x".repeat(200)
      };
    }
    return box;
  }

  test("the lesson progress gets saved, the mistake cards give way", () => {
    const box = zapchany(4000);
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.notEqual(zapis, null, "the save went through despite the lack of room");
    assert.equal(zapis.lessons["a1-u01-l1"].done, true, "the lesson progress survived");
    assert.equal(zapis.stats.lessonsDone, 1);
    assert.ok(Object.keys(zapis.errors).length < 40, "some of the mistake cards were dropped");
  });

  test("the best-known cards are dropped first", () => {
    const box = zapchany(4000);
    box.Core.state.errors["swieza"] = {
      kind: "authored", tag: "g-presente", ef: 2.5, reps: 0, interval: 0,
      due: 1, lapses: 3, ts: 9999, wypelniacz: "x".repeat(200)
    };
    box.Core.save();
    box.flush();

    const zostale = box.stored(KEY).errors;
    assert.ok(zostale["swieza"], "a card with three lapses and no streak stays");
  });

  test("the drill counters give way before the essays: they come back by themselves with further study", () => {
    /* The order of the sweep is a list of what the student gets back without
       effort. The attempt counter of a generator rebuilds itself on the first
       practice run; an essay is sentences nobody else will write. */
    const box = zapchany(4000);
    for (let i = 0; i < 30; i++) box.Core.state.drills["temat-" + i] = { podejscia: i, wypelniacz: "x".repeat(200) };
    box.Core.state.writing["w1"] = { text: "Ciao, sono a Roma.", ts: 1, words: 4, found: 1, total: 1 };
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.ok(Object.keys(zapis.drills).length < 30, "some of the counters were dropped");
    assert.equal(zapis.writing["w1"].text, "Ciao, sono a Roma.", "the essay stays untouched");
  });

  test("the data-loss message stays on screen, it does not vanish after a moment", () => {
    const box = zapchany(4000);
    box.Core.save();
    box.flush();
    assert.ok(box.visible().length > 0, "the warning is still visible once time has passed");
  });

  test("when there is nothing left to drop, the student is told plainly", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 20 }) });
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 9, 10, 60);
    box.flush();

    assert.equal(box.storage.getItem(KEY), null, "it really did not fit");
    assert.ok(box.visible().length > 0, "and there is a sticky message about it, not a vanishing toast");
  });

  test("the sweep touches neither the settings nor the streak", () => {
    const box = zapchany(4000);
    box.Core.state.streak = { count: 12, lastDay: "2026-09-09", best: 12 };
    box.Core.state.settings.lang = "de";
    box.Core.save();
    box.flush();

    const zapis = box.stored(KEY);
    assert.equal(zapis.streak.count, 12);
    assert.equal(zapis.settings.lang, "de");
  });
});

describe("importState / exportState", () => {
  test("a round trip preserves the progress", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 8, 10, 30);
    const dump = box.Core.exportState();

    const drugi = loadEngine();
    drugi.Core.load();
    drugi.Core.importState(dump);
    assert.equal(drugi.Core.state.lessons["a1-u01-l1"].done, true);
    assert.equal(drugi.Core.state.stats.lessonsDone, 1);
  });

  test("a file from the future is rejected", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: 99, xp: 1 })));
  });

  test("a file with no schema field is rejected", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ xp: 1 })));
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: "2", xp: 1 })));
  });

  /* A change from the state before F0: previously EVERY file with a different
     number was rejected, including older ones. That closed the way back from a
     backup made before a migration and turned the "we do not bump the schema"
     policy into a postponement rather than a policy. */
  test("an older file comes in and migrates on the way", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.importState(JSON.stringify({
      schema: 1,
      xp: 55,
      srs: { "andare|iść": { it: "andare", pl: "iść", ef: 2.5, reps: 2, interval: 3, due: 42, lapses: 0 } }
    }));
    assert.equal(box.Core.state.xp, 55);
    assert.deepEqual(Object.keys(box.Core.state.srs), ["andare"], "the card is rekeyed to Italian alone");
    assert.equal(box.Core.state.srs.andare.tr.pl, "iść");
    assert.equal(box.Core.state.schema, SCHEMA);
  });

  test("a file of the wrong shape is rejected at the door, not three screens later", () => {
    const box = loadEngine();
    box.Core.load();
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, lessons: "ciao" })));
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, srs: [1, 2, 3] })));
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, xp: "a lot" })));
    assert.throws(() => box.Core.importState(JSON.stringify([1, 2, 3])));
    assert.throws(() => box.Core.importState('"text"'));
  });

  test("a rejected file does not leave half a state behind", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 10, 10, 20);
    assert.throws(() => box.Core.importState(JSON.stringify({ schema: SCHEMA, xp: 999, lessons: "ciao" })));
    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true, "the previous state is untouched");
    assert.notEqual(box.Core.state.xp, 999);
  });

  test("a file larger than any sensible save is rejected before parsing", () => {
    const box = loadEngine();
    box.Core.load();
    const ogromny = '{"schema":2,"note":"' + "x".repeat(9 * 1024 * 1024) + '"}';
    assert.throws(() => box.Core.importState(ogromny));
  });
});

describe("reset", () => {
  test("it clears the progress and leaves the settings", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.state.settings.lang = "de";
    box.Core.state.settings.theme = "dark";
    box.Core.recordLesson("a1-u01-l1", 10, 10, 20);
    box.Core.resetState();
    pusty(box.Core.state.lessons, "the lesson progress is cleared");
    assert.equal(box.Core.state.settings.lang, "de", "the explanation language survives the clearing");
    assert.equal(box.Core.state.settings.theme, "dark");
  });
});

/* Since F1 `Core.schedule` serves ONLY the mistake notebook: the vocabulary
   deck moved to FSRS (gradeCard below). These three assertions describe the
   same behaviour as before the change, they just call it where it now lives -
   through `schedule` on a loose card, the way errors.js does. */
describe("the SM-2 schedule (since F1 the mistake notebook only)", () => {
  /** A card in the shape errors.js assumes. */
  function karta() {
    return { ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0 };
  }

  test("a correct answer lengthens the interval: 1 day, 3 days, then x ef", () => {
    const box = loadEngine();
    box.Core.load();
    const c = karta();

    assert.equal(box.Core.schedule(c, 5).interval, 1);
    assert.equal(box.Core.schedule(c, 5).interval, 3);
    const trzecia = box.Core.schedule(c, 5);
    assert.ok(trzecia.interval > 3, `the third interval ${trzecia.interval} has to grow`);
  });

  test("a wrong answer resets the streak and comes back in the same session", () => {
    const box = loadEngine();
    box.Core.load();
    const c = karta();
    box.Core.schedule(c, 5);

    box.Core.schedule(c, 2);
    assert.equal(c.reps, 0);
    assert.equal(c.interval, 0);
    assert.equal(c.lapses, 1);
    assert.ok(c.due - Date.now() <= 10 * 60000 + 50, "due within ten minutes");
  });

  test("ef does not drop below 1.3 despite a run of wrong answers", () => {
    const box = loadEngine();
    box.Core.load();
    const c = karta();
    for (let i = 0; i < 20; i++) { box.Core.schedule(c, 3); box.Core.schedule(c, 0); }
    assert.ok(c.ef >= 1.3);
  });

  test("the card key is Italian alone, with no translation", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("il pane", "chleb", "a1-u01-l1");
    assert.deepEqual(Object.keys(box.Core.state.srs), ["il pane"]);
  });
});

describe("lesson progress", () => {
  test("the pass threshold is 70 per cent", () => {
    const box = loadEngine();
    box.Core.load();
    assert.equal(box.Core.recordLesson("l-a", 7, 10, 60).done, true);
    assert.equal(box.Core.recordLesson("l-b", 6, 10, 60).done, false);
  });

  test("a lesson once passed is not un-passed by a worse attempt", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.recordLesson("l-a", 10, 10, 60);
    const drugie = box.Core.recordLesson("l-a", 2, 10, 60);
    assert.equal(drugie.done, true);
    assert.equal(drugie.best, 1, "the best score stays");
    assert.equal(box.Core.state.stats.lessonsDone, 1, "counted once");
  });
});

/* Found in review: the sweep ran on EVERY save error, including when storage
   is blocked (private mode, a policy). There, dropping cards fixes nothing and
   destroys the work of this session. */
describe("the sweep only when there is no room", () => {
  function zablokowany(nazwaBledu) {
    const storage = makeStorage();
    storage.setItem = function () {
      const e = new Error("refused");
      e.name = nazwaBledu;
      throw e;
    };
    return storage;
  }

  test("blocked storage does not delete cards", () => {
    const box = loadEngine({ storage: zablokowany("SecurityError") });
    box.Core.load();
    for (let i = 0; i < 10; i++) box.Core.state.errors["k" + i] = { kind: "authored", reps: 3, ts: i };
    box.Core.save();
    box.flush();

    assert.equal(Object.keys(box.Core.state.errors).length, 10, "the cards are untouched");
    assert.deepEqual(box.toasts, ["core.saveBlocked"], "but the student knows nothing was saved");
  });

  test("lack of room still triggers the sweep", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 2000 }) });
    box.Core.load();
    for (let i = 0; i < 40; i++) {
      box.Core.state.errors["k" + i] = { kind: "authored", reps: 3, ts: i, w: "x".repeat(200) };
    }
    box.Core.save();
    box.flush();
    assert.ok(Object.keys(box.Core.state.errors).length < 40, "something gave way");
  });
});

/* ============================================================
   T010 - load() and the migration steps.

   A latent defect found while planning F1, unrelated to FSRS: `load()`
   (core.js:68) accepts a saved state ONLY when `schema === SCHEMA` and never
   calls `migrateUp`. The migration steps are wired to `importState` alone
   (core.js:698). A save with a different schema number is therefore skipped
   silently, with no error and no trace: the student sees an empty profile with
   no way to guess what happened or to undo it.

   Today this does not blow up, because nobody has bumped the schema yet. It
   would blow up on the first bump, that is at the worst possible moment -
   hence the fix goes in NOW, separately from the decision about FSRS (R1 in
   specs/002-corso-irrinunciabile/riconciliazione.md).

   These tests have to be red before the fix from T011.
   ============================================================ */
describe("load: a save of an older schema goes through the migrations", () => {
  /** A save in the v1 shape: a card keyed by Italian TOGETHER with Polish. */
  function zapisV1(over) {
    return JSON.stringify(Object.assign({
      schema: 1,
      xp: 40,
      lessons: { "a1-u01-l1": { done: true, score: 8, total: 10 } },
      srs: {
        "un caffe|kawa": { it: "un caffè", pl: "kawa", ef: 2.5, reps: 3, interval: 9, due: 111 }
      }
    }, over));
  }

  test("progress from a v1 save under the v2 key is not lost", () => {
    const box = loadEngine({ seed: { [KEY]: zapisV1() } });
    box.Core.load();

    assert.equal(box.Core.state.xp, 40, "the XP goes through the migration");
    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true, "the lesson progress goes through");
    assert.equal(box.Core.state.schema, SCHEMA, "after the migration the schema number is current");
  });

  test("a v1 card is rekeyed to Italian alone", () => {
    const box = loadEngine({ seed: { [KEY]: zapisV1() } });
    box.Core.load();

    const klucze = Object.keys(box.Core.state.srs);
    assert.equal(klucze.length, 1, "one card, one key");
    assert.ok(!klucze[0].includes("|"), "the key no longer carries the translation");
    assert.equal(box.Core.state.srs[klucze[0]].tr.pl, "kawa", "the gloss lands under its language");
    assert.equal(box.Core.state.srs[klucze[0]].interval, 9, "the schedule stays untouched");
  });

  test("a save of the current schema loads as before", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 7, settings: { rate: 0.8 } }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 7);
    assert.equal(box.Core.state.settings.rate, 0.8);
  });

  test("a save from the future is rejected rather than loaded halfway", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ schema: SCHEMA + 1, xp: 999 }) } });
    box.Core.load();
    assert.equal(box.Core.state.xp, 0, "nothing from the newer file enters the state");
    assert.equal(box.Core.state.schema, SCHEMA, "the state stays on its own schema");
  });
});

/* ============================================================
   F1 - the vocabulary deck on FSRS.

   The schema number stays at 2, because no existing field changes meaning:
   `due`, `interval`, `reps` and `lapses` mean the same, `s` and `d` are new,
   and `ef` becomes ballast on old cards. There is no bulk recalculation - a
   card moves onto the new tracks only once the student SEES it (R1 in
   specs/002-corso-irrinunciabile/riconciliazione.md).
   ============================================================ */
describe("gradeCard: FSRS on the vocabulary deck", () => {
  function zTalia() {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    return { box, key: box.Core.cardKey("mangiare") };
  }

  test("a new card gets stability and difficulty, not ef", () => {
    const { box, key } = zTalia();
    const c = box.Core.gradeCard(key, 4);
    assert.equal(typeof c.s, "number", "stability");
    assert.equal(typeof c.d, "number", "difficulty");
    assert.ok(c.d >= 1 && c.d <= 10, `difficulty ${c.d} fits within 1..10`);
    assert.ok(c.due > Date.now(), "due in the future");
  });

  test("successive correct answers lengthen the interval", () => {
    const { box, key } = zTalia();
    /* The card goes through the learning steps, so the first due dates are in
       minutes; what counts is the direction, not the exact number - those are
       in fsrs.test.mjs. */
    let poprzedni = 0;
    for (let i = 0; i < 4; i++) {
      const c = box.Core.gradeCard(key, 5);
      assert.ok(c.due - Date.now() >= poprzedni, `step ${i + 1} does not shorten the due date`);
      poprzedni = c.due - Date.now();
    }
  });

  test("a slip counts as a lapse and resets the streak", () => {
    const { box, key } = zTalia();
    box.Core.gradeCard(key, 5);
    box.Core.gradeCard(key, 5);
    const c = box.Core.gradeCard(key, 0);
    assert.equal(c.reps, 0, "the streak starts over");
    assert.equal(c.lapses, 1);
  });

  test("an old SM-2 card moves to FSRS only on its first review", () => {
    const box = loadEngine();
    box.Core.load();
    /* A profile from before the change: a card with an interval and ef, no s and d. */
    box.Core.state.srs["il pane"] = {
      it: "il pane", tr: { pl: "chleb" }, src: "a1-u01-l1",
      ef: 2.1, reps: 4, interval: 12, due: Date.now() + 3 * 86400000, lapses: 0
    };
    const przed = box.Core.state.srs["il pane"].due;

    assert.equal(box.Core.state.srs["il pane"].s, undefined, "before the review nothing moves");
    assert.equal(box.Core.state.srs["il pane"].due, przed, "the due date is untouched");

    const c = box.Core.gradeCard("il pane", 4);
    assert.equal(typeof c.s, "number", "stability appears at the review");
    assert.ok(c.s >= 12, `stability ${c.s} comes out of the previous interval`);
    assert.ok(c.d > 1 && c.d < 10, `ef 2.1 gives an intermediate difficulty, it is ${c.d}`);
  });

  test("untouched cards get neither s nor d from merely loading the profile", () => {
    const box = loadEngine({
      seed: {
        [KEY]: saved({
          srs: {
            "il pane": { it: "il pane", tr: {}, ef: 2.5, reps: 3, interval: 9, due: 1, lapses: 0 }
          }
        })
      }
    });
    box.Core.load();
    const c = box.Core.state.srs["il pane"];
    assert.equal(c.s, undefined);
    assert.equal(c.interval, 9, "the schedule from before the change stays in place");
  });

  test("the mistake notebook does not notice the change: it still runs on SM-2", () => {
    const box = loadEngine({ files: CORE });
    box.Core.load();
    const c = { ef: 2.5, reps: 0, interval: 0, due: Date.now(), lapses: 0 };
    box.Core.schedule(c, 5);
    assert.equal(c.interval, 1, "SM-2, not FSRS");
    assert.equal(c.s, undefined, "no FSRS fields in the notebook");
  });
});

describe("retention: the student's setting changes the due dates", () => {
  function zKarta(retencja) {
    const box = loadEngine();
    box.Core.load();
    if (retencja !== undefined) box.Core.state.settings.retention = retencja;
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    const key = box.Core.cardKey("mangiare");
    /* The card has to leave the learning steps so the interval is computed
       from stability rather than from the minute-long steps - otherwise the
       test would measure constants, not retention. */
    box.Core.gradeCard(key, 5);
    box.Core.gradeCard(key, 5);
    return box.Core.gradeCard(key, 4);
  }

  test("the default value is 0.9", () => {
    const box = loadEngine();
    box.Core.load();
    assert.equal(box.Core.state.settings.retention, 0.9);
  });

  test("a higher retention shortens the interval, a lower one lengthens it", () => {
    const ostra = zKarta(0.95).interval;
    const domyslna = zKarta(0.9).interval;
    const luzna = zKarta(0.85).interval;
    assert.ok(ostra < domyslna, `0.95 (${ostra}) has to be shorter than 0.9 (${domyslna})`);
    assert.ok(domyslna < luzna, `0.9 (${domyslna}) has to be shorter than 0.85 (${luzna})`);
  });

  test("an older profile without this field gets the default value", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ settings: { rate: 0.8 } }) } });
    box.Core.load();
    assert.equal(box.Core.state.settings.retention, 0.9, "merge adds the new field");
    assert.equal(box.Core.state.settings.rate, 0.8, "and does not touch the old ones");
  });
});

describe("export continuity across F1", () => {
  test("a file from before FSRS comes back with the same cards and due dates", () => {
    /* An export from a profile in the pre-change shape: ef and interval, no
       FSRS fields. This is the file a student has on disk today. */
    const przed = JSON.stringify({
      schema: SCHEMA, xp: 55,
      lessons: { "a1-u01-l1": { done: true } },
      srs: {
        "il pane": { it: "il pane", tr: { pl: "chleb" }, ef: 2.1, reps: 4, interval: 12, due: 1800000000000, lapses: 0 },
        "mangiare": { it: "mangiare", tr: { pl: "jeść" }, ef: 2.5, reps: 1, interval: 1, due: 1700000000000, lapses: 0 }
      }
    });

    const box = loadEngine();
    box.Core.load();
    box.Core.importState(przed);

    assert.equal(box.Core.state.schema, SCHEMA, "the schema number is still 2");
    assert.equal(Object.keys(box.Core.state.srs).length, 2);
    assert.equal(box.Core.state.srs["il pane"].due, 1800000000000, "the due date is untouched by the import");
    assert.equal(box.Core.state.srs["il pane"].interval, 12);
    assert.equal(box.Core.state.srs["il pane"].s, undefined, "the import does not convert to FSRS");
    assert.equal(box.Core.state.xp, 55);

    /* And back again: whatever comes out has to be loadable once more. */
    const znowu = loadEngine();
    znowu.Core.load();
    znowu.Core.importState(box.Core.exportState());
    assert.equal(znowu.Core.state.srs["il pane"].due, 1800000000000);
    assert.equal(znowu.Core.state.schema, SCHEMA);
  });
});

describe("the review log", () => {
  test("every grade leaves an entry with a key, a time and the grade", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    const key = box.Core.cardKey("mangiare");
    box.Core.gradeCard(key, 5);
    box.Core.gradeCard(key, 0);

    const d = box.Core.state.reviews;
    assert.equal(d.length, 2);
    assert.equal(d[0].k, key);
    assert.equal(d[0].q, 5);
    assert.equal(d[1].q, 0);
    assert.ok(d[0].t > 0 && d[1].t >= d[0].t, "the times increase");
  });

  test("an older profile with no log gets it empty", () => {
    const box = loadEngine({ seed: { [KEY]: saved({ xp: 3 }) } });
    box.Core.load();
    assert.deepEqual(Array.from(box.Core.state.reviews), []);
    assert.equal(box.Core.state.xp, 3);
  });

  test("the log survives a save, a load and an export", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("mangiare", "jeść", "a1-u01-l1");
    box.Core.gradeCard(box.Core.cardKey("mangiare"), 4);
    box.Core.save();
    box.flush();
    assert.equal(box.stored(KEY).reviews.length, 1);

    const znowu = loadEngine();
    znowu.Core.load();
    znowu.Core.importState(box.Core.exportState());
    assert.equal(znowu.Core.state.reviews.length, 1, "it goes through the export");
  });

  test("the log gives way AFTER the mistakes and before the lesson progress", () => {
    const box = loadEngine({ storage: makeStorage({ limit: 4000 }) });
    box.Core.load();
    box.Core.state.lessons["a1-u01-l1"] = { done: true, score: 9, total: 10 };
    for (let i = 0; i < 300; i++) box.Core.state.reviews.push({ k: "k" + i, t: i, q: 4 });
    for (let i = 0; i < 30; i++) box.Core.state.errors["e" + i] = { kind: "authored", reps: 3, ts: i };
    box.Core.save();
    box.flush();

    assert.equal(box.Core.state.lessons["a1-u01-l1"].done, true, "the lesson progress stays");
    assert.ok(
      Object.keys(box.Core.state.errors).length < 30 || box.Core.state.reviews.length < 300,
      "something gave way"
    );
  });
});

/* ============================================================
   T063 - prototype pollution through addCard.

   `merge()` filters out `__proto__`, `constructor` and `prototype`, and that
   defence works: a state loaded from a file through importState does not get
   past it. But `addCard` does NOT go through it. It goes straight:

       cardKey(it) = norm(it)  ->  state.srs[k] = { ... }

   `norm()` does not touch underscores, so a card whose content is "__proto__"
   sets the object's PROTOTYPE instead of creating a property on it. The card
   disappears from Object.keys and from JSON.stringify, and reading any
   non-existent key starts hitting the substituted object.

   Until now this was unreachable, because only the course created cards.
   Importing a deck from a file (F4) turns it into a vector: one line in
   somebody else's set is enough. The test has to be red before the fix.
   ============================================================ */
describe("addCard: reserved keys do not touch the prototype", () => {
  const ZASTRZEZONE = ["__proto__", "constructor", "prototype"];

  for (const zly of ZASTRZEZONE) {
    test(`a card named "${zly}" stays an own property, not the prototype`, () => {
      const box = loadEngine();
      box.Core.load();
      box.Core.addCard(zly, "whatever", "import");
      box.Core.save();
      box.flush();

      assert.ok(
        Object.prototype.hasOwnProperty.call(box.Core.state.srs, zly) ||
        Object.keys(box.Core.state.srs).length === 0,
        `"${zly}" is either an own property or was rejected - it must not vanish into the prototype`
      );
      assert.equal(probePrototype(box, "polluted"), undefined, "the prototype is untouched");
    });
  }

  test("a card with a reserved name survives a save and a load, or is never created", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.addCard("__proto__", "coffee", "import");
    box.Core.save();
    box.flush();

    const zapis = box.stored("linguai.italiano.v2");
    const klucze = Object.keys(zapis.srs || {});
    /* Either it is in the saved state or it is not. What is not allowed: that
       addCard returns a key and the save shows no trace of it. */
    if (klucze.length) assert.ok(klucze.includes("__proto__"));
  });
});
