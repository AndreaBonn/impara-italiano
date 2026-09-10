/* ============================================================
   The mistake notebook: what gets written, what comes back, what leaves
   circulation.

   The exit threshold and the first interval are a product decision, not a
   fact of the code: they sit in the plan as C1 and are to be confirmed at
   the final review. Here they are pinned down as adopted, so a change of
   the threshold shows up as a change of the test rather than quietly.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "assets/js/errors-key.js", "assets/js/errors.js"];

/** A lesson real enough to yield keys, without loading the course. */
const LEKCJA = {
  id: "a1-u02-l3",
  tags: ["g-presente", "g-nome-genere"],
  exercises: [
    { t: "fill", a: ["sono"] },
    { t: "mcq", a: 1 },
    { t: "conj", verb: "essere", tense: "pres", persons: [0, 1] }
  ]
};

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

describe("recording a mistake", () => {
  test("a correct answer the first time round creates no card", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, true);
    assert.equal(Object.keys(box.Core.state.errors).length, 0);
  });

  test("a wrong answer creates a card with the lesson tag and its source", () => {
    const box = silnik();
    const c = box.sandbox.Errors.record(LEKCJA, 0, false);
    assert.equal(c.kind, "authored");
    assert.equal(c.tag, "g-presente", "the first tag of the lesson");
    assert.equal(c.srcId, "a1-u02-l3");
    assert.equal(c.lapses, 1);
    assert.equal(Object.keys(box.Core.state.errors).length, 1);
  });

  test("an exercise can override the lesson tag with its own", () => {
    const box = silnik();
    const lekcja = {
      id: "a1-u02-l3", tags: ["g-presente"],
      exercises: [{ t: "gender", opts: ["il", "la"], items: [{ it: "casa", a: "la" }], tag: "g-nome-genere" }]
    };
    assert.equal(box.sandbox.Errors.record(lekcja, 0, false).tag, "g-nome-genere");
  });

  test("a second mistake on the same exercise does not multiply cards", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    const c = box.sandbox.Errors.record(LEKCJA, 0, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 1);
    assert.equal(c.lapses, 2);
  });

  test("two different exercises from the same lesson are two cards", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    box.sandbox.Errors.record(LEKCJA, 1, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 2);
  });

  test("the card reaches localStorage, not only memory", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    box.flush();
    assert.equal(Object.keys(box.stored("linguai.italiano.v2").errors).length, 1);
  });

  test("a blocked storage does not interrupt the lesson", () => {
    const box = silnik();
    box.storage._setLimit(10);
    assert.doesNotThrow(() => {
      box.sandbox.Errors.record(LEKCJA, 0, false);
      box.flush();
    });
  });
});

/* A review shows the real exercise from the lesson, so its result comes in
   by the same route as an answer during the lesson: through record(). There
   is no separate grading to maintain and no two places that can drift apart.
   Hence all the threshold tests go through record(). */
describe("leaving circulation (C1: two correct in a row)", () => {
  test("the first correct answer leaves the card, with a one-day interval", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    const c = box.sandbox.Errors.record(LEKCJA, 0, true);
    assert.equal(c.reps, 1);
    assert.equal(c.interval, 1);
    assert.ok(box.Core.state.errors[klucz], "the card is still in circulation");
  });

  test("the second correct answer in a row takes the card out of the notebook", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    box.sandbox.Errors.record(LEKCJA, 0, true);
    box.sandbox.Errors.record(LEKCJA, 0, true);
    assert.equal(box.Core.state.errors[klucz], undefined, "the card has left the notebook");
  });

  test("a mistake in between resets the streak, the card stays", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    box.sandbox.Errors.record(LEKCJA, 0, true);
    box.sandbox.Errors.record(LEKCJA, 0, false);
    const c = box.Core.state.errors[klucz];
    assert.equal(c.reps, 0);
    assert.equal(c.lapses, 2);
    assert.ok(box.Core.state.errors[klucz]);
  });

  test("a card with no exercise leaves through drop", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    assert.equal(box.sandbox.Errors.drop(klucz), true);
    assert.equal(box.Core.state.errors[klucz], undefined);
    assert.equal(box.sandbox.Errors.drop("no-such-card"), false);
  });
});

describe("what is due for review", () => {
  test("a fresh mistake comes back in the same session, not in a day", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    assert.equal(box.sandbox.Errors.due().length, 0, "not just yet");
    const c = Object.values(box.Core.state.errors)[0];
    assert.ok(c.due - Date.now() <= 10 * 60000 + 50, "but within ten minutes");
  });

  test("a card whose due date has passed is up for review", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    box.Core.state.errors[klucz].due = Date.now() - 1000;
    assert.equal(box.sandbox.Errors.due().length, 1);
    assert.equal(box.sandbox.Errors.dueCount(), 1);
  });

  test("the more urgent ones come first and the limit trims the list", () => {
    const box = silnik();
    [0, 1, 2].forEach(i => {
      const k = box.sandbox.Errors.record(LEKCJA, i, false).key;
      box.Core.state.errors[k].due = Date.now() - (i + 1) * 1000;
    });
    const lista = box.sandbox.Errors.due(2);
    assert.equal(lista.length, 2);
    assert.ok(lista[0].due < lista[1].due, "the oldest due date at the front");
  });

  test("grouping by topic says where the student is stuck", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);   // g-presente
    box.sandbox.Errors.record(LEKCJA, 1, false);   // g-presente
    const lekcja2 = { id: "a1-u01-l2", tags: ["g-nome-genere"], exercises: [{ t: "fill", a: ["le"] }] };
    box.sandbox.Errors.record(lekcja2, 0, false);

    const wg = box.sandbox.Errors.byTag();
    assert.equal(wg["g-presente"].length, 2);
    assert.equal(wg["g-nome-genere"].length, 1);
  });
});

describe("generated tasks", () => {
  /* A generated task has a different identity from an authored exercise: the
     tag comes from the generator, not from a lesson, and the key from the
     (topic, seed) pair. The distinction is DECLARED on the card (`kind`),
     because two species of different granularity live in one set and the view
     has to know which one it is holding. */
  const ZADANIE = { topicId: "art-det", seed: "7", tag: "g-articoli" };

  test("a correct answer the first time round creates no card", () => {
    const box = silnik();
    assert.equal(box.sandbox.Errors.recordGenerated(ZADANIE, true), null);
    assert.deepEqual(Object.keys(box.Core.state.errors), []);
  });

  test("a mistake creates a card with the generator tag and a declared kind", () => {
    const box = silnik();
    const karta = box.sandbox.Errors.recordGenerated(ZADANIE, false);

    assert.equal(karta.kind, "generated");
    assert.equal(karta.tag, "g-articoli");
    assert.equal(karta.srcId, "art-det");
    assert.ok(box.Core.state.errors[karta.key], "the card sits in the set under its own key");
  });

  test("the same seed is the same card, a different seed is another one", () => {
    const box = silnik();
    box.sandbox.Errors.recordGenerated(ZADANIE, false);
    box.sandbox.Errors.recordGenerated(ZADANIE, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 1, "two mistakes on the same task make one card");

    box.sandbox.Errors.recordGenerated({ topicId: "art-det", seed: "8", tag: "g-articoli" }, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 2);
  });

  test("two correct answers in a row take the task out of the notebook", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.recordGenerated(ZADANIE, false).key;
    box.sandbox.Errors.recordGenerated(ZADANIE, true);
    assert.ok(box.Core.state.errors[klucz], "after the first correct answer the card stays");

    box.sandbox.Errors.recordGenerated(ZADANIE, true);
    assert.equal(box.Core.state.errors[klucz], undefined);
  });

  test("a missing task creates no card and does not break the session", () => {
    const box = silnik();
    assert.equal(box.sandbox.Errors.recordGenerated(null, false), null);
  });
});

describe("intercepting answers from exercises", () => {
  /* What is wrapped is `wire` inside Ex.build, not thirteen builders: with a
     fourteenth type there is nothing to forget, and forgetting would give no
     symptom at all - the notebook would simply stay empty. */
  function zEx() {
    const box = silnik();
    const zbudowane = [];
    const Ex = {
      build(ex, idx, seed) {
        zbudowane.push({ ex, idx, seed });
        return {
          html: "",
          wire(root, onDone) { root.onDone = onDone; return root; }
        };
      }
    };
    box.sandbox.Ex = Ex;
    box.sandbox.Registry.registerLevel({
      code: "A1", dataFiles: [], units: [{ id: "a1-u02", lessons: [LEKCJA] }]
    });
    return { box, Ex, zbudowane };
  }

  /** Builds an exercise and answers it, the way the lesson view does. */
  function odpowiedz(Ex, ex, idx, seed, ok) {
    const uchwyt = {};
    Ex.build(ex, idx, seed).wire(uchwyt, uchwyt.zewnetrzne);
    uchwyt.onDone(ok);
    return uchwyt;
  }

  test("a mistake during a lesson reaches the notebook with no help from the view", () => {
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);
    odpowiedz(Ex, LEKCJA.exercises[1], 1, LEKCJA.id, false);

    const karty = Object.values(box.Core.state.errors);
    assert.equal(karty.length, 1);
    assert.equal(karty[0].srcId, LEKCJA.id);
  });

  test("the view's callback still gets its result, exactly once", () => {
    /* The lesson progress counter hangs on this: a second call breaks
       nothing, it just quietly inflates the score. */
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);

    const wyniki = [];
    const uchwyt = {};
    Ex.build(LEKCJA.exercises[0], 0, LEKCJA.id).wire(uchwyt, (ok) => wyniki.push(ok));
    uchwyt.onDone(true);

    assert.deepEqual(wyniki, [true]);
  });

  test("installing twice does not wrap the builder a second time", () => {
    /* Double wrapping would record every mistake twice: the card would not be
       duplicated (same key) but the schedule would jump by two. */
    const { box, Ex } = zEx();
    assert.equal(box.sandbox.Errors.install(Ex), true);
    assert.equal(box.sandbox.Errors.install(Ex), false);

    odpowiedz(Ex, LEKCJA.exercises[0], 0, LEKCJA.id, false);
    const karta = Object.values(box.Core.state.errors)[0];
    assert.equal(karta.lapses, 1, "one mistake is one lapse, not two");
  });

  test("an exercise built outside a lesson does not create a card under somebody else's key", () => {
    /* The practice screen builds exercises with an arbitrary seed: without
       this guard a card would appear pointing at a lesson that does not
       contain the task. */
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);

    odpowiedz(Ex, LEKCJA.exercises[0], 0, "no-such-lesson", false);
    odpowiedz(Ex, LEKCJA.exercises[0], 0, 12345, false);
    assert.deepEqual(Object.keys(box.Core.state.errors), []);
  });

  test("an exercise index that does not match the lesson creates no card either", () => {
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);

    /* This exercise sits in the lesson at index 1, not 0. */
    odpowiedz(Ex, LEKCJA.exercises[1], 0, LEKCJA.id, false);
    assert.deepEqual(Object.keys(box.Core.state.errors), []);
  });

  test("with no Ex at all install stays silent instead of throwing", () => {
    /* In the state-engine unit tests Ex does not exist, and the notebook has
       to work without exercises too. */
    const box = silnik();
    assert.equal(box.sandbox.Errors.install(undefined), false);
  });
});
