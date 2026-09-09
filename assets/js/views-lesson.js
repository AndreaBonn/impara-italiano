/* ============================================================
   views-lesson.js — lekcja: teoria, gramatyka, słownictwo, dialog, ćwiczenia.

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
  var el = Views.shell.root;
  var empty = Views.shell.empty;
  var pct = Views.shell.pct;
  /* ═══════════════════════════════════════════════════════════
     LEKCJA
     ═══════════════════════════════════════════════════════════ */
  var session = null;

  Views.lezione = function (params) {
    var found = Core.getLesson(params.id);
    if (!found) {
      // wejście z zakładki albo przejście do lekcji z poziomu jeszcze niewczytanego:
      // dociągnij dane poziomu wywiedzionego z id (np. „b2-u02-l1" → B2) i spróbuj raz jeszcze
      var m = /^([a-z]\d)/i.exec(params.id || "");
      var code = m ? m[1].toUpperCase() : null;
      if (code && Core.registry.byCode[code] && !Core.registry.loaded[code]) {
        set(empty(t("path.loading")));
        Core.loadLevelData(code, function () {
          if (Core.getLesson(params.id)) Views.lezione(params);
          else set(empty(t("lesson.notFound"), t("lesson.notFoundHint")));
        });
        return;
      }
      set(empty(t("lesson.notFound"), t("lesson.notFoundHint")));
      return;
    }
    var L = found.lesson, U = found.unit, LV = found.level;

    session = { id: L.id, total: (L.exercises || []).length, score: 0, answered: 0, started: Date.now() };

    var parts = [];

    parts.push('<div class="lesson-top">' +
      '<button class="btn btn--ghost btn--sm js-back">' + t("lesson.back") + "</button>" +
      '<div class="lesson-top__bar"><i id="lessonBar" style="width:0%"></i></div>' +
      '<span class="lesson-top__hearts" id="lessonScore">0/' + session.total + "</span></div>");

    parts.push('<div class="meta-row">' +
      '<span class="chip chip--cefr">' + esc(L.cefr || LV.code) + "</span>" +
      '<span class="chip">' + esc(U.title) + "</span>" +
      (L.theme ? '<span class="chip chip--green">' + esc(L.theme) + "</span>" : "") +
      "</div>");

    parts.push('<header class="view-head"><h1>' + esc(L.titleIt) + "</h1><p>" + esc(L.title) + "</p></header>");

    if (L.objectives && L.objectives.length) {
      parts.push('<div class="callout"><b>' + t("lesson.objectives") + '</b><ul style="margin:8px 0 0;padding-left:20px">' +
        L.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>");
    }

    /* --- teoria --- */
    if (L.theory && L.theory.length) {
      parts.push('<section class="step"><h2 class="step__label">' + t("lesson.theory") + '</h2><div class="prose">' +
        L.theory.map(function (b) {
          if (typeof b === "string") return "<p>" + b + "</p>";
          if (b.h) return "<h4>" + esc(b.h) + "</h4>" + (b.p ? "<p>" + b.p + "</p>" : "");
          if (b.list) return "<ul>" + b.list.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>";
          if (b.trap) return '<div class="callout callout--trap"><b>' + t("lesson.trapLabel") + "</b> " + b.trap + "</div>";
          if (b.contrast) return '<div class="callout callout--pl"><b>' + t("lesson.contrastLabel") + "</b> " + b.contrast + "</div>";
          if (b.tip) return '<div class="callout"><b>' + t("lesson.tipLabel") + "</b> " + b.tip + "</div>";
          return "<p>" + (b.p || "") + "</p>";
        }).join("") + "</div></section>");
    }

    /* --- gramatyka --- */
    if (L.grammar) {
      var g = L.grammar;
      var gh = '<div class="gram-box"><p class="gram-box__rule">' + esc(g.title) + "</p>" +
        (g.note ? '<p class="gram-box__note">' + g.note + "</p>" : "");
      if (g.table) {
        gh += '<div class="table-wrap"><table class="gt"><thead><tr>' +
          g.table.head.map(function (h) { return "<th>" + esc(h) + "</th>"; }).join("") +
          "</tr></thead><tbody>" +
          g.table.rows.map(function (r) {
            return "<tr>" + r.map(function (c, i) {
              return "<td" + (i === 1 ? ' class="it"' : "") + ">" + c + "</td>";
            }).join("") + "</tr>";
          }).join("") + "</tbody></table></div>";
      }
      if (g.examples) {
        gh += '<ul class="ex-list">' + g.examples.map(function (e) {
          return "<li>" + '<button type="button" class="say-btn" data-say="' + esc(e.it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button>' +
            '<span class="it">' + esc(e.it) + '</span><span class="pl">' + esc(e.tr) + "</span>" +
            (e.note ? '<span class="nb">' + esc(e.note) + "</span>" : "") + "</li>";
        }).join("") + "</ul>";
      }
      gh += "</div>";
      parts.push('<section class="step step--gram"><h2 class="step__label">' + t("lesson.grammar") + "</h2>" + gh + "</section>");
    }

    /* --- słownictwo --- */
    if (L.vocab && L.vocab.length) {
      parts.push('<section class="step step--vocab"><h2 class="step__label">' + t("lesson.vocab") + "</h2>" +
        '<div style="margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">' +
        '<button class="btn btn--ghost btn--sm js-play-all">' + t("lesson.playAll") + "</button>" +
        '<button class="btn btn--ghost btn--sm js-save-all">' + t("lesson.saveAll") + "</button></div>" +
        '<div class="vocab-grid">' + L.vocab.map(function (v) {
          var key = Core.cardKey(v.it);
          var saved = !!Core.state.srs[key];
          return '<div class="vocab-card">' +
            '<button type="button" class="say-btn" data-say="' + esc(v.it) + '" aria-label="' + esc(t("a11y.listenTo", { what: v.it })) + '">🔊</button>' +
            '<span class="vocab-card__txt"><span class="vocab-card__it">' + esc(v.it) + "</span>" +
            '<span class="vocab-card__pl">' + esc(v.tr) + "</span>" +
            (v.ex ? '<span class="vocab-card__ex">' + esc(v.ex) + "</span>" : "") + "</span>" +
            '<button type="button" class="vocab-card__star js-star" data-it="' + esc(v.it) + '" data-tr="' + esc(v.tr) + '" ' +
            'aria-pressed="' + saved + '" aria-label="' + esc(t("lesson.addToReview")) + '">' + (saved ? "★" : "☆") + "</button></div>";
        }).join("") + "</div></section>");
    }

    /* --- dialog --- */
    if (L.dialogue) {
      parts.push('<section class="step"><h2 class="step__label">' + t("lesson.dialogue", { title: esc(L.dialogue.titleIt || "") }) + "</h2>" +
        '<button class="btn btn--ghost btn--sm js-play-dlg" style="margin-bottom:12px">' + t("lesson.playDialogue") + "</button>" +
        '<div class="dlg">' + L.dialogue.lines.map(function (ln, i) {
          return '<div class="dlg__line' + (i % 2 ? " dlg__line--b" : "") + '">' +
            '<div class="dlg__who" aria-hidden="true">' + esc(ln.who || (i % 2 ? "🙋" : "🧑")) + "</div>" +
            '<div class="dlg__bubble"><span class="dlg__it">' + esc(ln.it) +
            ' <button type="button" class="say-btn" data-say="' + esc(ln.it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button></span>' +
            '<span class="dlg__pl">' + esc(ln.tr) + "</span></div></div>";
        }).join("") + "</div></section>");
    }

    /* --- kultura --- */
    if (L.culture) {
      parts.push('<section class="step"><h2 class="step__label">' + esc(L.culture.title || t("lesson.culture")) + "</h2>" +
        '<div class="card" style="border-color:var(--line-mint)"><div class="prose">' + L.culture.text + "</div></div></section>");
    }

    /* --- ćwiczenia --- */
    if (L.exercises && L.exercises.length) {
      parts.push('<section class="step step--ex"><h2 class="step__label">' + t("lesson.exercises") + '</h2><div id="exWrap"></div></section>');
      parts.push('<div id="lessonEnd"></div>');
    }

    set(parts.join(""));

    /* --- podpięcia --- */
    el().querySelector(".js-back").addEventListener("click", function () { Audio2.stop(); App.go("percorso"); });

    var playAll = el().querySelector(".js-play-all");
    if (playAll) playAll.addEventListener("click", function () {
      Audio2.speakSequence((L.vocab || []).map(function (v) { return { it: v.it }; }));
    });

    var saveAll = el().querySelector(".js-save-all");
    if (saveAll) saveAll.addEventListener("click", function () {
      (L.vocab || []).forEach(function (v) { Core.addCard(v.it, v.tr, L.id); });
      el().querySelectorAll(".js-star").forEach(function (b) { b.setAttribute("aria-pressed", "true"); b.textContent = "★"; });
      var n = (L.vocab || []).length;
      Core.toast(t("lesson.savedVocab", { n: n }), "ok");
    });

    el().querySelectorAll(".js-star").forEach(function (b) {
      b.addEventListener("click", function () {
        var it = b.getAttribute("data-it"), tr = b.getAttribute("data-tr");
        var key = Core.cardKey(it);
        if (Core.state.srs[key]) {
          delete Core.state.srs[key]; Core.save();
          b.setAttribute("aria-pressed", "false"); b.textContent = "☆";
        } else {
          Core.addCard(it, tr, L.id);
          b.setAttribute("aria-pressed", "true"); b.textContent = "★";
        }
        App.refreshRail();
      });
    });

    var playDlg = el().querySelector(".js-play-dlg");
    if (playDlg) playDlg.addEventListener("click", function () {
      Audio2.speakSequence(L.dialogue.lines);
    });

    /* --- ćwiczenia: montaż --- */
    var wrap = document.getElementById("exWrap");
    if (wrap && L.exercises) {
      var built = L.exercises.map(function (ex, i) { return Ex.build(ex, i, L.id); });
      wrap.innerHTML = built.map(function (b) { return b.html; }).join("");
      var nodes = wrap.querySelectorAll(".exq");
      built.forEach(function (b, i) {
        b.wire(nodes[i], function (ok) { onAnswer(ok, L, U, LV); });
      });
      Ex.wireSpeakers(wrap);
    }
  };

  function onAnswer(ok, L, U, LV) {
    session.answered += 1;
    if (ok) session.score += 1;
    var bar = document.getElementById("lessonBar");
    var sc = document.getElementById("lessonScore");
    if (bar) bar.style.width = pct(session.answered / session.total) + "%";
    if (sc) sc.textContent = session.score + "/" + session.total;

    if (!ok && L.vocab) {
      // błąd → dorzuć słówka lekcji do powtórek, żeby wróciły
      L.vocab.slice(0, 4).forEach(function (v) { Core.addCard(v.it, v.tr, L.id); });
    }

    if (session.answered >= session.total) {
      var res = Core.recordLesson(L.id, session.score, session.total, (Date.now() - session.started) / 1000);
      renderLessonEnd(res, L, U, LV);
      App.refreshRail();
    }
  }

  function renderLessonEnd(res, L, U, LV) {
    var p = res.total ? res.score / res.total : 0;
    var msg = p === 1 ? t("lesson.end.perfect")
      : p >= 0.85 ? t("lesson.end.great")
      : p >= 0.7 ? t("lesson.end.pass")
      : t("lesson.end.fail");

    var next = Core.nextLesson(LV);
    var box = document.getElementById("lessonEnd");
    box.innerHTML = '<div class="summary">' +
      '<div class="summary__score">' + pct(p) + "%</div>" +
      '<p class="summary__msg">' + esc(msg) + " (" + res.score + "/" + res.total + ")</p>" +
      '<div class="summary__acts">' +
      '<button class="btn btn--ghost js-again">' + t("lesson.again") + "</button>" +
      (next ? '<button class="btn btn--primary js-next">' + t("lesson.next", { title: esc(next.lesson.titleIt) }) + "</button>" : "") +
      '<button class="btn btn--ghost js-path">' + t("nav.path") + "</button>" +
      "</div></div>";

    box.querySelector(".js-again").addEventListener("click", function () { App.go("lezione", { id: L.id }); });
    box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
    var nb = box.querySelector(".js-next");
    if (nb) nb.addEventListener("click", function () { App.go("lezione", { id: next.lesson.id }); });
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }
})();
