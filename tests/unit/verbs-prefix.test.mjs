/* ============================================================
   Czasowniki z przedrostkiem dziedziczą nieregularność rdzenia.

   Znalezione przez bramkę lookupu: „promesso" nie było rozpoznawane,
   bo koniugator produkował „promettuto". To nie była usterka lookupu —
   widok odmiany pokazywał uczniowi tę samą nieistniejącą formę.

   Druga połowa testu jest ważniejsza od pierwszej: „mandare" NIE jest
   krewnym „andare", choć się na nie kończy. Bez zamkniętej listy
   przedrostków dziedziczenie wyprodukowałoby „mando → vado".
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function silnik() {
  return loadEngine({ files: ["assets/js/verbs.js"] }).sandbox.Verbs;
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

  test("formy osobowe też idą za rdzeniem", () => {
    const V = silnik();
    assert.deepEqual(Array.from(V.conjugate("promettere", "pres")),
      ["prometto", "prometti", "promette", "promettiamo", "promettete", "promettono"]);
    assert.equal(V.conjugate("riscrivere", "remoto")[0], "riscrissi");
  });
});

describe("verbs: podobieństwo końcówki to nie pokrewieństwo", () => {
  const obce = [
    ["mandare", "mandato"],   // kończy się na „andare", ale „m" nie jest przedrostkiem
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

  test("mandare odmienia się regularnie, a nie jak andare", () => {
    const formy = Array.from(silnik().conjugate("mandare", "pres"));
    assert.deepEqual(formy, ["mando", "mandi", "manda", "mandiamo", "mandate", "mandano"]);
    assert.ok(!formy.join(" ").includes("vad"), "żadnego tematu od andare");
  });
});
