/* ============================================================
   On-screen messages (assets/js/notice.js).

   Two kinds, differing in one thing: whether the student MUST see them. A
   toast disappears on its own after 3.2 s and may be missed. A persistent
   message stays until dismissed, because it speaks of data loss or asks for
   a backup — and those are the only two things in the course that cannot be
   recovered by studying further.

   The branch after a click (unlocking the key, calling onAction and
   onDismiss) had no unit test at all until recently, because the DOM double
   threw away the event handlers. Now it keeps them and they can be fired
   through el.fire("click").
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/** The message module alone, with no state and no SRS — it needs neither. */
function swiezy() {
  return loadEngine({ files: ["assets/js/notice.js"] });
}

/** The message buttons in the order they are added: the action (if any), then the cross. */
function przyciski(el) { return el.children; }

describe("toast", () => {
  test("the string reaches the screen", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("zapisano");
    assert.deepEqual(box.visible(), ["zapisano"]);
  });

  test("it disappears after the time is up, unlike a persistent message", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("zapisano");
    assert.equal(box.visible().length, 1, "visible at first");
    box.flush();
    assert.equal(box.visible().length, 0, "no longer after the time");
  });

  test("the \"ok\" variant adds a class of its own, a plain toast does not", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("gotowe", "ok");
    box.sandbox.Notice.toast("uwaga");
    assert.match(box.notices[0].className, /toast--ok/);
    assert.doesNotMatch(box.notices[1].className, /toast--ok/);
  });

  test("the string goes through textContent, so markup stays a string", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("<b>x</b>");
    assert.equal(box.notices[0].textContent, "<b>x</b>");
    assert.equal(box.notices[0].innerHTML, "", "nothing went in as HTML");
  });

  test("the same string twice is two toasts: repetition is not a fault here", () => {
    const box = swiezy();
    box.sandbox.Notice.toast("zapisano");
    box.sandbox.Notice.toast("zapisano");
    assert.equal(box.visible().length, 2);
  });
});

describe("a persistent message", () => {
  test("it stays on screen after the toast time is up", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    box.flush();
    assert.equal(box.visible().length, 1);
    assert.match(box.notices[0].className, /toast--stuck/);
    assert.equal(box.notices[0].getAttribute("role"), "alert", "a screen reader is meant to interrupt its reading");
  });

  test("the same key does not multiply on every save", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    box.sandbox.Notice.notice("core.saveBlocked");
    box.sandbox.Notice.notice("core.saveBlocked");
    assert.equal(box.visible().length, 1);
  });

  test("a different key is a different message; the lock is on the key, not on the screen", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    box.sandbox.Notice.notice("core.storagePruned");
    assert.equal(box.visible().length, 2);
  });

  test("the variables reach the translation rather than getting lost on the way", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.backupDue", { vars: { n: 10 } });
    assert.match(box.visible()[0], /n=10/);
  });

  test("with no message stack nothing happens and nothing blows up", () => {
    const box = swiezy();
    box.sandbox.document.getElementById = () => null;
    assert.doesNotThrow(() => box.sandbox.Notice.notice("core.saveBlocked"));
    assert.doesNotThrow(() => box.sandbox.Notice.toast("cokolwiek"));
  });
});

describe("dismissing a message", () => {
  test("the cross takes the message off the screen", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    const x = przyciski(box.notices[0])[0];
    assert.equal(x.className, "toast__x");
    x.fire("click");
    assert.equal(box.visible().length, 0);
  });

  test("the cross calls onDismiss exactly once", () => {
    const box = swiezy();
    let ile = 0;
    box.sandbox.Notice.notice("core.backupDue", { onDismiss: () => ile++ });
    przyciski(box.notices[0])[0].fire("click");
    assert.equal(ile, 1);
  });

  /* Without unlocking the key a message dismissed once would never return:
     the repeat lock is there so that it does not multiply within one
     session, not so that it is switched off for the rest of the course. */
  test("after dismissal the same key may come again", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    przyciski(box.notices[0])[0].fire("click");
    box.sandbox.Notice.notice("core.saveBlocked");
    assert.equal(box.visible().length, 1, "it came back");
  });
});

describe("the action button", () => {
  const opcje = (spy) => ({ actionKey: "core.backupSave", onAction: spy });

  test("it exists only when the message asks for something", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.saveBlocked");
    assert.equal(przyciski(box.notices[0]).length, 1, "the cross alone");

    box.sandbox.Notice.notice("core.backupDue", opcje(() => {}));
    assert.equal(przyciski(box.notices[1]).length, 2, "the action and the cross");
  });

  test("a string key alone with no handler does not create a dead button", () => {
    const box = swiezy();
    box.sandbox.Notice.notice("core.backupDue", { actionKey: "core.backupSave" });
    assert.equal(przyciski(box.notices[0]).length, 1);
  });

  test("a click calls the action and takes the message down", () => {
    const box = swiezy();
    let ile = 0;
    box.sandbox.Notice.notice("core.backupDue", opcje(() => ile++));
    przyciski(box.notices[0])[0].fire("click");
    assert.equal(ile, 1);
    assert.equal(box.visible().length, 0);
  });

  /* The distinction the backup threshold rests on: a copy that was made
     moves `backup.at`, while deferring moves `backup.snoozed`. If the action
     called both handlers, the course would treat a saved copy as a deferral
     and would stop reminding. Both clicks in ONE test, because what is
     checked is the difference between them, not their absence. */
  test("onDismiss is called by the cross, not by a completed action", () => {
    const box = swiezy();
    let odlozone = 0;
    const opts = { actionKey: "core.backupSave", onAction: () => {}, onDismiss: () => odlozone++ };

    box.sandbox.Notice.notice("core.backupDue", opts);
    przyciski(box.notices[0])[0].fire("click");
    assert.equal(odlozone, 0, "saving a copy is not deferring");

    box.sandbox.Notice.notice("core.backupDue", opts);
    const drugi = box.notices[1];
    przyciski(drugi)[1].fire("click");
    assert.equal(odlozone, 1, "the cross defers");
  });
});

describe("the exposure in Core", () => {
  test("Core.toast and Core.notice are the same functions, not copies", () => {
    const box = loadEngine();
    assert.equal(box.Core.toast, box.sandbox.Notice.toast);
    assert.equal(box.Core.notice, box.sandbox.Notice.notice);
  });
});
