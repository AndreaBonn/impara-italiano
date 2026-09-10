/* ============================================================
   Adres, wybór widoku i sprzątanie po poprzednim (assets/js/router.js).

   Router był dotąd częścią app.js i chodził wyłącznie w przeglądarce, więc
   jedyne, co go sprawdzało, to testy DOM — a te wchodzą przez interfejs,
   czyli nigdy przez adres wpisany ręcznie ani przez adres uszkodzony.

   Trzy rzeczy, których złamanie nie wygląda na awarię:
   - nieznana trasa ma pokazać ścieżkę nauki, a nie pusty ekran;
   - `Views.onLeave` ma polecieć DOKŁADNIE RAZ i zniknąć: to jedyne miejsce,
     w którym zatrzymuje się odliczanie egzaminu po wyjściu z trasy;
   - fokus po zmianie trasy idzie na treść, chyba że widok sam go ustawił.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

/**
 * Obiekt z piaskowniczego realmu porównany strukturą, nie prototypem:
 * `node:vm` ma własny Object.prototype, więc deepEqual na obiekcie
 * stamtąd zgłasza „same structure but not reference-equal" i mówi to
 * o KAŻDYM wyniku, także poprawnym.
 */
function struktura(o) { return JSON.parse(JSON.stringify(o)); }

/**
 * Router z atrapą widoków. Widok jest funkcją, więc atrapa to funkcja
 * zapisująca, że ją zawołano i z czym — nic więcej nie jest potrzebne.
 *
 * Audio2 też jest atrapą, i to celowo: pytanie „czy router ucisza dźwięk
 * przy każdej zmianie trasy" jest o routerze, a wciągnięcie tu prawdziwego
 * silnika dźwięku zamieniłoby je w pytanie o dźwięk.
 */
function silnik(trasy) {
  const box = loadEngine({ files: [...CORE, "assets/js/router.js"] });
  const wywolania = [];
  const uciszenia = [];
  const Views = { onLeave: null, keepFocus: false };

  (trasy || ["percorso"]).forEach((nazwa) => {
    Views[nazwa] = function (params) { wywolania.push({ route: nazwa, params: params }); };
  });

  box.sandbox.Views = Views;
  box.sandbox.Audio2 = { stop() { uciszenia.push(1); } };
  box.el("main");
  return { box: box, R: box.sandbox.Router, Views: Views, wywolania: wywolania, uciszenia: uciszenia };
}

describe("adres", () => {
  test("trasa bez parametrów to sam adres", () => {
    const { R } = silnik();
    assert.equal(R.encode("percorso"), "#/percorso");
    assert.equal(R.encode("percorso", {}), "#/percorso");
  });

  test("parametry wchodzą w adres i wracają z niego bez zmian", () => {
    const { R } = silnik();
    const adres = R.encode("lezione", { id: "a1-u01-l1", level: "A1" });
    assert.equal(adres, "#/lezione?id=a1-u01-l1&level=A1");
    assert.deepEqual(struktura(R.decode(adres)), { route: "lezione", params: { id: "a1-u01-l1", level: "A1" } });
  });

  test("wartość ze znakiem specjalnym przeżywa obie strony", () => {
    /* Wyszukiwarka wysyła w adresie to, co uczeń wpisał: spacja, znak
       zapytania i ampersand rozcięłyby adres, gdyby nie kodowanie. */
    const { R } = silnik();
    const fraza = "un caffè & un tè?";
    const wrocilo = R.decode(R.encode("cerca", { q: fraza })).params.q;
    assert.equal(wrocilo, fraza);
  });

  test("adres nieczytelny wraca ścieżką nauki, nie pustym ekranem", () => {
    const { R } = silnik();
    const domyslna = { route: "percorso", params: {} };
    assert.deepEqual(struktura(R.decode("")), domyslna, "pusty hash");
    assert.deepEqual(struktura(R.decode("#/")), domyslna, "sama kreska");
    assert.deepEqual(struktura(R.decode("#/LEZIONE")), domyslna, "trasy są małymi literami");
    assert.deepEqual(struktura(R.decode("#coś-cudzego")), domyslna, "adres z innej strony");
    assert.deepEqual(struktura(R.decode(null)), domyslna);
  });

  test("parametr bez wartości jest pustym napisem, nie brakiem klucza", () => {
    const { R } = silnik();
    assert.deepEqual(struktura(R.decode("#/lezione?id=")), { route: "lezione", params: { id: "" } });
  });
});

describe("przejście na trasę", () => {
  test("zmiana adresu rysuje widok przez hashchange, nie wprost", () => {
    const { R, box, wywolania } = silnik(["percorso", "lezione"]);
    R.listen();
    R.go("lezione", { id: "a1-u01-l1" });

    assert.equal(box.okno.location.hash, "#/lezione?id=a1-u01-l1");
    assert.deepEqual(struktura(wywolania), [{ route: "lezione", params: { id: "a1-u01-l1" } }]);
  });

  test("ten sam adres rysuje mimo wszystko: przeglądarka nie zgłosi zmiany", () => {
    /* Klik w pozycję paska, na której już jesteśmy, ma odświeżyć ekran.
       Bez tej gałęzi nie działo się nic i wyglądało to na zawieszenie. */
    const { R, wywolania } = silnik(["percorso"]);
    R.listen();
    R.go("percorso");
    R.go("percorso");

    assert.equal(wywolania.length, 2);
  });

  test("wejście z zakładki rysuje trasę z adresu", () => {
    const { R, box, wywolania } = silnik(["percorso", "lezione"]);
    R.listen();
    box.okno.idzNa("#/lezione?id=a1-u01-l1");

    assert.deepEqual(struktura(wywolania), [{ route: "lezione", params: { id: "a1-u01-l1" } }]);
  });

  test("trasa bez widoku pokazuje ścieżkę nauki", () => {
    const { R, wywolania } = silnik(["percorso"]);
    R.render("niemategowidoku", {});

    assert.deepEqual(struktura(wywolania), [{ route: "percorso", params: {} }]);
    assert.equal(R.current.route, "niemategowidoku",
      "adres zostaje ten, o który poproszono: inaczej kurs po cichu zmieniałby adres w pasku");
  });
});

describe("sprzątanie po poprzednim widoku", () => {
  test("onLeave leci dokładnie raz i znika", () => {
    /* Symulacja egzaminu ma odliczanie na setInterval. Bez tego haczyka
       zegar żył po wyjściu z trasy i po pół godzinie domykał sekcję na
       cudzym ekranie. Dwa wywołania byłyby drugim błędem, nie połową. */
    const { R, Views, uciszenia } = silnik(["percorso", "lezione"]);
    let posprzatane = 0;
    Views.onLeave = function () { posprzatane++; };

    R.render("lezione", {});
    assert.equal(posprzatane, 1);
    assert.equal(Views.onLeave, null, "kontrakt jest jednorazowy");

    R.render("percorso", {});
    assert.equal(posprzatane, 1, "nikt nie musi pamiętać o wyrejestrowaniu");
    assert.equal(uciszenia.length, 2, "każde renderowanie ucisza też dźwięk");
  });

  test("widok, który nic nie zostawił, nie wywraca zmiany trasy", () => {
    const { R, wywolania } = silnik(["percorso"]);
    R.render("percorso", {});
    assert.equal(wywolania.length, 1);
  });
});

describe("fokus po zmianie trasy", () => {
  test("domyślnie ląduje na treści, żeby czytnik ekranu zaczął od początku", () => {
    const { R, box } = silnik(["percorso"]);
    R.render("percorso", {});
    assert.equal(box.el("main").focused, 1);
  });

  test("widok, który sam ustawia fokus, zatrzymuje go u siebie", () => {
    /* Wyszukiwarka ustawia fokus na polu wpisywania. Router zabrałby jej
       go zaraz po tym, więc deklaruje się to flagą, nie wyścigiem z setTimeout. */
    const { R, box, Views } = silnik(["cerca"]);
    Views.cerca = function () { Views.keepFocus = true; };

    R.render("cerca", {});
    assert.equal(box.el("main").focused, 0);
  });

  test("flaga nie przechodzi na następny widok", () => {
    const { R, box, Views } = silnik(["cerca", "percorso"]);
    Views.cerca = function () { Views.keepFocus = true; };

    R.render("cerca", {});
    R.render("percorso", {});
    assert.equal(box.el("main").focused, 1, "drugi widok fokusu nie deklarował");
  });
});

describe("haczyk powłoki", () => {
  test("onRender dostaje trasę, która naprawdę się narysowała", () => {
    const { R, wywolania } = silnik(["percorso", "lezione"]);
    const widziane = [];
    R.onRender = function (route) { widziane.push(route); };

    R.render("lezione", {});
    R.render("niemategowidoku", {});

    assert.deepEqual(widziane, ["lezione", "percorso"],
      "pasek ma zaznaczyć to, co widać, a nie trasę, o którą poproszono");
    assert.equal(wywolania.length, 2);
  });

  test("brak haczyka nie jest awarią: router działa bez powłoki", () => {
    const { R, wywolania } = silnik(["percorso"]);
    R.onRender = null;
    R.render("percorso", {});
    assert.equal(wywolania.length, 1);
  });
});
