/* ============================================================
   The identity of a mistake card.

   A card must survive a change of the explanation language and survive an
   exercise being inserted in the middle of a lesson. It must NOT survive a
   change to the exercise's own content: there it is better for it to stop
   resolving than to quietly point at something else.

   Why not the content hash alone: in the neutral layer an `mcq` exercise is
   the whole of { t: "mcq", a: 1 } - the question and the options live in the
   overlay. In a1-u01-l1 there are two identical ones. A hash without the
   lesson and without an ordinal would collide from day one.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "assets/js/errors-key.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

describe("the content signature", () => {
  test("it does not change when only the overlay changes", () => {
    const box = silnik();
    const polska = { t: "mcq", a: 1, q: "Które zdanie jest poprawne?", opts: ["A", "B"], why: "bo tak" };
    const niemiecka = { t: "mcq", a: 1, q: "Welcher Satz stimmt?", opts: ["A", "B"], why: "darum" };
    assert.equal(box.sandbox.Errors.sigOf(polska), box.sandbox.Errors.sigOf(niemiecka));
  });

  test("it changes when the answer changes", () => {
    const box = silnik();
    assert.notEqual(
      box.sandbox.Errors.sigOf({ t: "mcq", a: 1 }),
      box.sandbox.Errors.sigOf({ t: "mcq", a: 2 })
    );
  });

  test("it changes when the Italian sentence changes", () => {
    const box = silnik();
    assert.notEqual(
      box.sandbox.Errors.sigOf({ t: "listen", it: "Buongiorno" }),
      box.sandbox.Errors.sigOf({ t: "listen", it: "Buonasera" })
    );
  });

  test("the same type with different content gives a different signature", () => {
    const box = silnik();
    const wszystkie = [
      { t: "fill", a: ["sono"] },
      { t: "fill", a: ["sei"] },
      { t: "trans", dir: "toIt", a: ["sono dalla polonia"] },
      { t: "order", tokens: ["un", "caffè"], a: ["un caffè"] },
      { t: "conj", verb: "essere", tense: "pres", persons: [0, 1] },
      { t: "conj", verb: "avere", tense: "pres", persons: [0, 1] },
      { t: "cloze", text: "Ieri {{1}} al mercato.", gaps: [["sono andato"]] }
    ].map(ex => box.sandbox.Errors.sigOf(ex));
    assert.equal(new Set(wszystkie).size, wszystkie.length, "no collisions across different contents");
  });

  test("the options of a gender exercise count, because they are Italian and live in core", () => {
    const box = silnik();
    assert.notEqual(
      box.sandbox.Errors.sigOf({ t: "gender", opts: ["il", "la"], items: [{ it: "libro", a: "il" }] }),
      box.sandbox.Errors.sigOf({ t: "gender", opts: ["il", "la"], items: [{ it: "casa", a: "la" }] })
    );
  });

  test("the options of an mcq exercise do NOT count, because they are translated", () => {
    const box = silnik();
    assert.equal(
      box.sandbox.Errors.sigOf({ t: "mcq", a: 0, opts: ["tak", "nie"] }),
      box.sandbox.Errors.sigOf({ t: "mcq", a: 0, opts: ["yes", "no"] })
    );
  });

  test("the order of the fields in the object does not matter", () => {
    const box = silnik();
    assert.equal(
      box.sandbox.Errors.sigOf({ t: "fill", a: ["sono"], say: "io sono" }),
      box.sandbox.Errors.sigOf({ say: "io sono", a: ["sono"], t: "fill" })
    );
  });
});

describe("the card key", () => {
  const lekcja = {
    id: "a1-u01-l1",
    exercises: [
      { t: "mcq", a: 1 },
      { t: "mcq", a: 1 },              // a twin: the data really does look like this
      { t: "fill", a: ["sono"] }
    ]
  };

  test("two identical exercises in one lesson get different keys", () => {
    const box = silnik();
    const k = box.sandbox.Errors.keysIn(lekcja);
    assert.equal(new Set(k).size, 3, "three exercises, three keys");
  });

  test("the key carries the lesson id", () => {
    const box = silnik();
    assert.ok(box.sandbox.Errors.keysIn(lekcja)[0].indexOf("a1-u01-l1") === 0);
  });

  test("appending an exercise does not touch the previous keys", () => {
    const box = silnik();
    const przed = box.sandbox.Errors.keysIn(lekcja);
    const po = box.sandbox.Errors.keysIn({
      id: lekcja.id,
      exercises: lekcja.exercises.concat([{ t: "listen", it: "Ciao" }])
    });
    assert.deepEqual(po.slice(0, 3), przed);
  });

  test("inserting an exercise at the front does not touch the remaining keys", () => {
    const box = silnik();
    const przed = box.sandbox.Errors.keysIn(lekcja);
    const po = box.sandbox.Errors.keysIn({
      id: lekcja.id,
      exercises: [{ t: "listen", it: "Ciao" }].concat(lekcja.exercises)
    });
    przed.forEach(k => assert.ok(po.indexOf(k) >= 0, `key ${k} survived the insertion`));
  });

  test("changing an exercise invalidates its key instead of moving it onto another", () => {
    const box = silnik();
    const stary = box.sandbox.Errors.keysIn(lekcja)[2];
    const po = box.sandbox.Errors.keysIn({
      id: lekcja.id,
      exercises: [lekcja.exercises[0], lekcja.exercises[1], { t: "fill", a: ["sei"] }]
    });
    assert.ok(po.indexOf(stary) < 0, "the old key no longer points at anything");
  });
});

describe("the signature of a nested field", () => {
  /* In the neutral layer exercises carry nested fields (dialogue lines,
     pairs, items with their own answer). The signature has to walk into them:
     were it to collapse an object to "[object Object]", two different
     exercises of the same type would share one identity and one card. */
  test("an object inside an exercise enters the signature together with its values", () => {
    const box = silnik();
    const a = { t: "dialogue", lines: [{ sp: "A", it: "Ciao", a: 0 }] };
    const b = { t: "dialogue", lines: [{ sp: "A", it: "Buonasera", a: 0 }] };

    assert.notEqual(box.sandbox.Errors.sigOf(a), box.sandbox.Errors.sigOf(b));
  });

  test("the key order in a nested object does not change the signature", () => {
    /* JSON from a data file and an object built in code have the same fields
       in a different order; a different signature would mean an orphaned
       card. */
    const box = silnik();
    const a = { t: "dialogue", lines: [{ sp: "A", it: "Ciao", a: 0 }] };
    const b = { t: "dialogue", lines: [{ a: 0, it: "Ciao", sp: "A" }] };

    assert.equal(box.sandbox.Errors.sigOf(a), box.sandbox.Errors.sigOf(b));
  });
});

describe("resolving an exercise from its key", () => {
  const LEKCJA = {
    id: "a1-u01-l1",
    tags: ["g-presente"],
    exercises: [{ t: "mcq", a: 1 }, { t: "fill", a: ["sono"] }]
  };

  function zKursem() {
    const box = silnik();
    box.sandbox.Registry.registerLevel({
      code: "A1", dataFiles: [], units: [{ id: "a1-u01", lessons: [LEKCJA] }]
    });
    return box;
  }

  test("an authored key comes back with its exercise, lesson and index", () => {
    /* A review shows the REAL exercise from the lesson, not a separate
       flashcard: this is the way back. */
    const box = zKursem();
    const klucz = box.sandbox.Errors.keyOf(LEKCJA, 1);
    const znalezione = box.sandbox.Errors.locate(klucz);

    assert.equal(znalezione.index, 1);
    assert.equal(znalezione.ex, LEKCJA.exercises[1]);
    assert.equal(znalezione.lesson.id, LEKCJA.id);
  });

  test("an exercise whose content changed stops resolving instead of pointing at its neighbour", () => {
    /* Better for the card to be dropped than to quietly show the student a
       different task from the one they got wrong. */
    const box = zKursem();
    const klucz = box.sandbox.Errors.keyOf(LEKCJA, 0);
    LEKCJA.exercises[0] = { t: "mcq", a: 2 };

    assert.equal(box.sandbox.Errors.locate(klucz), null);
    LEKCJA.exercises[0] = { t: "mcq", a: 1 };
  });

  test("a key pointing at a non-existent lesson resolves to nothing", () => {
    const box = zKursem();
    assert.equal(box.sandbox.Errors.locate("nie-ma#abc#0"), null);
  });

  test("a key of a different shape is not an authored key", () => {
    const box = zKursem();
    assert.equal(box.sandbox.Errors.locate("cokolwiek"), null);
    assert.equal(box.sandbox.Errors.locate("a#b#c#d"), null);
  });

  test("a generated task key is recognised by its prefix", () => {
    const box = zKursem();
    const klucz = box.sandbox.Errors.generatedKey("art-det", "7");

    assert.ok(klucz.indexOf("art-det") > 0);
    assert.notEqual(klucz.split("#").length, 3, "a different shape from an authored key");
    /* With the generators not loaded the task cannot be built: locate must
       then return null rather than produce a card with no content. */
    assert.equal(box.sandbox.Errors.locate(klucz), null);
  });
});

describe("resolving a generated task", () => {
  test("the key carries the topic and the seed, and the seed determines the task", () => {
    /* Tasks are generated from a seed, so the card does not have to hold the
       content: the (topic, seed) pair is enough to build it again, word for
       word. Were the generator to stop being a pure function of the seed, the
       review would show a different task from the one that went wrong. */
    const box = loadEngine({
      files: [...CORE, "assets/js/errors-key.js", "assets/js/drills-lex.js", "assets/js/drills.js"]
    });
    box.Core.load();
    const temat = box.sandbox.Drills.TOPICS[0].id;
    const klucz = box.sandbox.Errors.generatedKey(temat, "7");
    const znalezione = box.sandbox.Errors.locate(klucz);

    assert.equal(znalezione.generated, true);
    assert.equal(znalezione.topicId, temat);
    assert.equal(znalezione.seed, "7");
    assert.ok(znalezione.ex && znalezione.ex.t, "the task was rebuilt, not just the key described");

    /* The proof that the seed really enters the content is the DIFFERENCE:
       two keys with different seeds must give two different tasks. Comparing
       against a second call of the generator would be comparing with itself,
       because locate() calls exactly that function. */
    const inne = box.sandbox.Errors.locate(box.sandbox.Errors.generatedKey(temat, "8"));
    assert.notDeepEqual(
      JSON.parse(JSON.stringify(znalezione.ex)),
      JSON.parse(JSON.stringify(inne.ex)),
      "a different seed, a different task"
    );
  });
});
