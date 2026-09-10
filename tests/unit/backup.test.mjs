/* ============================================================
   The backup reminder.

   The course has no account and no synchronisation: the only copy of the
   progress is a file the student saves themselves. The reminder is therefore
   the only thing standing between them and a cleared browser storage — which
   is why it has tests here, and not only code.

   The threshold counts FINISHED lessons, not attempts: whoever repeats the
   same lesson ten times has made no new progress and has nothing to lose.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const KEY = "linguai.italiano.v2";
const CO_ILE = 10;

/** Passes n successive, DIFFERENT lessons: each counts as finished. */
function zdaj(box, n, od) {
  const start = od || 0;
  for (let i = 0; i < n; i++) box.Core.recordLesson("l-" + (start + i), 10, 10, 60);
}

function swiezy() {
  const box = loadEngine();
  box.Core.load();
  return box;
}

describe("the backup threshold", () => {
  test("nowy profil nie zaczyna od przypomnienia", () => {
    const box = swiezy();
    assert.equal(box.Core.backupDue(), false);
    assert.equal(box.visible().length, 0, "i nic nie wisi na ekranie");
  });

  test("the ninth lesson stays quiet, the tenth reminds", () => {
    const box = swiezy();

    zdaj(box, CO_ILE - 1);
    assert.equal(box.Core.backupDue(), false, "przed progiem");
    assert.equal(box.visible().length, 0, "i bez komunikatu");

    zdaj(box, 1, CO_ILE - 1);
    assert.equal(box.Core.backupDue(), true, "na progu");
    assert.equal(box.visible().length, 1, "z komunikatem");
  });

  test("the message stays on screen and carries the number of lessons", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.flush();

    const el = box.notices[0];
    assert.match(el.className, /toast--stuck/, "nie znika po trzech sekundach");
    assert.equal(el.getAttribute("role"), "alert");
    assert.match(box.visible()[0], /n=10/, "the student sees how many lessons it concerns");
  });

  test("a repeated lesson does not bring the reminder closer", () => {
    const box = swiezy();
    zdaj(box, CO_ILE - 1);
    for (let i = 0; i < 5; i++) box.Core.recordLesson("l-0", 10, 10, 60);

    assert.equal(box.Core.backupDue(), false, "that is the same progress, not new progress");
    assert.equal(box.visible().length, 0);
  });

  test("saving a copy moves the threshold by another ten", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.markBackup();

    assert.equal(box.Core.backupDue(), false, "zaraz po kopii");
    zdaj(box, CO_ILE - 1, CO_ILE);
    assert.equal(box.Core.backupDue(), false, "nine lessons later");
    zdaj(box, 1, 2 * CO_ILE - 1);
    assert.equal(box.Core.backupDue(), true, "ten lessons later");
  });

  /* Dismissing the message is "not now", not "I have a copy". If both moved
     the same field, after a dismissal the course would consider the progress
     secured and would never ask about it again. */
  test("deferring goes quiet for ten lessons but does not pretend to be a copy", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.snoozeBackup();

    assert.equal(box.Core.backupDue(), false, "right after the deferral");
    assert.equal(box.Core.state.backup.at, 0, "no copy was saved");

    zdaj(box, CO_ILE - 1, CO_ILE);
    assert.equal(box.Core.backupDue(), false, "nine lessons later");
    zdaj(box, 1, 2 * CO_ILE - 1);
    assert.equal(box.Core.backupDue(), true, "ten lessons later it asks again");
  });

  test("a copy saved after a deferral counts from itself", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.snoozeBackup();
    zdaj(box, 5, CO_ILE);
    box.Core.markBackup();

    assert.equal(box.Core.state.backup.at, CO_ILE + 5);
    zdaj(box, CO_ILE - 1, CO_ILE + 5);
    assert.equal(box.Core.backupDue(), false, "the threshold runs from the copy, not from the deferral");
  });

  test("the backup marker survives a save and a load", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.markBackup();
    box.flush();

    assert.equal(box.stored(KEY).backup.at, CO_ILE, "it is in localStorage");

    const drugi = loadEngine({ seed: { [KEY]: box.storage.getItem(KEY) } });
    drugi.Core.load();
    assert.equal(drugi.Core.backupDue(), false, "po ponownym otwarciu kursu");
  });

  /* The order inside downloadBackup: the marker BEFORE serialization. The
     other way round releases a file with a stale marker, so a student
     restoring a copy gets a reminder immediately after the import — about
     the copy they have just loaded. */
  test("a restored copy does not immediately ask for another", () => {
    const box = swiezy();
    zdaj(box, CO_ILE);
    box.Core.markBackup();
    const plik = box.Core.exportState();

    const drugi = swiezy();
    drugi.Core.importState(plik);
    assert.equal(drugi.Core.backupDue(), false);
  });

  test("a file with a broken backup field does not go in at all", () => {
    const box = swiezy();
    const zly = JSON.stringify({ schema: 2, backup: "wczoraj" });

    assert.throws(() => box.Core.importState(zly), (e) => e.key === "set.errBadField");
    assert.equal(box.Core.state.backup.at, 0, "the state was left untouched");
  });
});
