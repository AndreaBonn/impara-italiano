/* ============================================================
   frequency.js — how much real Italian the student already owns.

   XP and the streak measure loyalty to the application: they grow because
   you come back. This module measures the LANGUAGE. "You know 847 of the
   2000 most frequent forms, that is roughly 58% of what occurs in a
   sentence" is a statement that can be verified outside the course, and
   that is why it means something a points counter does not.

   TWO NUMBERS, NOT ONE, and that is the point:

   - COURSE COVERAGE — how many of these forms the course teaches at all.
     That is the ceiling: the student cannot go higher even after doing
     everything. It is a property of the COURSE and measures us, not them.
   - STUDENT COVERAGE — how many they have in their deck. That is their state.

   Merging them into one percentage would be convenient and dishonest: a
   student who is 100% "ready" would still not know the forms nobody showed
   them, and the difference between those two numbers is exactly what the
   course has left to do.

   The module is PURE: it takes data and returns numbers. No DOM, no state.
   Classic script.
   ============================================================ */
(function (global) {
  "use strict";

  var Frequency = {};

  /**
   * Whether this form is "owned" according to a given set of entries.
   *
   * It goes through the resolver, so a deck holding "bere" counts the form
   * "bevo" and not only a literal hit. Without that step the counter would
   * show the student gaps where they know the word — and systematically so,
   * because the frequency list is a list of FORMS while the deck is a deck
   * of ENTRIES.
   */
  function posiadana(forma, zbior) {
    if (Object.prototype.hasOwnProperty.call(zbior, forma)) return true;
    var L = global.Lemma;
    if (!L) return false;
    var k = L.kandydaci(forma);
    for (var i = 0; i < k.length; i++) {
      if (Object.prototype.hasOwnProperty.call(zbior, k[i])) return true;
    }
    return false;
  }

  /**
   * Coverage of the frequency list by a set of entries.
   *
   * @param {Array} words  [[form, count], …] from data/core/frequenza.js
   * @param {object} zbior a map entry -> anything (the key is what counts)
   * @param {number} tokenow the total number of tokens in the corpus
   * @returns {{znane:number, wszystkie:number, udzialTokenow:number}}
   */
  function pokrycie(words, zbior, tokenow) {
    var znane = 0, trafione = 0;
    (words || []).forEach(function (para) {
      if (posiadana(para[0], zbior)) { znane++; trafione += para[1]; }
    });
    return {
      znane: znane,
      wszystkie: (words || []).length,
      /* The share of the text, not of the list: 200 function words weigh
         more than 1800 nouns, and the student should see that. */
      udzialTokenow: tokenow ? trafione / tokenow : 0
    };
  }

  /** The set of entries the course teaches: the lesson lexicon plus the words of the readings. */
  function slownikKursu() {
    var L = global.Lemma;
    var reg = (global.Core && global.Core.registry) || {};
    if (L && L.zbudujSlownik) return L.zbudujSlownik(reg.levels, global.READINGS);
    return {};
  }

  /**
   * The set of entries the student has in their deck.
   *
   * Built from `card.it` and not from the deck KEY, and through the same
   * splitter as the course dictionary. The key is normalised for identity -
   * lower case, accents stripped - so "il caffè" is filed under "il caffe",
   * and the frequency list holds neither of those: it is a list of bare
   * forms that keep their accents. A set of raw keys therefore met the list
   * almost nowhere and the screen reported near-zero coverage for a deck
   * that was full, which reads as a result of studying rather than as a
   * fault.
   */
  function slownikUcznia() {
    var out = {};
    var L = global.Lemma;
    var srs = (global.Core && global.Core.state && global.Core.state.srs) || {};
    Object.keys(srs).forEach(function (k) {
      var haslo = (srs[k] && srs[k].it) || k;
      if (L && L.dodajHaslo) L.dodajHaslo(out, haslo);
      else out[k] = true;
    });
    return out;
  }

  /**
   * The most frequent forms the student does NOT have but the course teaches.
   *
   * The "the course teaches it" condition matters: offering a word with no
   * gloss and no recording shifts onto the student work they cannot do.
   * Gaps outside the course are visible in the difference between the two
   * numbers, not in a list to click.
   */
  /**
   * The course entry this form reduces to. Empty = the course does not know it.
   *
   * The result is what ends up on the card, so the view must show THAT and
   * not the form from the list. The first version showed the form and added
   * the entry: the student saw "ha", heard "ha" (with no recording, because
   * what is recorded is the infinitive) and got an "avere" card.
   */
  function hasloKursu(forma, kurs) {
    var L = global.Lemma;
    if (!L) return Object.prototype.hasOwnProperty.call(kurs, forma) ? forma : "";

    /* The infinitive first, if this is a verb form. That order is the whole
       fix: "ha" and "ho" ARE in the course dictionary as separate words,
       because we break multi-word expressions into words — so the literal
       check won and the list of gaps showed "avere" four times under four
       different forms. */
    var inf = L.lemat(forma);
    if (inf && Object.prototype.hasOwnProperty.call(kurs, inf)) return inf;

    if (Object.prototype.hasOwnProperty.call(kurs, forma)) return forma;

    /* The plural rules are a heuristic, so they come last: "casa" must not
       collapse into "caso" just because the course knows both. */
    var k = L.kandydaci(forma);
    for (var i = 0; i < k.length; i++) {
      if (Object.prototype.hasOwnProperty.call(kurs, k[i])) return k[i];
    }
    return "";
  }

  /**
   * The most frequent ENTRIES the student does not have but the course teaches.
   *
   * Collapsed by entry, not by form. The frequency list holds "ho", "ha",
   * "hai", "hanno" separately — without collapsing, the first five gaps are
   * the same word four times, which looks like a bug and wastes the one
   * place where we offer the student something to do.
   *
   * The rank is the best (lowest) rank of its forms, the frequency their sum.
   */
  function brakujace(words, kurs, uczen, limit) {
    var wg = {};
    var kolejnosc = [];
    (words || []).forEach(function (para, i) {
      var forma = para[0];
      if (global.Lemma && global.Lemma.funkcyjne(forma)) return;
      if (posiadana(forma, uczen)) return;
      var haslo = hasloKursu(forma, kurs);
      if (!haslo) return;
      if (!wg[haslo]) {
        wg[haslo] = { haslo: haslo, ranga: i + 1, ile: 0, formy: [] };
        kolejnosc.push(haslo);
      }
      wg[haslo].ile += para[1];
      if (wg[haslo].formy.indexOf(forma) < 0) wg[haslo].formy.push(forma);
    });
    return kolejnosc.slice(0, limit || 20).map(function (h) { return wg[h]; });
  }

  Frequency.posiadana = posiadana;
  Frequency.pokrycie = pokrycie;
  Frequency.slownikKursu = slownikKursu;
  Frequency.slownikUcznia = slownikUcznia;
  Frequency.brakujace = brakujace;
  global.Frequency = Frequency;

})(window);
