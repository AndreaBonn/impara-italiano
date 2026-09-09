/* ============================================================
   anki.js — serializacja i parsowanie talii.

   Bramka `scripts/check_anki.py` sprawdza, czy plik wchodzi do prawdziwego
   Anki. Tutaj sprawdzamy to, czego tamta nie widzi: co robimy z plikiem
   PRZYCHODZĄCYM, bo to jedyne miejsce, w którym uczeń podaje kursowi dane
   z zewnątrz.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function anki() {
  return loadEngine({ files: ["assets/js/anki.js"] }).sandbox.Anki;
}

/** Tam i z powrotem: co wyszło, ma wrócić identyczne. */
function obieg(A, karty) {
  return Array.from(A.fromTsv(A.toTsv(karty)).karty);
}

describe("anki: eksport przeżywa treść, która ten format psuje", () => {
  const TRUDNE = [
    { it: "un caffè", tr: "kawa", tag: "a1" },
    { it: "l'acqua", tr: "woda", tag: "a1" },
    { it: "sì, però", tr: "tak, ale", tag: "a1" },
    { it: 'dice "no"', tr: "mówi „nie”", tag: "b1" },
    { it: "riga uno\nriga due", tr: "dwie linie", tag: "test" },
    { it: "con\ttabulator", tr: "separator w treści", tag: "test" }
  ];

  for (const k of TRUDNE) {
    test(`obieg zachowuje ${JSON.stringify(k.it)}`, () => {
      const A = anki();
      const wynik = obieg(A, [k]);
      assert.equal(wynik.length, 1);
      assert.equal(wynik[0].it, k.it);
      assert.equal(wynik[0].tr, k.tr);
    });
  }

  test("nagłówek niesie dyrektywy, po których Anki mapuje kolumny", () => {
    const tsv = anki().toTsv([{ it: "casa", tr: "dom", tag: "a1" }]);
    /* Nazwy kolumn muszą być nazwami PÓL, nie etykietami po włosku:
       przy „Italiano/Traduzione" import przechodzi i zostawia Back pusty. */
    assert.ok(tsv.includes("#columns:Front\tBack\tTags"));
    assert.ok(tsv.includes("#separator:tab"));
    assert.ok(tsv.includes("#html:false"));
    assert.ok(tsv.includes("#tags column:3"));
  });
});

describe("anki: prefiks formuły nie dociera do arkusza", () => {
  for (const zly of ["=SOMMA(A1)", "+39 06", "-cento", "@casa"]) {
    test(`${JSON.stringify(zly)} wychodzi z apostrofem i wraca bez niego`, () => {
      const A = anki();
      const tsv = A.toTsv([{ it: zly, tr: "x", tag: "" }]);
      const wiersz = tsv.split("\n").filter(l => l && l[0] !== "#")[0];
      assert.ok(wiersz.startsWith("'") || wiersz.startsWith('"\''),
        `pole ma być zneutralizowane, jest: ${wiersz}`);
      assert.equal(obieg(A, [{ it: zly, tr: "x", tag: "" }])[0].it, zly,
        "przy powrocie apostrof schodzi: to nasza ozdoba, nie treść ucznia");
    });
  }

  test("apostrof w normalnym słowie nie jest zdejmowany", () => {
    const A = anki();
    assert.equal(obieg(A, [{ it: "'ndrangheta", tr: "x", tag: "" }])[0].it, "'ndrangheta");
  });
});

describe("anki: plik z zewnątrz jest traktowany jak wrogi", () => {
  test("niespójna liczba kolumn jest odrzucana w całości", () => {
    const A = anki();
    const w = A.fromTsv("a\tb\tc\nd\te\nf\tg\th");
    assert.equal(w.karty.length, 0, "nic nie wchodzi do talii");
    assert.equal(w.blad, "anki.errRagged", "błąd niesie KLUCZ napisu, nie gotowe zdanie");
  });

  test("zbyt wiele wierszy odrzucamy przed parsowaniem", () => {
    const A = anki();
    const duzy = Array(A.MAX_WIERSZY + 10).fill("a\tb\tc").join("\n");
    const w = A.fromTsv(duzy);
    assert.equal(w.blad, "anki.errTooManyRows");
    assert.equal(w.karty.length, 0);
  });

  test("dyrektywy i puste wiersze nie stają się fiszkami", () => {
    const A = anki();
    const w = A.fromTsv("#separator:tab\n#html:false\n\ncasa\tdom\ta1\n\n");
    assert.equal(w.karty.length, 1);
    assert.equal(w.karty[0].it, "casa");
  });

  test("wiersz bez włoskiego jest pomijany, nie wywraca importu", () => {
    const A = anki();
    const w = A.fromTsv("casa\tdom\ta1\n\tsierota\tx\ncane\tpies\ta1");
    assert.equal(w.karty.length, 2);
    assert.equal(w.pominiete, 1);
  });

  test("niedomknięty cudzysłów odrzuca CAŁY plik", () => {
    const A = anki();
    const w = A.fromTsv('casa\tdom\ta1\n"urwany\tx\ty\ncane\tpies\ta1');
    /* Pierwsza wersja testu chciała „pomiń ten wiersz, czytaj dalej".
       Przy poprawnym parserze RFC 4180 to jest niewykonalne: cudzysłów bez
       pary połyka resztę pliku i nie da się zgadnąć, gdzie pole miało się
       skończyć. Sklejenie reszty w jedno pole byłoby gorsze niż odmowa. */
    assert.equal(w.karty.length, 0);
    assert.equal(w.blad, "anki.errUnterminated");
  });

  test("treść wroga zostaje napisem, nie znacznikiem", () => {
    const A = anki();
    const zly = '<img src=x onerror=alert(1)>';
    const w = A.fromTsv(`${zly}\t${zly}\tx`);
    assert.equal(w.karty[0].it, zly, "parser niczego nie interpretuje ani nie czyści");
  });
});
