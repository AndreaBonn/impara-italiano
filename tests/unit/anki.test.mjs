/* ============================================================
   anki.js — serialising and parsing a deck.

   The `scripts/check_anki.py` gate checks whether the file goes into a real
   Anki. Here we check what that one cannot see: what we do with an INCOMING
   file, because it is the only place where the student hands the course data
   from outside.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function anki() {
  return loadEngine({ files: ["assets/js/anki.js"] }).sandbox.Anki;
}

/** There and back: what went out must come back identical. */
function obieg(A, karty) {
  return Array.from(A.fromTsv(A.toTsv(karty)).karty);
}

describe("anki: the export survives content that breaks this format", () => {
  const TRUDNE = [
    { it: "un caffè", tr: "kawa", tag: "a1" },
    { it: "l'acqua", tr: "woda", tag: "a1" },
    { it: "sì, però", tr: "tak, ale", tag: "a1" },
    { it: 'dice "no"', tr: "says \"no\"", tag: "b1" },
    { it: "riga uno\nriga due", tr: "dwie linie", tag: "test" },
    { it: "con\ttabulator", tr: "a separator inside the content", tag: "test" }
  ];

  for (const k of TRUDNE) {
    test(`obieg zachowuje ${JSON.stringify(k.it)}`, () => {
      const A = anki();
      const wynik = obieg(A, [k]);
      assert.equal(wynik.length, 1);
      assert.equal(wynik[0].it, k.it);
      assert.equal(wynik[0].tr, k.tr);
    });
  }

  test("the header carries the directives Anki maps the columns by", () => {
    const tsv = anki().toTsv([{ it: "casa", tr: "house", tag: "a1" }]);
    /* The column names have to be FIELD names, not Italian labels: with
       "Italiano/Traduzione" the import goes through and leaves Back empty. */
    assert.ok(tsv.includes("#columns:Front\tBack\tTags"));
    assert.ok(tsv.includes("#separator:tab"));
    assert.ok(tsv.includes("#html:false"));
    assert.ok(tsv.includes("#tags column:3"));
  });
});

describe("anki: a formula prefix does not reach the spreadsheet", () => {
  for (const zly of ["=SOMMA(A1)", "+39 06", "-cento", "@casa"]) {
    test(`${JSON.stringify(zly)} wychodzi z apostrofem i wraca bez niego`, () => {
      const A = anki();
      const tsv = A.toTsv([{ it: zly, tr: "x", tag: "" }]);
      const wiersz = tsv.split("\n").filter(l => l && l[0] !== "#")[0];
      assert.ok(wiersz.startsWith("'") || wiersz.startsWith('"\''),
        `the field must be neutralised, it is: ${wiersz}`);
      assert.equal(obieg(A, [{ it: zly, tr: "x", tag: "" }])[0].it, zly,
        "on the way back the apostrophe comes off: it is our ornament, not the student's content");
    });
  }

  test("an apostrophe in an ordinary word is not removed", () => {
    const A = anki();
    assert.equal(obieg(A, [{ it: "'ndrangheta", tr: "x", tag: "" }])[0].it, "'ndrangheta");
  });
});

describe("anki: a file from outside is treated as hostile", () => {
  test("an inconsistent number of columns is rejected outright", () => {
    const A = anki();
    const w = A.fromTsv("a\tb\tc\nd\te\nf\tg\th");
    assert.equal(w.karty.length, 0, "nic nie wchodzi do talii");
    assert.equal(w.blad, "anki.errRagged", "the error carries a string KEY, not a ready-made sentence");
  });

  test("zbyt wiele wierszy odrzucamy przed parsowaniem", () => {
    const A = anki();
    const duzy = Array(A.MAX_WIERSZY + 10).fill("a\tb\tc").join("\n");
    const w = A.fromTsv(duzy);
    assert.equal(w.blad, "anki.errTooManyRows");
    assert.equal(w.karty.length, 0);
  });

  test("directives and empty rows do not become cards", () => {
    const A = anki();
    const w = A.fromTsv("#separator:tab\n#html:false\n\ncasa\tdom\ta1\n\n");
    assert.equal(w.karty.length, 1);
    assert.equal(w.karty[0].it, "casa");
  });

  test("a row with no Italian is skipped, it does not break the import", () => {
    const A = anki();
    const w = A.fromTsv("casa\tdom\ta1\n\tsierota\tx\ncane\tpies\ta1");
    assert.equal(w.karty.length, 2);
    assert.equal(w.pominiete, 1);
  });

  test("an unclosed quotation mark rejects the WHOLE file", () => {
    const A = anki();
    const w = A.fromTsv('casa\tdom\ta1\n"urwany\tx\ty\ncane\tpies\ta1');
    /* The first version of this test wanted "skip that row, keep reading".
       With a correct RFC 4180 parser that is impossible: an unpaired
       quotation mark swallows the rest of the file and there is no guessing
       where the field was meant to end. Gluing the rest into one field would
       be worse than refusing. */
    assert.equal(w.karty.length, 0);
    assert.equal(w.blad, "anki.errUnterminated");
  });

  test("hostile content stays a string, not markup", () => {
    const A = anki();
    const zly = '<img src=x onerror=alert(1)>';
    const w = A.fromTsv(`${zly}\t${zly}\tx`);
    assert.equal(w.karty[0].it, zly, "the parser interprets nothing and sanitises nothing");
  });
});
