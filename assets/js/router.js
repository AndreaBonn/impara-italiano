/* ============================================================
   router.js — adres w hashu, wybór widoku, sprzątanie po poprzednim.

   Wyjęte z app.js, który był czterema rzeczami naraz: routerem, powłoką
   (pasek boczny, motyw), przełącznikiem języka i startem aplikacji.
   Router jest jedyną z nich, która nie dotyka konkretnych elementów
   strony — czyta hash, woła widok i pilnuje dwóch kontraktów — więc
   jako jedyna daje się sprawdzić bez przeglądarki.

   Hash, nie History API: kurs ma działać także z file://, gdzie
   pushState nie ma dokąd pisać.

   Dwa kontrakty, oba jednorazowe i oba wołane WYŁĄCZNIE stąd:

   - `Views.onLeave` — widok, który zostawił coś chodzącego (odliczanie
     egzaminu, sekwencja dialogu), zapisuje tu sprzątanie. Router woła je
     przy następnej zmianie trasy i od razu kasuje, więc nikt nie musi
     pamiętać o wyrejestrowaniu. Bez tego zegar symulacji egzaminu żył
     dalej i po pół godzinie domykał sekcję na cudzym ekranie.
   - `Views.keepFocus` — domyślnie po zmianie trasy fokus ląduje na
     kontenerze treści, żeby czytnik ekranu przeczytał stronę od początku.
     Widok, który sam ustawia fokus (wyszukiwarka), podnosi tę flagę.

   `Router.onRender` to haczyk dla powłoki: app.js podpina tu zaznaczenie
   pozycji w pasku i zamknięcie szuflady. Router nie zna tych elementów
   i nie ma powodu ich znać.

   Skrypt klasyczny. Wymaga Views i Audio2 w chwili renderowania, nie
   w chwili wczytania.
   ============================================================ */
(function (global) {
  "use strict";

  var current = { route: "percorso", params: {} };

  /** Trasa, na którą wraca kurs, gdy adres jest pusty albo nieczytelny. */
  var DOMYSLNA = "percorso";

  function encode(route, params) {
    var q = Object.keys(params || {}).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    }).join("&");
    return "#/" + route + (q ? "?" + q : "");
  }

  /**
   * Adres → trasa i parametry. Nazwa trasy to same małe litery: wszystko,
   * co się w to nie mieści (pusty hash, adres z innej strony, ręczna
   * literówka), wraca ścieżką nauki zamiast pustym ekranem.
   */
  function decode(hash) {
    var m = /^#\/([a-z]+)(?:\?(.*))?$/.exec(hash || "");
    if (!m) return { route: DOMYSLNA, params: {} };
    var params = {};
    (m[2] || "").split("&").filter(Boolean).forEach(function (pair) {
      var kv = pair.split("=");
      params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || "");
    });
    return { route: m[1], params: params };
  }

  /**
   * Rysuje trasę. Nieznana trasa to nie jest awaria: kurs pokazuje ścieżkę
   * nauki. Zapomniany `<script>` widoku wygląda przez to jak działający
   * kurs z jedną pozycją menu prowadzącą gdzie indziej — dlatego pilnuje
   * tego osobny test (tests/dom/routes.spec.js), a nie sam router.
   */
  function render(route, params) {
    if (global.Audio2) global.Audio2.stop();

    var Views = global.Views;
    if (typeof Views.onLeave === "function") {
      var sprzatnij = Views.onLeave;
      Views.onLeave = null;
      sprzatnij();
    }
    current = { route: route, params: params };
    Views.keepFocus = false;

    var fn = Views[route];
    if (!fn) { Views[DOMYSLNA]({}); route = DOMYSLNA; }
    else fn(params);

    if (typeof Router.onRender === "function") Router.onRender(route, params);

    if (!Views.keepFocus) {
      var main = global.document.getElementById("main");
      main.focus({ preventScroll: true });
    }
  }

  /**
   * Przejście na trasę. Gdy adres się nie zmienia, przeglądarka nie zgłosi
   * `hashchange` i widok nie odświeżyłby się wcale — stąd rysowanie wprost.
   */
  function go(route, params) {
    var h = encode(route, params);
    if (global.location.hash === h) render(route, params || {});
    else global.location.hash = h;
  }

  function onHashChange() {
    var d = decode(global.location.hash);
    render(d.route, d.params);
  }

  var Router = {
    encode: encode,
    decode: decode,
    go: go,
    render: render,
    onHashChange: onHashChange,
    /** Trasa aktualnie na ekranie — do przerysowania po zmianie języka. */
    get current() { return current; },
    /** Podpinane przez powłokę (app.js), wołane po każdym renderowaniu. */
    onRender: null,
    listen: function () { global.addEventListener("hashchange", onHashChange); }
  };

  global.Router = Router;

})(window);
