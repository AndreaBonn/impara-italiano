/* ============================================================
   lemma.js — from a word in a text to an entry the course can explain.

   The student taps "bevono" and must see "bere". Without this, readings
   are a wall of text with glosses for a dozen words chosen by us rather
   than by them.

   WHY NOT A MORPHOLOGICAL DICTIONARY. The course has no build step and
   must work from file://, so any dictionary would have to be shipped as a
   .js file loaded at startup. A free Italian morphology weighs megabytes,
   and one trimmed to the course entries covers some twenty per cent of
   the words in our own texts, because 920 of the 1410 lexicon items are
   multi-word expressions ("a che ora", "di solito") from which nothing
   can be inflected.

   Instead: we DERIVE the forms. The conjugator (verbs.js) can produce
   every form of every verb anyway, so the reverse index is built from it
   on first use and costs zero bytes of transfer. Nouns and adjectives
   come down by rule (lemma-morf.js), because the Italian plural is
   regular to a degree the Polish one never is.

   The boundary is declared, not hidden: this is a heuristic that
   generates CANDIDATES, and the dictionary decides. "Bevi" yields the
   candidates "bere" and "bevo"; the one the course knows wins. A
   candidate nobody knows is not an answer — it is silence, and the view
   must say so plainly (see views-lookup.js) rather than fake a success.

   The same split runs across files: form rules in lemma-morf.js, the
   verdict here.

   Classic script. Requires lemma-morf.js.
   ============================================================ */
(function (global) {
  "use strict";

  var M = global.LemmaMorf;

  /**
   * The verbs worth building an index for.
   *
   * COMMON and IRR from verbs.js are the list the course actually teaches;
   * we add the infinitives spotted in the course dictionary, if Core is at
   * hand. We do not go outside the course: the index must stay small and
   * match what the student has seen.
   */
  /* Infinitives added from outside (a gate, a test). In the browser Core is
     enough, but the checking script does not load the whole state. */
  var dodatkowe = [];

  function zrodloCzasownikow() {
    var V = global.Verbs;
    if (!V) return [];
    var zbior = {};
    (V.COMMON || []).forEach(function (w) { zbior[w] = true; });
    Object.keys(V.IRR || {}).forEach(function (w) { zbior[w] = true; });
    dodatkowe.forEach(function (w) { zbior[w] = true; });

    /* Course entries in -are/-ere/-ire are infinitives and have to be
       conjugated: without that "aspetta" and "sceglie" are silence, even
       though the course teaches both verbs. COMMON and IRR from verbs.js
       cover only part of the course. The source is the WHOLE dictionary,
       not the lesson lexicon alone: a verb added to a reading must inflect
       just like one from a lesson. */
    Object.keys(slownikKursu()).forEach(function (haslo) {
      if (M.czasownikowe(haslo)) zbior[haslo] = true;
    });
    return Object.keys(zbior);
  }

  var indeks = null;

  /**
   * Builds the reverse index: form -> [infinitives].
   *
   * Lazily, at the first question, not at startup: a student who never
   * opens a reading has nothing to pay for. One call per session.
   */
  function zbuduj() {
    if (indeks) return indeks;
    indeks = {};
    var V = global.Verbs;
    if (!V) return indeks;

    var tempy = (V.TENSES || []).map(function (t) { return t.key; });

    zrodloCzasownikow().forEach(function (inf) {
      function dodaj(forma) {
        if (!forma) return;
        M.slowa(forma).forEach(function (w) {
          /* Single-letter forms stay. The first version rejected them as
             noise and "è" fell out of the index — the most frequent word in
             an Italian text, 18 occurrences in the course readings alone.
             The size of the index is not a problem we had. */
          if (!w) return;
          if (!indeks[w]) indeks[w] = [];
          if (indeks[w].indexOf(inf) < 0) indeks[w].push(inf);
        });
      }
      dodaj(inf);
      /* The participle agrees with the object and the subject, so next to
         "usato" a text has "usata", "usati", "usate". Without those three
         the feminine form was silence next to an inflected verb the course
         teaches — the worst kind of gap, because it looks like chance. */
      var im = V.participle && V.participle(inf);
      dodaj(im);
      if (im && /o$/.test(im)) ["a", "i", "e"].forEach(function (k) {
        dodaj(im.slice(0, -1) + k);
      });
      dodaj(V.gerund && V.gerund(inf));
      tempy.forEach(function (klucz) {
        var formy = V.conjugate(inf, klucz) || [];
        formy.forEach(dodaj);
      });
    });
    return indeks;
  }

  /* --------------------------------------------------------
     The deciding dictionary.

     Built HERE and not at the caller, and that is the whole reason this
     section exists. The first version had two builds: one in the browser
     from Core.registry, the other by hand in the checking script. Two
     builds drift apart at the first change, and then the gate measures
     something other than what the student gets — that is, green with no
     coverage.
     -------------------------------------------------------- */
  var slownik = null;
  var znane = null;

  /* An unaccented form does NOT become an entry of its own, it points at
     the canonical one. The first version added it to the dictionary
     alongside — and then tapping "pesca" resolved to "pesca", because the
     form from the text is the first candidate. The card showed a word with
     no accent, no gloss and no recording, that is exactly what this alias
     was meant to fix. */
  var aliasy = {};

  function dodajDoSlownika(zbior, s) {
    if (!s) return;
    var w = String(s).toLowerCase().replace(/[’']/g, "'").trim();
    if (!w) return;
    zbior[w] = true;
    if (M.bezAkcentow(w) !== w) aliasy[M.bezAkcentow(w)] = w;
    /* A multi-word entry also contributes its words: "di solito" makes
       "solito" stop being silence.

       But it does NOT contribute auxiliaries or function words. The lexicon
       has the entry "era tutto buonissimo", so "era" was becoming an entry
       of its own through it, and the card for a tap on "era" showed the
       translation of the WHOLE sentence: "everything was delicious". The
       forms of "essere" and "avere" get their meaning from the conjugation
       of those verbs, not from the sentence they happen to stand in. */
    if (w.indexOf(" ") >= 0) {
      w.split(/\s+/).forEach(function (x) {
        if (x.length <= 1) return;
        if (M.posilkowy(x)) return;
        if (M.funkcyjny(x)) return;
        zbior[x] = true;
      });
    }
  }

  /**
   * Collects the Italian entries of the course: the lesson lexicon plus the
   * words of the readings.
   *
   * @param {Array} poziomy  Core.registry.levels or an equivalent
   * @param {Array} czytanki window.READINGS
   */
  function zbudujSlownik(poziomy, czytanki) {
    var zbior = {};
    aliasy = {};
    (poziomy || []).forEach(function (lv) {
      (lv.units || []).forEach(function (u) {
        (u.lessons || []).forEach(function (l) {
          (l.vocab || []).forEach(function (v) { dodajDoSlownika(zbior, v.it); });
        });
      });
    });
    (czytanki || []).forEach(function (r) {
      (r.glossIt || []).forEach(function (w) { dodajDoSlownika(zbior, w); });
      /* lexIt: words the lookup must be able to explain but which we do NOT
         show in the hard-word panel. The panel is a list chosen by the
         author; thirty items under an A1 text stops being a choice. */
      (r.lexIt || []).forEach(function (w) { dodajDoSlownika(zbior, w); });
    });
    return zbior;
  }

  function slownikKursu() {
    if (slownik) return slownik;
    var reg = global.Core && global.Core.registry;
    slownik = zbudujSlownik(reg && reg.levels, global.READINGS);
    return slownik;
  }

  function czyZnane(haslo) {
    if (znane) return znane(haslo);
    var sl = slownikKursu();
    return Object.prototype.hasOwnProperty.call(sl, haslo) ||
      Object.prototype.hasOwnProperty.call(aliasy, haslo);
  }

  /** The canonical entry: "pesca" from a text points at the dictionary "pèsca". */
  function kanoniczne(haslo) {
    if (!znane) slownikKursu();
    return aliasy[haslo] || haslo;
  }

  /** Invalidates the dictionary and the index: the course loads levels lazily. */
  function odswiez() { slownik = null; indeks = null; }

  /**
   * Substitutes the deciding dictionary.
   * @param {function(string):boolean} fn
   */
  function uzyjSlownika(fn) { znane = fn; }

  /**
   * Adds infinitives to be conjugated and invalidates the index.
   *
   * Called by the gate and by tests that have no Core. Unnecessary in the
   * browser: there the source is the course dictionary.
   */
  function dodajCzasowniki(lista) {
    (lista || []).forEach(function (w) {
      if (M.czasownikowe(w) && dodatkowe.indexOf(w) < 0) dodatkowe.push(w);
    });
    indeks = null;
  }

  /**
   * Everything this word MIGHT be — without asking the dictionary.
   * Exposed separately, because the "I do not know this word" view shows
   * the student a base form even when the course does not teach it.
   */
  function kandydaci(slowo) {
    var w = String(slowo).toLowerCase().replace(/[’']/g, "'");
    var out = [];
    function dodaj(x) { if (x && out.indexOf(x) < 0) out.push(x); }

    dodaj(w);
    (zbuduj()[w] || []).forEach(dodaj);
    M.odmienne(w).forEach(dodaj);
    M.bezEnklityk(w).forEach(function (rdzen) {
      dodaj(rdzen);
      (zbuduj()[rdzen] || []).forEach(dodaj);
    });
    return out;
  }

  /**
   * The entries the course can explain for this word. Empty = silence.
   *
   * A function word returns itself: it is not in the course dictionary as
   * an entry, but tapping "dello" must give something rather than nothing.
   */
  function resolve(slowo) {
    var w = String(slowo).toLowerCase().replace(/[’']/g, "'");
    if (M.funkcyjny(w)) return [w];
    var out = [];
    kandydaci(w).filter(czyZnane).forEach(function (h) {
      var k = kanoniczne(h);
      if (out.indexOf(k) < 0) out.push(k);
    });
    return out;
  }

  /**
   * The infinitive, if this form is a verb form. Otherwise "".
   *
   * Exposed separately, because it is the only candidate that can be
   * trusted without the dictionary: it comes from the conjugator and not
   * from rules guessing plurals. The "Coverage" view picks the entry to
   * show by it.
   */
  function lemat(slowo) {
    var w = String(slowo).toLowerCase().replace(/[’']/g, "'");
    var z = zbuduj()[w];
    return z && z.length ? z[0] : "";
  }

  global.Lemma = {
    resolve: resolve,
    lemat: lemat,
    kandydaci: kandydaci,
    uzyjSlownika: uzyjSlownika,
    dodajCzasowniki: dodajCzasowniki,
    zbudujSlownik: zbudujSlownik,
    odswiez: odswiez,
    funkcyjne: M.funkcyjny,
    /** For measurement only: how many forms the index knows and how long it took to build. */
    rozmiarIndeksu: function () { return Object.keys(zbuduj()).length; }
  };

})(window);
