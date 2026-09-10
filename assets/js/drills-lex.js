/* ============================================================
   drills-lex.js — a closed Italian lexicon for the generators.

   Italian only: not a single word in the student's language. The
   generator produces exercises from rules, so glosses are unnecessary —
   and if they were here, adding a language would require translating them
   and the file would stop being neutral.

   The forms are not transcribed from tables but derived by rule wherever
   a rule exists: the article from phonology, the plural from the ending.
   It is the same idea as Verbs.conjugate — the content cannot drift away
   from the answer key, because the key is computed by the same function
   as the question.

   Classic script, no dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var Lex = {};

  /* ---------------- Nouns ---------------- */

  /**
   * s = singular, g = gender, p = irregular plural (when there is one).
   * The regular plural is derived by pluralOf(), so it is not here: two
   * records of the same form would drift apart at the first correction.
   */
  var NOUNS = [
    { s: "libro", g: "m" }, { s: "tavolo", g: "m" }, { s: "quaderno", g: "m" },
    { s: "bicchiere", g: "m" }, { s: "giornale", g: "m" }, { s: "ristorante", g: "m" },
    { s: "treno", g: "m" }, { s: "biglietto", g: "m" }, { s: "telefono", g: "m" },
    { s: "cane", g: "m" }, { s: "gatto", g: "m" }, { s: "bambino", g: "m" },
    { s: "medico", g: "m" }, { s: "amico", g: "m", p: "amici" }, { s: "insegnante", g: "m" },
    { s: "albergo", g: "m", p: "alberghi" }, { s: "parco", g: "m", p: "parchi" },
    { s: "problema", g: "m", p: "problemi" }, { s: "programma", g: "m", p: "programmi" },
    { s: "zaino", g: "m" }, { s: "zucchero", g: "m" }, { s: "specchio", g: "m", p: "specchi" },
    { s: "studente", g: "m" }, { s: "spettacolo", g: "m" }, { s: "stadio", g: "m", p: "stadi" },
    { s: "gnocco", g: "m", p: "gnocchi" }, { s: "psicologo", g: "m", p: "psicologi" },
    { s: "yogurt", g: "m", p: "yogurt" }, { s: "orologio", g: "m", p: "orologi" },
    { s: "ospedale", g: "m" }, { s: "albero", g: "m" }, { s: "ufficio", g: "m", p: "uffici" },
    { s: "esame", g: "m" }, { s: "inverno", g: "m" }, { s: "uomo", g: "m", p: "uomini" },

    { s: "casa", g: "f" }, { s: "sedia", g: "f", p: "sedie" }, { s: "chiave", g: "f" },
    { s: "stazione", g: "f", p: "stazioni" }, { s: "città", g: "f", p: "città" },
    { s: "notte", g: "f" }, { s: "macchina", g: "f" }, { s: "finestra", g: "f" },
    { s: "ragazza", g: "f" }, { s: "sorella", g: "f" }, { s: "cucina", g: "f" },
    { s: "camera", g: "f" }, { s: "piazza", g: "f", p: "piazze" }, { s: "strada", g: "f" },
    { s: "amica", g: "f", p: "amiche" }, { s: "banca", g: "f", p: "banche" },
    { s: "farmacia", g: "f", p: "farmacie" }, { s: "università", g: "f", p: "università" },
    { s: "acqua", g: "f" }, { s: "arancia", g: "f", p: "arance" }, { s: "isola", g: "f" },
    { s: "estate", g: "f" }, { s: "opera", g: "f" }, { s: "ora", g: "f" },
    { s: "mano", g: "f", p: "mani" }, { s: "moglie", g: "f", p: "mogli" }
  ];

  /* ---------------- The article: phonology, not a table ---------------- */

  var VOWEL = /^[aeiouàèéìòù]/i;
  /* lo / gli before: s+consonant, z, gn, ps, pn, x, y, i+vowel */
  var LO = /^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y|i[aeiou])/i;

  /**
   * The definite article for a given word. `word` is the first word of the
   * group: "il vecchio libro" takes its article from "vecchio", not "libro".
   */
  function definite(word, gender, plural) {
    var w = String(word || "");
    if (gender === "f") {
      if (plural) return "le";
      return VOWEL.test(w) ? "l'" : "la";
    }
    if (plural) return (LO.test(w) || VOWEL.test(w)) ? "gli" : "i";
    /* LO is tested BEFORE the vowel, because one of its conditions is
       i+vowel ("lo iodio"): in the opposite order that branch was dead and
       "l'iodio" came out. There is no such word in the lexicon today — and
       that is exactly why the rule has to be right now, and not when
       somebody adds one. */
    if (LO.test(w)) return "lo";
    return VOWEL.test(w) ? "l'" : "il";
  }

  /** The indefinite article. There is no plural — the partitivo goes there. */
  function indefinite(word, gender) {
    var w = String(word || "");
    if (gender === "f") return VOWEL.test(w) ? "un'" : "una";
    return LO.test(w) ? "uno" : "un";
  }

  /**
   * The plural derived from the ending; the irregular ones sit in NOUNS.p
   *
   * Beware of proparoxytone words in -ico: "medico" gives "medici", not
   * "medichi". The hardening -co -> -chi applies to those stressed on the
   * penultimate syllable ("parco" -> "parchi"), so -ico is tested BEFORE -co.
   */
  function pluralOf(noun) {
    if (noun.p) return noun.p;
    var s = noun.s;
    if (/ca$/.test(s)) return s.slice(0, -2) + "che";
    if (/ga$/.test(s)) return s.slice(0, -2) + "ghe";
    if (/a$/.test(s)) return s.slice(0, -1) + (noun.g === "f" ? "e" : "i");
    if (/ico$/.test(s)) return s.slice(0, -2) + "ci";
    if (/co$/.test(s)) return s.slice(0, -2) + "chi";
    if (/go$/.test(s)) return s.slice(0, -2) + "ghi";
    if (/io$/.test(s)) return s.slice(0, -2) + "i";
    if (/[oe]$/.test(s)) return s.slice(0, -1) + "i";
    return s;                                   // invariable: città, yogurt
  }

  /* ---------------- Adjectives ---------------- */

  /**
   * type "o" inflects into four forms (rosso/rossa/rossi/rosse),
   * type "e" into two (grande/grandi). There is no third class in this set.
   */
  var ADJ = [
    { s: "rosso", t: "o" }, { s: "nuovo", t: "o" }, { s: "vecchio", t: "o" },
    { s: "piccolo", t: "o" }, { s: "alto", t: "o" }, { s: "basso", t: "o" },
    { s: "caldo", t: "o" }, { s: "freddo", t: "o" }, { s: "aperto", t: "o" },
    { s: "chiuso", t: "o" }, { s: "bianco", t: "o" }, { s: "lungo", t: "o" },
    { s: "italiano", t: "o" }, { s: "stanco", t: "o" }, { s: "simpatico", t: "o" },
    { s: "grande", t: "e" }, { s: "verde", t: "e" }, { s: "difficile", t: "e" },
    { s: "facile", t: "e" }, { s: "importante", t: "e" }, { s: "interessante", t: "e" },
    { s: "giovane", t: "e" }, { s: "veloce", t: "e" }, { s: "gentile", t: "e" }
  ];

  /** The adjective form agreeing in gender and number. */
  function adjForm(adj, gender, plural) {
    var base = adj.s;
    if (adj.t === "e") {
      if (!plural) return base;
      return base.slice(0, -1) + "i";
    }
    var stem = base.slice(0, -1);
    /* -co/-go harden in the masculine plural: bianco -> bianchi.
       But not those in -ico stressed on the third syllable from the end:
       "simpatico" gives "simpatici", not "simpatichi". */
    if (plural && gender === "m") {
      if (/ico$/.test(base)) return stem + "i";
      if (/[cg]$/.test(stem)) return stem + "hi";
      return stem + "i";
    }
    if (plural) {
      if (/c$/.test(stem)) return stem + "he";
      if (/g$/.test(stem)) return stem + "he";
      return stem + "e";
    }
    return stem + (gender === "f" ? "a" : "o");
  }

  /* ---------------- Verbs: choosing the auxiliary ---------------- */

  /**
   * aux: "avere", "essere" or "both" — the last ones change meaning along
   * with the auxiliary (è cambiato / ha cambiato), so the exercise has to
   * accept both answers.
   */
  var VERBS = [
    { inf: "mangiare", aux: "avere" }, { inf: "parlare", aux: "avere" },
    { inf: "comprare", aux: "avere" }, { inf: "leggere", aux: "avere" },
    { inf: "scrivere", aux: "avere" }, { inf: "vedere", aux: "avere" },
    { inf: "fare", aux: "avere" }, { inf: "dire", aux: "avere" },
    { inf: "prendere", aux: "avere" }, { inf: "capire", aux: "avere" },
    { inf: "guardare", aux: "avere" }, { inf: "aspettare", aux: "avere" },
    { inf: "conoscere", aux: "avere" }, { inf: "chiedere", aux: "avere" },

    { inf: "andare", aux: "essere" }, { inf: "venire", aux: "essere" },
    { inf: "arrivare", aux: "essere" }, { inf: "partire", aux: "essere" },
    { inf: "uscire", aux: "essere" }, { inf: "entrare", aux: "essere" },
    { inf: "tornare", aux: "essere" }, { inf: "restare", aux: "essere" },
    { inf: "nascere", aux: "essere" }, { inf: "morire", aux: "essere" },
    { inf: "diventare", aux: "essere" }, { inf: "piacere", aux: "essere" },
    { inf: "alzarsi", aux: "essere", refl: true },
    { inf: "svegliarsi", aux: "essere", refl: true },
    { inf: "vestirsi", aux: "essere", refl: true },
    { inf: "lavarsi", aux: "essere", refl: true },

    { inf: "cambiare", aux: "both" }, { inf: "finire", aux: "both" },
    { inf: "cominciare", aux: "both" }, { inf: "salire", aux: "both" },
    { inf: "scendere", aux: "both" }, { inf: "correre", aux: "both" },
    { inf: "passare", aux: "both" }, { inf: "vivere", aux: "both" }
  ];

  /* ---------------- Prepositions ---------------- */

  /* The prepositions that combine with the article. "con" usually no longer does. */
  var PREPS = ["di", "a", "da", "in", "su"];
  var ARTICLES = ["il", "lo", "l'", "la", "i", "gli", "le"];

  /**
   * A preposition contracted with the article, by rule rather than from a
   * table.
   *
   * The split has two parts: the preposition stem (di -> de, in -> ne, the
   * rest unchanged) and a suffix depending on the article alone. The
   * product 5 × 7 gives all 35 forms; a table of 35 entries would say the
   * same thing, only without a reason.
   */
  var PREP_STEM = { di: "de", a: "a", da: "da", in: "ne", su: "su" };
  var ART_SUFFIX = { "il": "l", "lo": "llo", "l'": "ll'", "la": "lla", "i": "i", "gli": "gli", "le": "lle" };

  function articulate(prep, article) {
    var stem = PREP_STEM[prep];
    var suffix = ART_SUFFIX[article];
    if (stem === undefined || suffix === undefined) return prep + " " + article;
    return stem + suffix;
  }

  Lex.NOUNS = NOUNS;
  Lex.ADJ = ADJ;
  Lex.VERBS = VERBS;
  Lex.PREPS = PREPS;
  Lex.ARTICLES = ARTICLES;
  Lex.definite = definite;
  Lex.indefinite = indefinite;
  Lex.pluralOf = pluralOf;
  Lex.adjForm = adjForm;
  Lex.articulate = articulate;

  global.Lex = Lex;

})(window);
