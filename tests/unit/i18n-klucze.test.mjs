/* ============================================================
   Every literal key the engine asks for exists in the dictionaries.

   WHY THIS EXISTS. `I18n.t` falls back to returning the key itself when it
   does not know it, which is the right behaviour at runtime — a screen with
   one odd-looking label beats a screen that throws. The cost is that a
   missing key is INVISIBLE to every gate the project has: the code runs,
   the tests pass, `parity.mjs` compares the languages against each other and
   is happy because the key is missing from all five equally.

   It is not hypothetical. `cils.again` and `cils.backToList` were used by
   the exam report and existed nowhere, so every attempt at the simulation
   ended with two buttons reading "cils.again" and "cils.backToList". That
   shipped, and it was found by LOOKING at the screen, which is not a method.

   WHAT IS CHECKED AND WHAT IS NOT. Only keys that are complete as written —
   `t("cils.again")`. Computed ones (`t("cils.sec." + sez.id)`, `t(powod)`)
   are invisible here and cannot be otherwise: the key does not exist until
   it runs. That is a declared hole, and the DOM suite is what walks those
   screens.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readdirSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const LANGS = ["pl", "en", "es", "fr", "de"];

/** The dictionary of one language, loaded the way the page loads it. */
function slownik(lang) {
  const ctx = { console };
  ctx.window = ctx;
  let out = {};
  ctx.LINGUAI = { addUI: (_l, obj) => { out = obj; } };
  vm.createContext(ctx);
  vm.runInContext(readFileSync(join(ROOT, "data", "i18n", `ui-${lang}.js`), "utf8"), ctx);
  return out;
}

/**
 * Literal keys asked for in one engine file.
 *
 * Both spellings the course uses: `t("x")` inside the views and `I18n.t("x")`
 * where the helper is not in scope.
 *
 * The closing quote HAS TO be followed by `)` or `,`, and that one condition
 * is what makes the scan usable. Without it `t("cils.sec." + sez.id)` yields
 * the prefix `cils.sec.` and `t("ref:" + id)` yields `ref`, neither of which
 * is a key anybody defined — five files came back "broken" on the first run
 * for exactly that reason. Requiring the literal to END the argument leaves
 * only keys that are complete as written, which are the only ones whose
 * absence can be judged without running the code.
 */
function klucze(src) {
  const out = new Set();
  const re = /(?:\bI18n\.t|\bt)\(\s*"([a-zA-Z0-9_.:-]+)"\s*[),]/g;
  let m;
  while ((m = re.exec(src)) !== null) out.add(m[1]);
  return out;
}

describe("i18n: no key is asked for and missing", () => {
  const pl = slownik("pl");
  const pliki = readdirSync(join(ROOT, "assets", "js")).filter((f) => f.endsWith(".js")).sort();

  test("the engine asks for keys at all, so this test has something to do", () => {
    /* The positive half: a regex that stopped matching would make every
       assertion below pass on an empty set. */
    const wszystkie = pliki.reduce((n, f) =>
      n + klucze(readFileSync(join(ROOT, "assets", "js", f), "utf8")).size, 0);
    assert.ok(wszystkie > 200, `only ${wszystkie} literal keys found — the scan is broken`);
  });

  for (const plik of pliki) {
    test(`${plik}`, () => {
      const brakujace = [...klucze(readFileSync(join(ROOT, "assets", "js", plik), "utf8"))]
        .filter((k) => !Object.prototype.hasOwnProperty.call(pl, k));
      assert.deepEqual(brakujace, [], `${plik} asks for keys nobody defined: ${brakujace.join(", ")}`);
    });
  }

  test("the keys in the markup exist too", () => {
    /* index.html asks for keys through attributes, not through `t()`: the
       rail, the title, every aria-label. They are read at runtime by
       i18n.js, they fail exactly as silently as the ones in the code, and
       the scan above cannot see them. Three attributes, because the page
       uses three: the text, the label and the meta content. */
    const strony = ["index.html", "404.html"];
    const re = /data-i18n(?:-label|-content)?="([a-zA-Z0-9_.:-]+)"/g;
    let znalezione = 0;
    for (const plik of strony) {
      const src = readFileSync(join(ROOT, plik), "utf8");
      const brak = [];
      let m;
      while ((m = re.exec(src)) !== null) {
        znalezione++;
        if (!Object.prototype.hasOwnProperty.call(pl, m[1])) brak.push(m[1]);
      }
      assert.deepEqual(brak, [], `${plik} asks for keys nobody defined: ${brak.join(", ")}`);
    }
    /* 404.html deliberately carries no key at all — it has no script to
       resolve one — so the count comes from index.html, and a zero here
       would mean the attribute scan stopped matching. */
    assert.ok(znalezione > 20, `only ${znalezione} markup keys found — the scan is broken`);
  });

  test("every conversation scene has a title in every language", () => {
    /* `t("chat.sc." + s.id)` is a computed key, so the scan above is blind to
       it by construction. The list of ids is right there in the data,
       though, so the check is worth making explicitly: a scene added without
       its title would show up on screen as the literal string
       "chat.sc.whatever", which is how cils.again shipped. */
    const ctx = { console };
    ctx.window = ctx;
    vm.createContext(ctx);
    vm.runInContext(readFileSync(join(ROOT, "data", "core", "chat-scenarios.js"), "utf8"), ctx);
    /* Copied into this realm: node:vm gives the sandbox its own
       Array.prototype, and deepEqual compares prototypes — an empty list
       from there does not equal an empty list from here. */
    const sceny = Array.from(ctx.CHAT_SCENARIOS || []);
    assert.ok(sceny.length > 0, "no scenes were loaded, so nothing is checked");

    for (const lang of LANGS) {
      const dict = slownik(lang);
      const brak = sceny.map((s) => "chat.sc." + s.id)
        .filter((k) => !Object.prototype.hasOwnProperty.call(dict, k));
      assert.deepEqual(brak, [], `ui-${lang}.js has no title for: ${brak.join(", ")}`);
    }
  });

  test("the other four languages define what Polish defines", () => {
    /* parity.mjs compares the COURSE overlays; the interface dictionaries
       are a different set of files and had no such check. */
    const klucze_pl = Object.keys(pl);
    for (const lang of LANGS.slice(1)) {
      const inny = slownik(lang);
      const brak = klucze_pl.filter((k) => !Object.prototype.hasOwnProperty.call(inny, k));
      assert.deepEqual(brak, [], `ui-${lang}.js is missing: ${brak.slice(0, 5).join(", ")}`);
    }
  });
});
