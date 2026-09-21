/* ============================================================
   views-path.js — the learning path: levels, units, "where am I".

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
  var pct = Views.shell.pct;
  /* ═══════════════════════════════════════════════════════════
     THE LEARNING PATH
     ═══════════════════════════════════════════════════════════ */
  var activeLevel = null;

  /* Up to how many finished lessons the course reminds about the placement
     test by itself. After five lessons the level is already chosen, and
     anyone who is bored will find the test in Settings; a permanent hint
     would be noise on the screen the student looks at most often. */
  var LEKCJE_Z_PODPOWIEDZIA = 5;

  Views.percorso = function (params) {
    var levels = Core.registry.levels;
    if (!levels.length) { set(empty(t("path.noData"), t("path.noDataHint"))); return; }

    var code = (params && params.level) || activeLevel || pickStartLevel();
    activeLevel = code;
    var level = Core.registry.byCode[code] || levels[0];

    // a group of toggle buttons, not tabs: aria-pressed is not allowed with role="tab"
    var strip = '<div class="level-strip" role="group" aria-label="' + esc(t("path.levelsGroup")) + '">' +
      levels.map(function (lv) {
        var p = Core.levelProgress(lv);
        return '<button class="level-pill" data-level="' + esc(lv.code) + '" aria-pressed="' + (lv.code === level.code) + '">' +
          '<span class="level-pill__code">' + esc(lv.code) + "</span>" +
          '<span class="level-pill__name">' + esc(lv.name) + "</span>" +
          '<span class="level-pill__bar"><i style="width:' + pct(p.pct) + '%"></i></span>' +
          "</button>";
      }).join("") + "</div>";

    var body;
    if (!level.units || !level.units.length) {
      body = Core.registry.loaded[level.code] === "error"
        ? empty(t("path.loadError", { code: esc(level.code) }),
                t("path.loadErrorHint", { files: esc((level.dataFiles || []).join(", ")) }))
        : empty(t("path.loading"));
    } else {
      var next = Core.nextLesson(level);
      body = renderResume(level, next) + level.units.map(renderUnit).join("");
    }

    set(podpowiedzPoziomu() + strip +
      pageHead(t("path.levelKicker", { code: level.code, cefr: level.cefrLabel }), level.name, level.desc) +
      body);

    var doTestu = el().querySelector(".js-place");
    if (doTestu) doTestu.addEventListener("click", function () { App.go("piazzamento"); });

    el().querySelectorAll(".level-pill").forEach(function (b) {
      b.addEventListener("click", function () {
        var c = b.getAttribute("data-level");
        activeLevel = c;
        Core.loadLevelData(c, function () { App.go("percorso", { level: c }); });
        App.go("percorso", { level: c });
      });
    });

    el().querySelectorAll("[data-lesson]").forEach(function (b) {
      b.addEventListener("click", function () { App.go("lezione", { id: b.getAttribute("data-lesson") }); });
    });
  };

  /**
   * The "not sure which level to start from?" bar above the level list.
   *
   * The placement test has existed for a long time, but the only route to
   * it was the Settings tab — that is, a place no newcomer opens. A student
   * who already knows Italian therefore started at A1 and clicked through a
   * hundred lessons the test itself says they do not need. The bar sits
   * above the level bar, because that is where the question "which one do I
   * pick" arises.
   */
  function podpowiedzPoziomu() {
    var s = Core.state;
    if (s.placement || s.stats.lessonsDone >= LEKCJE_Z_PODPOWIEDZIA) return "";
    return '<div class="list-row" style="margin-bottom:18px">' +
      '<span class="list-row__main"><b>' + esc(t("place.title")) + "</b>" +
      "<span>" + esc(t("path.placementNudge")) + "</span></span>" +
      '<button class="btn btn--ghost btn--sm js-place">' + esc(t("place.start")) + "</button></div>";
  }

  function pickStartLevel() {
    var levels = Core.registry.levels;
    for (var i = 0; i < levels.length; i++) {
      var p = Core.levelProgress(levels[i]);
      if (p.total === 0 || p.pct < 1) return levels[i].code;
    }
    return levels[0].code;
  }

  function renderResume(level, next) {
    if (!next) {
      return '<div class="card" style="margin-bottom:26px;border-color:var(--salvia-deep)">' +
        '<h3 style="margin-bottom:6px">' + t("path.levelDone", { code: esc(level.code) }) + "</h3>" +
        '<p style="margin:0;color:var(--ink-soft)">' + t("path.levelDoneHint") + "</p></div>";
    }
    return '<div class="card" style="margin-bottom:26px;display:flex;gap:18px;align-items:center;flex-wrap:wrap;border-color:var(--salvia-mid)">' +
      '<div style="flex:1;min-width:220px">' +
      '<p style="font-size:.74rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--salvia-deep);margin:0 0 4px">' + t("path.continue") + "</p>" +
      "<h3 style=\"margin:0 0 2px\">" + esc(next.lesson.titleIt) + "</h3>" +
      '<p style="margin:0;color:var(--ink-soft);font-size:.9rem">' + esc(next.unit.title) + " · " + esc(next.lesson.title) + "</p></div>" +
      '<button class="btn btn--primary" data-lesson="' + esc(next.lesson.id) + '">' + t("path.start") + "</button></div>";
  }

  function renderUnit(unit) {
    var p = Core.unitProgress(unit);
    var items = (unit.lessons || []).slice();
    if (unit.test) items.push(Object.assign({}, unit.test, { _test: true }));

    var firstOpen = true;
    var nodes = items.map(function (l, i) {
      var done = Core.isLessonDone(l.id);
      var locked = false;
      if (!done && !firstOpen && unit.gated) locked = true;
      var current = !done && firstOpen;
      if (!done) firstOpen = false;
      var cls = "node" + (done ? " node--done" : "") + (current ? " node--current" : "") + (l._test ? " node--test" : "");
      return '<div class="' + cls + '">' +
        '<button class="node__btn" data-lesson="' + esc(l.id) + '"' + (locked ? " disabled" : "") + '>' +
        '<span class="node__dot" aria-hidden="true">' + (done ? "✓" : l._test ? "🏆" : (l.icon || (i + 1))) + "</span>" +
        '<span class="node__txt"><b>' + esc(l.titleIt) + "</b><span>" + esc(l.title) + "</span></span>" +
        "</button></div>";
    }).join("");

    return '<section class="unit">' +
      '<div class="unit__head">' +
      '<div class="unit__badge" aria-hidden="true">' + esc(unit.icon || "🌸") + "</div>" +
      '<div class="unit__titles"><h3>' + esc(unit.titleIt) + "</h3><p>" + esc(unit.title) + " · " + esc(unit.grammarNote || "") + "</p></div>" +
      '<div class="unit__count"><b>' + p.done + "/" + p.total + "</b><span>" + esc(t("stats.lessons", { n: p.total })) + "</span></div>" +
      "</div><div class=\"path\">" + nodes + "</div></section>";
  }
})();
