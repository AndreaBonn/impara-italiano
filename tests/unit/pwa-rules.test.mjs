/* ============================================================
   Reguły ogłaszania nowej wersji (assets/js/pwa-rules.js).

   Trzy decyzje, każda broni przed czymś innym, i żadnej z nich nie widać
   na ekranie, gdy jest podjęta źle:

   - zapowiedź na pierwszej wizycie wygląda dla ucznia jak usterka
     („aktualizacja czego? dopiero wszedłem");
   - brak progu między sprawdzeniami zamienia przełączanie okien
     w serię żądań, których nikt nie policzy;
   - przeładowanie bez strażnika wpada w pętlę, a przeładowanie na
     pierwszej wizycie to mignięcie ekranu bez powodu.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function reguly() {
  return loadEngine({ files: ["assets/js/pwa-rules.js"] }).sandbox.PwaRules;
}

describe("czy zapowiedzieć nową wersję", () => {
  test("czekająca wersja na stronie, którą obsługiwał już worker: tak", () => {
    assert.equal(reguly().ogloszenie({ czeka: true, kontrolowana: true }), true);
  });

  /* Pierwszy worker też przechodzi przez „installed", więc bez tego warunku
     pierwsza wizyta w czystej przeglądarce kończyłaby się prośbą
     o zaktualizowanie strony otwartej przed chwilą. */
  test("pierwsza wizyta: nie, mimo że worker właśnie się zainstalował", () => {
    assert.equal(reguly().ogloszenie({ czeka: true, kontrolowana: false }), false);
  });

  test("nic nie czeka: nie ma czego ogłaszać", () => {
    assert.equal(reguly().ogloszenie({ czeka: false, kontrolowana: true }), false);
  });

  test("brak stanu nie wybucha i nie ogłasza", () => {
    assert.equal(reguly().ogloszenie(undefined), false);
  });
});

describe("czy wolno znów zapytać serwer", () => {
  const R = reguly();

  test("nigdy jeszcze nie pytaliśmy: tak", () => {
    assert.equal(R.sprawdzac(0, 1000), true);
  });

  test("zaraz po poprzednim pytaniu: nie", () => {
    assert.equal(R.sprawdzac(1000, 1000 + R.PRZERWA - 1), false);
  });

  test("po upływie przerwy: tak", () => {
    assert.equal(R.sprawdzac(1000, 1000 + R.PRZERWA), true);
  });

  /* Zmiana strefy czasowej albo poprawka zegara daje ujemny odstęp. Bez
     osobnej gałęzi wychodziłoby z tego „jeszcze nie teraz" na tak długo,
     jak duże było cofnięcie — czyli cisza aż do przeładowania strony. */
  test("zegar cofnięty: pytamy, zamiast czekać do skutku", () => {
    assert.equal(R.sprawdzac(5000, 1000), true);
  });

  test("próg da się podać z zewnątrz, domyślny nie jest jedyny", () => {
    assert.equal(R.sprawdzac(1000, 1500, 400), true);
    assert.equal(R.sprawdzac(1000, 1300, 400), false);
  });
});

describe("czy przeładować po przejęciu kontroli", () => {
  const R = reguly();

  test("strona pod starym workerem: tak, inaczej wykonuje stary kod pod nowymi plikami", () => {
    assert.equal(R.przeladowanie({ kontrolowana: true, juzPrzeladowana: false }), true);
  });

  test("pierwsza wizyta: nie, bo to pierwsze przejęcie, nie zmiana wersji", () => {
    assert.equal(R.przeladowanie({ kontrolowana: false, juzPrzeladowana: false }), false);
  });

  test("drugie zdarzenie nie przeładowuje po raz drugi", () => {
    assert.equal(R.przeladowanie({ kontrolowana: true, juzPrzeladowana: true }), false);
  });

  test("brak stanu nie wybucha i nie przeładowuje", () => {
    assert.equal(R.przeladowanie(null), false);
  });
});
