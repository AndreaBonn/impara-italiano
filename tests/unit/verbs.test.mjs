/* ============================================================
   The conjugation engine (assets/js/verbs.js).

   Until now it had one test file and that file was ONLY about prefix
   inheritance (verbs-prefix.test.mjs). The conjugation itself - fourteen
   tenses, four regular patterns, spelling changes, reflexives, the
   auxiliary, participle agreement - had none.

   The consequence is worse than an ordinary bug: the engine not only draws
   the table in "Verb conjugation", it DETERMINES THE CORRECT ANSWER in
   `conj` exercises. A wrong form does not look like a fault: it looks like
   the student made a mistake.

   The forms are written out here as Italian rather than computed a second
   time by the same code. A test that derives its expectation with the same
   rule as the implementation confirms the rule instead of checking it.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, VERBS } from "./_harness.mjs";

const V = loadEngine({ files: VERBS }).sandbox.Verbs;

/** The conjugation as a plain array of this realm - the vm has an Array of its own. */
function formy(inf, tense, gender) {
  const out = V.conjugate(inf, tense, gender);
  return out === null ? null : Array.from(out);
}

describe("the regular patterns", () => {
  test("-are across all the simple tenses", () => {
    assert.deepEqual(formy("parlare", "pres"), ["parlo", "parli", "parla", "parliamo", "parlate", "parlano"]);
    assert.deepEqual(formy("parlare", "imperf"), ["parlavo", "parlavi", "parlava", "parlavamo", "parlavate", "parlavano"]);
    assert.deepEqual(formy("parlare", "remoto"), ["parlai", "parlasti", "parlò", "parlammo", "parlaste", "parlarono"]);
    assert.deepEqual(formy("parlare", "futuro"), ["parlerò", "parlerai", "parlerà", "parleremo", "parlerete", "parleranno"]);
    assert.deepEqual(formy("parlare", "condizionale"), ["parlerei", "parleresti", "parlerebbe", "parleremmo", "parlereste", "parlerebbero"]);
    assert.deepEqual(formy("parlare", "cong"), ["parli", "parli", "parli", "parliamo", "parliate", "parlino"]);
    assert.deepEqual(formy("parlare", "congImp"), ["parlassi", "parlassi", "parlasse", "parlassimo", "parlaste", "parlassero"]);
  });

  test("-ere and -ire differ in the third person and the second plural", () => {
    assert.deepEqual(formy("credere", "pres"), ["credo", "credi", "crede", "crediamo", "credete", "credono"]);
    assert.deepEqual(formy("dormire", "pres"), ["dormo", "dormi", "dorme", "dormiamo", "dormite", "dormono"]);
  });

  test("the -isc- pattern applies in the singular and the third plural, but not in noi/voi", () => {
    assert.deepEqual(formy("capire", "pres"), ["capisco", "capisci", "capisce", "capiamo", "capite", "capiscono"]);
    assert.deepEqual(formy("finire", "cong"), ["finisca", "finisca", "finisca", "finiamo", "finiate", "finiscano"]);
  });

  test("an -ire verb outside the -isc- list conjugates without that infix", () => {
    assert.equal(formy("dormire", "pres")[0], "dormo", "\"dormisco\" would be wrong");
    assert.equal(V.groupOf("dormire"), "ire");
    assert.equal(V.groupOf("capire"), "isc");
  });
});

describe("spelling changes", () => {
  /* Without them the course would teach forms that sound different from the
     way they look: "cerci" reads as "cherchi" while a hard "k" is meant. */
  test("-care and -gare add an h before i and e", () => {
    assert.deepEqual(formy("cercare", "pres"), ["cerco", "cerchi", "cerca", "cerchiamo", "cercate", "cercano"]);
    assert.deepEqual(formy("pagare", "pres"), ["pago", "paghi", "paga", "paghiamo", "pagate", "pagano"]);
    assert.equal(formy("cercare", "futuro")[0], "cercherò");
    assert.equal(formy("pagare", "condizionale")[0], "pagherei");
  });

  test("-ciare and -giare drop the i before an ending in i or e", () => {
    assert.equal(formy("cominciare", "pres")[1], "cominci", "not \"comincii\"");
    assert.equal(formy("mangiare", "pres")[1], "mangi", "not \"mangii\"");
    assert.equal(formy("mangiare", "futuro")[0], "mangerò", "not \"mangierò\"");
  });

  test("-iare with a silent i does not double it in the second person either", () => {
    assert.equal(formy("studiare", "pres")[1], "studi", "not \"studii\"");
  });
});

describe("irregular verbs", () => {
  test("the four most common ones have their own forms, not ones derived by rule", () => {
    assert.deepEqual(formy("essere", "pres"), ["sono", "sei", "è", "siamo", "siete", "sono"]);
    assert.deepEqual(formy("avere", "pres"), ["ho", "hai", "ha", "abbiamo", "avete", "hanno"]);
    assert.deepEqual(formy("andare", "pres"), ["vado", "vai", "va", "andiamo", "andate", "vanno"]);
    assert.deepEqual(formy("fare", "pres"), ["faccio", "fai", "fa", "facciamo", "fate", "fanno"]);
  });

  test("the future stem can be its own, not taken from the infinitive", () => {
    assert.equal(formy("essere", "futuro")[0], "sarò");
    assert.equal(formy("avere", "futuro")[0], "avrò");
    assert.equal(formy("andare", "futuro")[0], "andrò");
    assert.equal(formy("fare", "futuro")[0], "farò");
  });

  test("verbs in -urre follow the -ducere pattern, not -ere", () => {
    assert.deepEqual(formy("tradurre", "pres"), ["traduco", "traduci", "traduce", "traduciamo", "traducete", "traducono"]);
    assert.equal(formy("tradurre", "futuro")[0], "tradurrò");
    assert.equal(V.gerund("tradurre"), "traducendo");
  });

  test("an irregular participle wins over the regular one", () => {
    assert.equal(V.participle("fare"), "fatto");
    assert.equal(V.participle("parlare"), "parlato", "the regular one stays regular");
  });
});

describe("compound tenses", () => {
  test("avere for transitives, essere for motion and change of state", () => {
    assert.equal(V.auxOf("mangiare"), "avere");
    assert.equal(V.auxOf("andare"), "essere");
    assert.equal(V.auxOf("svegliarsi"), "essere", "reflexives always take essere");
  });

  test("the participle agrees with the subject only with essere", () => {
    assert.deepEqual(formy("andare", "passPross"),
      ["sono andato", "sei andato", "è andato", "siamo andati", "siete andati", "sono andati"]);
    assert.deepEqual(formy("mangiare", "passPross"),
      ["ho mangiato", "hai mangiato", "ha mangiato", "abbiamo mangiato", "avete mangiato", "hanno mangiato"]);
  });

  test("the feminine changes the participle ending but not the auxiliary", () => {
    assert.deepEqual(formy("andare", "passPross", "f"),
      ["sono andata", "sei andata", "è andata", "siamo andate", "siete andate", "sono andate"]);
    assert.equal(formy("mangiare", "passPross", "f")[0], "ho mangiato", "with avere nothing agrees");
  });

  test("every compound tense takes its own tense of the auxiliary", () => {
    assert.equal(formy("andare", "trapPross")[0], "ero andato");
    assert.equal(formy("andare", "futAnt")[0], "sarò andato");
    assert.equal(formy("andare", "condPass")[0], "sarei andato");
    assert.equal(formy("andare", "congPass")[0], "sia andato");
    assert.equal(formy("andare", "congTrap")[0], "fossi andato");
  });
});

describe("reflexive verbs", () => {
  test("the pronoun stands before the form in the indicative tenses", () => {
    assert.deepEqual(formy("svegliarsi", "pres"),
      ["mi sveglio", "ti svegli", "si sveglia", "ci svegliamo", "vi svegliate", "si svegliano"]);
  });

  test("in a compound tense the pronoun stands before the auxiliary, not the participle", () => {
    assert.equal(formy("svegliarsi", "passPross")[0], "mi sono svegliato");
    assert.equal(formy("svegliarsi", "passPross", "f")[3], "ci siamo svegliate");
  });

  /* The rule is spelled out in the course itself, under "ref:g-imperativo":
     pronouns attach to the tu/noi/voi forms (prendilo, andiamoci,
     ascoltatemi) but stand before the Lei form (lo prenda, mi ascolti).
     The engine used to put the pronoun before the form in every person, so
     the course taught something it contradicted three screens later. */
  test("in the imperative the pronoun attaches to the tu, noi and voi forms", () => {
    assert.deepEqual(formy("alzarsi", "imper"),
      [null, "alzati", "si alzi", "alziamoci", "alzatevi", "si alzino"]);
  });

  test("the same in -ere and -ire, because this is a rule of syntax, not of the pattern", () => {
    assert.deepEqual(formy("mettersi", "imper"),
      [null, "mettiti", "si metta", "mettiamoci", "mettetevi", "si mettano"]);
    assert.deepEqual(formy("vestirsi", "imper"),
      [null, "vestiti", "si vesta", "vestiamoci", "vestitevi", "si vestano"]);
  });

  test("the short tu form loses its apostrophe and doubles the pronoun consonant", () => {
    assert.equal(formy("farsi", "imper")[1], "fatti", "neither \"fa' ti\" nor \"fa'ti\"");
  });

  test("the polite form keeps the pronoun in front", () => {
    const imper = formy("alzarsi", "imper");
    assert.equal(imper[2], "si alzi", "Lei");
    assert.equal(imper[5], "si alzino", "Loro");
  });
});

describe("the imperative without reflexives", () => {
  test("the first person does not exist and is null, not an empty string", () => {
    assert.equal(formy("parlare", "imper")[0], null);
    assert.equal(formy("essere", "imper")[0], null);
  });

  test("the regular forms match the table from the course", () => {
    assert.deepEqual(formy("parlare", "imper"), [null, "parla", "parli", "parliamo", "parlate", "parlino"]);
    assert.deepEqual(formy("credere", "imper"), [null, "credi", "creda", "crediamo", "credete", "credano"]);
    assert.deepEqual(formy("dormire", "imper"), [null, "dormi", "dorma", "dormiamo", "dormite", "dormano"]);
  });

  test("irregular short tu forms stay short", () => {
    assert.equal(formy("andare", "imper")[1], "va'");
    assert.equal(formy("fare", "imper")[1], "fa'");
  });
});

describe("the full table and its metadata", () => {
  test("it describes the verb with what the form alone does not show", () => {
    const meta = V.fullTable("svegliarsi")._meta;
    assert.equal(meta.infinito, "svegliarsi");
    assert.equal(meta.gruppo, "-are");
    assert.equal(meta.ausiliare, "essere");
    assert.equal(meta.participio, "svegliato");
    assert.equal(meta.gerundio, "svegliando");
    assert.equal(meta.riflessivo, true);
    assert.equal(meta.irregolare, false, "reflexive is not the same as irregular");
  });

  test("irregularity is marked where it is", () => {
    assert.equal(V.fullTable("andare")._meta.irregolare, true);
    assert.equal(V.fullTable("parlare")._meta.irregolare, false);
  });

  test("the table has every tense from the TENSES list", () => {
    const tabela = V.fullTable("parlare");
    Array.from(V.TENSES).forEach(tn => {
      assert.ok(Array.isArray(tabela[tn.key]), `tense ${tn.key} is missing`);
      assert.equal(tabela[tn.key].length, 6, `tense ${tn.key} does not have six entries`);
    });
  });
});

describe("inputs outside the contract", () => {
  test("an unknown tense gives null, not an invented table", () => {
    assert.equal(V.conjugate("parlare", "noSuchTense"), null);
  });

  /* The engine does NOT check whether it was given a verb: the view does
     that, with a regex on the infinitive ending (views-conjugator.js). The
     test pins the division of responsibility down, so nobody adds a second
     validation here and starts returning null where exercises expect forms. */
  test("the shape of the infinitive is not checked here", () => {
    assert.deepEqual(formy("xyzare", "pres"), ["xyzo", "xyzi", "xyza", "xyziamo", "xyzate", "xyzano"]);
  });
});

describe("input that is not an infinitive", () => {
  /* The search box and the conjugator accept whatever the student types. A
     word with no infinitive ending must get a table built by the first
     conjugation rule rather than null: an empty screen looks like a failure,
     while a conjugation of "not that verb" is visible at once. */
  test("a word with no -are/-ere/-ire conjugates like the first conjugation", () => {
    const out = formy("blurb", "pres");
    assert.equal(out.length, 6);
    assert.equal(out[0], "blurbo");
  });
});
