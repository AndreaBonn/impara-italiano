/* ============================================================
   The run of a five-minute session (assets/js/flash-run.js).

   Three things break here without a trace on screen: the answer to the card
   that was open when time ran out (graded or silently dropped), the card
   after the bound (shown or not), and which grade reaches FSRS. The last one
   is checked against the real deck, not a stub: a run that "grades" a copy
   of the card passes every assertion about the run and changes nothing the
   student will see tomorrow.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, FLASH } from "./_harness.mjs";

const PLIKI = [...CORE, ...FLASH];
const MIN = 60000;
const T0 = Date.UTC(2026, 8, 16, 8, 0, 0);

function silnik() {
  return loadEngine({ files: PLIKI, now: T0 });
}

/** n due cards in the real deck, returned as Core.dueCards gives them. */
function talia(box, n) {
  for (let i = 0; i < n; i++) box.Core.addCard("parola" + i, "slowo" + i, "test");
  return box.Core.dueCards();
}

describe("the queue and the answers", () => {
  test("the run walks the queue in order and grades the real card", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(talia(box, 3), T0);
    const pierwsza = run.current();
    assert.equal(pierwsza.it, "parola0");
    run.answer(4, true, T0 + 1000);
    assert.equal(box.Core.state.srs[pierwsza.key].reps, 1, "the deck card moved, not a copy");
    assert.equal(box.Core.state.reviews.length, 1);
    assert.equal(run.current().it, "parola1");
  });

  test("a wrong answer counts as answered but not right", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(talia(box, 2), T0);
    run.answer(0, false, T0);
    run.answer(4, true, T0);
    assert.deepEqual({ ...run.summary() }, { answered: 2, right: 1, reason: "empty" });
  });

  test("an exhausted queue ends the session with its own reason", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(talia(box, 1), T0);
    assert.equal(run.answer(3, true, T0), "empty");
    assert.equal(run.current(), null);
  });

  test("an empty queue is over before it starts", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create([], T0);
    assert.equal(run.current(), null);
    assert.equal(run.summary().reason, "empty");
  });
});

describe("the bounds", () => {
  test("the card open when time runs out is still graded, the next one never shows", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(talia(box, 10), T0);
    for (let i = 0; i < 6; i++) run.answer(4, true, T0 + i * 1000);
    const siodma = run.current();
    assert.equal(siodma.it, "parola6");

    const powod = run.answer(4, true, T0 + 5 * MIN + 30000);
    assert.equal(powod, "time");
    assert.equal(box.Core.state.srs[siodma.key].reps, 1, "the answer given after the bell counts");
    assert.equal(run.current(), null, "card 8 does not appear");
    assert.equal(run.summary().answered, 7);
  });

  test("the twentieth answer ends a queue of thirty", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(talia(box, 30), T0);
    let powod = null;
    for (let i = 0; i < 20; i++) powod = run.answer(3, true, T0 + i);
    assert.equal(powod, "cap");
    assert.equal(run.current(), null);
    assert.equal(box.Core.state.reviews.length, 20);
  });

  test("answering after the end changes nothing", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(talia(box, 1), T0);
    run.answer(4, true, T0);
    assert.equal(run.answer(4, true, T0), "empty");
    assert.equal(box.Core.state.reviews.length, 1, "no second grade on a card that is not there");
  });

  test("the clock reports the bell but leaves the open card alone", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(talia(box, 3), T0);
    assert.equal(run.tick(T0 + MIN), null);
    assert.equal(run.tick(T0 + 5 * MIN), "time", "the view learns time is up");
    assert.equal(run.current().it, "parola0", "and the card the student is on stays theirs");
    assert.equal(box.Core.state.reviews.length, 0);
  });
});

describe("new words from the reserve", () => {
  const nowe = () => [
    { it: "il gatto", tr: "kot", src: "a1-u02-l1", fresh: true },
    { it: "il cane", tr: "pies", src: "a1-u02-l1", fresh: true },
    { it: "la casa", tr: "dom", src: "a1-u01-l2", fresh: true }
  ];

  test("a new word enters the deck only when it is answered", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create(nowe(), T0);
    assert.equal(Object.keys(box.Core.state.srs).length, 0, "starting a session adds nothing");
    assert.equal(box.Core.dueCount(), 0);

    run.answer(4, true, T0);
    run.answer(0, false, T0);
    const w = Object.keys(box.Core.state.srs);
    assert.equal(w.length, 2, "two answered, two in the deck, not three");
    const kot = box.Core.state.srs[box.Core.cardKey("il gatto")];
    assert.equal(kot.src, "a1-u02-l1");
    assert.equal(kot.reps, 1, "and it was graded, not just added");
  });

  test("a word the deck refuses is skipped without a grade", () => {
    const box = silnik();
    const run = box.sandbox.FlashRun.create([{ it: "__proto__", tr: "x", src: "t", fresh: true }, nowe()[0]], T0);
    assert.equal(run.answer(4, true, T0), null);
    assert.equal(box.Core.state.reviews.length, 0);
    assert.equal(run.current().it, "il gatto");
  });
});
