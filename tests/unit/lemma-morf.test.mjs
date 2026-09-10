/* ============================================================
   lemma-morf.js - the rules of form, with no dictionary and no conjugator.

   lemma.test.mjs checks the VERDICT: whether "bevono" resolves to "bere"
   given a supplied dictionary. Here it is about the layer below: the
   candidates a rule emits by looking at the string alone. Those two things
   break separately and have the same symptom - silence on the tapped word -
   so as long as they shared one test, every failure pointed at both files at
   once.

   Every rule here has a case that MUST match and a case with the same ending
   that must NOT: a rule nobody tried to overshoot also passes when it
   catches half the dictionary.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

/** The rules file alone: it loads neither Verbs nor Core. That is what this test is about. */
function morf() {
  return loadEngine({ files: ["assets/js/lemma-morf.js"] }).sandbox.LemmaMorf;
}

const zZewnatrz = xs => Array.from(xs);

describe("a compound form loses its auxiliary", () => {
  test("the past tense leaves the participle alone", () => {
    const M = morf();
    assert.deepEqual(zZewnatrz(M.slowa("sono andato")), ["andato"]);
    assert.deepEqual(zZewnatrz(M.slowa("era entrato")), ["entrato"]);
    assert.deepEqual(zZewnatrz(M.slowa("hanno mangiato")), ["mangiato"]);
  });

  test("an auxiliary standing ALONE stays, because it is a form of \"essere\" in its own right", () => {
    const M = morf();
    /* This exact pair pins down the decision from the comment in
       lemma-morf.js: "era" in "era entrato" is noise, "era" on its own is a
       form of a verb the course teaches. Without the second assertion the
       filter could drop auxiliaries always and the test would still pass. */
    assert.deepEqual(zZewnatrz(M.slowa("era")), ["era"]);
    assert.deepEqual(zZewnatrz(M.slowa("è")), ["è"]);
  });

  test("letter case and extra spaces do not change the result", () => {
    const M = morf();
    assert.deepEqual(zZewnatrz(M.slowa("  SONO   ANDATO ")), ["andato"]);
  });

  test("posilkowy recognises auxiliaries only", () => {
    const M = morf();
    assert.equal(M.posilkowy("hanno"), true);
    assert.equal(M.posilkowy("Era"), true);
    assert.equal(M.posilkowy("mangiano"), false);
    assert.equal(M.posilkowy("essere"), false, "the infinitive is not an auxiliary form");
  });
});

describe("what looks like an infinitive", () => {
  test("the three conjugations and reflexive forms match", () => {
    const M = morf();
    ["parlare", "vendere", "dormire", "alzarsi", "mettersi", "vestirsi"]
      .forEach(w => assert.equal(M.czasownikowe(w), true, w));
  });

  test("a phrase and a noun do not match", () => {
    const M = morf();
    /* "a che ora" has a space inside, "mare" ends in -are and is NOT a verb
       - but the rule cannot tell, and is not supposed to: a false candidate
       costs one dictionary lookup, false silence costs the student an
       explanation. The test pins that choice down. */
    assert.equal(M.czasownikowe("a che ora"), false);
    assert.equal(M.czasownikowe("casa"), false);
    assert.equal(M.czasownikowe("mare"), true, "a deliberate false positive");
  });
});

describe("plural and gender come down to the dictionary form", () => {
  const przypadki = [
    ["amiche", "amica"],        // -che with a hard k
    ["colleghe", "collega"],
    ["fuochi", "fuoco"],
    ["laghi", "lago"],
    ["amici", "amico"],
    ["uffici", "ufficio"],
    ["orologi", "orologio"],
    ["proprietari", "proprietario"],
    ["libri", "libro"],
    ["cani", "cane"],
    ["problemi", "problema"],
    ["case", "casa"],
    ["bella", "bello"],
    ["antichissimo", "antico"], // superlative with the k restored
    ["lunghissima", "lungo"],
    ["bellissimi", "bello"]
  ];

  przypadki.forEach(([forma, oczekiwane]) => {
    test(`${forma} -> ${oczekiwane}`, () => {
      const M = morf();
      assert.ok(M.odmienne(forma).includes(oczekiwane),
        `${oczekiwane} is missing from [${M.odmienne(forma).join(", ")}]`);
    });
  });

  test("the form from the text is the first candidate", () => {
    const M = morf();
    assert.equal(M.odmienne("amiche")[0], "amiche");
  });

  test("the specific rule comes before the general one", () => {
    const M = morf();
    const out = zZewnatrz(M.odmienne("amiche"));
    /* If "-e -> -a" came before "-che -> -ca", the first candidate after the
       form from the text would be "amicha", which is in no dictionary, and
       "amica" would only be tried after it. The order IS the content. */
    assert.ok(out.indexOf("amica") < out.indexOf("amicha"),
      `amica must come before amicha: [${out.join(", ")}]`);
  });

  test("a word no rule applies to comes back as itself", () => {
    const M = morf();
    assert.deepEqual(zZewnatrz(M.odmienne("bar")), ["bar"]);
  });
});

describe("function words and numerals", () => {
  test("articles, contracted prepositions and particles are known", () => {
    const M = morf();
    ["il", "dello", "nelle", "c'è", "però", "quei", "mal"]
      .forEach(w => assert.equal(M.funkcyjny(w), true, w));
  });

  test("numerals too, including the part before an apostrophe", () => {
    const M = morf();
    ["quattro", "quaranta", "mille", "primo", "vent", "trent"]
      .forEach(w => assert.equal(M.funkcyjny(w), true, w));
  });

  test("an ordinary word is not a function word", () => {
    const M = morf();
    ["casa", "mangiare", "bellissimo", "pesca"]
      .forEach(w => assert.equal(M.funkcyjny(w), false, w));
  });

  test("a capital letter at the start of a sentence does not lose the match", () => {
    const M = morf();
    assert.equal(M.funkcyjny("Dello"), true);
  });
});

describe("the tonic accent", () => {
  test("it is stripped so the form from the text hits the dictionary entry", () => {
    const M = morf();
    assert.equal(M.bezAkcentow("pèsca"), "pesca");
    assert.equal(M.bezAkcentow("pésca"), "pesca");
    assert.equal(M.bezAkcentow("così"), "cosi");
    assert.equal(M.bezAkcentow("perché"), "perche");
  });

  test("a word with no accent comes back unchanged", () => {
    const M = morf();
    assert.equal(M.bezAkcentow("pesca"), "pesca");
  });
});

describe("pronouns attached to a verb", () => {
  test("the infinitive restores its final -e", () => {
    const M = morf();
    const out = zZewnatrz(M.bezEnklityk("mandarli"));
    assert.ok(out.includes("mandar"), `stem: [${out.join(", ")}]`);
    assert.ok(out.includes("mandare"), `infinitive: [${out.join(", ")}]`);
  });

  test("a reflexive form comes back as -rsi", () => {
    const M = morf();
    assert.ok(zZewnatrz(M.bezEnklityk("preoccuparti")).includes("preoccupare"));
    assert.ok(zZewnatrz(M.bezEnklityk("alzati")).includes("alzarsi"));
  });

  test("a double pronoun detaches at both cuts", () => {
    const M = morf();
    const out = zZewnatrz(M.bezEnklityk("dammelo"));
    assert.ok(out.includes("dam"), `the whole "melo": [${out.join(", ")}]`);
    assert.ok(out.includes("damme"), `just "lo": [${out.join(", ")}]`);
  });

  test("a short word ending like a pronoun is left untouched", () => {
    const M = morf();
    /* "solo" ends in "lo" and is not a verb with a pronoun. Without the
       length threshold it would leave "so", and tapping "solo" would show a
       form of "sapere". This is the same case as "era" above: a rule with no
       negative case catches too much and nobody notices. */
    assert.deepEqual(zZewnatrz(M.bezEnklityk("solo")), []);
    assert.deepEqual(zZewnatrz(M.bezEnklityk("lo")), []);
  });
});
