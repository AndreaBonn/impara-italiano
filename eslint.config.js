/* ============================================================
   eslint.config.js — bramka poprawności, nie stylu.

   Repozytorium ma cztery rodzaje plików i każdy ma inne zasady gry,
   więc jedna wspólna konfiguracja zgłaszałaby jako błędy właśnie te
   rzeczy, na których projekt stoi:

   - assets/js/**  skrypty klasyczne dla przeglądarki. Moduły łączą się
                   przez globale (`global.Views = Views`), więc bez ich
                   wypisania `no-undef` zapaliłby się na każdym z nich.
   - sw.js         guska: ma `self` i `caches`, nie ma `window`.
   - scripts/**    narzędzia Node, prawdziwe moduły ES.
   - tests/dom/**  CommonJS Playwrighta, ale wnętrze `page.evaluate`
                   wykonuje się w przeglądarce, więc globale kursu
                   muszą tu być widoczne tak samo jak w assets/js.

   Reguł stylu NIE ma. Formatowanie tego repozytorium jest spójne bez
   automatu, a lista zakazów kosmetycznych zamieniłaby bramkę na szum,
   przez który przestaje się czytać to, co naprawdę psuje kod.

   Miara przed decyzją, nie po: `js.configs.recommended` puszczone raz
   na całości dało 46 zgłoszeń na 86 plików, z czego 43 wynikały z
   niedopisanych globali. Zestaw jest więc pełny, a nie okrojony —
   przy tym rachunku nie było powodu go przycinać.
   ============================================================ */
const { defineConfig } = require("eslint/config");
const js = require("@eslint/js");
const globals = require("globals");

/* Globale kursu: każdy moduł wystawia się przez `global.X = X`, więc dla
   pozostałych plików X jest do czytania, nigdy do przypisania — stąd
   „readonly". Lista pochodzi z przypisań `global.` w assets/js/**, nie
   z pamięci. */
const KURS = [
  "Anki", "App", "Audio2", "Cils", "CilsHtml", "CilsRun", "Consent", "Core", "Drills", "Errors", "Ex",
  "Frequency", "Fsrs", "I18n", "Keys", "Lemma", "Lex", "LINGUAI", "Lookup",
  "Placement", "PWA", "Recorder", "Router", "Search", "Talk", "Train", "Verbs", "Views", "Writing",
  /* dane kursu: pliki z data/ przypisują je do globalnego zakresu */
  "AUDIO_INDEX", "CONVERSATIONS", "GRAMMAR_REF", "PHONETICS", "CILS", "READINGS",
  "INTERFERENCE", "FREQUENCY", "WRITING"
].reduce(function (zbior, nazwa) { zbior[nazwa] = "readonly"; return zbior; }, {});

/* Dwa odstępstwa od `no-unused-vars`, oba wynikają z kodu, nie z wygody:

   - `catch (e)` bez użycia `e` jest tu poprawny, nie zaniedbany: pominięcie
     wiązania (`catch {}`) to ES2019, a kurs ma chodzić na przeglądarkach od
     2020 i jest pisany w ES5.
   - argument z podkreśleniem (`_ms`) znaczy „musi być w sygnaturze, ale
     celowo go nie czytam" — tak jest napisana atrapa zegara w
     tests/unit/_harness.mjs, która udaje `setTimeout(fn, ms)`.

   Reszta reguły zostaje włączona: nieużywana zmienna to martwy kod. */
const NIEUZYWANE = ["error", { caughtErrors: "none", argsIgnorePattern: "^_" }];

module.exports = defineConfig([
  {
    ignores: [
      "node_modules/**",
      /* treść kursu, nie kod: 104 pliki danych i nagrania */
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
      /* browser OBOK node: ciało `page.evaluate` jedzie do przeglądarki,
         a odwołuje się do globali kursu dokładnie jak assets/js. */
      globals: { ...globals.node, ...globals.browser, ...KURS }
    },
    rules: { "no-unused-vars": NIEUZYWANE }
  }
]);
