/* ============================================================
   Detecting constructions in the student's text.

   This is the whole difference between an exercise that measures something
   and a self-assessment checklist. If the detection lies in either
   direction, the student is either praised for what they did not write or
   corrected for what they wrote correctly.
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
  test("it finds a simple form in the right tense", () => {
    const box = silnik();
    const r = znajdz(box, "Da bambino parlavo poco.", [{ verb: "parlare", tense: "imperf" }]);
    assert.equal(r[0].found, true);
    assert.equal(r[0].hit, "parlavo");
  });

  test("nie uznaje innego czasu tego samego czasownika", () => {
    const box = silnik();
    const r = znajdz(box, "Parlo italiano.", [{ verb: "parlare", tense: "imperf" }]);
    assert.equal(r[0].found, false, "parlo is the present, not the imperfetto");
  });

  test("it finds a compound tense together with its auxiliary", () => {
    const box = silnik();
    const r = znajdz(box, "Ieri ho mangiato una pizza.", [{ verb: "mangiare", tense: "passPross" }]);
    assert.equal(r[0].found, true);
    assert.equal(r[0].hit, "ho mangiato");
  });

  /* The conjugator produces the masculine only. A student writing about
     herself is right and must not be counted because of it as somebody who
     did not use the tense. */
  test("feminine and plural participle agreement is accepted", () => {
    const box = silnik();
    const wym = [{ verb: "andare", tense: "passPross" }];
    ["Ieri sono andata al mare.", "Siamo andate insieme.", "Sono andati via."].forEach(zd => {
      assert.equal(znajdz(box, zd, wym)[0].found, true, zd);
    });
  });

  test("a reflexive verb is caught together with its pronoun", () => {
    const box = silnik();
    const r = znajdz(box, "Mi sono alzata alle sei.", [{ verb: "alzarsi", tense: "passPross" }]);
    assert.equal(r[0].found, true);
  });

  /* Simple forms carry the person in their ending: swapping the last vowel
     would be consenting to "parlava" where "parlavo" was meant. */
  test("in a simple form the ending is NOT arbitrary", () => {
    const box = silnik();
    const formy = box.sandbox.Writing.formyDla({ verb: "parlare", tense: "imperf" });
    assert.ok(formy.indexOf("parlavo") >= 0);
    /* "parlavu" is no form at all and has no right to pass */
    assert.equal(znajdz(box, "Da bambino parlavu poco.", [{ verb: "parlare", tense: "imperf" }])[0].found, false);
  });
});

describe("words and alternatives", () => {
  test("it looks for a specific word", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Prima studio, poi esco.", [{ word: "poi" }])[0].found, true);
    assert.equal(znajdz(box, "Prima studio e esco.", [{ word: "poi" }])[0].found, false);
  });

  test("it does not catch a word hidden inside another word", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Il poeta scrive.", [{ word: "poe" }])[0].found, false);
    assert.equal(znajdz(box, "Vado a casa.", [{ word: "a" }])[0].found, true);
  });

  test("accents are not required on the student's side", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Perche non vieni?", [{ word: "perché" }])[0].found, true);
    assert.equal(znajdz(box, "Perché non vieni?", [{ word: "perche" }])[0].found, true);
  });

  test("one of the given alternatives is enough", () => {
    const box = silnik();
    const wym = [{ any: ["di solito", "spesso", "qualche volta"] }];
    assert.equal(znajdz(box, "Spesso vado a piedi.", wym)[0].found, true);
    assert.equal(znajdz(box, "Vado a piedi.", wym)[0].found, false);
  });

  test("punctuation does not get in the way", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Poi, finalmente, esco.", [{ word: "poi" }])[0].found, true);
    assert.equal(znajdz(box, "Che cosa fai? Studio.", [{ word: "studio" }])[0].found, true);
  });
});

describe("the result as a reading, not a grade", () => {
  test("it returns an entry for every requirement, including the unmet ones", () => {
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
    assert.equal(r[1].hit, null, "an unmet requirement does not pretend to be a hit");
  });

  test("an empty text meets nothing and does not fall over", () => {
    const box = silnik();
    const r = znajdz(box, "", [{ verb: "essere", tense: "pres" }]);
    assert.equal(r[0].found, false);
    assert.equal(box.sandbox.Writing.wordCount(""), 0);
  });

  test("it counts the words", () => {
    const box = silnik();
    assert.equal(box.sandbox.Writing.wordCount("  Vado   a casa oggi "), 4);
  });
});

describe("zapis wypracowania", () => {
  test("the text and the result reach the state and survive a save", () => {
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

  /* A composition is the only content in the state the student cannot
     reconstruct by studying further — pruning on full storage has no right
     to touch it. */
  test("pruning on full storage does not erase the compositions", () => {
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

/* Found in a code review, not by a test — and here so that it does not come back. */
describe("regressions from the review", () => {
  test("apostrof typograficzny z telefonu trafia w wymaganie", () => {
    const box = silnik();
    const wym = [{ any: ["secondo l'autore", "l'autore sostiene"] }];
    /* U+2019, the one iOS and every word processor inserts. */
    assert.equal(znajdz(box, "Secondo l’autore la lingua evita.", wym)[0].found, true);
    assert.equal(znajdz(box, "Secondo l'autore la lingua evita.", wym)[0].found, true);
  });

  test("the apostrophe works the other way round too: a curly requirement, a straight text", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Vado all'una.", [{ word: "all’una" }])[0].found, true);
  });

  /* The slack on the ending was meant to handle "sono andata" against "sono
     andato". Applied to fixed phrases it let incorrect forms through. */
  test("a fixed phrase does not accept a mangled ending", () => {
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

  test("while participle agreement still passes", () => {
    const box = silnik();
    assert.equal(znajdz(box, "Sono andata via.", [{ verb: "andare", tense: "passPross" }])[0].found, true);
  });
});

describe("odczyt wypracowania", () => {
  test("a saved text comes back on re-entry", () => {
    /* A composition is the only content in the state the student cannot
       reconstruct by studying further: pruning on full storage leaves it
       alone, and the view has to find it again on returning to the screen. */
    const box = silnik();
    box.sandbox.Writing.save("w1", "Ciao, sono a Roma.", []);
    assert.equal(box.sandbox.Writing.load("w1").text, "Ciao, sono a Roma.");
  });

  test("an untouched task has no composition and does not pretend to be empty", () => {
    const box = silnik();
    assert.equal(box.sandbox.Writing.load("w2"), null);
  });
});
