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

/* ---------------- Distractors ---------------- */

describe("the article of a word", () => {
  const przypadki = [
    ["il bar", "il"], ["lo sport", "lo"], ["la città", "la"], ["l'amico", "l'"], ["i libri", "i"],
    ["gli amici", "gli"], ["le case", "le"], ["un caffè", "un"], ["uno zaino", "uno"], ["una casa", "una"],
    ["un'amica", "un'"], ["Il Bar", "il"], ["buongiorno", ""], ["per favore", ""], ["lavoro", ""], ["idea", ""],
    ["un po' stanco/a", ""], ["un po'", ""]
  ];
  for (const [slowo, rodzajnik] of przypadki) {
    test(`"${slowo}" -> "${rodzajnik}"`, () => {
      assert.equal(R().articleOf(slowo), rodzajnik);
    });
  }
});

describe("choosing distractors", () => {
  const w = (it, tr) => ({ it, tr });
  const lekcja = [w("il bar", "bar, kawiarnia"), w("il caffè", "kawa"), w("la casa", "dom"), w("il cornetto", "rogalik"), w("grazie", "dziękuję")];
  const jednostka = [w("il gatto", "kot"), w("il cane", "pies"), w("il bar", "bar (lokal)")];

  test("every distractor shares the article, none is the answer", () => {
    const out = [...R().distractors(w("il bar", "bar, kawiarnia"), [lekcja, jednostka], 3, "s")];
    assert.equal(out.length, 3);
    for (const d of out) {
      assert.ok(d.startsWith("il "), d);
      assert.notEqual(d, "il bar");
    }
  });

  test("the answer glossed differently in another lesson is still the answer", () => {
    const out = [...R().distractors(w("il bar", "bar, kawiarnia"), [[w("Il  bar", "lokal"), w("il gatto", "kot")]], 3, "s")];
    assert.deepEqual(out, ["il gatto"]);
  });

  test("the same lesson comes first; the unit only fills what is missing", () => {
    const out = [...R().distractors(w("il bar", "bar, kawiarnia"), [lekcja, jednostka], 2, "s")];
    assert.deepEqual(out.sort(), ["il caffè", "il cornetto"]);
  });

  test("a word with the same meaning is not a distractor, parentheses aside", () => {
    const answer = w("il locale", "bar");
    const out = [...R().distractors(answer, [[w("il bar", "bar (lokal)"), w("il gatto", "kot")]], 3, "s")];
    assert.deepEqual(out, ["il gatto"]);
  });

  test("no duplicates across tiers, a short list when the group is small", () => {
    const out = [...R().distractors(w("il cane", "pies"), [jednostka, jednostka], 3, "s")];
    assert.deepEqual(out.sort(), ["il bar", "il gatto"]);
  });

  test("words without an article are grouped together", () => {
    const out = [...R().distractors(w("prego", "proszę"), [lekcja], 3, "s")];
    assert.deepEqual(out, ["grazie"]);
  });

  test("the same seed gives the same options, another seed may not", () => {
    const duza = Array.from({ length: 12 }, (_, i) => w("il x" + i, "t" + i));
    const a = [...R().distractors(w("il bar", "bar"), [duza], 3, "k#1")];
    const b = [...R().distractors(w("il bar", "bar"), [duza], 3, "k#1")];
    assert.deepEqual(a, b);
    const inne = [2, 3, 4, 5].map(n => [...R().distractors(w("il bar", "bar"), [duza], 3, "k#" + n)].join());
    assert.ok(inne.some(x => x !== a.join()), "the seed has an effect");
  });
});

describe("the tiers distractors come from", () => {
  function levels() {
    const l = (id, words) => ({ id, vocab: words.map(it => ({ it, tr: it + "-tr" })) });
    return [
      { code: "A1", units: [
        { id: "a1-u01", lessons: [l("a1-u01-l1", ["il bar"]), l("a1-u01-l2", ["il caffè"])] },
        { id: "a1-u02", lessons: [l("a1-u02-l1", ["il gatto"])] }
      ] },
      { code: "A2", units: [{ id: "a2-u01", lessons: [l("a2-u01-l1", ["il treno"])] }] }
    ];
  }
  const its = tier => [...tier.map(x => x.it)];

  test("a card from a lesson: the lesson, its unit, its level, everything", () => {
    const t = R().tiersFor("a1-u01-l2", levels());
    assert.equal(t.length, 4);
    assert.deepEqual(its(t[0]), ["il caffè"]);
    assert.deepEqual(its(t[1]), ["il bar", "il caffè"]);
    assert.deepEqual(its(t[2]), ["il bar", "il caffè", "il gatto"]);
    assert.deepEqual(its(t[3]), ["il bar", "il caffè", "il gatto", "il treno"]);
  });

  test("a card from somewhere else (import, coverage) draws from everything loaded", () => {
    const t = R().tiersFor("anki", levels());
    assert.equal(t.length, 1);
    assert.equal(t[0].length, 4);
  });
});

/* ---------------- Modes ---------------- */

describe("which mode a card gets", () => {
  const KIEDY = "2026-09-16";

  test("a word met for the first time is always a flip card", () => {
    for (let d = 1; d <= 9; d++) {
      assert.equal(R().pickMode({ key: "x" + d, fresh: true }, { choice: true }, KIEDY), "flip");
    }
  });

  test("a card still being learned is recognised: choice or flip, never typed", () => {
    const tryby = new Set();
    for (let d = 0; d < 30; d++) {
      tryby.add(R().pickMode({ key: "k" + d, st: "learning", s: 1 }, { choice: true }, KIEDY));
    }
    assert.deepEqual([...tryby].sort(), ["choice", "flip"]);
  });

  test("without distractors a weak card is a flip card", () => {
    for (let d = 0; d < 10; d++) {
      assert.equal(R().pickMode({ key: "k" + d, st: "relearning", s: 2 }, { choice: false }, KIEDY), "flip");
    }
  });

  test("a card stable for 21 days or more is produced: write or flip, never choice", () => {
    const tryby = new Set();
    for (let d = 0; d < 30; d++) {
      tryby.add(R().pickMode({ key: "k" + d, st: "review", s: 21 }, { choice: true }, KIEDY));
    }
    assert.deepEqual([...tryby].sort(), ["flip", "write"]);
  });

  test("twenty days of stability is still recognition", () => {
    for (let d = 0; d < 20; d++) {
      assert.notEqual(R().pickMode({ key: "k" + d, st: "review", s: 20.9 }, { choice: true }, KIEDY), "write");
    }
  });

  test("a card graded before FSRS (no stability yet) is still being learned", () => {
    for (let d = 0; d < 20; d++) {
      assert.notEqual(R().pickMode({ key: "k" + d, reps: 3 }, { choice: true }, KIEDY), "write");
    }
  });

  test("the same card on the same day keeps its mode", () => {
    const c = { key: "stala", st: "review", s: 40 };
    assert.equal(R().pickMode(c, { choice: true }, KIEDY), R().pickMode(c, { choice: true }, KIEDY));
  });
});

describe("the grade a mode sends to FSRS", () => {
  test("a choice is 3 when right, 0 when wrong: a guess must not stretch the interval", () => {
    assert.equal(R().gradeFor("choice", true, 5), 3);
    assert.equal(R().gradeFor("choice", false, 5), 0);
  });

  test("write and flip keep the student's own grade", () => {
    assert.equal(R().gradeFor("write", true, 5), 5);
    assert.equal(R().gradeFor("flip", false, 4), 4);
  });
});

/* ---------------- Listening ---------------- */

describe("when a listening card is possible", () => {
  test("only with a recording and the course's own voice", () => {
    assert.equal(R().audioAvailable(true, "natural"), true);
    assert.equal(R().audioAvailable(true, undefined), true, "no setting yet means the default, the recordings");
    assert.equal(R().audioAvailable(false, "natural"), false, "no recording: system synthesis would mispronounce");
    assert.equal(R().audioAvailable(true, "system"), false, "the student chose the system voice: espeak on Linux");
  });
});

describe("listening modes", () => {
  const KIEDY = "2026-09-16";
  const tryby = (card, avail) => {
    const out = new Set();
    for (let d = 0; d < 40; d++) out.add(R().pickMode({ ...card, key: "k" + d }, avail, KIEDY));
    return [...out].sort();
  };

  test("a weak card with a recording may be heard and picked", () => {
    assert.deepEqual(tryby({ st: "learning", s: 1 }, { choice: true, audio: true }), ["choice", "flip", "listen-choice"]);
  });

  test("a stable card with a recording may be dictated", () => {
    assert.deepEqual(tryby({ st: "review", s: 30 }, { choice: true, audio: true }), ["flip", "listen-write", "write"]);
  });

  test("without a recording no listening mode ever comes up", () => {
    assert.deepEqual(tryby({ st: "learning", s: 1 }, { choice: true, audio: false }), ["choice", "flip"]);
    assert.deepEqual(tryby({ st: "review", s: 30 }, { choice: true, audio: false }), ["flip", "write"]);
  });

  test("hearing and picking needs distractors like reading and picking", () => {
    assert.deepEqual(tryby({ st: "learning", s: 1 }, { choice: false, audio: true }), ["flip"]);
  });

  test("a new word stays a flip card even with a recording", () => {
    assert.equal(R().pickMode({ key: "n", fresh: true }, { choice: true, audio: true }, KIEDY), "flip");
  });

  test("a heard pick is graded like a read one; a dictation keeps the self-grade", () => {
    assert.equal(R().gradeFor("listen-choice", true, 5), 3);
    assert.equal(R().gradeFor("listen-choice", false, 5), 0);
    assert.equal(R().gradeFor("listen-write", true, 5), 5);
  });
});
