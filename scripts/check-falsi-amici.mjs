/* ============================================================
   check-falsi-amici.mjs — what parity.mjs does not know about this category.

   `parity.mjs` enforces CONSISTENCY: whether an overlay has an entry if and
   only if `for` lists that language. That is enough to keep anything from
   disappearing silently, and it is not enough for anything more.

   This script enforces what is a property of the category as a whole:

   - HOW MANY entries there are per language. A false-friends list with
     eight items is not a short list, it is a promise with nothing behind it;
   - whether every Italian word and every sentence HAS A RECORDING. That is
     the only reason this category lives in `data/core/`: without a
     recording the exercise is born mute and has no reason to exist;
   - whether a word in the student's language leaked into the neutral layer.

   The threshold is a PRODUCT DECISION, not a measurement, and that is why
   it stands here as a named constant rather than buried in a condition
   (C5 of the plan).

       node scripts/check-falsi-amici.mjs          # a report
       node scripts/check-falsi-amici.mjs --gate   # exit code 1 on a violation
   ============================================================ */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["pl", "en", "es", "fr", "de"];
const MIN_NA_JEZYK = 30;
const GATE = process.argv.includes("--gate");

/* The sandbox: the neutral layer plus all the overlays at once. */
const store = {};
const box = {
  console, JSON, Object, Array, String,
  LINGUAI: {
    addStrings(lang, map) {
      const bag = store[lang] || (store[lang] = {});
      Object.keys(map).forEach(k => { bag[k] = map[k]; });
    }
  }
};
box.window = box;
box.global = box;
vm.createContext(box);
vm.runInContext(readFileSync(join(ROOT, "data/core/interference.js"), "utf8"), box);
for (const l of LANGS) {
  vm.runInContext(readFileSync(join(ROOT, `data/i18n/${l}/interference.js`), "utf8"), box);
}
vm.runInContext(readFileSync(join(ROOT, "data/audio-index.js"), "utf8"), box);

const DANE = box.INTERFERENCE || [];
const INDEKS = box.AUDIO_INDEX || "";

/**
 * FNV-1a 64-bit — the same function as in audio.js and build_audio.py.
 *
 * `norm()` in audio.js collapses whitespace and trims, and NOTHING MORE:
 * the letter case stays. The first version of this gate added
 * `toLowerCase()` and reported a missing recording for all 83 sentences —
 * because a sentence starts with a capital while the entries are lower
 * case. A drift in normalisation produces no error, only a silent miss; the
 * same warning stands in CLAUDE.md.
 */
function hash(text) {
  let h = 0xcbf29ce484222325n;
  const M = 0xffffffffffffffffn;
  for (const b of Buffer.from(String(text).replace(/\s+/g, " ").trim(), "utf8")) {
    h ^= BigInt(b);
    h = (h * 0x100000001b3n) & M;
  }
  return h.toString(16).padStart(16, "0");
}

const problemy = [];

/* 1. How many entries per language. */
const licznik = Object.fromEntries(LANGS.map(l => [l, 0]));
for (const v of DANE) for (const l of v.for || []) if (l in licznik) licznik[l]++;

console.log("check-falsi-amici\n");
console.log(`  wpisów w warstwie neutralnej: ${DANE.length}`);
console.log(`  próg na język: ${MIN_NA_JEZYK} (decyzja produktowa, nie pomiar)\n`);
for (const l of LANGS) {
  const n = licznik[l];
  const ok = n >= MIN_NA_JEZYK;
  console.log(`  ${ok ? "OK  " : "MAŁO"} ${l}: ${n}`);
  if (!ok) problemy.push(`${l}: ${n} wpisów, próg ${MIN_NA_JEZYK}`);
}

/* 2. Whether the explanation exists and is not empty where `for` announces it. */
for (const v of DANE) {
  for (const l of v.for || []) {
    const p = (store[l] || {})["int:" + v.id];
    if (!p) { problemy.push(`${l}/${v.id}: brak wpisu w nakładce`); continue; }
    for (const pole of ["looks", "mean", "why"]) {
      if (!p[pole] || !String(p[pole]).trim()) problemy.push(`${l}/${v.id}: puste „${pole}"`);
    }
  }
}

/* 3. The recordings. That is why this file lives in data/core/. */
const bezAudio = [];
for (const v of DANE) {
  for (const napis of [v.it, v.ex]) {
    if (!INDEKS.includes(hash(napis))) bezAudio.push(`${v.id}: ${JSON.stringify(napis)}`);
  }
}
console.log(`\n  nagrania: ${DANE.length * 2 - bezAudio.length}/${DANE.length * 2}`);
if (bezAudio.length) {
  bezAudio.slice(0, 8).forEach(x => console.log("  BRAK " + x));
  if (bezAudio.length > 8) console.log(`  … i ${bezAudio.length - 8} więcej`);
  problemy.push(`${bezAudio.length} napisów bez nagrania — uruchom extract_strings.mjs i build_audio.py`);
}

/* 4. A leak of the student's language into the neutral layer. The same test
   as in validate.mjs, repeated here, because this category is produced by a
   generator and a mistake in the source table would go straight into the
   data. */
const OBCE = /[ąęłżźćńśñçäöüßáíúõâêôõ]/;
for (const v of DANE) {
  for (const pole of ["it", "ex"]) {
    if (OBCE.test(v[pole])) problemy.push(`${v.id}.${pole}: litera spoza alfabetu włoskiego`);
  }
}

console.log("");
if (problemy.length) {
  console.log(`  ${problemy.length} problem(ów):`);
  problemy.slice(0, 20).forEach(p => console.log("  x " + p));
  if (problemy.length > 20) console.log(`  … i ${problemy.length - 20} więcej`);
  if (GATE) process.exit(1);
} else {
  console.log("  OK — bez zastrzeżeń.");
}
