/* ============================================================
   views-phonetics.js — telling sounds apart.

   A student who does not HEAR the difference between "nonno" and "nono"
   will not produce it — and correcting their pronunciation is then policing
   something they do not control. That is why this exercise comes before
   speaking, not after it: the ear first, then the mouth.

   The pair sets sit in data/core/phonetics.js (Italian words alone), while
   the glosses and the contrastive note are in the overlays — written for a
   specific language, because the problem is different for a Pole, a French
   speaker and an American.

   Classic script. Requires core.js, exercises.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;

  /** How many pairs in one run. */
  var RUNDA = 10;

  function zbiory() { return global.PHONETICS || []; }
  function zbior(id) { return zbiory().filter(function (z) { return z.id === id; })[0]; }

  /** Whether both words of the pair have recordings. Without them the exercise makes no sense. */
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

  /* ---------------- The run ---------------- */

  function przebieg(z) {
    var pary = (z.pairs || []).filter(maNagrania);
    if (!pary.length) { App.go("suoni"); return; }

    /* We draw with a seed from the clock: every run is different, but fixed
       within a run, so coming back to a task shows the same thing. */
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

    /** The explanation after answering: what one means and what the other does. */
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
