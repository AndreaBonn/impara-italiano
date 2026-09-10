/* ============================================================
   views-train.js — the adaptive training screens.

   For now: the "Mistakes" tab inside Reviews. A separate file, because
   views.js is already 844 lines and the project limit is 300 per file.

   The principle of a review: we show the REAL exercise from the lesson, not
   a flashcard with a grading of its own. The student does the same task
   they stumbled on, and the result enters the same way as in a lesson —
   through the wrapped Ex.build. That way there is no second place where the
   schedule is updated, so there is nothing to drift apart.

   Classic script. Requires core.js, errors.js, exercises.js, i18n.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Train = {};
  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };

  /* The view shell borrowed from views.js: this module adds a route to an
     existing set rather than setting up a page layout of its own. */
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /** How many cards we take for one run. */
  var BATCH = 10;

  /** The topic name in the student's language — from a grammar entry, not from a new string. */
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

  /** The "where you stand" summary: topics with the number of open cards. */
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
   * The "Mistakes" tab. It receives a container from Views.ripasso and
   * decides for itself whether to show the empty state, an invitation to
   * review, or the review itself.
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

  /* ---------------- The review run ---------------- */

  function przebieg(box, karty) {
    var i = 0, dobre = 0, zgubione = 0;

    function dalej() {
      if (i >= karty.length) { koniec(); return; }
      var karta = karty[i];
      var gdzie = Errors.locate(karta.key);

      /* The exercise content has changed in the course: there is nothing to
         show. The card goes away, but the student must know about it — a
         silent loss would look like a pass. */
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

      /* Ex.build is wrapped by errors.js, so the card's schedule updates
         itself. All that is left here is moving on. */
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
     ALLENAMENTO — the generated exercises
     ═══════════════════════════════════════════════════════════ */

  /** How many tasks in one run. */
  var DRILL_N = 10;

  /**
   * The name of a training topic.
   *
   * We do NOT take it from GRAMMAR_REF, even though the tag points there:
   * "numeri" has the tag `g-frase`, whose title reads "sentence structure"
   * and would be misleading as the name of an exercise. The tag serves the
   * mistake notebook for grouping, the name serves the student for
   * choosing — two different things.
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
      /* Sound discrimination sits next to this list rather than in it:
         there you practise a rule, here the ear, and one does not replace
         the other. */
      '<div class="list-row" style="margin-top:24px"><span class="list-row__main"><b>' +
      esc(t("sound.title")) + "</b><span>" + esc(t("sound.hubHint")) + "</span></span>" +
      '<button class="btn btn--ghost btn--sm js-sounds">' + esc(t("sound.open")) + "</button></div>" +
      '<div class="list-row" style="margin-top:12px"><span class="list-row__main"><b>' +
      esc(t("read.title")) + "</b><span>" + esc(t("read.hubHint")) + "</span></span>" +
      '<button class="btn btn--ghost btn--sm js-read">' + esc(t("read.open")) + "</button></div>" +
      '<div class="list-row" style="margin-top:12px"><span class="list-row__main"><b>' +
      esc(t("write.title")) + "</b><span>" + esc(t("write.hubHint")) + "</span></span>" +
      '<button class="btn btn--ghost btn--sm js-write">' + esc(t("write.open")) + "</button></div>");

    el().querySelectorAll(".js-topic").forEach(function (b) {
      b.addEventListener("click", function () {
        App.go("allenamento", { topic: b.getAttribute("data-topic") });
      });
    });
    el().querySelector(".js-sounds").addEventListener("click", function () { App.go("suoni"); });
    el().querySelector(".js-read").addEventListener("click", function () { App.go("lettura"); });
    el().querySelector(".js-write").addEventListener("click", function () { App.go("scrittura"); });
  };

  /**
   * A run of tasks on one topic.
   *
   * The seed is taken from the clock on entry, so every run is different,
   * but DURING a run it is fixed: a mistake card stores the pair
   * (generator, seed) and the same task can later be reproduced character
   * for character.
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

      /* A generated task belongs to no lesson, so the Ex.build wrapper has
         nothing to record: the notebook gets it from here, directly. */
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
