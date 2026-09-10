/* ============================================================
   views-falsi.js — false friends in your own language.

   This is where the course does something a universal course cannot: it
   says where YOUR language will betray you. A Pole reads "firma" and sees a
   company, a Spaniard reads "burro" and sees a donkey, and an English
   speaker writes "eventualmente" thinking they said "eventually". These are
   not the same three notes in three translations.

   That is why the list IS shorter in one language than in another, and it
   is meant to be: the trap either exists or does not, depending on what the
   student has in their head. The view shows only the entries whose `for`
   lists the current language, and says plainly how many there are.

   The exercise uses the existing `mcq` type — no new entry in EX_TYPES, no
   new path in the engine, no new place where `onDone` could be called
   twice.

   Classic script. Requires core.js, exercises.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /** The entries relevant to the current language: the ones that have an explanation. */
  function moje() {
    return (global.INTERFERENCE || []).filter(function (v) { return v.why; });
  }

  Views.falsi = function (params) {
    var lista = moje();
    if (!lista.length) { set(Views.shell.empty(t("fa.none"), t("fa.noneHint"))); return; }
    if (params && params.mode === "quiz") return quiz(lista);

    set(pageHead(t("fa.kicker"), t("fa.title"), t("fa.intro", { n: lista.length })) +
      '<div style="margin-bottom:20px"><button class="btn btn--primary js-quiz">' +
      esc(t("fa.startQuiz")) + "</button></div>" +
      '<div class="stack">' + lista.map(karta).join("") + "</div>");

    /* Overlay strings through textContent: these are sentences written for a
       language, not markup, and there is no reason to let them into the DOM
       as HTML. */
    el().querySelectorAll(".fa-card").forEach(function (node, i) {
      var v = lista[i];
      node.querySelector(".js-looks").textContent = v.looks;
      node.querySelector(".js-mean").textContent = v.mean;
      node.querySelector(".js-why").textContent = v.why;
    });
    Ex.wireSpeakers(el());
    el().querySelector(".js-quiz").addEventListener("click", function () {
      App.go("falsi", { mode: "quiz" });
    });
  };

  function karta(v) {
    return '<div class="card fa-card" style="margin:0">' +
      '<div class="fa-head"><b class="fa-it">' + esc(v.it) + "</b>" +
      '<button type="button" class="say-btn" data-say="' + esc(v.it) + '" aria-label="' +
      esc(t("a11y.listenTo", { what: v.it })) + '">🔊</button></div>' +
      '<p class="fa-line"><span class="fa-tag fa-tag--no">' + esc(t("fa.looksLike")) + "</span>" +
      '<span class="js-looks"></span></p>' +
      '<p class="fa-line"><span class="fa-tag fa-tag--yes">' + esc(t("fa.actually")) + "</span>" +
      '<span class="js-mean"></span></p>' +
      '<p class="fa-why js-why"></p>' +
      '<p class="fa-ex">' + esc(v.ex) +
      ' <button type="button" class="say-btn" data-say="' + esc(v.ex) + '" aria-label="' +
      esc(t("a11y.listenTo", { what: v.ex })) + '">🔊</button></p>' +
      "</div>";
  }

  /* ---------------- The exercise ----------------
     An `mcq` type built on the fly: the question "what does it really
     mean", three answers, one of which is the true meaning and one exactly
     the trap the student falls into. A distractor taken from another entry
     would teach nothing: the point is to choose BETWEEN them.
     ------------------------------------------------------------------- */

  function quiz(lista) {
    var pytania = Core.seededShuffle(lista.slice(), "fa-" + Core.today()).slice(0, 10);
    var i = 0, dobre = 0;

    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">' +
      esc(t("fa.backToList")) + "</button>" +
      pageHead(t("fa.kicker"), t("fa.quizTitle"), t("fa.quizIntro")) +
      '<div id="faBox"></div>');

    el().querySelector(".js-back").addEventListener("click", function () { App.go("falsi"); });
    krok();

    function krok() {
      var box = document.getElementById("faBox");
      if (i >= pytania.length) return koniec(box);

      var v = pytania[i];
      var trzeci = pytania[(i + 1) % pytania.length];
      var ex = {
        t: "mcq",
        q: esc(t("fa.qWhat", { word: v.it })),
        opts: [esc(v.mean), esc(v.looks), esc(trzeci.mean || trzeci.looks)],
        a: 0,
        why: esc(v.why),
        say: v.it
      };
      var zbudowane = Ex.build(ex, i, "falsi-" + v.id);
      box.innerHTML = '<p class="exq__num">' + esc(t("fa.progress", { i: i + 1, n: pytania.length })) + "</p>" +
        zbudowane.html +
        '<div style="margin-top:16px"><button class="btn btn--primary js-next" hidden>' +
        esc(t("fa.next")) + "</button></div>";

      var next = box.querySelector(".js-next");
      /* onDone exactly once: the "next" button is shown inside the callback
         and we call nothing from here that could trigger it a second time. */
      zbudowane.wire(box.querySelector(".exq"), function (ok) {
        if (ok) dobre++;
        next.hidden = false;
        next.focus();
      });
      Ex.wireSpeakers(box);
      next.addEventListener("click", function () { i++; krok(); });
    }

    function koniec(box) {
      box.innerHTML = '<div class="card"><h3 style="margin-bottom:8px">' +
        esc(t("fa.done", { hit: dobre, n: pytania.length })) + "</h3>" +
        '<button class="btn btn--ghost btn--sm js-again">' + esc(t("fa.again")) + "</button></div>";
      box.querySelector(".js-again").addEventListener("click", function () { App.go("falsi"); });
    }
  }

})(window);
