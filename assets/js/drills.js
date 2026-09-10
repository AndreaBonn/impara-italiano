/* ============================================================
   drills.js — exercises derived from rules, not written by hand.

   Seven generators. Each is a PURE function of a seed: the same seed
   yields the same task, so a mistake card can point at a specific task
   with the pair (generator, seed), without storing any content.

   Why at all: a student who confuses "del" with "dello" needs two hundred
   repetitions, not four. The course has four, because each has to be
   written and translated into five languages. Here the content comes from
   the lexicon and the rules, so it costs neither a string nor a recording.

   The exercises are WRITTEN ONLY. A generated sentence is not in the
   recording index, so the speaker button would fall back to system
   synthesis — that is, to the mechanical voice this project avoids on
   principle. Hence the ban on `say` fields and on the listen and speak
   types.

   Classic script. Requires drills-lex.js and i18n.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Drills = {};
  var t = function (k, v) { return I18n.t(k, v); };

  /* ---------------- Repeatable randomness ---------------- */

  /**
   * xorshift seeded with a string: the same seed content, the same sequence.
   *
   * Tried and rejected: a warm-up (a few turns discarded before the first
   * result), in case neighbouring seeds "n0", "n1" produced neighbouring
   * states. Lexicon coverage is complete with it and without it — 172 green
   * tests in both versions — so it does not stay.
   */
  function rng(seed) {
    var h = 2166136261;
    var s = String(seed);
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return function () {
      h ^= h << 13; h ^= h >>> 17; h ^= h << 5;
      return ((h >>> 0) % 100000) / 100000;
    };
  }

  function pick(rnd, arr) { return arr[Math.floor(rnd() * arr.length) % arr.length]; }

  /* ---------------- Generators ---------------- */

  /**
   * A contracted preposition. The sentence is a skeleton, not content: what
   * counts is the choice of form, so the rest of the sentence stays fixed
   * and does not distract.
   */
  function prepArt(rnd) {
    var noun = pick(rnd, Lex.NOUNS);
    var plural = rnd() < 0.35;
    var word = plural ? Lex.pluralOf(noun) : noun.s;
    var art = Lex.definite(word, noun.g, plural);
    var prep = pick(rnd, Lex.PREPS);
    var odp = Lex.articulate(prep, art);
    return {
      t: "fill",
      q: t("drill.prepArt.q", { prep: prep, noun: word }),
      hint: prep + " + " + art,
      a: [odp, odp + " " + word]
    };
  }

  /** Agreement of the adjective with the noun. */
  function accordo(rnd) {
    var noun = pick(rnd, Lex.NOUNS);
    var adj = pick(rnd, Lex.ADJ);
    var plural = rnd() < 0.5;
    var word = plural ? Lex.pluralOf(noun) : noun.s;
    var art = Lex.definite(word, noun.g, plural);
    return {
      t: "fill",
      q: t("drill.accordo.q", { group: art + " " + word, adj: adj.s }),
      a: [Lex.adjForm(adj, noun.g, plural)]
    };
  }

  /**
   * Choosing the auxiliary. Verbs marked "both" accept both answers:
   * "è cambiato" and "ha cambiato" are both correct and mean different
   * things. An exercise that accepts only one teaches something false.
   */
  function ausiliare(rnd) {
    var verb = pick(rnd, Lex.VERBS);
    var opcje = ["ho", "sono"];
    var a = verb.aux === "avere" ? 0 : verb.aux === "essere" ? 1 : null;
    if (a === null) {
      return {
        t: "multi",
        q: t("drill.aux.both", { verb: verb.inf }),
        opts: opcje,
        a: [0, 1],
        why: t("drill.aux.whyBoth", { verb: verb.inf })
      };
    }
    return {
      t: "mcq",
      q: t("drill.aux.q", { verb: verb.inf }),
      opts: opcje,
      a: a,
      shuffle: false,
      why: t(verb.refl ? "drill.aux.whyRefl" : a === 1 ? "drill.aux.whyEssere" : "drill.aux.whyAvere")
    };
  }

  /** The direct object pronoun, agreeing in gender and number. */
  function pronomi(rnd) {
    var noun = pick(rnd, Lex.NOUNS);
    var plural = rnd() < 0.5;
    var word = plural ? Lex.pluralOf(noun) : noun.s;
    var art = Lex.definite(word, noun.g, plural);
    var forma = plural ? (noun.g === "f" ? "le" : "li") : (noun.g === "f" ? "la" : "lo");
    var verb = pick(rnd, ["vedo", "compro", "prendo", "conosco"]);
    return {
      t: "fill",
      q: t("drill.pron.q", { sentence: verb + " " + art + " " + word }),
      a: [forma + " " + verb]
    };
  }

  /* ---------------- Numbers, dates, times ---------------- */

  var UNITA = ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove"];
  var DIECI = ["dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici",
    "diciassette", "diciotto", "diciannove"];
  var DECINE = ["", "", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"];

  /**
   * A cardinal number in words, 0-9999.
   * Elision is the real subject of the exercise: "ventuno" and "ventotto"
   * lose the vowel of the tens before "uno" and "otto".
   */
  function numeral(n) {
    if (n < 10) return UNITA[n];
    if (n < 20) return DIECI[n - 10];
    if (n < 100) {
      var d = Math.floor(n / 10), u = n % 10;
      var base = DECINE[d];
      if (u === 0) return base;
      if (u === 1 || u === 8) base = base.slice(0, -1);      // venti + uno -> ventuno
      return base + (u === 3 ? "tré" : UNITA[u]);
    }
    if (n < 1000) {
      var c = Math.floor(n / 100), r = n % 100;
      var pre = c === 1 ? "cento" : UNITA[c] + "cento";
      return r ? pre + numeral(r) : pre;
    }
    var m = Math.floor(n / 1000), rr = n % 1000;
    var pref = m === 1 ? "mille" : UNITA[m] + "mila";
    return rr ? pref + numeral(rr) : pref;
  }

  function numeri(rnd) {
    /* The ranges are chosen for what causes trouble: elisions in the
       twenties, hundreds and thousands. A random number from 0-9999 would
       hit them rarely. */
    var pule = [[11, 19], [20, 39], [40, 99], [100, 999], [1000, 9999]];
    var pula = pick(rnd, pule);
    var n = pula[0] + Math.floor(rnd() * (pula[1] - pula[0] + 1));
    return { t: "fill", q: t("drill.num.q", { n: n }), a: [numeral(n)] };
  }

  var MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

  /**
   * A date. The first day of the month is ordinal ("il primo"), the rest
   * cardinal, and "otto" and "undici" take an apostrophe: "l'otto",
   * "l'undici".
   */
  function date(rnd) {
    var giorno = 1 + Math.floor(rnd() * 28);
    var mese = pick(rnd, MESI);
    var slowo = giorno === 1 ? "primo" : numeral(giorno);
    var art = /^[aeiou]/.test(slowo) ? "l'" : "il ";
    return {
      t: "fill",
      q: t("drill.date.q", { day: giorno, month: mese }),
      a: [art + slowo + " " + mese]
    };
  }

  /**
   * The time, formal and colloquial. "l'una" is singular, and noon and
   * midnight have words of their own: three exceptions in one exercise.
   */
  function ore(rnd) {
    var h = Math.floor(rnd() * 24);
    var m = pick(rnd, [0, 15, 30, 45]);
    var h12 = h % 12 === 0 ? 12 : h % 12;
    var odp;
    if (h === 12 && m === 0) odp = "mezzogiorno";
    else if (h === 0 && m === 0) odp = "mezzanotte";
    else {
      var baza = h12 === 1 ? "l'una" : "le " + numeral(h12);
      if (m === 0) odp = baza;
      else if (m === 15) odp = baza + " e un quarto";
      else if (m === 30) odp = baza + " e mezza";
      else odp = baza + " e quarantacinque";
    }
    var alt = [odp];
    if (m === 45) {
      var nast = (h12 % 12) + 1;
      alt.push((nast === 1 ? "l'una" : "le " + numeral(nast)) + " meno un quarto");
    }
    return {
      t: "fill",
      q: t("drill.ore.q", { time: (h < 10 ? "0" : "") + h + ":" + (m < 10 ? "0" : "") + m }),
      a: alt
    };
  }

  /* ---------------- The registry ---------------- */

  /**
   * The tags point at existing GRAMMAR_REF entries, so that the mistake
   * notebook names the topic in words already translated into five
   * languages. Numbers go under `g-frase`, dates and times under
   * `g-articolo-det`: both are about choosing the article ("il primo"
   * against "l'otto", "le due" against "l'una"), so it is not a stretch.
   */
  var TOPICS = [
    { id: "prep-art", tag: "g-preposizioni", make: prepArt },
    { id: "accordo", tag: "g-agg-accordo", make: accordo },
    { id: "ausiliare", tag: "g-passato-prossimo", make: ausiliare },
    { id: "pronomi", tag: "g-pron-diretti", make: pronomi },
    { id: "numeri", tag: "g-frase", make: numeri },
    { id: "date", tag: "g-articolo-det", make: date },
    { id: "ore", tag: "g-articolo-det", make: ore }
  ];

  var byId = {};
  TOPICS.forEach(function (x) { byId[x.id] = x; });

  /* The fields a generated exercise has no right to carry: each of them
     would lead the engine to a recording that does not exist. */
  var FORBIDDEN = ["say", "alt"];
  var FORBIDDEN_TYPES = ["listen", "speak"];

  /** One task from a generator. Pure: (id, seed) -> always the same. */
  function make(topicId, seed) {
    var topic = byId[topicId];
    if (!topic) return null;
    var ex = topic.make(rng(topicId + "|" + seed));
    FORBIDDEN.forEach(function (f) { delete ex[f]; });
    if (FORBIDDEN_TYPES.indexOf(ex.t) >= 0) return null;
    return { ex: ex, topicId: topicId, tag: topic.tag, seed: String(seed) };
  }

  /** A run of n tasks on one topic. */
  function session(topicId, n, seedBase) {
    var out = [];
    for (var i = 0; i < n; i++) {
      var item = make(topicId, seedBase + "#" + i);
      if (item) out.push(item);
    }
    return out;
  }

  Drills.TOPICS = TOPICS;
  Drills.make = make;
  Drills.session = session;
  Drills.numeral = numeral;
  Drills.MESI = MESI;

  global.Drills = Drills;

})(window);
