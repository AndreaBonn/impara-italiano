/* ============================================================
   Quaderno błędów: co się zapisuje, co wraca, co wychodzi z obiegu.

   Próg wyjścia i pierwszy odstęp są decyzją produktową, nie faktem
   z kodu: siedzą w § 7.6 planu jako C1 i mają być potwierdzone przy
   końcowym przeglądzie. Tutaj są utrwalone takie, jakie przyjęto,
   żeby zmiana progu była widoczna jako zmiana testu, a nie cicha.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "assets/js/errors-key.js", "assets/js/errors.js"];

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

describe("zadania z generatora", () => {
  /* Zadanie generowane ma inną tożsamość niż ćwiczenie autorskie: tag
     przychodzi od generatora, nie od lekcji, a klucz z pary (temat, ziarno).
     Rozróżnienie jest ZADEKLAROWANE w karcie (`kind`), bo dwie specie o
     różnej granulacji mieszkają w jednym zbiorze i widok musi wiedzieć,
     którą trzyma. */
  const ZADANIE = { topicId: "art-det", seed: "7", tag: "g-articoli" };

  test("dobra odpowiedź za pierwszym razem nie zakłada karty", () => {
    const box = silnik();
    assert.equal(box.sandbox.Errors.recordGenerated(ZADANIE, true), null);
    assert.deepEqual(Object.keys(box.Core.state.errors), []);
  });

  test("pomyłka zakłada kartę z tagiem generatora i deklaracją rodzaju", () => {
    const box = silnik();
    const karta = box.sandbox.Errors.recordGenerated(ZADANIE, false);

    assert.equal(karta.kind, "generated");
    assert.equal(karta.tag, "g-articoli");
    assert.equal(karta.srcId, "art-det");
    assert.ok(box.Core.state.errors[karta.key], "karta leży w zbiorze pod swoim kluczem");
  });

  test("to samo ziarno to ta sama karta, inne ziarno to druga", () => {
    const box = silnik();
    box.sandbox.Errors.recordGenerated(ZADANIE, false);
    box.sandbox.Errors.recordGenerated(ZADANIE, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 1, "dwie pomyłki na tym samym zadaniu to jedna karta");

    box.sandbox.Errors.recordGenerated({ topicId: "art-det", seed: "8", tag: "g-articoli" }, false);
    assert.equal(Object.keys(box.Core.state.errors).length, 2);
  });

  test("dwie poprawne z rzędu wyprowadzają zadanie z quaderno", () => {
    const box = silnik();
    const klucz = box.sandbox.Errors.recordGenerated(ZADANIE, false).key;
    box.sandbox.Errors.recordGenerated(ZADANIE, true);
    assert.ok(box.Core.state.errors[klucz], "po pierwszej poprawnej karta zostaje");

    box.sandbox.Errors.recordGenerated(ZADANIE, true);
    assert.equal(box.Core.state.errors[klucz], undefined);
  });

  test("brak zadania nie zakłada karty i nie wywraca sesji", () => {
    const box = silnik();
    assert.equal(box.sandbox.Errors.recordGenerated(null, false), null);
  });
});

describe("przechwytywanie odpowiedzi z ćwiczeń", () => {
  /* Owinięte jest samo `wire` w Ex.build, nie trzynaście builderów: przy
     czternastym typie nie ma czego zapomnieć, a pominięcie nie dałoby
     żadnego objawu — quaderno po prostu zostawałoby puste. */
  function zEx() {
    const box = silnik();
    const zbudowane = [];
    const Ex = {
      build(ex, idx, seed) {
        zbudowane.push({ ex, idx, seed });
        return {
          html: "",
          wire(root, onDone) { root.onDone = onDone; return root; }
        };
      }
    };
    box.sandbox.Ex = Ex;
    box.sandbox.Registry.registerLevel({
      code: "A1", dataFiles: [], units: [{ id: "a1-u02", lessons: [LEKCJA] }]
    });
    return { box, Ex, zbudowane };
  }

  /** Buduje ćwiczenie i odpowiada na nie, tak jak robi to widok lekcji. */
  function odpowiedz(Ex, ex, idx, seed, ok) {
    const uchwyt = {};
    Ex.build(ex, idx, seed).wire(uchwyt, uchwyt.zewnetrzne);
    uchwyt.onDone(ok);
    return uchwyt;
  }

  test("pomyłka w toku lekcji trafia do quaderno bez udziału widoku", () => {
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);
    odpowiedz(Ex, LEKCJA.exercises[1], 1, LEKCJA.id, false);

    const karty = Object.values(box.Core.state.errors);
    assert.equal(karty.length, 1);
    assert.equal(karty[0].srcId, LEKCJA.id);
  });

  test("zwrotka widoku nadal dostaje swój wynik, dokładnie raz", () => {
    /* Na tym wisi licznik postępu lekcji: drugie wywołanie nie wywraca
       niczego, tylko po cichu zawyża wynik. */
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);

    const wyniki = [];
    const uchwyt = {};
    Ex.build(LEKCJA.exercises[0], 0, LEKCJA.id).wire(uchwyt, (ok) => wyniki.push(ok));
    uchwyt.onDone(true);

    assert.deepEqual(wyniki, [true]);
  });

  test("drugie założenie nie owija budowania po raz drugi", () => {
    /* Podwójne owinięcie zapisywałoby każdą pomyłkę dwa razy: karta by się
       nie zdublowała (klucz ten sam), ale harmonogram przeskoczyłby o dwa. */
    const { box, Ex } = zEx();
    assert.equal(box.sandbox.Errors.install(Ex), true);
    assert.equal(box.sandbox.Errors.install(Ex), false);

    odpowiedz(Ex, LEKCJA.exercises[0], 0, LEKCJA.id, false);
    const karta = Object.values(box.Core.state.errors)[0];
    assert.equal(karta.lapses, 1, "jedna pomyłka to jedno potknięcie, nie dwa");
  });

  test("ćwiczenie budowane poza lekcją nie zakłada karty pod cudzym kluczem", () => {
    /* Ekran treningu buduje ćwiczenia z dowolnym ziarnem: bez tego strażnika
       powstawałaby karta wskazująca lekcję, w której tego zadania nie ma. */
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);

    odpowiedz(Ex, LEKCJA.exercises[0], 0, "nie-ma-takiej-lekcji", false);
    odpowiedz(Ex, LEKCJA.exercises[0], 0, 12345, false);
    assert.deepEqual(Object.keys(box.Core.state.errors), []);
  });

  test("numer ćwiczenia niezgodny z lekcją też nie zakłada karty", () => {
    const { box, Ex } = zEx();
    box.sandbox.Errors.install(Ex);

    /* To ćwiczenie stoi w lekcji pod numerem 1, nie 0. */
    odpowiedz(Ex, LEKCJA.exercises[1], 0, LEKCJA.id, false);
    assert.deepEqual(Object.keys(box.Core.state.errors), []);
  });

  test("bez Ex w ogóle install milczy, zamiast rzucać", () => {
    /* W testach jednostkowych silnika stanu Ex nie istnieje, a quaderno
       ma działać także bez ćwiczeń. */
    const box = silnik();
    assert.equal(box.sandbox.Errors.install(undefined), false);
  });
});
