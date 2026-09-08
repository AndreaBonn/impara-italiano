/* ============================================================
   Quaderno błędów: co się zapisuje, co wraca, co wychodzi z obiegu.

   Próg wyjścia i pierwszy odstęp są decyzją produktową, nie faktem
   z kodu: siedzą w § 7.6 planu jako C1 i mają być potwierdzone przy
   końcowym przeglądzie. Tutaj są utrwalone takie, jakie przyjęto,
   żeby zmiana progu była widoczna jako zmiana testu, a nie cicha.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const PLIKI = ["assets/js/core.js", "assets/js/errors.js"];

/** Lekcja wystarczająco prawdziwa, żeby dała klucze; bez wczytywania kursu. */
const LEKCJA = {
  id: "a1-u02-l3",
  tags: ["g-presente", "g-nome-genere"],
  exercises: [
    { t: "fill", a: ["sono"] },
    { t: "mcq", a: 1 },
    { t: "conj", verb: "essere", tense: "pres", persons: [0, 1] }
  ]
};

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

describe("zapis błędu", () => {
  test("dobra odpowiedź za pierwszym razem nie zakłada karty", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, true);
    assert.equal(Object.keys(box.Core.state.errors).length, 0);
  });

  test("zła odpowiedź zakłada kartę z tagiem lekcji i źródłem", () => {
    const box = silnik();
    const c = box.sandbox.Errors.record(LEKCJA, 0, false);
    assert.equal(c.kind, "authored");
    assert.equal(c.tag, "g-presente", "pierwszy tag lekcji");
    assert.equal(c.srcId, "a1-u02-l3");
    assert.equal(c.lapses, 1);
    assert.equal(Object.keys(box.Core.state.errors).length, 1);
  });

  test("ćwiczenie może nadpisać tag lekcji własnym", () => {
    const box = silnik();
    const lekcja = {
      id: "a1-u02-l3", tags: ["g-presente"],
      exercises: [{ t: "gender", opts: ["il", "la"], items: [{ it: "casa", a: "la" }], tag: "g-nome-genere" }]
    };
    assert.equal(box.sandbox.Errors.record(lekcja, 0, false).tag, "g-nome-genere");
  });

  test("druga pomyłka na tym samym ćwiczeniu nie mnoży kart", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    const c = box.sandbox.Errors.record(LEKCJA, 0, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 1);
    assert.equal(c.lapses, 2);
  });

  test("dwa różne ćwiczenia tej samej lekcji to dwie karty", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    box.sandbox.Errors.record(LEKCJA, 1, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 2);
  });

  test("karta trafia do localStorage, nie tylko do pamięci", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    box.flush();
    assert.equal(Object.keys(box.stored("linguai.italiano.v2").errors).length, 1);
  });

  test("zablokowany magazyn nie przerywa lekcji", () => {
    const box = silnik();
    box.storage._setLimit(10);
    assert.doesNotThrow(() => {
      box.sandbox.Errors.record(LEKCJA, 0, false);
      box.flush();
    });
  });
});

/* Powtórka pokazuje prawdziwe ćwiczenie z lekcji, więc jej wynik wchodzi
   tą samą drogą, co odpowiedź w toku lekcji: przez record(). Nie ma
   osobnej oceny do utrzymania i nie ma dwóch miejsc, które mogą się
   rozjechać. Stąd wszystkie testy progu idą przez record(). */
describe("wychodzenie z obiegu (C1: dwie poprawne z rzędu)", () => {
  test("pierwsza poprawna zostawia kartę, z odstępem jednego dnia", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    const c = box.sandbox.Errors.record(LEKCJA, 0, true);
    assert.equal(c.reps, 1);
    assert.equal(c.interval, 1);
    assert.ok(box.Core.state.errors[klucz], "karta nadal w obiegu");
  });

  test("druga poprawna z rzędu wyprowadza kartę z quaderno", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    box.sandbox.Errors.record(LEKCJA, 0, true);
    box.sandbox.Errors.record(LEKCJA, 0, true);
    assert.equal(box.Core.state.errors[klucz], undefined, "karta opuściła quaderno");
  });

  test("pomyłka w środku zeruje serię, karta zostaje", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    box.sandbox.Errors.record(LEKCJA, 0, true);
    box.sandbox.Errors.record(LEKCJA, 0, false);
    const c = box.Core.state.errors[klucz];
    assert.equal(c.reps, 0);
    assert.equal(c.lapses, 2);
    assert.ok(box.Core.state.errors[klucz]);
  });

  test("karta bez ćwiczenia odchodzi przez drop", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    assert.equal(box.sandbox.Errors.drop(klucz), true);
    assert.equal(box.Core.state.errors[klucz], undefined);
    assert.equal(box.sandbox.Errors.drop("nie-ma-takiej"), false);
  });
});

describe("co jest do powtórki", () => {
  test("świeża pomyłka wraca w tej samej sesji, nie za dobę", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);
    assert.equal(box.sandbox.Errors.due().length, 0, "jeszcze nie teraz");
    const c = Object.values(box.Core.state.errors)[0];
    assert.ok(c.due - Date.now() <= 10 * 60000 + 50, "ale w ciągu dziesięciu minut");
  });

  test("karta z minionym terminem jest do powtórki", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.record(LEKCJA, 0, false).key;
    box.Core.state.errors[klucz].due = Date.now() - 1000;
    assert.equal(box.sandbox.Errors.due().length, 1);
    assert.equal(box.sandbox.Errors.dueCount(), 1);
  });

  test("pilniejsze idą pierwsze i limit obcina listę", () => {
    const box = silnik();
    [0, 1, 2].forEach(i => {
      const k = box.sandbox.Errors.record(LEKCJA, i, false).key;
      box.Core.state.errors[k].due = Date.now() - (i + 1) * 1000;
    });
    const lista = box.sandbox.Errors.due(2);
    assert.equal(lista.length, 2);
    assert.ok(lista[0].due < lista[1].due, "najstarszy termin na czele");
  });

  test("grupowanie po zagadnieniu mówi, na czym uczeń stoi", () => {
    const box = silnik();
    box.sandbox.Errors.record(LEKCJA, 0, false);   // g-presente
    box.sandbox.Errors.record(LEKCJA, 1, false);   // g-presente
    const lekcja2 = { id: "a1-u01-l2", tags: ["g-nome-genere"], exercises: [{ t: "fill", a: ["le"] }] };
    box.sandbox.Errors.record(lekcja2, 0, false);

    const wg = box.sandbox.Errors.byTag();
    assert.equal(wg["g-presente"].length, 2);
    assert.equal(wg["g-nome-genere"].length, 1);
  });
});
