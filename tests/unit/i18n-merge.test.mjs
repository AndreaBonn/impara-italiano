/* ============================================================
   Doklejanie tekstów ucznia do treści kursu (assets/js/i18n-merge.js).

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

   Lekcje to jedna z ośmiu kategorii, które ten plik scala. Pozostałe
   siedem (rozmowy, gramatyka, pary minimalne, czytanki, pisanie, fałszywi
   przyjaciele, jednostki) chodziły dotąd bez ani jednego testu, mimo że
   dwie z nich mają w kodzie wyjątki od reguły ogólnej.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const I18N = ["assets/js/i18n.js", "assets/js/i18n-merge.js"];

/**
 * Prawdziwa droga scalania: nakładka wchodzi przez LINGUAI.addStrings,
 * a applyStrings chodzi po rejestrze kursu — tak, jak robi to
 * registry.loadLevelData po dociągnięciu plików poziomu.
 *
 * i18n.js wczytujemy PO silniku, żeby nadpisał atrapę I18n z piaskownicy.
 */
function swiezy() {
  const box = loadEngine({ files: [...CORE, ...I18N] });
  box.Core.load();
  return {
    box: box,
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

  test("jednostka dostaje swój tytuł osobno od lekcji", () => {
    const { LINGUAI, Registry } = swiezy();
    const u = { id: "a1-u01", titleIt: "Al bar", lessons: [] };
    Registry.registerLevel({ code: "A1", dataFiles: [], units: [u] });
    LINGUAI.addStrings("pl", { "unit:a1-u01": { title: "W barze", grammarNote: "Czas teraźniejszy." } });
    LINGUAI.applyStrings("pl");
    assert.equal(u.title, "W barze");
    assert.equal(u.grammarNote, "Czas teraźniejszy.");
    assert.equal(u.titleIt, "Al bar");
  });

  test("poziom dostaje nazwę i opis", () => {
    const { LINGUAI, Registry } = swiezy();
    const lv = { code: "A1", dataFiles: [], units: [] };
    Registry.registerLevel(lv);
    LINGUAI.addStrings("pl", { "level:A1": { name: "Początkujący", desc: "Pierwsze kroki." } });
    LINGUAI.applyStrings("pl");
    assert.equal(lv.name, "Początkujący");
    assert.equal(lv.desc, "Pierwsze kroki.");
    assert.equal(lv.code, "A1", "kod poziomu jest identyfikatorem, nie napisem");
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

  test("hasStrings mówi, czy język w ogóle wszedł", () => {
    const { LINGUAI } = swiezy();
    assert.equal(LINGUAI.hasStrings("pl"), false, "przed wczytaniem plików nie ma nic");
    LINGUAI.addStrings("pl", { "lesson:x": { title: "x" } });
    assert.equal(LINGUAI.hasStrings("pl"), true);
    assert.equal(LINGUAI.hasStrings("de"), false);
  });
});

describe("rozmowy", () => {
  function rozmowa() {
    return {
      id: "c1", titleIt: "Al bar", icon: "☕",
      turns: [
        { sp: "A", it: "Cosa prende?" },
        { sp: "TY", accept: ["un caffè"], opts: [
          { accept: ["solo un caffè"], go: "fine" },
          { accept: ["un caffè e un dolce"] }
        ] },
        { id: "fine", sp: "A", it: "Subito." }
      ]
    };
  }

  function zRozmowa() {
    const s = swiezy();
    const c = rozmowa();
    s.box.sandbox.CONVERSATIONS = [c];
    return Object.assign(s, { c });
  }

  test("repliki i polecenia przychodzą z nakładki", () => {
    const { LINGUAI, c } = zRozmowa();
    LINGUAI.addStrings("pl", { "conv:c1": {
      title: "W barze", setting: "Poranek.", closing: "Dobra robota.",
      turns: [{ tr: "Co pan zamawia?" }, { task: "Zamów kawę" }, { tr: "Już podaję." }]
    } });
    LINGUAI.applyStrings("pl");

    assert.equal(c.title, "W barze");
    assert.equal(c.setting, "Poranek.");
    assert.equal(c.turns[0].tr, "Co pan zamawia?");
    assert.equal(c.turns[1].task, "Zamów kawę");
  });

  test("każda gałąź rozwidlenia ma własne tłumaczenie", () => {
    const { LINGUAI, c } = zRozmowa();
    LINGUAI.addStrings("pl", { "conv:c1": {
      turns: [{}, { opts: [{ tr: "Tylko kawa" }, { tr: "Kawa i deser" }] }, {}]
    } });
    LINGUAI.applyStrings("pl");

    assert.equal(c.turns[1].opts[0].tr, "Tylko kawa");
    assert.equal(c.turns[1].opts[1].tr, "Kawa i deser");
  });

  test("kierunek rozwidlenia i klucz odpowiedzi zostają neutralne", () => {
    /* Gdyby `go` albo `accept` wjechały do nakładki, zmiana języka
       wyjaśnień mogłaby przestawić przebieg dialogu. */
    const { LINGUAI, c } = zRozmowa();
    LINGUAI.addStrings("pl", { "conv:c1": {
      turns: [{}, { opts: [{ tr: "Tylko kawa", go: "gdzieindziej", accept: ["cokolwiek"] }] }, {}]
    } });
    LINGUAI.applyStrings("pl");

    assert.equal(c.turns[1].opts[0].go, "fine", "cel skoku nie pochodzi z nakładki");
    assert.deepEqual(Array.from(c.turns[1].opts[0].accept), ["solo un caffè"]);
  });
});

describe("hasło gramatyczne", () => {
  test("tytuły sekcji idą po indeksie, hasła po id", () => {
    const s = swiezy();
    const sekcja = { title: "", items: [{ id: "g-presente" }, { id: "g-passato" }] };
    s.box.sandbox.GRAMMAR_REF = [sekcja];
    s.LINGUAI.addStrings("pl", {
      "refsec:titles": ["Czasownik"],
      "ref:g-presente": { title: "Czas teraźniejszy", sub: "presente", body: ["Trzy koniugacje."] }
    });
    s.LINGUAI.applyStrings("pl");

    assert.equal(sekcja.title, "Czasownik");
    assert.equal(sekcja.items[0].title, "Czas teraźniejszy");
    assert.equal(sekcja.items[1].title, undefined, "hasło bez nakładki zostaje bez tytułu, nie z cudzym");
    assert.equal(sekcja.items[0].id, "g-presente", "id jest kluczem, nie napisem");
  });
});

describe("pary minimalne, czytanki, pisanie", () => {
  test("para minimalna dostaje glosy i uwagę kontrastywną", () => {
    const s = swiezy();
    const zbior = { id: "ph1", pairs: [{ a: "nonno", b: "nono" }] };
    s.box.sandbox.PHONETICS = [zbior];
    s.LINGUAI.addStrings("pl", { "ph:ph1": {
      title: "Podwojone spółgłoski", note: "Długość zmienia znaczenie.",
      contrast: "Polski nie ma długich spółgłosek.",
      pairs: [{ glossA: "dziadek", glossB: "dziewiąty" }]
    } });
    s.LINGUAI.applyStrings("pl");

    assert.equal(zbior.contrast, "Polski nie ma długich spółgłosek.");
    assert.equal(zbior.pairs[0].glossA, "dziadek");
    assert.equal(zbior.pairs[0].a, "nonno", "włoskie wyrazy pary zostają neutralne: mają nagrania");
  });

  test("czytanka bierze tytuł, panel trudnych słów i słownik do dotknięcia", () => {
    const s = swiezy();
    const r = { id: "r1", titleIt: "Il mercato", sentences: ["Vado al mercato."] };
    s.box.sandbox.READINGS = [r];
    s.LINGUAI.addStrings("pl", { "read:r1": {
      title: "Targ", gloss: { mercato: "targ" }, lex: { vado: "idę" }
    } });
    s.LINGUAI.applyStrings("pl");

    assert.equal(r.title, "Targ");
    assert.equal(r.gloss.mercato, "targ");
    assert.equal(r.lex.vado, "idę");
    assert.deepEqual(Array.from(r.sentences), ["Vado al mercato."]);
  });

  test("zadanie pisemne: polecenie z nakładki, przyjmowane formy włoskie z danych", () => {
    const s = swiezy();
    const w = { id: "w1", titleIt: "Una cartolina", items: [{ a: ["sono a"] }, { a: ["ti abbraccio"] }] };
    s.box.sandbox.WRITING = [w];
    s.LINGUAI.addStrings("pl", { "write:w1": {
      title: "Pocztówka", brief: "Napisz do znajomego.", checklist: ["gdzie jesteś"],
      items: [{ q: "Powiedz, gdzie jesteś" }, { q: "Pożegnaj się" }]
    } });
    s.LINGUAI.applyStrings("pl");

    assert.equal(w.title, "Pocztówka");
    assert.equal(w.items[0].q, "Powiedz, gdzie jesteś");
    assert.equal(w.items[1].q, "Pożegnaj się");
    assert.deepEqual(Array.from(w.items[0].a), ["sono a"], "przyjmowana wersja włoska nie jest napisem do tłumaczenia");
  });
});

describe("fałszywi przyjaciele", () => {
  /* JEDYNA kategoria, w której nakładka bywa krótsza od listy i ma prawo
     taka być: pułapka istnieje tylko dla języków, które ją mają. */
  test("wpis bez wyjaśnienia w nowym języku traci stare, zamiast je zachować", () => {
    const s = swiezy();
    const v = { id: "targa", it: "la targa" };
    s.box.sandbox.INTERFERENCE = [v];
    s.LINGUAI.addStrings("pl", { "int:targa": { looks: "targ", mean: "tablica rejestracyjna", why: "fałszywy przyjaciel" } });
    s.LINGUAI.addStrings("es", { "int:inne": { looks: "x", mean: "y", why: "z" } });

    s.LINGUAI.applyStrings("pl");
    assert.equal(v.mean, "tablica rejestracyjna");

    s.LINGUAI.applyStrings("es");
    assert.equal(v.looks, "", "po hiszpańsku ta pułapka nie istnieje");
    assert.equal(v.mean, "", "polskie wyjaśnienie zostałoby na ekranie, gdyby nie czyszczenie");
    assert.equal(v.why, "");
    assert.equal(v.it, "la targa", "włoski wpis zostaje: to on jest hasłem");
  });
});
