/* ============================================================
   The lexicon: rules, not tables.

   Every one of these functions is an answer key for the generator, so a
   mistake here does not look like a mistake — it looks like an exercise in
   which the student "gets it wrong". The forms are checked explicitly, one
   by one.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function lex() {
  return loadEngine({ files: ["assets/js/drills-lex.js"] }).sandbox.Lex;
}

describe("the definite article", () => {
  const przypadki = [
    ["libro", "m", false, "il"],
    ["tavolo", "m", false, "il"],
    ["zaino", "m", false, "lo"],          // z
    ["studente", "m", false, "lo"],       // s + consonant
    ["specchio", "m", false, "lo"],       // sp
    ["stadio", "m", false, "lo"],         // st
    ["gnocco", "m", false, "lo"],         // gn
    ["psicologo", "m", false, "lo"],      // ps
    ["yogurt", "m", false, "lo"],         // y
    ["amico", "m", false, "l'"],          // a vowel
    ["casa", "f", false, "la"],
    ["acqua", "f", false, "l'"],
    ["isola", "f", false, "l'"],
    ["libri", "m", true, "i"],
    ["zaini", "m", true, "gli"],
    ["studenti", "m", true, "gli"],
    ["amici", "m", true, "gli"],
    ["case", "f", true, "le"],
    ["acque", "f", true, "le"]
  ];
  przypadki.forEach(([w, g, pl, oczek]) => {
    test(`${w} → ${oczek}`, () => {
      assert.equal(lex().definite(w, g, pl), oczek);
    });
  });
});

describe("the indefinite article", () => {
  const przypadki = [
    ["libro", "m", "un"], ["zaino", "m", "uno"], ["studente", "m", "uno"],
    ["amico", "m", "un"],                 // the masculine before a vowel is "un", with no apostrophe
    ["casa", "f", "una"], ["acqua", "f", "un'"], ["isola", "f", "un'"]
  ];
  przypadki.forEach(([w, g, oczek]) => {
    test(`${w} → ${oczek}`, () => {
      assert.equal(lex().indefinite(w, g), oczek);
    });
  });
});

describe("liczba mnoga", () => {
  const przypadki = [
    [{ s: "libro", g: "m" }, "libri"],
    [{ s: "casa", g: "f" }, "case"],
    [{ s: "chiave", g: "f" }, "chiavi"],
    [{ s: "macchina", g: "f" }, "macchine"],
    [{ s: "parco", g: "m" }, "parchi"],           // akcent na przedostatniej: twardnieje
    [{ s: "medico", g: "m" }, "medici"],          // proparoksytonon na -ico: NIE „medichi"
    [{ s: "amico", g: "m" }, "amici"],
    [{ s: "albergo", g: "m" }, "alberghi"],
    [{ s: "banca", g: "f" }, "banche"],
    [{ s: "riga", g: "f" }, "righe"],
    [{ s: "orologio", g: "m" }, "orologi"],
    [{ s: "citta", g: "f", p: "citta" }, "citta"]
  ];
  przypadki.forEach(([n, oczek]) => {
    test(`${n.s} → ${oczek}`, () => {
      assert.equal(lex().pluralOf(n), oczek);
    });
  });

  test("the irregulars from the lexicon take precedence over the rule", () => {
    const L = lex();
    const uomo = L.NOUNS.filter(n => n.s === "uomo")[0];
    assert.equal(L.pluralOf(uomo), "uomini");
  });
});

describe("adjective agreement", () => {
  const przypadki = [
    [{ s: "rosso", t: "o" }, "m", false, "rosso"],
    [{ s: "rosso", t: "o" }, "f", false, "rossa"],
    [{ s: "rosso", t: "o" }, "m", true, "rossi"],
    [{ s: "rosso", t: "o" }, "f", true, "rosse"],
    [{ s: "bianco", t: "o" }, "m", true, "bianchi"],
    [{ s: "bianco", t: "o" }, "f", true, "bianche"],
    [{ s: "simpatico", t: "o" }, "m", true, "simpatici"],   // NIE „simpatichi"
    [{ s: "simpatico", t: "o" }, "f", true, "simpatiche"],
    [{ s: "lungo", t: "o" }, "m", true, "lunghi"],
    [{ s: "grande", t: "e" }, "m", false, "grande"],
    [{ s: "grande", t: "e" }, "f", false, "grande"],
    [{ s: "grande", t: "e" }, "m", true, "grandi"],
    [{ s: "grande", t: "e" }, "f", true, "grandi"]
  ];
  przypadki.forEach(([a, g, pl, oczek]) => {
    test(`${a.s} ${g}${pl ? " mn." : ""} → ${oczek}`, () => {
      assert.equal(lex().adjForm(a, g, pl), oczek);
    });
  });
});

describe("the contracted preposition", () => {
  /* The full 5 × 7 table: it is the answer key of the whole generator, so it
     is checked in full rather than on a sample. */
  const TABELA = {
    di: { il: "del", lo: "dello", "l'": "dell'", la: "della", i: "dei", gli: "degli", le: "delle" },
    a: { il: "al", lo: "allo", "l'": "all'", la: "alla", i: "ai", gli: "agli", le: "alle" },
    da: { il: "dal", lo: "dallo", "l'": "dall'", la: "dalla", i: "dai", gli: "dagli", le: "dalle" },
    in: { il: "nel", lo: "nello", "l'": "nell'", la: "nella", i: "nei", gli: "negli", le: "nelle" },
    su: { il: "sul", lo: "sullo", "l'": "sull'", la: "sulla", i: "sui", gli: "sugli", le: "sulle" }
  };

  Object.keys(TABELA).forEach(prep => {
    test(`${prep} + rodzajnik: wszystkie siedem form`, () => {
      const L = lex();
      Object.keys(TABELA[prep]).forEach(art => {
        assert.equal(L.articulate(prep, art), TABELA[prep][art], `${prep} + ${art}`);
      });
    });
  });

  test("con does not contract: it stays separate", () => {
    assert.equal(lex().articulate("con", "il"), "con il");
  });
});

describe("higiena leksykonu", () => {
  test("not one word in the student's language", () => {
    const L = lex();
    const tekst = JSON.stringify([L.NOUNS, L.ADJ, L.VERBS]);
    assert.equal(/[ąęłżźćńśáéíóúñçäöüß]/.test(tekst), false, "the lexicon is Italian only");
  });

  test("every verb has its auxiliary declared", () => {
    lex().VERBS.forEach(v => {
      assert.ok(["avere", "essere", "both"].indexOf(v.aux) >= 0, `${v.inf}: ${v.aux}`);
    });
  });

  test("the set is large enough for the exercises not to repeat", () => {
    const L = lex();
    assert.ok(L.NOUNS.length >= 50, `nouns: ${L.NOUNS.length}`);
    assert.ok(L.ADJ.length >= 20, `adjectives: ${L.ADJ.length}`);
    assert.ok(L.VERBS.length >= 30, `verbs: ${L.VERBS.length}`);
  });
});

/* Found in review: the i+vowel branch of the LO rule was dead, because the
   vowel test came first. There is no such word in the lexicon today, so no
   existing test caught it. */
describe("regressions from the review", () => {
  test("i+vowel takes lo, not l'", () => {
    const L = lex();
    assert.equal(L.definite("iodio", "m", false), "lo");
    assert.equal(L.definite("iugoslavo", "m", false), "lo");
  });

  test("while an ordinary vowel still takes l'", () => {
    const L = lex();
    assert.equal(L.definite("amico", "m", false), "l'");
    assert.equal(L.definite("uomo", "m", false), "l'");
    assert.equal(L.definite("inverno", "m", false), "l'");
    assert.equal(L.definite("esame", "m", false), "l'");
  });

  test("the rest of the LO rule untouched", () => {
    const L = lex();
    [["studente","lo"],["zaino","lo"],["gnocco","lo"],["psicologo","lo"],
     ["yogurt","lo"],["libro","il"],["cane","il"]].forEach(([w, oczek]) => {
      assert.equal(L.definite(w, "m", false), oczek, w);
    });
  });
});

describe("liczba mnoga: wyrazy niezmienne", () => {
  /* The rules end on a vowel; a word with a final accent or ending in a
     consonant has no rule and STAYS. Without that branch the answer key
     would read "cittài" and the student would be marked wrong for a correct
     form. */
  test("wyraz z akcentem na ostatniej sylabie nie zmienia formy", () => {
    assert.equal(lex().pluralOf({ s: "città", g: "f" }), "città");
  });

  test("a loanword ending in a consonant stays too", () => {
    assert.equal(lex().pluralOf({ s: "yogurt", g: "m" }), "yogurt");
  });
});
