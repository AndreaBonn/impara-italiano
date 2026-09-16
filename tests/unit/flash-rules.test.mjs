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
