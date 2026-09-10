/* ============================================================
   mutations.mjs — whether the unit tests can see red
   Usage:  node scripts/mutations.mjs [--tylko <part of a description>]

   Every row of the table below breaks ONE decision in the engine and names
   the test file that must then fall over. A mutation after which the suite
   stays green means nobody is guarding that decision.

   WHY THIS IS NOT THE SAME AS COVERAGE. `coverage.mjs` says a line was
   EXECUTED. Execution is not verification: the assertion
   `assert.ok(!out.includes("js-play"))` runs the whole generator and passes
   even when the generator produces NOTHING. I wrote three such assertions
   on the day this table was created, and all three had 100% coverage. They
   only came out here:

   - an empty audio block entering the reading section (I counted the
     buttons, not the block wrapping them);
   - `cils-h` as a substring also matching `cils-hint`;
   - `cils.limit` as a substring matching `cils.limitLabel`, so the whole
     warning about the simulator's limit could disappear on green.

   THE SCOPE IS NARROW AND MEANT TO BE DECLARED. The table covers four files
   (`cils-html.js`, `lemma-morf.js`, `pwa-rules.js`, `pwa.js`) out of the
   sixty-odd in `assets/js/`. A result of "34/34" does not mean "the engine
   is verified", it means "those 34 decisions are verified". Adding a file of
   pure functions is a good moment to add a row here; there is no obligation
   to cover the whole engine.

   The exception to "pure functions" is `pwa.js`, which is not a pure
   function: it holds the WIRING of the rules to the service worker states,
   and any mistake in that wiring looks on screen like an absent update,
   that is like nothing. The four mutations below are four ways this feature
   stops working without a single red test.

   IT DOES NOT TOUCH FILES IN THE WORKING TREE. The mutated version lives in
   a temporary directory, and `tests/unit/_harness.mjs` reads it through
   `LINGUAI_PODMIANA`. The first version mutated the file in place and
   restored it in `finally`, with a SIGINT handler — the handler was useless,
   because the whole gate is synchronous and the event loop does not get a
   word in before it ends: the signal waited in the queue until the very end
   of the run. Worse, merely registering the handler disabled the default
   process kill, so Ctrl+C stopped stopping the script. Now there is nothing
   to restore.

   Three ways this gate ends in an error (all verified): a mutation with no
   red, a fragment absent from the file (the table rotted after a refactor)
   and a fragment occurring several times (the substitution would hit the
   first occurrence and would measure something other than its description
   says).
   ============================================================ */
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const HTML = "assets/js/cils-html.js";
const MORF = "assets/js/lemma-morf.js";
const REG = "assets/js/pwa-rules.js";
const PWA = "assets/js/pwa.js";
const T_HTML = "tests/unit/cils-html.test.mjs";
const T_MORF = "tests/unit/lemma-morf.test.mjs";
const T_REG = "tests/unit/pwa-rules.test.mjs";
const T_PWA = "tests/unit/pwa.test.mjs";

/**
 * The mutations. `z` must occur in the file EXACTLY ONCE — with two
 * occurrences the substitution would hit the first of them and nobody would
 * notice that the mutation measures something other than its description
 * says.
 */
const MUTACJE = [
  /* ---- cils-html.js: the answer grid ---- */
  { plik: HTML, test: T_HTML, opis: "radio: one group for the whole task",
    z: 'var nome = "p" + n + "i" + i;', na: 'var nome = "p" + n;' },
  { plik: HTML, test: T_HTML, opis: "cloze: a gap after every piece of text",
    z: "var buco = i < (p.items || []).length", na: "var buco = i < (p.testo || []).length" },
  { plik: HTML, test: T_HTML, opis: "listening: the audio block in the reading section too",
    z: 'if (sez.id === "ascolto") testa += ascolti(p, n);', na: "testa += ascolti(p, n);" },
  { plik: HTML, test: T_HTML, opis: "scritta: every prompt selected at once",
    z: '(i === 0 ? " checked" : "") + "> " + esc(tr.it)', na: '" checked> " + esc(tr.it)' },
  { plik: HTML, test: T_HTML, opis: "orale: a record button with no microphone",
    z: "(powod ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :",
    na: "(false ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :" },
  { plik: HTML, test: T_HTML, opis: "orale: no topic selected up front",
    z: '(i === 0 ? " checked" : "") + "> " + esc(a)', na: '"> " + esc(a)' },

  /* ---- cils-html.js: the list and the summary ---- */
  { plik: HTML, test: T_HTML, opis: "list: the warning about the limit removed",
    z: 'esc(t("cils.limit")) + "</div>" +', na: '"</div>" +' },
  { plik: HTML, test: T_HTML, opis: "list: only the first simulation",
    z: "(symulacje || []).map(function (s) {", na: "(symulacje || []).slice(0, 1).map(function (s) {" },
  { plik: HTML, test: T_HTML, opis: "list: the start button without the simulation id",
    z: 'data-id="', na: 'data-sim="' },
  { plik: HTML, test: T_HTML, opis: "abilità: no marker for time that ran out",
    z: 'var scad = czyScadla(a) ? " " + t("cils.expiredMark") : "";', na: 'var scad = "";' },
  { plik: HTML, test: T_HTML, opis: "abilità: always a tick, never a cross",
    z: 'd.punti + " / " + d.max + " " + (d.sopraSoglia ? "✓" : "✗")',
    na: 'd.punti + " / " + d.max + " ✓"' },
  { plik: HTML, test: T_HTML, opis: "abilità: an unmeasured skill shown as a result",
    z: "var val = d.misurata", na: "var val = true" },
  { plik: HTML, test: T_HTML, opis: "summary: the verdict always undetermined",
    z: 'esc(t(esito.verdetto === "sotto-soglia" ? "cils.verdictBelow" : "cils.verdictUnknown"))',
    na: 'esc(t("cils.verdictUnknown"))' },
  { plik: HTML, test: T_HTML, opis: "summary: without the source of the threshold",
    z: 'esc(t("cils.thresholdSource")) + "</p></div>" +\n      scritta',
    na: '"</p></div>" +\n      scritta' },
  { plik: HTML, test: T_HTML, opis: "summary: the production cards never appear",
    z: "scritta(pisemna) + orale(ustna) +", na: '"" +' },
  { plik: HTML, test: T_HTML, opis: "summary: without the way back to the list",
    z: 'class="btn btn--ghost js-list"', na: 'class="btn btn--ghost js-brak"' },
  { plik: HTML, test: T_HTML, opis: "written: a card for an untouched section",
    z: 'if (!pisemna) return "";', na: 'if (false) return "";' },
  { plik: HTML, test: T_HTML, opis: "written: the requirement label replaced by the key",
    z: "esc(wym.etichetta || r.key)", na: "esc(r.key)" },

  /* ---- lemma-morf.js: the form rules ---- */
  { plik: MORF, test: T_MORF, opis: "slowa: a lone auxiliary is dropped too",
    z: "if (cz.length < 2) return cz;", na: "if (false) return cz;" },
  { plik: MORF, test: T_MORF, opis: "enclitics: the length threshold too short",
    z: "if (w.length <= z.length + 2) return;", na: "if (w.length <= z.length) return;" },
  { plik: MORF, test: T_MORF, opis: "enclitics: the infinitive without rebuilding the -e",
    z: 'if (/[aei]r$/.test(rdzen)) out.push(rdzen + "e");', na: "if (false) out.push(rdzen);" },
  { plik: MORF, test: T_MORF, opis: "rule: amiche reduces to a non-existent word",
    z: '[/che$/, "ca"],      // amiche -> amica', na: '[/che$/, "cx"],      // amiche -> amica' },
  { plik: MORF, test: T_MORF, opis: "superlative: without rebuilding the hard k",
    z: '[/chissim[oaie]$/, "co"],', na: '[/chissim[oaie]$/, "o"],' },
  { plik: MORF, test: T_MORF, opis: "infinitive: reflexive forms rejected",
    z: "return /^[a-zàèéìòù]+(are|ere|ire|arsi|ersi|irsi)$/",
    na: "return /^[a-zàèéìòù]+(are|ere|ire)$/" },
  { plik: MORF, test: T_MORF, opis: "function words: without lowering the case",
    z: "return !!funkcyjneSet[String(w).toLowerCase()];", na: "return !!funkcyjneSet[String(w)];" },
  { plik: MORF, test: T_MORF, opis: "function words: the numerals left out of the set",
    z: "FUNKCYJNE.concat(LICZEBNIKI).forEach", na: "FUNKCYJNE.forEach" },
  { plik: MORF, test: T_MORF, opis: "accent: the tonic accent is not removed",
    z: "return w.replace(/[àáèéìíòóùú]/g, function (c) { return AKCENTY[c] || c; });",
    na: "return w;" },

  /* ---- pwa-rules.js: the rules for announcing a new version ---- */
  { plik: REG, test: T_REG, opis: "announcement: the first visit treated as an update",
    z: "return !!stan.czeka && !!stan.kontrolowana;", na: "return !!stan.czeka;" },
  { plik: REG, test: T_REG, opis: "threshold: a clock moved back stops the questions for good",
    z: "if (teraz < ostatnie) return true;", na: "if (false) return true;" },
  { plik: REG, test: T_REG, opis: "reload: without the loop guard",
    z: "return !!stan.kontrolowana && !stan.juzPrzeladowana;", na: "return !!stan.kontrolowana;" },

  /* ---- pwa.js: wiring the rules to the browser states ---- */

  /* The most obvious defect and the hardest to see: at the moment of
     `updatefound` the worker is in "installing" and `waiting` is empty. */
  { plik: PWA, test: T_PWA, opis: "announcement read at updatefound, not after installation",
    z: 'reg.addEventListener("updatefound", function () { sledz(reg.installing); });',
    na: 'reg.addEventListener("updatefound", function () { zapowiedz(reg.waiting); });' },
  { plik: PWA, test: T_PWA, opis: "update reloads at once instead of asking the worker",
    z: "czeka.postMessage({ typ: \"przejmij\" });", na: "global.location.reload();" },
  { plik: PWA, test: T_PWA, opis: "update asks the worker from announcement time, not the current one",
    z: "var czeka = (rejestracja && rejestracja.waiting) || worker;", na: "var czeka = worker;" },
  { plik: PWA, test: T_PWA, opis: "registration on \"load\" only, without checking readyState",
    z: 'if (global.document.readyState === "complete") register();', na: "if (false) register();" },
  { plik: PWA, test: T_PWA, opis: "the question to the server without a threshold",
    z: "if (!global.PwaRules.sprawdzac(ostatnieSprawdzenie, teraz)) return false;",
    na: "if (false) return false;" }
];

/* ---------------- Running ---------------- */

const argv = process.argv.slice(2);
const tylkoIdx = argv.indexOf("--tylko");
const TYLKO = tylkoIdx >= 0 ? argv[tylkoIdx + 1] : null;

const zrodla = new Map();
for (const m of MUTACJE) {
  if (!zrodla.has(m.plik)) zrodla.set(m.plik, readFileSync(join(ROOT, m.plik), "utf8"));
}

/** How many times a string occurs in the file. */
function ile(hay, igla) {
  return hay.split(igla).length - 1;
}

/**
 * One run of a test file, with an optional substitution of an engine file.
 * @param {string} test  the path of the test file
 * @param {object} [podmiana] a map "path in the repo" -> "path of the mutated copy"
 */
function suita(test, podmiana) {
  const env = { ...process.env };
  if (podmiana) env.LINGUAI_PODMIANA = JSON.stringify(podmiana);
  else delete env.LINGUAI_PODMIANA;
  const out = spawnSync(process.execPath, ["--test", test], { cwd: ROOT, encoding: "utf8", env });
  const liczba = (n) => Number((out.stdout.match(new RegExp("^. " + n + " (\\d+)$", "m")) || [])[1]);
  return { pass: liczba("pass"), fail: liczba("fail") };
}

const katalog = mkdtempSync(join(tmpdir(), "linguai-mut-"));
const wyniki = [];
let bledy = 0;

try {
  /* A green baseline is a condition of meaning: from a red suite there is no
     way to tell whether the mutation knocked it over or it was already
     broken. */
  for (const test of [...new Set(MUTACJE.map(m => m.test))]) {
    const { pass, fail } = suita(test);
    if (fail !== 0 || !pass) {
      console.error(`BŁĄD — ${test} nie jest zielony przed mutacjami (pass ${pass}, fail ${fail}).`);
      process.exit(1);
    }
  }

  for (const m of MUTACJE) {
    if (TYLKO && !m.opis.includes(TYLKO) && !m.plik.includes(TYLKO)) continue;
    const src = zrodla.get(m.plik);
    const wystapienia = ile(src, m.z);

    if (wystapienia !== 1) {
      wyniki.push({
        stan: wystapienia === 0 ? "NIE MA" : "NIEJEDNOZNACZNE", m,
        info: wystapienia === 0 ? "fragment zniknął z pliku" : `${wystapienia} wystąpień`
      });
      bledy++;
      continue;
    }

    const kopia = join(katalog, basename(m.plik));
    writeFileSync(kopia, src.replace(m.z, m.na));
    const { fail } = suita(m.test, { [m.plik]: kopia });

    if (fail > 0) wyniki.push({ stan: "CZERWONE", m, info: `fail ${fail}` });
    else { wyniki.push({ stan: "ZIELONE", m, info: "nikt tego nie pilnuje" }); bledy++; }
  }
} finally {
  rmSync(katalog, { recursive: true, force: true });
}

/* ---------------- The report ---------------- */

for (const w of wyniki) {
  console.log(`${w.stan === "CZERWONE" ? "✔" : "✖"} ${w.stan.padEnd(16)} ` +
    `${w.m.opis.padEnd(52)} ${w.info}`);
}

const zlapane = wyniki.filter(w => w.stan === "CZERWONE").length;
console.log(`\nZŁAPANE ${zlapane}/${wyniki.length} mutacji ` +
  `(${[...new Set(wyniki.map(w => w.m.plik))].join(", ")}).`);
console.log("Zasięg jest wąski i zadeklarowany: to nie jest miara całego silnika.");

if (bledy) {
  console.error(`\nBŁĄD — ${bledy} mutacji bez czerwonego albo nie do zastosowania.`);
  process.exit(1);
}
