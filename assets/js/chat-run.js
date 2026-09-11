/* ============================================================
   chat-run.js — one free conversation, from the first line to the last.

   The same split as talk-run.js against views-talk.js, and for the same
   reason: what the scene DOES can be played to the end in node:test, what it
   LOOKS like needs a browser. The rules themselves (the ceiling, the
   pruning, the reading of a reply) sit one file further out, in
   chat-rules.js, because they are arithmetic and this is a state machine.

   THE STATE LIVES AND DIES WITH THE PAGE, and that is a decision rather than
   an omission. `Store.exportState()` serialises everything under the profile
   key into the file the course tells students to keep and carry; a
   conversation is the least structured and most personal thing this course
   ever holds, and it has no business in that file. It also has no business
   surviving a reload: a conversation resumed three days later is not the
   conversation the student was having.

   NOTHING HERE TOUCHES PROGRESS. No score, no card, no streak, no XP. That
   is why this mode needs no equivalent of `clamp`: there is no verdict to
   constrain, because there is no verdict.

   Classic script. Requires chat-rules.js.
   ============================================================ */
(function (global) {
  "use strict";

  function create(scenario) {
    var R = global.ChatRules;

    /* One flat list, in the order the two of them spoke. The providers want
       it in that order, the screen draws it in that order, and a structure
       that kept the two sides apart would have to interleave them again at
       both ends. */
    var historia = [];

    function dodajStudenta(tekst) {
      var t = String(tekst == null ? "" : tekst).trim();
      if (!t) return false;
      historia.push({ role: "student", text: t });
      return true;
    }

    /**
     * The partner's turn.
     *
     * The correction rides ALONGSIDE the reply and never inside the history
     * sent onward: what the model is shown of its own past is what it said,
     * not what it thought of the student's grammar. Sending the corrections
     * back would teach it that this conversation is a lesson, and from then
     * on it writes like one.
     */
    function dodajPartnera(turn) {
      if (!turn || !turn.risposta) return false;
      historia.push({
        role: "partner",
        text: turn.risposta,
        korekta: turn.correzione || ""
      });
      return true;
    }

    /**
     * Undoes the student's last turn.
     *
     * For the one case where it matters: the request went out and nothing
     * came back. Without this the turn is spent from the ceiling, the line
     * stays on screen with no answer beside it, and the student is one turn
     * poorer for a conversation that did not happen.
     */
    function cofnijStudenta() {
      for (var i = historia.length - 1; i >= 0; i--) {
        if (historia[i].role === "student") {
          historia.splice(i, 1);
          return true;
        }
        return false;   /* the last turn is the partner's: nothing to undo */
      }
      return false;
    }

    return {
      scenario: scenario || {},
      /** The list as the providers and the screen want it. */
      get historia() { return historia; },
      dodajStudenta: dodajStudenta,
      dodajPartnera: dodajPartnera,
      cofnijStudenta: cofnijStudenta,
      get zostalo() { return R.zostalo(historia); },
      get koniec() { return R.koniec(historia); },
      /** How many turns the two of them have exchanged, for the summary. */
      get tury() {
        return historia.filter(function (t) { return t.role === "student"; }).length;
      },
      /** The corrections, in order: what the student got wrong in this scene. */
      get korekty() {
        return historia
          .filter(function (t) { return t.role === "partner" && t.korekta; })
          .map(function (t) { return t.korekta; });
      }
    };
  }

  global.ChatRun = { create: create };

})(window);
