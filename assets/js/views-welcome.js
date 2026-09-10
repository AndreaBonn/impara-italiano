/* ============================================================
   views-welcome.js — the first-run screen.

   The course has fifteen entries in the rail and none of them says "start
   here". A student opening it for the first time faces three different
   decisions at once: from which level, in what order, and how Training
   differs from Reviews. This screen takes the first one away and leaves the
   rest for later.

   It appears ONLY with an empty profile (app.js, startRouting) and
   disappears after the first choice — it is not a tab and has no entry in
   the rail. A student who closes the tab without choosing will see it
   again: the marker is set by the decision, not by the screen being shown.

   It loads AFTER views.js, because `Views.shell` is created at the end of
   that file.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /** One of the three roads: a heading, an explaining sentence and a button. */
  function droga(klucz, klasaPrzycisku, etykieta) {
    return '<div class="list-row list-row--stack"><span class="list-row__main">' +
      "<b>" + esc(t("welcome." + klucz + "Title")) + "</b>" +
      "<span>" + esc(t("welcome." + klucz + "Hint")) + "</span></span>" +
      '<button class="btn ' + klasaPrzycisku + ' js-' + klucz + '">' + esc(etykieta) + "</button></div>";
  }

  Views.benvenuto = function () {
    set(pageHead(t("welcome.kicker"), t("welcome.title"), t("welcome.intro")) +
      '<div class="stack">' +
      droga("zero", "btn--primary", t("welcome.zeroGo")) +
      droga("test", "btn--ghost", t("place.start")) +
      droga("look", "btn--quiet", t("welcome.lookGo")) +
      "</div>" +
      /* The guide is a link under the choice, not a fourth road: whoever
         lands here is meant to answer one question, not start reading. */
      '<p style="margin-top:20px"><button class="btn btn--quiet js-guide">' +
      esc(t("welcome.guide")) + "</button></p>");

    /* The choice is what ends the welcome — not the screen being shown.
       Otherwise: whoever closed the tab while reading would come back to the
       course without the one answer this screen was meant to give them. */
    el().querySelector(".js-zero").addEventListener("click", function () { odZera(); });
    el().querySelector(".js-test").addEventListener("click", function () { wybrano("piazzamento"); });
    el().querySelector(".js-look").addEventListener("click", function () { wybrano("percorso"); });
    /* The guide does not end the welcome: the student is meant to come back and choose. */
    el().querySelector(".js-guide").addEventListener("click", function () { App.go("guida"); });
  };

  function wybrano(trasa, params) {
    Core.state.onboarded = true;
    Core.save();
    App.go(trasa, params);
  }

  /**
   * "Starting from scratch" leads to the FIRST LESSON, not to the level list.
   *
   * Two reasons. The button's caption promises a lesson ("the first A1
   * lesson, from saying hello"), and the level list is one choice further —
   * that is, another choice this screen was meant to spare the student. The
   * second: the path has a "not sure which level to start from" bar
   * waiting, which is exactly the question they have just answered.
   *
   * When the level has not finished loading, the learning path is what
   * remains: an empty lesson screen would be worse than a list that at
   * least shows the course exists.
   */
  function odZera() {
    var poziom = Core.registry.levels[0];
    var next = poziom && Core.nextLesson(poziom);
    if (next) wybrano("lezione", { id: next.lesson.id });
    else wybrano("percorso");
  }
})();
