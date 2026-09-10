/* ============================================================
   lemma.js — od słowa w tekście do hasła, które kurs umie objaśnić.

   Uczeń dotyka „bevono" i ma zobaczyć „bere". Bez tego czytanki są
   ścianą tekstu z glosami do kilkunastu wyrazów wybranych przez nas, a
   nie przez niego.

   DLACZEGO NIE SŁOWNIK MORFOLOGICZNY. Kurs nie ma kroku budowania i musi
   działać z file://, więc każdy słownik trzeba by wysłać jako plik .js
   ładowany na starcie. Wolna morfologia włoska waży megabajty, a ta
   przycięta do haseł kursu pokrywa dwadzieścia kilka procent słów w
   naszych własnych tekstach, bo 920 z 1410 pozycji leksykonu to
   wyrażenia wielowyrazowe („a che ora", „di solito"), z których nie da
   się odmienić niczego.

   Zamiast tego: formy WYPROWADZAMY. Koniugator (verbs.js) i tak umie
   wyprodukować każdą formę każdego czasownika, więc indeks odwrotny
   powstaje z niego przy pierwszym użyciu i kosztuje zero bajtów
   wysyłki. Rzeczowniki i przymiotniki schodzą regułami (lemma-morf.js),
   bo włoska liczba mnoga jest regularna w stopniu, w jakim polska nigdy
   nie jest.

   Granica jest zadeklarowana, nie ukryta: to jest heurystyka, która
   generuje KANDYDATÓW, a rozstrzyga słownik. „Bevi" da kandydatów
   „bere" i „bevo"; wygrywa ten, którego kurs zna. Kandydat, którego nikt
   nie zna, nie jest odpowiedzią — jest ciszą, i widok ma o niej
   powiedzieć wprost (patrz views-lookup.js), a nie udawać sukcesu.

   Ten sam podział przechodzi przez pliki: reguły formy w lemma-morf.js,
   werdykt tutaj.

   Skrypt klasyczny. Wymaga lemma-morf.js.
   ============================================================ */
(function (global) {
  "use strict";

  var M = global.LemmaMorf;

  /**
   * Czasowniki, dla których warto zbudować indeks.
   *
   * COMMON i IRR z verbs.js to lista, którą kurs faktycznie uczy;
   * dokładamy bezokoliczniki wypatrzone w słowniku kursu, jeśli Core
   * jest pod ręką. Poza kursem nie wychodzimy: indeks ma być mały i
   * odpowiadać temu, co uczeń widział.
   */
  /* Bezokoliczniki dołożone z zewnątrz (bramka, test). W przeglądarce
     wystarczy Core, ale skrypt sprawdzający nie ładuje całego stanu. */
  var dodatkowe = [];

  function zrodloCzasownikow() {
    var V = global.Verbs;
    if (!V) return [];
    var zbior = {};
    (V.COMMON || []).forEach(function (w) { zbior[w] = true; });
    Object.keys(V.IRR || {}).forEach(function (w) { zbior[w] = true; });
    dodatkowe.forEach(function (w) { zbior[w] = true; });

    /* Hasła kursu na -are/-ere/-ire to bezokoliczniki i trzeba je odmienić:
       bez tego „aspetta" i „sceglie" są ciszą, mimo że kurs uczy obu
       czasowników. COMMON i IRR z verbs.js pokrywają tylko część kursu.
       Źródłem jest CAŁY słownik, nie sam leksykon lekcji: czasownik
       dopisany do czytanki ma się odmieniać tak samo jak ten z lekcji. */
    Object.keys(slownikKursu()).forEach(function (haslo) {
      if (M.czasownikowe(haslo)) zbior[haslo] = true;
    });
    return Object.keys(zbior);
  }

  var indeks = null;

  /**
   * Buduje indeks odwrotny: forma -> [bezokoliczniki].
   *
   * Leniwie, przy pierwszym pytaniu, nie przy starcie: uczeń, który nie
   * otworzy czytanki, nie ma za co płacić. Jedno wywołanie na sesję.
   */
  function zbuduj() {
    if (indeks) return indeks;
    indeks = {};
    var V = global.Verbs;
    if (!V) return indeks;

    var tempy = (V.TENSES || []).map(function (t) { return t.key; });

    zrodloCzasownikow().forEach(function (inf) {
      function dodaj(forma) {
        if (!forma) return;
        M.slowa(forma).forEach(function (w) {
          /* Formy jednoliterowe zostają. Pierwsza wersja je odrzucała jako
             szum i wypadło z indeksu „è" — najczęstsze słowo we włoskim
             tekście, 18 wystąpień w samych czytankach kursu. Wielkość
             indeksu to nie jest problem, który mieliśmy. */
          if (!w) return;
          if (!indeks[w]) indeks[w] = [];
          if (indeks[w].indexOf(inf) < 0) indeks[w].push(inf);
        });
      }
      dodaj(inf);
      /* Imiesłów uzgadnia się z dopełnieniem i podmiotem, więc obok
         „usato" w tekście stoi „usata", „usati", „usate". Bez tych trzech
         forma żeńska była ciszą przy odmienionym czasowniku, którego kurs
         uczy — najgorszy możliwy rodzaj luki, bo wygląda na przypadek. */
      var im = V.participle && V.participle(inf);
      dodaj(im);
      if (im && /o$/.test(im)) ["a", "i", "e"].forEach(function (k) {
        dodaj(im.slice(0, -1) + k);
      });
      dodaj(V.gerund && V.gerund(inf));
      tempy.forEach(function (klucz) {
        var formy = V.conjugate(inf, klucz) || [];
        formy.forEach(dodaj);
      });
    });
    return indeks;
  }

  /* --------------------------------------------------------
     Słownik rozstrzygający.

     Budowany TUTAJ, a nie u wołającego, i to jest cały powód istnienia
     tej sekcji. Pierwsza wersja miała dwie budowy: jedną w przeglądarce
     z Core.registry, drugą ręcznie w skrypcie sprawdzającym. Dwie budowy
     rozjeżdżają się przy pierwszej zmianie i wtedy bramka mierzy coś
     innego niż to, co dostaje uczeń — czyli zieleń bez pokrycia.
     -------------------------------------------------------- */
  var slownik = null;
  var znane = null;

  /* Forma bez akcentu NIE staje się osobnym hasłem, tylko wskazuje na
     kanoniczne. Pierwsza wersja dopisywała ją do słownika obok — i wtedy
     dotknięcie „pesca" rozstrzygało się na „pesca", bo forma z tekstu jest
     pierwszym kandydatem. Karta pokazywała wyraz bez akcentu, bez glosy i
     bez nagrania, czyli dokładnie to, co ten alias miał naprawić. */
  var aliasy = {};

  function dodajDoSlownika(zbior, s) {
    if (!s) return;
    var w = String(s).toLowerCase().replace(/[’']/g, "'").trim();
    if (!w) return;
    zbior[w] = true;
    if (M.bezAkcentow(w) !== w) aliasy[M.bezAkcentow(w)] = w;
    /* Hasło wielowyrazowe wnosi też swoje słowa: „di solito" sprawia,
       że „solito" przestaje być ciszą.

       Ale NIE wnosi posiłkowników ani wyrazów funkcyjnych. Leksykon ma
       hasło „era tutto buonissimo", więc „era" stawało się przez nie
       osobnym hasłem, a karta na dotknięcie „era" pokazywała tłumaczenie
       CAŁEGO zdania: „wszystko było wyśmienite". Formy „essere" i „avere"
       mają swoje znaczenie z odmiany tych czasowników, nie ze zdania, w
       którym akurat stoją. */
    if (w.indexOf(" ") >= 0) {
      w.split(/\s+/).forEach(function (x) {
        if (x.length <= 1) return;
        if (M.posilkowy(x)) return;
        if (M.funkcyjny(x)) return;
        zbior[x] = true;
      });
    }
  }

  /**
   * Zbiera włoskie hasła kursu: leksykon lekcji plus słowa czytanek.
   *
   * @param {Array} poziomy  Core.registry.levels albo równoważne
   * @param {Array} czytanki window.READINGS
   */
  function zbudujSlownik(poziomy, czytanki) {
    var zbior = {};
    aliasy = {};
    (poziomy || []).forEach(function (lv) {
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).forEach(function (l) {
          (l.vocab || []).forEach(function (v) { dodajDoSlownika(zbior, v.it); });
        });
      });
    });
    (czytanki || []).forEach(function (r) {
      (r.glossIt || []).forEach(function (w) { dodajDoSlownika(zbior, w); });
      /* lexIt: słowa, które lookup ma umieć objaśnić, ale których NIE
         pokazujemy w panelu trudnych słów. Panel jest listą wybraną przez
         autora; trzydzieści pozycji pod tekstem A1 przestaje być wyborem. */
      (r.lexIt || []).forEach(function (w) { dodajDoSlownika(zbior, w); });
    });
    return zbior;
  }

  function slownikKursu() {
    if (slownik) return slownik;
    var reg = global.Core && global.Core.registry;
    slownik = zbudujSlownik(reg && reg.levels, global.READINGS);
    return slownik;
  }

  function czyZnane(haslo) {
    if (znane) return znane(haslo);
    var sl = slownikKursu();
    return Object.prototype.hasOwnProperty.call(sl, haslo) ||
      Object.prototype.hasOwnProperty.call(aliasy, haslo);
  }

  /** Hasło kanoniczne: „pesca" z tekstu wskazuje na słownikowe „pèsca". */
  function kanoniczne(haslo) {
    if (!znane) slownikKursu();
    return aliasy[haslo] || haslo;
  }

  /** Unieważnia słownik i indeks: kurs dociąga poziomy leniwie. */
  function odswiez() { slownik = null; indeks = null; }

  /**
   * Podstawia słownik rozstrzygający.
   * @param {function(string):boolean} fn
   */
  function uzyjSlownika(fn) { znane = fn; }

  /**
   * Dokłada bezokoliczniki do odmiany i unieważnia indeks.
   *
   * Wołane przez bramkę i testy, które nie mają Core. W przeglądarce
   * niepotrzebne: tam źródłem jest słownik kursu.
   */
  function dodajCzasowniki(lista) {
    (lista || []).forEach(function (w) {
      if (M.czasownikowe(w) && dodatkowe.indexOf(w) < 0) dodatkowe.push(w);
    });
    indeks = null;
  }

  /**
   * Wszystko, czym to słowo MOŻE być — bez pytania słownika.
   * Wystawione osobno, bo widok „nie znam tego słowa" pokazuje uczniowi
   * formę podstawową, nawet gdy kursu jej nie uczy.
   */
  function kandydaci(slowo) {
    var w = String(slowo).toLowerCase().replace(/[’']/g, "'");
    var out = [];
    function dodaj(x) { if (x && out.indexOf(x) < 0) out.push(x); }

    dodaj(w);
    (zbuduj()[w] || []).forEach(dodaj);
    M.odmienne(w).forEach(dodaj);
    M.bezEnklityk(w).forEach(function (rdzen) {
      dodaj(rdzen);
      (zbuduj()[rdzen] || []).forEach(dodaj);
    });
    return out;
  }

  /**
   * Hasła, które kurs umie objaśnić dla tego słowa. Puste = cisza.
   *
   * Wyraz funkcyjny zwraca sam siebie: nie ma go w słowniku kursu jako
   * hasła, ale dotknięcie „dello" ma coś dać, a nie nic.
   */
  function resolve(slowo) {
    var w = String(slowo).toLowerCase().replace(/[’']/g, "'");
    if (M.funkcyjny(w)) return [w];
    var out = [];
    kandydaci(w).filter(czyZnane).forEach(function (h) {
      var k = kanoniczne(h);
      if (out.indexOf(k) < 0) out.push(k);
    });
    return out;
  }

  /**
   * Bezokolicznik, jeśli ta forma jest formą czasownika. Inaczej "".
   *
   * Wystawiony osobno, bo to jedyny kandydat, któremu można ufać bez
   * słownika: pochodzi z koniugatora, a nie z reguł zgadujących liczbę
   * mnogą. Widok „Pokrycie" wybiera po nim hasło do pokazania.
   */
  function lemat(slowo) {
    var w = String(slowo).toLowerCase().replace(/[’']/g, "'");
    var z = zbuduj()[w];
    return z && z.length ? z[0] : "";
  }

  global.Lemma = {
    resolve: resolve,
    lemat: lemat,
    kandydaci: kandydaci,
    uzyjSlownika: uzyjSlownika,
    dodajCzasowniki: dodajCzasowniki,
    zbudujSlownik: zbudujSlownik,
    odswiez: odswiez,
    funkcyjne: M.funkcyjny,
    /** Tylko do pomiaru: ile form zna indeks i ile trwało jego zbudowanie. */
    rozmiarIndeksu: function () { return Object.keys(zbuduj()).length; }
  };

})(window);
