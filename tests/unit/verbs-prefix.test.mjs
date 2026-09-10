/* ============================================================
   Prefixed verbs inherit the irregularity of their root.

   Found by the lookup gate: "promesso" was not recognised, because the
   conjugator produced "promettuto". That was not a fault of the lookup —
   the conjugation view showed the student the same non-existent form.

   The second half of this test matters more than the first: "mandare" is NOT
   a relative of "andare", even though it ends in it. Without a closed list of
   prefixes, inheritance would produce "mando -> vado".
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, VERBS } from "./_harness.mjs";

function silnik() {
  return loadEngine({ files: VERBS }).sandbox.Verbs;
}

describe("verbs: dziedziczenie po przedrostku", () => {
  const rodzina = [
    ["promettere", "promesso"], ["permettere", "permesso"],
    ["ammettere", "ammesso"], ["smettere", "smesso"],
    ["riscrivere", "riscritto"], ["descrivere", "descritto"],
    ["rileggere", "riletto"], ["comporre", "composto"],
    ["riprendere", "ripreso"], ["ritornare", "ritornato"]
  ];
  for (const [inf, pp] of rodzina) {
    test(`${inf} -> ${pp}`, () => {
      assert.equal(silnik().participle(inf), pp);
    });
  }

  test("the personal forms follow the root too", () => {
    const V = silnik();
    assert.deepEqual(Array.from(V.conjugate("promettere", "pres")),
      ["prometto", "prometti", "promette", "promettiamo", "promettete", "promettono"]);
    assert.equal(V.conjugate("riscrivere", "remoto")[0], "riscrissi");
  });
});

describe("verbs: a similar ending is not a relationship", () => {
  const obce = [
    ["mandare", "mandato"],   // it ends in "andare", but "m" is not a prefix
    ["credere", "creduto"],
    ["cadere", "caduto"],
    ["vendere", "venduto"],
    ["chiedere", "chiesto"]   // nieregularny sam z siebie, nie przez przedrostek
  ];
  for (const [inf, pp] of obce) {
    test(`${inf} zostaje przy ${pp}`, () => {
      assert.equal(silnik().participle(inf), pp);
    });
  }

  test("mandare conjugates regularly, not like andare", () => {
    const formy = Array.from(silnik().conjugate("mandare", "pres"));
    assert.deepEqual(formy, ["mando", "mandi", "manda", "mandiamo", "mandate", "mandano"]);
    assert.ok(!formy.join(" ").includes("vad"), "no stem from andare at all");
  });
});

/* ============================================================
   Irregular participles.

   Measured before the fix: out of 45 common verbs with an irregular
   participle the conjugator produced 25 NON-EXISTENT forms. The participle
   enters six of the fourteen tenses, so a single gap broke six rows of the
   conjugation table and every exercise on a compound tense.

   This test is a list, because that is what this defect looks like: not one
   rule but missing entries, and every further gap has to report itself here
   by name.
   ============================================================ */
describe("verbs: irregular participles", () => {
  const PARY = [
    ["ridere", "riso"], ["succedere", "successo"], ["accendere", "acceso"],
    ["dividere", "diviso"], ["coprire", "coperto"], ["scoprire", "scoperto"],
    ["crescere", "cresciuto"], ["piangere", "pianto"], ["spendere", "speso"],
    ["scendere", "sceso"], ["rendere", "reso"], ["spingere", "spinto"],
    ["giungere", "giunto"], ["togliere", "tolto"], ["cogliere", "colto"],
    ["raccogliere", "raccolto"], ["valere", "valso"], ["parere", "parso"],
    ["correggere", "corretto"], ["proteggere", "protetto"],
    ["distruggere", "distrutto"], ["friggere", "fritto"], ["cuocere", "cotto"],
    ["rompere", "rotto"], ["muovere", "mosso"], ["tacere", "taciuto"]
  ];
  for (const [inf, pp] of PARY) {
    test(`${inf} -> ${pp}`, () => {
      assert.equal(silnik().participle(inf), pp);
    });
  }

  test("the participle enters the compound tense, it does not stand next to it", () => {
    const V = silnik();
    assert.deepEqual(Array.from(V.conjugate("rompere", "passPross")),
      ["ho rotto", "hai rotto", "ha rotto", "abbiamo rotto", "avete rotto", "hanno rotto"]);
  });

  test("a prefix inherits a new participle with no entry of its own", () => {
    const V = silnik();
    assert.equal(V.participle("sorridere"), "sorriso");
    assert.equal(V.participle("riscoprire"), "riscoperto");
  });

  test("the regular ones stay regular", () => {
    const V = silnik();
    assert.equal(V.participle("parlare"), "parlato");
    assert.equal(V.participle("credere"), "creduto");
    assert.equal(V.participle("dormire"), "dormito");
  });
});

describe("splitting off a prefix is spelling, not etymology", () => {
  /* The lookup coverage gate could not recognise "restano" from a reading.
     The reason: "restare" looked like re + stare, so it got the "stare"
     conjugation and produced "restanno", a word that does not exist. This
     test guards both sides: that the exception is an exception, and that
     inheritance still works for the real prefixed pairs. */
  test("restare conjugates regularly, not like stare", () => {
    const V = silnik();
    assert.deepEqual(Array.from(V.conjugate("restare", "pres")),
      ["resto", "resti", "resta", "restiamo", "restate", "restano"]);
    assert.equal(V.participle("restare"), "restato");
  });

  test("ottenere dziedziczy po tenere mimo zasymilowanego przedrostka", () => {
    const V = silnik();
    assert.deepEqual(Array.from(V.conjugate("ottenere", "pres")),
      ["ottengo", "ottieni", "ottiene", "otteniamo", "ottenete", "ottengono"]);
    assert.equal(V.participle("mantenere"), "mantenuto");
  });

  test("stare nadal jest nieregularne", () => {
    const V = silnik();
    assert.deepEqual(Array.from(V.conjugate("stare", "pres")),
      ["sto", "stai", "sta", "stiamo", "state", "stanno"]);
  });
});
