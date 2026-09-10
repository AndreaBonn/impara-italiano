/* ============================================================
   eslint.config.js — a gate on correctness, not on style.

   The repository has four kinds of file and each plays by different rules,
   so one shared configuration would report as errors exactly the things the
   project stands on:

   - assets/js/**  classic browser scripts. The modules connect through
                   globals (`global.Views = Views`), so without listing them
                   `no-undef` would light up on every one of them.
   - sw.js         the service worker: it has `self` and `caches`, it has no
                   `window`.
   - scripts/**    Node tools, real ES modules.
   - tests/dom/**  Playwright's CommonJS, but the body of `page.evaluate`
                   runs in the browser, so the course globals have to be
                   visible here exactly as in assets/js.

   There are NO style rules. The formatting of this repository is consistent
   without an automaton, and a list of cosmetic prohibitions would turn the
   gate into noise you stop reading, and with it whatever really breaks the
   code.

   Measurement before the decision, not after: `js.configs.recommended` run
   once over the whole thing gave 46 reports across 86 files, 43 of which came
   from undeclared globals. The set is therefore complete rather than trimmed
   — with that tally there was no reason to trim it.
   ============================================================ */
const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const globals = require("globals");

/* The course globals: every module exposes itself through `global.X = X`, so
   for the remaining files X is there to be read, never assigned — hence
   "readonly". The list comes from the `global.` assignments in assets/js/**,
   not from memory. */
const KURS = [
  "Anki", "App", "Audio2", "Cils", "CilsHtml", "CilsRun", "Consent", "Core", "Drills", "Errors", "Ex",
  "Frequency", "Fsrs", "I18n", "Keys", "Lemma", "Lex", "LINGUAI", "Llm", "LlmKeys",
  "LlmProviders", "LlmRules", "Lookup",
  "Placement", "PWA", "Recorder", "Router", "Search", "Talk", "Train", "Verbs", "Views", "Writing",
  /* course data: the files in data/ assign these to the global scope */
  "AUDIO_INDEX", "CONVERSATIONS", "GRAMMAR_REF", "PHONETICS", "CILS", "READINGS",
  "INTERFERENCE", "FREQUENCY", "WRITING"
].reduce(function (zbior, nazwa) { zbior[nazwa] = "readonly"; return zbior; }, {});

/* Two departures from `no-unused-vars`, both following from the code rather
   than from convenience:

   - `catch (e)` without using `e` is correct here, not sloppy: omitting the
     binding (`catch {}`) is ES2019, while the course has to run on browsers
     from 2020 and is written in ES5.
   - an argument with an underscore (`_ms`) means "it has to be in the
     signature, but I deliberately do not read it" — that is how the clock
     double in tests/unit/_harness.mjs is written, imitating
     `setTimeout(fn, ms)`.

   The rest of the rule stays on: an unused variable is dead code. */
const NIEUZYWANE = ["error", { caughtErrors: "none", argsIgnorePattern: "^_" }];

module.exports = defineConfig([
  {
    ignores: [
      "node_modules/**",
      /* course content, not code: 104 data files and the recordings */
      "data/**",
      "audio/**",
      "test-results/**",
      "playwright-report/**",
      ".playwright-mcp/**"
    ]
  },

  js.configs.recommended,

  {
    files: ["assets/js/**/*.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: { ...globals.browser, ...KURS }
    },
    rules: { "no-unused-vars": NIEUZYWANE }
  },

  {
    files: ["sw.js"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "script",
      globals: { ...globals.serviceworker }
    },
    rules: { "no-unused-vars": NIEUZYWANE }
  },

  {
    files: ["scripts/**/*.mjs", "tests/unit/**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node }
    },
    rules: { "no-unused-vars": NIEUZYWANE }
  },

  {
    files: ["tests/dom/**/*.js", "playwright.config.js", "eslint.config.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "commonjs",
      /* browser ALONGSIDE node: the body of `page.evaluate` travels to the
         browser and refers to the course globals exactly like assets/js. */
      globals: { ...globals.node, ...globals.browser, ...KURS }
    },
    rules: { "no-unused-vars": NIEUZYWANE }
  },

  {
    /* The same nature as the block above and a different syntax, which is
       why it cannot join it: build_og.mjs drives Chromium, so the bodies of
       its `page.evaluate` calls run in the browser, but the file is a module
       with a top-level await and would not parse as commonjs.

       Narrow on purpose, one file rather than `scripts/**`: the other
       nineteen scripts never touch a browser, and handing them `document`
       would turn a typo there into working-looking code. */
    files: ["scripts/build_og.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser }
    },
    rules: { "no-unused-vars": NIEUZYWANE }
  }
]);
