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
            /* W wierszu stoi HASŁO: to ono trafi na fiszkę i to ono ma
               nagranie. Napotkane formy idą pod spodem jako kontekst.
               Pokazywanie formy przy dodawaniu hasła to były dwie różne
               rzeczy podane jako jedna. */
            return '<div class="list-row" data-haslo="' + esc(b.haslo) + '">' +
              '<span class="chip">#' + b.ranga + "</span>" +
              '<span class="list-row__main"><b class="js-w"></b>' +
              (b.formy.length > 1 ? '<span class="js-f"></span>' : "") + "</span>" +
              /* Głośnik tylko przy nagraniu. Kurs obiecuje lektora; przycisk,
                 który po cichu schodzi na syntezę systemową, tej obietnicy
                 nie dotrzymuje, a uczeń nie ma jak zauważyć różnicy między
                 „nie nagraliśmy tego" a „tak to się wymawia". */
              (Audio2.hasNatural(b.haslo)
                ? '<button type="button" class="say-btn" data-say="' + esc(b.haslo) + '" aria-label="' +
                  esc(t("a11y.listenTo", { what: b.haslo })) + '">🔊</button>'
                : "") +
              '<button type="button" class="btn btn--green btn--sm js-add" data-haslo="' + esc(b.haslo) + '">' +
              esc(t("cov.add")) + "</button></div>";
          }).join("") + "</div>"
        : '<p class="cov__done">' + esc(t("cov.nothingLeft")) + "</p>") +

      '<p class="cov__src">' + esc(t("cov.source", {
        source: F.source, license: F.license, sentences: F.sentences.toLocaleString(I18n.locale())
      })) + "</p>");

    /* Napisy przez textContent: forma pochodzi z danych, ale trzyma się tej
       samej zasady, co reszta widoku — do DOM wchodzi tekst, nie znaczniki. */
    el().querySelectorAll("#covList .list-row").forEach(function (row, i) {
      row.querySelector(".js-w").textContent = row.getAttribute("data-haslo");
      var f = row.querySelector(".js-f");
      if (f) f.textContent = t("cov.forms", { forms: braki[i].formy.slice(0, 4).join(", ") });
    });
    Ex.wireSpeakers(el());

    el().querySelectorAll(".js-add").forEach(function (b) {
      b.addEventListener("click", function () {
        var haslo = b.getAttribute("data-haslo");
        var tr = (Core.registry.vocabIndex || {})[Core.norm(haslo)] || "";
        Core.addCard(haslo, tr, "copertura");
        Core.toast(t("lookup.added", { word: haslo }));
        App.refreshRail();
        App.go("copertura");
      });
    });
  };

})(window);
