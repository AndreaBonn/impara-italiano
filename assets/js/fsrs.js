/* ============================================================
   fsrs.js — harmonogram powtórek FSRS-6.

   Zastępuje SM-2 na talii słownictwa. SM-2 jest z 1987 roku i mnoży
   odstęp przez jeden współczynnik, ten sam dla każdej karty i każdego
   ucznia. FSRS modeluje pamięć dwiema wielkościami — stabilnością (po ilu
   dniach szansa przypomnienia spada do progu) i trudnością — i dobiera
   odstęp tak, by trafić w zadaną retencję.

   CZEGO TEN MODUŁ NIE OBIECUJE. Parametry FSRS optymalizuje się na
   historii powtórek konkretnego ucznia. Ten kurs nie ma serwera ani
   telemetrii, więc zostają wartości domyślne i tak zostanie. Zysku nie
   da się tu ZMIERZYĆ: przyjmujemy go na podstawie benchmarku autorów,
   a kryterium poprawności tego pliku jest zgodność z implementacją
   referencyjną, nie „mniej powtórek" (patrz R5 w
   specs/002-corso-irrinunciabile/riconciliazione.md).

   Dlatego wzory nie są przepisane z dokumentacji, tylko z kodu py-fsrs,
   a `tests/unit/fsrs-vectors.json` trzyma wyjście referencyjne dla 34
   powtórek w 7 scenariuszach. Pomyłka w wykładniku daje harmonogram,
   który nadal wygląda rozsądnie i myli się dopiero po miesiącu — czego
   nikt nie zauważy. Wektory to jedyna rzecz, która taką pomyłkę łapie.
   Regeneracja: `uv run --script scripts/gen_fsrs_vectors.py`.

   Moduł jest CZYSTY: żadnego stanu, żadnego localStorage, żadnego
   Date.now() w środku. Chwilę powtórki podaje wołający, więc test nie
   musi podstawiać zegara.

   Skrypt klasyczny — jak reszta silnika, bo kurs działa z file://.
   ============================================================ */
(function (global) {
  "use strict";

  var MINUTA = 60000;
  var DZIEN = 86400000;

  /* Granice z implementacji referencyjnej. Trudność żyje w 1..10 i te
     liczby wchodzą do wzorów (tłumienie liniowe dzieli przez 9, odbicie
     do średniej celuje w „łatwe"), więc nie są parametrem do zmiany. */
  var MIN_TRUDNOSC = 1.0;
  var MAX_TRUDNOSC = 10.0;
  var MIN_STABILNOSC = 0.001;

  /* Oceny: te same cztery, co w interfejsie ucznia. */
  var ZNOWU = 1, TRUDNE = 2, DOBRZE = 3, LATWE = 4;

  var DOMYSLNE = {
    /* FSRS-6, 21 parametrów. Kolejność jest częścią kontraktu z py-fsrs. */
    parametry: [
      0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001,
      1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014,
      1.8729, 0.5425, 0.0912, 0.0658, 0.1542
    ],
    /* Docelowa szansa przypomnienia w chwili powtórki. Wyżej = częściej. */
    retencja: 0.9,
    /* Kroki pierwszej nauki i powtórnej nauki po wpadce, w milisekundach. */
    krokiNauki: [MINUTA, 10 * MINUTA],
    krokiPowtornejNauki: [10 * MINUTA],
    maksOdstepDni: 36500
  };

  function ogranicz(x, min, max) { return Math.min(Math.max(x, min), max); }
  function ograniczTrudnosc(d) { return ogranicz(d, MIN_TRUDNOSC, MAX_TRUDNOSC); }
  function ograniczStabilnosc(s) { return Math.max(s, MIN_STABILNOSC); }

  /**
   * Buduje zestaw funkcji dla jednej konfiguracji.
   *
   * Osobno, bo `decay` i `factor` zależą od parametru 20 i liczenie ich
   * przy każdym wywołaniu byłoby powtarzaniem tej samej potęgi.
   */
  function silnik(konfig) {
    var k = konfig || {};
    var p = k.parametry || DOMYSLNE.parametry;
    var retencja = k.retencja === undefined ? DOMYSLNE.retencja : k.retencja;
    var krokiNauki = k.krokiNauki || DOMYSLNE.krokiNauki;
    var krokiPowt = k.krokiPowtornejNauki || DOMYSLNE.krokiPowtornejNauki;
    var maksDni = k.maksOdstepDni || DOMYSLNE.maksOdstepDni;

    var decay = -p[20];
    var factor = Math.pow(0.9, 1 / decay) - 1;

    /** Szansa przypomnienia po `dni` dniach od ostatniej powtórki. */
    function odtwarzalnosc(stabilnosc, dni) {
      return Math.pow(1 + factor * dni / stabilnosc, decay);
    }

    function stabilnoscPoczatkowa(ocena) {
      return ograniczStabilnosc(p[ocena - 1]);
    }

    /**
     * @param {boolean} ogranicz2 — przy liczeniu odbicia do średniej wartość
     *   dla „łatwe" wchodzi NIEobcięta; obcięcie tutaj przesunęłoby wynik.
     */
    function trudnoscPoczatkowa(ocena, ogranicz2) {
      var d = p[4] - Math.exp(p[5] * (ocena - 1)) + 1;
      return ogranicz2 ? ograniczTrudnosc(d) : d;
    }

    function nastepnaTrudnosc(trudnosc, ocena) {
      var delta = -(p[6] * (ocena - 3));
      /* Tłumienie liniowe: im trudniejsza karta, tym mniej się rusza. */
      var tlumione = trudnosc + (10.0 - trudnosc) * delta / 9.0;
      /* Odbicie do średniej w stronę wartości dla „łatwe". */
      var cel = trudnoscPoczatkowa(LATWE, false);
      return ograniczTrudnosc(p[7] * cel + (1 - p[7]) * tlumione);
    }

    /** Powtórka tego samego dnia: stabilność rośnie inaczej niż po przerwie. */
    function stabilnoscKrotkoterminowa(stabilnosc, ocena) {
      var przyrost = Math.exp(p[17] * (ocena - 3 + p[18])) * Math.pow(stabilnosc, -p[19]);
      if (ocena !== ZNOWU) przyrost = Math.max(przyrost, 1.0);
      return ograniczStabilnosc(stabilnosc * przyrost);
    }

    function stabilnoscPoWpadce(trudnosc, stabilnosc, odtw) {
      var dluga = p[11] *
        Math.pow(trudnosc, -p[12]) *
        (Math.pow(stabilnosc + 1, p[13]) - 1) *
        Math.exp((1 - odtw) * p[14]);
      var krotka = stabilnosc / Math.exp(p[17] * p[18]);
      return Math.min(dluga, krotka);
    }

    function stabilnoscPoPrzypomnieniu(trudnosc, stabilnosc, odtw, ocena) {
      var karaTrudne = ocena === TRUDNE ? p[15] : 1;
      var premiaLatwe = ocena === LATWE ? p[16] : 1;
      return stabilnosc * (1 +
        Math.exp(p[8]) *
        (11 - trudnosc) *
        Math.pow(stabilnosc, -p[9]) *
        (Math.exp((1 - odtw) * p[10]) - 1) *
        karaTrudne * premiaLatwe);
    }

    function nastepnaStabilnosc(trudnosc, stabilnosc, odtw, ocena) {
      var s = ocena === ZNOWU
        ? stabilnoscPoWpadce(trudnosc, stabilnosc, odtw)
        : stabilnoscPoPrzypomnieniu(trudnosc, stabilnosc, odtw, ocena);
      return ograniczStabilnosc(s);
    }

    /** Odstęp w pełnych dniach, który trafia w zadaną retencję. */
    function odstepDni(stabilnosc) {
      var dni = (stabilnosc / factor) * (Math.pow(retencja, 1 / decay) - 1);
      return Math.min(Math.max(Math.round(dni), 1), maksDni);
    }

    /**
     * Pierwszy krok po ocenie „trudne", gdy karta stoi na kroku zerowym.
     * Przy jednym kroku półtora kroku, przy dwóch i więcej średnia z dwóch
     * pierwszych — tak robi referencja i to widać w wektorach.
     */
    function krokTrudne(kroki, krok) {
      if (krok === 0 && kroki.length === 1) return kroki[0] * 1.5;
      if (krok === 0 && kroki.length >= 2) return (kroki[0] + kroki[1]) / 2.0;
      return kroki[krok];
    }

    /**
     * Pełna liczba dni od ostatniej powtórki, jak w referencji.
     *
     * Referencja liczy `(teraz - ostatnia).days`, czyli obcina w dół, i na
     * tym obcięciu stoi rozróżnienie „ta sama sesja" od „po przerwie":
     * 23 godziny to nadal zero dni i nadal krótki termin.
     */
    function dniOd(odMs, doMs) {
      return Math.floor((doMs - odMs) / DZIEN);
    }

    /**
     * Przelicza kartę po jednej odpowiedzi.
     *
     * @param {object|null} karta {st, step, s, d, due, last} albo null/nowa
     * @param {number} ocena 1 znowu | 2 trudne | 3 dobrze | 4 łatwe
     * @param {number} terazMs chwila powtórki
     * @returns {object} nowa karta — wejściowa NIE jest mutowana
     */
    function powtorz(karta, ocena, terazMs) {
      var c = karta || {};
      var stan = c.st || "learning";
      var krok = c.step === undefined || c.step === null ? 0 : c.step;
      var s = typeof c.s === "number" ? c.s : null;
      var d = typeof c.d === "number" ? c.d : null;
      var dni = typeof c.last === "number" ? dniOd(c.last, terazMs) : null;
      var odstepMs = null;
      var nowyStan = stan;
      var nowyKrok = krok;

      function odtw() {
        if (typeof c.last !== "number" || s === null) return 0;
        return odtwarzalnosc(s, Math.max(0, dniOd(c.last, terazMs)));
      }

      /* --- pamięć: stabilność i trudność --- */
      if (stan === "learning" && (s === null || d === null)) {
        s = stabilnoscPoczatkowa(ocena);
        d = trudnoscPoczatkowa(ocena, true);
      } else if (dni !== null && dni < 1) {
        s = stabilnoscKrotkoterminowa(s, ocena);
        d = nastepnaTrudnosc(d, ocena);
      } else {
        s = nastepnaStabilnosc(d, s, odtw(), ocena);
        d = nastepnaTrudnosc(d, ocena);
      }

      /* --- harmonogram: stan i odstęp --- */
      if (stan === "review") {
        if (ocena === ZNOWU && krokiPowt.length) {
          nowyStan = "relearning";
          nowyKrok = 0;
          odstepMs = krokiPowt[0];
        } else {
          nowyStan = "review";
          nowyKrok = null;
          odstepMs = odstepDni(s) * DZIEN;
        }
      } else {
        /* learning i relearning chodzą po tej samej mechanice kroków,
           różnią się tylko listą — dlatego jedna gałąź, nie dwie. */
        var kroki = stan === "learning" ? krokiNauki : krokiPowt;
        if (!kroki.length || (krok >= kroki.length && ocena !== ZNOWU)) {
          nowyStan = "review";
          nowyKrok = null;
          odstepMs = odstepDni(s) * DZIEN;
        } else if (ocena === ZNOWU) {
          nowyKrok = 0;
          odstepMs = kroki[0];
        } else if (ocena === TRUDNE) {
          odstepMs = krokTrudne(kroki, krok);
        } else if (ocena === DOBRZE) {
          if (krok + 1 === kroki.length) {
            nowyStan = "review";
            nowyKrok = null;
            odstepMs = odstepDni(s) * DZIEN;
          } else {
            nowyKrok = krok + 1;
            odstepMs = kroki[nowyKrok];
          }
        } else {
          nowyStan = "review";
          nowyKrok = null;
          odstepMs = odstepDni(s) * DZIEN;
        }
      }

      return {
        st: nowyStan,
        step: nowyKrok,
        s: s,
        d: d,
        due: terazMs + Math.round(odstepMs),
        last: terazMs
      };
    }

    return {
      powtorz: powtorz,
      odstepDni: odstepDni,
      odtwarzalnosc: odtwarzalnosc,
      retencja: retencja
    };
  }

  var domyslny = silnik(null);

  global.Fsrs = {
    DOMYSLNE: DOMYSLNE,
    ZNOWU: ZNOWU, TRUDNE: TRUDNE, DOBRZE: DOBRZE, LATWE: LATWE,
    silnik: silnik,
    /** Skrót na domyślnej konfiguracji — tego używa core.js. */
    powtorz: function (karta, ocena, terazMs) { return domyslny.powtorz(karta, ocena, terazMs); }
  };

})(window);
