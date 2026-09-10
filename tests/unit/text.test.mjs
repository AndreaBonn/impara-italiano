/* ============================================================
   Text comparison (assets/js/text.js).

   These functions decide whether the student's answer counts as correct. A
   mistake here overturns nothing on screen: the course simply starts
   rejecting correct sentences or accepting wrong ones, and the only symptom
   is a student who stops trusting the marking.

   Three invariants that have to be read together with the code, because not
   one of them is visible from a function signature:
   - fold() preserves the LENGTH (search.js slices the original by indexes
     computed on the folded text),
   - norm() collapses whitespace and therefore does NOT preserve the length,
   - similarity() always computes without accents, including when checkOpen
     compares with them — hence "wrong, but almost" on an accent alone.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

const T = loadEngine({ files: ["assets/js/text.js"] }).sandbox.Txt;

describe("detypo", () => {
  test("an apostrophe from a phone keyboard becomes a typewriter one", () => {
    assert.equal(T.detypo("l’autore"), "l'autore");
  });

  test("all four apostrophe variants collapse into one", () => {
    assert.equal(T.detypo("a’b‘c`d´e"), "a'b'c'd'e");
  });

  test("typographic quotation marks, including the Polish opening one, collapse into the straight one", () => {
    assert.equal(T.detypo("„cytat” “inny”"), '"cytat" "inny"');
  });

  test("the swap is character for character, so the length stays the same", () => {
    const przed = "„l’autore” ‘x’";
    assert.equal(T.detypo(przed).length, przed.length);
  });

  test("no input yields an empty string, not an exception", () => {
    assert.equal(T.detypo(null), "");
    assert.equal(T.detypo(undefined), "");
    assert.equal(T.detypo(""), "");
  });

  test("a number goes through as a string rather than blowing up on replace", () => {
    assert.equal(T.detypo(42), "42");
  });
});

describe("fold", () => {
  test("it removes the accents and the letter case", () => {
    assert.equal(T.fold("Perché È Così"), "perche e cosi");
  });

  test("ujednolica apostrof, tak jak detypo", () => {
    assert.equal(T.fold("L’Autore"), "l'autore");
  });

  test("it does NOT collapse whitespace: search.js slices the original by these indexes", () => {
    assert.equal(T.fold("  due   spazi  "), "  due   spazi  ");
  });

  test("the length of the result equals the length of the input for every accent", () => {
    ["caffè", "città", "perché", "così", "più", "à á è é ì í ò ó ù ú"].forEach(s => {
      assert.equal(T.fold(s).length, s.length, `zmiana długości na „${s}”`);
    });
  });

  test("letters outside the Italian alphabet are left untouched", () => {
    assert.equal(T.fold("ñ ç ł"), "ñ ç ł");
  });
});

describe("norm", () => {
  test("it collapses whitespace and trims the edges", () => {
    assert.equal(T.norm("  io   mangio  "), "io mangio");
  });

  test("punctuation turns into a space rather than vanishing without trace", () => {
    assert.equal(T.norm("io,mangio"), "io mangio");
    assert.equal(T.norm("Sì! Certo… (davvero?)"), "si certo davvero");
  });

  test("the spaces around an apostrophe are pulled together: \"l ' autore\" is \"l'autore\"", () => {
    assert.equal(T.norm("l ' autore"), "l'autore");
    assert.equal(T.norm("l'autore"), "l'autore");
  });

  test("by default it removes the accents", () => {
    assert.equal(T.norm("Perché"), "perche");
  });

  test("keepAccents zostawia je na miejscu", () => {
    assert.equal(T.norm("Perché sì", { keepAccents: true }), "perché sì");
  });

  test("an empty string and a lone space give an empty result", () => {
    assert.equal(T.norm(""), "");
    assert.equal(T.norm("   "), "");
    assert.equal(T.norm(null), "");
  });
});

describe("levenshtein", () => {
  test("the same string has a distance of zero", () => {
    assert.equal(T.levenshtein("parlare", "parlare"), 0);
  });

  test("klasyczny przypadek kitten → sitting to trzy operacje", () => {
    assert.equal(T.levenshtein("kitten", "sitting"), 3);
  });

  test("against an empty string the distance is the length of the other one, from both sides", () => {
    assert.equal(T.levenshtein("", "abc"), 3);
    assert.equal(T.levenshtein("abc", ""), 3);
    assert.equal(T.levenshtein("", ""), 0);
  });

  test("jest symetryczna", () => {
    assert.equal(T.levenshtein("mangio", "mangi"), T.levenshtein("mangi", "mangio"));
  });

  test("one letter of difference is one, not zero", () => {
    assert.equal(T.levenshtein("mangio", "mangia"), 1);
  });
});

describe("similarity", () => {
  test("identical strings give 1", () => {
    assert.equal(T.similarity("parlare", "parlare"), 1);
  });

  test("two empty strings give 1 rather than a division by zero", () => {
    assert.equal(T.similarity("", ""), 1);
    assert.ok(Number.isFinite(T.similarity("", "abc")));
  });

  test("nothing in common gives 0, not a negative number", () => {
    assert.equal(T.similarity("xyz", "abcdefgh"), 0);
  });

  test("a typo gives a high result, but not equal to 1", () => {
    const s = T.similarity("parlare", "parlere");
    assert.ok(s > 0.8 && s < 1, `oczekiwane 0.8 < s < 1, było ${s}`);
  });

  test("a difference on the accent alone disappears, because the comparison goes through norm()", () => {
    assert.equal(T.similarity("perché", "perche"), 1);
  });

  test("the result never leaves the 0..1 range", () => {
    [["", "a"], ["a", ""], ["abc", "xyz"], ["ciao", "ciao ciao ciao"]].forEach(([a, b]) => {
      const s = T.similarity(a, b);
      assert.ok(s >= 0 && s <= 1, `poza przedziałem: ${a}/${b} = ${s}`);
    });
  });
});

describe("checkOpen", () => {
  test("a correct answer is right and is not \"almost\"", () => {
    const r = T.checkOpen("io mangio", ["io mangio"]);
    assert.equal(r.ok, true);
    assert.equal(r.near, false);
    assert.equal(r.sim, 1);
  });

  test("hitting any one of the variants is enough", () => {
    assert.equal(T.checkOpen("tu mangi", ["io mangio", "tu mangi"]).ok, true);
  });

  test("a sloppy answer that is right in substance passes", () => {
    assert.equal(T.checkOpen("  IO   MANGIO! ", ["io mangio"]).ok, true);
  });

  test("a typo is not right, but it is \"almost\" and it points at the model", () => {
    const r = T.checkOpen("io mangiu", ["io mangio"]);
    assert.equal(r.ok, false);
    assert.equal(r.near, true);
    assert.equal(r.best, "io mangio");
  });

  test("a completely different answer is neither right nor \"almost\"", () => {
    const r = T.checkOpen("xyz", ["io mangio", "tu mangi"]);
    assert.equal(r.ok, false);
    assert.equal(r.near, false);
    assert.equal(r.sim, 0);
  });

  /* Without that threshold "ho" against "io" comes out at 0.5 similarity on
     two letters and the course would encourage the student that they were
     close, on a pure guess. */
  test("a string of up to two characters is never \"almost\"", () => {
    assert.equal(T.checkOpen("ho", ["io"]).near, false);
  });

  test("a single variant can be given without an array", () => {
    assert.equal(T.checkOpen("ciao", "ciao").ok, true);
  });

  test("without strict mode a missing accent passes", () => {
    assert.equal(T.checkOpen("perche", ["perché"], false).ok, true);
  });

  test("in strict mode a missing accent is an error, but reported as \"almost\"", () => {
    const r = T.checkOpen("perche", ["perché"], true);
    assert.equal(r.ok, false, "akcent ma znaczenie");
    assert.equal(r.near, true, "the student should see that it is a detail");
  });

  test("in strict mode a correct accent still passes", () => {
    assert.equal(T.checkOpen("perché", ["perché"], true).ok, true);
  });

  test("an empty answer does not pass, but it returns the model to be shown", () => {
    const r = T.checkOpen("", ["io mangio"]);
    assert.equal(r.ok, false);
    assert.equal(r.best, "io mangio");
  });
});

describe("esc", () => {
  test("it closes all five characters that can break out of a tag", () => {
    assert.equal(T.esc(`<b>"a" & 'b'</b>`), "&lt;b&gt;&quot;a&quot; &amp; &#39;b&#39;&lt;/b&gt;");
  });

  test("the ampersand goes first, so entities are not double-encoded over and over", () => {
    assert.equal(T.esc("&lt;"), "&amp;lt;");
  });

  test("ordinary text passes through unchanged", () => {
    assert.equal(T.esc("caffè macchiato"), "caffè macchiato");
  });

  test("no input yields an empty string", () => {
    assert.equal(T.esc(null), "");
    assert.equal(T.esc(undefined), "");
  });
});

describe("wystawienie w Core", () => {
  /* Splitting text.js out was meant to leave untouched every one of the
     twenty modules calling Core.norm and Core.esc. This is that condition,
     checked on the identity of the functions and not on a similar result. */
  test("Core returns EXACTLY these functions, not copies of its own", () => {
    const Core = loadEngine({ files: CORE }).sandbox.Core;
    ["norm", "fold", "stripAccents", "levenshtein", "similarity", "checkOpen", "esc"]
      .forEach(nazwa => {
        assert.equal(typeof Core[nazwa], "function", `Core.${nazwa} zniknęło`);
        assert.equal(Core[nazwa].toString(), T[nazwa].toString(), `Core.${nazwa} to inna funkcja niż Txt.${nazwa}`);
      });
  });
});
