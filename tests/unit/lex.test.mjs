/* ============================================================
   Leksykon: reguły, nie tabele.

   Każda z tych funkcji jest kluczem odpowiedzi dla generatora, więc
   błąd tutaj nie wygląda na błąd — wygląda na ćwiczenie, w którym
   uczeń „się myli". Formy sprawdzane wprost, po jednej.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function lex() {
  return loadEngine({ files: ["assets/js/drills-lex.js"] }).sandbox.Lex;
}

describe("rodzajnik określony", () => {
  const przypadki = [
    ["libro", "m", false, "il"],
    ["tavolo", "m", false, "il"],
    ["zaino", "m", false, "lo"],          // z
    ["studente", "m", false, "lo"],       // s + spółgłoska
    ["specchio", "m", false, "lo"],       // sp
    ["stadio", "m", false, "lo"],         // st
    ["gnocco", "m", false, "lo"],         // gn
    ["psicologo", "m", false, "lo"],      // ps
    ["yogurt", "m", false, "lo"],         // y
    ["amico", "m", false, "l'"],          // samogłoska
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

describe("rodzajnik nieokreślony", () => {
  const przypadki = [
    ["libro", "m", "un"], ["zaino", "m", "uno"], ["studente", "m", "uno"],
    ["amico", "m", "un"],                 // męski przed samogłoską to „un", bez apostrofu
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

  test("nieregularne z leksykonu mają pierwszeństwo przed regułą", () => {
    const L = lex();
    const uomo = L.NOUNS.filter(n => n.s === "uomo")[0];
    assert.equal(L.pluralOf(uomo), "uomini");
  });
});

describe("zgodność przymiotnika", () => {
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

describe("przyimek ściągnięty", () => {
  /* Pełna tablica 5 × 7: to jest klucz odpowiedzi całego generatora,
     więc sprawdzana jest w całości, a nie na próbce. */
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

  test("con nie ściąga się: zostaje osobno", () => {
    assert.equal(lex().articulate("con", "il"), "con il");
  });
});

describe("higiena leksykonu", () => {
  test("ani jednego słowa w języku ucznia", () => {
    const L = lex();
    const tekst = JSON.stringify([L.NOUNS, L.ADJ, L.VERBS]);
    assert.equal(/[ąęłżźćńśáéíóúñçäöüß]/.test(tekst), false, "leksykon jest wyłącznie włoski");
  });

  test("każdy czasownik ma zadeklarowane posiłkowe", () => {
    lex().VERBS.forEach(v => {
      assert.ok(["avere", "essere", "both"].indexOf(v.aux) >= 0, `${v.inf}: ${v.aux}`);
    });
  });

  test("zbiór jest dość duży, żeby ćwiczenia się nie powtarzały", () => {
    const L = lex();
    assert.ok(L.NOUNS.length >= 50, `rzeczowników: ${L.NOUNS.length}`);
    assert.ok(L.ADJ.length >= 20, `przymiotników: ${L.ADJ.length}`);
    assert.ok(L.VERBS.length >= 30, `czasowników: ${L.VERBS.length}`);
  });
});
