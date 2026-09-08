/* ============================================================
   views.js — wszystkie ekrany aplikacji
   Każdy widok renderuje HTML do #main i podpina zdarzenia.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var Views = {};
  var mount = null;

  function el() { return mount || (mount = document.getElementById("main")); }

  function set(html) {
    var m = el();
    m.innerHTML = html;
    Ex.wireSpeakers(m);
    m.scrollTop = 0;
    global.scrollTo(0, 0);
    return m;
  }

  function pageHead(kicker, title, sub) {
    return '<header class="view-head">' +
      (kicker ? '<p class="view-head__kicker">' + esc(kicker) + "</p>" : "") +
      "<h1>" + esc(title) + "</h1>" +
      (sub ? "<p>" + esc(sub) + "</p>" : "") + "</header>";
  }

  function pct(n) { return Math.round(n * 100); }

  function empty(title, hint) {
    return '<div class="empty"><h3>' + title + "</h3>" + (hint ? "<p>" + hint + "</p>" : "") + "</div>";
  }

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
        '<div class="vocab-grid">' + L.vocab.map(function (v, i) {
          var key = Core.cardKey(v.it, v.tr);
          var saved = !!Core.state.srs[key];
          return '<div class="vocab-card">' +
            '<button type="button" class="say-btn" data-say="' + esc(v.it) + '" aria-label="' + esc(t("a11y.listenTo", { what: v.it })) + '">🔊</button>' +
            '<span class="vocab-card__txt"><span class="vocab-card__it">' + esc(v.it) + "</span>" +
            '<span class="vocab-card__pl">' + esc(v.tr) + "</span>" +
            (v.ex ? '<span class="vocab-card__ex">' + esc(v.ex) + "</span>" : "") + "</span>" +
            '<button type="button" class="vocab-card__star js-star" data-it="' + esc(v.it) + '" data-pl="' + esc(v.tr) + '" ' +
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
        var it = b.getAttribute("data-it"), pl = b.getAttribute("data-pl");
        var key = Core.cardKey(it, pl);
        if (Core.state.srs[key]) {
          delete Core.state.srs[key]; Core.save();
          b.setAttribute("aria-pressed", "false"); b.textContent = "☆";
        } else {
          Core.addCard(it, pl, L.id);
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

  /* ═══════════════════════════════════════════════════════════
     POWTÓRKI (SRS)
     ═══════════════════════════════════════════════════════════ */
  Views.ripasso = function () {
    var due = Core.dueCards(30);
    if (!due.length) {
      var total = Object.keys(Core.state.srs).length;
      set(pageHead("Powtórki", "Nic do powtórzenia 🌿",
        total ? "Wszystkie " + total + " fiszek jest w spoczynku. Wróć jutro albo dodaj nowe słówka gwiazdką w lekcji."
              : "Twoja talia jest pusta. Oznacz słówka gwiazdką ⭐ w dowolnej lekcji, a wrócą tu we właściwym momencie.") +
        '<div class="empty"><h3>System powtórek</h3><p>Fiszki wracają w rosnących odstępach (1 → 3 → 7 → 16 dni…), zależnie od tego, jak pewnie odpowiadasz. To algorytm SM-2, ten sam co w Anki.</p></div>');
      return;
    }

    set(pageHead("Powtórki", "Do powtórzenia dziś: " + due.length, "Odpowiadaj na głos albo w myślach, potem oceń szczerze — od tego zależy, kiedy fiszka wróci.") +
      '<div id="srsBox"></div>');

    var i = 0, right = 0;
    function card() {
      var box = document.getElementById("srsBox");
      if (i >= due.length) {
        box.innerHTML = '<div class="summary"><div class="summary__score">' + right + "/" + due.length + "</div>" +
          '<p class="summary__msg">Sesja powtórek zakończona.</p>' +
          '<div class="summary__acts"><button class="btn btn--primary js-more">Kolejna partia</button>' +
          '<button class="btn btn--ghost js-path">Ścieżka nauki</button></div></div>';
        box.querySelector(".js-more").addEventListener("click", function () { App.go("ripasso"); });
        box.querySelector(".js-path").addEventListener("click", function () { App.go("percorso"); });
        App.refreshRail();
        return;
      }
      var c = due[i];
      box.innerHTML = '<div class="exq">' +
        '<p class="exq__num">Fiszka ' + (i + 1) + " z " + due.length + "</p>" +
        '<p class="exq__prompt" style="font-size:1.3rem">' + esc(c.pl) + "</p>" +
        '<p class="exq__sub">Jak to powiesz po włosku?</p>' +
        '<div class="field-row"><input type="text" class="field js-in" placeholder="Po włosku" autocomplete="off" spellcheck="false">' +
        '<button class="btn btn--primary js-show">Sprawdź</button></div>' +
        '<div class="fb" role="status"></div>' +
        '<div class="js-grade" style="margin-top:14px;display:none;gap:8px;flex-wrap:wrap">' +
        '<button class="btn btn--ghost btn--sm" data-q="0">Nie pamiętam</button>' +
        '<button class="btn btn--ghost btn--sm" data-q="3">Z trudem</button>' +
        '<button class="btn btn--green btn--sm" data-q="4">Dobrze</button>' +
        '<button class="btn btn--green btn--sm" data-q="5">Łatwo</button></div></div>';

      var input = box.querySelector(".js-in");
      var fb = box.querySelector(".fb");
      var grade = box.querySelector(".js-grade");
      input.focus();

      function reveal() {
        var res = Core.checkOpen(input.value, [c.it], false);
        fb.className = "fb is-on " + (res.ok ? "fb--ok" : "fb--ko");
        fb.innerHTML = (res.ok ? "Dobrze! " : "Poprawnie: ") + "<b>" + esc(c.it) + "</b>" +
          ' <button type="button" class="say-btn" data-say="' + esc(c.it) + '" aria-label="Posłuchaj">🔊</button>';
        Ex.wireSpeakers(fb);
        Audio2.speak(c.it);
        grade.style.display = "flex";
        box.querySelector(".js-show").disabled = true;
        input.disabled = true;
        if (res.ok) right++;
      }
      box.querySelector(".js-show").addEventListener("click", reveal);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") reveal(); });

      grade.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          Core.gradeCard(c.key, parseInt(b.getAttribute("data-q"), 10));
          i++; card();
        });
      });
    }
    card();
  };

  /* ═══════════════════════════════════════════════════════════
     ROZMOWY NA GŁOS
     ═══════════════════════════════════════════════════════════ */
  Views.conversazione = function (params) {
    var all = global.CONVERSATIONS || [];
    if (params && params.id) return runConversation(all.filter(function (c) { return c.id === params.id; })[0]);

    set(pageHead("Mówienie", "Rozmowy na głos",
      "Aplikacja mówi po włosku, Ty odpowiadasz do mikrofonu. Scenariusze z prawdziwego życia — bar, sklep, dworzec, rozmowa o pracę.") +
      (Audio2.sttSupported ? "" :
        '<div class="callout callout--trap"><b>Uwaga:</b> Twoja przeglądarka nie obsługuje rozpoznawania mowy. Rozmowy zadziałają w trybie pisanym. Pełne mówienie działa w Chrome, Edge i Safari 16+.</div>') +
      '<div class="stack">' + all.map(function (c) {
        var p = Core.lessonState("conv-" + c.id);
        return '<button class="list-row" data-conv="' + esc(c.id) + '" style="text-align:left;cursor:pointer;width:100%">' +
          '<span style="font-size:1.6rem">' + esc(c.icon) + "</span>" +
          '<span class="list-row__main"><b>' + esc(c.titleIt) + "</b><span>" + esc(c.title) + "</span></span>" +
          '<span class="chip chip--cefr">' + esc(c.cefr) + "</span>" +
          (p ? '<span class="chip chip--green">✓</span>' : "") + "</button>";
      }).join("") + "</div>");

    el().querySelectorAll("[data-conv]").forEach(function (b) {
      b.addEventListener("click", function () { App.go("conversazione", { id: b.getAttribute("data-conv") }); });
    });
  };

  function runConversation(conv) {
    if (!conv) { set('<div class="empty"><h3>Nie znaleziono rozmowy</h3></div>'); return; }

    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">← Wszystkie rozmowy</button>' +
      pageHead(conv.cefr + " · " + conv.title, conv.titleIt, conv.setting) +
      '<div class="card"><div class="dlg js-dlg"></div><div class="js-turn" style="margin-top:20px"></div></div>');

    el().querySelector(".js-back").addEventListener("click", function () { Audio2.stop(); App.go("conversazione"); });

    var dlg = el().querySelector(".js-dlg");
    var turn = el().querySelector(".js-turn");
    var i = 0, score = 0, turns = 0;

    function bubble(it, pl, mine) {
      var d = document.createElement("div");
      d.className = "dlg__line" + (mine ? " dlg__line--b" : "");
      d.innerHTML = '<div class="dlg__who" aria-hidden="true">' + (mine ? "🙋" : esc(conv.icon)) + "</div>" +
        '<div class="dlg__bubble"><span class="dlg__it">' + esc(it) +
        ' <button type="button" class="say-btn" data-say="' + esc(it) + '" aria-label="Posłuchaj">🔊</button></span>' +
        (pl ? '<span class="dlg__pl">' + esc(pl) + "</span>" : "") + "</div>";
      dlg.appendChild(d);
      Ex.wireSpeakers(d);
      d.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function step() {
      if (i >= conv.turns.length) return finishConv();
      var t = conv.turns[i];
      if (t.sp !== "TY") {
        bubble(t.it, t.tr, false);
        i++;
        Audio2.speak(t.it, { onend: function () { setTimeout(step, 260); } });
        return;
      }
      renderTurn(t);
    }

    function renderTurn(t) {
      turns++;
      var accepted = t.accept || [t.it];
      turn.innerHTML =
        '<div class="voice-box">' +
        '<p style="font-weight:600;margin:0 0 4px">Twoja kolej: ' + esc(t.task) + "</p>" +
        '<p class="voice-pl" style="margin-bottom:14px">Podpowiedź: <i>' + esc(t.hintIt || accepted[0]) + "</i></p>" +
        (Audio2.sttSupported ? '<button type="button" class="mic js-mic" aria-label="Mów">🎤</button><p class="voice-heard js-heard">Kliknij i powiedz po włosku.</p>' : "") +
        '<div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' +
        '<input type="text" class="field js-in" style="max-width:340px" placeholder="…albo wpisz odpowiedź" autocomplete="off" spellcheck="false">' +
        '<button class="btn btn--primary js-send">Wyślij</button>' +
        '<button class="btn btn--quiet js-skip">Pokaż odpowiedź</button></div></div>';

      var heard = turn.querySelector(".js-heard");
      var input = turn.querySelector(".js-in");

      function accept(text) {
        var best = 0;
        accepted.forEach(function (a) { best = Math.max(best, Core.similarity(text, a)); });
        var ok = best >= 0.72;
        if (ok) score++;
        Core.recordAnswer(ok);
        bubble(ok ? text : accepted[0], t.tr || "", true);
        if (!ok) Core.toast("Model odpowiedzi: " + accepted[0]);
        turn.innerHTML = "";
        i++;
        setTimeout(step, 420);
      }

      if (Audio2.sttSupported) {
        var mic = turn.querySelector(".js-mic");
        mic.addEventListener("click", function () {
          heard.textContent = "Słucham…";
          mic.classList.add("is-rec");
          Audio2.listen({
            oninterim: function (x) { heard.innerHTML = "…" + esc(x); },
            onerror: function (e) { mic.classList.remove("is-rec"); heard.textContent = e === "not-allowed" ? "Zezwól na mikrofon w przeglądarce." : "Nie udało się. Spróbuj jeszcze raz."; },
            onend: function (text) {
              mic.classList.remove("is-rec");
              if (!text) { heard.textContent = "Nic nie usłyszałam."; return; }
              heard.innerHTML = "Usłyszałam: <b>" + esc(text) + "</b>";
              setTimeout(function () { accept(text); }, 500);
            }
          });
        });
      }
      turn.querySelector(".js-send").addEventListener("click", function () {
        if (!input.value.trim()) { Core.toast("Napisz albo powiedz odpowiedź."); return; }
        accept(input.value.trim());
      });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") turn.querySelector(".js-send").click(); });
      turn.querySelector(".js-skip").addEventListener("click", function () {
        Audio2.speak(accepted[0]);
        Core.toast(accepted[0]);
      });
    }

    function finishConv() {
      Core.recordLesson("conv-" + conv.id, score, Math.max(turns, 1), 0);
      App.refreshRail();
      turn.innerHTML = '<div class="summary"><div class="summary__score">' + score + "/" + turns + "</div>" +
        '<p class="summary__msg">' + esc(conv.closing || "Rozmowa zakończona. Powtórz ją za kilka dni — płynność bierze się z powtarzania.") + "</p>" +
        '<div class="summary__acts"><button class="btn btn--primary js-again">Jeszcze raz</button>' +
        '<button class="btn btn--ghost js-list">Inne rozmowy</button></div></div>';
      turn.querySelector(".js-again").addEventListener("click", function () { App.go("conversazione", { id: conv.id }); });
      turn.querySelector(".js-list").addEventListener("click", function () { App.go("conversazione"); });
    }

    step();
  }

  /* ═══════════════════════════════════════════════════════════
     GRAMATYKA (encyklopedia)
     ═══════════════════════════════════════════════════════════ */
  Views.grammatica = function (params) {
    var ref = global.GRAMMAR_REF || [];
    if (params && params.id) {
      var a = null;
      ref.forEach(function (sec) { (sec.items || []).forEach(function (it) { if (it.id === params.id) a = { sec: sec, it: it }; }); });
      if (a) {
        set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">← Spis treści</button>' +
          pageHead(a.sec.title + " · " + a.it.cefr, a.it.title, a.it.sub || "") +
          '<div class="card"><div class="prose">' + a.it.body + "</div></div>");
        el().querySelector(".js-back").addEventListener("click", function () { App.go("grammatica"); });
        return;
      }
    }

    set(pageHead("Materiały", "Gramatyka od A do Z",
      "Pełny sylabus gramatyczny A1 → C2, uporządkowany tematycznie. Zaglądaj tu, kiedy coś w lekcji wymaga szerszego wyjaśnienia.") +
      ref.map(function (sec) {
        return '<section style="margin-bottom:30px"><h2 style="font-size:1.24rem;margin-bottom:12px">' + esc(sec.title) + "</h2>" +
          '<div class="stack">' + (sec.items || []).map(function (it) {
            return '<button class="list-row" data-gram="' + esc(it.id) + '" style="text-align:left;cursor:pointer;width:100%">' +
              '<span class="chip chip--cefr">' + esc(it.cefr) + "</span>" +
              '<span class="list-row__main"><b>' + esc(it.title) + "</b><span>" + esc(it.sub || "") + "</span></span>" +
              "<span aria-hidden=\"true\">→</span></button>";
          }).join("") + "</div></section>";
      }).join(""));

    el().querySelectorAll("[data-gram]").forEach(function (b) {
      b.addEventListener("click", function () { App.go("grammatica", { id: b.getAttribute("data-gram") }); });
    });
  };

  /* ═══════════════════════════════════════════════════════════
     KONIUGATOR
     ═══════════════════════════════════════════════════════════ */
  Views.coniugatore = function () {
    set(pageHead("Narzędzie", "Odmiana czasowników",
      "Wpisz bezokolicznik (także zwrotny, np. svegliarsi). Silnik odmienia formy regularne i ok. 45 najczęstszych nieregularnych.") +
      '<div class="card" style="margin-bottom:22px">' +
      '<div class="field-row"><input type="text" class="field js-verb" placeholder="np. parlare, essere, capire, svegliarsi" list="verbList" autocomplete="off" spellcheck="false" style="max-width:340px">' +
      '<button class="btn btn--primary js-go">Odmień</button></div>' +
      '<datalist id="verbList">' + Verbs.COMMON.map(function (v) { return '<option value="' + esc(v[0]) + '">' + esc(v[1]) + "</option>"; }).join("") + "</datalist>" +
      '<div style="margin-top:14px;display:flex;gap:6px;flex-wrap:wrap">' +
      ["essere", "avere", "fare", "andare", "capire", "svegliarsi", "mangiare", "potere"].map(function (v) {
        return '<button class="btn btn--ghost btn--sm js-quick" data-v="' + v + '">' + v + "</button>";
      }).join("") + "</div></div>" +
      '<div id="conjOut"></div>');

    var input = el().querySelector(".js-verb");
    function run() {
      var v = (input.value || "").trim().toLowerCase();
      if (!v) return;
      if (!/^[a-zàèéìòù]+(are|ere|ire|rre|rsi|arsi|ersi|irsi)$/.test(v)) {
        document.getElementById("conjOut").innerHTML = '<div class="empty"><h3>To nie wygląda na bezokolicznik</h3><p>Bezokolicznik kończy się na -are, -ere, -ire (albo -rsi dla zwrotnych).</p></div>';
        return;
      }
      var t = Verbs.fullTable(v);
      var m = t._meta;
      var out = '<div class="meta-row">' +
        '<span class="chip chip--cefr">' + esc(m.gruppo) + "</span>" +
        '<span class="chip">ausiliare: ' + esc(m.ausiliare) + "</span>" +
        '<span class="chip chip--green">participio: ' + esc(m.participio) + "</span>" +
        '<span class="chip">gerundio: ' + esc(m.gerundio) + "</span>" +
        (m.irregolare ? '<span class="chip chip--gold">nieregularny</span>' : '<span class="chip chip--green">regularny</span>') +
        (m.riflessivo ? '<span class="chip chip--gold">zwrotny</span>' : "") + "</div>" +
        '<div class="grid-2">' + Verbs.TENSES.map(function (tn) {
          var forms = t[tn.key];
          if (!forms || !forms.filter(Boolean).length) return "";
          // tabela zawsze w kontenerze przewijalnym: bez tego przy 320 px strona przewija się w poziomie
          return '<div class="card"><h3 style="font-size:1rem;margin-bottom:2px">' + esc(tn.labelIt) + "</h3>" +
            '<p style="font-size:.8rem;color:var(--ink-soft);margin-bottom:10px">' + esc(tn.labelPl) + "</p>" +
            '<div class="table-wrap"><table class="gt"><tbody>' + forms.map(function (f, k) {
              if (!f) return "";
              return "<tr><td>" + esc(Verbs.PERSONS[k]) + '</td><td class="it">' + esc(f) +
                ' <button type="button" class="say-btn" data-say="' + esc(f) + '" aria-label="Posłuchaj">🔊</button></td></tr>';
            }).join("") + "</tbody></table></div></div>";
        }).join("") + "</div>";
      var box = document.getElementById("conjOut");
      box.innerHTML = out;
      Ex.wireSpeakers(box);
    }
    el().querySelector(".js-go").addEventListener("click", run);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") run(); });
    el().querySelectorAll(".js-quick").forEach(function (b) {
      b.addEventListener("click", function () { input.value = b.getAttribute("data-v"); run(); });
    });
    input.value = "parlare"; run();
  };

  /* ═══════════════════════════════════════════════════════════
     MÓJ SŁOWNIK
     ═══════════════════════════════════════════════════════════ */
  Views.lessico = function () {
    var cards = Object.keys(Core.state.srs).map(function (k) {
      return Object.assign({ key: k }, Core.state.srs[k]);
    });
    cards.sort(function (a, b) { return a.due - b.due; });

    var now = Date.now();
    var learned = cards.filter(function (c) { return c.reps >= 3; }).length;

    set(pageHead("Słownictwo", "Mój słownik", "Wszystkie słówka oznaczone gwiazdką. Sortowanie według terminu następnej powtórki.") +
      '<div class="grid-2" style="margin-bottom:24px">' +
      '<div class="stat-card"><b>' + cards.length + "</b><span>fiszek w talii</span></div>" +
      '<div class="stat-card"><b>' + learned + "</b><span>utrwalonych (3+ powtórki)</span></div>" +
      '<div class="stat-card"><b>' + Core.dueCount() + "</b><span>czeka na dziś</span></div></div>" +
      (cards.length
        ? '<div class="field-row" style="margin-bottom:14px"><input type="text" class="field js-filter" placeholder="Szukaj po włosku lub po polsku" style="max-width:340px"></div>' +
          '<div class="stack" id="lexList">' + cards.map(function (c) {
            var days = Math.round((c.due - now) / 86400000);
            var when = c.due <= now ? "dziś" : (days <= 1 ? "jutro" : "za " + days + " dni");
            return '<div class="list-row" data-t="' + esc((c.it + " " + c.pl).toLowerCase()) + '">' +
              '<button type="button" class="say-btn" data-say="' + esc(c.it) + '" aria-label="Posłuchaj">🔊</button>' +
              '<span class="list-row__main"><b>' + esc(c.it) + "</b><span>" + esc(c.pl) + "</span></span>" +
              '<span class="chip">' + esc(when) + "</span>" +
              '<button type="button" class="btn btn--quiet btn--sm js-del" data-k="' + esc(c.key) + '">Usuń</button></div>';
          }).join("") + "</div>"
        : '<div class="empty"><h3>Talia jest pusta</h3><p>W każdej lekcji kliknij ⭐ przy słówku, żeby wpadło tutaj i do powtórek.</p></div>'));

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

  /* ═══════════════════════════════════════════════════════════
     POSTĘPY
     ═══════════════════════════════════════════════════════════ */
  Views.progressi = function () {
    var s = Core.state;
    var acc = (s.stats.correct + s.stats.wrong) ? Math.round(100 * s.stats.correct / (s.stats.correct + s.stats.wrong)) : 0;

    var days = [];
    for (var d = 13; d >= 0; d--) {
      var dt = new Date(Date.now() - d * 86400000);
      var key = dt.getFullYear() + "-" + String(dt.getMonth() + 1).padStart(2, "0") + "-" + String(dt.getDate()).padStart(2, "0");
      days.push({ key: key, v: s.stats.days[key] || 0, label: ["nd", "pn", "wt", "śr", "cz", "pt", "sb"][dt.getDay()] });
    }
    var max = Math.max.apply(null, days.map(function (x) { return x.v; }).concat([1]));

    set(pageHead("Statystyki", "Twoje postępy", "Wszystko liczone lokalnie, w Twojej przeglądarce. Nic nie wychodzi na zewnątrz.") +
      '<div class="grid-2" style="margin-bottom:28px">' +
      '<div class="stat-card"><b>' + s.streak.count + "</b><span>dni z rzędu (rekord: " + s.streak.best + ")</span></div>" +
      '<div class="stat-card"><b>' + s.stats.lessonsDone + "</b><span>ukończonych lekcji</span></div>" +
      '<div class="stat-card"><b>' + acc + "%</b><span>skuteczność odpowiedzi</span></div>" +
      '<div class="stat-card"><b>' + s.xp + "</b><span>punktów</span></div></div>" +

      '<h2 style="font-size:1.2rem;margin-bottom:12px">Ostatnie dwa tygodnie</h2>' +
      '<div class="card" style="margin-bottom:28px"><div style="display:flex;gap:6px;align-items:flex-end;height:130px">' +
      days.map(function (x) {
        var h = Math.max(4, Math.round(100 * x.v / max));
        return '<div style="flex:1;text-align:center">' +
          '<div title="' + x.v + ' odpowiedzi" style="height:' + h + 'px;background:' + (x.v ? "var(--salvia-deep)" : "var(--line)") + ';border-radius:6px 6px 0 0"></div>' +
          '<span style="font-size:.68rem;color:var(--ink-faint)">' + x.label + "</span></div>";
      }).join("") + "</div></div>" +

      '<h2 style="font-size:1.2rem;margin-bottom:12px">Poziomy</h2><div class="stack">' +
      Core.registry.levels.map(function (lv) {
        var p = Core.levelProgress(lv);
        return '<div class="list-row"><span class="chip chip--cefr">' + esc(lv.code) + "</span>" +
          '<span class="list-row__main"><b>' + esc(lv.name) + "</b><span>" + p.done + " z " + p.total + " lekcji</span></span>" +
          '<span style="flex:0 0 120px"><span class="level-pill__bar"><i style="width:' + pct(p.pct) + '%"></i></span></span>' +
          '<span class="chip">' + pct(p.pct) + "%</span></div>";
      }).join("") + "</div>");
  };

  /* ═══════════════════════════════════════════════════════════
     USTAWIENIA
     ═══════════════════════════════════════════════════════════ */
  Views.impostazioni = function () {
    var st = Core.state.settings;
    var voices = Audio2.italianVoices();

    set(pageHead("Konfiguracja", "Ustawienia", "Głos, tempo mowy, kopia postępów.") +
      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:14px">Mowa</h3>' +
      '<div class="stack">' +
      '<label style="display:block"><span style="font-weight:600;display:block;margin-bottom:5px">Źródło głosu</span>' +
      '<select class="field js-source" style="max-width:420px">' +
      '<option value="natural"' + (st.voiceSource !== "system" ? " selected" : "") + (Audio2.naturalAvailable ? "" : " disabled") + '>' +
      'Nagrania lektorskie' + (Audio2.naturalAvailable ? " (" + Audio2.naturalCount + " zdań)" : " — niewygenerowane") + "</option>" +
      '<option value="system"' + (st.voiceSource === "system" ? " selected" : "") + ">Głos systemowy (Web Speech API)</option>" +
      "</select>" +
      '<span style="display:block;font-size:.84rem;color:var(--ink-soft);margin-top:6px">' +
      (Audio2.naturalAvailable
        ? "Zdania kursu czyta lektor neuronowy. Formy z odmiany czasowników, których nie ma w nagraniach, wracają automatycznie do głosu systemowego."
        : "Nagrania nie zostały wygenerowane — uruchom <code>scripts/build_audio.py</code>.") +
      "</span></label>" +
      '<label style="display:block"><span style="font-weight:600;display:block;margin-bottom:5px">Tempo mowy: <b class="js-rate-v">' + st.rate + "×</b></span>" +
      '<input type="range" class="js-rate" min="0.6" max="1.4" step="0.05" value="' + st.rate + '" style="width:100%;max-width:420px;accent-color:var(--rosa-deep)"></label>' +
      '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-autoplay"' + (st.autoplay ? " checked" : "") + ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>Automatycznie odtwarzaj nagrania w ćwiczeniach</span></label>' +
      '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-strict"' + (st.strictAccents ? " checked" : "") + ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>Wymagaj akcentów (perché, è, città…)</span></label>' +
      '<button class="btn btn--ghost btn--sm js-test" style="align-self:flex-start">🔊 Test głosu</button>' +
      "</div></div>" +

      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">Kopia postępów</h3>' +
      '<p style="color:var(--ink-soft);font-size:.9rem">Postępy siedzą w pamięci tej przeglądarki. Wyeksportuj plik, jeśli zmieniasz komputer albo czyścisz dane.</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">' +
      '<button class="btn btn--green btn--sm js-export">⬇ Eksportuj</button>' +
      '<label class="btn btn--ghost btn--sm" style="cursor:pointer">⬆ Importuj<input type="file" accept="application/json" class="js-import" hidden></label>' +
      '<button class="btn btn--ghost btn--sm js-reset" style="color:var(--ko);border-color:var(--ko)">Wyczyść wszystko</button></div></div>' +

      '<div class="card"><h3 style="font-size:1.05rem;margin-bottom:6px">Wsparcie przeglądarki</h3>' +
      '<div class="stack" style="font-size:.92rem">' +
      '<div class="list-row"><span class="list-row__main"><b>Nagrania lektorskie</b><span>Isabella (główny) i Giuseppe (rozmówca)</span></span><span class="chip ' + (Audio2.naturalAvailable ? "chip--green" : "") + '">' + (Audio2.naturalAvailable ? Audio2.naturalCount + " zdań" : "brak") + "</span></div>" +
      '<div class="list-row"><span class="list-row__main"><b>Synteza systemowa (TTS)</b><span>tryb awaryjny i odmiana czasowników</span></span><span class="chip ' + (Audio2.ttsSupported ? "chip--green" : "") + '">' + (Audio2.ttsSupported ? "działa" : "brak") + "</span></div>" +
      '<div class="list-row"><span class="list-row__main"><b>Rozpoznawanie mowy (STT)</b><span>ćwiczenia mówione</span></span><span class="chip ' + (Audio2.sttSupported ? "chip--green" : "") + '">' + (Audio2.sttSupported ? "działa" : "brak — tryb pisany") + "</span></div>" +
      '<div class="list-row"><span class="list-row__main"><b>Głosy włoskie w systemie</b><span>używane tylko w trybie awaryjnym</span></span><span class="chip">' + voices.length + "</span></div>" +
      "</div></div>");

    var src = el().querySelector(".js-source");
    src.addEventListener("change", function () { Core.state.settings.voiceSource = src.value; Core.save(); });
    var r = el().querySelector(".js-rate");
    r.addEventListener("input", function () {
      Core.state.settings.rate = parseFloat(r.value);
      el().querySelector(".js-rate-v").textContent = r.value + "×";
      Core.save();
    });
    el().querySelector(".js-autoplay").addEventListener("change", function (e) { Core.state.settings.autoplay = e.target.checked; Core.save(); });
    el().querySelector(".js-strict").addEventListener("change", function (e) { Core.state.settings.strictAccents = e.target.checked; Core.save(); });
    el().querySelector(".js-test").addEventListener("click", function () {
      Audio2.speak("Ciao! Sono la tua voce italiana. Andiamo a studiare insieme.");
    });

    el().querySelector(".js-export").addEventListener("click", function () {
      var blob = new Blob([Core.exportState()], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "impara-italiano-postepy-" + Core.today() + ".json";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
    });
    el().querySelector(".js-import").addEventListener("change", function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        try { Core.importState(fr.result); Core.toast("Postępy wczytane.", "ok"); App.refreshRail(); App.go("progressi"); }
        catch (err) { Core.toast("Nie udało się wczytać pliku."); }
      };
      fr.readAsText(f);
    });
    el().querySelector(".js-reset").addEventListener("click", function () {
      if (!global.confirm("Na pewno? Wszystkie postępy, fiszki i statystyki zostaną skasowane.")) return;
      Core.resetState(); App.refreshRail(); Core.toast("Wyczyszczone."); App.go("percorso");
    });
  };

  global.Views = Views;

})(window);
