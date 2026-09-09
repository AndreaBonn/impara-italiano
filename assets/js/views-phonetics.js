/* ============================================================
   views-phonetics.js — rozróżnianie dźwięków.

   Uczeń, który nie SŁYSZY różnicy między „nonno" a „nono", nie
   wymówi jej — a poprawianie wymowy jest wtedy pilnowaniem czegoś,
   czego on nie kontroluje. Dlatego to ćwiczenie idzie przed
   mówieniem, nie po nim: najpierw ucho, potem usta.

   Zbiory par siedzą w data/core/phonetics.js (same wyrazy włoskie),
   a glosy i uwaga kontrastywna w nakładkach — pisane pod konkretny
   język, bo problem jest inny dla Polaka, Francuza i Amerykanina.

   Skrypt klasyczny. Wymaga core.js, exercises.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;

  /** Ile par w jednym podejściu. */
  var RUNDA = 10;

  function zbiory() { return global.PHONETICS || []; }
  function zbior(id) { return zbiory().filter(function (z) { return z.id === id; })[0]; }

  /** Czy dla obu wyrazów pary są nagrania. Bez nich ćwiczenie nie ma sensu. */
  function maNagrania(para) {
    return Audio2.hasNatural(para.a) && Audio2.hasNatural(para.b);
  }

  Views.suoni = function (params) {
    var id = params && params.set;
    if (id && zbior(id)) return przebieg(zbior(id));

    set(pageHead(t("sound.kicker"), t("sound.title"), t("sound.intro")) +
      '<div class="stack">' + zbiory().map(function (z) {
        var gotowe = (z.pairs || []).filter(maNagrania).length;
        return '<div class="list-row"><span class="chip chip--cefr">' + esc(z.cefr || "") + "</span>" +
          '<span class="list-row__main"><b>' + esc(z.title || z.id) + "</b>" +
          "<span>" + esc(t("sound.pairs", { n: gotowe })) + "</span></span>" +
          '<button class="btn btn--primary btn--sm js-set" data-set="' + esc(z.id) + '"' +
          (gotowe ? "" : " disabled") + ">" + esc(t("sound.start")) + "</button></div>";
      }).join("") + "</div>");

    Views.shell.root().querySelectorAll(".js-set").forEach(function (b) {
      b.addEventListener("click", function () { App.go("suoni", { set: b.getAttribute("data-set") }); });
    });
  };

  /* ---------------- Przebieg ---------------- */

  function przebieg(z) {
    var pary = (z.pairs || []).filter(maNagrania);
    if (!pary.length) { App.go("suoni"); return; }

    /* Losujemy z ziarnem z zegara: każde podejście inne, ale w obrębie
       podejścia stałe, więc powrót do zadania pokazuje to samo. */
    var seed = z.id + "-" + Date.now();
    var kolejka = [];
    for (var i = 0; i < RUNDA; i++) {
      var para = Core.seededShuffle(pary, seed + "p" + i)[0];
      var slyszane = Core.seededShuffle(["a", "b"], seed + "h" + i)[0];
      kolejka.push({ para: para, heard: slyszane });
    }

    var idx = 0, dobre = 0;

    set(pageHead(t("sound.kicker"), z.title || z.id, t("sound.setIntro")) +
      (z.note ? '<div class="card" style="margin-bottom:14px"><p>' + z.note + "</p></div>" : "") +
      (z.contrast
        ? '<div class="card card--contrast" style="margin-bottom:20px"><h3 style="font-size:1rem;margin-bottom:6px">' +
          esc(t("lesson.contrastLabel")) + "</h3><p>" + z.contrast + "</p></div>"
        : "") +
      '<div id="soundBox"></div>');

    var box = document.getElementById("soundBox");

    function dalej() {
      if (idx >= kolejka.length) { koniec(); return; }
      var poz = kolejka[idx];
      var ex = {
        t: "minpair",
        a: poz.para.a,
        b: poz.para.b,
        heard: poz.heard,
        why: glosa(poz.para)
      };
      var zbudowane = Ex.build(ex, idx, "sound-" + z.id);
      box.innerHTML = '<p class="exq__num">' + esc(t("sound.progress", { i: idx + 1, n: kolejka.length })) + "</p>" +
        zbudowane.html +
        '<div style="margin-top:16px"><button class="btn btn--ghost btn--sm js-next" hidden>' +
        esc(t("sound.next")) + "</button></div>";

      var next = box.querySelector(".js-next");
      zbudowane.wire(box.querySelector(".exq"), function (ok) {
        if (ok) dobre++;
        else Errors.recordGenerated({ topicId: "suoni:" + z.id, seed: seed + "#" + idx, tag: z.tag }, false);
        next.hidden = false;
        next.focus();
      });
      next.addEventListener("click", function () { idx++; dalej(); });
    }

    /** Wyjaśnienie po odpowiedzi: co znaczy jedno, a co drugie. */
    function glosa(para) {
      if (!para.glossA && !para.glossB) return "";
      return esc(para.a) + " = " + esc(para.glossA || "?") + " · " +
        esc(para.b) + " = " + esc(para.glossB || "?");
    }

    function koniec() {
      box.innerHTML = '<div class="summary"><div class="summary__score">' + dobre + "/" + kolejka.length + "</div>" +
        '<p class="summary__msg">' + esc(t(dobre >= kolejka.length - 1 ? "sound.doneGood" : "sound.done")) + "</p>" +
        '<div class="summary__acts"><button class="btn btn--primary js-more">' + esc(t("sound.again")) + "</button>" +
        '<button class="btn btn--ghost js-back">' + esc(t("sound.backList")) + "</button></div></div>";
      box.querySelector(".js-more").addEventListener("click", function () { przebieg(z); });
      box.querySelector(".js-back").addEventListener("click", function () { App.go("suoni"); });
      App.refreshRail();
    }

    dalej();
  }

  Views.suoni.RUNDA = RUNDA;

})(window);
