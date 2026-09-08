/* ============================================================
   extract_strings.mjs — wyciąga wszystkie włoskie napisy, które
   aplikacja może wypowiedzieć, i zapisuje je do audio-strings.json.

   Nie używa wyrażeń regularnych na źródle: wczytuje prawdziwe pliki
   danych w piaskownicy node:vm i chodzi po rzeczywistej strukturze
   obiektów. Dzięki temu nie da się przeoczyć pola, które gdzieś
   trafia do przycisku 🔊.

   Uruchomienie:  node scripts/extract_strings.mjs
   ============================================================ */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/* Zdania wypowiadane przez silnik, a nieobecne w plikach danych. */
const EXTRA = [
  "Ciao! Sono la tua voce italiana. Andiamo a studiare insieme."
];

const levels = [];
const byCode = {};
const sandbox = {
  window: {}, console,
  LINGUAI: {
    registerLevel(lv) { lv.units = lv.units || []; levels.push(lv); byCode[lv.code] = lv; },
    addUnits(code, units) { if (byCode[code]) byCode[code].units = byCode[code].units.concat(units); }
  }
};
sandbox.window = sandbox;
vm.createContext(sandbox);

function run(file) {
  vm.runInContext(readFileSync(join(ROOT, "data", file), "utf8"), sandbox, { filename: file });
}

run("curriculum-index.js");
readdirSync(join(ROOT, "data")).filter(f => /^[abc]\d-\d+\.js$/.test(f)).sort().forEach(run);
run("conversations.js");

/* ---------------- Zbieranie ---------------- */
/** primary: głos główny · other: głos rozmówcy (tylko jeśli nigdzie indziej nie występuje) */
const primary = new Set();
const other = new Set();

function norm(s) {
  return String(s == null ? "" : s).replace(/\s+/g, " ").trim();
}
function addP(s) { const t = norm(s); if (t.length > 1) primary.add(t); }
function addO(s) { const t = norm(s); if (t.length > 1) other.add(t); }

function collectExercise(ex) {
  if (!ex || typeof ex !== "object") return;
  if (ex.say) addP(ex.say);
  if (ex.t === "listen" || ex.t === "speak") {
    addP(ex.it);
    (ex.alt || []).forEach(addP);
  }
  if (ex.t === "dialogue") {
    (ex.lines || []).forEach(function (l) {
      if (l.it) (l.sp === "TY" ? addP : addO)(l.it);
      // warianty odpowiedzi ucznia są odtwarzane po trafieniu
      (l.choices || []).forEach(addP);
    });
  }
}

function collectLesson(l) {
  if (!l) return;
  (l.vocab || []).forEach(function (v) { addP(v.it); });
  if (l.grammar && l.grammar.examples) {
    l.grammar.examples.forEach(function (e) { addP(e[0]); });
  }
  if (l.dialogue && l.dialogue.lines) {
    // w lekcji repliki naprzemienne: parzyste = rozmówca, nieparzyste = uczeń
    l.dialogue.lines.forEach(function (ln, i) { (i % 2 ? addP : addO)(ln.it); });
  }
  (l.exercises || []).forEach(collectExercise);
}

levels.forEach(function (lv) {
  (lv.units || []).forEach(function (u) {
    (u.lessons || []).forEach(collectLesson);
    if (u.test) collectLesson(u.test);
  });
});

(sandbox.CONVERSATIONS || []).forEach(function (c) {
  (c.turns || []).forEach(function (t) {
    if (t.sp === "TY") {
      // model odpowiedzi, odtwarzany przyciskiem „Pokaż odpowiedź"
      const acc = t.accept || (t.it ? [t.it] : []);
      if (acc[0]) addP(acc[0]);
    } else {
      addO(t.it);
    }
  });
});

EXTRA.forEach(addP);

/* Strona wypowiadana gdziekolwiek głosem głównym nie dostaje drugiego pliku. */
primary.forEach(s => other.delete(s));

const out = {
  primary: Array.from(primary).sort(),
  other: Array.from(other).sort()
};
writeFileSync(join(ROOT, "scripts", "audio-strings.json"), JSON.stringify(out, null, 1), "utf8");

const chars = [...primary, ...other].reduce((n, s) => n + s.length, 0);
console.log(`głos główny:   ${out.primary.length} napisów`);
console.log(`głos rozmówcy: ${out.other.length} napisów`);
console.log(`razem:         ${out.primary.length + out.other.length} napisów, ${chars} znaków`);
console.log("zapisano scripts/audio-strings.json");
