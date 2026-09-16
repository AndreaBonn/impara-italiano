/* ============================================================
   How a five-minute card is asked (assets/js/flash-modes.js).

   A choice between four words teaches something only when the wrong three
   cannot be ruled out without knowing the answer, and a mode asks for recall
   only once the card has held. Both break silently: a giveaway distractor
   looks like an easy card, a word typed too early looks like a hard one.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, MODES } from "./_harness.mjs";

const PLIKI = [...CORE, ...MODES];

function R() {
  return loadEngine({ files: PLIKI }).sandbox.FlashModes;
}

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
