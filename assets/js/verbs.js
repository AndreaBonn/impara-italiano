/* ============================================================
   verbs.js — the Italian verb conjugation engine.

   It handles regular -are / -ere / -ire (including the -isc- pattern),
   spelling changes (-care/-gare/-ciare/-giare/-iare), inheritance of
   irregularity through a prefix, and compound tenses with participle
   agreement. Used by: the "Verb conjugation" view, exercises of type
   "conj" and form recognition in lemma.js.

   The Italian TABLES themselves sit in verbs-data.js — the same principle
   by which the course data is separated from the rendering engine: adding
   an irregular verb must not touch the file with the algorithm.

   What stayed here although it looks like data: the list of prefixes and
   the two exception dictionaries next to it. That is not Italian to be
   browsed but the tuning of one heuristic (irrOf) — and the reasons that
   list is closed are read together with the code that walks it.
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

  /* ---------------- Helpers ---------------- */
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

  /** Spelling changes when an ending is attached. */
  function join(stem, ending, group) {
    if (group === "are") {
      // -care / -gare : h before e/i  (cerco -> cerchi, pago -> pagherò)
      if (/(c|g)$/.test(stem) && /^[ei]/.test(ending)) return stem + "h" + ending;
      // -ciare / -giare / -sciare : a single i  (comincio -> cominci, not "cominci-i")
      if (/(ci|gi|sci)$/.test(stem) && /^[ei]/.test(ending)) return stem.slice(0, -1) + ending;
      // -iare with no stress on the i : studi + iamo -> studiamo
      if (/i$/.test(stem) && /^i/.test(ending)) return stem.slice(0, -1) + ending;
    }
    if (group === "ere" || group === "ire" || group === "isc") {
      if (/(c|g)$/.test(stem) && /^(iamo|iate|i$)/.test(ending)) return stem + ending; // legg + iamo
    }
    return stem + ending;
  }

  function futureStem(inf) {
    var b = baseOf(inf), g = groupOf(inf), s = stemOf(inf);
    if (/rre$/.test(b)) return b.replace(/e$/, "");           // porre -> porr
    if (g === "are") {
      if (/(c|g)$/.test(s)) return s + "her";                  // cercare -> cercher
      if (/(ci|gi|sci)$/.test(s)) return s.slice(0, -1) + "er";// mangiare -> manger
      return s + "er";
    }
    if (g === "ere") return s + "er";
    return s + "ir";
  }

  /* --------------------------------------------------------
     Prefixed verbs inherit irregularity.

     "promettere" is "mettere" with a prefix and conjugates the same way:
     the participle is "promesso", not "promettuto". Without this the
     conjugation view showed the student non-existent forms — for
     "promettere", "permettere", "riscrivere", "comporre" and the whole
     rest of the family. Found when the lookup gate could not recognise
     "promesso".

     The prefix must come from a closed list, and that matters: "ends with
     a known verb" alone would make "mandare" a relative of "andare" and
     produce "mando/vado". The list is cheap, the mistake is not.
     -------------------------------------------------------- */
  var PRZEDROSTKI = [
    "ri", "pro", "per", "pre", "com", "con", "contro", "co",
    "sotto", "sopra", "sovra", "super", "inter", "intra",
    "in", "im", "ir", "ap", "am", "ab", "ad", "af", "ag", "al", "as", "at",
    "tras", "trans", "tra", "dis", "de", "es", "ex", "re", "sor", "so", "su", "s"
  ];

  /* Splitting into prefix and root is a heuristic of SPELLING, not of
     etymology, so the closed list of prefixes above rules out
     "mandare = m + andare" but does not rule out everything. These three
     slipped through:

       restare  looks like re + stare and was getting "stare" forms,
                that is "restanno" instead of "restano";
       prestare the same thing, the same root;
       affare   is not even a verb — it lands here because it ends in
                -are, and the course dictionary conjugates everything with
                that ending.

     Found by the coverage gate: "restano" from a reading had nothing to
     be recognised by. The list only grows when the gate catches something
     again. */
  var BEZ_DZIEDZICZENIA = { restare: 1, prestare: 1, affare: 1 };

  /* An assimilated prefix that the spelling does not show: "ottenere" is
     ob+tenere, "mantenere" is manu+tenere. Adding "ot" or "man" to the list
     of prefixes would pull "mandare" onto "dare", so these families are
     pointed at directly. Without this "ottiene" came out as "ottene". */
  var DZIEDZICZY_WPROST = { ottenere: "tenere", mantenere: "tenere", sostenere: "tenere" };

  var cachePrzedrostkow = {};

  /**
   * The irregularity description for an infinitive, with prefix inheritance.
   *
   * @param {string} b the infinitive in base form (without `-si`)
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

  /** A copy of the description with the prefix attached to every form. */
  function zPrzedrostkiem(d, p) {
    var out = {};
    Object.keys(d).forEach(function (k) {
      var v = d[k];
      if (typeof v === "string") out[k] = p + v;
      else if (Array.isArray(v)) out[k] = v.map(function (x) { return x === null ? null : p + x; });
      else out[k] = v;                       // aux, ppAgree and other flags
    });
    /* The auxiliary is NOT inherited: "andare" wants "essere", but
       "riandare" is rare, and "mettere/promettere" both take "avere". We
       keep whatever the root's description had, because for prefixed pairs
       it agrees in practice; exceptions go straight into IRR. */
    return out;
  }

  function reflPronoun(i) { return ["mi", "ti", "si", "ci", "vi", "si"][i]; }

  /* The persons where the pronoun attaches to the imperative form: tu, noi,
     voi. The polite forms (Lei, Loro) keep the pronoun before the verb —
     that is not a stylistic variant but a rule the course itself teaches in
     the "ref:g-imperativo" entry.

     What this table does NOT cover: negation. The Italian "non alzarti"
     takes the infinitive, not the tu form, so "non " + whatever comes out
     here is wrong. The engine knows one `imper` key and it is the
     affirmative form; whoever wants negatives adds a separate tense rather
     than a particle glued on. */
  var ENKLITYKA = [false, true, false, true, true, false];

  /**
   * Attaches the reflexive pronoun to an imperative form.
   *
   * "alza" + "ti" -> "alzati". The short tu form loses its apostrophe and
   * doubles the pronoun's consonant: "fa'" + "ti" -> "fatti", just like
   * "dammi" and "dimmi" from the same entry.
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

  /* ---------------- Simple tenses ---------------- */
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
      out = [];   // covered in IRR; regular as a fallback
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

  /* ---------------- Compound tenses ---------------- */
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
