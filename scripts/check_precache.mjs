/* ============================================================
   check_precache.mjs — czy guska umie wczytać to, co ładuje strona
   Uruchomienie:  node scripts/check_precache.mjs

   Projekt nie ma kroku budowania, więc lista plików w `PRECACHE`
   (sw.js) jest przepisywana ręcznie i CLAUDE.md prosi człowieka, żeby
   po dopisaniu skryptu do index.html nie zapomniał dopisać go też tam.
   Zapomniane dopisanie nie boli od razu: kurs działa z siecią i pada
   dopiero przy pierwszym starcie bez niej, na brakującym skrypcie.
   Ten skrypt zamienia tę prośbę w bramkę.

   Porównanie idzie w JEDNĄ stronę: index.html → PRECACHE. Odwrotna
   zgłaszałaby fałszywy alarm, bo `PRECACHE` z założenia trzyma pliki
   dociągane w czasie działania (nakładki ui-*.js, kroje pisma, ikony),
   których w index.html nie ma i być nie musi.

   `PRECACHE` czytamy wykonując sw.js w piaskownicy, a nie wyrażeniem
   regularnym po nawiasach: tak samo robi validate.mjs z danymi kursu,
   i tak samo nie da się tego oszukać przecinkiem w komentarzu.
   ============================================================ */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

/** Ujednolica zapis ścieżki: index.html pisze „assets/x", PRECACHE „./assets/x". */
function norm(sciezka) {
  return sciezka.replace(/^\.\//, "").replace(/^\//, "").split("?")[0].split("#")[0];
}

/* ---------------- PRECACHE z sw.js ---------------- */

function precache() {
  /* `self` musi istnieć i przyjmować addEventListener, bo sw.js rejestruje
     trzy zdarzenia zaraz po deklaracjach. Nic z tego nie wołamy — interesuje
     nas wyłącznie tablica, która stoi wyżej. */
  const box = {
    console,
    self: { addEventListener() {}, skipWaiting() {}, clients: { claim() {} } },
    caches: undefined
  };
  box.globalThis = box;
  vm.createContext(box);
  vm.runInContext(readFileSync(join(ROOT, "sw.js"), "utf8"), box, { filename: "sw.js" });
  if (!Array.isArray(box.PRECACHE)) {
    console.error("sw.js: nie znaleziono tablicy PRECACHE");
    process.exit(1);
  }
  return { lista: box.PRECACHE.map(norm), wersja: box.SW_VERSION };
}

/* ---------------- Zasoby z index.html ---------------- */

/**
 * Wyciąga to, czego strona potrzebuje do pierwszego uruchomienia:
 * wszystkie `<script src>` oraz arkusz stylów i manifest z `<link>`.
 * Ikony i favicon zostają poza: favicon jest wpisany jako data: URI,
 * a ikony PWA wczytuje system, nie parser strony.
 */
function zasobyStrony() {
  const html = readFileSync(join(ROOT, "index.html"), "utf8");
  const out = [];

  for (const m of html.matchAll(/<script\b[^>]*\bsrc\s*=\s*["']([^"']+)["']/gi)) {
    out.push(norm(m[1]));
  }
  for (const m of html.matchAll(/<link\b[^>]*>/gi)) {
    const tag = m[0];
    const rel = (tag.match(/\brel\s*=\s*["']([^"']+)["']/i) || [])[1] || "";
    const href = (tag.match(/\bhref\s*=\s*["']([^"']+)["']/i) || [])[1] || "";
    if (!href || href.startsWith("data:")) continue;
    if (/^(stylesheet|manifest)$/i.test(rel.trim())) out.push(norm(href));
  }

  return out;
}

/* ---------------- Porównanie ---------------- */

const { lista, wersja } = precache();
const wPamieci = new Set(lista);
const potrzebne = zasobyStrony();
const brakujace = potrzebne.filter((p) => !wPamieci.has(p));

if (brakujace.length) {
  console.error(`\nBŁĄD — index.html wczytuje ${brakujace.length} plik(ów) spoza PRECACHE.`);
  console.error("Pierwszy start bez sieci padnie na każdym z nich.\n");
  brakujace.forEach((p) => console.error(`  x ${p}`));
  console.error(`\nDopisz je do PRECACHE w sw.js i podnieś SW_VERSION (teraz ${wersja}).\n`);
  process.exit(1);
}

console.log(
  `OK — wszystkie ${potrzebne.length} zasobów strony są w PRECACHE ` +
  `(${lista.length} wpisów, ${wersja}).`
);
