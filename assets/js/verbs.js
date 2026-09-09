/* ============================================================
   verbs.js — silnik odmiany czasowników włoskich.

   Obsługuje regularne -are / -ere / -ire (także wzorzec -isc-), zmiany
   ortograficzne (-care/-gare/-ciare/-giare/-iare), dziedziczenie
   nieregularności po przedrostku i czasy złożone z uzgodnieniem
   imiesłowu. Używane przez: widok „Odmiana czasowników", ćwiczenia typu
   „conj" i rozpoznawanie form w lemma.js.

   Same TABELE włoskiego siedzą w verbs-data.js — to ta sama zasada, po
   której dane kursu są oddzielone od silnika renderowania: dopisanie
   czasownika nieregularnego nie ma dotykać pliku z algorytmem.

   Co zostało tutaj, choć wygląda na dane: lista przedrostków i dwa
   słowniki wyjątków przy niej. To nie jest włoszczyzna do przeglądania,
   tylko strojenie jednej heurystyki (irrOf) — a powody, dla których ta
   lista jest zamknięta, czyta się razem z kodem, który po niej chodzi.
   ============================================================ */
(function (global) {
  "use strict";

  var D = global.VERB_TABLES;
  var PERSONS = D.PERSONS;
  var REG = D.REG;
  var FUT = D.FUT;
  var COND = D.COND;
  var IRR = D.IRR;
  var ISC = D.ISC;
  var ESSERE_VERBS = D.ESSERE_VERBS;
  var TENSES = D.TENSES;
  var COMMON = D.COMMON;

  /* ---------------- Pomocnicze ---------------- */
  function isRefl(inf) { return /(?:arsi|ersi|irsi|rsi)$/.test(inf); }

  function baseOf(inf) {
    return isRefl(inf) ? inf.replace(/si$/, "e") : inf;   // svegliarsi -> svegliare
  }

  function groupOf(inf) {
    var b = baseOf(inf);
    if (/are$/.test(b)) return "are";
    if (/ere$/.test(b) || /rre$/.test(b)) return "ere";
    if (/ire$/.test(b)) return (ISC.indexOf(b) >= 0) ? "isc" : "ire";
    return "are";
  }

  function stemOf(inf) { return baseOf(inf).replace(/(are|ere|ire)$/, ""); }

  /** Zmiany ortograficzne przy doklejaniu końcówki. */
  function join(stem, ending, group) {
    if (group === "are") {
      // -care / -gare : h przed e/i  (cerco → cerchi, pago → pagherò)
      if (/(c|g)$/.test(stem) && /^[ei]/.test(ending)) return stem + "h" + ending;
      // -ciare / -giare / -sciare : jedno i  (comincio → cominci, non "cominci-i")
      if (/(ci|gi|sci)$/.test(stem) && /^[ei]/.test(ending)) return stem.slice(0, -1) + ending;
      // -iare bez akcentu na i : studi + iamo → studiamo
      if (/i$/.test(stem) && /^i/.test(ending)) return stem.slice(0, -1) + ending;
    }
    if (group === "ere" || group === "ire" || group === "isc") {
      if (/(c|g)$/.test(stem) && /^(iamo|iate|i$)/.test(ending)) return stem + ending; // legg + iamo
    }
    return stem + ending;
  }

  function futureStem(inf) {
    var b = baseOf(inf), g = groupOf(inf), s = stemOf(inf);
    if (/rre$/.test(b)) return b.replace(/e$/, "");           // porre → porr
    if (g === "are") {
      if (/(c|g)$/.test(s)) return s + "her";                  // cercare → cercher
      if (/(ci|gi|sci)$/.test(s)) return s.slice(0, -1) + "er";// mangiare → manger
      return s + "er";
    }
    if (g === "ere") return s + "er";
    return s + "ir";
  }

  /* --------------------------------------------------------
     Czasowniki z przedrostkiem dziedziczą nieregularność.

     „promettere" to „mettere" z przedrostkiem i odmienia się tak samo:
     imiesłów „promesso", nie „promettuto". Bez tego widok odmiany
     pokazywał uczniowi formy nieistniejące — dla „promettere",
     „permettere", „riscrivere", „comporre" i całej reszty rodziny.
     Znalezione, gdy bramka lookupu nie umiała rozpoznać „promesso".

     Przedrostek musi być z listy zamkniętej i to jest istotne: samo
     „kończy się na znany czasownik" zrobiłoby z „mandare" krewnego
     „andare" i wyprodukowało „mando/vado". Lista jest tania, pomyłka nie.
     -------------------------------------------------------- */
  var PRZEDROSTKI = [
    "ri", "pro", "per", "pre", "com", "con", "contro", "co",
    "sotto", "sopra", "sovra", "super", "inter", "intra",
    "in", "im", "ir", "ap", "am", "ab", "ad", "af", "ag", "al", "as", "at",
    "tras", "trans", "tra", "dis", "de", "es", "ex", "re", "sor", "so", "su", "s"
  ];

  /* Rozbiór na przedrostek i rdzeń jest heurystyką PISOWNI, nie etymologią,
     więc zamknięta lista przedrostków wyżej wyklucza „mandare = m + andare",
     ale nie wyklucza wszystkiego. Te trzy wpadły:

       restare  wygląda jak re + stare i dostawało formy „stare",
                czyli „restanno" zamiast „restano";
       prestare to samo, ten sam rdzeń;
       affare   nie jest nawet czasownikiem — trafia tu, bo kończy się
                na -are, a słownik kursu odmienia wszystko z tą końcówką.

     Znalezione przez bramkę pokrycia: „restano" z czytanki nie miało czego
     rozpoznać. Lista rośnie tylko wtedy, gdy bramka znowu coś złapie. */
  var BEZ_DZIEDZICZENIA = { restare: 1, prestare: 1, affare: 1 };

  /* Przedrostek zasymilowany, którego pisownia nie pokazuje: „ottenere" to
     ob+tenere, „mantenere" to manu+tenere. Dopisanie „ot" albo „man" do
     listy przedrostków ściągnęłoby „mandare" na „dare", więc te rodziny
     wskazujemy wprost. Bez tego „ottiene" wychodziło jako „ottene". */
  var DZIEDZICZY_WPROST = { ottenere: "tenere", mantenere: "tenere", sostenere: "tenere" };

  var cachePrzedrostkow = {};

  /**
   * Opis nieregularności dla bezokolicznika, z dziedziczeniem po przedrostku.
   *
   * @param {string} b bezokolicznik w formie podstawowej (bez `-si`)
   * @returns {object|null}
   */
  function irrOf(b) {
    if (IRR[b]) return IRR[b];
    if (BEZ_DZIEDZICZENIA[b]) return null;
    if (Object.prototype.hasOwnProperty.call(cachePrzedrostkow, b)) return cachePrzedrostkow[b];

    if (DZIEDZICZY_WPROST[b]) {
      var rdzenWprost = DZIEDZICZY_WPROST[b];
      cachePrzedrostkow[b] = zPrzedrostkiem(IRR[rdzenWprost], b.slice(0, b.length - rdzenWprost.length));
      return cachePrzedrostkow[b];
    }

    var wynik = null;
    for (var i = 0; i < PRZEDROSTKI.length && !wynik; i++) {
      var p = PRZEDROSTKI[i];
      if (b.length <= p.length + 3) continue;
      if (b.slice(0, p.length) !== p) continue;
      var rdzen = b.slice(p.length);
      if (!IRR[rdzen]) continue;
      wynik = zPrzedrostkiem(IRR[rdzen], p);
    }
    cachePrzedrostkow[b] = wynik;
    return wynik;
  }

  /** Kopia opisu z przedrostkiem doklejonym do każdej formy. */
  function zPrzedrostkiem(d, p) {
    var out = {};
    Object.keys(d).forEach(function (k) {
      var v = d[k];
      if (typeof v === "string") out[k] = p + v;
      else if (Array.isArray(v)) out[k] = v.map(function (x) { return x === null ? null : p + x; });
      else out[k] = v;                       // aux, ppAgree i inne flagi
    });
    /* Posiłkownik się NIE dziedziczy: „andare" chce „essere", ale
       „riandare" jest rzadkie, a „mettere/promettere" oba biorą „avere".
       Zostawiamy to, co było w opisie rdzenia, bo dla par prefiksowych
       pokrywa się w praktyce; wyjątki idą do IRR wprost. */
    return out;
  }

  function reflPronoun(i) { return ["mi", "ti", "si", "ci", "vi", "si"][i]; }

  /* Osoby, w których zaimek dokleja się do formy trybu rozkazującego:
     tu, noi, voi. Formy grzecznościowe (Lei, Loro) trzymają zaimek przed
     czasownikiem — to nie jest wariant stylistyczny, tylko reguła, którą
     kurs sam wykłada w haśle „ref:g-imperativo”.

     Czego ta tabela NIE obejmuje: przeczenia. Włoskie „non alzarti"
     bierze bezokolicznik, nie formę tu, więc „non " + to, co tu wychodzi,
     jest błędem. Silnik zna jeden klucz `imper` i jest to forma
     twierdząca; kto będzie chciał przeczeń, dokłada osobny czas, a nie
     doklejaną cząstkę. */
  var ENKLITYKA = [false, true, false, true, true, false];

  /**
   * Dokleja zaimek zwrotny do formy trybu rozkazującego.
   *
   * „alza" + „ti" → „alzati". Krótka forma tu gubi apostrof i podwaja
   * spółgłoskę zaimka: „fa'" + „ti" → „fatti", tak samo jak „dammi"
   * i „dimmi" z tego samego hasła.
   */
  function doklej(form, pron) {
    if (/'$/.test(form)) return form.slice(0, -1) + pron.charAt(0) + pron;
    return form + pron;
  }

  function auxOf(inf) {
    var b = baseOf(inf);
    if (isRefl(inf)) return "essere";
    var d = irrOf(b);
    if (d && d.aux && d.aux !== "both") return d.aux;
    if (d && d.aux === "both") return "avere";
    return ESSERE_VERBS.indexOf(b) >= 0 ? "essere" : "avere";
  }

  function participle(inf) {
    var b = baseOf(inf), d = irrOf(b);
    if (d && d.pp) return d.pp;
    return stemOf(inf) + REG[groupOf(inf)].pp;
  }

  function agreePp(pp, i, gender) {
    // i: 0..5 ; gender: "m" | "f"
    if (!/o$/.test(pp)) return pp;
    var plural = i >= 3;
    var f = gender === "f";
    if (!plural) return f ? pp.slice(0, -1) + "a" : pp;
    return f ? pp.slice(0, -1) + "e" : pp.slice(0, -1) + "i";
  }

  function gerund(inf) {
    var b = baseOf(inf), d = irrOf(b);
    if (d && d.ger) return d.ger;
    return stemOf(inf) + REG[groupOf(inf)].ger;
  }

  /* ---------------- Czasy proste ---------------- */
  function simple(inf, tense) {
    var b = baseOf(inf), g = groupOf(inf), s = stemOf(inf), d = irrOf(b) || {};
    var out = [];

    if (tense === "futuro" || tense === "condizionale") {
      var fs = d.futStem || futureStem(inf);
      var ends = tense === "futuro" ? FUT : COND;
      for (var i = 0; i < 6; i++) out.push(fs + ends[i]);
    } else if (d[tense]) {
      out = d[tense].slice();
    } else if (tense === "imperf" && /rre$/.test(b)) {
      out = [];   // pokryte w IRR; awaryjnie regularne
      for (var k = 0; k < 6; k++) out.push(join(s, REG.ere.imperf[k], "ere"));
    } else {
      var table = REG[g][tense];
      for (var j = 0; j < 6; j++) out.push(table[j] === null ? null : join(s, table[j], g));
    }

    if (isRefl(inf)) {
      out = out.map(function (f, i) {
        if (!f) return f;
        if (/^(mi|ti|si|ci|vi)\s/.test(f)) return f;
        if (tense === "imper" && ENKLITYKA[i]) return doklej(f, reflPronoun(i));
        return reflPronoun(i) + " " + f;
      });
    }
    return out;
  }

  /* ---------------- Czasy złożone ---------------- */
  function compound(inf, auxTense, gender) {
    var aux = auxOf(inf);
    var auxForms = simple(aux, auxTense);
    var pp = participle(inf);
    var agree = aux === "essere";
    var out = [];
    for (var i = 0; i < 6; i++) {
      var form = auxForms[i];
      if (!form) { out.push(null); continue; }
      var p = agree ? agreePp(pp, i, gender || "m") : pp;
      if (isRefl(inf)) {
        // mi sono svegliato
        out.push(reflPronoun(i) + " " + form + " " + p);
      } else {
        out.push(form + " " + p);
      }
    }
    return out;
  }

  function conjugate(inf, tenseKey, gender) {
    var t = TENSES.filter(function (x) { return x.key === tenseKey; })[0];
    if (!t) return null;
    return t.kind === "simple" ? simple(inf, tenseKey) : compound(inf, t.aux, gender);
  }

  function fullTable(inf, gender) {
    var out = {};
    TENSES.forEach(function (t) { out[t.key] = conjugate(inf, t.key, gender); });
    out._meta = {
      infinito: inf,
      gruppo: groupOf(inf) === "isc" ? "-ire (-isc-)" : "-" + groupOf(inf),
      ausiliare: auxOf(inf),
      participio: participle(inf),
      gerundio: gerund(inf),
      riflessivo: isRefl(inf),
      irregolare: !!irrOf(baseOf(inf))
    };
    return out;
  }

  global.Verbs = {
    PERSONS: PERSONS,
    TENSES: TENSES,
    COMMON: COMMON,
    IRR: IRR,
    isRefl: isRefl,
    groupOf: groupOf,
    auxOf: auxOf,
    participle: participle,
    gerund: gerund,
    conjugate: conjugate,
    fullTable: fullTable
  };

})(window);
