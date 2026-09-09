/* ============================================================
   check-falsi-amici.mjs — czego parity.mjs o tej kategorii nie wie.

   `parity.mjs` pilnuje ZGODNOŚCI: czy nakładka ma wpis wtedy i tylko
   wtedy, gdy `for` wymienia ten język. To wystarcza, żeby nic nie zniknęło
   po cichu, i nie wystarcza do niczego więcej.

   Ten skrypt pilnuje tego, co jest właściwością kategorii jako całości:

   - ILE wpisów przypada na język. Lista fałszywych przyjaciół z ośmioma
     pozycjami nie jest krótką listą, tylko obietnicą bez pokrycia;
   - czy każde włoskie słowo i każde zdanie MA NAGRANIE. To jedyny powód,
     dla którego ta kategoria leży w `data/core/`: bez nagrania ćwiczenie
     rodzi się nieme i nie ma po co istnieć;
   - czy w warstwie neutralnej nie wyciekło słowo w języku ucznia.

   Próg jest DECYZJĄ PRODUKTOWĄ, nie pomiarem, i dlatego stoi tutaj jako
   stała z nazwą, a nie zaszyty w warunku (C5 planu).

       node scripts/check-falsi-amici.mjs          # raport
       node scripts/check-falsi-amici.mjs --gate   # kod 1 przy naruszeniu
   ============================================================ */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const LANGS = ["pl", "en", "es", "fr", "de"];
const MIN_NA_JEZYK = 30;
const GATE = process.argv.includes("--gate");

/* Piaskownica: warstwa neutralna plus wszystkie nakładki naraz. */
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
 * FNV-1a 64-bit — ta sama funkcja co audio.js i build_audio.py.
 *
 * `norm()` w audio.js zwęża białe znaki i przycina, i NIC WIĘCEJ: wielkość
 * liter zostaje. Pierwsza wersja tego gate'a dokładała `toLowerCase()` i
 * meldowała brak nagrania dla wszystkich 83 zdań — bo zdanie zaczyna się
 * wielką literą, a hasła są małą. Rozjazd normalizacji nie daje błędu,
 * tylko cichy brak trafienia; to samo ostrzeżenie stoi w CLAUDE.md.
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

/* 1. Ile wpisów na język. */
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

/* 2. Czy wyjaśnienie istnieje i nie jest puste tam, gdzie `for` je zapowiada. */
for (const v of DANE) {
  for (const l of v.for || []) {
    const p = (store[l] || {})["int:" + v.id];
    if (!p) { problemy.push(`${l}/${v.id}: brak wpisu w nakładce`); continue; }
    for (const pole of ["looks", "mean", "why"]) {
      if (!p[pole] || !String(p[pole]).trim()) problemy.push(`${l}/${v.id}: puste „${pole}"`);
    }
  }
}

/* 3. Nagrania. To jest powód istnienia pliku w data/core/. */
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

/* 4. Wyciek języka ucznia do warstwy neutralnej. Ten sam test, co w
   validate.mjs, powtórzony tutaj, bo ta kategoria powstaje z generatora i
   pomyłka w tabeli źródłowej trafiłaby prosto do danych. */
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
