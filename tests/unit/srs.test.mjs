/* ============================================================
   Talia powtórek (assets/js/srs.js) — to, czego nie dotyka state.test.mjs.

   Tamten plik opisuje arytmetykę harmonogramu (SM-2, FSRS, retencja,
   dziennik) i tam zostaje. Tutaj są dwie rzeczy, których nikt nie
   sprawdzał, a które uczeń widzi codziennie:

   - dueCards: KTÓRE karty i w jakiej kolejności trafiają do sesji;
   - cardTr: skąd bierze się tłumaczenie, gdy fiszka nie ma glosy w
     bieżącym języku — bo pusty wiersz w powtórkach to karta, której nie
     da się odpowiedzieć.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

const DZIEN = 86400000;

function swiezy() {
  const box = loadEngine();
  box.Core.load();
  return box;
}

/** Wstawia kartę wprost do stanu, z podanym terminem. */
function karta(box, it, due, over) {
  const k = box.Core.cardKey(it);
  box.Core.state.srs[k] = Object.assign({
    it: it, tr: { pl: it + "-pl" }, src: "", ef: 2.5, reps: 0, interval: 0,
    due: due, lapses: 0
  }, over || {});
  return k;
}

describe("dueCards: skład dzisiejszej sesji", () => {
  test("karta z terminem w przyszłości nie wchodzi, ta z przeszłości tak", () => {
    const box = swiezy();
    karta(box, "domani", Date.now() + DZIEN);
    karta(box, "ieri", Date.now() - DZIEN);
    const due = box.Core.dueCards();
    assert.equal(due.length, 1);
    assert.equal(due[0].it, "ieri");
  });

  test("karta z terminem dokładnie teraz jest już wymagalna", () => {
    const box = swiezy();
    karta(box, "adesso", Date.now());
    assert.equal(box.Core.dueCards().length, 1, "termin „teraz” znaczy teraz, nie za chwilę");
  });

  test("najpilniejsze idą pierwsze", () => {
    const box = swiezy();
    karta(box, "sredni", Date.now() - 2 * DZIEN);
    karta(box, "najstarszy", Date.now() - 9 * DZIEN);
    karta(box, "swiezy", Date.now() - 1000);
    assert.deepEqual(Array.from(box.Core.dueCards(), c => c.it), ["najstarszy", "sredni", "swiezy"]);
  });

  test("limit ucina po posortowaniu, więc bierze najpilniejsze, a nie przypadkowe", () => {
    const box = swiezy();
    karta(box, "trzeci", Date.now() - 1000);
    karta(box, "pierwszy", Date.now() - 9 * DZIEN);
    karta(box, "drugi", Date.now() - 2 * DZIEN);
    assert.deepEqual(Array.from(box.Core.dueCards(2), c => c.it), ["pierwszy", "drugi"]);
  });

  test("każda karta niesie swój klucz: bez niego nie ma jak jej ocenić", () => {
    const box = swiezy();
    const k = karta(box, "L'autore", Date.now() - 1000);
    const c = box.Core.dueCards()[0];
    assert.equal(c.key, k);
    assert.equal(c.key, "l'autore");
  });

  test("kopia, nie oryginał: sesja nie może po cichu przestawić terminu w talii", () => {
    const box = swiezy();
    const k = karta(box, "cane", Date.now() - 1000);
    const c = box.Core.dueCards()[0];
    c.due = Date.now() + 999 * DZIEN;
    assert.notEqual(box.Core.state.srs[k].due, c.due, "talia została nietknięta");
    assert.equal(box.Core.dueCards().length, 1, "i karta nadal jest do powtórki");
  });

  test("pusta talia daje pustą sesję i zero, a nie wyjątek", () => {
    const box = swiezy();
    assert.equal(box.Core.dueCards().length, 0);
    assert.equal(box.Core.dueCount(), 0);
  });

  test("dueCount liczy to samo, co dueCards bez limitu", () => {
    const box = swiezy();
    karta(box, "uno", Date.now() - 1000);
    karta(box, "due", Date.now() - 2000);
    karta(box, "tre", Date.now() + DZIEN);
    assert.equal(box.Core.dueCount(), 2);
    assert.equal(box.Core.dueCount(), box.Core.dueCards().length);
  });
});

describe("cardTr: skąd bierze się tłumaczenie", () => {
  test("glosa w bieżącym języku wygrywa", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    assert.equal(box.Core.cardTr({ it: "cane", tr: { pl: "pies", en: "dog" } }), "dog");
  });

  test("gdy w bieżącym języku glosy nie ma, zostaje jakakolwiek: pusty wiersz jest gorszy", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    assert.equal(box.Core.cardTr({ it: "cane", tr: { pl: "pies" } }), "pies");
  });

  test("pusta glosa w bieżącym języku nie liczy się jako glosa", () => {
    const box = swiezy();
    box.Core.state.settings.lang = "en";
    assert.equal(box.Core.cardTr({ it: "cane", tr: { en: "", pl: "pies" } }), "pies");
  });

  test("karta bez tłumaczeń daje pusty napis, a nie undefined", () => {
    const box = swiezy();
    assert.equal(box.Core.cardTr({ it: "cane", tr: {} }), "");
    assert.equal(box.Core.cardTr({ it: "cane" }), "");
    assert.equal(box.Core.cardTr(null), "");
  });
});

describe("addCard: dokładanie glosy nie rusza harmonogramu", () => {
  test("ta sama fiszka w drugim języku zyskuje glosę, a nie nowy termin", () => {
    const box = swiezy();
    const k = karta(box, "cane", Date.now() + 5 * DZIEN, { reps: 4, interval: 5 });

    box.Core.state.settings.lang = "en";
    const zwrocony = box.Core.addCard("cane", "dog", "a1-u01-l1");

    assert.equal(zwrocony, k, "to ta sama karta, nie druga");
    assert.equal(box.Core.state.srs[k].reps, 4, "seria powtórek nietknięta");
    assert.equal(box.Core.state.srs[k].interval, 5);
    assert.equal(box.Core.state.srs[k].tr.en, "dog");
    assert.equal(box.Core.state.srs[k].tr.pl, "cane-pl", "stara glosa zostaje");
  });

  test("nowa fiszka startuje wymagalna od razu: uczeń ma ją zobaczyć dziś", () => {
    const box = swiezy();
    const k = box.Core.addCard("gatto", "kot", "a1-u01-l1");
    assert.equal(box.Core.state.srs[k].reps, 0);
    assert.ok(box.Core.state.srs[k].due <= Date.now());
    assert.equal(box.Core.dueCount(), 1);
  });

  test("pusta treść nie zakłada fiszki", () => {
    const box = swiezy();
    assert.equal(box.Core.addCard("", "nic"), null);
    assert.equal(box.Core.addCard("   ", "nic"), null);
    assert.equal(Object.keys(box.Core.state.srs).length, 0);
  });
});

describe("wystawienie w Core", () => {
  test("Core oddaje funkcje talii, nie własne kopie", () => {
    const box = swiezy();
    ["addCard", "cardTr", "schedule", "gradeCard", "dueCards", "dueCount"].forEach(nazwa => {
      assert.equal(box.Core[nazwa], box.sandbox.Srs[nazwa], `Core.${nazwa} to inna funkcja`);
    });
  });
});
