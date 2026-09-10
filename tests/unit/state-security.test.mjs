/* ============================================================
   The way in through a file: importing the state.

   This is the only place where content the course author did not write
   reaches the application. A progress file travels between devices and
   between people — so it has to be treated as foreign data, not as our own
   save.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, probePrototype } from "./_harness.mjs";

const SCHEMA = 2;

describe("zanieczyszczenie prototypu", () => {
  test("klucz __proto__ w importowanym pliku nie dotyka Object.prototype", () => {
    const box = loadEngine();
    box.Core.load();

    const wrogi = '{"schema":2,"__proto__":{"polluted":"yes"}}';
    try { box.Core.importState(wrogi); } catch { /* a rejection is fine too */ }

    assert.equal(probePrototype(box, "polluted"), undefined,
      "Object.prototype in the sandbox was written by an outside file");
  });

  test("a nested __proto__ does not get through either", () => {
    const box = loadEngine();
    box.Core.load();

    const wrogi = JSON.stringify({
      schema: SCHEMA,
      settings: JSON.parse('{"__proto__":{"zagniezdzone":"yes"}}')
    });
    try { box.Core.importState(wrogi); } catch { /* jw. */ }

    assert.equal(probePrototype(box, "zagniezdzone"), undefined);
  });

  test("constructor.prototype is not a way around", () => {
    const box = loadEngine();
    box.Core.load();

    const wrogi = '{"schema":2,"constructor":{"prototype":{"obejscie":"yes"}}}';
    try { box.Core.importState(wrogi); } catch { /* jw. */ }

    assert.equal(probePrototype(box, "obejscie"), undefined);
  });

  test("an ordinary import still works after the sealing", () => {
    const box = loadEngine();
    box.Core.load();
    box.Core.recordLesson("a1-u01-l1", 9, 10, 40);
    const dump = box.Core.exportState();

    const drugi = loadEngine();
    drugi.Core.load();
    drugi.Core.importState(dump);
    assert.equal(drugi.Core.state.lessons["a1-u01-l1"].done, true);
  });
});
