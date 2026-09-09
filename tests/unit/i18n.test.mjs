/* ============================================================
   Nakładanie tekstów w języku ucznia (assets/js/i18n.js).

   Nakładka łączy się z warstwą neutralną PO INDEKSIE: element n-ty
   nakładki dokleja się do n-tego elementu danych. Kształt pilnuje
   scripts/parity.mjs, ale tylko kształt — sam mechanizm scalania nie
   miał testu.

   Trzy niezmienniki, których złamanie nie wywraca niczego na ekranie:
   - pola NEUTRALNE (włoskie zdania, klucze odpowiedzi) nie mają prawa
     przyjść z nakładki: zmiana języka wyjaśnień osierociłaby nagrania,
     bo ich nazwy liczą się z treści włoskiej;
   - scalanie jest IDEMPOTENTNE i odwracalne: drugi język nakłada się na
     te same obiekty, bez przeładowania strony;
   - brak wpisu w nakładce zostawia pole takim, jakie było, a nie kasuje
     je do undefined — pusty tytuł lekcji wygląda jak brak lekcji.

   Napisy interfejsu mają tu swoją część, bo `t()` decyduje o czymś, czego
   nie widać w żadnym pliku danych: o formie liczby mnogiej. „1 dni"
   i „5 dzień" to nie literówki, tylko zła kategoria.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

/**
 * Prawdziwa droga scalania: nakładka wchodzi przez LINGUAI.addStrings,
 * a applyStrings chodzi po rejestrze kursu — tak, jak robi to
 * registry.loadLevelData po dociągnięciu plików poziomu.
 *
 * i18n.js wczytujemy PO silniku, żeby nadpisał atrapę I18n z piaskownicy.
 */
function swiezy() {
  const box = loadEngine({ files: [...CORE, "assets/js/i18n.js"] });
  box.Core.load();
  return {
    I18n: box.sandbox.I18n,
    LINGUAI: box.sandbox.LINGUAI,
    Registry: box.sandbox.Registry
  };
}

/** Lekcja w warstwie neutralnej: włoski, klucze odpowiedzi, struktura. */
function lekcjaNeutralna() {
  return {
    id: "a1-u01-l1",
    cefr: "A1",
    titleIt: "Il caffè",
    tags: ["g-presente"],
    grammar: {
      examples: [{ it: "Prendo un caffè." }, { it: "Bevo un tè." }]
    },
    vocab: [{ it: "caffè", ex: "un caffè, per favore" }, { it: "tè" }],
    dialogue: { titleIt: "Al bar", lines: [{ who: "A", it: "Un caffè?" }, { who: "B", it: "Sì, grazie." }] },
    exercises: [
      { t: "mcq", a: 1, opts: null },
      { t: "match", pairs: [{ it: "caffè" }, { it: "tè" }] },
      { t: "gender", items: [{ it: "caffè", a: "il" }] },
      { t: "dialogue", lines: [{ sp: "A", it: "Ciao", a: 0, choices: ["Ciao"] }] }
    ]
  };
}

/** Nakładka: wyłącznie to, co uczeń czyta po swojemu. */
function nakladkaPl() {
  return {
    "lesson:a1-u01-l1": {
      title: "Kawa",
      theme: "W barze",
      objectives: ["zamówić kawę"],
      theory: ["Włosi piją caffè na stojąco."],
      culture: { title: "Bar", text: "Bar to nie pub." },
      grammar: { title: "Czas teraźniejszy", note: "Trzy koniugacje.", table: { head: ["osoba"], rows: [["io"]] },
        examples: [{ tr: "Biorę kawę." }, { tr: "Piję herbatę." }] },
      vocab: ["kawa", "herbata"],
      dialogue: ["Kawa?", "Tak, dziękuję."],
      exercises: [
        { q: "Co zamawiasz?", why: "Bo tak", opts: ["herbatę", "kawę"] },
        { pairs: ["kawa", "herbata"] },
        { items: ["kawa"] },
        { lines: [{ tr: "Przywitaj się", answerTr: "Cześć" }] }
      ]
    }
  };
}

function przygotuj() {
  const box = swiezy();
  const L = lekcjaNeutralna();
  box.Registry.registerLevel({ code: "A1", dataFiles: [], units: [{ id: "a1-u01", lessons: [L] }] });
  box.LINGUAI.addStrings("pl", nakladkaPl());
  return Object.assign(box, { L });
}

describe("scalanie nakładki z warstwą neutralną", () => {
  test("teksty ucznia trafiają na miejsce", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("pl");
    assert.equal(L.title, "Kawa");
    assert.equal(L.theme, "W barze");
    assert.deepEqual(Array.from(L.objectives), ["zamówić kawę"]);
    assert.equal(L.culture.title, "Bar");
  });

  test("pola neutralne zostają nietknięte", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("pl");
    assert.equal(L.titleIt, "Il caffè", "włoski tytuł jest tożsamością lekcji");
    assert.equal(L.vocab[0].it, "caffè");
    assert.equal(L.dialogue.lines[0].it, "Un caffè?");
    assert.equal(L.exercises[0].a, 1, "klucz odpowiedzi nie pochodzi z nakładki");
    assert.equal(L.exercises[2].items[0].a, "il", "rodzajnik to klucz odpowiedzi, nie napis");
    assert.deepEqual(Array.from(L.tags), ["g-presente"]);
  });

  test("tablice łączą się po indeksie, każda pozycja ze swoją", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("pl");
    assert.equal(L.vocab[0].tr, "kawa");
    assert.equal(L.vocab[1].tr, "herbata");
    assert.equal(L.dialogue.lines[1].tr, "Tak, dziękuję.");
    assert.equal(L.grammar.examples[1].tr, "Piję herbatę.");
  });

  test("ćwiczenia dostają swoje pola, każdy typ po swojemu", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("pl");
    assert.deepEqual(Array.from(L.exercises[0].opts), ["herbatę", "kawę"]);
    assert.equal(L.exercises[1].pairs[1].tr, "herbata");
    assert.equal(L.exercises[2].items[0].gloss, "kawa");
    assert.equal(L.exercises[3].lines[0].tr, "Przywitaj się");
    assert.equal(L.exercises[3].lines[0].answerTr, "Cześć");
  });

  test("cała tabela gramatyczna przychodzi z nakładki, razem z komórkami", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("pl");
    assert.equal(L.grammar.title, "Czas teraźniejszy");
    assert.deepEqual(Array.from(L.grammar.table.head), ["osoba"]);
  });
});

describe("odporność scalania", () => {
  test("drugie nałożenie tego samego języka niczego nie psuje", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("pl");
    const poPierwszym = L.title;
    LINGUAI.applyStrings("pl");
    assert.equal(L.title, poPierwszym);
    assert.equal(L.vocab[0].tr, "kawa", "nie doklejone dwa razy");
    assert.equal(L.vocab[0].it, "caffè");
  });

  test("drugi język nadpisuje teksty na tych samych obiektach", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("pl");
    LINGUAI.addStrings("en", { "lesson:a1-u01-l1": { title: "Coffee", vocab: ["coffee", "tea"] } });
    LINGUAI.applyStrings("en");

    assert.equal(L.title, "Coffee", "bez przeładowania strony");
    assert.equal(L.vocab[0].tr, "coffee");
    assert.equal(L.titleIt, "Il caffè", "włoski nadal ten sam");
    assert.equal(L.theme, "W barze", "pole nieobecne w nowej nakładce zostaje z poprzedniej");
  });

  test("brak nakładki dla języka zostawia lekcję taką, jaka była", () => {
    const { LINGUAI, L } = przygotuj();
    LINGUAI.applyStrings("de");
    assert.equal(L.title, undefined, "nic nie doszło");
    assert.equal(L.titleIt, "Il caffè", "i nic nie zginęło");
  });

  test("nakładka krótsza od danych dokleja się do tego, co pokryła", () => {
    const { LINGUAI, Registry } = swiezy();
    const L = lekcjaNeutralna();
    Registry.registerLevel({ code: "A1", dataFiles: [], units: [{ id: "u", lessons: [L] }] });
    LINGUAI.addStrings("pl", { "lesson:a1-u01-l1": { vocab: ["kawa"] } });
    LINGUAI.applyStrings("pl");
    assert.equal(L.vocab[0].tr, "kawa");
    assert.equal(L.vocab[1].tr, undefined, "druga pozycja zostaje bez glosy, zamiast dostać cudzą");
    assert.equal(L.vocab[1].it, "tè", "i nie gubi włoskiego");
  });

  test("test jednostki jedzie tą samą drogą co zwykła lekcja", () => {
    const { LINGUAI, Registry } = swiezy();
    const test1 = Object.assign(lekcjaNeutralna(), { id: "a1-u01-test" });
    Registry.registerLevel({ code: "A1", dataFiles: [], units: [{ id: "u", lessons: [], test: test1 }] });
    LINGUAI.addStrings("pl", { "lesson:a1-u01-test": { title: "Sprawdzian" } });
    LINGUAI.applyStrings("pl");
    assert.equal(test1.title, "Sprawdzian");
  });
});

describe("napisy interfejsu", () => {
  function zNapisami(dict, lang) {
    const { I18n, LINGUAI } = swiezy();
    LINGUAI.addUI(lang || "pl", dict);
    if (lang) I18n.set(lang);
    return I18n;
  }

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
});
