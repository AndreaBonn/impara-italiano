/* ============================================================
   Student progress: streak, answer counters, where I am in the course
   (assets/js/core.js).

   Everything here is a number the student sees in the sidebar and on the
   progress screen. None of them brings the course down when it breaks: a
   streak resetting for no reason looks like a forgotten day, a points
   counter adding twice looks like generous marking, and a "where I am"
   pointing at the wrong lesson looks like a decision of the course. That
   is why they have a test.

   The date is supplied by the sandbox (`now`), not taken from the clock:
   a streak counts in DAYS, so a test on the real date would pass every
   minute but one per day — and at midnight it would report a fault that
   does not exist.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/** Noon, so the timezone does not shift the day. */
function dzien(iso) { return new Date(iso + "T12:00:00").getTime(); }

function silnik(iso) {
  const box = loadEngine({ now: dzien(iso || "2026-03-10") });
  box.Core.load();
  return box;
}

describe("the streak", () => {
  test("the first day of study starts the streak at one", () => {
    const box = silnik("2026-03-10");
    box.Core.touchDay();
    const s = box.Core.state.streak;

    assert.equal(s.count, 1);
    assert.equal(s.best, 1);
    assert.equal(s.lastDay, "2026-03-10");
  });

  test("a second visit on the same day adds nothing", () => {
    const box = silnik("2026-03-10");
    box.Core.touchDay();
    box.Core.touchDay();
    assert.equal(box.Core.state.streak.count, 1);
  });

  test("day after day extends the streak", () => {
    const box = silnik("2026-03-11");
    box.Core.state.streak = { count: 4, lastDay: "2026-03-10", best: 4 };
    box.Core.touchDay();
    const s = box.Core.state.streak;

    assert.equal(s.count, 5);
    assert.equal(s.best, 5);
  });

  test("a missed day restarts the streak, but the record stays", () => {
    /* The record is what the student has already achieved: clearing it
       together with the streak would erase the proof of work nobody can
       take away from them. */
    const box = silnik("2026-03-13");
    box.Core.state.streak = { count: 9, lastDay: "2026-03-10", best: 9 };
    box.Core.touchDay();
    const s = box.Core.state.streak;

    assert.equal(s.count, 1, "a three-day gap is not a continuation");
    assert.equal(s.best, 9);
  });

  test("a month boundary is still the next day, not a gap", () => {
    /* The gap is counted on dates, not on the day number within the
       month: a "1" after a "31" would look like thirty days backwards. */
    const box = silnik("2026-04-01");
    box.Core.state.streak = { count: 2, lastDay: "2026-03-31", best: 2 };
    box.Core.touchDay();
    assert.equal(box.Core.state.streak.count, 3);
  });

  test("a day of study opens its counter even before any answer is given", () => {
    const box = silnik("2026-03-10");
    box.Core.touchDay();
    assert.equal(box.Core.state.stats.days["2026-03-10"], 0);
  });
});

describe("answer counters", () => {
  test("a right answer gives an experience point, a wrong one takes none away", () => {
    const box = silnik();
    box.Core.recordAnswer(true);
    box.Core.recordAnswer(false);
    const st = box.Core.state;

    assert.equal(st.stats.correct, 1);
    assert.equal(st.stats.wrong, 1);
    assert.equal(st.xp, 1, "we do not subtract for a mistake: the course does not punish trying");
  });

  test("the counter reaches storage, not only memory", () => {
    const box = silnik();
    box.Core.recordAnswer(true);
    box.flush();
    assert.equal(box.stored().stats.correct, 1);
  });
});

describe("lesson state", () => {
  test("an unknown lesson has no state and is not passed", () => {
    const box = silnik();
    assert.equal(box.Core.lessonState("a1-u01-l1"), null);
    assert.equal(box.Core.isLessonDone("a1-u01-l1"), false);
  });

  test("a score below the threshold records an attempt but does not pass", () => {
    /* The 70% threshold is a product decision described in the lesson
       content: a change here has to show up as a change of the test, not
       quietly. */
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 6, 10, 0);

    assert.equal(box.Core.isLessonDone("a1-u01-l1"), false);
    assert.equal(box.Core.lessonState("a1-u01-l1").attempts, 1);
  });

  test("a score at or above the threshold passes the lesson and gives twenty points", () => {
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 7, 10, 0);
    const st = box.Core.state;

    assert.equal(box.Core.isLessonDone("a1-u01-l1"), true);
    assert.equal(st.stats.lessonsDone, 1);
    assert.equal(st.xp, 20 + 7 * 2, "the pass bonus plus two points per answer");
  });

  test("a weaker repeat neither revokes the pass nor counts it twice", () => {
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 10, 10, 0);
    box.Core.recordLesson("a1-u01-l1", 2, 10, 0);
    const st = box.Core.state;

    assert.equal(box.Core.isLessonDone("a1-u01-l1"), true, "passed stays passed");
    assert.equal(st.stats.lessonsDone, 1, "counted once, despite two attempts");
    assert.equal(box.Core.lessonState("a1-u01-l1").best, 1, "the best score stays the best");
  });
});

describe("where I am in the course", () => {
  const POZIOM = {
    code: "A1",
    units: [
      { id: "u1", lessons: [{ id: "l1" }, { id: "l2" }], test: { id: "t1" } },
      { id: "u2", lessons: [{ id: "l3" }] }
    ]
  };

  function zdane(box, ids) {
    ids.forEach((id) => box.Core.recordLesson(id, 10, 10, 0));
  }

  test("unit progress counts its test as well", () => {
    const box = silnik();
    zdane(box, ["l1"]);
    const p = box.Core.unitProgress(POZIOM.units[0]);

    assert.equal(p.total, 3, "two lessons and a test");
    assert.equal(p.done, 1);
    assert.equal(Math.round(p.pct * 100), 33);
  });

  test("level progress sums the units, it does not average their percentages", () => {
    /* Averaging the percentages would give a unit with one lesson the
       same weight as a unit with ten. */
    const box = silnik();
    zdane(box, ["l1", "l2", "t1"]);
    const p = box.Core.levelProgress(POZIOM);

    assert.equal(p.done, 3);
    assert.equal(p.total, 4);
  });

  test("an empty unit does not divide by zero", () => {
    const box = silnik();
    assert.equal(box.Core.unitProgress({ id: "x" }).pct, 0);
    assert.equal(box.Core.levelProgress({ code: "X" }).pct, 0);
  });

  test("the next lesson is the first unpassed one, in order", () => {
    const box = silnik();
    zdane(box, ["l1"]);
    assert.equal(box.Core.nextLesson(POZIOM).lesson.id, "l2");
  });

  test("after a unit's lessons comes its test, not the next unit", () => {
    const box = silnik();
    zdane(box, ["l1", "l2"]);
    assert.equal(box.Core.nextLesson(POZIOM).lesson.id, "t1");
  });

  test("a level worked through in full has no next lesson", () => {
    const box = silnik();
    zdane(box, ["l1", "l2", "t1", "l3"]);
    assert.equal(box.Core.nextLesson(POZIOM), null);
  });
});

describe("the backup file", () => {
  test("the file that goes out already carries the new backup marker", () => {
    /* We set the marker BEFORE serialising. Otherwise a restored backup
       says "last save: ten lessons ago" and asks for another one right
       after being restored. */
    const box = silnik();
    box.Core.recordLesson("a1-u01-l1", 10, 10, 0);
    box.Core.downloadBackup();

    const plik = JSON.parse(box.pobrania.blobs[0].tresc);
    assert.equal(plik.backup.at, box.Core.state.stats.lessonsDone);
    assert.ok(plik.backup.ts > 0, "the backup timestamp is in the file, not only in memory");
  });

  test("the file name carries the explanation language and the date, so two backups do not merge", () => {
    const box = silnik("2026-03-10");
    box.Core.downloadBackup();
    const a = box.utworzone[box.utworzone.length - 1];

    assert.equal(a.download, "impara-italiano-pl-2026-03-10.json");
    assert.equal(a.klikniecia, 1, "the link has to be clicked, otherwise nothing is downloaded");
    assert.equal(box.pobrania.blobs[0].type, "application/json");
  });

  test("the file handle is released, not left in the browser's memory", () => {
    const box = silnik();
    box.Core.downloadBackup();
    assert.equal(box.pobrania.zwolnione.length, 0, "not immediately: the link has to get a chance to work");

    box.flush();
    assert.equal(box.pobrania.zwolnione.length, 1);
  });
});
