/* ============================================================
   check_swversion.mjs — czy nowe wydanie ma jak się ogłosić
   Uruchomienie:  node scripts/check_swversion.mjs [--napraw]

   Przeglądarka rozpoznaje nową wersję aplikacji po BAJTACH sw.js i po
   niczym innym: pobiera ten plik, porównuje z zapamiętanym i dopiero
   różnica uruchamia instalację nowego workera. Projekt nie ma kroku
   budowania, więc pliki nie mają skrótu w nazwie i sw.js nie zmienia się
   od tego, że zmienił się core.js. Poprawka wychodziła więc do uczniów
   jako wydanie, którego przeglądarka nie widziała, a komunikat
   „jest nowa wersja" nie miał prawa się pojawić.

   Stąd odcisk doklejony do SW_VERSION: skrót treści WSZYSTKICH plików
   z PRECACHE. Zmiana którejkolwiek linijki powłoki zmienia odcisk, więc
   zmienia sw.js, więc uruchamia zapowiedź.

   Granica, świadoma: liczą się pliki z PRECACHE, czyli powłoka kursu.
   Pliki poziomów (data/core/a1-*.js) dociągane są w czasie działania i
   idą strategią „najpierw sieć", więc odświeżają się same, bez workera.

   `PRECACHE` czytamy wykonując sw.js w piaskownicy, tak samo jak
   check_precache.mjs — nie wyrażeniem regularnym po nawiasach.
   ============================================================ */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { createHash } from "node:crypto";
import vm from "node:vm";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SW = join(ROOT, "sw.js");
const NAPRAW = process.argv.slice(2).includes("--napraw");

/* Wersja w postaci „v35.7bb6e01ec9d6": ręczna nazwa wydania, kropka, odcisk.
   Odcisk jest opcjonalny w wyrażeniu, żeby dało się go dopisać do pliku,
   który go jeszcze nie ma. */
const WZOR = /(var SW_VERSION = "v\d+)(?:\.[0-9a-f]+)?(";)/;

/** index.html jest w PRECACHE dwa razy: jako „./" i pod własną nazwą. */
function norm(sciezka) {
  const czysta = sciezka.replace(/^\.\//, "").replace(/^\//, "");
  return czysta === "" ? "index.html" : czysta;
}

function precache() {
  const box = {
    console,
    self: { addEventListener() {}, skipWaiting() {}, clients: { claim() {} } },
    caches: undefined
  };
  box.globalThis = box;
  vm.createContext(box);
  vm.runInContext(readFileSync(SW, "utf8"), box, { filename: "sw.js" });
  if (!Array.isArray(box.PRECACHE)) {
    console.error("sw.js: nie znaleziono tablicy PRECACHE");
    process.exit(1);
  }
  return box.PRECACHE;
}

/**
 * Odcisk powłoki.
 *
 * Nazwa pliku wchodzi do skrótu razem z treścią: samo przestawienie
 * zawartości między dwoma plikami też jest zmianą wydania. Lista jest
 * posortowana, bo kolejność wpisów w PRECACHE jest deklaracją zależności
 * i wolno ją przestawić bez zmiany tego, co dostaje uczeń.
 */
function odcisk(pliki) {
  const suma = createHash("sha256");
  for (const rel of pliki) {
    const abs = join(ROOT, rel);
    if (!existsSync(abs)) {
      console.error(`\nBŁĄD — PRECACHE wymienia plik, którego nie ma: ${rel}`);
      console.error("Instalacja workera pominie go po cichu, a pierwszy start bez sieci na nim padnie.\n");
      process.exit(1);
    }
    suma.update(rel);
    suma.update("\0");
    suma.update(readFileSync(abs));
    suma.update("\0");
  }
  return suma.digest("hex").slice(0, 12);
}

/* ---------------- Porównanie ---------------- */

const pliki = Array.from(new Set(precache().map(norm))).sort();
const swiezy = odcisk(pliki);

const zrodlo = readFileSync(SW, "utf8");
const trafienie = WZOR.exec(zrodlo);
if (!trafienie) {
  console.error('\nBŁĄD — sw.js: nie znaleziono `var SW_VERSION = "v<liczba>[.<odcisk>]";`\n');
  process.exit(1);
}

const wydanie = trafienie[1].replace('var SW_VERSION = "', "");
const zapisany = (trafienie[0].match(/\.([0-9a-f]+)";$/) || [])[1] || null;

if (zapisany === swiezy) {
  console.log(`OK — odcisk ${wydanie}.${swiezy} zgadza się z treścią ${pliki.length} plików powłoki.`);
  process.exit(0);
}

if (NAPRAW) {
  writeFileSync(SW, zrodlo.replace(WZOR, `$1.${swiezy}$2`));
  console.log(`Zapisano ${wydanie}.${swiezy} (było ${zapisany || "bez odcisku"}).`);
  process.exit(0);
}

console.error(`\nBŁĄD — odcisk w sw.js jest nieaktualny: ${zapisany || "brak"}, a treść powłoki daje ${swiezy}.`);
console.error("Bez tego przeglądarka nie zobaczy nowego wydania i uczeń nie dostanie komunikatu o aktualizacji.\n");
console.error("  node scripts/check_swversion.mjs --napraw\n");
process.exit(1);
