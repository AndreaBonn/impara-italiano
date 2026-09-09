/* ============================================================
   views-frequency.js — widok „Pokrycie".

   Pokazuje dwie liczby i pilnuje, żeby zostały dwiema. Zlanie ich w jeden
   procent „gotowości" byłoby ładniejsze i kłamliwe: sufit kursu i stan
   ucznia to różne rzeczy, a odległość między nimi jest informacją dla
   NAS, nie dla niego.

   Skrypt klasyczny. Wymaga core.js, lemma.js, frequency.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  function proc(x) { return Math.round(x * 100); }

  function slupek(etykieta, opis, ile, na, udzial, mocny) {
    var p = na ? ile / na : 0;
    return '<div class="cov">' +
      '<div class="cov__top"><b>' + esc(etykieta) + "</b>" +
      '<span class="cov__n">' + ile + " / " + na + "</span></div>" +
      '<div class="cov__bar"><span class="cov__fill' + (mocny ? " cov__fill--strong" : "") +
      '" style="width:' + proc(p) + '%"></span></div>' +
      '<p class="cov__why">' + esc(opis) + "</p>" +
      '<p class="cov__tok">' + esc(t("cov.ofText", { pct: proc(udzial) })) + "</p>" +
      "</div>";
  }

  Views.copertura = function () {
    var F = global.FREQUENCY;
    if (!F || !F.words) { set(Views.shell.empty(t("cov.noList"))); return; }

    var kurs = Frequency.slownikKursu();
    var uczen = Frequency.slownikUcznia();
    var pKurs = Frequency.pokrycie(F.words, kurs, F.tokens);
    var pUczen = Frequency.pokrycie(F.words, uczen, F.tokens);
    var braki = Frequency.brakujace(F.words, kurs, uczen, 20);

    set(pageHead(t("cov.kicker"), t("cov.title"), t("cov.intro", { n: F.words.length })) +
      '<div class="card">' +
      slupek(t("cov.yours"), t("cov.yoursWhy"), pUczen.znane, pUczen.wszystkie, pUczen.udzialTokenow, true) +
      slupek(t("cov.course"), t("cov.courseWhy"), pKurs.znane, pKurs.wszystkie, pKurs.udzialTokenow, false) +
      "</div>" +

      (braki.length
        ? '<h2 class="cov__h">' + esc(t("cov.nextUp")) + "</h2>" +
          '<p style="color:var(--ink-soft);font-size:.92rem">' + esc(t("cov.nextUpWhy")) + "</p>" +
          '<div class="stack" id="covList">' + braki.map(function (b) {
            return '<div class="list-row" data-forma="' + esc(b.forma) + '">' +
              '<span class="chip">#' + b.ranga + "</span>" +
              '<span class="list-row__main"><b class="js-w"></b></span>' +
              '<button type="button" class="say-btn" data-say="' + esc(b.forma) + '" aria-label="' +
              esc(t("a11y.listenTo", { what: b.forma })) + '">🔊</button>' +
              '<button type="button" class="btn btn--green btn--sm js-add" data-forma="' + esc(b.forma) + '">' +
              esc(t("cov.add")) + "</button></div>";
          }).join("") + "</div>"
        : '<p class="cov__done">' + esc(t("cov.nothingLeft")) + "</p>") +

      '<p class="cov__src">' + esc(t("cov.source", {
        source: F.source, license: F.license, sentences: F.sentences.toLocaleString(I18n.locale())
      })) + "</p>");

    /* Napisy przez textContent: forma pochodzi z danych, ale trzyma się tej
       samej zasady, co reszta widoku — do DOM wchodzi tekst, nie znaczniki. */
    el().querySelectorAll("#covList .list-row").forEach(function (row) {
      row.querySelector(".js-w").textContent = row.getAttribute("data-forma");
    });
    Ex.wireSpeakers(el());

    el().querySelectorAll(".js-add").forEach(function (b) {
      b.addEventListener("click", function () {
        var forma = b.getAttribute("data-forma");
        var haslo = (Lemma.resolve(forma) || [])[0] || forma;
        var tr = (Core.registry.vocabIndex || {})[Core.norm(haslo)] || "";
        Core.addCard(haslo, tr, "copertura");
        Core.toast(t("lookup.added", { word: haslo }));
        App.refreshRail();
        App.go("copertura");
      });
    });
  };

})(window);
