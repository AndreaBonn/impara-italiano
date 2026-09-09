/* ============================================================
   Nazwy nagrań i ocena wymowy (assets/js/audio.js).

   Nazwa pliku nagrania to skrót FNV-1a 64-bit treści zdania, liczony
   DWA RAZY, w dwóch językach: `hashText()` tutaj i `audio_hash()` w
   scripts/build_audio.py. Rozjazd między nimi nie wywraca niczego —
   po prostu każde nagranie staje się nieosiągalne, kurs cicho schodzi
   na syntezę systemową i brzmi jak espeak, a w konsoli nie ma ani
   jednego błędu. To jest dokładnie ten rodzaj awarii, którego nie widać
   w code review.

   Dlatego główny test nie sprawdza skrótu wobec drugiej implementacji
   napisanej tutaj (to potwierdzałoby samo siebie), tylko wobec PLIKÓW
   NA DYSKU, które wyprodukował Python: dla każdego z 3493 zdań z
   scripts/audio-strings.json musi istnieć audio/<xx>/<skrót>.mp3.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { loadEngine, CORE, ROOT } from "./_harness.mjs";

const PLIKI = [...CORE, "data/audio-index.js", "assets/js/audio.js"];

function silnik() {
  const box = loadEngine({ files: PLIKI });
  box.Core.load();
  return box;
}

const A = silnik().sandbox.Audio2;

/** Lista zdań do nagrania, tak jak ją widzi scripts/extract_strings.mjs. */
const NAPISY = JSON.parse(readFileSync(join(ROOT, "scripts", "audio-strings.json"), "utf8"));
const WSZYSTKIE = NAPISY.primary.concat(NAPISY.other);

/** Ścieżka pliku nagrania, ta sama, którą buduje audio.js. */
function plik(skrot) {
  return join(ROOT, "audio", skrot.slice(0, 2), skrot + ".mp3");
}

describe("skrót treści zdania", () => {
  test("ma szesnaście znaków szesnastkowych, zawsze", () => {
    ["Ciao", "a", "Buongiorno a tutti, come state oggi?"].forEach(s => {
      assert.match(A.hashText(s), /^[0-9a-f]{16}$/, `zły kształt skrótu dla „${s}”`);
    });
  });

  test("jest deterministyczny", () => {
    assert.equal(A.hashText("Buongiorno"), A.hashText("Buongiorno"));
  });

  test("różne zdania dostają różne skróty, także przy różnicy jednej litery", () => {
    assert.notEqual(A.hashText("nonno"), A.hashText("nono"));
    assert.notEqual(A.hashText("pesca"), A.hashText("pèsca"));
  });

  test("wielkość liter i akcent zmieniają plik: to są różne wypowiedzi", () => {
    assert.notEqual(A.hashText("Ciao"), A.hashText("ciao"));
    assert.notEqual(A.hashText("e"), A.hashText("è"));
  });
});

describe("zgodność z Pythonem, który nagrał pliki", () => {
  /* Jeden test na cały zbiór, nie 3493 testy: interesuje nas, czy dwie
     implementacje skrótu się zgadzają, a to jest jedno pytanie. */
  test("każde zdanie do nagrania wskazuje istniejący plik mp3", () => {
    const brakuje = [];
    for (const s of WSZYSTKIE) {
      const skrot = A.hashText(s);
      if (!existsSync(plik(skrot))) brakuje.push(`${skrot}  ${s.slice(0, 60)}`);
      if (brakuje.length >= 5) break;
    }
    assert.deepEqual(brakuje, [],
      "skrót z JS nie trafia w plik zrobiony przez Pythona — patrz hashText() i audio_hash()");
  });

  test("indeks w przeglądarce zna te same zdania co pliki na dysku", () => {
    const nieznane = [];
    for (const s of WSZYSTKIE) {
      if (!A.hasNatural(s)) nieznane.push(s.slice(0, 60));
      if (nieznane.length >= 5) break;
    }
    assert.deepEqual(nieznane, [],
      "data/audio-index.js rozjechał się z katalogiem audio/ — przebuduj indeks");
  });

  test("liczba nagrań zgłoszona w ustawieniach zgadza się z listą do nagrania", () => {
    assert.equal(A.naturalCount, WSZYSTKIE.length);
    assert.equal(A.naturalAvailable, true);
  });
});

describe("normalizacja przed policzeniem skrótu", () => {
  /* Ta sama, co w extract_strings.mjs: zwężenie białych znaków i trim.
     Rozjazd znaczy, że zdanie z lekcji dostaje inny skrót niż plik,
     który dla niego nagrano. */
  test("nadmiarowe spacje i złamania wiersza nie zmieniają nagrania", () => {
    const zdanie = WSZYSTKIE[0];
    assert.equal(A.hasNatural("  " + zdanie + "  "), true, "obcięcie brzegów");
    assert.equal(A.hasNatural(zdanie.replace(/ /, "   ")), true, "zwężenie wielokrotnej spacji");
    assert.equal(A.hasNatural("\n" + zdanie), true, "złamanie wiersza to biały znak");
  });

  test("zdanie spoza kursu nagrania nie ma: indeks nie zgaduje", () => {
    assert.equal(A.hasNatural("questa frase non esiste in nessuna lezione del corso"), false);
  });

  test("puste wejście nie udaje, że ma nagranie", () => {
    assert.equal(A.hasNatural(""), false);
    assert.equal(A.hasNatural("   "), false);
    assert.equal(A.hasNatural(null), false);
  });
});

describe("ocena wymowy", () => {
  test("trafiona wypowiedź daje sto", () => {
    assert.equal(A.scoreSpeech("buongiorno a tutti", [], "Buongiorno a tutti"), 100);
  });

  test("liczy się najlepsza z alternatyw rozpoznawania, nie pierwsza", () => {
    const wynik = A.scoreSpeech("bon giorno", ["buongiorno a tutti"], "Buongiorno a tutti");
    assert.equal(wynik, 100, "rozpoznawanie mowy oddaje kilka wariantów i liczy się najlepszy");
  });

  test("wypowiedź obok tematu daje wynik niski, nie zero z definicji", () => {
    const wynik = A.scoreSpeech("completamente diverso", [], "Buongiorno a tutti");
    assert.ok(wynik < 40, `oczekiwane poniżej 40, było ${wynik}`);
    assert.ok(wynik >= 0);
  });

  test("brak rozpoznanej mowy daje zero, a nie wyjątek", () => {
    assert.equal(A.scoreSpeech("", [], "Buongiorno"), 0);
    assert.equal(A.scoreSpeech(null, null, "Buongiorno"), 0);
  });

  /* Próg zaliczenia w ćwiczeniu „speak" to 70. Ta granica jest w
     exercises-voice.js, ale sens ma tylko razem ze skalą stąd. */
  test("drobna pomyłka zostaje powyżej progu zaliczenia", () => {
    assert.ok(A.scoreSpeech("buongiorno a tutte", [], "Buongiorno a tutti") >= 70);
  });
});
