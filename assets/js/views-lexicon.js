/* ============================================================
   views-lexicon.js — my dictionary: the student's whole deck with review dates.

   A screen split out of views.js, which held eight screens at once. The
   pattern is the same one views-talk.js, views-train.js and views-today.js
   already use: the shell (set, pageHead, el, empty) comes from
   `Views.shell`, and the file adds a route of its own to `Views`.

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
  var empty = Views.shell.empty;
  /* ═══════════════════════════════════════════════════════════
     MY DICTIONARY
     ═══════════════════════════════════════════════════════════ */
  Views.lessico = function () {
    var cards = Object.keys(Core.state.srs).map(function (k) {
      return Object.assign({ key: k }, Core.state.srs[k]);
    });
    cards.sort(function (a, b) { return a.due - b.due; });

    var now = Date.now();
    var learned = cards.filter(function (c) { return c.reps >= 3; }).length;

    set(pageHead(t("lex.kicker"), t("nav.lexicon"), t("lex.intro")) +
      '<div class="grid-2" style="margin-bottom:24px">' +
      '<div class="stat-card"><b>' + cards.length + "</b><span>" + esc(t("lex.inDeck")) + "</span></div>" +
      '<div class="stat-card"><b>' + learned + "</b><span>" + esc(t("lex.learned")) + "</span></div>" +
      '<div class="stat-card"><b>' + Core.dueCount() + "</b><span>" + esc(t("lex.dueToday")) + "</span></div></div>" +
      (cards.length
        ? '<div class="field-row" style="margin-bottom:14px"><input type="text" class="field js-filter" placeholder="' + esc(t("lex.searchPh")) + '" style="max-width:340px"></div>' +
          '<div class="stack" id="lexList">' + cards.map(function (c) {
            var days = Math.round((c.due - now) / 86400000);
            var when = c.due <= now ? t("lex.today") : (days <= 1 ? t("lex.tomorrow") : t("lex.inDays", { n: days }));
            return '<div class="list-row" data-t="' + esc((c.it + " " + Core.cardTr(c)).toLowerCase()) + '">' +
              '<button type="button" class="say-btn" data-say="' + esc(c.it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button>' +
              '<span class="list-row__main"><b>' + esc(c.it) + "</b><span>" + esc(Core.cardTr(c)) + "</span></span>" +
              '<span class="chip">' + esc(when) + "</span>" +
              '<button type="button" class="btn btn--quiet btn--sm js-del" data-k="' + esc(c.key) + '">' + t("lex.delete") + "</button></div>";
          }).join("") + "</div>"
        : empty(t("lex.empty"), t("lex.emptyHint"))));

    var filter = el().querySelector(".js-filter");
    if (filter) filter.addEventListener("input", function () {
      var q = Core.norm(filter.value);
      el().querySelectorAll("#lexList .list-row").forEach(function (r) {
        r.style.display = !q || r.getAttribute("data-t").indexOf(q) >= 0 ? "" : "none";
      });
    });
    el().querySelectorAll(".js-del").forEach(function (b) {
      b.addEventListener("click", function () {
        delete Core.state.srs[b.getAttribute("data-k")];
        Core.save(); App.refreshRail(); App.go("lessico");
      });
    });
  };
})();
