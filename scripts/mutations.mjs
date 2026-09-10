/* ============================================================
   mutations.mjs — czy testy jednostkowe widzą czerwone
   Uruchomienie:  node scripts/mutations.mjs [--tylko <fragment opisu>]

   Każda pozycja w tabeli niżej psuje JEDNĄ decyzję w silniku i nazywa
   plik testów, który ma się wtedy wywrócić. Mutacja, po której suita
   zostaje zielona, znaczy, że tej decyzji nie pilnuje nikt.

   DLACZEGO TO NIE JEST TO SAMO CO POKRYCIE. `coverage.mjs` mówi, że linia
   się WYKONAŁA. Wykonanie nie jest sprawdzeniem: asercja
   `assert.ok(!out.includes("js-play"))` wykonuje cały generator i przechodzi
   także wtedy, gdy generator nie produkuje NICZEGO. Trzy takie asercje
   napisałem w dniu, w którym powstała ta tabela, i wszystkie trzy miały
   100% pokrycia. Wyszły dopiero tutaj:

   - pusty blok audio wchodzący do sekcji czytania (liczyłem przyciski,
     a nie blok, który je opakowuje);
   - `cils-h` jako podciąg łapiący też `cils-hint`;
   - `cils.limit` jako podciąg łapiący `cils.limitLabel`, więc całe
     ostrzeżenie o granicy symulatora mogło zniknąć na zielono.

   ZASIĘG JEST WĄSKI I MA BYĆ ZADEKLAROWANY. Tabela pokrywa cztery pliki
   (`cils-html.js`, `lemma-morf.js`, `pwa-rules.js`, `pwa.js`) z sześćdziesięciu
   z górą w `assets/js/`. Wynik „34/34" nie znaczy „silnik jest sprawdzony",
   znaczy „te 34 decyzje są sprawdzone". Dopisanie pliku z czystymi funkcjami
   to dobry moment na dopisanie tu wiersza; obowiązku pokrycia całego silnika
   nie ma.

   Wyjątkiem od „czystych funkcji" jest `pwa.js`, który czystą funkcją nie
   jest: siedzi w nim PODPIĘCIE reguł do stanów service workera, a każda
   pomyłka w tym podpięciu wygląda na ekranie jak brak aktualizacji, czyli
   jak nic. Cztery mutacje niżej to cztery sposoby, na które ta funkcja
   przestaje działać bez jednego czerwonego testu.

   NIE DOTYKA PLIKÓW W DRZEWIE ROBOCZYM. Zmutowana wersja leży w katalogu
   tymczasowym, a `tests/unit/_harness.mjs` czyta ją przez `LINGUAI_PODMIANA`.
   Pierwsza wersja mutowała plik w miejscu i przywracała go w `finally`, z
   uchwytem na SIGINT — uchwyt był bezużyteczny, bo cała bramka jest
   synchroniczna i pętla zdarzeń nie dochodzi do głosu przed jej końcem:
   sygnał czekał w kolejce do samego końca przebiegu. Gorzej, samo
   zarejestrowanie uchwytu wyłączyło domyślne ubicie procesu, więc Ctrl+C
   przestawał zatrzymywać skrypt. Teraz nie ma czego przywracać.

   Trzy sposoby, na które ta bramka kończy się błędem (sprawdzone):
   mutacja bez czerwonego, fragment nieobecny w pliku (tabela zgniła po
   refaktorze) i fragment występujący wielokrotnie (podmiana trafiłaby w
   pierwsze wystąpienie i mierzyłaby co innego, niż mówi opis).
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
 * Mutacje. `z` musi występować w pliku DOKŁADNIE RAZ — przy dwóch
 * wystąpieniach podmiana trafiłaby w pierwsze z nich i nikt by nie
 * zauważył, że mutacja mierzy co innego, niż mówi jej opis.
 */
const MUTACJE = [
  /* ---- cils-html.js: siatka odpowiedzi ---- */
  { plik: HTML, test: T_HTML, opis: "radio: jedna grupa na całą próbę",
    z: 'var nome = "p" + n + "i" + i;', na: 'var nome = "p" + n;' },
  { plik: HTML, test: T_HTML, opis: "cloze: luka po każdym kawałku tekstu",
    z: "var buco = i < (p.items || []).length", na: "var buco = i < (p.testo || []).length" },
  { plik: HTML, test: T_HTML, opis: "odsłuch: blok audio także w czytaniu",
    z: 'if (sez.id === "ascolto") testa += ascolti(p, n);', na: "testa += ascolti(p, n);" },
  { plik: HTML, test: T_HTML, opis: "scritta: wszystkie tracce wybrane naraz",
    z: '(i === 0 ? " checked" : "") + "> " + esc(tr.it)', na: '" checked> " + esc(tr.it)' },
  { plik: HTML, test: T_HTML, opis: "orale: przycisk nagrywania bez mikrofonu",
    z: "(powod ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :",
    na: "(false ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :" },
  { plik: HTML, test: T_HTML, opis: "orale: żaden temat nie jest wybrany z góry",
    z: '(i === 0 ? " checked" : "") + "> " + esc(a)', na: '"> " + esc(a)' },

  /* ---- cils-html.js: lista i podsumowanie ---- */
  { plik: HTML, test: T_HTML, opis: "lista: ostrzeżenie o granicy usunięte",
    z: 'esc(t("cils.limit")) + "</div>" +', na: '"</div>" +' },
  { plik: HTML, test: T_HTML, opis: "lista: tylko pierwsza symulacja",
    z: "(symulacje || []).map(function (s) {", na: "(symulacje || []).slice(0, 1).map(function (s) {" },
  { plik: HTML, test: T_HTML, opis: "lista: przycisk startu bez id symulacji",
    z: 'data-id="', na: 'data-sim="' },
  { plik: HTML, test: T_HTML, opis: "abilità: brak oznaczenia wyczerpanego czasu",
    z: 'var scad = czyScadla(a) ? " " + t("cils.expiredMark") : "";', na: 'var scad = "";' },
  { plik: HTML, test: T_HTML, opis: "abilità: zawsze ptaszek, nigdy krzyżyk",
    z: 'd.punti + " / " + d.max + " " + (d.sopraSoglia ? "✓" : "✗")',
    na: 'd.punti + " / " + d.max + " ✓"' },
  { plik: HTML, test: T_HTML, opis: "abilità: niemierzona pokazana jako wynik",
    z: "var val = d.misurata", na: "var val = true" },
  { plik: HTML, test: T_HTML, opis: "podsumowanie: werdykt zawsze nierozstrzygnięty",
    z: 'esc(t(esito.verdetto === "sotto-soglia" ? "cils.verdictBelow" : "cils.verdictUnknown"))',
    na: 'esc(t("cils.verdictUnknown"))' },
  { plik: HTML, test: T_HTML, opis: "podsumowanie: bez źródła progu",
    z: 'esc(t("cils.thresholdSource")) + "</p></div>" +\n      scritta',
    na: '"</p></div>" +\n      scritta' },
  { plik: HTML, test: T_HTML, opis: "podsumowanie: karty produkcji nigdy nie wchodzą",
    z: "scritta(pisemna) + orale(ustna) +", na: '"" +' },
  { plik: HTML, test: T_HTML, opis: "podsumowanie: bez powrotu do listy",
    z: 'class="btn btn--ghost js-list"', na: 'class="btn btn--ghost js-brak"' },
  { plik: HTML, test: T_HTML, opis: "pisemna: karta dla nietkniętej sekcji",
    z: 'if (!pisemna) return "";', na: 'if (false) return "";' },
  { plik: HTML, test: T_HTML, opis: "pisemna: etykieta wymagania zamieniona na klucz",
    z: "esc(wym.etichetta || r.key)", na: "esc(r.key)" },

  /* ---- lemma-morf.js: reguły formy ---- */
  { plik: MORF, test: T_MORF, opis: "slowa: posiłkownik ginie też samotny",
    z: "if (cz.length < 2) return cz;", na: "if (false) return cz;" },
  { plik: MORF, test: T_MORF, opis: "enklityki: próg długości za krótki",
    z: "if (w.length <= z.length + 2) return;", na: "if (w.length <= z.length) return;" },
  { plik: MORF, test: T_MORF, opis: "enklityki: bezokolicznik bez odbudowy -e",
    z: 'if (/[aei]r$/.test(rdzen)) out.push(rdzen + "e");', na: "if (false) out.push(rdzen);" },
  { plik: MORF, test: T_MORF, opis: "reguła: amiche schodzi w nieistniejące słowo",
    z: '[/che$/, "ca"],      // amiche -> amica', na: '[/che$/, "cx"],      // amiche -> amica' },
  { plik: MORF, test: T_MORF, opis: "stopień najwyższy: bez odbudowy twardego k",
    z: '[/chissim[oaie]$/, "co"],', na: '[/chissim[oaie]$/, "o"],' },
  { plik: MORF, test: T_MORF, opis: "bezokolicznik: formy zwrotne odrzucone",
    z: "return /^[a-zàèéìòù]+(are|ere|ire|arsi|ersi|irsi)$/",
    na: "return /^[a-zàèéìòù]+(are|ere|ire)$/" },
  { plik: MORF, test: T_MORF, opis: "funkcyjne: bez obniżenia wielkości liter",
    z: "return !!funkcyjneSet[String(w).toLowerCase()];", na: "return !!funkcyjneSet[String(w)];" },
  { plik: MORF, test: T_MORF, opis: "funkcyjne: liczebniki poza zbiorem",
    z: "FUNKCYJNE.concat(LICZEBNIKI).forEach", na: "FUNKCYJNE.forEach" },
  { plik: MORF, test: T_MORF, opis: "akcent: toniczny nie jest zdejmowany",
    z: "return w.replace(/[àáèéìíòóùú]/g, function (c) { return AKCENTY[c] || c; });",
    na: "return w;" },

  /* ---- pwa-rules.js: reguły ogłaszania nowej wersji ---- */
  { plik: REG, test: T_REG, opis: "zapowiedź: pierwsza wizyta jako aktualizacja",
    z: "return !!stan.czeka && !!stan.kontrolowana;", na: "return !!stan.czeka;" },
  { plik: REG, test: T_REG, opis: "próg: cofnięty zegar zamyka pytania do skutku",
    z: "if (teraz < ostatnie) return true;", na: "if (false) return true;" },
  { plik: REG, test: T_REG, opis: "przeładowanie: bez strażnika pętli",
    z: "return !!stan.kontrolowana && !stan.juzPrzeladowana;", na: "return !!stan.kontrolowana;" },

  /* ---- pwa.js: podpięcie reguł do stanów przeglądarki ---- */

  /* Usterka pierwsza z brzegu i najtrudniejsza do zobaczenia: w chwili
     `updatefound` worker jest w „installing", a `waiting` jest puste. */
  { plik: PWA, test: T_PWA, opis: "zapowiedź czytana w updatefound, nie po instalacji",
    z: 'reg.addEventListener("updatefound", function () { sledz(reg.installing); });',
    na: 'reg.addEventListener("updatefound", function () { zapowiedz(reg.waiting); });' },
  { plik: PWA, test: T_PWA, opis: "aktualizuj przeładowuje od razu, zamiast prosić workera",
    z: "czeka.postMessage({ typ: \"przejmij\" });", na: "global.location.reload();" },
  { plik: PWA, test: T_PWA, opis: "aktualizuj prosi workera z chwili zapowiedzi, nie bieżącego",
    z: "var czeka = (rejestracja && rejestracja.waiting) || worker;", na: "var czeka = worker;" },
  { plik: PWA, test: T_PWA, opis: "rejestracja tylko na „load”, bez sprawdzenia readyState",
    z: 'if (global.document.readyState === "complete") register();', na: "if (false) register();" },
  { plik: PWA, test: T_PWA, opis: "pytanie do serwera bez progu",
    z: "if (!global.PwaRules.sprawdzac(ostatnieSprawdzenie, teraz)) return false;",
    na: "if (false) return false;" }
];

/* ---------------- Uruchamianie ---------------- */

const argv = process.argv.slice(2);
const tylkoIdx = argv.indexOf("--tylko");
const TYLKO = tylkoIdx >= 0 ? argv[tylkoIdx + 1] : null;

const zrodla = new Map();
for (const m of MUTACJE) {
  if (!zrodla.has(m.plik)) zrodla.set(m.plik, readFileSync(join(ROOT, m.plik), "utf8"));
}

/** Ile razy napis występuje w pliku. */
function ile(hay, igla) {
  return hay.split(igla).length - 1;
}

/**
 * Jeden przebieg pliku testów, z opcjonalną podmianą pliku silnika.
 * @param {string} test  ścieżka pliku testów
 * @param {object} [podmiana] mapa „ścieżka w repo" -> „ścieżka zmutowanej kopii"
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
  /* Zielona baseline jest warunkiem sensu: z czerwonej suity nie da się
     odczytać, czy to mutacja ją wywróciła, czy była już rozbita. */
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

/* ---------------- Raport ---------------- */

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
