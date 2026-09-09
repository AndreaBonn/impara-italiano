/* ============================================================
   views-today.js — sesja dnia.

   Jeden przycisk zamiast trzech decyzji. Do tej pory uczeń, który miał
   dziesięć minut, musiał sam wybrać: fiszki, błędy, czy następna lekcja?
   Ta decyzja podejmowana codziennie jest miejscem, w którym gubi się
   passa — nie brak czasu, tylko brak oczywistego następnego kroku.

   Skład sesji (C2 w § 7.6 planu, do potwierdzenia przy przeglądzie):
   6 kart błędów, 3 zadania z generatora, 8 fiszek, na koniec wskazanie
   następnej lekcji. Kolejność nie jest przypadkowa: najpierw to, co
   uczeń pomylił, bo tam jest najwięcej do odzyskania, a fiszki na
   końcu, bo są najlżejsze i domykają sesję bez wysiłku.

   Skrypt klasyczny. Wymaga core.js, errors.js, drills.js, views.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var runCards = Views.shell.runCards;

  /* Skład sesji. Liczby są decyzją produktową, nie wynikiem pomiaru. */
  var PLAN = { errors: 6, drills: 3, cards: 8 };

  /** Dzisiejsza data w tym samym formacie, którego używa Core. */
  function dzis() { return Core.today(); }

  /** Ile części sesji ma dziś realną zawartość. */
  function zbierz() {
    var bledy = Errors.due(PLAN.errors);
    var fiszki = Core.dueCards(PLAN.cards);
    /* Zagadnienie drilla wybieramy tam, gdzie uczeń ma najwięcej otwartych
       kart: trening ma dobijać słaby punkt, a nie losować w próżnię. */
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
      (zrobione ? '<div class="card" style="margin-bottom:18px"><p>' + esc(t("today.alreadyDone")) + "</p></div>" : "") +
      '<div class="stack" style="margin-bottom:20px">' +
      wiersz(t("today.partErrors"), s.bledy.length) +
      wiersz(t("today.partDrills", { topic: Train.topicLabel(s.topic.id) }), s.drille.length) +
      wiersz(t("today.partCards"), s.fiszki.length) +
      "</div>" +
      /* Nie ma tu stanu pustego i nie może być: zadania z generatora są
         zawsze dostępne, więc sesja zawsze ma czym wypełnić dziesięć minut.
         To jest cała jej racja bytu — „dziś nic nie ma" odsyłałoby ucznia
         z powrotem do wyboru, którego ten widok ma go pozbawić. */
      '<button class="btn btn--primary js-start">' + esc(t("today.start", { n: razem })) + "</button>" +
      '<div id="todayBox" style="margin-top:20px"></div>');

    document.querySelector(".js-start").addEventListener("click", function () { przebieg(s); });
  };

  /* ---------------- Przebieg ---------------- */

  function przebieg(s) {
    var box = document.getElementById("todayBox");
    document.querySelector(".js-start").hidden = true;
    var dobre = 0, wszystkie = s.bledy.length + s.drille.length + s.fiszki.length;

    /* Kolejka zadań: karty błędów, potem drille. Fiszki mają własny
       przebieg (inna interakcja: pokaż i oceń), więc idą osobno na końcu. */
    var kolejka = s.bledy.map(function (k) { return { rodzaj: "blad", karta: k }; })
      .concat(s.drille.map(function (d) { return { rodzaj: "drill", item: d }; }));
    var i = 0;

    function zadanie() {
      if (i >= kolejka.length) { fiszkiEtap(); return; }
      var poz = kolejka[i];
      var ex, seed, idx, opis;

      if (poz.rodzaj === "blad") {
        var gdzie = Errors.locate(poz.karta.key);
        /* Treść ćwiczenia zmieniła się w kursie: nie ma czego pokazać. */
        if (!gdzie) { Errors.drop(poz.karta.key); wszystkie--; i++; zadanie(); return; }
        ex = gdzie.ex;
        idx = gdzie.index;
        /* Ziarno musi być id lekcji, żeby owinięte Ex.build rozpoznało
           ćwiczenie i samo zaktualizowało kartę. Dla zadań z generatora
           takiego dopasowania nie ma i zapis idzie wprost, niżej. */
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
      /* Kto zapisuje wynik: ćwiczenie z lekcji aktualizuje się samo przez
         owinięte Ex.build, zadanie z generatora nie ma lekcji do rozpoznania
         i musi zostać zapisane tutaj — także wtedy, gdy wraca jako karta. */
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
