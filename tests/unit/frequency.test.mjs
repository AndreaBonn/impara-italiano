/* ============================================================
   Frequency-list coverage - pure functions.

   The lists are built by hand and hold a few entries each: the point is that
   when something breaks it is clear WHICH rule changed, not that the test
   repeats the computation over two thousand forms.

   The thing this test guards above all: an inflected form must count. The
   frequency list is a list of FORMS and the deck is a deck of LEMMAS, so
   without going through the resolver the counter would report gaps exactly
   where the student knows the word - and systematically so.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE, VERBS, LEMMA } from "./_harness.mjs";

function silnik(czytanki) {
  const box = loadEngine({
    files: [...VERBS, ...LEMMA, "assets/js/frequency.js"]
  });
  box.sandbox.READINGS = czytanki || [];
  box.sandbox.Lemma.uzyjSlownika(null);
  box.sandbox.Lemma.odswiez();
  return box.sandbox;
}

/* [form, occurrences] - as in data/core/frequenza.js */
const LISTA = [
  ["che", 100], ["bevo", 50], ["casa", 40], ["libri", 30],
  ["mangiato", 20], ["turisti", 10], ["xyzzy", 5]
];
const TOKENOW = 255;

describe("frequency: coverage of the lemma set", () => {
  test("an empty lemma set gives zero without breaking the count", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, {}, TOKENOW);
    assert.equal(p.znane, 0);
    assert.equal(p.wszystkie, 7);
    assert.equal(p.udzialTokenow, 0);
  });

  test("a literal hit counts together with its frequency", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, { casa: true }, TOKENOW);
    assert.equal(p.znane, 1);
    assert.ok(Math.abs(p.udzialTokenow - 40 / 255) < 1e-9, "the share is 40 out of 255 tokens");
  });

  test("an inflected form counts towards its base lemma", () => {
    const s = silnik();
    /* "bere" in the deck must cover "bevo" on the list, "libro" must cover
       "libri", and "mangiare" must cover the participle "mangiato". */
    const p = s.Frequency.pokrycie(LISTA, { bere: true, libro: true, mangiare: true }, TOKENOW);
    assert.equal(p.znane, 3, "three forms counted through inflection, not through string similarity");
  });

  test("a word outside the set stays uncovered", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie(LISTA, { casa: true }, TOKENOW);
    assert.ok(p.znane < p.wszystkie, "xyzzy has no right to count");
  });

  test("an empty list does not divide by zero", () => {
    const s = silnik();
    const p = s.Frequency.pokrycie([], { casa: true }, 0);
    assert.equal(p.znane, 0);
    assert.equal(p.udzialTokenow, 0);
  });
});

describe("frequency: the nearest gaps", () => {
  test("only the ones the course teaches and the student does not have come out", () => {
    const s = silnik();
    const kurs = { casa: true, libro: true, bere: true };
    const uczen = { bere: true };
    const hasla = Array.from(s.Frequency.brakujace(LISTA, kurs, uczen, 10)).map(b => b.haslo);
    assert.ok(hasla.includes("casa"), "the course knows it, the student does not have it");
    assert.ok(hasla.includes("libro"), "the LEMMA comes out, not the form \"libri\" from the list");
    assert.ok(!hasla.includes("bere"), "the student has bere, so bevo is not a gap");
    assert.ok(!hasla.includes("xyzzy"), "the course does not teach it: suggesting it would be passing the work on");
  });

  test("forms of the same lemma collapse into one row", () => {
    const s = silnik();
    /* The frequency list holds "ho", "ha", "hai" separately: without
       collapsing, the top five gaps are the same word four times. */
    const lista = [["ho", 90], ["ha", 80], ["hai", 70], ["casa", 10]];
    const braki = Array.from(s.Frequency.brakujace(lista, { avere: true, casa: true }, {}, 10));
    const hasla = braki.map(b => b.haslo);
    assert.equal(hasla.filter(h => h === "avere").length, 1, "one row per lemma");
    const avere = braki.filter(b => b.haslo === "avere")[0];
    assert.equal(avere.ile, 240, "the frequency is the sum over the forms");
    assert.equal(avere.ranga, 1, "the rank is the best rank among its forms");
    assert.ok(Array.from(avere.formy).length >= 3, "the forms are kept as context");
  });

  test("function words do not make it onto the clickable list", () => {
    const s = silnik();
    const hasla = Array.from(s.Frequency.brakujace(LISTA, { che: true, casa: true }, {}, 10)).map(b => b.haslo);
    assert.ok(!hasla.includes("che"), "\"che\" is a piece of grammar, not a flashcard");
    assert.ok(hasla.includes("casa"));
  });

  test("the order follows frequency and carries the rank", () => {
    const s = silnik();
    const braki = Array.from(s.Frequency.brakujace(LISTA, { casa: true, libro: true }, {}, 10));
    assert.equal(braki[0].haslo, "casa", "the more frequent one first");
    assert.equal(braki[0].ranga, 3, "the rank is the position on the list, not in the result");
    assert.ok(braki[0].ile > braki[1].ile);
  });

  test("the limit is respected", () => {
    const s = silnik();
    const braki = s.Frequency.brakujace(LISTA, { casa: true, libro: true, mangiare: true }, {}, 2);
    assert.equal(Array.from(braki).length, 2);
  });
});

describe("frequency: where the two sets come from", () => {
  /* The coverage screen compares two sets: what the course teaches and what
     the student has in the deck. Both are built here, and both can quietly
     come out empty - and then the screen says "0% coverage", which looks like
     a result of studying rather than a fault. */
  function zSilnikiem() {
    const box = loadEngine({
      files: [...CORE, ...VERBS, ...LEMMA, "assets/js/frequency.js"]
    });
    box.Core.load();
    box.sandbox.READINGS = [];
    box.sandbox.Lemma.uzyjSlownika(null);
    box.sandbox.Lemma.odswiez();
    return box;
  }

  test("the student's set carries the bare word, because that is what the list holds", () => {
    const box = zSilnikiem();
    box.Core.addCard("il caffè", "kawa", "a1-u01-l1");
    const uczen = box.sandbox.Frequency.slownikUcznia();

    /* The frequency list is a list of bare forms: "caffè", never "il caffè",
       and it keeps its accents. A set built out of the card KEYS meets
       neither - the key is "il caffe" - so the counter used to report zero
       coverage for a deck that was not empty, which reads as a result of
       studying rather than as a fault. The entry goes through the same
       splitter as the course dictionary, so both sets are written the same
       way. */
    assert.ok(uczen["caffè"], "the bare word goes in: the article dropped, the accent kept");
    assert.equal(box.sandbox.Frequency.pokrycie([["caffè", 10]], uczen, 10).znane, 1,
      "and the list finds it");
    assert.equal(box.sandbox.Frequency.pokrycie([["xyzzy", 10]], uczen, 10).znane, 0,
      "while a word nobody has still counts for nothing");
  });

  test("an empty deck gives an empty set, not an exception", () => {
    const box = zSilnikiem();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikUcznia()), []);
  });

  test("the course set comes from the vocabulary of the loaded lessons", () => {
    const box = zSilnikiem();
    box.sandbox.Registry.registerLevel({
      code: "A1", dataFiles: [], units: [{
        id: "u1",
        lessons: [{ id: "l1", vocab: [{ it: "il caffè" }, { it: "la casa" }], exercises: [] }]
      }]
    });
    const kurs = box.sandbox.Frequency.slownikKursu();

    assert.ok(kurs["caffè"], "multi-word phrases go in split into words");
    assert.ok(kurs["casa"]);
    assert.ok(!kurs["xyzzy"]);
  });

  test("a course with no level loaded gives an empty set instead of breaking the screen", () => {
    const box = zSilnikiem();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikKursu()), []);
  });
});

describe("frequency without the lemmatiser", () => {
  test("without Lemma the course set is empty instead of breaking the coverage screen", () => {
    /* lemma.js is loaded by a <script> of its own; a forgotten tag takes the
       whole course dictionary with it. The screen must then show zero coverage
       rather than fall over - the fault shows in the number, not in a blank
       page. */
    const box = loadEngine({ files: [...CORE, "assets/js/frequency.js"] });
    box.Core.load();
    assert.deepEqual(Object.keys(box.sandbox.Frequency.slownikKursu()), []);
  });
});
