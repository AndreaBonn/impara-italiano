/* ============================================================
   views-train.js — widoki treningu adaptacyjnego.

   Na razie: zakładka „Błędy" wewnątrz Powtórek. Osobny plik, bo
   views.js ma już 844 linie, a limit projektu to 300 na plik.

   Zasada powtórki: pokazujemy PRAWDZIWE ćwiczenie z lekcji, a nie
   fiszkę z osobną oceną. Uczeń robi to samo zadanie, na którym się
   potknął, a wynik wchodzi tą samą drogą co w lekcji — przez owinięte
   Ex.build. Dzięki temu nie ma drugiego miejsca, w którym aktualizuje
   się harmonogram, więc nie ma czego rozjechać.

   Skrypt klasyczny. Wymaga core.js, errors.js, exercises.js, i18n.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Train = {};
  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };

  /** Ile kart bierzemy na jedno podejście. */
  var BATCH = 10;

  /** Nazwa zagadnienia w języku ucznia — z hasła gramatycznego, nie z nowego napisu. */
  function tagLabel(tag) {
    var secs = global.GRAMMAR_REF || [];
    for (var i = 0; i < secs.length; i++) {
      var items = secs[i].items || [];
      for (var j = 0; j < items.length; j++) {
        if (items[j].id === tag) return items[j].title || tag;
      }
    }
    return tag;
  }

  function stanPusty() {
    return '<div class="empty"><h3>' + esc(t("err.emptyTitle")) + "</h3>" +
      "<p>" + esc(t("err.emptyText")) + "</p>" +
      '<button class="btn btn--primary js-path">' + esc(t("nav.path")) + "</button></div>";
  }

  /** Podsumowanie „na czym stoisz": zagadnienia z liczbą otwartych kart. */
  function podsumowanie() {
    var wg = Errors.byTag();
    var tagi = Object.keys(wg).sort(function (a, b) { return wg[b].length - wg[a].length; });
    if (!tagi.length) return "";
    return '<h2 style="font-size:1.2rem;margin:26px 0 12px">' + esc(t("err.byTag")) + "</h2>" +
      '<div class="stack">' + tagi.map(function (tag) {
        var karty = wg[tag];
        var zalegle = karty.filter(function (c) { return c.due <= Date.now(); }).length;
        return '<div class="list-row"><span class="list-row__main"><b>' + esc(tagLabel(tag)) + "</b>" +
          "<span>" + esc(t("err.cardsIn", { n: karty.length })) + "</span></span>" +
          '<span class="chip' + (zalegle ? " chip--green" : "") + '">' +
          esc(zalegle ? t("err.dueNow", { n: zalegle }) : t("err.resting")) + "</span></div>";
      }).join("") + "</div>";
  }

  /**
   * Zakładka „Błędy". Dostaje kontener od Views.ripasso i sama decyduje,
   * czy pokazać stan pusty, zaproszenie do powtórki, czy samą powtórkę.
   */
  Train.errorPanel = function (box) {
    var wszystkie = Object.keys(Core.state.errors).length;
    var zalegle = Errors.due(BATCH);

    if (!wszystkie) {
      box.innerHTML = stanPusty();
      box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
      return;
    }

    if (!zalegle.length) {
      box.innerHTML = '<div class="card"><h3 style="font-size:1.05rem;margin-bottom:6px">' +
        esc(t("err.restingTitle", { n: wszystkie })) + "</h3>" +
        '<p style="color:var(--ink-soft);font-size:.92rem">' + esc(t("err.restingText")) + "</p></div>" +
        podsumowanie();
      return;
    }

    box.innerHTML = '<div class="card"><h3 style="font-size:1.05rem;margin-bottom:6px">' +
      esc(t("err.dueTitle", { n: zalegle.length })) + "</h3>" +
      '<p style="color:var(--ink-soft);font-size:.92rem;margin-bottom:12px">' + esc(t("err.dueText")) + "</p>" +
      '<button class="btn btn--primary js-start">' + esc(t("err.start")) + "</button></div>" +
      podsumowanie();

    box.querySelector(".js-start").addEventListener("click", function () { przebieg(box, zalegle); });
  };

  /* ---------------- Przebieg powtórki ---------------- */

  function przebieg(box, karty) {
    var i = 0, dobre = 0, zgubione = 0;

    function dalej() {
      if (i >= karty.length) { koniec(); return; }
      var karta = karty[i];
      var gdzie = Errors.locate(karta.key);

      /* Treść ćwiczenia zmieniła się w kursie: nie ma czego pokazać.
         Karta odchodzi, ale uczeń ma o tym wiedzieć — cicha strata
         wyglądałaby jak zaliczenie. */
      if (!gdzie) {
        Errors.drop(karta.key);
        zgubione++;
        i++;
        dalej();
        return;
      }

      var zbudowane = Ex.build(gdzie.ex, gdzie.index, gdzie.lesson.id);
      box.innerHTML = '<p class="exq__num">' + esc(t("err.progress", { i: i + 1, n: karty.length })) + "</p>" +
        '<p class="exq__sub" style="margin-bottom:12px">' +
        esc(t("err.fromLesson", { lesson: gdzie.lesson.title || gdzie.lesson.titleIt })) +
        " · " + esc(tagLabel(karta.tag)) + "</p>" +
        zbudowane.html +
        '<div style="margin-top:16px"><button class="btn btn--ghost btn--sm js-next" hidden>' +
        esc(t("err.next")) + "</button></div>";

      Ex.wireSpeakers(box);
      var korzen = box.querySelector(".exq");
      var next = box.querySelector(".js-next");

      /* Ex.build jest owinięte przez errors.js, więc harmonogram karty
         aktualizuje się sam. Tutaj zostaje tylko przejście dalej. */
      zbudowane.wire(korzen, function (ok) {
        if (ok) dobre++;
        next.hidden = false;
        next.focus();
      });

      next.addEventListener("click", function () { i++; dalej(); });
    }

    function koniec() {
      box.innerHTML = '<div class="summary"><div class="summary__score">' + dobre + "/" + karty.length + "</div>" +
        '<p class="summary__msg">' + esc(t("err.done")) + "</p>" +
        (zgubione ? '<p class="summary__msg">' + esc(t("err.gone", { n: zgubione })) + "</p>" : "") +
        '<div class="summary__acts"><button class="btn btn--primary js-more">' + esc(t("err.again")) + "</button>" +
        '<button class="btn btn--ghost js-path">' + esc(t("nav.path")) + "</button></div></div>";
      box.querySelector(".js-more").addEventListener("click", function () { App.go("ripasso", { tab: "errori" }); });
      box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
      App.refreshRail();
    }

    dalej();
  }

  Train.BATCH = BATCH;
  Train.tagLabel = tagLabel;

  global.Train = Train;

})(window);
