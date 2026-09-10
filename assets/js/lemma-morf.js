/* ============================================================
   lemma-morf.js — the rules of Italian word form. Strings only, no dictionary.

   What lives here is whatever can be settled BY LOOKING AT THE WORD:
   splitting a compound form, the plural, gender, the superlative, the
   tonic accent, attached pronouns and a closed list of function words.
   None of it asks about the course and none of it knows what the student
   has studied.

   The verdict — the reverse index from the conjugator, the course
   dictionary, aliases and canonical entries — sits in lemma.js, and this
   file knows nothing about it.

   WHY THE BORDER RUNS HERE. This is the split between CANDIDATES and
   VERDICT, that is between what generates hypotheses and what filters
   them. The plural rule ("amiche" -> "amica") is a pure function of a
   string and is checked with a single assert; the verdict requires the
   dictionary of the whole course to be built. As long as one stood next
   to the other, testing the rule paid the price of the verdict.

   Classic script, no dependencies. Must come BEFORE lemma.js.
   ============================================================ */
(function (global) {
  "use strict";

  /**
   * Multi-word forms ("sono andato", "era entrato") are split, but THE
   * AUXILIARY STAYS OUT OF THE INDEX.
   *
   * Both words used to go in, so "era" landed in the index for every verb
   * taking "essere" (trapassato: era entrato, era rimasto...), and "hanno"
   * for every verb taking "avere". Tapping "era" in a text showed the first
   * of a dozen randomly collected verbs rather than "essere".
   * Measured: "era" resolved to 12 entries, "hanno" to 65.
   *
   * The auxiliaries themselves do not disappear from the index: "essere"
   * and "avere" conjugate like any other verb and contribute their simple
   * forms.
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

  /** The words of a form, without the auxiliary. A single-word form comes back as it is. */
  function slowa(forma) {
    var cz = String(forma).toLowerCase().split(/\s+/).filter(Boolean);
    if (cz.length < 2) return cz;
    return cz.filter(function (w) {
      return !Object.prototype.hasOwnProperty.call(POSILKOWE, w);
    });
  }

  /** A single-word entry in infinitive form. A phrase is not one. */
  function czasownikowe(haslo) {
    return /^[a-zàèéìòù]+(are|ere|ire|arsi|ersi|irsi)$/.test(haslo);
  }

  /* --------------------------------------------------------
     Nouns and adjectives: plural and gender.

     The order of the rules matters: the more specific ones first, because
     "amiche" must come down to "amica" and not to "amiche" without the "h".
     -------------------------------------------------------- */
  var REGULY = [
    /* The superlative. The "h" is there to preserve the hard "k":
       antico -> antichissimo, so going back it has to be removed, otherwise
       we get "anticho" and the dictionary finds nothing. */
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
    [/eri$/, "erio"],    // misteri -> misterio (rare, but cheap)
    [/che$/, "co"],      // poche -> poco, ricche -> ricco
    [/i$/, "io"],        // negozi -> negozio, vecchi -> vecchio
    [/i$/, "o"],         // libri -> libro
    [/i$/, "e"],         // cani -> cane
    [/i$/, "a"],         // problemi -> problema
    [/e$/, "a"],         // case -> casa
    [/e$/, "o"],         // rare, but cheap
    [/a$/, "o"],         // bella -> bello
    [/o$/, "a"]          // the other way round, for entries written in the feminine
  ];

  /** The base forms to try for a non-verbal word. */
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

  /* Articles, contracted prepositions and particles: they are not entries
     in the course dictionary, yet they make up a fifth of any text. We keep
     them here as a closed list so that "a tap into nothing" does not land
     on words the first grammar lesson explains anyway. */
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
    /* Shortened forms before an apostrophe, and particles that stand alone
       in a text. "c" comes from "c'era", "mal" from "mal di testa": without
       them a tap landed on a letter that cannot be explained. */
    "c né ne' sé se' no né mal quei lui lei esso essa io tu noi voi me te sé").split(/\s+/);

  /* Numerals. A closed set, taught at A1, and texts about prices, times and
     timetables are full of them. Without this "quattro" and "quaranta"
     would be silence in a text whose entire content is numbers. */
  var LICZEBNIKI = ("zero uno una due tre quattro cinque sei sette otto nove dieci " +
    "undici dodici tredici quattordici quindici sedici diciassette diciotto diciannove " +
    "venti trenta quaranta cinquanta sessanta settanta ottanta novanta cento mille mila " +
    "primo prima secondo seconda terzo terza quarto quarta quinto quinta " +
    "milione milioni miliardo miliardi " +
    /* Forms before an apostrophe: "vent'anni", "trent'anni". Splitting
       leaves the tens element alone, and that is still a numeral. */
    "vent trent quarant cinquant sessant settant ottant novant").split(/\s+/);

  var funkcyjneSet = {};
  FUNKCYJNE.concat(LICZEBNIKI).forEach(function (w) { funkcyjneSet[w] = true; });

  function funkcyjny(w) {
    return !!funkcyjneSet[String(w).toLowerCase()];
  }

  /* The tonic accent removed: "pèsca" must be found when the student taps
     "pesca". A dictionary entry may be written with the accent, because
     that is how dictionaries give it and how the narrator reads it; the
     form in the text has no accent and cannot have one. Without this alias
     one of the two would not work. */
  var AKCENTY = { "à": "a", "á": "a", "è": "e", "é": "e", "ì": "i", "í": "i",
    "ò": "o", "ó": "o", "ù": "u", "ú": "u" };

  function bezAkcentow(w) {
    return w.replace(/[àáèéìíòóùú]/g, function (c) { return AKCENTY[c] || c; });
  }

  /* Pronouns attached to the infinitive, the gerund and the imperative:
     "mandarli", "preoccuparti", "dammelo". Italian writes them together
     with the verb, so without detaching them this is one unknown word. */
  var ENKLITYKI = ["glielo", "gliela", "glieli", "gliele", "gliene",
    "melo", "mela", "meli", "mele", "mene", "telo", "tela", "teli", "tele", "tene",
    "celo", "cela", "celi", "cele", "cene", "velo", "vela", "veli", "vele", "vene",
    "mi", "ti", "si", "ci", "vi", "lo", "la", "li", "le", "ne", "gli"];

  /**
   * Detaches pronouns from the end of a word and returns the possible stems.
   *
   * "mandarli" -> "mandar" -> "mandare": the infinitive loses its final "e"
   * before the pronoun, so the stem still has to be rebuilt.
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
