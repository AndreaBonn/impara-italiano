/* ============================================================
   fsrs.js — the FSRS-6 review schedule.

   Replaces SM-2 on the vocabulary deck. SM-2 is from 1987 and multiplies
   the interval by a single factor, the same one for every card and every
   learner. FSRS models memory with two quantities — stability (after how
   many days the chance of recall drops to the threshold) and difficulty —
   and picks the interval so as to hit a given retention.

   WHAT THIS MODULE DOES NOT PROMISE. FSRS parameters are optimised on the
   review history of a specific learner. This course has no server and no
   telemetry, so the defaults stay and will keep staying. The gain cannot
   be MEASURED here: we take it on the authors' benchmark, and the
   correctness criterion for this file is agreement with the reference
   implementation, not "fewer reviews" (see R5 in
   specs/002-corso-irrinunciabile/riconciliazione.md).

   That is why the formulas are not transcribed from the documentation but
   from the py-fsrs code, and `tests/unit/fsrs-vectors.json` holds the
   reference output for 34 reviews across 7 scenarios. A mistake in an
   exponent yields a schedule that still looks reasonable and only goes
   wrong a month later — which nobody notices. The vectors are the only
   thing that catches such a mistake.
   Regeneration: `uv run --script scripts/gen_fsrs_vectors.py`.

   The module is PURE: no state, no localStorage, no Date.now() inside.
   The moment of the review is supplied by the caller, so a test does not
   have to substitute a clock.

   Classic script — like the rest of the engine, because the course runs
   from file://.
   ============================================================ */
(function (global) {
  "use strict";

  var MINUTA = 60000;
  var DZIEN = 86400000;

  /* Bounds from the reference implementation. Difficulty lives in 1..10 and
     these numbers enter the formulas (linear damping divides by 9, mean
     reversion aims at "easy"), so they are not a parameter to tweak. */
  var MIN_TRUDNOSC = 1.0;
  var MAX_TRUDNOSC = 10.0;
  var MIN_STABILNOSC = 0.001;

  /* Grades: the same four as in the student's interface. */
  var ZNOWU = 1, TRUDNE = 2, DOBRZE = 3, LATWE = 4;

  var DOMYSLNE = {
    /* FSRS-6, 21 parameters. The order is part of the contract with py-fsrs. */
    parametry: [
      0.212, 1.2931, 2.3065, 8.2956, 6.4133, 0.8334, 3.0194, 0.001,
      1.8722, 0.1666, 0.796, 1.4835, 0.0614, 0.2629, 1.6483, 0.6014,
      1.8729, 0.5425, 0.0912, 0.0658, 0.1542
    ],
    /* Target chance of recall at review time. Higher = more often. */
    retencja: 0.9,
    /* Steps of first learning and of relearning after a lapse, in milliseconds. */
    krokiNauki: [MINUTA, 10 * MINUTA],
    krokiPowtornejNauki: [10 * MINUTA],
    maksOdstepDni: 36500
  };

  function ogranicz(x, min, max) { return Math.min(Math.max(x, min), max); }
  function ograniczTrudnosc(d) { return ogranicz(d, MIN_TRUDNOSC, MAX_TRUDNOSC); }
  function ograniczStabilnosc(s) { return Math.max(s, MIN_STABILNOSC); }

  /**
   * Builds a set of functions for one configuration.
   *
   * Separately, because `decay` and `factor` depend on parameter 20 and
   * computing them on every call would repeat the same power.
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

    /** Chance of recall `dni` days after the last review. */
    function odtwarzalnosc(stabilnosc, dni) {
      return Math.pow(1 + factor * dni / stabilnosc, decay);
    }

    function stabilnoscPoczatkowa(ocena) {
      return ograniczStabilnosc(p[ocena - 1]);
    }

    /**
     * @param {boolean} ogranicz2 — when computing mean reversion, the value
     *   for "easy" enters UNCLAMPED; clamping here would shift the result.
     */
    function trudnoscPoczatkowa(ocena, ogranicz2) {
      var d = p[4] - Math.exp(p[5] * (ocena - 1)) + 1;
      return ogranicz2 ? ograniczTrudnosc(d) : d;
    }

    function nastepnaTrudnosc(trudnosc, ocena) {
      var delta = -(p[6] * (ocena - 3));
      /* Linear damping: the harder the card, the less it moves. */
      var tlumione = trudnosc + (10.0 - trudnosc) * delta / 9.0;
      /* Mean reversion towards the value for "easy". */
      var cel = trudnoscPoczatkowa(LATWE, false);
      return ograniczTrudnosc(p[7] * cel + (1 - p[7]) * tlumione);
    }

    /** A same-day review: stability grows differently than after a break. */
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

    /** The interval in whole days that hits the requested retention. */
    function odstepDni(stabilnosc) {
      var dni = (stabilnosc / factor) * (Math.pow(retencja, 1 / decay) - 1);
      return Math.min(Math.max(Math.round(dni), 1), maksDni);
    }

    /**
     * The first step after a "hard" grade, when the card sits on step zero.
     * With one step, one and a half steps; with two or more, the average of
     * the first two — that is what the reference does and it shows in the
     * vectors.
     */
    function krokTrudne(kroki, krok) {
      if (krok === 0 && kroki.length === 1) return kroki[0] * 1.5;
      if (krok === 0 && kroki.length >= 2) return (kroki[0] + kroki[1]) / 2.0;
      return kroki[krok];
    }

    /**
     * Whole days since the last review, as in the reference.
     *
     * The reference computes `(now - last).days`, that is it truncates
     * downwards, and the distinction between "same session" and "after a
     * break" rests on that truncation: 23 hours is still zero days and still
     * short term.
     */
    function dniOd(odMs, doMs) {
      return Math.floor((doMs - odMs) / DZIEN);
    }

    /**
     * Recomputes a card after one answer.
     *
     * @param {object|null} karta {st, step, s, d, due, last} or null/new
     * @param {number} ocena 1 again | 2 hard | 3 good | 4 easy
     * @param {number} terazMs the moment of the review
     * @returns {object} a new card — the input is NOT mutated
     */
    function powtorz(karta, ocena, terazMs) {
      var c = karta || {};
      var stan = c.st || "learning";
      var krok = c.step === undefined || c.step === null ? 0 : c.step;
      var s = typeof c.s === "number" ? c.s : null;
      var d = typeof c.d === "number" ? c.d : null;
      var dni = typeof c.last === "number" ? dniOd(c.last, terazMs) : null;
      var odstepMs;
      var nowyStan = stan;
      var nowyKrok = krok;

      function odtw() {
        if (typeof c.last !== "number" || s === null) return 0;
        return odtwarzalnosc(s, Math.max(0, dniOd(c.last, terazMs)));
      }

      /* --- memory: stability and difficulty --- */
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

      /* --- schedule: state and interval --- */
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
        /* learning and relearning run on the same step mechanics and differ
           only in the list — hence one branch, not two. */
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
    /** A shortcut on the default configuration — this is what core.js uses. */
    powtorz: function (karta, ocena, terazMs) { return domyslny.powtorz(karta, ocena, terazMs); }
  };

})(window);
