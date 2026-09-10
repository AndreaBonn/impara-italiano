/* ============================================================
   views-progress.js — progress: the streak, accuracy, the last two weeks.

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
  var pct = Views.shell.pct;
  /* ═══════════════════════════════════════════════════════════
     PROGRESS
     ═══════════════════════════════════════════════════════════ */
  Views.progressi = function () {
    var s = Core.state;
    var acc = (s.stats.correct + s.stats.wrong) ? Math.round(100 * s.stats.correct / (s.stats.correct + s.stats.wrong)) : 0;

    // the day abbreviations come from Intl, not from an array: otherwise every language needs its own
    var weekday = new Intl.DateTimeFormat(I18n.locale(), { weekday: "short" });
    var days = [];
    for (var d = 13; d >= 0; d--) {
      var dt = new Date(Date.now() - d * 86400000);
      var key = dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
      days.push({ key: key, v: s.stats.days[key] || 0, label: weekday.format(dt) });
    }
    var max = Math.max.apply(null, days.map(function (x) { return x.v; }).concat([1]));

    set(pageHead(t("prog.kicker"), t("prog.title"), t("prog.intro")) +
      '<div class="grid-2" style="margin-bottom:28px">' +
      '<div class="stat-card"><b>' + s.streak.count + "</b><span>" + esc(t("prog.streak", { best: s.streak.best })) + "</span></div>" +
      '<div class="stat-card"><b>' + s.stats.lessonsDone + "</b><span>" + esc(t("prog.lessonsDone")) + "</span></div>" +
      '<div class="stat-card"><b>' + acc + "%</b><span>" + esc(t("prog.accuracy")) + "</span></div>" +
      '<div class="stat-card"><b>' + s.xp + "</b><span>" + esc(t("prog.points")) + "</span></div></div>" +

      '<h2 style="font-size:1.2rem;margin-bottom:12px">' + t("prog.lastTwoWeeks") + "</h2>" +
      /* Fourteen columns of day abbreviations do not fit in 375 px: the
         abbreviations have a minimum width of their own and push the chart
         off screen. Instead of truncating the labels we scroll horizontally
         — the same pattern the conjugation tables are wrapped in. */
      '<div class="card" style="margin-bottom:28px"><div class="table-wrap" style="border:0"><div style="display:flex;gap:6px;align-items:flex-end;height:130px;min-width:320px">' +
      days.map(function (x) {
        var h = Math.max(4, Math.round(100 * x.v / max));
        return '<div style="flex:1;text-align:center">' +
          '<div title="' + esc(t("prog.answers", { n: x.v })) + '" style="height:' + h + 'px;background:' + (x.v ? "var(--salvia-deep)" : "var(--line)") + ';border-radius:6px 6px 0 0"></div>' +
          '<span style="font-size:.68rem;color:var(--ink-faint)">' + x.label + "</span></div>";
      }).join("") + "</div></div></div>" +

      '<h2 style="font-size:1.2rem;margin-bottom:12px">' + t("prog.levels") + '</h2><div class="stack">' +
      Core.registry.levels.map(function (lv) {
        var p = Core.levelProgress(lv);
        return '<div class="list-row"><span class="chip chip--cefr">' + esc(lv.code) + "</span>" +
          '<span class="list-row__main"><b>' + esc(lv.name) + "</b><span>" + esc(t("prog.ofLessons", { done: p.done, total: p.total })) + "</span></span>" +
          '<span style="flex:0 0 120px"><span class="level-pill__bar"><i style="width:' + pct(p.pct) + '%"></i></span></span>' +
          '<span class="chip">' + pct(p.pct) + "%</span></div>";
      }).join("") + "</div>");
  };
})();
