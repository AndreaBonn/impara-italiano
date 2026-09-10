/* ============================================================
   Nazwy nagrań (assets/js/recordings.js).

   Nazwa pliku nagrania to skrót FNV-1a 64-bit treści zdania, liczony
   DWA RAZY, w dwóch językach: `hash()` tutaj i `audio_hash()` w
   scripts/build_audio.py. Rozjazd między nimi nie wywraca niczego —
   po prostu każde nagranie staje się nieosiągalne, kurs cicho schodzi
   na syntezę systemową i brzmi jak espeak, a w konsoli nie ma ani
   jednego błędu. To jest dokładnie ten rodzaj awarii, którego nie widać
   w code review.

   Dlatego główny test nie sprawdza skrótu wobec drugiej implementacji
   napisanej tutaj (to potwierdzałoby samo siebie), tylko wobec PLIKÓW
   NA DYSKU, które wyprodukował Python: dla każdego zdania z
   scripts/audio-strings.json musi istnieć audio/<xx>/<skrót>.mp3.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { loadEngine, AUDIO, ROOT } from "./_harness.mjs";

/* Sam indeks, bez audio.js: nazwy plików nie zależą od tego, czy w
   przeglądarce jest syntezator, mikrofon czy cokolwiek innego. */
const PLIKI = AUDIO.slice(0, 2);
const R = loadEngine({ files: PLIKI }).sandbox.Recordings;

/** Lista zdań do nagrania, tak jak ją widzi scripts/extract_strings.mjs. */
const NAPISY = JSON.parse(readFileSync(join(ROOT, "scripts", "audio-strings.json"), "utf8"));
const WSZYSTKIE = NAPISY.primary.concat(NAPISY.other);

/** Ścieżka pliku nagrania, ta sama, którą buduje Recordings.url(). */
function plik(skrot) {
  return join(ROOT, "audio", skrot.slice(0, 2), skrot + ".mp3");
}

describe("skrót treści zdania", () => {
  test("ma szesnaście znaków szesnastkowych, zawsze", () => {
    ["Ciao", "a", "Buongiorno a tutti, come state oggi?"].forEach(s => {
      assert.match(R.hash(s), /^[0-9a-f]{16}$/, `zły kształt skrótu dla „${s}”`);
    });
  });

  test("jest deterministyczny", () => {
    assert.equal(R.hash("Buongiorno"), R.hash("Buongiorno"));
  });

  test("różne zdania dostają różne skróty, także przy różnicy jednej litery", () => {
    assert.notEqual(R.hash("nonno"), R.hash("nono"));
    assert.notEqual(R.hash("pesca"), R.hash("pèsca"));
  });

  test("wielkość liter i akcent zmieniają plik: to są różne wypowiedzi", () => {
    assert.notEqual(R.hash("Ciao"), R.hash("ciao"));
    assert.notEqual(R.hash("e"), R.hash("è"));
  });
});

describe("adres pliku", () => {
  /* Katalog z dwóch pierwszych znaków skrótu: 256 katalogów zamiast
     jednego z trzema i pół tysiąca plików w środku. */
  test("wchodzi do katalogu nazwanego dwoma pierwszymi znakami skrótu", () => {
    assert.equal(R.url("abcdef0123456789"), "audio/ab/abcdef0123456789.mp3");
  });

  test("adres zdania z kursu wskazuje plik, który istnieje", () => {
    const skrot = R.hash(R.norm(WSZYSTKIE[0]));
    assert.equal(R.url(skrot), "audio/" + skrot.slice(0, 2) + "/" + skrot + ".mp3");
    assert.ok(existsSync(join(ROOT, R.url(skrot))), "adres z Recordings.url() nie trafia w plik na dysku");
  });
});

describe("zgodność z Pythonem, który nagrał pliki", () => {
  /* Jeden test na cały zbiór, nie 3493 testy: interesuje nas, czy dwie
     implementacje skrótu się zgadzają, a to jest jedno pytanie. */
  test("każde zdanie do nagrania wskazuje istniejący plik mp3", () => {
    const brakuje = [];
    for (const s of WSZYSTKIE) {
      const skrot = R.hash(s);
      if (!existsSync(plik(skrot))) brakuje.push(`${skrot}  ${s.slice(0, 60)}`);
      if (brakuje.length >= 5) break;
    }
    assert.deepEqual(brakuje, [],
      "skrót z JS nie trafia w plik zrobiony przez Pythona — patrz hash() i audio_hash()");
  });

  test("indeks w przeglądarce zna te same zdania co pliki na dysku", () => {
    const nieznane = [];
    for (const s of WSZYSTKIE) {
      if (!R.has(s)) nieznane.push(s.slice(0, 60));
      if (nieznane.length >= 5) break;
    }
    assert.deepEqual(nieznane, [],
      "data/audio-index.js rozjechał się z katalogiem audio/ — przebuduj indeks");
  });

  test("liczba nagrań zgłoszona w ustawieniach zgadza się z listą do nagrania", () => {
    assert.equal(R.count, WSZYSTKIE.length);
    assert.equal(R.available, true);
  });
});

describe("normalizacja przed policzeniem skrótu", () => {
  /* Ta sama, co w extract_strings.mjs: zwężenie białych znaków i trim.
     Rozjazd znaczy, że zdanie z lekcji dostaje inny skrót niż plik,
     który dla niego nagrano. */
  test("nadmiarowe spacje i złamania wiersza nie zmieniają nagrania", () => {
    const zdanie = WSZYSTKIE[0];
    assert.equal(R.has("  " + zdanie + "  "), true, "obcięcie brzegów");
    assert.equal(R.has(zdanie.replace(/ /, "   ")), true, "zwężenie wielokrotnej spacji");
    assert.equal(R.has("\n" + zdanie), true, "złamanie wiersza to biały znak");
  });

  test("norm() zwęża i przycina, a z niczego robi pusty napis", () => {
    assert.equal(R.norm("  Ciao   a\ntutti "), "Ciao a tutti");
    assert.equal(R.norm(null), "");
    assert.equal(R.norm(undefined), "");
  });

  test("zdanie spoza kursu nagrania nie ma: indeks nie zgaduje", () => {
    assert.equal(R.has("questa frase non esiste in nessuna lezione del corso"), false);
  });

  test("puste wejście nie udaje, że ma nagranie", () => {
    assert.equal(R.has(""), false);
    assert.equal(R.has("   "), false);
    assert.equal(R.has(null), false);
  });
});

describe("wyszukiwanie binarne po indeksie", () => {
  /* Rekordy mają stałą długość, więc wyszukiwanie idzie po skoku, nie po
     indexOf: `indexOf` trafiłby w skrót zaczynający się w środku innego. */
  test("skrót nie z granicy rekordu nie jest trafieniem", () => {
    const pierwszy = R.hash(R.norm(WSZYSTKIE[0]));
    assert.equal(R.inIndex(pierwszy), true, "skrót istniejącego zdania");
    assert.equal(R.inIndex(pierwszy.slice(1) + "0"), false, "ten sam ciąg przesunięty o znak");
  });

  test("pusty skrót nie jest trafieniem", () => {
    assert.equal(R.inIndex(""), false);
    assert.equal(R.inIndex(null), false);
  });
});
