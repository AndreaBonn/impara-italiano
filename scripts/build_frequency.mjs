/* ============================================================
   build_frequency.mjs — lista częstości włoskich form wyrazowych.

   Po co: żeby uczeń mógł zobaczyć, ILE z prawdziwego włoskiego już zna.
   „Wiesz 847 z 2000 najczęstszych słów, czyli mniej więcej trzy czwarte
   tego, co pada w rozmowie" mówi więcej niż jakikolwiek licznik XP, bo
   mierzy język, a nie aplikację.

   ŹRÓDŁO I LICENCJA. Tatoeba, zdania włoskie, **CC BY 2.0 FR** —
   atrybucja bez share-alike, sprawdzone u źródła (tatoeba.org/downloads),
   nie z drugiej ręki.

   Dlaczego NIE Leipzig, mimo że plan go wskazywał: strona pobierania stoi
   za challenge'em antybotowym, w archiwum nie ma pliku licencji, a źródła
   wtórne podają rozbieżnie CC BY 4.0 albo CC BY-SA 4.0. Różnica między
   nimi to dokładnie to kryterium, dla którego Leipzig został wybrany —
   share-alike zaraża repozytorium. Licencji się nie zgaduje.

   Odrzucone też: Paisà i WaCKy (CC BY-NC-SA), listy z OpenSubtitles
   (CC BY-SA), podzbiór CC0 Tatoeby (19 zdań po włosku — za mało).

   OGRANICZENIE, KTÓRE TRZEBA ZNAĆ. Zdania Tatoeby to materiał dla uczących
   się, często tłumaczony z angielskiego, z rodziną „Tom i Mary" w tle.
   Odsiewamy formy, które NIGDY nie pojawiają się z małej litery — to
   usuwa imiona własne — ale rozkład i tak jest bliższy językowi
   podręcznikowemu niż gazecie. Dla kursu to raczej zaleta; przy czytaniu
   wyniku warto o tym pamiętać.

   Wejście: plik z tatoeba.org/downloads, sekcja „per language", ita.
   Nie leży w repozytorium (47 MB) i nie ma powodu, żeby leżał.

       curl -sS https://downloads.tatoeba.org/exports/per_language/ita/ita_sentences.tsv.bz2 \
         | bzip2 -dc > /tmp/ita.tsv
       node scripts/build_frequency.mjs /tmp/ita.tsv
   ============================================================ */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ILE = 2000;                       // ile form trafia do kursu (C4 planu)

const zrodlo = process.argv[2];
if (!zrodlo) {
  console.error("użycie: node scripts/build_frequency.mjs <ita_sentences.tsv>");
  process.exit(2);
}

/* Ta sama tokenizacja, co przy dotknięciu słowa w czytance: gdyby się
   rozjechały, licznik pokrycia liczyłby inne słowa niż te, które uczeń
   umie kliknąć. */
function tokeny(zdanie) {
  return zdanie
    .replace(/[’']/g, "'")
    .split(/[^a-zA-ZàáèéìíòóùúçÀÁÈÉÌÍÒÓÙÚÇ']+/)
    .filter(Boolean);
}

const male = new Map();      // forma z małej litery -> licznik
const zDuzej = new Map();    // ile razy forma wystąpiła z wielkiej
const zMalej = new Map();    // ile razy z małej
let tokenow = 0;
let zdan = 0;

for (const linia of readFileSync(zrodlo, "utf8").split("\n")) {
  if (!linia) continue;
  const zdanie = linia.split("\t")[2];
  if (!zdanie) continue;
  zdan++;
  const t = tokeny(zdanie);
  t.forEach((w, i) => {
    const low = w.toLowerCase();
    tokenow++;
    male.set(low, (male.get(low) || 0) + 1);
    /* Pierwsze słowo zdania jest z wielkiej zawsze, więc nie liczy się
       jako dowód na imię własne. */
    if (i > 0) {
      const duza = w[0] !== low[0];
      const mapa = duza ? zDuzej : zMalej;
      mapa.set(low, (mapa.get(low) || 0) + 1);
    }
  });
}

/* Imię własne: w środku zdania praktycznie zawsze z wielkiej litery.
   Próg 90%, a nie 100%, bo „Marzo" i „Stato" bywają jednym i drugim. */
function imieWlasne(forma) {
  const d = zDuzej.get(forma) || 0;
  const m = zMalej.get(forma) || 0;
  if (d + m < 5) return false;                 // za mało dowodów, zostawiamy
  return d / (d + m) >= 0.9;
}

const lista = [...male.entries()]
  .filter(([w, n]) => w.length > 1 && !imieWlasne(w) && n >= 3)
  .sort((a, b) => b[1] - a[1])
  .slice(0, ILE);

const suma = lista.reduce((s, [, n]) => s + n, 0);
const udzial = suma / tokenow;

const naglowek = `/* ============================================================
   ${ILE} najczęstszych włoskich form wyrazowych.
   PLIK GENEROWANY — nie edytuj ręcznie.

   Źródło:    Tatoeba, zdania włoskie (tatoeba.org)
   Licencja:  CC BY 2.0 FR — wymaga atrybucji, NIE wymaga share-alike
   Pobrano:   ${new Date().toISOString().slice(0, 10)}
   Korpus:    ${zdan.toLocaleString("pl")} zdań, ${tokenow.toLocaleString("pl")} tokenów
   Kryterium: forma zapisana z małej litery, min. 3 wystąpienia, bez imion
              własnych (>=90% wystąpień z wielkiej w środku zdania)
   Odtworzyć: node scripts/build_frequency.mjs <ita_sentences.tsv>

   Te ${ILE} form pokrywa ${(udzial * 100).toFixed(1)}% wszystkich tokenów korpusu.
   ============================================================ */
window.FREQUENCY = {
  source: "Tatoeba",
  license: "CC BY 2.0 FR",
  url: "https://tatoeba.org",
  sentences: ${zdan},
  tokens: ${tokenow},
  /* [forma, ile razy] — malejąco. Ranga to indeks + 1. */
  words: [
`;

const wiersze = lista.map(([w, n]) => `    [${JSON.stringify(w)},${n}]`).join(",\n");
writeFileSync(join(ROOT, "data", "core", "frequenza.js"), naglowek + wiersze + "\n  ]\n};\n");

console.log(`zdań: ${zdan}, tokenów: ${tokenow}, form różnych: ${male.size}`);
console.log(`zapisano ${ILE} form, pokrywają ${(udzial * 100).toFixed(1)}% tokenów`);
console.log(`pierwsze 12: ${lista.slice(0, 12).map(([w]) => w).join(" ")}`);
