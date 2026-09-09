/* ============================================================
   drills.js — ćwiczenia wyprowadzane z reguł, nie pisane ręcznie.

   Siedem generatorów. Każdy jest funkcją CZYSTĄ ziarna: to samo
   ziarno daje to samo zadanie, więc karta błędu może wskazać
   konkretne zadanie parą (generator, ziarno), bez zapisywania treści.

   Dlaczego w ogóle: uczeń, który myli „del" z „dello", potrzebuje
   dwustu powtórzeń, a nie czterech. Kurs ma ich cztery, bo każde
   trzeba napisać i przetłumaczyć na pięć języków. Tutaj treść
   powstaje z leksykonu i reguł, więc nie kosztuje ani napisu, ani
   nagrania.

   Ćwiczenia są WYŁĄCZNIE pisane. Wygenerowanego zdania nie ma w
   indeksie nagrań, więc przycisk głośnika zszedłby do syntezy
   systemowej — czyli do mechanicznego głosu, którego ten projekt
   unika z założenia. Stąd zakaz pól `say`, oraz typów listen i speak.

   Skrypt klasyczny. Wymaga drills-lex.js i i18n.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Drills = {};
  var t = function (k, v) { return I18n.t(k, v); };

  /* ---------------- Losowość powtarzalna ---------------- */

  /**
   * xorshift zasiany napisem: ta sama treść ziarna, ta sama sekwencja.
   *
   * Sprawdzone i odrzucone: rozgrzewka (kilka obrotów na pusto przed
   * pierwszym wynikiem), na wypadek gdyby sąsiednie ziarna „n0", „n1"
   * dawały sąsiednie stany. Pokrycie leksykonu jest pełne z nią i bez
   * niej — 172 testy zielone w obu wersjach — więc nie zostaje.
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

  /* ---------------- Generatory ---------------- */

  /**
   * Przyimek ściągnięty. Zdanie jest szkieletem, nie treścią: liczy się
   * wybór formy, więc reszta zdania zostaje stała i nie rozprasza.
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

  /** Zgodność przymiotnika z rzeczownikiem. */
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
   * Wybór posiłkowego. Czasowniki oznaczone „both" przyjmują obie
   * odpowiedzi: „è cambiato" i „ha cambiato" są poprawne i znaczą co
   * innego. Ćwiczenie, które przyjmuje tylko jedną, uczy nieprawdy.
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

  /** Zaimek dopełnienia bliższego, zgodny z rodzajem i liczbą. */
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

  /* ---------------- Liczby, daty, godziny ---------------- */

  var UNITA = ["zero", "uno", "due", "tre", "quattro", "cinque", "sei", "sette", "otto", "nove"];
  var DIECI = ["dieci", "undici", "dodici", "tredici", "quattordici", "quindici", "sedici",
    "diciassette", "diciotto", "diciannove"];
  var DECINE = ["", "", "venti", "trenta", "quaranta", "cinquanta", "sessanta", "settanta", "ottanta", "novanta"];

  /**
   * Liczebnik główny słownie, 0-9999.
   * Elizja jest właściwym przedmiotem ćwiczenia: „ventuno" i „ventotto"
   * gubią samogłoskę dziesiątki przed „uno" i „otto".
   */
  function numeral(n) {
    if (n < 10) return UNITA[n];
    if (n < 20) return DIECI[n - 10];
    if (n < 100) {
      var d = Math.floor(n / 10), u = n % 10;
      var base = DECINE[d];
      if (u === 0) return base;
      if (u === 1 || u === 8) base = base.slice(0, -1);      // venti + uno → ventuno
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
    /* Zakresy dobrane pod to, co sprawia kłopot: elizje w drugiej dziesiątce,
       setki i tysiące. Losowa liczba z 0-9999 trafiałaby w nie rzadko. */
    var pule = [[11, 19], [20, 39], [40, 99], [100, 999], [1000, 9999]];
    var pula = pick(rnd, pule);
    var n = pula[0] + Math.floor(rnd() * (pula[1] - pula[0] + 1));
    return { t: "fill", q: t("drill.num.q", { n: n }), a: [numeral(n)] };
  }

  var MESI = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno",
    "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

  /**
   * Data. Pierwszy dzień miesiąca jest porządkowy („il primo"), reszta
   * główna, a „otto" i „undici" biorą apostrof: „l'otto", „l'undici".
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
   * Godzina, forma formalna i potoczna. „l'una" jest w liczbie pojedynczej,
   * południe i północ mają własne słowa: to trzy wyjątki w jednym ćwiczeniu.
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

  /* ---------------- Rejestr ---------------- */

  /**
   * Tagi wskazują na istniejące hasła GRAMMAR_REF, żeby quaderno błędów
   * nazywał zagadnienie słowami, które są już przetłumaczone na pięć
   * języków. Liczby idą pod `g-frase`, daty i godziny pod
   * `g-articolo-det`: w obu chodzi o wybór rodzajnika („il primo" wobec
   * „l'otto", „le due" wobec „l'una"), więc to nie jest naciąganie.
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

  /* Pola, których wygenerowane ćwiczenie nie ma prawa nieść: każde z nich
     zaprowadziłoby silnik do nagrania, którego nie ma. */
  var FORBIDDEN = ["say", "alt"];
  var FORBIDDEN_TYPES = ["listen", "speak"];

  /** Jedno zadanie z generatora. Czyste: (id, ziarno) → zawsze to samo. */
  function make(topicId, seed) {
    var topic = byId[topicId];
    if (!topic) return null;
    var ex = topic.make(rng(topicId + "|" + seed));
    FORBIDDEN.forEach(function (f) { delete ex[f]; });
    if (FORBIDDEN_TYPES.indexOf(ex.t) >= 0) return null;
    return { ex: ex, topicId: topicId, tag: topic.tag, seed: String(seed) };
  }

  /** Seria n zadań jednego zagadnienia. */
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
