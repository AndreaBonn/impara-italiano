/* ============================================================
   build_frequency.mjs — a frequency list of Italian word forms.

   What for: so the student can see HOW MUCH of real Italian they already
   know. "You know 847 of the 2000 most frequent words, that is roughly
   three quarters of what occurs in a conversation" says more than any XP
   counter, because it measures the language and not the application.

   SOURCE AND LICENCE. Tatoeba, Italian sentences, **CC BY 2.0 FR** —
   attribution without share-alike, verified at the source
   (tatoeba.org/downloads), not second hand.

   Why NOT Leipzig, even though the plan pointed at it: the download page
   sits behind an anti-bot challenge, the archive contains no licence file,
   and secondary sources disagree between CC BY 4.0 and CC BY-SA 4.0. The
   difference between them is exactly the criterion Leipzig was chosen for —
   share-alike infects the repository. A licence is not something you guess.

   Also rejected: Paisà and WaCKy (CC BY-NC-SA), the OpenSubtitles lists
   (CC BY-SA), the CC0 subset of Tatoeba (19 Italian sentences — too few).

   A LIMITATION WORTH KNOWING. Tatoeba sentences are learner material, often
   translated from English, with the "Tom and Mary" family in the
   background. We filter out the forms that NEVER appear in lower case —
   that removes proper names — but the distribution is still closer to
   textbook language than to a newspaper. For a course that is rather an
   advantage; it is worth remembering when reading the result.

   Input: the file from tatoeba.org/downloads, the "per language" section,
   ita. It is not in the repository (47 MB) and there is no reason for it
   to be.

       curl -sS https://downloads.tatoeba.org/exports/per_language/ita/ita_sentences.tsv.bz2 \
         | bzip2 -dc > /tmp/ita.tsv
       node scripts/build_frequency.mjs /tmp/ita.tsv
   ============================================================ */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ILE = 2000;                       // how many forms go into the course (C4 of the plan)

const zrodlo = process.argv[2];
if (!zrodlo) {
  console.error("użycie: node scripts/build_frequency.mjs <ita_sentences.tsv>");
  process.exit(2);
}

/* The same tokenisation as when tapping a word in a reading: if they drifted
   apart, the coverage counter would count words other than the ones the
   student can click. */
function tokeny(zdanie) {
  return zdanie
    .replace(/[’']/g, "'")
    .split(/[^a-zA-ZàáèéìíòóùúçÀÁÈÉÌÍÒÓÙÚÇ']+/)
    .filter(Boolean);
}

const male = new Map();      // the lower-case form -> counter
const zDuzej = new Map();    // how many times the form appeared capitalised
const zMalej = new Map();    // how many times in lower case
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
    /* The first word of a sentence is always capitalised, so it does not
       count as evidence of a proper name. */
    if (i > 0) {
      const duza = w[0] !== low[0];
      const mapa = duza ? zDuzej : zMalej;
      mapa.set(low, (mapa.get(low) || 0) + 1);
    }
  });
}

/* A proper name: inside a sentence practically always capitalised. The
   threshold is 90%, not 100%, because "Marzo" and "Stato" are sometimes one
   and sometimes the other. */
function imieWlasne(forma) {
  const d = zDuzej.get(forma) || 0;
  const m = zMalej.get(forma) || 0;
  if (d + m < 5) return false;                 // too little evidence, we keep it
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
  /* [form, count] — descending. The rank is the index + 1. */
  words: [
`;

const wiersze = lista.map(([w, n]) => `    [${JSON.stringify(w)},${n}]`).join(",\n");
writeFileSync(join(ROOT, "data", "core", "frequenza.js"), naglowek + wiersze + "\n  ]\n};\n");

console.log(`zdań: ${zdan}, tokenów: ${tokenow}, form różnych: ${male.size}`);
console.log(`zapisano ${ILE} form, pokrywają ${(udzial * 100).toFixed(1)}% tokenów`);
console.log(`pierwsze 12: ${lista.slice(0, 12).map(([w]) => w).join(" ")}`);
