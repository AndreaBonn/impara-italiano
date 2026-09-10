/* ============================================================
   views-speed.js — understanding when nobody slows down.

   WHAT IS HERE AND WHAT IS NOT, and why. This phase was meant to teach
   connected speech: raddoppiamento, elision, assimilation. The
   `check_connected.py` gate did not settle whether the narrator realises
   those phenomena at all — four versions of the measure, none of which
   separated "realised" from "different content". Writing exercises about a
   doubling that may not be in the recording would produce tasks with no
   correct answer; the course already has such a precedent and back then the
   set simply was not created.

   What is left is what can be verified without acoustic measurement: TEMPO.
   It is not a substitute. "I understand when they read slowly" is exactly
   the level most learners get stuck at, and the difference between 0.75 and
   1.25 is audible to anyone, with no spectral analysis at all.

   A sentence plays at natural speed FIRST, and slowing down is a separate
   button. The other order — slow, then normal — teaches listening to a slow
   Italian that nobody outside the course speaks.

   Classic script. Requires core.js, audio.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /* Three speeds. 1 is first and the default; 0.75 is not "for beginners"
     but a lifebuoy, and 1.25 is there because real conversation is
     sometimes faster than the narrator and that has to be heard too. */
  var TEMPA = [
    { r: 1, key: "sp.normal" },
    { r: 0.75, key: "sp.slow" },
    { r: 1.25, key: "sp.fast" }
  ];

  function zdania() {
    var out = [];
    (global.READINGS || []).forEach(function (r) {
      (r.sentences || []).forEach(function (s) {
        if (Audio2.hasNatural(s)) out.push({ it: s, cefr: r.cefr, src: r.id });
      });
    });
    return out;
  }

  var lista = [];
  var i = 0;
  var potrzebowalWolniej = false;

  Views.velocita = function () {
    lista = zdania();
    if (!lista.length) { set(Views.shell.empty(t("sp.noSentences"))); return; }
    i = 0;
    rysuj();
  };

  function rysuj() {
    potrzebowalWolniej = false;

    set(pageHead(t("sp.kicker"), t("sp.title"), t("sp.intro")) +
      '<div class="card">' +
      '<p class="sp-num js-num"></p>' +
      '<div class="sp-row">' +
      TEMPA.map(function (x, n) {
        return '<button class="btn ' + (n === 0 ? "btn--green" : "btn--ghost btn--sm") +
          ' js-play" data-rate="' + x.r + '">' + esc(t(x.key)) + "</button>";
      }).join("") + "</div>" +
      '<p class="sp-state js-state" role="status" aria-live="polite"></p>' +
      '<div class="sp-reveal">' +
      '<button class="btn btn--primary btn--sm js-reveal">' + esc(t("sp.reveal")) + "</button>" +
      '<p class="sp-it js-it" hidden></p></div>' +
      '<div class="sp-row" style="margin-top:16px">' +
      '<button class="btn btn--ghost btn--sm js-next">' + esc(t("sp.next")) + "</button>" +
      "</div></div>");

    el().querySelector(".js-num").textContent = t("sp.progress", { i: i + 1, n: lista.length });

    el().querySelectorAll(".js-play").forEach(function (b) {
      b.addEventListener("click", function () {
        var r = parseFloat(b.getAttribute("data-rate"));
        if (r < 1) potrzebowalWolniej = true;
        Audio2.speak(lista[i].it, {
          rate: r,
          onstart: function () { stan(t("sp.statePlaying", { r: r })); },
          onend: function () { stan(""); }
        });
      });
    });

    el().querySelector(".js-reveal").addEventListener("click", function () {
      var p = el().querySelector(".js-it");
      p.textContent = lista[i].it;
      p.hidden = false;
      /* Feedback without a grade: we say WHAT happened, not whether it was
         good. The ear knows anyway; a number here would only lie. */
      stan(t(potrzebowalWolniej ? "sp.usedSlow" : "sp.fullSpeed"));
    });

    el().querySelector(".js-next").addEventListener("click", function () {
      i = (i + 1) % lista.length;
      Audio2.stop();
      rysuj();
    });
  }

  function stan(txt) {
    var s = el().querySelector(".js-state");
    if (s) s.textContent = txt;
  }

})(window);
