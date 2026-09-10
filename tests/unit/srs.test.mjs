/* ============================================================
   The review deck (assets/js/srs.js) — what state.test.mjs does not touch.

   That file describes the schedule arithmetic (SM-2, FSRS, retention, the
   journal) and stays there. Here are two things nobody was checking and
   which the student sees every day:

   - dueCards: WHICH cards reach the session and in what order;
   - cardTr: where the translation comes from when a card has no gloss in
     the current language — because an empty row in the reviews is a card
     that cannot be answered.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const DZIEN = 86400000;

function swiezy() {
  const box = loadEngine();
  box.Core.load();
  return box;
}

/** Inserts a card straight into the state, with a given due date. */
function karta(box, it, due, over) {
  const k = box.Core.cardKey(it);
  box.Core.state.srs[k] = Object.assign({
    it: it, tr: { pl: it + "-pl" }, src: "", ef: 2.5, reps: 0, interval: 0,
    due: due, lapses: 0
  }, over || {});
  return k;
}

describe("dueCards: the makeup of today's session", () => {
  test("a card due in the future does not enter, one due in the past does", () => {
    const box = swiezy();
    karta(box, "domani", Date.now() + DZIEN);
    karta(box, "ieri", Date.now() - DZIEN);
    const due = box.Core.dueCards();
    assert.equal(due.length, 1);
    assert.equal(due[0].it, "ieri");
  });

  test("a card due exactly now is already due", () => {
    const box = swiezy();
    karta(box, "adesso", Date.now());
    assert.equal(box.Core.dueCards().length, 1, "a due date of \"now\" means now, not in a moment");
  });

  test("the most urgent go first", () => {
    const box = swiezy();
    karta(box, "sredni", Date.now() - 2 * DZIEN);
    karta(box, "najstarszy", Date.now() - 9 * DZIEN);
    karta(box, "swiezy", Date.now() - 1000);
    assert.deepEqual(Array.from(box.Core.dueCards(), c => c.it), ["najstarszy", "sredni", "swiezy"]);
  });

  test("the limit cuts after sorting, so it takes the most urgent rather than random ones", () => {
    const box = swiezy();
    karta(box, "trzeci", Date.now() - 1000);
    karta(box, "pierwszy", Date.now() - 9 * DZIEN);
    karta(box, "drugi", Date.now() - 2 * DZIEN);
    assert.deepEqual(Array.from(box.Core.dueCards(2), c => c.it), ["pierwszy", "drugi"]);
  });

  test("every card carries its key: without it there is no way to grade it", () => {
    const box = swiezy();
    const k = karta(box, "L'autore", Date.now() - 1000);
    const c = box.Core.dueCards()[0];
    assert.equal(c.key, k);
    assert.equal(c.key, "l'autore");
  });

  test("a copy, not the original: a session must not quietly move a due date in the deck", () => {
    const box = swiezy();
    const k = karta(box, "cane", Date.now() - 1000);
    const c = box.Core.dueCards()[0];
    c.due = Date.now() + 999 * DZIEN;
    assert.notEqual(box.Core.state.srs[k].due, c.due, "the deck was left untouched");
    assert.equal(box.Core.dueCards().length, 1, "and the card is still due for review");
  });

  test("an empty deck gives an empty session and zero, not an exception", () => {
    const box = swiezy();
    assert.equal(box.Core.dueCards().length, 0);
    assert.equal(box.Core.dueCount(), 0);
  });

  test("dueCount liczy to samo, co dueCards bez limitu", () => {
    const box = swiezy();
    karta(box, "uno", Date.now() - 1000);
    karta(box, "due", Date.now() - 2000);
    karta(box, "tre", Date.now() + DZIEN);
    assert.equal(box.Core.dueCount(), 2);
    assert.equal(box.Core.dueCount(), box.Core.dueCards().length);
  });
});

describe("cardTr: where the translation comes from", () => {
  test("the gloss in the current language wins", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    assert.equal(box.Core.cardTr({ it: "cane", tr: { pl: "pies", en: "dog" } }), "dog");
  });

  test("when there is no gloss in the current language, any one will do: an empty row is worse", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    assert.equal(box.Core.cardTr({ it: "cane", tr: { pl: "pies" } }), "pies");
  });

  test("an empty gloss in the current language does not count as a gloss", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    assert.equal(box.Core.cardTr({ it: "cane", tr: { en: "", pl: "pies" } }), "pies");
  });

  test("a card with no translations gives an empty string, not undefined", () => {
    const box = swiezy();
    assert.equal(box.Core.cardTr({ it: "cane", tr: {} }), "");
    assert.equal(box.Core.cardTr({ it: "cane" }), "");
    assert.equal(box.Core.cardTr(null), "");
  });
});

describe("addCard: adding a gloss does not touch the schedule", () => {
  test("the same card in a second language gains a gloss, not a new due date", () => {
    const box = swiezy();
    const k = karta(box, "cane", Date.now() + 5 * DZIEN, { reps: 4, interval: 5 });

    box.Core.state.settings.lang = "en";
    const zwrocony = box.Core.addCard("cane", "dog", "a1-u01-l1");

    assert.equal(zwrocony, k, "to ta sama karta, nie druga");
    assert.equal(box.Core.state.srs[k].reps, 4, "the review streak untouched");
    assert.equal(box.Core.state.srs[k].interval, 5);
    assert.equal(box.Core.state.srs[k].tr.en, "dog");
    assert.equal(box.Core.state.srs[k].tr.pl, "cane-pl", "stara glosa zostaje");
  });

  test("a new card starts due immediately: the student should see it today", () => {
    const box = swiezy();
    const k = box.Core.addCard("gatto", "kot", "a1-u01-l1");
    assert.equal(box.Core.state.srs[k].reps, 0);
    assert.ok(box.Core.state.srs[k].due <= Date.now());
    assert.equal(box.Core.dueCount(), 1);
  });

  test("empty content creates no card", () => {
    const box = swiezy();
    assert.equal(box.Core.addCard("", "nic"), null);
    assert.equal(box.Core.addCard("   ", "nic"), null);
    assert.equal(Object.keys(box.Core.state.srs).length, 0);
  });
});

describe("wystawienie w Core", () => {
  test("Core returns the deck functions, not copies of its own", () => {
    const box = swiezy();
    ["addCard", "cardTr", "schedule", "gradeCard", "dueCards", "dueCount"].forEach(nazwa => {
      assert.equal(box.Core[nazwa], box.sandbox.Srs[nazwa], `Core.${nazwa} to inna funkcja`);
    });
  });
});

describe("the review journal: the ceiling", () => {
  /* The journal is input for the FUTURE tuning of the FSRS parameters on the
     learner's own history, so it grows with every review and is the only
     container with no end of its own. The ceiling cuts from the oldest:
     recent history describes memory as it is now. */
  test("po przekroczeniu sufitu wypada najstarsza pozycja, nie najnowsza", () => {
    const box = swiezy();
    const max = box.sandbox.Srs.MAX_REVIEWS;
    const st = box.Core.state;
    for (let n = 0; n < max; n++) st.reviews.push({ k: "x", t: n, q: 5 });

    const k = karta(box, "casa", Date.now() - DZIEN);
    box.Core.gradeCard(k, 5);

    assert.equal(st.reviews.length, max, "sufit trzyma");
    assert.equal(st.reviews[0].t, 1, "the oldest went, not the newest");
    assert.equal(st.reviews[st.reviews.length - 1].k, k, "the fresh review is in there");
  });
});
