/* ============================================================
   lemma.js — od formy w tekście do hasła słownika.

   Test opisuje granicę, nie tylko trafienia: resolver ma ODMÓWIĆ tam,
   gdzie nie wie, bo widok pokazuje wtedy uczniowi „nie znam tego słowa",
   a nie zmyśloną odpowiedź. Kandydat, którego słownik nie zna, jest
   ciszą — i to jest zachowanie do utrwalenia, nie usterka do obejścia.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/* Tablice z piaskownicy mają prototyp z innego realm, więc deepEqual w
   trybie strict odrzuca ["bere"] wobec ["bere"]. Kopiujemy zawartość, tak
   samo jak w state.test.mjs i fsrs.test.mjs. */
const zZewnatrz = xs => Array.from(xs);

/** Silnik z podstawionym słownikiem: test nie ładuje całego kursu. */
function zeSlownikiem(hasla, czasowniki) {
  const box = loadEngine({ files: ["assets/js/verbs.js", "assets/js/lemma.js"] });
  const L = box.sandbox.Lemma;
  const zbior = new Set(hasla);
  L.uzyjSlownika(w => zbior.has(w));
  if (czasowniki) L.dodajCzasowniki(czasowniki);
  return L;
}

describe("lemma: formy czasownika schodzą do bezokolicznika", () => {
  test("forma osobowa czasu teraźniejszego", () => {
    const L = zeSlownikiem(["bere"]);
    assert.deepEqual(zZewnatrz(L.resolve("bevono")), ["bere"]);
    assert.deepEqual(zZewnatrz(L.resolve("bevi")), ["bere"]);
  });

  test("imiesłów i czas złożony", () => {
    const L = zeSlownikiem(["andare"]);
    assert.ok(L.resolve("andati").includes("andare"), "andati -> andare");
    assert.ok(L.resolve("andato").includes("andare"), "z sono andato zostaje andato");
  });

  test("czas przeszły daleki i tryb łączący", () => {
    const L = zeSlownikiem(["essere"]);
    assert.ok(L.resolve("fu").includes("essere"), "fu -> essere");
    assert.ok(L.resolve("sia").length, "sia jest rozpoznane");
  });

  test("è nie wypada z indeksu mimo jednej litery", () => {
    const L = zeSlownikiem(["essere"]);
    assert.ok(L.resolve("è").includes("essere"),
      "najczęstsze słowo we włoskim tekście: pierwsza wersja je gubiła");
  });

  test("czasownik spoza verbs.js wchodzi przez dodajCzasowniki", () => {
    const L = zeSlownikiem(["scegliere"], ["scegliere"]);
    assert.ok(L.resolve("sceglie").includes("scegliere"));
  });
});

describe("lemma: rzeczowniki i przymiotniki schodzą regułami", () => {
  const przypadki = [
    ["libri", "libro"], ["cani", "cane"], ["case", "casa"],
    ["amiche", "amica"], ["amici", "amico"], ["laghi", "lago"],
    ["bella", "bello"], ["persone", "persona"]
  ];
  for (const [forma, baza] of przypadki) {
    test(`${forma} -> ${baza}`, () => {
      const L = zeSlownikiem([baza]);
      assert.ok(L.resolve(forma).includes(baza));
    });
  }

  test("wyrazy nieodmienne nie są okaleczane", () => {
    const L = zeSlownikiem(["città", "caffè"]);
    assert.deepEqual(zZewnatrz(L.resolve("città")), ["città"]);
    assert.deepEqual(zZewnatrz(L.resolve("caffè")), ["caffè"]);
  });
});

describe("lemma: granica jest zadeklarowana, nie ukryta", () => {
  test("słowo, którego słownik nie zna, zwraca pustkę", () => {
    const L = zeSlownikiem(["casa"]);
    assert.deepEqual(zZewnatrz(L.resolve("carbonara")), [],
      "brak wyniku to informacja dla widoku, nie usterka");
  });

  test("kandydaci istnieją nawet wtedy, gdy słownik nic nie zna", () => {
    const L = zeSlownikiem([]);
    const k = L.kandydaci("turisti");
    assert.ok(k.includes("turisti"), "sama forma");
    assert.ok(k.includes("turisto") || k.includes("turiste") || k.includes("turista"),
      "co najmniej jedna forma podstawowa do pokazania uczniowi");
  });

  test("wyraz funkcyjny odpowiada sam sobą, bez pytania słownika", () => {
    const L = zeSlownikiem([]);
    assert.deepEqual(zZewnatrz(L.resolve("dello")), ["dello"]);
    assert.deepEqual(zZewnatrz(L.resolve("quaranta")), ["quaranta"], "liczebnik też");
    assert.ok(L.funkcyjne("nella"));
    assert.ok(!L.funkcyjne("carbonara"));
  });

  test("wielkość liter i apostrof typograficzny nie mają znaczenia", () => {
    const L = zeSlownikiem(["essere"]);
    assert.ok(L.resolve("È").includes("essere"));
  });
});

describe("lemma: koszt", () => {
  test("indeks powstaje raz i mieści się w budżecie startu", () => {
    const L = zeSlownikiem(["bere"]);
    const start = Date.now();
    const n = L.rozmiarIndeksu();
    const ms = Date.now() - start;
    assert.ok(n > 3000, `indeks ma sens dopiero przy tysiącach form, jest ${n}`);
    /* Hojnie: mierzone w piaskownicy vm, wolniejszej niż przeglądarka.
       Chodzi o wyłapanie regresji rzędu wielkości, nie o benchmark. */
    assert.ok(ms < 2000, `budowa indeksu ${ms} ms`);
  });
});
