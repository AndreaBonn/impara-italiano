/* ============================================================
   The guard on the exam report (assets/js/cils-report.js).

   ADR-009 decided that the two production sections get a DETECTION and never
   a mark: the simulator scores listening and reading, where the criteria give
   a weight per item, and refuses to put a number on writing and speaking,
   which at the real exam are graded by people against a rubric. A simulator
   that says "9/12, you would pass" promises something it never checked, and
   the consequences of that promise are a residence permit.

   Now that a model reads those two sections, the decision has to survive
   something that did not exist when it was taken: prose written by somebody
   else. So the rule is enforced HERE, in code, the way `LlmRules.clamp`
   enforces its own — a model that ignores the instruction, or is swapped for
   another, or is talked into it by the student's own text, still cannot put
   a verdict on the screen.

   WHAT THIS CANNOT DO, and it is written in the file as well: a verdict
   carrying no number and none of the words below ("sei pronto per l'esame")
   passes. The guard shrinks the opening; it does not close it. The sentence
   standing permanently next to the report is what covers the rest.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function raport() {
  return loadEngine({ files: ["assets/js/cils-report.js"] }).sandbox.CilsReport;
}

describe("cils-report: what may not pass", () => {
  test("a mark out of twelve is dropped, the sentence around it survives", () => {
    const out = raport().pulisci(
      "Hai usato bene il passato prossimo. Voto: 9/12. Attento agli articoli."
    );
    assert.ok(out.includes("passato prossimo"), out);
    assert.ok(out.includes("articoli"), out);
    assert.ok(!out.includes("9/12"), out);
  });

  test("a percentage goes with its sentence", () => {
    const out = raport().pulisci("Il testo è chiaro. Direi un 75% di correttezza.");
    assert.ok(out.includes("chiaro"));
    assert.ok(!out.includes("75"));
  });

  test("points are a mark even spelled out", () => {
    const out = raport().pulisci("Ottimo lavoro. Ti darei 8 punti su 12.");
    assert.ok(!out.includes("punti"), out);
    assert.ok(out.includes("Ottimo lavoro"), out);
  });

  test("a mark written the Italian way, out of twelve, is still a mark", () => {
    /* "9/12" was caught from the first day; "9 su 12" was not, and it is the
       likelier of the two — a model writing Italian to an Italian learner
       says it in words. Found by probing the filter by hand, not by a test
       that existed. The denominators are the closed set of this exam: 12 per
       skill, 48 in total. */
    const R = raport();
    for (const zdanie of ["Direi 9 su 12.", "Vale 27 su 48.", "Circa 9 na 12.", "About 9 out of 12."]) {
      const out = R.pulisci("La struttura regge. " + zdanie);
      assert.ok(out.includes("La struttura regge"), out);
      assert.ok(!/\d/.test(out), `a mark survived: ${out}`);
    }
  });

  test("a mark with the number spelled out is caught by the word, not the digit", () => {
    /* "Ti darei otto punti su dodici" has no digit in it at all, so every
       numeric rule misses it. What gives it away is the vocabulary of
       marking, and that is what the closed list is for. */
    const R = raport();
    for (const zdanie of [
      "Ti darei otto punti su dodici.",
      "Punteggio: nove.",
      "Il voto sarebbe alto.",
      "Score: eight.",
      "Ocena byłaby wysoka."
    ]) {
      const out = R.pulisci("Hai citato bene la traccia. " + zdanie);
      assert.ok(out.includes("Hai citato bene"), out);
      assert.equal(out.indexOf(zdanie.slice(0, 6)), -1, `a mark survived: ${out}`);
    }
  });

  test("an ordinary count is not a mark, even next to a number", () => {
    /* The positive half. A filter that ate every "N su M" would also eat
       "hai sbagliato due parole su venti", which is exactly the feedback
       this feature exists to deliver. */
    const R = raport();
    const tekst = "Hai sbagliato due parole su venti, ed entrambe sono articoli.";
    assert.equal(R.pulisci(tekst), tekst);
    const drugi = "Tre frasi su quattro finiscono allo stesso modo.";
    assert.equal(R.pulisci(drugi), drugi);
  });

  test("a decimal point does not cut a mark in half and let the half through", () => {
    /* Splitting on every full stop cuts "75.5%" into "75." and "5%…": the
       second half carries the per cent sign and goes, the first half carries
       the number and stayed. The report then read "Hai ottenuto il 75.",
       which is a score with its unit removed. */
    const R = raport();
    assert.equal(R.pulisci("Hai ottenuto il 75.5% degli item corretti."), "");
    assert.equal(R.pulisci("Hai preso 8.5 punti."), "");
    const ok = "Il testo è lungo 8.5 righe e si legge bene.";
    assert.equal(R.pulisci(ok), ok, "a decimal that is not a mark stays");
  });

  test("the verdict words go, in every language the course speaks", () => {
    const R = raport();
    for (const zdanie of [
      "Saresti promosso senza problemi.",
      "Questo elaborato è sufficiente.",
      "You would pass this exam.",
      "Zdałbyś ten egzamin.",
      "Estarías aprobado.",
      "Tu serais reçu à l'examen.",
      "Du hättest bestanden."
    ]) {
      const out = R.pulisci("La frase utile resta qui. " + zdanie);
      assert.ok(out.includes("La frase utile resta qui"), `dropped too much: ${out}`);
      assert.equal(out.indexOf(zdanie.slice(0, 8)), -1, `verdict survived: ${out}`);
    }
  });

  test("a text that is nothing but a verdict comes back empty", () => {
    /* Empty means the card shows nothing, which is the behaviour of the
       course without a key. Better than a mutilated sentence. */
    assert.equal(raport().pulisci("Promosso. 10/12."), "");
  });
});

describe("cils-report: what must survive", () => {
  test("ordinary feedback passes untouched", () => {
    const tekst = "Hai scritto «ho andato»: con andare si usa essere, quindi «sono andato». " +
      "La formula di chiusura manca del tutto.";
    assert.equal(raport().pulisci(tekst), tekst);
  });

  test("a number that is not a mark stays", () => {
    /* The positive half of the pair: a guard that ate every digit would also
       eat the useful ones, and nobody would notice because the text would
       still read fine. */
    const tekst = "Hai usato il passato 3 volte e sempre correttamente.";
    assert.equal(raport().pulisci(tekst), tekst);
  });

  test("a year and a time of day are not marks either", () => {
    const tekst = "Scrivi «alle 8:30» e «nel 2019»: sono corretti.";
    assert.equal(raport().pulisci(tekst), tekst);
  });
});

describe("cils-report: shape of the answer", () => {
  test("control characters and newlines become spaces", () => {
    const out = raport().pulisci("Prima riga.\nSeconda riga.");
    assert.ok(!out.includes("\n"), out);
    assert.ok(out.includes("Prima riga."), out);
    assert.ok(out.includes("Seconda riga."), out);
  });

  test("a model having an episode cannot push the summary off the screen", () => {
    /* The bound is a LITERAL, not `R.MAX_CHARS`. Read from the module, the
       assertion moves with the constant it is supposed to be guarding: raise
       the ceiling to seven hundred thousand and the test still passes. The
       mutation gate caught exactly that. */
    const out = raport().pulisci("Va bene. ".repeat(500));
    assert.ok(out.length <= 800, `${out.length} characters reached the report`);
    assert.ok(out.length > 0, "and it did not simply throw everything away");
  });

  test("nothing at all is an empty string, never null or undefined", () => {
    const R = raport();
    assert.equal(R.pulisci(null), "");
    assert.equal(R.pulisci(undefined), "");
    assert.equal(R.pulisci(""), "");
  });

  test("it does not throw on anything it might be handed", () => {
    /* It runs while the summary of an hour-long exam is being drawn: an
       exception here costs the student the report they just earned. */
    const R = raport();
    /* Labelled by hand: the last one is an object that throws on being turned
       into a string, so building the message with String() would throw in the
       assertion itself — which is how this test failed the first time, on the
       test rather than on the code. */
    const wejscia = [
      ["a number", 42],
      ["an empty object", {}],
      ["an array", []],
      ["a boolean", true],
      ["an object that refuses to become a string", { toString: null }]
    ];
    for (const [opis, wejscie] of wejscia) {
      assert.doesNotThrow(() => R.pulisci(wejscie), opis);
    }
  });
});
