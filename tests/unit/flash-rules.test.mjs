/* ============================================================
   The five-minute card session: the pure decisions (assets/js/flash-rules.js).

   A session that never ends is the failure this screen exists to prevent:
   the student opened it because they have five minutes, and a run that
   quietly keeps going past them teaches them not to open it again. Each
   bound is checked on both sides, because `>` and `>=` look the same on
   screen and differ by one card.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, FLASH } from "./_harness.mjs";

const PLIKI = [...CORE, FLASH[0]];

function R() {
  return loadEngine({ files: PLIKI }).sandbox.FlashRules;
}

const MIN = 60000;

describe("when the session ends", () => {
  test("the limits are five minutes and twenty cards", () => {
    const r = R();
    assert.equal(r.LIMITS.ms, 5 * MIN);
    assert.equal(r.LIMITS.cards, 20);
  });

  test("nineteen answers at 4:59 is not over", () => {
    assert.equal(R().isOver(0, 5 * MIN - 1000, 19), null);
  });

  test("the twentieth answer ends it by the card cap", () => {
    assert.equal(R().isOver(0, 1000, 20), "cap");
  });

  test("five minutes end it even after three answers", () => {
    assert.equal(R().isOver(0, 5 * MIN, 3), "time");
  });

  test("one millisecond before five minutes is not over", () => {
    assert.equal(R().isOver(0, 5 * MIN - 1, 3), null);
  });
});

describe("the time left", () => {
  test("counts down from five minutes", () => {
    assert.equal(R().remaining(1000, 1000 + 2 * MIN), 3 * MIN);
  });

  test("never goes below zero", () => {
    assert.equal(R().remaining(0, 9 * MIN), 0);
  });

  test("a clock moved backwards does not give more than five minutes", () => {
    assert.equal(R().remaining(10 * MIN, 0), 5 * MIN);
  });

  test("formats as m:ss", () => {
    const r = R();
    assert.equal(r.clock(5 * MIN), "5:00");
    assert.equal(r.clock(65000), "1:05");
    assert.equal(r.clock(999), "0:01", "a started second still shows, so 0:00 means really over");
    assert.equal(r.clock(0), "0:00");
  });
});

/* ---------------- The reserve deck ---------------- */

/** A registry shaped like Core.registry.levels, with only what reserve reads. */
function kurs() {
  const lekcja = (id, vocab) => ({ id, vocab: vocab.map(([it, tr]) => ({ it, tr })) });
  return [
    { code: "A1", units: [
      { id: "a1-u01", lessons: [
        lekcja("a1-u01-l1", [["grazie", "dziękuję"], ["il bar", "bar, kawiarnia"]]),
        lekcja("a1-u01-l2", [["la casa", "dom"], ["grazie", "dzięki"]])
      ] },
      { id: "a1-u02", lessons: [lekcja("a1-u02-l1", [["il gatto", "kot"], ["il cane", "pies"]])] }
    ] },
    { code: "A2", units: [
      { id: "a2-u01", lessons: [lekcja("a2-u01-l1", [["la strada", "ulica"]])] }
    ] }
  ];
}

const klucz = it => it.toLowerCase();

describe("which level a lesson belongs to", () => {
  test("reads the level from the id prefix", () => {
    assert.equal(R().levelOfLesson("a1-u01-l1", ["A1", "A2"]), "A1");
    assert.equal(R().levelOfLesson("b2-u03-l4", ["A1", "B2"]), "B2");
  });

  test("an unknown prefix gives null, not a guess", () => {
    assert.equal(R().levelOfLesson("zz-u01-l1", ["A1"]), null);
    assert.equal(R().levelOfLesson("", ["A1"]), null);
  });
});

describe("the reserve", () => {
  test("words of finished lessons, in course order, each once, with the gloss of its own lesson", () => {
    const zrobione = new Set(["a1-u01-l1", "a1-u01-l2", "a2-u01-l1"]);
    const out = R().reserve(kurs(), { isDone: id => zrobione.has(id), inDeck: () => false, keyOf: klucz });
    assert.deepEqual([...out.map(w => w.it)], ["grazie", "il bar", "la casa", "la strada"]);
    assert.equal(out[0].tr, "dziękuję", "the first lesson's gloss, not the last one indexed");
    assert.equal(out[0].src, "a1-u01-l1");
    assert.equal(out[0].fresh, true);
  });

  test("words already in the deck are left out", () => {
    const out = R().reserve(kurs(), { isDone: () => true, inDeck: k => k === "grazie", keyOf: klucz });
    assert.ok(!out.some(w => w.it === "grazie"));
    assert.ok(out.some(w => w.it === "il bar"), "the rest stays: the filter is not dropping everything");
  });

  test("a student with nothing finished gets the first unit", () => {
    const out = R().reserve(kurs(), { isDone: () => false, inDeck: () => false, keyOf: klucz });
    assert.deepEqual([...out.map(w => w.src)], ["a1-u01-l1", "a1-u01-l1", "a1-u01-l2"]);
  });

  test("a chosen unit gives that unit only, finished or not", () => {
    const out = R().reserve(kurs(), { isDone: () => false, inDeck: () => false, keyOf: klucz, unitId: "a1-u02" });
    assert.deepEqual([...out.map(w => w.it)], ["il gatto", "il cane"]);
  });

  test("a word the key function rejects is skipped", () => {
    const out = R().reserve(kurs(), { isDone: () => true, inDeck: () => false, keyOf: it => it === "il bar" ? null : it });
    assert.ok(!out.some(w => w.it === "il bar"));
    assert.ok(out.length > 0);
  });

  test("a level with no units loaded contributes nothing and breaks nothing", () => {
    const levels = [{ code: "A1" }, ...kurs()];
    const out = R().reserve(levels, { isDone: () => false, inDeck: () => false, keyOf: klucz });
    assert.equal(out[0].it, "grazie");
  });
});

describe("new words today", () => {
  const DZIEN = Date.UTC(2026, 8, 16);

  test("counts keys whose first review falls today, once each", () => {
    const log = [
      { k: "stara", t: DZIEN - 3600000, q: 4 },
      { k: "stara", t: DZIEN + 1000, q: 4 },
      { k: "nowa", t: DZIEN + 2000, q: 0 },
      { k: "nowa", t: DZIEN + 3000, q: 3 },
      { k: "nowa", t: DZIEN + 4000, q: 4 },
      { k: "druga", t: DZIEN + 5000, q: 4 }
    ];
    assert.equal(R().newToday(log, DZIEN), 2);
  });

  test("a first review exactly at midnight counts as today", () => {
    assert.equal(R().newToday([{ k: "a", t: DZIEN, q: 4 }], DZIEN), 1);
  });

  test("no journal, nothing new", () => {
    assert.equal(R().newToday(undefined, DZIEN), 0);
  });
});

describe("composing the queue", () => {
  const due = n => Array.from({ length: n }, (_, i) => ({ key: "d" + i }));
  const fresh = n => Array.from({ length: n }, (_, i) => ({ it: "f" + i, fresh: true }));

  test("due cards first, then new words up to the daily allowance", () => {
    const q = R().compose(due(2), fresh(30), 0);
    assert.equal(q.length, 12);
    assert.equal(q[0].key, "d0");
    assert.equal(q[2].it, "f0");
  });

  test("twenty due cards leave no room for new words", () => {
    const q = R().compose(due(25), fresh(30), 0);
    assert.equal(q.length, 20);
    assert.ok(q.every(c => !c.fresh));
  });

  test("new words already learned today shrink the allowance", () => {
    assert.equal(R().compose([], fresh(30), 7).length, 3);
    assert.equal(R().compose([], fresh(30), 10).length, 0);
    assert.equal(R().compose([], fresh(30), 14).length, 0, "over the allowance is not negative");
  });

  test("the daily allowance is ten", () => {
    assert.equal(R().NEW_PER_DAY, 10);
  });
});
