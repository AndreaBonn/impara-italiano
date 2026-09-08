/* ============================================================
   drills-lex.js — zamknięty leksykon włoski dla generatorów.

   Wyłącznie włoski: ani jednego słowa w języku ucznia. Generator
   produkuje ćwiczenia z reguł, więc glosy są niepotrzebne — a gdyby
   tu były, dopisanie języka wymagałoby ich tłumaczenia i plik
   przestałby być neutralny.

   Formy nie są przepisane z tabel, tylko wyprowadzane regułami tam,
   gdzie reguła istnieje: rodzajnik z fonologii, liczba mnoga z
   końcówki. To ten sam pomysł, co Verbs.conjugate — treści nie da
   się rozjechać z kluczem odpowiedzi, bo klucz liczy się z tej samej
   funkcji, co pytanie.

   Skrypt klasyczny, bez zależności.
   ============================================================ */
(function (global) {
  "use strict";

  var Lex = {};

  /* ---------------- Rzeczowniki ---------------- */

  /**
   * s = liczba pojedyncza, g = rodzaj, p = nieregularna mnoga (jeśli jest).
   * Regularną mnogą wyprowadza pluralOf(), więc nie ma jej tutaj: dwa
   * zapisy tej samej formy rozjechałyby się przy pierwszej poprawce.
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

  /* ---------------- Rodzajnik: fonologia, nie tabela ---------------- */

  var VOWEL = /^[aeiouàèéìòù]/i;
  /* lo / gli przed: s+spółgłoska, z, gn, ps, pn, x, y, i+samogłoska */
  var LO = /^(s[^aeiouàèéìòù]|z|gn|ps|pn|x|y|i[aeiou])/i;

  /**
   * Rodzajnik określony dla podanego słowa. `word` to pierwszy wyraz
   * grupy: „il vecchio libro" bierze rodzajnik od „vecchio", nie od „libro".
   */
  function definite(word, gender, plural) {
    var w = String(word || "");
    if (gender === "f") {
      if (plural) return "le";
      return VOWEL.test(w) ? "l'" : "la";
    }
    if (plural) return (LO.test(w) || VOWEL.test(w)) ? "gli" : "i";
    if (VOWEL.test(w)) return "l'";
    return LO.test(w) ? "lo" : "il";
  }

  /** Rodzajnik nieokreślony. Liczby mnogiej nie ma — tam wchodzi partitivo. */
  function indefinite(word, gender) {
    var w = String(word || "");
    if (gender === "f") return VOWEL.test(w) ? "un'" : "una";
    return LO.test(w) ? "uno" : "un";
  }

  /**
   * Liczba mnoga wyprowadzona z końcówki; nieregularne siedzą w NOUNS.p
   *
   * Uwaga na wyrazy proparoksytoniczne na -ico: „medico" daje „medici",
   * nie „medichi". Twardnienie -co → -chi dotyczy tych z akcentem na
   * przedostatniej („parco" → „parchi"), więc -ico sprawdzamy PRZED -co.
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
    return s;                                   // niezmienne: città, yogurt
  }

  /* ---------------- Przymiotniki ---------------- */

  /**
   * type "o" odmienia się na cztery formy (rosso/rossa/rossi/rosse),
   * type "e" na dwie (grande/grandi). Trzeciej klasy w tym zbiorze nie ma.
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

  /** Forma przymiotnika zgodna z rodzajem i liczbą. */
  function adjForm(adj, gender, plural) {
    var base = adj.s;
    if (adj.t === "e") {
      if (!plural) return base;
      return base.slice(0, -1) + "i";
    }
    var stem = base.slice(0, -1);
    /* -co/-go twardnieją w męskiej mnogiej: bianco → bianchi.
       Ale nie te na -ico z akcentem na trzeciej sylabie od końca:
       „simpatico" daje „simpatici", nie „simpatichi". */
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

  /* ---------------- Czasowniki: wybór posiłkowego ---------------- */

  /**
   * aux: "avere", "essere" albo "both" — te ostatnie zmieniają znaczenie
   * razem z posiłkowym (è cambiato / ha cambiato), więc ćwiczenie musi
   * przyjąć obie odpowiedzi.
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

  /* ---------------- Przyimki ---------------- */

  /* Przyimki, które łączą się z rodzajnikiem. „con" dziś już zwykle nie. */
  var PREPS = ["di", "a", "da", "in", "su"];
  var ARTICLES = ["il", "lo", "l'", "la", "i", "gli", "le"];

  /**
   * Przyimek ściągnięty z rodzajnikiem, z reguły a nie z tabeli.
   *
   * Rozbicie jest na dwie części: temat przyimka (di → de, in → ne,
   * reszta bez zmian) i końcówka zależna wyłącznie od rodzajnika.
   * Iloczyn 5 × 7 daje wszystkie 35 form; tabela z 35 wpisami mówiłaby
   * to samo, tylko bez powodu.
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
