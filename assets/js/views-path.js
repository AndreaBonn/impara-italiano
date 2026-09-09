/* ============================================================
   views-path.js — ścieżka nauki: poziomy, jednostki, „gdzie jestem”.

   Ekran wydzielony z views.js, w którym leżało osiem ekranów naraz.
   Wzorzec jest ten sam, którym chodzą już views-talk.js, views-train.js
   i views-today.js: skorupa (set, pageHead, el, empty) przychodzi z
   `Views.shell`, a plik dokłada własną trasę do `Views`.

   Ładuje się PO views.js, bo `Views.shell` powstaje na końcu tamtego pliku.
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
     ŚCIEŻKA NAUKI
     ═══════════════════════════════════════════════════════════ */
  var activeLevel = null;

  Views.percorso = function (params) {
    var levels = Core.registry.levels;
    if (!levels.length) { set(empty(t("path.noData"), t("path.noDataHint"))); return; }

    var code = (params && params.level) || activeLevel || pickStartLevel();
    activeLevel = code;
    var level = Core.registry.byCode[code] || levels[0];

    // grupa przycisków przełączających, nie zakładki: aria-pressed nie jest dozwolone przy role="tab"
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

    set(strip +
      pageHead(t("path.levelKicker", { code: level.code, cefr: level.cefrLabel }), level.name, level.desc) +
      body);

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
    return '<div class="card" style="margin-bottom:26px;display:flex;gap:18px;align-items:center;flex-wrap:wrap;border-color:var(--rosa-mid)">' +
      '<div style="flex:1;min-width:220px">' +
      '<p style="font-size:.74rem;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--rosa-deep);margin:0 0 4px">' + t("path.continue") + "</p>" +
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
