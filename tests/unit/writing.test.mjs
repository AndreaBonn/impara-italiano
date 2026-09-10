/* ============================================================
   Wykrywanie konstrukcji w tekście ucznia.

   To jest cała różnica między ćwiczeniem, które coś mierzy, a listą
   pytań do samooceny. Jeśli wykrywanie kłamie w którąkolwiek stronę,
   uczeń albo dostaje pochwałę za to, czego nie napisał, albo jest
   poprawiany za to, co napisał dobrze.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, VERBS } from "./_harness.mjs";

const PLIKI = [...CORE, ...VERBS, "assets/js/writing.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

function znajdz(box, tekst, wymagania) {
  return box.sandbox.Writing.analyse(tekst, wymagania);
}

describe("czasowniki przez koniugator", () => {
  test("znajduje formę prostą we właściwym czasie", () => {
    const box = silnik();
    const r = znajdz(box, "Da bambino parlavo poco.", [{ verb: "parlare", tense: "imperf" }]);
    assert.equal(r[0].found, true);
    assert.equal(r[0].hit, "parlavo");
  });

  test("nie uznaje innego czasu tego samego czasownika", () => {
    const box = silnik();
    const r = znajdz(box, "Parlo italiano.", [{ verb: "parlare", tense: "imperf" }]);
    assert.equal(r[0].found, false, "parlo to teraźniejszy, nie imperfetto");
  });

  test("znajduje czas złożony razem z posiłkowym", () => {
    const box = silnik();
    const r = znajdz(box, "Ieri ho mangiato una pizza.", [{ verb: "mangiare", tense: "passPross" }]);
    assert.equal(r[0].found, true);
    assert.equal(r[0].hit, "ho mangiato");
  });

  /* Koniugator daje tylko rodzaj męski. Uczennica pisząca o sobie ma rację
     i nie może przez to zostać uznana za kogoś, kto nie użył czasu. */
  test("uzgodnienie żeńskie i mnogie imiesłowu jest przyjmowane", () => {
    const box = silnik();
    const wym = [{ verb: "andare", tense: "passPross" }];
    ["Ieri sono andata al mare.", "Siamo andate insieme.", "Sono andati via."].forEach(zd => {
      assert.equal(znajdz(box, zd, wym)[0].found, true, zd);
    });
  });

  test("czasownik zwrotny łapie się razem z zaimkiem", () => {
    const box = silnik();
    const r = znajdz(box, "Mi sono alzata alle sei.", [{ verb: "alzarsi", tense: "passPross" }]);
    assert.equal(r[0].found, true);
  });

  /* Formy proste niosą osobę w końcówce: podmiana ostatniej samogłoski
     byłaby zgodą na „parlava" tam, gdzie miało być „parlavo". */
  test("w formie prostej końcówka NIE jest dowolna", () => {
    const box = silnik();
    const formy = box.sandbox.Writing.formyDla({ verb: "parlare", tense: "imperf" });
    assert.ok(formy.indexOf("parlavo") >= 0);
    /* „parlavu" nie jest żadną formą i nie ma prawa przejść */
    assert.equal(znajdz(box, "Da bambino parlavu poco.", [{ verb: "parlare", tense: "imperf" }])[0].found, false);
  });
});

describe("słowa i alternatywy", () => {
  test("szuka konkretnego słowa", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Prima studio, poi esco.", [{ word: "poi" }])[0].found, true);
    assert.equal(znajdz(box, "Prima studio e esco.", [{ word: "poi" }])[0].found, false);
  });

  test("nie łapie słowa schowanego w innym słowie", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Il poeta scrive.", [{ word: "poe" }])[0].found, false);
    assert.equal(znajdz(box, "Vado a casa.", [{ word: "a" }])[0].found, true);
  });

  test("akcenty nie są wymagane po stronie ucznia", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Perche non vieni?", [{ word: "perché" }])[0].found, true);
    assert.equal(znajdz(box, "Perché non vieni?", [{ word: "perche" }])[0].found, true);
  });

  test("wystarczy jedna z podanych alternatyw", () => {
    const box = silnik();
    const wym = [{ any: ["di solito", "spesso", "qualche volta"] }];
    assert.equal(znajdz(box, "Spesso vado a piedi.", wym)[0].found, true);
    assert.equal(znajdz(box, "Vado a piedi.", wym)[0].found, false);
  });

  test("interpunkcja nie przeszkadza", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Poi, finalmente, esco.", [{ word: "poi" }])[0].found, true);
    assert.equal(znajdz(box, "Che cosa fai? Studio.", [{ word: "studio" }])[0].found, true);
  });
});

describe("wynik jako odczyt, nie ocena", () => {
  test("zwraca wpis na każde wymaganie, także niespełnione", () => {
    const box = silnik();
    const r = znajdz(box, "Mangio una mela.", [
      { verb: "mangiare", tense: "pres" },
      { word: "domani" },
      { any: ["però", "invece"] }
    ]);
    assert.equal(r.length, 3);
    assert.equal(r[0].found, true);
    assert.equal(r[1].found, false);
    assert.equal(r[2].found, false);
    assert.equal(r[1].hit, null, "niespełnione wymaganie nie udaje trafienia");
  });

  test("pusty tekst nie spełnia niczego i nie wywraca się", () => {
    const box = silnik();
    const r = znajdz(box, "", [{ verb: "essere", tense: "pres" }]);
    assert.equal(r[0].found, false);
    assert.equal(box.sandbox.Writing.wordCount(""), 0);
  });

  test("liczy słowa", () => {
    const box = silnik();
    assert.equal(box.sandbox.Writing.wordCount("  Vado   a casa oggi "), 4);
  });
});

describe("zapis wypracowania", () => {
  test("tekst i wynik trafiają do stanu i przeżywają zapis", () => {
    const box = silnik();
    const wynik = znajdz(box, "Ieri ho mangiato.", [{ verb: "mangiare", tense: "passPross" }, { word: "domani" }]);
    box.sandbox.Writing.save("w-test", "Ieri ho mangiato.", wynik);
    box.flush();

    const zapis = box.stored("linguai.italiano.v2").writing["w-test"];
    assert.equal(zapis.text, "Ieri ho mangiato.");
    assert.equal(zapis.found, 1);
    assert.equal(zapis.total, 2);
    assert.equal(zapis.words, 3);
  });

  /* Wypracowanie to jedyna treść w stanie, której uczeń nie odtworzy
     dalszą nauką — potarcie przy pełnej pamięci nie ma prawa jej ruszyć. */
  test("potarcie przy pełnej pamięci nie kasuje wypracowań", () => {
    const box = silnik();
    box.sandbox.Writing.save("w-1", "Un testo lungo del corso.", []);
    for (let i = 0; i < 40; i++) {
      box.Core.state.errors["k" + i] = { kind: "authored", reps: 3, lapses: 0, ts: i, due: 1, wypelniacz: "x".repeat(200) };
    }
    box.storage._setLimit(3000);
    box.Core.save();
    box.flush();

    assert.ok(box.Core.state.writing["w-1"], "wypracowanie zostaje");
    assert.equal(box.Core.state.writing["w-1"].text, "Un testo lungo del corso.");
  });
});

/* Znalezione w przeglądzie kodu, nie przez test — i tu, żeby nie wróciło. */
describe("regresje z przeglądu", () => {
  test("apostrof typograficzny z telefonu trafia w wymaganie", () => {
    const box = silnik();
    const wym = [{ any: ["secondo l'autore", "l'autore sostiene"] }];
    /* U+2019, ten, który wstawia iOS i każdy edytor tekstu. */
    assert.equal(znajdz(box, "Secondo l’autore la lingua evita.", wym)[0].found, true);
    assert.equal(znajdz(box, "Secondo l'autore la lingua evita.", wym)[0].found, true);
  });

  test("apostrof działa też w drugą stronę: wymaganie krzywe, tekst prosty", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Vado all'una.", [{ word: "all’una" }])[0].found, true);
  });

  /* Luz na końcówce miał obsłużyć „sono andata" wobec „sono andato".
     Zastosowany do zwrotów stałych przepuszczał formy niepoprawne. */
  test("zwrot stały nie przyjmuje przekręconej końcówki", () => {
    const box = silnik();
    const wym = [{ any: ["cordiali saluti"] }];
    assert.equal(znajdz(box, "Cordiali saluti, Marco.", wym)[0].found, true);
    assert.equal(znajdz(box, "Cordiali saluto, Marco.", wym)[0].found, false);
    assert.equal(znajdz(box, "Cordiali salute, Marco.", wym)[0].found, false);
  });

  test("di solito nie przyjmuje di solita", () => {
    const box = silnik();
    const wym = [{ any: ["di solito"] }];
    assert.equal(znajdz(box, "Di solito mi alzo presto.", wym)[0].found, true);
    assert.equal(znajdz(box, "Di solita mi alzo presto.", wym)[0].found, false);
  });

  test("a uzgodnienie imiesłowu nadal przechodzi", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Sono andata via.", [{ verb: "andare", tense: "passPross" }])[0].found, true);
  });
});

describe("odczyt wypracowania", () => {
  test("zapisany tekst wraca po ponownym wejściu", () => {
    /* Wypracowanie jest jedyną treścią w stanie, której uczeń nie odtworzy
       dalszą nauką: potarcie przy pełnej pamięci go nie rusza, a widok musi
       je znaleźć po powrocie na ekran. */
    const box = silnik();
    box.sandbox.Writing.save("w1", "Ciao, sono a Roma.", []);
    assert.equal(box.sandbox.Writing.load("w1").text, "Ciao, sono a Roma.");
  });

  test("zadanie nietknięte nie ma wypracowania i nie udaje pustego", () => {
    const box = silnik();
    assert.equal(box.sandbox.Writing.load("w2"), null);
  });
});
