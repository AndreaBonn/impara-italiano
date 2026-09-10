/* ============================================================
   Napisy interfejsu (assets/js/i18n.js).

   Doklejanie tekstów do treści kursu ma swój plik obok
   (i18n-merge.test.mjs) — tak jak od podziału ma go silnik.

   `t()` decyduje o czymś, czego nie widać w żadnym pliku danych: o formie
   liczby mnogiej. „1 dni" i „5 dzień" to nie literówki, tylko zła
   kategoria, i wychodzą dopiero na oczach ucznia, przy konkretnej liczbie.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

/** i18n.js wczytujemy PO silniku, żeby nadpisał atrapę I18n z piaskownicy. */
function swiezy() {
  const box = loadEngine({ files: [...CORE, "assets/js/i18n.js"] });
  box.Core.load();
  return { I18n: box.sandbox.I18n, LINGUAI: box.sandbox.LINGUAI };
}

function zNapisami(dict, lang) {
  const { I18n, LINGUAI } = swiezy();
  LINGUAI.addUI(lang || "pl", dict);
  if (lang) I18n.set(lang);
  return I18n;
}

describe("napisy interfejsu", () => {
  test("brakujący klucz wraca jako klucz i ląduje na liście braków", () => {
    const I18n = zNapisami({ "a.b": "jest" });
    assert.equal(I18n.t("nie.ma"), "nie.ma");
    assert.ok(I18n.missing().indexOf("nie.ma") >= 0);
    assert.equal(I18n.missing().indexOf("a.b"), -1, "obecny klucz nie trafia na listę braków");
  });

  test("zmienne wchodzą w miejsce nawiasów", () => {
    const I18n = zNapisami({ "x": "masz {n} punktów i {ile} dni" });
    assert.equal(I18n.t("x", { n: 5, ile: 2 }), "masz 5 punktów i 2 dni");
  });

  test("nieznana zmienna zostaje w tekście zamiast zniknąć", () => {
    const I18n = zNapisami({ "x": "masz {n} i {czego}" });
    assert.equal(I18n.t("x", { n: 1 }), "masz 1 i {czego}");
  });

  test("polski wybiera formę wg kategorii, nie wg n === 1", () => {
    const I18n = zNapisami({ "d": { one: "{n} dzień", few: "{n} dni", many: "{n} dni", other: "{n} dnia" } });
    assert.equal(I18n.t("d", { n: 1 }), "1 dzień");
    assert.equal(I18n.t("d", { n: 3 }), "3 dni");
    assert.equal(I18n.t("d", { n: 5 }), "5 dni");
  });

  test("angielski ma dwie kategorie i „1 lessons” tu nie wyjdzie", () => {
    const I18n = zNapisami({ "l": { one: "{n} lesson", other: "{n} lessons" } }, "en");
    assert.equal(I18n.t("l", { n: 1 }), "1 lesson");
    assert.equal(I18n.t("l", { n: 2 }), "2 lessons");
  });

  test("brak liczby liczy się jak zero, a nie jak brak formy", () => {
    const I18n = zNapisami({ "l": { one: "{n} lekcja", few: "{n} lekcje", many: "{n} lekcji", other: "{n} lekcji" } });
    assert.equal(I18n.t("l"), "{n} lekcji", "kategoria dla zera, zmienna bez wartości zostaje");
  });

  test("locale idzie za wybranym językiem", () => {
    const I18n = zNapisami({ "a": "a" }, "en");
    assert.equal(I18n.lang, "en");
    assert.equal(I18n.locale(), "en-US", "angielski w tym kursie to odmiana amerykańska");
  });

  test("brak napisu w bieżącym języku spada na angielski, nie na klucz", () => {
    /* Kurs mówi pięcioma językami i nakładka bywa niepełna: uczeń ma
       zobaczyć zdanie po angielsku, a nie „set.errNoVersion" na ekranie. */
    const { I18n, LINGUAI } = swiezy();
    LINGUAI.addUI("en", { "x": "Fallback text" });
    LINGUAI.addUI("de", {});
    I18n.set("de");

    assert.equal(I18n.t("x"), "Fallback text");
    assert.ok(I18n.missing().indexOf("x") >= 0, "brak nadal jest widoczny na liście");
  });
});
