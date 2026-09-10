/* ============================================================
   views-today.js — the daily session.

   One button instead of three decisions. Until now a student with ten
   minutes had to choose for themselves: flashcards, mistakes, or the next
   lesson? That decision, taken every day, is where the streak gets lost —
   not a lack of time, but the lack of an obvious next step.

   The composition of the session (C2 in § 7.6 of the plan, to be confirmed
   at review): 6 mistake cards, 3 generated tasks, 8 flashcards, and at the
   end a pointer to the next lesson. The order is not accidental: first what
   the student got wrong, because that is where there is most to recover,
   and the flashcards at the end, because they are the lightest and close
   the session without effort.

   Classic script. Requires core.js, errors.js, drills.js, views.js.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var runCards = Views.shell.runCards;

  /* The composition of the session. The numbers are a product decision, not a measurement. */
  var PLAN = { errors: 6, drills: 3, cards: 8 };

  /** Today's date in the same format Core uses. */
  function dzis() { return Core.today(); }

  /** How many parts of the session have real content today. */
  function zbierz() {
    var bledy = Errors.due(PLAN.errors);
    var fiszki = Core.dueCards(PLAN.cards);
    /* The drill topic is chosen where the student has the most open cards:
       training is meant to hammer at a weak spot, not to draw at random. */
    var wg = Errors.byTag();
    var najslabszy = Object.keys(wg).sort(function (a, b) { return wg[b].length - wg[a].length; })[0];
    var topic = Drills.TOPICS.filter(function (x) { return x.tag === najslabszy; })[0] ||
      Drills.TOPICS[Math.floor(Date.now() / 86400000) % Drills.TOPICS.length];
    var drille = Drills.session(topic.id, PLAN.drills, "oggi-" + dzis());
    return { bledy: bledy, fiszki: fiszki, drille: drille, topic: topic };
  }

  function nastepnaLekcja() {
    var levels = Core.registry.levels;
    for (var i = 0; i < levels.length; i++) {
      var n = Core.nextLesson(levels[i]);
      if (n) return n;
    }
    return null;
  }

  function wiersz(label, n) {
    return '<div class="list-row"><span class="list-row__main"><b>' + esc(label) + "</b></span>" +
      '<span class="chip' + (n ? " chip--green" : "") + '">' + n + "</span></div>";
  }

  Views.oggi = function () {
    var s = zbierz();
    var razem = s.bledy.length + s.drille.length + s.fiszki.length;
    var zrobione = (Core.state.session || {}).date === dzis();

    set(pageHead(t("today.kicker"), t("today.title"), t("today.intro")) +
      Views.shell.guideLink("oggi") +
      (zrobione ? '<div class="card" style="margin-bottom:18px"><p>' + esc(t("today.alreadyDone")) + "</p></div>" : "") +
      '<div class="stack" style="margin-bottom:20px">' +
      wiersz(t("today.partErrors"), s.bledy.length) +
      wiersz(t("today.partDrills", { topic: Train.topicLabel(s.topic.id) }), s.drille.length) +
      wiersz(t("today.partCards"), s.fiszki.length) +
      "</div>" +
      /* There is no empty state here and there cannot be one: generated
         tasks are always available, so the session always has something to
         fill ten minutes with. That is its whole reason to exist — "nothing
         today" would send the student back to the choice this view is meant
         to spare them. */
      '<button class="btn btn--primary js-start">' + esc(t("today.start", { n: razem })) + "</button>" +
      '<div id="todayBox" style="margin-top:20px"></div>');

    document.querySelector(".js-start").addEventListener("click", function () { przebieg(s); });
  };

  /* ---------------- The run ---------------- */

  function przebieg(s) {
    var box = document.getElementById("todayBox");
    document.querySelector(".js-start").hidden = true;
    var dobre = 0, zgubione = 0;
    var wszystkie = s.bledy.length + s.drille.length + s.fiszki.length;

    /* The task queue: mistake cards, then drills. Flashcards have a run of
       their own (a different interaction: reveal and grade), so they go
       separately at the end. */
    var kolejka = s.bledy.map(function (k) { return { rodzaj: "blad", karta: k }; })
      .concat(s.drille.map(function (d) { return { rodzaj: "drill", item: d }; }));
    var i = 0;

    function zadanie() {
      if (i >= kolejka.length) { fiszkiEtap(); return; }
      var poz = kolejka[i];
      var ex, seed, idx, opis;

      if (poz.rodzaj === "blad") {
        var gdzie = Errors.locate(poz.karta.key);
        /* A card with no exercise disappears, but the student must hear
           about it: a silent loss looks exactly like a pass. The Mistakes
           tab says the same thing, so it says the same thing here. */
        if (!gdzie) { Errors.drop(poz.karta.key); zgubione++; wszystkie--; i++; zadanie(); return; }
        ex = gdzie.ex;
        idx = gdzie.index;
        /* The seed has to be the lesson id, so that the wrapped Ex.build
           recognises the exercise and updates the card by itself. Generated
           tasks have no such match and are recorded directly, below. */
        seed = gdzie.generated ? "drill-" + gdzie.topicId : gdzie.lesson.id;
        opis = t("today.stepError");
      } else {
        ex = poz.item.ex;
        idx = i;
        seed = "drill-" + poz.item.topicId;
        opis = t("today.stepDrill");
      }

      var zbudowane = Ex.build(ex, idx, seed);
      box.innerHTML = '<p class="exq__num">' + esc(t("today.progress", { i: i + 1, n: wszystkie })) +
        " · " + esc(opis) + "</p>" + zbudowane.html +
        '<div style="margin-top:16px"><button class="btn btn--ghost btn--sm js-next" hidden>' +
        esc(t("today.next")) + "</button></div>";

      Ex.wireSpeakers(box);
      var next = box.querySelector(".js-next");
      /* Who records the result: a lesson exercise updates itself through the
         wrapped Ex.build, a generated task has no lesson to be recognised by
         and has to be recorded here — including when it comes back as a
         card. */
      var wygenerowane = poz.rodzaj === "drill" ? poz.item
        : (gdzie && gdzie.generated ? { topicId: gdzie.topicId, seed: gdzie.seed, tag: poz.karta.tag } : null);

      zbudowane.wire(box.querySelector(".exq"), function (ok) {
        if (ok) dobre++;
        if (wygenerowane) Errors.recordGenerated(wygenerowane, ok);
        next.hidden = false;
        next.focus();
      });
      next.addEventListener("click", function () { i++; zadanie(); });
    }

    function fiszkiEtap() {
      if (!s.fiszki.length) { koniec(); return; }
      box.innerHTML = '<p class="exq__num">' + esc(t("today.stepCards")) + '</p><div id="srsBox"></div>';
      runCards(document.getElementById("srsBox"), s.fiszki, function (right) {
        dobre += right;
        koniec();
      });
    }

    function koniec() {
      Core.state.session = { date: dzis(), score: dobre, total: wszystkie };
      Core.save();
      var next = nastepnaLekcja();
      box.innerHTML = '<div class="summary"><div class="summary__score">' + dobre + "/" + wszystkie + "</div>" +
        '<p class="summary__msg">' + esc(t("today.done")) + "</p>" +
        (zgubione ? '<p class="summary__msg">' + esc(t("err.gone", { n: zgubione })) + "</p>" : "") +
        '<div class="summary__acts">' +
        (next ? '<button class="btn btn--primary js-lesson">' +
          esc(t("today.nextLesson", { lesson: next.lesson.title || next.lesson.titleIt })) + "</button>" : "") +
        '<button class="btn btn--ghost js-path">' + esc(t("nav.path")) + "</button></div></div>";
      var b = box.querySelector(".js-lesson");
      if (b) b.addEventListener("click", function () { App.go("lezione", { id: next.lesson.id }); });
      box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
      App.refreshRail();
    }

    zadanie();
  }

  Views.oggi.PLAN = PLAN;

})(window);
