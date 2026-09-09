/* ============================================================
   Tożsamość karty błędu.

   Karta ma przeżyć zmianę języka wyjaśnień i przeżyć dopisanie
   ćwiczenia w środku lekcji. Ma NIE przeżyć zmiany treści samego
   ćwiczenia: wtedy lepiej, żeby przestała się odnajdywać, niż
   żeby po cichu wskazywała na coś innego.

   Dlaczego nie sam skrót treści: w warstwie neutralnej ćwiczenie
   `mcq` to całe { t: "mcq", a: 1 } — pytanie i opcje siedzą w
   nakładce. W a1-u01-l1 są dwa takie same. Skrót bez lekcji i bez
   numeru kolejnego zderzyłby je od pierwszego dnia.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const PLIKI = [...CORE, "assets/js/errors-key.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

describe("firma treści", () => {
  test("nie zmienia się, gdy zmienia się tylko nakładka", () => {
    const box = silnik();
    const polska = { t: "mcq", a: 1, q: "Które zdanie jest poprawne?", opts: ["A", "B"], why: "bo tak" };
    const niemiecka = { t: "mcq", a: 1, q: "Welcher Satz stimmt?", opts: ["A", "B"], why: "darum" };
    assert.equal(box.sandbox.Errors.sigOf(polska), box.sandbox.Errors.sigOf(niemiecka));
  });

  test("zmienia się, gdy zmienia się odpowiedź", () => {
    const box = silnik();
    assert.notEqual(
      box.sandbox.Errors.sigOf({ t: "mcq", a: 1 }),
      box.sandbox.Errors.sigOf({ t: "mcq", a: 2 })
    );
  });

  test("zmienia się, gdy zmienia się włoskie zdanie", () => {
    const box = silnik();
    assert.notEqual(
      box.sandbox.Errors.sigOf({ t: "listen", it: "Buongiorno" }),
      box.sandbox.Errors.sigOf({ t: "listen", it: "Buonasera" })
    );
  });

  test("ten sam typ z inną treścią daje inną firmę", () => {
    const box = silnik();
    const wszystkie = [
      { t: "fill", a: ["sono"] },
      { t: "fill", a: ["sei"] },
      { t: "trans", dir: "toIt", a: ["sono dalla polonia"] },
      { t: "order", tokens: ["un", "caffè"], a: ["un caffè"] },
      { t: "conj", verb: "essere", tense: "pres", persons: [0, 1] },
      { t: "conj", verb: "avere", tense: "pres", persons: [0, 1] },
      { t: "cloze", text: "Ieri {{1}} al mercato.", gaps: [["sono andato"]] }
    ].map(ex => box.sandbox.Errors.sigOf(ex));
    assert.equal(new Set(wszystkie).size, wszystkie.length, "brak zderzeń na różnych treściach");
  });

  test("opcje ćwiczenia gender liczą się, bo są po włosku i siedzą w core", () => {
    const box = silnik();
    assert.notEqual(
      box.sandbox.Errors.sigOf({ t: "gender", opts: ["il", "la"], items: [{ it: "libro", a: "il" }] }),
      box.sandbox.Errors.sigOf({ t: "gender", opts: ["il", "la"], items: [{ it: "casa", a: "la" }] })
    );
  });

  test("opcje ćwiczenia mcq NIE liczą się, bo są tłumaczone", () => {
    const box = silnik();
    assert.equal(
      box.sandbox.Errors.sigOf({ t: "mcq", a: 0, opts: ["tak", "nie"] }),
      box.sandbox.Errors.sigOf({ t: "mcq", a: 0, opts: ["yes", "no"] })
    );
  });

  test("kolejność pól w obiekcie nie ma znaczenia", () => {
    const box = silnik();
    assert.equal(
      box.sandbox.Errors.sigOf({ t: "fill", a: ["sono"], say: "io sono" }),
      box.sandbox.Errors.sigOf({ say: "io sono", a: ["sono"], t: "fill" })
    );
  });
});

describe("klucz karty", () => {
  const lekcja = {
    id: "a1-u01-l1",
    exercises: [
      { t: "mcq", a: 1 },
      { t: "mcq", a: 1 },              // bliźniak: w danych naprawdę tak jest
      { t: "fill", a: ["sono"] }
    ]
  };

  test("dwa identyczne ćwiczenia w jednej lekcji dostają różne klucze", () => {
    const box = silnik();
    const k = box.sandbox.Errors.keysIn(lekcja);
    assert.equal(new Set(k).size, 3, "trzy ćwiczenia, trzy klucze");
  });

  test("klucz niesie identyfikator lekcji", () => {
    const box = silnik();
    assert.ok(box.sandbox.Errors.keysIn(lekcja)[0].indexOf("a1-u01-l1") === 0);
  });

  test("dopisanie ćwiczenia na końcu nie rusza kluczy poprzednich", () => {
    const box = silnik();
    const przed = box.sandbox.Errors.keysIn(lekcja);
    const po = box.sandbox.Errors.keysIn({
      id: lekcja.id,
      exercises: lekcja.exercises.concat([{ t: "listen", it: "Ciao" }])
    });
    assert.deepEqual(po.slice(0, 3), przed);
  });

  test("wstawienie ćwiczenia na początku nie rusza kluczy pozostałych", () => {
    const box = silnik();
    const przed = box.sandbox.Errors.keysIn(lekcja);
    const po = box.sandbox.Errors.keysIn({
      id: lekcja.id,
      exercises: [{ t: "listen", it: "Ciao" }].concat(lekcja.exercises)
    });
    przed.forEach(k => assert.ok(po.indexOf(k) >= 0, `klucz ${k} przetrwał wstawkę`));
  });

  test("zmiana treści ćwiczenia unieważnia jego klucz, zamiast przenieść go na inne", () => {
    const box = silnik();
    const stary = box.sandbox.Errors.keysIn(lekcja)[2];
    const po = box.sandbox.Errors.keysIn({
      id: lekcja.id,
      exercises: [lekcja.exercises[0], lekcja.exercises[1], { t: "fill", a: ["sei"] }]
    });
    assert.ok(po.indexOf(stary) < 0, "stary klucz nie wskazuje już na nic");
  });
});
