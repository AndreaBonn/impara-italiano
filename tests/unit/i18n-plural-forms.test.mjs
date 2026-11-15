/* ============================================================
   Counted interface strings in Polish and Spanish.

   A fixed string with a number placeholder ("za {n} dni") is wrong at one
   specific number ("za 1 dni"). Each counted key must be a plural-form object,
   picked by Intl.PluralRules, so it renders the right category at 1, 2, 5, 22
   and 25.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

function engine(lang) {
  const box = loadEngine({
    files: [...CORE, "assets/js/i18n.js", "data/i18n/ui-pl.js", "data/i18n/ui-es.js"]
  });
  box.Core.load();
  box.sandbox.I18n.set(lang);
  return box.sandbox.I18n;
}

const PL_CASES = [
  ["lex.inDays", ["za 1 dzień", "za 2 dni", "za 5 dni", "za 22 dni", "za 25 dni"]],
  ["prog.answers", ["1 odpowiedź", "2 odpowiedzi", "5 odpowiedzi", "22 odpowiedzi", "25 odpowiedzi"]],
  ["set.sentences", ["1 zdanie", "2 zdania", "5 zdań", "22 zdania", "25 zdań"]],
  ["anki.exported", ["Zapisano 1 fiszkę.", "Zapisano 2 fiszki.", "Zapisano 5 fiszek.", "Zapisano 22 fiszki.", "Zapisano 25 fiszek."]],
  ["anki.imported", ["Wczytano 1 fiszkę.", "Wczytano 2 fiszki.", "Wczytano 5 fiszek.", "Wczytano 22 fiszki.", "Wczytano 25 fiszek."]],
  ["write.saved", ["zapisane, 1 słowo", "zapisane, 2 słowa", "zapisane, 5 słów", "zapisane, 22 słowa", "zapisane, 25 słów"]]
];
const NUMBERS = [1, 2, 5, 22, 25];

describe("Polish counted strings", () => {
  for (const [key, expected] of PL_CASES) {
    test(`${key} takes the right form at 1, 2, 5, 22, 25`, () => {
      const I18n = engine("pl");
      assert.deepEqual(NUMBERS.map(n => I18n.t(key, { n })), expected);
    });
  }

  test("write.summary does not decline the word count: it is number-neutral", () => {
    const I18n = engine("pl");
    for (const words of NUMBERS) {
      const s = I18n.t("write.summary", { found: 2, total: 3, words, min: 40 });
      assert.match(s, new RegExp(`Liczba słów: ${words}\\b`));
      assert.doesNotMatch(s, /\{\w+\}/, "every placeholder is filled");
    }
  });
});

describe("Spanish counted strings", () => {
  test("srs.allResting is singular at 1 and plural at 2 and 5", () => {
    const I18n = engine("es");
    assert.match(I18n.t("srs.allResting", { n: 1 }), /^Tu única tarjeta está descansando\./);
    assert.match(I18n.t("srs.allResting", { n: 2 }), /^Las 2 tarjetas están descansando\./);
    assert.match(I18n.t("srs.allResting", { n: 5 }), /^Las 5 tarjetas están descansando\./);
  });
});
