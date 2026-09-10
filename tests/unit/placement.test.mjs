/* ============================================================
   The placement test: the search logic alone.

   The view shows the tasks, but whether the student lands on the right level
   is settled by this arithmetic. Checkable without a browser and without a
   single real exercise.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "assets/js/placement.js"];
const KODY = ["A1", "A2", "B1", "B2", "C1", "C2"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  /* Six empty levels: the run logic needs no content. */
  KODY.forEach(code => box.Core.registerLevel({ code: code, dataFiles: [], units: [] }));
  return box;
}

/**
 * Walks the whole test, playing a student who passes everything up to and
 * including level `az`, and nothing above it.
 */
function przejdz(box, az) {
  const P = box.sandbox.Placement;
  let p = P.nowyPrzebieg("seed");
  let rundy = 0;
  for (;;) {
    const kod = P.nastepnyPoziom(p);
    if (!kod) break;
    if (++rundy > 10) throw new Error("the run does not end");
    const zdaje = KODY.indexOf(kod) <= KODY.indexOf(az);
    P.zapiszRunde(p, kod, zdaje ? P.NA_RUNDE : 0, P.NA_RUNDE);
  }
  return { wynik: P.wynik(p), rundy, p };
}

describe("wyszukiwanie poziomu", () => {
  KODY.forEach(az => {
    test(`a student at level ${az} is placed at ${az}`, () => {
      const box = silnik();
      assert.equal(przejdz(box, az).wynik.code, az);
    });
  });

  test("whoever passes nothing lands on A1", () => {
    const box = silnik();
    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    let kod;
    while ((kod = P.nastepnyPoziom(p))) P.zapiszRunde(p, kod, 0, P.NA_RUNDE);
    assert.equal(P.wynik(p).code, "A1");
  });

  test("six levels fit into three rounds", () => {
    const box = silnik();
    KODY.forEach(az => {
      assert.ok(przejdz(box, az).rundy <= 3, `${az}: ${przejdz(box, az).rundy} rund`);
    });
  });

  test("the whole test is eighteen tasks at most", () => {
    const box = silnik();
    KODY.forEach(az => {
      assert.ok(przejdz(box, az).wynik.asked <= 18, `${az}: ${przejdz(box, az).wynik.asked} tasks`);
    });
  });

  test("a score just under the threshold does not pass the level", () => {
    const box = silnik();
    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    /* 4 out of 6 is 0.67, the threshold is 0.7 */
    P.zapiszRunde(p, "B1", 4, 6);
    assert.ok(P.wynik(p).index < KODY.indexOf("B1"));
  });
});

describe("zastosowanie wyniku", () => {
  test("the lessons of the lower levels are marked, the target level stays open", () => {
    const box = silnik();
    /* Two levels with one lesson each. */
    box.Core.registry.byCode.A1.units = [{ id: "u1", lessons: [{ id: "a1-l1" }], test: { id: "a1-test" } }];
    box.Core.registry.byCode.A2.units = [{ id: "u2", lessons: [{ id: "a2-l1" }], test: { id: "a2-test" } }];

    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    P.zapiszRunde(p, "A2", 6, 6);      // passed A2
    const r = P.zastosuj(p);

    assert.equal(box.Core.state.lessons["a1-l1"].done, true, "A1 zaliczone");
    assert.equal(box.Core.state.lessons["a1-test"].done, true);
    assert.equal(box.Core.state.lessons["a2-l1"], undefined, "poziom docelowy zostaje do zrobienia");
    assert.equal(r.marked, 2);
  });

  test("marked lessons give no points and do not enter the statistics", () => {
    const box = silnik();
    box.Core.registry.byCode.A1.units = [{ id: "u1", lessons: [{ id: "a1-l1" }, { id: "a1-l2" }] }];
    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    P.zapiszRunde(p, "A2", 6, 6);
    P.zastosuj(p);

    assert.equal(box.Core.state.xp, 0, "there are no points for lessons that were not done");
    assert.equal(box.Core.state.stats.lessonsDone, 0, "the finished counter tells the truth");
    assert.equal(box.Core.state.lessons["a1-l1"].placed, true, "you can see where the pass came from");
  });

  test("the test does not erase progress the student already has", () => {
    const box = silnik();
    box.Core.registry.byCode.A1.units = [{ id: "u1", lessons: [{ id: "a1-l1" }] }];
    box.Core.recordLesson("a1-l1", 10, 10, 60);
    const przed = box.Core.state.lessons["a1-l1"].score;

    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    P.zapiszRunde(p, "A2", 6, 6);
    P.zastosuj(p);

    assert.equal(box.Core.state.lessons["a1-l1"].score, przed, "the real score untouched");
    assert.equal(box.Core.state.lessons["a1-l1"].placed, undefined);
  });

  test("the result is stored in the state and survives the save", () => {
    const box = silnik();
    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    P.zapiszRunde(p, "B1", 6, 6);
    P.zastosuj(p);
    box.flush();

    const zapis = box.stored("linguai.italiano.v2");
    assert.equal(zapis.placement.level, "B1");
    assert.ok(zapis.placement.ts > 0);
    assert.equal(zapis.placement.history.length, 1);
  });
});

describe("the task pool", () => {
  test("it takes tasks from the unit tests and skips the microphone types", () => {
    const box = silnik();
    box.Core.registry.byCode.B1.units = [{
      id: "u", lessons: [],
      test: {
        id: "b1-test",
        exercises: [
          { t: "mcq", a: 0 }, { t: "speak", it: "ciao" },
          { t: "fill", a: ["sono"] }, { t: "dialogue", lines: [] }
        ]
      }
    }];
    const pula = box.sandbox.Placement.pulaDla("B1", "s");
    const typy = pula.map(x => x.ex.t).sort();
    assert.deepEqual(JSON.stringify(typy), JSON.stringify(["fill", "mcq"]));
  });

  test("an unknown level gives an empty pool, not an exception", () => {
    assert.equal(silnik().sandbox.Placement.pulaDla("Z9", "s").length, 0);
  });
});
