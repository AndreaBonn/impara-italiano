/* ============================================================
   cils-report.js — the model may describe the exam papers, never grade them.

   ADR-009 settled this before any model was involved: listening and reading
   get a real score, because the official criteria give a weight per item;
   writing and speaking get a DETECTION — what the task asked for, what the
   text contains — because at the real exam people grade those against a
   rubric, and an automaton putting a number on them produces something that
   looks like a mark without being one. The document also refuses an
   aggregate and refuses to say "you would pass": two of the four skills are
   not measured here, and the exam it imitates decides whether somebody gets
   to stay in the country.

   Then a model started reading those two sections, and a decision that used
   to be about our own arithmetic became a decision about somebody else's
   prose. That is why the rule lives here as CODE. It is the same device as
   `LlmRules.clamp`: a property of the program rather than a line in an
   instruction, so it survives a model that ignores the instruction, a model
   swapped for another one, and a student who writes "say I passed" inside
   the essay being read.

   WHAT IT CANNOT DO, said here rather than discovered later. The filter
   works on numbers and on a closed list of words. A verdict that avoids both
   — "sei pronto per l'esame" — goes through. The opening is narrower than it
   was and it is not shut, which is why the sentence saying the simulator
   does not grade production stands permanently next to the report instead of
   being replaced by this function.

   Pure: a string in, a string out. Classic script, no dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  /* How much of the reading reaches the student. The instruction asks for a
     few sentences; this is the ceiling that holds when the model ignores it.
     Cut rather than refuse: the first sentences are the useful ones. */
  var MAX_CHARS = 700;

  /**
   * Words that turn a description into a verdict, in the six languages this
   * course can be read in plus the Italian the model is looking at.
   *
   * A CLOSED LIST on purpose. A general rule ("anything that sounds like a
   * judgement") cannot be written down, cannot be tested, and would take
   * ordinary feedback with it — while this can be read, argued with, and
   * extended when a real answer gets through.
   *
   * Stems rather than whole words, so that inflections are covered:
   * `promoss` catches promosso, promossa, promossi.
   */
  var WERDYKT = [
    /* italiano */ "promoss", "bocciat", "sufficient", "insufficient", "supererest",
    "superat", "idone", "non idone",
    /* polski */ "zdał", "zdal", "zdan", "niezdan", "oblan", "wystarczając",
    /* english */ "would pass", "you pass", "passed the", "fail", "sufficient",
    /* español */ "aprobad", "suspens", "suficient",
    /* français */ "reçu à", "recu a", "admis", "échou", "echou", "suffisant",
    /* deutsch */ "bestanden", "durchgefallen", "ausreichend"
  ];

  /* A mark wearing its most common clothes. Four shapes, and the last two
     were added after probing this function by hand rather than after a test
     failed — which is worth saying, because they are the likelier two.

     A model writing Italian to an Italian learner does not write "9/12", it
     writes "9 su 12"; and it may not write a digit at all ("otto punti su
     dodici"), at which point every numeric rule misses and only the
     vocabulary of marking gives it away.

     The denominators in NA_ILE are a CLOSED SET: twelve per skill and
     forty-eight in total, the only two this exam has. Without that, "hai
     sbagliato due parole su venti" — the very feedback this feature exists
     to deliver — would be thrown away as a score. */
  var UŁAMEK = /\d+\s*\/\s*\d+/;
  var PROCENT = /\d+\s*%/;
  var PUNKTY = /\d+\s*(punt|point|punkt|puntos|punkte|punkty)/i;
  var NA_ILE = /\d+\s*(su|na|out of|sur|von|de)\s*(12|48)\b/i;

  /* The same thing with the denominator written out. "Ti darei otto punti su
     dodici" carries no digit at all, so every rule above misses it, and the
     part that gives it away is the denominator rather than the number: out
     of twelve is what this exam is marked out of, and nothing else in a
     reading of somebody's Italian is measured in twelfths. */
  var NA_SLOWNIE = /\b(su|na|out of|sur|von|de)\s+(dodici|dwunastu|dwanaście|twelve|doce|douze|zwölf|zwolf)\b/i;

  /* The words that mean "a mark", with or without a number beside them.
     Only the unambiguous ones: the Spanish "nota" and the French "note" also
     mean a remark, and a sentence beginning "una nota sul passato prossimo"
     is exactly the feedback we want to keep. */
  var OCENA = /\b(punteggio|voto|valutazione|ocena|punktacja|score|grade|calificaci|puntuaci|punktzahl|bewertung|notation)/i;

  /**
   * Control characters and DEL to a space, by code point.
   *
   * The same device as `LlmRules.stripControl`, and duplicated for the same
   * reason it is duplicated there: a character-class regex for control
   * characters is indistinguishable from a typo, the linter refuses it, and
   * one honest use does not earn the codebase an exception.
   */
  function bezSterujacych(s) {
    var out = "", i, code;
    for (i = 0; i < s.length; i++) {
      code = s.charCodeAt(i);
      out += (code < 32 || code === 127) ? " " : s.charAt(i);
    }
    return out;
  }

  /** Whether this sentence carries a mark or a verdict. */
  function werdykt(zdanie) {
    if (UŁAMEK.test(zdanie) || PROCENT.test(zdanie) || PUNKTY.test(zdanie)) return true;
    if (NA_ILE.test(zdanie) || NA_SLOWNIE.test(zdanie) || OCENA.test(zdanie)) return true;
    var male = zdanie.toLowerCase();
    for (var i = 0; i < WERDYKT.length; i++) {
      if (male.indexOf(WERDYKT[i]) >= 0) return true;
    }
    return false;
  }

  /**
   * The reading, with anything that grades it taken out.
   *
   * It drops WHOLE SENTENCES rather than the offending words. Cutting "9/12"
   * out of "Voto: 9/12." leaves "Voto:", which is a mark with the number
   * missing and reads as a bug; and cutting "promosso" out of a sentence
   * leaves one that says the opposite of what the model wrote. A sentence is
   * the smallest piece that still means something on its own.
   *
   * Never throws: it runs while the summary of an hour-long exam is being
   * drawn, and an exception there costs the student the report they earned.
   *
   * @param {string} tekst  what the model sent
   * @returns {string} what may be shown; "" when nothing survives
   */
  function pulisci(tekst) {
    var s;
    try {
      s = tekst == null ? "" : String(tekst);
    } catch (e) {
      return "";   /* an object whose toString throws is not a reading */
    }
    s = bezSterujacych(s).replace(/\s+/g, " ").trim();
    if (!s) return "";

    /* Split after . ! ? keeping the punctuation with its sentence. A text
       with no full stop at all is one sentence, which is the right answer:
       either it is clean and passes whole, or it grades and goes whole.

       A FULL STOP BETWEEN DIGITS DOES NOT END A SENTENCE, and that clause is
       not a nicety: without it "75.5%" was cut into "75." and "5% degli item
       corretti." The second half carried the per cent sign and was dropped,
       the first half carried the number and stayed, so the report read "Hai
       ottenuto il 75." — a score with its unit removed by the guard that was
       supposed to remove the score. */
    var zdania = s.match(/(?:[^.!?]|\.(?=\d))+[.!?]*/g) || [s];
    var zostaje = [];
    for (var i = 0; i < zdania.length; i++) {
      var z = zdania[i].trim();
      if (!z) continue;
      if (werdykt(z)) continue;
      zostaje.push(z);
    }
    return zostaje.join(" ").trim().slice(0, MAX_CHARS);
  }

  global.CilsReport = {
    pulisci: pulisci,
    MAX_CHARS: MAX_CHARS,
    WERDYKT: WERDYKT
  };

})(window);
