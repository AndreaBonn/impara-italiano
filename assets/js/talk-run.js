/* ============================================================
   talk-run.js — the run of a conversation: where we are, what counts, where next.

   Pulled out of views-talk.js, where this logic lived inside the function
   drawing the bubbles. It is not about file length: it is that a
   conversation has branches, a return to the last choice and a result, and
   every one of those breaks silently. The wrong branch looks like a
   different scene, a lost point looks like harsher marking, and returning
   to the wrong place looks like a dialogue rewritten from scratch. None of
   them is visible in a browser without playing the whole scene to the end —
   and that is why they had no test all this time.

   This file knows nothing about the DOM and saves nothing. It returns a
   description of a transition ("go on with this text", "stop, that is the
   first mistake"), and the view turns it into a bubble, a message and an
   entry in the mistake notebook.

   THREE DECISIONS this code holds and which are easy to undo by accident:

   - A wrong answer STOPS the scene. Previously the conversation went on,
     except that the bubble held the model line instead of what the student
     said: on screen it looked like a pass, so a mistake had no consequence.
   - At a branch the winner is the branch CLOSEST to the utterance, not the
     first that matches: two lines in the same scene are sometimes similar
     ("just a coffee" / "coffee and dessert") and the first at hand would
     send the student somewhere they did not ask to go.
   - A mistake reaches the notebook ONCE PER TURN, not once per attempt: ten
     attempts at one sentence are one mistake, not ten.

   Classic script. Requires Core (similarity).
   ============================================================ */
(function (global) {
  "use strict";

  /* The similarity threshold above which an utterance counts as that line.
     Lower than in written exercises, because speech recognition loses
     endings and punctuation, and a conversation is meant to move on rather
     than examine spelling. */
  var PROG = 0.72;

  function create(conv) {
    var tury = (conv && conv.turns) || [];

    var i = 0;
    var punkty = 0;
    var przejsteTury = 0;
    var bledny = false;

    /* The choice points visited during this run. `znak` is opaque: the view
       puts its own measure of the transcript there, so that after a return
       it can cut it exactly at the point of choice. This file does not read
       it. */
    var wybory = [];

    /** An unknown jump target = the end of the conversation; validate.mjs will not let it through. */
    function indeksTury(id) {
      for (var n = 0; n < tury.length; n++) if (tury[n].id === id) return n;
      return tury.length;
    }

    /** A turn with a `go` field says where to go; without it we move on by one. */
    function dalej(skad, teraz) {
      return skad && skad.go ? indeksTury(skad.go) : teraz + 1;
    }

    function biezaca() { return i < tury.length ? tury[i] : null; }

    /** The student's lines have `sp: "TY"`; the rest belong to the other speaker. */
    function mojaTura() {
      var t = biezaca();
      return !!t && t.sp === "TY";
    }

    /** Passing through the other speaker's line: nothing counts, we move on. */
    function advance() {
      var t = biezaca();
      if (t) i = dalej(t, i);
      return biezaca();
    }

    /** The models accepted in this turn: from the first branch or from the turn itself. */
    function przyjmowane(t) {
      if (t.opts) return t.opts[0].accept || [];
      return t.accept || [t.it];
    }

    /**
     * The start of the student's line. Counts the turn towards the result
     * and — at a branch — records the return point BEFORE anything happens.
     */
    function beginTurn(znak) {
      var t = biezaca();
      przejsteTury++;
      bledny = false;
      if (t && t.opts) {
        wybory.push({ i: i, znak: znak, punkty: punkty, tury: przejsteTury - 1 });
      }
      return t;
    }

    /** The branch closest to what the student said, together with its similarity. */
    function dopasuj(text) {
      var t = biezaca();
      var kandydaci = (t && t.opts) || [{ accept: przyjmowane(t || {}) }];
      var naj = { wynik: -1, opcja: null };
      kandydaci.forEach(function (o) {
        var b = 0;
        (o.accept || []).forEach(function (a) {
          b = Math.max(b, global.Core.similarity(text, a));
        });
        if (b > naj.wynik) naj = { wynik: b, opcja: o };
      });
      return naj;
    }

    /** Records a mistake. `true` means "the first one in this turn". */
    function pomylka() {
      if (bledny) return false;
      bledny = true;
      return true;
    }

    /** Moving on with the given text in the bubble. */
    function idzDalej(tekst, gal, tr) {
      var t = biezaca();
      i = dalej(t && t.opts ? gal : t, i);
      return { ok: true, tekst: tekst, tr: tr || "", punkt: false };
    }

    /**
     * Whether the utterance counts, and on which branch. CHANGES NOTHING.
     *
     * Split out of `answer` so that a slower second opinion can be asked
     * between deciding and acting. The moment `answer` rejects it has
     * already written `bledny`, and the view has already recorded the
     * mistake — so a verdict arriving afterwards would have to undo a
     * statistic, which is the trap that sank every "accept now, revoke
     * later" version of this. Nothing to undo is cheaper than undoing.
     *
     * @returns {{ok:boolean, opcja:object, sim:number}}
     */
    function judge(text) {
      var naj = dopasuj(text);
      return { ok: naj.wynik >= PROG, opcja: naj.opcja, sim: naj.wynik };
    }

    /** Passing the turn on the given branch: the point, the bubble, the move. */
    function commit(text, gal) {
      var t = biezaca();
      var punkt = !bledny;
      if (punkt) punkty++;
      var wynik = idzDalej(text, gal, (gal && gal.tr) || (t && t.tr));
      wynik.punkt = punkt;
      return wynik;
    }

    /** Failing the turn: the scene stops, the mistake counts once. */
    function reject() {
      return { ok: false, pierwszaPomylka: pomylka() };
    }

    /**
     * The student's answer — from the keyboard or from the microphone.
     *
     * A facade over the three above, kept because a dozen call sites and
     * every test speak this shape. It stays synchronous: whoever wants the
     * second opinion uses the three parts instead.
     *
     * @returns {{ok:boolean, tekst?:string, tr?:string, punkt?:boolean, pierwszaPomylka?:boolean}}
     */
    function answer(text) {
      var wynik = judge(text);
      return wynik.ok ? commit(text, wynik.opcja) : reject();
    }

    /**
     * A click on a branch. It does NOT go through the similarity threshold:
     * the student picked a line from a list, so there is nothing to grade —
     * and since a wrong answer stops the scene, comparing could block the
     * choice on the course's own suggestion.
     */
    function choose(n) {
      var t = biezaca();
      var gal = (t.opts || [])[n];
      if (!gal) return { ok: false, pierwszaPomylka: false };

      var punkt = !bledny;
      if (punkt) punkty++;
      var tekst = gal.hintIt || (gal.accept || [])[0] || "";
      var wynik = idzDalej(tekst, gal, gal.tr);
      wynik.punkt = punkt;
      return wynik;
    }

    /**
     * Giving up: the model line enters the transcript and the scene moves
     * on, with no point scored.
     *
     * We take the model from the hint, not from `accept[0]`: the keys are
     * written for comparison, in lower case and without punctuation, and in
     * a bubble they would look like a carelessly written sentence. At a
     * branch we take the first one — the direction cannot be guessed when
     * the student chose nothing.
     */
    function reveal() {
      var t = biezaca();
      var gal = t.opts ? t.opts[0] : null;
      var wzor = (gal ? (gal.hintIt || (gal.accept || [])[0]) : t.hintIt) || przyjmowane(t)[0] || "";
      var pierwsza = pomylka();
      var wynik = idzDalej(wzor, gal, (gal && gal.tr) || t.tr);
      wynik.pierwszaPomylka = pierwsza;
      return wynik;
    }

    /**
     * A return to the last branch, not to the beginning. The branch you did
     * not take is what branches are for in the first place; making someone
     * replay the whole dialogue to see it means showing it to nobody.
     */
    function rewind() {
      var w = wybory.pop();
      if (!w) return null;
      i = w.i;
      punkty = w.punkty;
      przejsteTury = w.tury;
      bledny = false;
      return w;
    }

    return {
      current: biezaca,
      mine: mojaTura,
      advance: advance,
      beginTurn: beginTurn,
      answer: answer,
      judge: judge,
      commit: commit,
      reject: reject,
      choose: choose,
      reveal: reveal,
      rewind: rewind,
      accepted: function () { return przyjmowane(biezaca() || {}); },
      get done() { return i >= tury.length; },
      get score() { return punkty; },
      get turns() { return przejsteTury; },
      get canRewind() { return wybory.length > 0; },
      get index() { return i; }
    };
  }

  global.Talk = { create: create, PROG: PROG };

})(window);
