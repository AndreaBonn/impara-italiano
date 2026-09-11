/* ============================================================
   chat-rules.js — the rules of a conversation nobody wrote in advance.

   The course already has fourteen conversations, and every branch of them
   was written by a person: what counts as an answer, where the scene forks,
   which mistake is worth stopping on. This is the other kind — a partner
   that answers whatever the student happens to say — and these are the
   decisions a script does not need to make.

   THREE OF THEM, and each one guards against something the student would
   experience as the course misbehaving rather than as a limit:

   - THE CEILING. Every turn is paid for by the student, from their own
     account, and the whole history is resent each time: turn twelve costs
     several times what turn one cost. A conversation with no end is a bill
     with no end, and the student finds out about it later and elsewhere.
   - THE PRUNING. Once the history outgrows what we are willing to send, it
     gives way from the OLDEST end, in whole turns. Half a turn is a
     sentence whose answer was cut off, which reads to the model as the
     student changing the subject for no reason.
   - THE READING. The model is asked for a reply and, separately, a
     correction. When it answers with something else, the conversation goes
     on anyway with the whole text as the reply: a turn that dies because a
     model forgot the format is a conversation that stops mid-sentence, and
     from the student's side that is indistinguishable from being ignored.

   WHAT IS NOT HERE, and deliberately: any notion of the answer being right
   or wrong. This mode corrects, it does not mark. Nothing it produces
   touches a score, a card, the streak or the deck, and that is the
   structural reason it needs no `clamp` — there is no verdict to clamp.

   Pure: values in, values out. Classic script, no dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  /* Turns the STUDENT gets. Twelve is long enough for a scene with a
     beginning and an end, short enough that the cost stays in sight. */
  var MAX_TUR = 12;

  /* How much of the history travels. Chosen against the turn ceiling: a
     full conversation of ordinary sentences fits without ever pruning, so
     the pruning below is for the student who writes paragraphs. */
  var MAX_ZNAKOW = 4000;

  /* How much of one reply, or one correction, reaches the screen. */
  var MAX_REPLIKI = 600;

  /** Control characters and DEL to a space, by code point (see llm-rules.js). */
  function bezSterujacych(s) {
    var out = "", i, code;
    for (i = 0; i < s.length; i++) {
      code = s.charCodeAt(i);
      out += (code < 32 || code === 127) ? " " : s.charAt(i);
    }
    return out;
  }

  function porzadek(s) {
    return bezSterujacych(String(s == null ? "" : s)).replace(/\s+/g, " ").trim();
  }

  function lista(h) { return Array.isArray(h) ? h : []; }

  /** How many turns the student has left. Their turns only: the partner's replies are not spent. */
  function zostalo(historia) {
    var moje = lista(historia).filter(function (t) { return t && t.role === "student"; }).length;
    return Math.max(0, MAX_TUR - moje);
  }

  function koniec(historia) { return zostalo(historia) === 0; }

  /**
   * The part of the history that travels with the next question.
   *
   * Walks from the NEWEST end and stops when the budget is spent, so what
   * survives is the recent past — the part the next reply depends on.
   *
   * A single turn longer than the whole budget is CUT rather than dropped.
   * Dropping it would send the model an instruction with no question
   * attached, and the student who has just pasted half a page would watch
   * the partner answer something else entirely.
   */
  function doWyslania(historia) {
    var wszystkie = lista(historia);
    var out = [], budzet = MAX_ZNAKOW;

    for (var i = wszystkie.length - 1; i >= 0; i--) {
      var t = wszystkie[i];
      if (!t) continue;
      var tekst = String(t.text || "");
      if (tekst.length > budzet) {
        /* Only the newest turn is worth keeping in cut form: it is the one
           being answered. An older one cut in half is the half-turn this
           function exists to avoid. */
        if (out.length === 0) out.unshift({ role: t.role, text: tekst.slice(0, MAX_ZNAKOW) });
        break;
      }
      out.unshift({ role: t.role, text: tekst });
      budzet -= tekst.length;
    }
    return out;
  }

  /**
   * The JSON object inside whatever the provider sent, or nothing.
   *
   * The same shape as `LlmRules.extract`, and separate from it on purpose:
   * that one belongs to the judge, whose answer is a closed verdict, and
   * coupling the two would tie a conversation's format to a verdict's.
   */
  function wyjmij(text) {
    var s = String(text == null ? "" : text);
    var a = s.indexOf("{"), b = s.lastIndexOf("}");
    if (a < 0 || b <= a) return null;
    try {
      return JSON.parse(s.slice(a, b + 1));
    } catch (e) {
      return null;
    }
  }

  /**
   * What the partner said, and what it corrected.
   *
   * @param {string} text
   * @returns {{risposta:string, correzione:string}} `risposta` empty means there is no turn
   */
  function czytaj(text) {
    var surowy;
    try {
      surowy = text == null ? "" : String(text);
    } catch (e) {
      return { risposta: "", correzione: "" };
    }

    var parsed = wyjmij(surowy);
    if (parsed && typeof parsed.risposta === "string") {
      return {
        risposta: porzadek(parsed.risposta).slice(0, MAX_REPLIKI),
        correzione: porzadek(parsed.correzione).slice(0, MAX_REPLIKI)
      };
    }
    /* No format: the whole thing is what the partner said. A conversation
       that keeps going without a correction beats one that stops. */
    return { risposta: porzadek(surowy).slice(0, MAX_REPLIKI), correzione: "" };
  }

  global.ChatRules = {
    zostalo: zostalo,
    koniec: koniec,
    doWyslania: doWyslania,
    czytaj: czytaj,
    MAX_TUR: MAX_TUR,
    MAX_ZNAKOW: MAX_ZNAKOW,
    MAX_REPLIKI: MAX_REPLIKI
  };

})(window);
