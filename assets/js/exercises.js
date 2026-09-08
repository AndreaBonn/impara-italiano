/* ============================================================
   exercises.js — renderowanie i sprawdzanie ćwiczeń
   Kontrakt: Ex.build(ex, idx, seed) -> { html, wire(root, onDone) }
   onDone(ok:boolean) wywoływane raz, po sprawdzeniu.

   Typy: mcq | multi | fill | cloze | trans | order | match |
         conj | gender | listen | speak | dialogue | truefalse
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };

  /** Nazwa typu ćwiczenia — klucz słownika, nie napis. */
  function label(type) { return t("ex.type." + type); }

  function head(idx, ex) {
    return '<p class="exq__num">' + esc(t("ex.num", { n: idx + 1, type: label(ex.t) })) + "</p>";
  }

  function sayBtn(text, aria) {
    return '<button type="button" class="say-btn" data-say="' + esc(text) + '" ' +
      'aria-label="' + esc(aria || t("a11y.listenTo", { what: text })) + '">🔊</button>';
  }

  function feedbackBox() { return '<div class="fb" role="status"></div>'; }

  function checkBtn(txt) {
    return '<button type="button" class="btn btn--primary js-check">' + esc(txt || t("ex.check")) + '</button>';
  }

  /** Wspólne zakończenie ćwiczenia. */
  function finish(root, ok, why, correctText, onDone) {
    var fb = root.querySelector(".fb");
    var btn = root.querySelector(".js-check");
    if (btn) { btn.disabled = true; btn.textContent = t(ok ? "ex.done.ok" : "ex.done.checked"); }
    root.classList.add(ok ? "exq--ok" : "exq--ko");
    if (fb) {
      fb.className = "fb is-on " + (ok ? "fb--ok" : "fb--ko");
      var headTxt = ok ? t("ex.bravo")
        : (correctText ? t("ex.correctIs", { answer: correctText }) : t("ex.notYet"));
      fb.innerHTML = esc(headTxt) + (why ? '<span class="fb__why">' + why + "</span>" : "");
    }
    Core.recordAnswer(ok);
    onDone && onDone(ok);
  }

  /* ═══════════════ MCQ / TRUEFALSE ═══════════════ */
  function buildMcq(ex, idx, seed) {
    var opts = ex.opts.map(function (o, i) { return { txt: o, i: i }; });
    if (ex.shuffle !== false) opts = Core.seededShuffle(opts, seed + "-" + idx);
    var name = "q" + seed + "_" + idx;

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || "") + (ex.say ? " " + sayBtn(ex.say) : "") + "</p>" +
      (ex.sub ? '<p class="exq__sub">' + esc(ex.sub) + "</p>" : "") +
      '<div class="opts" role="radiogroup" aria-label="' + esc(t("ex.answersGroup")) + '">' +
      opts.map(function (o, k) {
        return '<label class="opt" data-orig="' + o.i + '">' +
          '<input type="radio" name="' + name + '" value="' + o.i + '"><span>' + o.txt + "</span></label>";
      }).join("") +
      "</div>" + checkBtn() + feedbackBox() + "</div>";

    function wire(root, onDone) {
      var labels = root.querySelectorAll(".opt");
      labels.forEach(function (l) {
        l.addEventListener("click", function () {
          labels.forEach(function (x) { x.classList.remove("is-sel"); });
          l.classList.add("is-sel");
        });
      });
      root.querySelector(".js-check").addEventListener("click", function () {
        var sel = root.querySelector('input[name="' + name + '"]:checked');
        if (!sel) { Core.toast(t("ex.pickOne")); return; }
        var chosen = parseInt(sel.value, 10);
        var ok = chosen === ex.a;
        labels.forEach(function (l) {
          var o = parseInt(l.getAttribute("data-orig"), 10);
          if (o === ex.a) l.classList.add("is-ok");
          else if (o === chosen && !ok) l.classList.add("is-ko");
        });
        finish(root, ok, ex.why, ok ? null : stripTags(ex.opts[ex.a]), onDone);
      });
    }
    return { html: html, wire: wire };
  }

  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ""); }

  /* ═══════════════ MULTI (kilka poprawnych) ═══════════════ */
  function buildMulti(ex, idx, seed) {
    var opts = Core.seededShuffle(ex.opts.map(function (o, i) { return { txt: o, i: i }; }), seed + "m" + idx);
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || "") + "</p>" +
      '<p class="exq__sub">' + t("ex.multiHint") + "</p>" +
      '<div class="opts">' + opts.map(function (o) {
        return '<label class="opt" data-orig="' + o.i + '"><input type="checkbox" value="' + o.i + '"><span>' + o.txt + "</span></label>";
      }).join("") + "</div>" + checkBtn() + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelectorAll(".opt").forEach(function (l) {
        l.addEventListener("click", function () {
          setTimeout(function () {
            l.classList.toggle("is-sel", l.querySelector("input").checked);
          }, 0);
        });
      });
      root.querySelector(".js-check").addEventListener("click", function () {
        var chosen = [];
        root.querySelectorAll('input[type=checkbox]:checked').forEach(function (c) { chosen.push(parseInt(c.value, 10)); });
        if (!chosen.length) { Core.toast(t("ex.pickAtLeastOne")); return; }
        var want = ex.a.slice().sort().join(",");
        var got = chosen.slice().sort().join(",");
        var ok = want === got;
        root.querySelectorAll(".opt").forEach(function (l) {
          var o = parseInt(l.getAttribute("data-orig"), 10);
          if (ex.a.indexOf(o) >= 0) l.classList.add("is-ok");
          else if (chosen.indexOf(o) >= 0) l.classList.add("is-ko");
        });
        finish(root, ok, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ FILL / TRANS ═══════════════ */
  function buildFill(ex, idx) {
    var accepted = Array.isArray(ex.a) ? ex.a : [ex.a];
    var isTrans = ex.t === "trans";
    var ph = isTrans
      ? t(ex.dir === "toBase" ? "ex.ph.toBase" : "ex.ph.toIt")
      : t("ex.ph.answer");

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || "") + (ex.say ? " " + sayBtn(ex.say) : "") + "</p>" +
      (ex.hint ? '<p class="exq__sub">' + esc(t("ex.hintLabel", { hint: ex.hint })) + "</p>" : "") +
      '<div class="field-row"><input type="text" class="field js-in" placeholder="' + esc(ph) + '" autocomplete="off" autocapitalize="off" spellcheck="false">' +
      checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      var input = root.querySelector(".js-in");
      var btn = root.querySelector(".js-check");
      var tries = 0;
      function go() {
        if (btn.disabled) return;
        var res = Core.checkOpen(input.value, accepted, Core.state.settings.strictAccents);
        if (!res.ok && res.near && tries === 0) {
          tries++;
          var fb = root.querySelector(".fb");
          fb.className = "fb is-on fb--ko";
          fb.innerHTML = esc(t("ex.almost"));
          return;
        }
        finish(root, res.ok, ex.why, res.ok ? null : accepted[0], onDone);
      }
      btn.addEventListener("click", go);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); go(); } });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ CLOZE (kilka luk w tekście) ═══════════════ */
  function buildCloze(ex, idx) {
    // ex.text: "Ieri {{1}} al mercato e {{2}} la frutta."  ex.gaps: [["sono andato"],["ho comprato"]]
    var parts = String(ex.text).split(/\{\{(\d+)\}\}/);
    var htmlBody = "";
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) htmlBody += esc(parts[i]);
      else htmlBody += '<input type="text" class="field js-gap" data-gap="' + (parseInt(parts[i], 10) - 1) + '" ' +
        'style="display:inline-block;width:auto;min-width:130px;max-width:220px;margin:2px 4px;" autocomplete="off" spellcheck="false">';
    }
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || t("ex.cloze.prompt")) + "</p>" +
      (ex.tr ? '<p class="exq__sub">' + esc(ex.tr) + "</p>" : "") +
      '<p style="font-size:1.04rem;line-height:2.3;">' + htmlBody + "</p>" +
      checkBtn() + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelector(".js-check").addEventListener("click", function () {
        var allOk = true, first = null;
        root.querySelectorAll(".js-gap").forEach(function (inp) {
          var g = parseInt(inp.getAttribute("data-gap"), 10);
          var accepted = Array.isArray(ex.gaps[g]) ? ex.gaps[g] : [ex.gaps[g]];
          var res = Core.checkOpen(inp.value, accepted, Core.state.settings.strictAccents);
          inp.style.borderColor = res.ok ? "var(--ok)" : "var(--ko)";
          if (!res.ok) { allOk = false; if (!first) first = accepted[0]; inp.value = inp.value + " → " + accepted[0]; }
          inp.disabled = true;
        });
        finish(root, allOk, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ ORDER (ułóż zdanie) ═══════════════ */
  function buildOrder(ex, idx, seed) {
    var tokens = Core.seededShuffle(ex.tokens.slice(), seed + "o" + idx);
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.order.prompt") + "</p>" +
      '<p class="exq__sub">' + esc(ex.tr || "") + "</p>" +
      // rola „group" jest konieczna: div bez roli nie może nieść aria-label (WCAG 4.1.2)
      '<div class="tok-target js-target" role="group" aria-label="' + esc(t("ex.order.yourSentence")) + '"></div>' +
      '<div class="tok-bank js-bank">' + tokens.map(function (t) {
        return '<button type="button" class="tok">' + esc(t) + "</button>";
      }).join("") + "</div>" +
      '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">' + checkBtn() +
      '<button type="button" class="btn btn--ghost btn--sm js-clear">' + t("ex.order.clear") + "</button></div>" +
      feedbackBox() + "</div>";

    function wire(root, onDone) {
      var target = root.querySelector(".js-target");
      var bank = root.querySelector(".js-bank");

      bank.addEventListener("click", function (e) {
        var b = e.target.closest(".tok");
        if (!b || root.querySelector(".js-check").disabled) return;
        b.classList.add("tok--placed");
        target.appendChild(b);
      });
      target.addEventListener("click", function (e) {
        var b = e.target.closest(".tok");
        if (!b || root.querySelector(".js-check").disabled) return;
        b.classList.remove("tok--placed");
        bank.appendChild(b);
      });
      root.querySelector(".js-clear").addEventListener("click", function () {
        target.querySelectorAll(".tok").forEach(function (b) { b.classList.remove("tok--placed"); bank.appendChild(b); });
      });
      root.querySelector(".js-check").addEventListener("click", function () {
        var built = Array.prototype.map.call(target.querySelectorAll(".tok"), function (b) { return b.textContent; }).join(" ");
        if (!built.trim()) { Core.toast(t("ex.order.empty")); return; }
        var accepted = Array.isArray(ex.a) ? ex.a : [ex.a];
        var res = Core.checkOpen(built, accepted, false);
        finish(root, res.ok, ex.why, res.ok ? null : accepted[0], onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ MATCH (pary) ═══════════════ */
  function buildMatch(ex, idx, seed) {
    var left = ex.pairs.map(function (p, i) { return { t: p.it, i: i }; });
    var right = Core.seededShuffle(ex.pairs.map(function (p, i) { return { t: p.tr, i: i }; }), seed + "r" + idx);
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + esc(ex.q || t("ex.match.prompt")) + "</p>" +
      '<div class="match-grid"><div class="match-col js-l">' +
      left.map(function (o) { return '<button type="button" class="match-btn" data-side="l" data-i="' + o.i + '">' + esc(o.t) + "</button>"; }).join("") +
      '</div><div class="match-col js-r">' +
      right.map(function (o) { return '<button type="button" class="match-btn" data-side="r" data-i="' + o.i + '">' + esc(o.t) + "</button>"; }).join("") +
      "</div></div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      var sel = null, matched = 0, errors = 0;
      var total = ex.pairs.length;
      root.querySelectorAll(".match-btn").forEach(function (b) {
        b.addEventListener("click", function () {
          if (b.classList.contains("is-ok")) return;
          if (!sel) { sel = b; b.classList.add("is-sel"); return; }
          if (sel === b) { sel.classList.remove("is-sel"); sel = null; return; }
          if (sel.getAttribute("data-side") === b.getAttribute("data-side")) {
            sel.classList.remove("is-sel"); sel = b; b.classList.add("is-sel"); return;
          }
          var ok = sel.getAttribute("data-i") === b.getAttribute("data-i");
          sel.classList.remove("is-sel");
          if (ok) {
            sel.classList.add("is-ok"); b.classList.add("is-ok");
            matched++;
            if (matched === total) {
              finish(root, errors === 0, ex.why || (errors ? t("ex.match.mistakes", { n: errors }) : ""), null, onDone);
            }
          } else {
            errors++;
            var a = sel, c = b;
            a.classList.add("is-ko"); c.classList.add("is-ko");
            setTimeout(function () { a.classList.remove("is-ko"); c.classList.remove("is-ko"); }, 600);
          }
          sel = null;
        });
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ CONJ (tabela odmiany) ═══════════════ */
  function buildConj(ex, idx) {
    // ex.verb, ex.tense (klucz z Verbs.TENSES), ex.persons: indeksy do uzupełnienia
    var forms = Verbs.conjugate(ex.verb, ex.tense || "pres");
    // tryb rozkazujący nie ma formy „io" — pomijamy osoby bez formy
    var which = (ex.persons || [0, 1, 2, 3, 4, 5]).filter(function (p) { return !!forms[p]; });
    var tenseLabel = (Verbs.TENSES.filter(function (t) { return t.key === (ex.tense || "pres"); })[0] || {}).labelIt;

    var rows = which.map(function (p) {
      return '<label for="c' + idx + "_" + p + '">' + esc(Verbs.PERSONS[p]) + "</label>" +
        '<input id="c' + idx + "_" + p + '" class="field js-cell" data-p="' + p + '" autocomplete="off" spellcheck="false">';
    }).join("");

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.conj.prompt", { verb: '<b style="color:var(--rosa-deep)">' + esc(ex.verb) + "</b>", tense: esc(tenseLabel) }) + "</p>" +
      (ex.tr ? '<p class="exq__sub">' + esc(ex.tr) + "</p>" : "") +
      '<div class="conj-grid">' + rows + "</div>" +
      '<div style="margin-top:14px">' + checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelector(".js-check").addEventListener("click", function () {
        var allOk = true;
        root.querySelectorAll(".js-cell").forEach(function (inp) {
          var p = parseInt(inp.getAttribute("data-p"), 10);
          var want = forms[p] || "";
          var ok = Core.checkOpen(inp.value, [want], Core.state.settings.strictAccents).ok;
          inp.style.borderColor = ok ? "var(--ok)" : "var(--ko)";
          if (!ok) { allOk = false; inp.value = want; }
          inp.disabled = true;
        });
        finish(root, allOk, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ GENDER (rodzajnik / rodzaj) ═══════════════ */
  function buildGender(ex, idx, seed) {
    var items = Core.seededShuffle(ex.items.slice(), seed + "g" + idx);
    var opts = ex.opts || ["il", "lo", "la", "l'", "i", "gli", "le"];
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + esc(ex.q || t("ex.gender.prompt")) + "</p>" +
      '<div class="stack">' + items.map(function (it, i) {
        return '<div class="field-row" data-row="' + i + '">' +
          '<select class="field js-sel" data-i="' + i + '" style="max-width:130px;">' +
          '<option value="">—</option>' +
          opts.map(function (o) { return '<option value="' + esc(o) + '">' + esc(o) + "</option>"; }).join("") +
          "</select>" +
          '<b style="font-size:1.02rem">' + esc(it.it) + "</b>" +
          '<span style="color:var(--ink-soft);font-size:.86rem">' + esc(it.gloss || "") + "</span></div>";
      }).join("") + "</div>" +
      '<div style="margin-top:14px">' + checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelector(".js-check").addEventListener("click", function () {
        var allOk = true;
        root.querySelectorAll(".js-sel").forEach(function (sel) {
          var i = parseInt(sel.getAttribute("data-i"), 10);
          var want = items[i].a;
          var ok = Core.norm(sel.value) === Core.norm(want);
          sel.style.borderColor = ok ? "var(--ok)" : "var(--ko)";
          if (!ok) { allOk = false; sel.value = want; }
          sel.disabled = true;
        });
        finish(root, allOk, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ LISTEN (dyktando) ═══════════════ */
  function buildListen(ex, idx) {
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.listen.prompt") + "</p>" +
      '<div class="voice-box" style="text-align:left">' +
      '<button type="button" class="btn btn--green js-play">' + t("ex.listen.play") + "</button> " +
      '<button type="button" class="btn btn--ghost btn--sm js-slow">' + t("ex.listen.slow") + "</button>" +
      '<div style="margin-top:14px"><input type="text" class="field js-in" placeholder="' + esc(t("ex.listen.ph")) + '" autocomplete="off" spellcheck="false"></div>' +
      "</div>" +
      '<div style="margin-top:14px">' + checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      var input = root.querySelector(".js-in");
      root.querySelector(".js-play").addEventListener("click", function () { Audio2.speak(ex.it); });
      root.querySelector(".js-slow").addEventListener("click", function () { Audio2.speak(ex.it, { rate: 0.62 }); });
      if (Core.state.settings.autoplay) setTimeout(function () { Audio2.speak(ex.it); }, 320);
      function go() {
        var res = Core.checkOpen(input.value, [ex.it].concat(ex.alt || []), false);
        finish(root, res.ok, (ex.why ? ex.why + " " : "") + (ex.tr ? "<i>" + esc(ex.tr) + "</i>" : ""), res.ok ? null : ex.it, onDone);
      }
      root.querySelector(".js-check").addEventListener("click", go);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); go(); } });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ SPEAK (wymowa) ═══════════════ */
  function buildSpeak(ex, idx) {
    var supported = Audio2.sttSupported;
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.speak.prompt") + "</p>" +
      '<div class="voice-box">' +
      '<p class="voice-target">' + esc(ex.it) + " " + sayBtn(ex.it) + "</p>" +
      '<p class="voice-pl">' + esc(ex.tr || "") + "</p>" +
      (supported
        ? '<button type="button" class="mic js-mic" aria-label="' + esc(t("ex.speak.mic")) + '">🎤</button>' +
          '<p class="voice-heard js-heard">' + t("ex.speak.hint") + "</p>"
        : '<p class="voice-heard">' + t("ex.speak.noStt") + "</p>" +
          '<input type="text" class="field js-in" placeholder="' + esc(t("ex.speak.ph")) + '" autocomplete="off" spellcheck="false">') +
      "</div>" +
      '<div style="margin-top:14px">' + checkBtn(supported ? t("ex.speak.pass") : t("ex.check")) + "</div>" +
      feedbackBox() + "</div>";

    function wire(root, onDone) {
      var score = -1;
      if (supported) {
        var mic = root.querySelector(".js-mic");
        var heard = root.querySelector(".js-heard");
        var rec = null;
        mic.addEventListener("click", function () {
          if (mic.classList.contains("is-rec")) { rec && rec.abort(); mic.classList.remove("is-rec"); return; }
          heard.textContent = t("ex.stt.listening");
          mic.classList.add("is-rec");
          rec = Audio2.listen({
            oninterim: function (t) { heard.innerHTML = "…" + esc(t); },
            onerror: function (err) {
              mic.classList.remove("is-rec");
              heard.textContent = t(err === "not-allowed" ? "ex.stt.denied" : "ex.stt.failed");
            },
            onend: function (text, alts) {
              mic.classList.remove("is-rec");
              if (!text) { heard.textContent = t("ex.stt.nothing"); return; }
              score = Audio2.scoreSpeech(text, alts, ex.it);
              heard.innerHTML = t("ex.stt.heard", { text: "<b>" + esc(text) + "</b>" }) + '<br><span class="voice-score" style="color:' +
                (score >= 80 ? "var(--ok)" : score >= 60 ? "var(--oro-deep)" : "var(--ko)") + '">' + score + "%</span>";
            }
          });
        });
      }
      root.querySelector(".js-check").addEventListener("click", function () {
        var ok, why;
        if (supported) {
          if (score < 0) { Core.toast(t("ex.speak.recordFirst")); return; }
          ok = score >= 70;
          why = t(ok ? "ex.speak.ok" : "ex.speak.retry");
        } else {
          var res = Core.checkOpen(root.querySelector(".js-in").value, [ex.it], false);
          ok = res.ok; why = ex.why || "";
        }
        finish(root, ok, why, ok ? null : ex.it, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ DIALOGUE (słuchasz i odpowiadasz) ═══════════════ */
  function buildDialogue(ex, idx) {
    // ex.lines: [{sp:"A"|"TY", it, pl, choices?:[...], a?:int}]
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + esc(ex.q || t("ex.dialogue.prompt")) + "</p>" +
      (ex.setting ? '<p class="exq__sub">' + esc(ex.setting) + "</p>" : "") +
      '<div class="dlg js-dlg"></div>' +
      '<div class="js-turn" style="margin-top:16px"></div>' +
      feedbackBox() + "</div>";

    function wire(root, onDone) {
      var dlg = root.querySelector(".js-dlg");
      var turn = root.querySelector(".js-turn");
      var i = 0, mistakes = 0;

      function bubble(line, mine) {
        var d = document.createElement("div");
        d.className = "dlg__line" + (mine ? " dlg__line--b" : "");
        d.innerHTML = '<div class="dlg__who">' + (mine ? "🙋" : "🧑‍🍳") + "</div>" +
          '<div class="dlg__bubble"><span class="dlg__it">' + esc(line.it) + " " + sayBtn(line.it) + "</span>" +
          '<span class="dlg__pl">' + esc(line.tr || "") + "</span></div>";
        dlg.appendChild(d);
      }

      function step() {
        if (i >= ex.lines.length) {
          turn.innerHTML = "";
          finish(root, mistakes === 0,
            mistakes ? t("ex.dialogue.mistakes", { n: mistakes }) : (ex.why || t("ex.dialogue.allOk")), null, onDone);
          return;
        }
        var line = ex.lines[i];
        if (!line.choices) {
          bubble(line, line.sp === "TY");
          if (line.sp !== "TY" && Core.state.settings.autoplay) Audio2.speak(line.it);
          i++;
          setTimeout(step, line.sp === "TY" ? 200 : 900);
          return;
        }
        // tura ucznia
        turn.innerHTML = '<p style="font-weight:600;margin-bottom:8px">' +
          esc(t("ex.dialogue.yourTurn", { task: line.tr || t("ex.dialogue.pickAnswer") })) + "</p>" +
          '<div class="opts">' + line.choices.map(function (c, k) {
            return '<button type="button" class="opt js-ch" data-k="' + k + '"><span>' + esc(c) + "</span></button>";
          }).join("") + "</div>";
        turn.querySelectorAll(".js-ch").forEach(function (b) {
          b.addEventListener("click", function () {
            var k = parseInt(b.getAttribute("data-k"), 10);
            var ok = k === line.a;
            if (!ok) {
              mistakes++;
              b.classList.add("is-ko");
              return;
            }
            b.classList.add("is-ok");
            bubble({ it: line.choices[line.a], tr: line.answerTr || "" }, true);
            Audio2.speak(line.choices[line.a]);
            turn.innerHTML = "";
            i++;
            setTimeout(step, 700);
          });
        });
      }
      step();
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ Dyspozytor ═══════════════ */
  var BUILDERS = {
    mcq: buildMcq, truefalse: buildMcq, multi: buildMulti,
    fill: buildFill, trans: buildFill, cloze: buildCloze,
    order: buildOrder, match: buildMatch, conj: buildConj,
    gender: buildGender, listen: buildListen, speak: buildSpeak,
    dialogue: buildDialogue
  };

  function build(ex, idx, seed) {
    if (ex.t === "truefalse" && !ex.opts) {
      ex = Object.assign({}, ex, { opts: [t("ex.truefalse.true"), t("ex.truefalse.false")], shuffle: false });
    }
    var b = BUILDERS[ex.t];
    if (!b) return { html: '<div class="exq">' + esc(t("ex.unknownType", { t: ex.t })) + "</div>", wire: function () {} };
    return b(ex, idx, seed || "s");
  }

  /** Podpina globalnie przyciski 🔊 wewnątrz kontenera. */
  function wireSpeakers(container) {
    container.addEventListener("click", function (e) {
      var b = e.target.closest("[data-say]");
      if (!b) return;
      e.preventDefault();
      b.classList.add("is-playing");
      Audio2.speak(b.getAttribute("data-say"), {
        onend: function () { b.classList.remove("is-playing"); }
      });
    });
  }

  global.Ex = { build: build, wireSpeakers: wireSpeakers, label: label };

})(window);
