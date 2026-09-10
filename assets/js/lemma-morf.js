/* ============================================================
   lemma-morf.js — reguły włoskiej formy. Same napisy, zero słownika.

   Tu mieszka to, co da się rozstrzygnąć PATRZĄC NA WYRAZ: rozcięcie formy
   złożonej, liczba mnoga, rodzaj, stopień najwyższy, akcent toniczny,
   doklejone zaimki i zamknięta lista wyrazów funkcyjnych. Nic z tego nie
   pyta o kurs i nic z tego nie wie, czego uczeń się uczył.

   Rozstrzyganie — indeks odwrotny z koniugatora, słownik kursu, aliasy
   i kanoniczne hasła — siedzi w lemma.js i ten plik o nim nie wie.

   DLACZEGO GRANICA IDZIE TUTAJ. To jest podział na KANDYDATÓW i WERDYKT,
   czyli na to, co generuje hipotezy, i na to, co je odsiewa. Reguła liczby
   mnogiej („amiche" -> „amica") jest czystą funkcją napisu i sprawdza się
   jednym assertem; werdykt wymaga zbudowanego słownika całego kursu. Dopóki
   jedno stało obok drugiego, test reguły płacił cenę werdyktu.

   Skrypt klasyczny, bez zależności. Musi stać PRZED lemma.js.
   ============================================================ */
(function (global) {
  "use strict";

  /**
   * Formy wielowyrazowe („sono andato", „era entrato") rozcinamy, ale
   * POSIŁKOWNIK ZOSTAJE POZA INDEKSEM.
   *
   * Wcześniej wchodziły oba słowa, więc „era" trafiało do indeksu przy
   * każdym czasowniku z „essere" (trapassato: era entrato, era rimasto...),
   * a „hanno" przy każdym z „avere". Dotknięcie „era" w tekście pokazywało
   * pierwszy z kilkunastu bezładnie zebranych czasowników, a nie „essere".
   * Zmierzone: „era" rozstrzygało się na 12 haseł, „hanno" na 65.
   *
   * Same posiłkowniki nie znikają z indeksu: „essere" i „avere" odmieniają
   * się jak każdy inny czasownik i wnoszą swoje formy proste.
   */
  var POSILKOWE = { ho: 1, hai: 1, ha: 1, abbiamo: 1, avete: 1, hanno: 1,
    avevo: 1, avevi: 1, aveva: 1, avevamo: 1, avevate: 1, avevano: 1,
    avrò: 1, avrai: 1, avrà: 1, avremo: 1, avrete: 1, avranno: 1,
    abbia: 1, abbiate: 1, abbiano: 1, avrei: 1, avresti: 1, avrebbe: 1,
    avremmo: 1, avreste: 1, avrebbero: 1, avessi: 1, avesse: 1, avessimo: 1,
    aveste: 1, avessero: 1, ebbi: 1, ebbe: 1, ebbero: 1, avemmo: 1,
    sono: 1, sei: 1, è: 1, siamo: 1, siete: 1,
    ero: 1, eri: 1, era: 1, eravamo: 1, eravate: 1, erano: 1,
    sarò: 1, sarai: 1, sarà: 1, saremo: 1, sarete: 1, saranno: 1,
    sia: 1, siate: 1, siano: 1, sarei: 1, saresti: 1, sarebbe: 1,
    saremmo: 1, sareste: 1, sarebbero: 1, fossi: 1, fosse: 1, fossimo: 1,
    foste: 1, fossero: 1, fui: 1, fu: 1, fummo: 1, furono: 1 };

  function posilkowy(w) {
    return Object.prototype.hasOwnProperty.call(POSILKOWE, String(w).toLowerCase());
  }

  /** Wyrazy formy, bez posiłkownika. Forma jednowyrazowa wraca jak stała. */
  function slowa(forma) {
    var cz = String(forma).toLowerCase().split(/\s+/).filter(Boolean);
    if (cz.length < 2) return cz;
    return cz.filter(function (w) {
      return !Object.prototype.hasOwnProperty.call(POSILKOWE, w);
    });
  }

  /** Jednowyrazowe hasło w formie bezokolicznika. Fraza nim nie jest. */
  function czasownikowe(haslo) {
    return /^[a-zàèéìòù]+(are|ere|ire|arsi|ersi|irsi)$/.test(haslo);
  }

  /* --------------------------------------------------------
     Rzeczowniki i przymiotniki: liczba mnoga i rodzaj.

     Kolejność reguł ma znaczenie: bardziej szczegółowe pierwsze, bo
     „amiche" ma zejść do „amica", a nie do „amiche" bez „h".
     -------------------------------------------------------- */
  var REGULY = [
    /* Stopień najwyższy. „h" wchodzi po to, żeby zachować twarde „k":
       antico -> antichissimo, więc w drugą stronę trzeba je zdjąć, inaczej
       wychodzi „anticho" i słownik nic nie znajduje. */
    [/chissim[oaie]$/, "co"],
    [/ghissim[oaie]$/, "go"],
    [/issim[oaie]$/, "o"],
    [/che$/, "ca"],      // amiche -> amica
    [/ghe$/, "ga"],      // colleghe -> collega
    [/chi$/, "co"],      // fuochi -> fuoco
    [/ghi$/, "go"],      // laghi -> lago
    [/ci$/, "co"],       // amici -> amico
    [/ci$/, "cio"],      // uffici -> ufficio
    [/gi$/, "go"],       // asparagi -> asparago
    [/gi$/, "gio"],      // orologi -> orologio
    [/ari$/, "ario"],    // proprietari -> proprietario
    [/eri$/, "erio"],    // misteri -> misterio (rzadkie, ale tanie)
    [/che$/, "co"],      // poche -> poco, ricche -> ricco
    [/i$/, "io"],        // negozi -> negozio, vecchi -> vecchio
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
    "c né ne' sé se' no né mal quei lui lei esso essa io tu noi voi me te sé").split(/\s+/);

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

  function funkcyjny(w) {
    return !!funkcyjneSet[String(w).toLowerCase()];
  }

  /* Akcent toniczny zdjęty: „pèsca" ma się znaleźć, gdy uczeń dotknie
     „pesca". Hasło słownikowe wolno zapisać z akcentem, bo tak się je
     podaje w słowniku i tak czyta je lektor; forma w tekście akcentu nie
     ma i mieć nie może. Bez tego aliasu jedno z dwóch by nie działało. */
  var AKCENTY = { "à": "a", "á": "a", "è": "e", "é": "e", "ì": "i", "í": "i",
    "ò": "o", "ó": "o", "ù": "u", "ú": "u" };

  function bezAkcentow(w) {
    return w.replace(/[àáèéìíòóùú]/g, function (c) { return AKCENTY[c] || c; });
  }

  /* Zaimki doklejane do bezokolicznika, gerundio i trybu rozkazującego:
     „mandarli", „preoccuparti", „dammelo". Włoski pisze je razem z
     czasownikiem, więc bez odklejenia to jest jedno nieznane słowo. */
  var ENKLITYKI = ["glielo", "gliela", "glieli", "gliele", "gliene",
    "melo", "mela", "meli", "mele", "mene", "telo", "tela", "teli", "tele", "tene",
    "celo", "cela", "celi", "cele", "cene", "velo", "vela", "veli", "vele", "vene",
    "mi", "ti", "si", "ci", "vi", "lo", "la", "li", "le", "ne", "gli"];

  /**
   * Odkleja zaimki od końca wyrazu i zwraca możliwe rdzenie.
   *
   * „mandarli" -> „mandar" -> „mandare": bezokolicznik traci końcowe „e"
   * przed zaimkiem, więc rdzeń trzeba jeszcze odbudować.
   */
  function bezEnklityk(w) {
    var out = [];
    ENKLITYKI.forEach(function (z) {
      if (w.length <= z.length + 2) return;
      if (w.slice(-z.length) !== z) return;
      var rdzen = w.slice(0, -z.length);
      out.push(rdzen);
      if (/[aei]r$/.test(rdzen)) out.push(rdzen + "e");   // mandar -> mandare
      if (/[aei]$/.test(rdzen)) out.push(rdzen + "rsi");  // preoccupa -> preoccuparsi
    });
    return out;
  }

  global.LemmaMorf = {
    slowa: slowa,
    posilkowy: posilkowy,
    czasownikowe: czasownikowe,
    odmienne: odmienne,
    funkcyjny: funkcyjny,
    bezAkcentow: bezAkcentow,
    bezEnklityk: bezEnklityk
  };

})(window);
