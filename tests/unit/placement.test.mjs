/* ============================================================
   Test poziomujący: sama logika wyszukiwania.

   Widok pokazuje zadania, ale to, czy uczeń wyląduje na właściwym
   poziomie, rozstrzyga ta arytmetyka. Sprawdzalna bez przeglądarki
   i bez ani jednego prawdziwego ćwiczenia.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const PLIKI = ["assets/js/core.js", "assets/js/placement.js"];
const KODY = ["A1", "A2", "B1", "B2", "C1", "C2"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  /* Sześć pustych poziomów: logika przebiegu nie potrzebuje treści. */
  KODY.forEach(code => box.Core.registerLevel({ code: code, dataFiles: [], units: [] }));
  return box;
}

/**
 * Przechodzi cały test, udając ucznia, który zdaje wszystko do poziomu
 * `az` włącznie, a wyżej nie.
 */
function przejdz(box, az) {
  const P = box.sandbox.Placement;
  let p = P.nowyPrzebieg("seed");
  let rundy = 0;
  for (;;) {
    const kod = P.nastepnyPoziom(p);
    if (!kod) break;
    if (++rundy > 10) throw new Error("przebieg się nie kończy");
    const zdaje = KODY.indexOf(kod) <= KODY.indexOf(az);
    P.zapiszRunde(p, kod, zdaje ? P.NA_RUNDE : 0, P.NA_RUNDE);
  }
  return { wynik: P.wynik(p), rundy, p };
}

describe("wyszukiwanie poziomu", () => {
  KODY.forEach(az => {
    test(`uczeń na poziomie ${az} zostaje umieszczony na ${az}`, () => {
      const box = silnik();
      assert.equal(przejdz(box, az).wynik.code, az);
    });
  });

  test("kto nie zdaje niczego, ląduje na A1", () => {
    const box = silnik();
    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    let kod;
    while ((kod = P.nastepnyPoziom(p))) P.zapiszRunde(p, kod, 0, P.NA_RUNDE);
    assert.equal(P.wynik(p).code, "A1");
  });

  test("sześć poziomów mieści się w trzech rundach", () => {
    const box = silnik();
    KODY.forEach(az => {
      assert.ok(przejdz(box, az).rundy <= 3, `${az}: ${przejdz(box, az).rundy} rund`);
    });
  });

  test("cały test to najwyżej osiemnaście zadań", () => {
    const box = silnik();
    KODY.forEach(az => {
      assert.ok(przejdz(box, az).wynik.asked <= 18, `${az}: ${przejdz(box, az).wynik.asked} zadań`);
    });
  });

  test("wynik tuż pod progiem nie zalicza poziomu", () => {
    const box = silnik();
    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    /* 4 z 6 to 0.67, próg wynosi 0.7 */
    P.zapiszRunde(p, "B1", 4, 6);
    assert.ok(P.wynik(p).index < KODY.indexOf("B1"));
  });
});

describe("zastosowanie wyniku", () => {
  test("lekcje niższych poziomów są oznaczone, poziom docelowy zostaje otwarty", () => {
    const box = silnik();
    /* Dwa poziomy z jedną lekcją każdy. */
    box.Core.registry.byCode.A1.units = [{ id: "u1", lessons: [{ id: "a1-l1" }], test: { id: "a1-test" } }];
    box.Core.registry.byCode.A2.units = [{ id: "u2", lessons: [{ id: "a2-l1" }], test: { id: "a2-test" } }];

    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    P.zapiszRunde(p, "A2", 6, 6);      // zdał A2
    const r = P.zastosuj(p);

    assert.equal(box.Core.state.lessons["a1-l1"].done, true, "A1 zaliczone");
    assert.equal(box.Core.state.lessons["a1-test"].done, true);
    assert.equal(box.Core.state.lessons["a2-l1"], undefined, "poziom docelowy zostaje do zrobienia");
    assert.equal(r.marked, 2);
  });

  test("oznaczone lekcje nie dają punktów ani nie wchodzą do statystyki", () => {
    const box = silnik();
    box.Core.registry.byCode.A1.units = [{ id: "u1", lessons: [{ id: "a1-l1" }, { id: "a1-l2" }] }];
    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    P.zapiszRunde(p, "A2", 6, 6);
    P.zastosuj(p);

    assert.equal(box.Core.state.xp, 0, "punktów za nieodrobione lekcje nie ma");
    assert.equal(box.Core.state.stats.lessonsDone, 0, "licznik ukończonych mówi prawdę");
    assert.equal(box.Core.state.lessons["a1-l1"].placed, true, "widać, skąd wzięło się zaliczenie");
  });

  test("test nie kasuje postępu, który uczeń już ma", () => {
    const box = silnik();
    box.Core.registry.byCode.A1.units = [{ id: "u1", lessons: [{ id: "a1-l1" }] }];
    box.Core.recordLesson("a1-l1", 10, 10, 60);
    const przed = box.Core.state.lessons["a1-l1"].score;

    const P = box.sandbox.Placement;
    let p = P.nowyPrzebieg("s");
    P.zapiszRunde(p, "A2", 6, 6);
    P.zastosuj(p);

    assert.equal(box.Core.state.lessons["a1-l1"].score, przed, "prawdziwy wynik nietknięty");
    assert.equal(box.Core.state.lessons["a1-l1"].placed, undefined);
  });

  test("wynik zapisuje się w stanie i przeżywa zapis", () => {
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

describe("pula zadań", () => {
  test("bierze zadania ze sprawdzianów i pomija typy z mikrofonem", () => {
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

  test("nieznany poziom daje pustą pulę, nie wyjątek", () => {
    assert.equal(silnik().sandbox.Placement.pulaDla("Z9", "s").length, 0);
  });
});
