/* ============================================================
   Where the student is among a lesson's exercises (lesson-run.js).

   The failure this guards against is silent: a lesson closes only when
   every exercise has an answer, so a step that skips one, or a second
   report that flips a wrong answer to a right one, shows up as a lesson
   that never ends or a score that is too kind.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function R() { return loadEngine({ files: ["assets/js/lesson-run.js"] }).sandbox.LessonRun; }

describe("one exercise at a time", () => {
  test("a new lesson starts at the first exercise with every one open", () => {
    const s = R().create(4);
    assert.equal(s.current, 0);
    assert.deepEqual([...R().unanswered(s)], [0, 1, 2, 3]);
    assert.equal(R().isDone(s), false);
  });

  test("an answer is recorded once: a second report changes nothing", () => {
    const L = R();
    let s = L.answer(L.create(3), 1, false);
    s = L.answer(s, 1, true);
    assert.deepEqual([...L.wrong(s)], [1]);
    assert.deepEqual([...L.unanswered(s)], [0, 2]);
  });

  test("answering does not mutate the previous state", () => {
    const L = R();
    const a = L.create(2);
    L.answer(a, 0, true);
    assert.equal(a.answers[0], null);
  });

  test("Next leads to the next open exercise, then back to one skipped", () => {
    const L = R();
    let s = L.create(4);
    s = L.answer(s, 0, true);
    assert.equal(L.next(s), 1);
    s = L.go(s, 2);
    s = L.answer(s, 2, true);
    assert.equal(L.next(s), 3);
    s = L.answer(L.go(s, 3), 3, false);
    assert.equal(L.next(s), 1, "the skipped exercise comes back");
  });

  test("with everything answered Next walks on and stops after the last", () => {
    const L = R();
    let s = L.create(2);
    s = L.answer(L.answer(s, 0, true), 1, true);
    assert.equal(L.isDone(s), true);
    assert.equal(L.next(s), 1);
    assert.equal(L.next(L.go(s, 1)), null);
  });

  test("going outside the lesson leaves the state where it was", () => {
    const L = R();
    const s = L.create(2);
    assert.equal(L.go(s, 5), s);
    assert.equal(L.go(s, -1), s);
    assert.equal(L.answer(s, 9, true), s);
  });

  test("a lesson without exercises is not done", () => {
    assert.equal(R().isDone(R().create(0)), false);
  });
});
