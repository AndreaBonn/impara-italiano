/* ============================================================
   views-lesson.js — a lesson: theory, grammar, vocabulary, dialogue, exercises.

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
  var el = Views.shell.root;
  var empty = Views.shell.empty;
  var pct = Views.shell.pct;
  /* ═══════════════════════════════════════════════════════════
     THE LESSON
     ═══════════════════════════════════════════════════════════ */
  var session = null;
  var run = null;       // LessonRun state: which exercise shows, which are answered

  /** The jump bar: the lesson stays one page, the sections are one tap away. */
  function steps(L) {
    var list = [["theory", L.theory && L.theory.length, "lesson.theory"], ["gram", L.grammar, "lesson.grammar"],
      ["vocab", L.vocab && L.vocab.length, "lesson.vocab"], ["dlg", L.dialogue, "lesson.stepDialogue"],
      ["ex", L.exercises && L.exercises.length, "lesson.exercises"]].filter(function (s) { return s[1]; });
    if (list.length < 2) return "";
    return '<nav class="lesson-steps" aria-label="' + esc(t("lesson.stepsLabel")) + '">' + list.map(function (s) {
      return '<button type="button" class="lesson-steps__btn" data-step="' + s[0] + '">' + esc(t(s[2])) + "</button>";
    }).join("") + "</nav>";
  }

  Views.lezione = function (params) {
    var found = Core.getLesson(params.id);
    if (!found) {
      // arriving from a bookmark, or moving to a lesson of a level not loaded yet:
      // pull the data of the level derived from the id (e.g. "b2-u02-l1" -> B2) and try again
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
    parts.push(steps(L));

    if (L.objectives && L.objectives.length) {
      parts.push('<div class="callout"><b>' + t("lesson.objectives") + '</b><ul style="margin:8px 0 0;padding-left:20px">' +
        L.objectives.map(function (o) { return "<li>" + esc(o) + "</li>"; }).join("") + "</ul></div>");
    }

    /* --- theory --- */
    if (L.theory && L.theory.length) {
      parts.push('<section class="step" id="step-theory"><h2 class="step__label">' + t("lesson.theory") + '</h2><div class="prose">' +
        L.theory.map(function (b) {
          if (typeof b === "string") return "<p>" + b + "</p>";
          var list = b.list ? "<ul>" + b.list.map(function (x) { return "<li>" + x + "</li>"; }).join("") + "</ul>" : "";
          /* A heading travels with a paragraph or with a list ({h, list}, 65
             blocks per language): leaving at the heading dropped the list. */
          if (b.h) return "<h4>" + esc(b.h) + "</h4>" + (b.p ? "<p>" + b.p + "</p>" : "") + list;
          if (b.list) return list;
          if (b.trap) return '<div class="callout callout--trap"><b>' + t("lesson.trapLabel") + "</b> " + b.trap + "</div>";
          if (b.contrast) return '<div class="callout callout--pl"><b>' + t("lesson.contrastLabel") + "</b> " + b.contrast + "</div>";
          if (b.tip) return '<div class="callout"><b>' + t("lesson.tipLabel") + "</b> " + b.tip + "</div>";
          return "<p>" + (b.p || "") + "</p>";
        }).join("") + "</div></section>");
    }

    /* --- grammar --- */
    if (L.grammar) {
      var g = L.grammar;
      var gh = '<div class="gram-box"><p class="gram-box__rule">' + esc(g.title) + "</p>" +
        (g.note ? '<p class="gram-box__note">' + g.note + "</p>" : "");
      if (g.table) {
        /* Focusable and named: on a phone the box scrolls sideways, and a
           scrolling region the keyboard cannot reach hides half the table. */
        gh += '<div class="table-wrap" tabindex="0" role="region" aria-label="' + esc(g.title) + '"><table class="gt"><thead><tr>' +
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
      parts.push('<section class="step step--gram" id="step-gram"><h2 class="step__label">' + t("lesson.grammar") + "</h2>" + gh + "</section>");
    }

    /* --- vocabulary --- */
    if (L.vocab && L.vocab.length) {
      parts.push('<section class="step step--vocab" id="step-vocab"><h2 class="step__label">' + t("lesson.vocab") + "</h2>" +
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
            'aria-pressed="' + saved + '" aria-label="' + esc(t("lesson.addToReview")) + '">' + gwiazdka(saved) + "</button></div>";
        }).join("") + "</div></section>");
    }

    /* --- dialogue --- */
    if (L.dialogue) {
      parts.push('<section class="step" id="step-dlg"><h2 class="step__label">' + t("lesson.dialogue", { title: esc(L.dialogue.titleIt || "") }) + "</h2>" +
        '<button class="btn btn--ghost btn--sm js-play-dlg" style="margin-bottom:12px">' + t("lesson.playDialogue") + "</button>" +
        '<div class="dlg">' + L.dialogue.lines.map(function (ln, i) {
          return '<div class="dlg__line' + (i % 2 ? " dlg__line--b" : "") + '">' +
            '<div class="dlg__who" aria-hidden="true">' + esc(ln.who || (i % 2 ? "🙋" : "🧑")) + "</div>" +
            '<div class="dlg__bubble"><span class="dlg__it">' + esc(ln.it) +
            ' <button type="button" class="say-btn" data-say="' + esc(ln.it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button></span>' +
            '<span class="dlg__pl">' + esc(ln.tr) + "</span></div></div>";
        }).join("") + "</div></section>");
    }

    /* --- culture --- */
    if (L.culture) {
      parts.push('<section class="step"><h2 class="step__label">' + esc(L.culture.title || t("lesson.culture")) + "</h2>" +
        '<div class="card" style="border-color:var(--line-mint)"><div class="prose">' + L.culture.text + "</div></div></section>");
    }

    /* --- exercises --- */
    if (L.exercises && L.exercises.length) {
      /* One exercise at a time: nine open at once were answered out of order
         and one skipped while scrolling kept the lesson from ever closing. */
      parts.push('<section class="step step--ex" id="step-ex"><h2 class="step__label">' + t("lesson.exercises") + "</h2>" +
        '<div class="ex-nav"><div class="ex-chips" role="group" aria-label="' + esc(t("lesson.exercises")) + '">' +
        L.exercises.map(function (e, i) {
          return '<button type="button" class="ex-chip" data-go="' + i + '">' + (i + 1) + "</button>";
        }).join("") + '</div><span class="ex-open js-ex-open"></span></div>' +
        '<div id="exWrap"></div>' +
        '<div class="ex-foot"><button type="button" class="btn btn--ghost btn--sm js-ex-prev">' + esc(t("lesson.exPrev")) + "</button>" +
        '<span class="ex-foot__pos js-ex-pos"></span>' +
        '<button type="button" class="btn btn--primary btn--sm js-ex-next">' + esc(t("lesson.exNext")) + "</button></div></section>");
      parts.push('<div id="lessonEnd"></div>');
    }

    set(parts.join(""));

    /* --- wiring --- */
    el().querySelector(".js-back").addEventListener("click", function () { Audio2.stop(); App.go("percorso"); });

    var playAll = el().querySelector(".js-play-all");
    if (playAll) playAll.addEventListener("click", function () {
      Audio2.speakSequence((L.vocab || []).map(function (v) { return { it: v.it }; }));
    });

    var saveAll = el().querySelector(".js-save-all");
    if (saveAll) saveAll.addEventListener("click", function () {
      (L.vocab || []).forEach(function (v) { Core.addCard(v.it, v.tr, L.id); });
      el().querySelectorAll(".js-star").forEach(function (b) { b.setAttribute("aria-pressed", "true"); b.innerHTML = gwiazdka(true); });
      var n = (L.vocab || []).length;
      Core.toast(t("lesson.savedVocab", { n: n }), "ok");
    });

    el().querySelectorAll(".js-star").forEach(function (b) {
      b.addEventListener("click", function () {
        var it = b.getAttribute("data-it"), tr = b.getAttribute("data-tr");
        var key = Core.cardKey(it);
        if (Core.state.srs[key]) {
          delete Core.state.srs[key]; Core.save();
          b.setAttribute("aria-pressed", "false"); b.innerHTML = gwiazdka(false);
        } else {
          Core.addCard(it, tr, L.id);
          b.setAttribute("aria-pressed", "true"); b.innerHTML = gwiazdka(true);
        }
        App.refreshRail();
      });
    });

    el().querySelectorAll(".lesson-steps [data-step]").forEach(function (b) {
      b.addEventListener("click", function () {
        var s = document.getElementById("step-" + b.getAttribute("data-step"));
        if (s) s.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    var playDlg = el().querySelector(".js-play-dlg");
    if (playDlg) playDlg.addEventListener("click", function () {
      Audio2.speakSequence(L.dialogue.lines);
    });

    /* --- exercises: mounting --- */
    var wrap = document.getElementById("exWrap");
    if (wrap && L.exercises) {
      var built = L.exercises.map(function (ex, i) { return Ex.build(ex, i, L.id); });
      wrap.innerHTML = built.map(function (b) { return b.html; }).join("");
      var nodes = wrap.querySelectorAll(".exq");
      run = LessonRun.create(built.length);
      built.forEach(function (b, i) {
        b.wire(nodes[i], function (ok) {
          run = LessonRun.answer(run, i, ok);
          drawRun();
          onAnswer(ok, L, U, LV);
        });
      });
      Ex.wireSpeakers(wrap);
      el().querySelectorAll(".ex-chip").forEach(function (c) {
        c.addEventListener("click", function () { showEx(+c.getAttribute("data-go")); });
      });
      el().querySelector(".js-ex-prev").addEventListener("click", function () { showEx(run.current - 1); });
      el().querySelector(".js-ex-next").addEventListener("click", function () {
        var n = LessonRun.next(run);
        if (n !== null) showEx(n);
        else document.getElementById("lessonEnd").scrollIntoView({ behavior: "smooth", block: "center" });
      });
      drawRun();
    }
  };

  function showEx(i) {
    run = LessonRun.go(run, i);
    drawRun();
    var cur = document.querySelectorAll("#exWrap .exq")[run.current];
    if (cur) cur.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  /** Draws the run: which exercise shows, the chips' states, the counters. */
  function drawRun() {
    var n = run.answers.length;
    document.querySelectorAll("#exWrap .exq").forEach(function (q, i) { q.hidden = i !== run.current; });
    document.querySelectorAll(".ex-chip").forEach(function (c, i) {
      var a = run.answers[i];
      c.className = "ex-chip" + (a === true ? " is-ok" : a === false ? " is-ko" : "");
      if (i === run.current) c.setAttribute("aria-current", "step"); else c.removeAttribute("aria-current");
      c.setAttribute("aria-label", t(a === true ? "lesson.chipOk" : a === false ? "lesson.chipKo" : "lesson.chipOpen", { i: i + 1 }));
    });
    var open = LessonRun.unanswered(run).length;
    el().querySelector(".js-ex-open").textContent = open ? t("lesson.exOpen", { n: open }) : "";
    el().querySelector(".js-ex-pos").textContent = t("lesson.exOf", { i: run.current + 1, n: n });
    el().querySelector(".js-ex-prev").disabled = run.current === 0;
    el().querySelector(".js-ex-next").disabled = LessonRun.next(run) === null && !LessonRun.isDone(run);
  }

  /** The star with words: the glyph alone did not say that it sends the word to the reviews. */
  function gwiazdka(saved) {
    return '<span aria-hidden="true">' + (saved ? "★" : "☆") + "</span> " +
      esc(t(saved ? "lesson.starIn" : "lesson.starAdd"));
  }

  function onAnswer(ok, L, U, LV) {
    session.answered += 1;
    if (ok) session.score += 1;
    var bar = document.getElementById("lessonBar");
    var sc = document.getElementById("lessonScore");
    if (bar) bar.style.width = pct(session.answered / session.total) + "%";
    if (sc) sc.textContent = session.score + "/" + session.total;

    if (!ok && L.vocab) {
      // a mistake -> add the lesson's words to the reviews so that they come back
      L.vocab.slice(0, 4).forEach(function (v) { Core.addCard(v.it, v.tr, L.id); });
    }

    if (session.answered >= session.total) {
      var wasDone = Core.isLessonDone(L.id);
      var res = Core.recordLesson(L.id, session.score, session.total, (Date.now() - session.started) / 1000);
      /* A lesson passed for the FIRST time puts its words in the reviews: until
         now only a star, "add all" or a mistake did, and after two lessons the
         deck was empty. Only then: at every run it brought back words the
         student had deleted, and a failed run will be taken again. */
      session.newWords = res.done && !wasDone;
      if (session.newWords) (L.vocab || []).forEach(function (v) { Core.addCard(v.it, v.tr, L.id); });
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
      "</div>" + recap(L) + "</div>";

    box.querySelector(".js-again").addEventListener("click", function () { App.go("lezione", { id: L.id }); });
    box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
    var nb = box.querySelector(".js-next");
    if (nb) nb.addEventListener("click", function () { App.go("lezione", { id: next.lesson.id }); });
    box.querySelectorAll(".lesson-recap [data-go]").forEach(function (b) {
      b.addEventListener("click", function () { showEx(+b.getAttribute("data-go")); });
    });
    box.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /** What went wrong, each a way back to its exercise, and where the words went. */
  function recap(L) {
    var zle = LessonRun.wrong(run);
    var n = session.newWords ? (L.vocab || []).length : 0;
    return (zle.length ? '<div class="lesson-recap"><b>' + esc(t("lesson.end.recap")) + "</b> " + zle.map(function (i) {
      return '<button type="button" class="btn btn--quiet btn--sm" data-go="' + i + '">' +
        esc(t("lesson.exOf", { i: i + 1, n: run.answers.length })) + "</button>";
    }).join("") + "</div>" : "") +
      (n ? '<p class="lesson-vocab-in">✓ ' + esc(t("lesson.end.vocabIn", { n: n })) + "</p>" : "");
  }
})();
