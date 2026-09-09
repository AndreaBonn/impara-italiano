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

  /* Skorupa widoku pożyczona z views.js: ten moduł dokłada trasę do już
     istniejącego zestawu, a nie zakłada własnego układu strony. */
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

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

  /* ═══════════════════════════════════════════════════════════
     ALLENAMENTO — ćwiczenia z generatora
     ═══════════════════════════════════════════════════════════ */

  /** Ile zadań w jednym podejściu. */
  var DRILL_N = 10;

  /**
   * Nazwa zagadnienia treningu.
   *
   * NIE bierzemy jej z GRAMMAR_REF, choć tag tam wskazuje: „numeri" ma
   * tag `g-frase`, którego tytuł brzmi „struktura zdania" i jako nazwa
   * ćwiczenia wprowadzałby w błąd. Tag służy quaderno błędów do grupowania,
   * nazwa służy uczniowi do wyboru — to dwie różne rzeczy.
   */
  function topicLabel(id) { return t("train.topic." + id); }

  Views.allenamento = function (params) {
    if (params && params.topic) return drillSession(params.topic);

    set(pageHead(t("train.kicker"), t("train.title"), t("train.intro")) +
      '<div class="stack">' + Drills.TOPICS.map(function (topic) {
        return '<div class="list-row"><span class="list-row__main"><b>' + esc(topicLabel(topic.id)) + "</b>" +
          "<span>" + esc(tagLabel(topic.tag)) + "</span></span>" +
          '<button class="btn btn--primary btn--sm js-topic" data-topic="' + esc(topic.id) + '">' +
          esc(t("train.start")) + "</button></div>";
      }).join("") + "</div>" +
      '<p class="exq__sub" style="margin-top:20px">' + esc(t("train.endless")) + "</p>" +
      /* Rozróżnianie dźwięków stoi obok, a nie w tej liście: tam ćwiczy się
         regułę, tu ucho, i jedno nie zastępuje drugiego. */
      '<div class="list-row" style="margin-top:24px"><span class="list-row__main"><b>' +
      esc(t("sound.title")) + "</b><span>" + esc(t("sound.hubHint")) + "</span></span>" +
      '<button class="btn btn--ghost btn--sm js-sounds">' + esc(t("sound.open")) + "</button></div>");

    el().querySelectorAll(".js-topic").forEach(function (b) {
      b.addEventListener("click", function () {
        App.go("allenamento", { topic: b.getAttribute("data-topic") });
      });
    });
    el().querySelector(".js-sounds").addEventListener("click", function () { App.go("suoni"); });
  };

  /**
   * Seria zadań jednego zagadnienia.
   *
   * Ziarno bierze się z zegara przy wejściu, więc każde podejście jest
   * inne, ale W TRAKCIE podejścia jest stałe: karta błędu zapisuje parę
   * (generator, ziarno) i to samo zadanie da się później odtworzyć
   * co do znaku.
   */
  function drillSession(topicId) {
    var topic = Drills.TOPICS.filter(function (x) { return x.id === topicId; })[0];
    if (!topic) { App.go("allenamento"); return; }

    var baza = topicId + "-" + Date.now();
    var zadania = Drills.session(topicId, DRILL_N, baza);
    var i = 0, dobre = 0;

    set(pageHead(t("train.kicker"), topicLabel(topicId), tagLabel(topic.tag)) +
      '<div id="drillBox"></div>');
    var box = document.getElementById("drillBox");

    function dalej() {
      if (i >= zadania.length) { koniec(); return; }
      var item = zadania[i];
      var zbudowane = Ex.build(item.ex, i, "drill-" + topicId);

      box.innerHTML = '<p class="exq__num">' + esc(t("train.progress", { i: i + 1, n: zadania.length })) + "</p>" +
        zbudowane.html +
        '<div style="margin-top:16px"><button class="btn btn--ghost btn--sm js-next" hidden>' +
        esc(t("train.next")) + "</button></div>";

      var korzen = box.querySelector(".exq");
      var next = box.querySelector(".js-next");

      /* Zadanie z generatora nie należy do żadnej lekcji, więc owinięcie
         Ex.build nie ma czego zapisać: quaderno dostaje je stąd, wprost. */
      zbudowane.wire(korzen, function (ok) {
        if (ok) dobre++;
        Errors.recordGenerated(item, ok);
        next.hidden = false;
        next.focus();
      });
      next.addEventListener("click", function () { i++; dalej(); });
    }

    function koniec() {
      box.innerHTML = '<div class="summary"><div class="summary__score">' + dobre + "/" + zadania.length + "</div>" +
        '<p class="summary__msg">' + esc(t("train.done")) + "</p>" +
        '<div class="summary__acts"><button class="btn btn--primary js-more">' + esc(t("train.again")) + "</button>" +
        '<button class="btn btn--ghost js-hub">' + esc(t("train.backHub")) + "</button></div></div>";
      box.querySelector(".js-more").addEventListener("click", function () { drillSession(topicId); });
      box.querySelector(".js-hub").addEventListener("click", function () { App.go("allenamento"); });
      App.refreshRail();
    }

    dalej();
  }

  Train.BATCH = BATCH;
  Train.DRILL_N = DRILL_N;
  Train.tagLabel = tagLabel;
  Train.topicLabel = topicLabel;

  global.Train = Train;

})(window);
