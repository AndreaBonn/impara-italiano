/* ============================================================
   Wejście przez plik: import stanu.

   To jedyne miejsce, w którym do aplikacji trafia treść, której
   nie napisał autor kursu. Plik z postępami wędruje między
   urządzeniami i między ludźmi — więc trzeba go traktować jak
   dane obce, nie jak własny zapis.
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
    try { box.Core.importState(wrogi); } catch { /* odrzucenie też jest w porządku */ }

    assert.equal(probePrototype(box, "polluted"), undefined,
      "Object.prototype w piaskownicy został zapisany przez plik z zewnątrz");
  });

  test("zagnieżdżony __proto__ też nie przechodzi", () => {
    const box = loadEngine();
    box.Core.load();

    const wrogi = JSON.stringify({
      schema: SCHEMA,
      settings: JSON.parse('{"__proto__":{"zagniezdzone":"yes"}}')
    });
    try { box.Core.importState(wrogi); } catch { /* jw. */ }

    assert.equal(probePrototype(box, "zagniezdzone"), undefined);
  });

  test("constructor.prototype nie jest drogą naokoło", () => {
    const box = loadEngine();
    box.Core.load();

    const wrogi = '{"schema":2,"constructor":{"prototype":{"obejscie":"yes"}}}';
    try { box.Core.importState(wrogi); } catch { /* jw. */ }

    assert.equal(probePrototype(box, "obejscie"), undefined);
  });

  test("zwykły import nadal działa po uszczelnieniu", () => {
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
