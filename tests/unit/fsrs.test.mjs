/* ============================================================
   FSRS przeciwko implementacji referencyjnej.

   To JEST kryterium poprawności `assets/js/fsrs.js` — jedyne, jakie ten
   projekt może mieć. Zysk z FSRS mierzy się na historii powtórek ucznia,
   a kurs nie ma serwera ani telemetrii, więc parametry zostają domyślne
   i „mniej powtórek przy tej samej retencji" nie jest tu sprawdzalne.
   Sprawdzalna jest zgodność liczb z py-fsrs, i to sprawdzamy.

   Wektory: `tests/unit/fsrs-vectors.json`, generowane przez
   `uv run --script scripts/gen_fsrs_vectors.py` z wyłączonym losowaniem
   odstępu. Plik jest wersjonowany, bo to kontrakt, nie artefakt: przy
   podniesieniu wersji FSRS najpierw oglądamy różnicę w gicie.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { loadEngine, ROOT } from "./_harness.mjs";

const WEKTORY = JSON.parse(readFileSync(join(ROOT, "tests/unit/fsrs-vectors.json"), "utf8"));

/* Sześć cyfr po przecinku: tyle zapisuje generator. Dalej to szum
   arytmetyki zmiennoprzecinkowej, inny w Pythonie i inny w V8. */
const TOL = 1e-6;

function silnik() {
  const box = loadEngine({ files: ["assets/js/fsrs.js"] });
  return box.sandbox.Fsrs;
}

const OCENY = { again: 1, hard: 2, good: 3, easy: 4 };

describe("fsrs: zgodność z py-fsrs", () => {
  /* Tablice z piaskownicy mają prototyp z innego realm, więc deepEqual w
     trybie strict odrzuca [1] wobec [1]. Kopiujemy przez Array.from, bo
     porównujemy zawartość, nie tożsamość prototypu — ta sama sztuczka co
     w state.test.mjs. */
  const zZewnatrz = xs => Array.from(xs);

  test("konfiguracja domyślna jest ta sama co w referencji", () => {
    const F = silnik();
    assert.deepEqual(zZewnatrz(F.DOMYSLNE.parametry), WEKTORY.parametry, "21 parametrów FSRS-6");
    assert.equal(F.DOMYSLNE.retencja, WEKTORY.desiredRetention);
    assert.deepEqual(
      zZewnatrz(F.DOMYSLNE.krokiNauki).map(ms => ms / 1000),
      WEKTORY.learningStepsSekund
    );
    assert.deepEqual(
      zZewnatrz(F.DOMYSLNE.krokiPowtornejNauki).map(ms => ms / 1000),
      WEKTORY.relearningStepsSekund
    );
    assert.equal(F.DOMYSLNE.maksOdstepDni, WEKTORY.maximumInterval);
  });

  /* Każdy scenariusz to osobny test, a nie jedna pętla ze wszystkimi:
     przy zerwaniu chcemy z nazwy wiedzieć, KTÓRA ścieżka się rozjechała. */
  for (const [nazwa, kroki] of Object.entries(WEKTORY.scenariusze)) {
    test(`scenariusz ${nazwa}`, () => {
      const F = silnik();
      let karta = null;
      /* Chwila startu jest dowolna: wektory niosą odstępy, nie daty.
         Ważne, żeby była stała — inaczej test mierzyłby kalendarz. */
      let teraz = Date.UTC(2026, 0, 1, 12, 0, 0);

      kroki.forEach((oczekiwane, i) => {
        /* Chwilę powtórki niesie sam wektor: karta jest oceniana dokładnie
           wtedy, kiedy była oceniana w generatorze. */
        teraz = teraz + oczekiwane.godzinOdPoprzedniej * 3600000;

        const przed = `${nazwa}#${i + 1} (${oczekiwane.ocena})`;
        assert.equal(karta ? karta.st : "learning", oczekiwane.przed.state, `${przed}: stan przed`);

        karta = F.powtorz(karta, OCENY[oczekiwane.ocena], teraz);

        assert.equal(karta.st, oczekiwane.po.state, `${przed}: stan po`);
        assert.equal(karta.step, oczekiwane.po.step, `${przed}: krok po`);
        assert.ok(
          Math.abs(karta.s - oczekiwane.po.stability) < TOL,
          `${przed}: stabilność ${karta.s} != ${oczekiwane.po.stability}`
        );
        assert.ok(
          Math.abs(karta.d - oczekiwane.po.difficulty) < TOL,
          `${przed}: trudność ${karta.d} != ${oczekiwane.po.difficulty}`
        );
        assert.equal(
          Math.round((karta.due - teraz) / 1000),
          oczekiwane.odstepSekund,
          `${przed}: odstęp`
        );
      });
    });
  }
});

describe("fsrs: własności, których wektory nie pokazują wprost", () => {
  test("karta wejściowa nie jest mutowana", () => {
    const F = silnik();
    const karta = F.powtorz(null, F.DOBRZE, Date.UTC(2026, 0, 1));
    const kopia = JSON.parse(JSON.stringify(karta));
    F.powtorz(karta, F.ZNOWU, Date.UTC(2026, 0, 2));
    assert.deepEqual(JSON.parse(JSON.stringify(karta)), kopia, "wejście nietknięte");
  });

  test("wyższa retencja przybliża termin", () => {
    const F = silnik();
    const luzny = F.silnik({ retencja: 0.8 });
    const ostry = F.silnik({ retencja: 0.95 });
    assert.ok(
      ostry.odstepDni(20) < luzny.odstepDni(20),
      "przy 0.95 ta sama stabilność daje krótszy odstęp niż przy 0.8"
    );
  });

  test("odstęp nigdy nie schodzi poniżej doby ani nie przekracza limitu", () => {
    const F = silnik();
    const s = F.silnik(null);
    assert.equal(s.odstepDni(0.001), 1, "minimum to jeden dzień");
    assert.equal(s.odstepDni(1e9), F.DOMYSLNE.maksOdstepDni, "obcięte do maksimum");
  });

  test("odtwarzalnosc maleje z czasem i zaczyna od jedynki", () => {
    const F = silnik();
    const s = F.silnik(null);
    assert.equal(s.odtwarzalnosc(10, 0), 1, "w dniu powtórki szansa jest pełna");
    assert.ok(s.odtwarzalnosc(10, 10) < 1);
    assert.ok(s.odtwarzalnosc(10, 100) < s.odtwarzalnosc(10, 10));
  });

  test("po tylu dniach, ile wynosi odstęp, szansa siada na zadanej retencji", () => {
    const F = silnik();
    const s = F.silnik(null);
    const dni = s.odstepDni(30);
    assert.ok(
      Math.abs(s.odtwarzalnosc(30, dni) - 0.9) < 0.01,
      "to jest cała idea FSRS: odstęp wyznacza próg, a nie mnożnik"
    );
  });
});
