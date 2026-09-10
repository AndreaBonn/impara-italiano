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

describe("firma pola złożonego", () => {
  /* Ćwiczenia niosą w warstwie neutralnej pola zagnieżdżone (linie dialogu,
     pary, elementy z własną odpowiedzią). Firma musi po nich zejść: gdyby
     obiekt zwijała do „[object Object]", dwa różne ćwiczenia tego samego
     typu miałyby jedną tożsamość i jedną kartę na dwa. */
  test("obiekt w środku ćwiczenia wchodzi do firmy razem z wartościami", () => {
    const box = silnik();
    const a = { t: "dialogue", lines: [{ sp: "A", it: "Ciao", a: 0 }] };
    const b = { t: "dialogue", lines: [{ sp: "A", it: "Buonasera", a: 0 }] };

    assert.notEqual(box.sandbox.Errors.sigOf(a), box.sandbox.Errors.sigOf(b));
  });

  test("kolejność kluczy w zagnieżdżonym obiekcie nie zmienia firmy", () => {
    /* JSON z pliku danych i obiekt zbudowany w kodzie mają te same pola w
       innej kolejności; różna firma znaczyłaby osieroconą kartę. */
    const box = silnik();
    const a = { t: "dialogue", lines: [{ sp: "A", it: "Ciao", a: 0 }] };
    const b = { t: "dialogue", lines: [{ a: 0, it: "Ciao", sp: "A" }] };

    assert.equal(box.sandbox.Errors.sigOf(a), box.sandbox.Errors.sigOf(b));
  });
});

describe("odnajdywanie ćwiczenia po kluczu", () => {
  const LEKCJA = {
    id: "a1-u01-l1",
    tags: ["g-presente"],
    exercises: [{ t: "mcq", a: 1 }, { t: "fill", a: ["sono"] }]
  };

  function zKursem() {
    const box = silnik();
    box.sandbox.Registry.registerLevel({
      code: "A1", dataFiles: [], units: [{ id: "a1-u01", lessons: [LEKCJA] }]
    });
    return box;
  }

  test("klucz autorski wraca ze swoim ćwiczeniem, lekcją i numerem", () => {
    /* Powtórka pokazuje PRAWDZIWE ćwiczenie z lekcji, nie osobną fiszkę:
       to jest ta droga powrotna. */
    const box = zKursem();
    const klucz = box.sandbox.Errors.keyOf(LEKCJA, 1);
    const znalezione = box.sandbox.Errors.locate(klucz);

    assert.equal(znalezione.index, 1);
    assert.equal(znalezione.ex, LEKCJA.exercises[1]);
    assert.equal(znalezione.lesson.id, LEKCJA.id);
  });

  test("ćwiczenie o zmienionej treści przestaje się odnajdywać, zamiast wskazać sąsiada", () => {
    /* Lepiej, żeby karta odeszła przez drop, niż żeby po cichu pokazywała
       uczniowi inne zadanie niż to, na którym się pomylił. */
    const box = zKursem();
    const klucz = box.sandbox.Errors.keyOf(LEKCJA, 0);
    LEKCJA.exercises[0] = { t: "mcq", a: 2 };

    assert.equal(box.sandbox.Errors.locate(klucz), null);
    LEKCJA.exercises[0] = { t: "mcq", a: 1 };
  });

  test("klucz wskazujący nieistniejącą lekcję nie odnajduje niczego", () => {
    const box = zKursem();
    assert.equal(box.sandbox.Errors.locate("nie-ma#abc#0"), null);
  });

  test("klucz o innym kształcie nie jest kluczem autorskim", () => {
    const box = zKursem();
    assert.equal(box.sandbox.Errors.locate("cokolwiek"), null);
    assert.equal(box.sandbox.Errors.locate("a#b#c#d"), null);
  });

  test("klucz zadania z generatora jest rozpoznawany po przedrostku", () => {
    const box = zKursem();
    const klucz = box.sandbox.Errors.generatedKey("art-det", "7");

    assert.ok(klucz.indexOf("art-det") > 0);
    assert.notEqual(klucz.split("#").length, 3, "inny kształt niż klucz autorski");
    /* Bez wczytanych generatorów zadanie nie powstaje: locate ma wtedy
       oddać null, a nie zbudować kartę bez treści. */
    assert.equal(box.sandbox.Errors.locate(klucz), null);
  });
});

describe("odnajdywanie zadania z generatora", () => {
  test("klucz niesie temat i ziarno, a ziarno wyznacza treść zadania", () => {
    /* Zadania są generowane z ziarna, więc karta nie musi trzymać treści:
       para (temat, ziarno) wystarczy, żeby zbudować je jeszcze raz, co do
       słowa. Gdyby generator przestał być czystą funkcją ziarna, powtórka
       pokazywałaby inne zadanie niż to, które poszło źle. */
    const box = loadEngine({
      files: [...CORE, "assets/js/errors-key.js", "assets/js/drills-lex.js", "assets/js/drills.js"]
    });
    box.Core.load();
    const temat = box.sandbox.Drills.TOPICS[0].id;
    const klucz = box.sandbox.Errors.generatedKey(temat, "7");
    const znalezione = box.sandbox.Errors.locate(klucz);

    assert.equal(znalezione.generated, true);
    assert.equal(znalezione.topicId, temat);
    assert.equal(znalezione.seed, "7");
    assert.ok(znalezione.ex && znalezione.ex.t, "zadanie odbudowane, nie sam opis klucza");

    /* Dowodem, że ziarno naprawdę wchodzi w treść, jest RÓŻNICA: dwa klucze
       o innym ziarnie muszą dać dwa różne zadania. Porównanie z drugim
       wywołaniem generatora byłoby porównaniem z samym sobą, bo locate()
       woła dokładnie tę funkcję. */
    const inne = box.sandbox.Errors.locate(box.sandbox.Errors.generatedKey(temat, "8"));
    assert.notDeepEqual(
      JSON.parse(JSON.stringify(znalezione.ex)),
      JSON.parse(JSON.stringify(inne.ex)),
      "inne ziarno, inne zadanie"
    );
  });
});
