/* ============================================================
   anki.js — talia wychodzi i wchodzi w formacie, który czyta Anki.

   Po co: żeby uczeń nie był zakładnikiem tego kursu. Eksport stanu w JSON
   już jest, ale czyta go wyłącznie ta aplikacja; TSV czyta Anki, arkusz
   kalkulacyjny i każdy inny program do fiszek. Dopiero to jest wyjście.

   CZEGO EKSPORT NIE NIESIE, i trzeba to powiedzieć uczniowi przed
   kliknięciem, nie w README: **harmonogramu powtórek**. Wychodzą słowa i
   tłumaczenia, nie terminy. Stabilność i trudność FSRS opisują pamięć
   zmierzoną w TYM kursie i w Anki nie znaczą nic — a milczenie o tym
   kończy się utratą roku powtórek przy imporcie „na czysto".

   Trzy rzeczy, które w tym formacie idą źle, jeśli się o nich nie myśli:

   1. SEPARATOR W TREŚCI. Włoskie zdanie z przecinkiem albo z cudzysłowem
      rozjeżdża kolumny. Stąd cytowanie w stylu RFC 4180 i tabulator jako
      separator: tabulatora w treści fiszki praktycznie nie ma, przecinek
      jest w co trzeciej.
   2. PREFIKS FORMUŁY. Pole zaczynające się od `=`, `+`, `-` albo `@`
      wykonuje się jako formuła, gdy ktoś otworzy plik w arkuszu. Talia
      dostana od kogoś staje się wtedy wektorem. Neutralizujemy
      apostrofem, świadomie płacąc jednym znakiem widocznym w Anki.
   3. HTML. Anki domyślnie interpretuje pola jako HTML. Deklarujemy
      `#html:false`, żeby „<" w zdaniu zostało znakiem, a nie tagiem.

   Moduł jest CZYSTY: napisy na wejściu, napisy na wyjściu. Bez DOM, bez
   stanu, bez Core. Skrypt klasyczny.
   ============================================================ */
(function (global) {
  "use strict";

  var Anki = {};

  var SEP = "\t";
  var NL = "\n";

  /* Anki 2.1.55+ czyta te dyrektywy z pierwszych linii pliku i dzięki nim
     uczeń nie musi nic ustawiać w kreatorze importu. */
  var NAGLOWEK = [
    "#separator:tab",
    "#html:false",
    /* Nazwy kolumn MUSZĄ być nazwami pól typu notatki, bo po nich Anki
       mapuje kolumny automatycznie. Przy „Italiano/Traduzione" import
       przechodził bez błędu i zostawiał drugie pole PUSTE — pierwsza
       wersja tak właśnie robiła, a widać to dopiero po zajrzeniu do
       zaimportowanej notatki, nie w komunikacie. */
    "#notetype:Basic",
    "#columns:Front\tBack\tTags",
    "#tags column:3"
  ];

  /** Znaki, od których arkusz zaczyna liczyć formułę. */
  var FORMULA = /^[=+\-@\t\r]/;

  /**
   * Pole gotowe do zapisu: neutralizacja formuły, potem cytowanie.
   *
   * Kolejność ma znaczenie. Apostrof musi wejść PRZED cytowaniem, inaczej
   * ląduje poza cudzysłowem i arkusz i tak zobaczy `=` jako pierwszy znak
   * zawartości.
   */
  function pole(v) {
    var s = v === null || v === undefined ? "" : String(v);
    if (FORMULA.test(s)) s = "'" + s;
    if (s.indexOf('"') >= 0 || s.indexOf(SEP) >= 0 || s.indexOf("\n") >= 0 || s.indexOf("\r") >= 0) {
      return '"' + s.replace(/"/g, '""') + '"';
    }
    return s;
  }

  /**
   * Serializuje karty do TSV czytanego przez Anki.
   *
   * @param {Array} karty [{it, tr, tag}]
   * @returns {string}
   */
  function toTsv(karty) {
    var linie = NAGLOWEK.slice();
    (karty || []).forEach(function (k) {
      linie.push([pole(k.it), pole(k.tr), pole(k.tag || "")].join(SEP));
    });
    return linie.join(NL) + NL;
  }

  /* Powyżej tego pliku nie parsujemy w ogóle. Talia ucznia to setki fiszek,
     nie setki tysięcy: plik tej wielkości albo nie jest talią, albo jest
     próbą zawieszenia przeglądarki. Odmawiamy PRZED parsowaniem. */
  var MAX_WIERSZY = 50000;
  var MAX_ZNAKOW = 8 * 1024 * 1024;

  /**
   * Rozbiera CAŁY tekst na wiersze pól, honorując cytowanie.
   *
   * Nie da się najpierw pociąć po znakach nowej linii, a potem parsować:
   * pole w cudzysłowie WOLNO złamać na kilka linii i RFC 4180 to
   * przewiduje. Pierwsza wersja tak właśnie robiła i rozrywała na pół
   * każdą fiszkę ze złamaniem wiersza — wychodziła poprawnie, wracała
   * jako dwie połówki. Złapał to test obiegu, nie oko.
   *
   * @returns {{wiersze:Array<Array<string>>, urwany:boolean}}
   */
  function rozbierzTekst(tekst) {
    var wiersze = [], pola = [], buf = "", w = false, i = 0;

    function konieczPola() { pola.push(buf); buf = ""; }
    function konieczWiersza() { konieczPola(); wiersze.push(pola); pola = []; }

    while (i < tekst.length) {
      var c = tekst[i];

      if (w) {
        if (c === '"') {
          if (tekst[i + 1] === '"') { buf += '"'; i += 2; continue; }
          w = false; i++; continue;
        }
        buf += c; i++; continue;
      }

      if (c === '"' && buf === "") { w = true; i++; continue; }
      if (c === SEP) { konieczPola(); i++; continue; }
      if (c === "\r") { i++; continue; }
      if (c === "\n") { konieczWiersza(); i++; continue; }
      buf += c; i++;
    }
    if (buf !== "" || pola.length) konieczWiersza();
    return { wiersze: wiersze, urwany: w };
  }

  /** Zdejmuje apostrof, którym neutralizowaliśmy formułę przy eksporcie. */
  function odNeutralizuj(s) {
    return s.length > 1 && s[0] === "'" && FORMULA.test(s.slice(1)) ? s.slice(1) : s;
  }

  /**
   * Parsuje plik TSV/CSV do listy kart.
   *
   * Zwraca `{karty, blad, pominiete}`. Nie rzuca: import to jedyne miejsce,
   * w którym uczeń podaje plik z zewnątrz, a „coś poszło nie tak" jest tu
   * bezużyteczne. Błąd niesie KLUCZ napisu, bo kurs mówi pięcioma językami.
   */
  function fromTsv(tekst) {
    var s = String(tekst || "");
    if (s.length > MAX_ZNAKOW) return { karty: [], blad: "anki.errTooBig", pominiete: 0 };
    /* Tani licznik przed parsowaniem: nie chcemy przejść znak po znaku
       przez plik, który i tak odrzucimy. */
    if ((s.match(/\n/g) || []).length > MAX_WIERSZY) {
      return { karty: [], blad: "anki.errTooManyRows", pominiete: 0 };
    }

    var r = rozbierzTekst(s);
    /* Niedomknięty cudzysłów połyka wszystko, co po nim: parser nie ma jak
       zgadnąć, gdzie pole miało się skończyć. Pomijanie „tego jednego
       wiersza" jest tu niewykonalne, a sklejenie reszty pliku w jedno pole
       byłoby gorsze niż odmowa — uczeń dostałby fiszkę z połową cudzej
       talii i nie miałby jak tego rozpoznać. Odmawiamy całego pliku. */
    if (r.urwany) return { karty: [], blad: "anki.errUnterminated", pominiete: 0 };
    var karty = [], pominiete = 0, kolumn = 0;

    for (var i = 0; i < r.wiersze.length; i++) {
      var p = r.wiersze[i];
      if (p.length === 1 && !p[0].trim()) continue;
      if (p[0][0] === "#") continue;                   // dyrektywy Anki

      /* Liczba kolumn ma być stała w całym pliku. Plik, w którym część
         wierszy ma trzy pola a część cztery, jest albo uszkodzony, albo ma
         separator w treści — w obu wypadkach dopisanie go do talii wniosłoby
         śmieci, których uczeń już nie odróżni od swoich. */
      if (!kolumn) kolumn = p.length;
      else if (p.length !== kolumn) return { karty: [], blad: "anki.errRagged", pominiete: pominiete };

      var it = odNeutralizuj(p[0] || "").trim();
      var tr = odNeutralizuj(p[1] || "").trim();
      if (!it) { pominiete++; continue; }
      karty.push({ it: it, tr: tr, tag: (p[2] || "").trim() });
    }
    return { karty: karty, blad: null, pominiete: pominiete };
  }

  Anki.toTsv = toTsv;
  Anki.fromTsv = fromTsv;
  Anki.MAX_WIERSZY = MAX_WIERSZY;
  global.Anki = Anki;

})(window);
