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
   wysyłki. Rzeczowniki i przymiotniki schodzą regułami, bo włoska
   liczba mnoga jest regularna w stopniu, w jakim polska nigdy nie jest.

   Granica jest zadeklarowana, nie ukryta: to jest heurystyka, która
   generuje KANDYDATÓW, a rozstrzyga słownik. „Bevi" da kandydatów
   „bere" i „bevo"; wygrywa ten, którego kurs zna. Kandydat, którego nikt
   nie zna, nie jest odpowiedzią — jest ciszą, i widok ma o niej
   powiedzieć wprost (patrz views-lookup.js), a nie udawać sukcesu.

   Skrypt klasyczny.
   ============================================================ */
(function (global) {
  "use strict";

  /** Formy wielowyrazowe („sono andato") rozcinamy: indeks jest na słowa. */
  function slowa(forma) {
    return String(forma).toLowerCase().split(/\s+/).filter(Boolean);
  }

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
      if (czasownikowe(haslo)) zbior[haslo] = true;
    });
    return Object.keys(zbior);
  }

  /** Jednowyrazowe hasło w formie bezokolicznika. Fraza nim nie jest. */
  function czasownikowe(haslo) {
    return /^[a-zàèéìòù]+(are|ere|ire|arsi|ersi|irsi)$/.test(haslo);
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
        slowa(forma).forEach(function (w) {
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
      dodaj(V.participle && V.participle(inf));
      dodaj(V.gerund && V.gerund(inf));
      tempy.forEach(function (klucz) {
        var formy = V.conjugate(inf, klucz) || [];
        formy.forEach(dodaj);
      });
    });
    return indeks;
  }

  /* --------------------------------------------------------
     Rzeczowniki i przymiotniki: liczba mnoga i rodzaj.

     Kolejność reguł ma znaczenie: bardziej szczegółowe pierwsze, bo
     „amiche" ma zejść do „amica", a nie do „amiche" bez „h".
     -------------------------------------------------------- */
  var REGULY = [
    [/che$/, "ca"],      // amiche -> amica
    [/ghe$/, "ga"],      // colleghe -> collega
    [/chi$/, "co"],      // fuochi -> fuoco
    [/ghi$/, "go"],      // laghi -> lago
    [/ci$/, "co"],       // amici -> amico
    [/gi$/, "go"],       // asparagi -> asparago
    [/i$/, "o"],         // libri -> libro
    [/i$/, "e"],         // cani -> cane
    [/i$/, "a"],         // problemi -> problema
    [/e$/, "a"],         // case -> casa
    [/e$/, "o"],         // rzadkie, ale tanie
    [/a$/, "o"],         // bella -> bello
    [/o$/, "a"]          // w drugą stronę, dla haseł zapisanych żeńsko
  ];

  /** Formy podstawowe do sprawdzenia dla słowa nie-czasownikowego. */
  function odmienne(slowo) {
    var out = [slowo];
    REGULY.forEach(function (r) {
      if (r[0].test(slowo)) {
        var kandydat = slowo.replace(r[0], r[1]);
        if (out.indexOf(kandydat) < 0) out.push(kandydat);
      }
    });
    return out;
  }

  /* Rodzajniki, przyimki ściągnięte i cząstki: nie są w słowniku kursu
     jako hasła, a stanowią jedną piątą każdego tekstu. Trzymamy je tu
     jako listę zamkniętą, żeby „dotknięcie w nic" nie trafiało w słowa,
     które i tak objaśnia pierwsza lekcja gramatyki. */
  var FUNKCYJNE = ("il lo la i gli le l un uno una un' " +
    "di a da in con su per tra fra del dello della dei degli delle dell " +
    "al allo alla ai agli alle all dal dallo dalla dai dagli dalle dall " +
    "nel nello nella nei negli nelle nell sul sullo sulla sui sugli sulle sull " +
    "col coi e ed o od ma se che chi cui non ci si ne mi ti vi li lo la gli le " +
    "come quando dove perche perché quanto quale quali questo questa questi queste " +
    "quello quella quelli quelle piu più meno molto poco tanto troppo gia già " +
    "anche ancora sempre mai poi allora però pero cosi così tutto tutta tutti tutte " +
    "c'è ce sono sia suo sua suoi sue mio mia miei mie tuo tua tuoi tue " +
    "nostro nostra nostri nostre vostro vostra vostri vostre loro " +
    /* Formy skrócone przed apostrofem i cząstki, które w tekście stoją
       samotnie. „c" pochodzi z „c'era", „mal" z „mal di testa": bez nich
       dotknięcie trafiało w literę, której nie da się objaśnić. */
    "c né ne' sé se' no né mal").split(/\s+/);

  /* Liczebniki. Zbiór zamknięty, uczony w A1, a w tekstach o cenach,
     godzinach i rozkładach jazdy siedzi ich pełno. Bez tego „quattro"
     i „quaranta" byłyby ciszą w tekście, którego cała treść to liczby. */
  var LICZEBNIKI = ("zero uno una due tre quattro cinque sei sette otto nove dieci " +
    "undici dodici tredici quattordici quindici sedici diciassette diciotto diciannove " +
    "venti trenta quaranta cinquanta sessanta settanta ottanta novanta cento mille mila " +
    "primo prima secondo seconda terzo terza quarto quarta quinto quinta " +
    "milione milioni miliardo miliardi " +
    /* Formy przed apostrofem: „vent'anni", „trent'anni". Rozcinanie
       zostawia sam człon dziesiątkowy, a to nadal liczebnik. */
    "vent trent quarant cinquant sessant settant ottant novant").split(/\s+/);

  var funkcyjneSet = {};
  FUNKCYJNE.concat(LICZEBNIKI).forEach(function (w) { funkcyjneSet[w] = true; });

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

  function dodajDoSlownika(zbior, s) {
    if (!s) return;
    var w = String(s).toLowerCase().replace(/[’']/g, "'").trim();
    if (!w) return;
    zbior[w] = true;
    /* Hasło wielowyrazowe wnosi też swoje słowa: „di solito" sprawia,
       że „solito" przestaje być ciszą. */
    if (w.indexOf(" ") >= 0) {
      w.split(/\s+/).forEach(function (x) { if (x.length > 1) zbior[x] = true; });
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
    return Object.prototype.hasOwnProperty.call(slownikKursu(), haslo);
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
      if (czasownikowe(w) && dodatkowe.indexOf(w) < 0) dodatkowe.push(w);
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
    odmienne(w).forEach(dodaj);
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
    if (funkcyjneSet[w]) return [w];
    return kandydaci(w).filter(czyZnane);
  }

  global.Lemma = {
    resolve: resolve,
    kandydaci: kandydaci,
    uzyjSlownika: uzyjSlownika,
    dodajCzasowniki: dodajCzasowniki,
    zbudujSlownik: zbudujSlownik,
    odswiez: odswiez,
    funkcyjne: function (w) { return !!funkcyjneSet[String(w).toLowerCase()]; },
    /** Tylko do pomiaru: ile form zna indeks i ile trwało jego zbudowanie. */
    rozmiarIndeksu: function () { return Object.keys(zbuduj()).length; }
  };

})(window);
