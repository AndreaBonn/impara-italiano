/* ============================================================
   The new-version announcement (assets/js/pwa.js).

   The rules are checked by pwa-rules.test.mjs; here it is about WIRING them
   to the states the browser exposes in a particular order. That is where
   this feature breaks silently: code reading `registration.waiting` in the
   `updatefound` handler looks correct, passes every test that prepares the
   state ready-made, and shows the message NOT ONCE after a real release —
   because at the moment of that event `waiting` is still empty.

   That is why the double (`box.guska`) moves the states one at a time, in
   the browser's order: znaleziono -> zainstalowany -> przejmuje.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, PWA } from "./_harness.mjs";

/** Registration is a promise: without yielding control nothing has happened yet. */
const mikro = () => Promise.resolve().then(() => {}).then(() => {});

/**
 * The course loaded and registered.
 * `kontroler` is the state of the page AT LOAD TIME: null = a first visit.
 */
async function otwarty(opcje) {
  const box = loadEngine({ files: PWA, readyState: "complete", ...(opcje || {}) });
  await mikro();
  return box;
}

describe("registration", () => {
  test("over http(s) the worker is registered", async () => {
    const box = await otwarty();
    assert.deepEqual(box.guska.log.rejestracje, ["sw.js"]);
  });

  /* The course must open by double-clicking from disk. Registration throws
     there, so the guard sits on the protocol rather than in a try/catch. */
  test("from file:// we do not touch the worker at all", async () => {
    const box = await otwarty({ protocol: "file:" });
    assert.deepEqual(box.guska.log.rejestracje, []);
  });

  test("a browser with no service worker: silence, not an exception", async () => {
    const box = await otwarty({ brakGuski: true });
    assert.equal(box.sandbox.PWA.register(), false);
  });

  test("a refused registration does not vanish silently", async () => {
    const box = await otwarty({ rejestracjaOdrzuca: true });
    await mikro();
    assert.match(box.warnings.join(" "), /Service worker niezarejestrowany/);
  });

  /* In a finished page this file is sometimes executed AFTER the "load"
     event, and then the handler would never fire: the course works, offline
     mode does not. */
  test("the page is still loading: registration waits for \"load\"", async () => {
    const box = loadEngine({ files: PWA });      // readyState: "loading"
    await mikro();
    assert.deepEqual(box.guska.log.rejestracje, [], "nothing before the event");
    box.okno.odpal("load");
    await mikro();
    assert.deepEqual(box.guska.log.rejestracje, ["sw.js"]);
  });
});

describe("the announcement after a release", () => {
  /* The browser sequence in full. If the announcement read
     `registration.waiting` in the `updatefound` handler, this test would be
     red: at that moment `waiting` is empty. */
  test("a new version found and installed: a message with a button", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.guska.znaleziono();
    assert.deepEqual(box.visible(), [], "in \"installing\" there is nothing to announce yet");

    box.guska.zainstalowany();
    assert.equal(box.visible().length, 1);
    assert.match(box.visible()[0], /pwa\.updateReady/);
    assert.match(box.notices[0].className, /toast--stuck/, "the message stays, it does not vanish after 3 s");
  });

  test("first visit: the same sequence, no message at all", async () => {
    const box = await otwarty();                 // controller: null
    box.guska.znaleziono();
    box.guska.zainstalowany();
    assert.deepEqual(box.visible(), []);
  });

  /* A version deferred to "later" will send no further event: it has been in
     the queue since the previous visit and is visible only in `waiting`. */
  test("a version waiting since the previous visit returns on opening", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, waiting: true });
    assert.equal(box.visible().length, 1);
  });
});

describe("update", () => {
  async function zKomunikatem() {
    const box = await otwarty({ kontroler: { state: "activated" }, waiting: true });
    return { box, przyciski: box.notices[0].children };
  }

  /* Field by field, not deepEqual: the object was created in the sandbox, so
     it has the sandbox's Object.prototype and a deep comparison rejects it
     despite the same content. */
  test("it asks the waiting worker to take over", async () => {
    const { box, przyciski } = await zKomunikatem();
    przyciski[0].fire("click");
    assert.equal(box.guska.log.wiadomosci.length, 1);
    assert.equal(box.guska.log.wiadomosci[0].typ, "przejmij");
  });

  /* A reload in the click handler would open the OLD version once again: at
     the moment of the click the worker is only just receiving the request. */
  test("it does not reload on the click, only once the takeover happens", async () => {
    const { box, przyciski } = await zKomunikatem();
    przyciski[0].fire("click");
    assert.equal(box.okno.przeladowania.ile, 0, "not yet");

    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 1);
  });

  /* Two releases in a row while the message is already on screen: Notice will
     not show it twice under the same key, and by then the first worker has
     been discarded by the browser. A remembered reference would leave the
     student with a button that does nothing and says nothing about it. */
  test("after a second release the button asks the NEW worker, not the announced one", async () => {
    const { box, przyciski } = await zKomunikatem();
    const pierwszy = box.guska.rejestracja.waiting.nr;

    box.guska.znaleziono();
    const drugi = box.guska.zainstalowany().nr;
    assert.notEqual(drugi, pierwszy);
    assert.equal(box.visible().length, 1, "the same key does not multiply the message");

    przyciski[0].fire("click");
    assert.deepEqual(box.guska.log.odbiorcy, [drugi]);
  });

  test("the cross dismisses without sending anything", async () => {
    const { box, przyciski } = await zKomunikatem();
    przyciski[1].fire("click");
    assert.deepEqual(box.guska.log.wiadomosci, []);
    assert.deepEqual(box.visible(), []);
  });
});

describe("taking over control", () => {
  /* A tab where nobody clicked anything. The new worker already serves its
     requests, so running the old code any further is exactly the mismatch
     this whole feature defends against. */
  test("the second tab reloads by itself", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 1);
  });

  test("a first visit does not reload: that is the first takeover, not a version change", async () => {
    const box = await otwarty();
    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 0);
  });

  test("two events are still one reload, not a loop", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.guska.przejmuje();
    box.guska.przejmuje();
    assert.equal(box.okno.przeladowania.ile, 1);
  });
});

describe("returning to the foreground", () => {
  /* Registration is itself a check, so the threshold runs from it: a return
     right after the page opens has no reason to ask a second time. */
  test("after the threshold has passed it asks the server about a new version", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, now: 1000 });
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 0, "not yet, right after registration");

    box.przesunZegar(box.sandbox.PwaRules.PRZERWA);
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 1);
  });

  /* Switching between two applications must not turn into a burst of
     requests: that is the whole reason the threshold exists. */
  test("two window switches in a row are one request, not two", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, now: 1000 });
    box.przesunZegar(box.sandbox.PwaRules.PRZERWA);
    box.wDokumencie("visibilitychange");
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 1);
  });

  test("a hidden tab asks for nothing", async () => {
    const box = await otwarty({ kontroler: { state: "activated" } });
    box.sandbox.document.visibilityState = "hidden";
    box.wDokumencie("visibilitychange");
    assert.equal(box.guska.log.sprawdzenia, 0);
  });

  /* A deferral to "later" returns at every opening of the course, and on an
     installed application the opening is precisely a return to the
     foreground. */
  test("a waiting version is announced again", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, waiting: true });
    box.notices[0].children[1].fire("click");           // the cross: later
    assert.deepEqual(box.visible(), []);

    box.wDokumencie("visibilitychange");
    assert.equal(box.visible().length, 1, "it came back at the next opening");
  });

  test("no network when asking about a version does not bring the course down", async () => {
    const box = await otwarty({ kontroler: { state: "activated" }, updateOdrzuca: true, now: 0 });
    assert.doesNotThrow(() => box.sandbox.PWA.check());
    await mikro();
  });
});
