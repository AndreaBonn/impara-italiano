/* ============================================================
   lemma.js — from a form in a text to a dictionary entry.

   The test describes the boundary, not only the hits: the resolver has to
   REFUSE where it does not know, because the view then shows the student "I
   do not know this word" rather than an invented answer. A candidate the
   dictionary does not know is silence — and that is behaviour to pin down,
   not a fault to work around.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, VERBS, LEMMA } from "./_harness.mjs";

/* Arrays from the sandbox have a prototype from another realm, so a strict
   deepEqual rejects ["bere"] against ["bere"]. We copy the contents, just as
   in state.test.mjs and fsrs.test.mjs. */
const zZewnatrz = xs => Array.from(xs);

/** The engine with a substituted dictionary: the test does not load the whole course. */
function zeSlownikiem(hasla, czasowniki) {
  const box = loadEngine({ files: [...VERBS, ...LEMMA] });
  const L = box.sandbox.Lemma;
  const zbior = new Set(hasla);
  L.uzyjSlownika(w => zbior.has(w));
  if (czasowniki) L.dodajCzasowniki(czasowniki);
  return L;
}

describe("lemma: verb forms come down to the infinitive", () => {
  test("a personal form of the present tense", () => {
    const L = zeSlownikiem(["bere"]);
    assert.deepEqual(zZewnatrz(L.resolve("bevono")), ["bere"]);
    assert.deepEqual(zZewnatrz(L.resolve("bevi")), ["bere"]);
  });

  test("the participle and a compound tense", () => {
    const L = zeSlownikiem(["andare"]);
    assert.ok(L.resolve("andati").includes("andare"), "andati -> andare");
    assert.ok(L.resolve("andato").includes("andare"), "z sono andato zostaje andato");
  });

  test("the remote past and the subjunctive", () => {
    const L = zeSlownikiem(["essere"]);
    assert.ok(L.resolve("fu").includes("essere"), "fu -> essere");
    assert.ok(L.resolve("sia").length, "sia is recognised");
  });

  test("è does not fall out of the index despite being one letter", () => {
    const L = zeSlownikiem(["essere"]);
    assert.ok(L.resolve("è").includes("essere"),
      "the most frequent word in an Italian text: the first version lost it");
  });

  test("a verb from outside verbs.js comes in through dodajCzasowniki", () => {
    const L = zeSlownikiem(["scegliere"], ["scegliere"]);
    assert.ok(L.resolve("sceglie").includes("scegliere"));
  });
});

describe("lemma: nouns and adjectives come down by rule", () => {
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

  test("invariable words are not mutilated", () => {
    const L = zeSlownikiem(["città", "caffè"]);
    assert.deepEqual(zZewnatrz(L.resolve("città")), ["città"]);
    assert.deepEqual(zZewnatrz(L.resolve("caffè")), ["caffè"]);
  });
});

describe("lemma: granica jest zadeklarowana, nie ukryta", () => {
  test("a word the dictionary does not know returns nothing", () => {
    const L = zeSlownikiem(["casa"]);
    assert.deepEqual(zZewnatrz(L.resolve("carbonara")), [],
      "brak wyniku to informacja dla widoku, nie usterka");
  });

  test("candidates exist even when the dictionary knows nothing", () => {
    const L = zeSlownikiem([]);
    const k = L.kandydaci("turisti");
    assert.ok(k.includes("turisti"), "sama forma");
    assert.ok(k.includes("turisto") || k.includes("turiste") || k.includes("turista"),
      "co najmniej jedna forma podstawowa do pokazania uczniowi");
  });

  test("a function word answers with itself, without asking the dictionary", () => {
    const L = zeSlownikiem([]);
    assert.deepEqual(zZewnatrz(L.resolve("dello")), ["dello"]);
    assert.deepEqual(zZewnatrz(L.resolve("quaranta")), ["quaranta"], "a numeral too");
    assert.ok(L.funkcyjne("nella"));
    assert.ok(!L.funkcyjne("carbonara"));
  });

  test("letter case and the typographic apostrophe do not matter", () => {
    const L = zeSlownikiem(["essere"]);
    assert.ok(L.resolve("È").includes("essere"));
  });
});

describe("lemma: the cost", () => {
  test("the index is built once and fits within the startup budget", () => {
    const L = zeSlownikiem(["bere"]);
    const start = Date.now();
    const n = L.rozmiarIndeksu();
    const ms = Date.now() - start;
    assert.ok(n > 3000, `the index only makes sense at thousands of forms, it has ${n}`);
    /* Generous: measured in the vm sandbox, slower than a browser. The point
       is to catch an order-of-magnitude regression, not to benchmark. */
    assert.ok(ms < 2000, `budowa indeksu ${ms} ms`);
  });
});

describe("lemma: an accented entry, an unaccented form in the text", () => {
  /* A word in a sentence carries no tonic accent, while a dictionary entry
     must carry it, because that is how the narrator reads it: "pèsca" is the
     fruit, "pésca" is fishing, and the voice tells them apart (measured, two
     different files). The alias joins one to the other — and has to return
     the CANONICAL form, not the one from the text, otherwise the card
     pokazuje wyraz bez glosy i bez nagrania. */
  test("tapping an unaccented form gives the accented entry", () => {
    const box = loadEngine({ files: [...VERBS, ...LEMMA] });
    const L = box.sandbox.Lemma;
    /* Through the production path: the dictionary is built from READINGS, as
       in the browser. Substituting a predicate of our own would bypass the
       aliases. */
    box.sandbox.READINGS = [{ glossIt: [], lexIt: ["pèsca", "realtà"] }];
    L.uzyjSlownika(null);
    L.odswiez();
    assert.deepEqual(zZewnatrz(L.resolve("pesca")), ["pèsca"]);
    assert.deepEqual(zZewnatrz(L.resolve("realta")), ["realtà"]);
  });

  test("the accented form still works on its own", () => {
    const box = loadEngine({ files: [...VERBS, ...LEMMA] });
    const L = box.sandbox.Lemma;
    box.sandbox.READINGS = [{ glossIt: [], lexIt: ["pèsca"] }];
    L.uzyjSlownika(null);
    L.odswiez();
    assert.deepEqual(zZewnatrz(L.resolve("pèsca")), ["pèsca"]);
  });
});

describe("an auxiliary is not an entry", () => {
  /* Found by tapping "era" in a reading: the card showed the translation of
     the WHOLE lexicon phrase ("era tutto buonissimo" -> "everything was
     delicious"), because a multi-word entry contributed each of its words to
     the dictionary. On top of that, "era" and "hanno" landed in the index for
     every verb with a compound tense, because the forms "era entrato" and
     "hanno detto" were split on the space together with the auxiliary. */
  test("a compound form does not contribute its auxiliary to the index", () => {
    const L = zeSlownikiem(["entrare", "dire"], ["entrare", "dire"]);
    /* "era entrato" and "hanno detto" exist as forms, but "era" and "hanno"
       must not lead to entrare or to dire. */
    assert.deepEqual(zZewnatrz(L.resolve("era")), []);
    assert.deepEqual(zZewnatrz(L.resolve("hanno")), []);
    assert.ok(L.resolve("entrato").includes("entrare"), "entrato -> entrare");
    assert.ok(L.resolve("detto").includes("dire"), "detto -> dire");
  });

  test("the forms of essere and avere lead to their own verb", () => {
    const L = zeSlownikiem(["essere", "avere"], ["essere", "avere"]);
    assert.ok(L.resolve("era").includes("essere"), "era -> essere");
    assert.ok(L.resolve("hanno").includes("avere"), "hanno -> avere");
    assert.ok(L.resolve("fossero").includes("essere"), "fossero -> essere");
  });
});
