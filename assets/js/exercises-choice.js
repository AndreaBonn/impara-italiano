/* ============================================================
   exercises-choice.js — the types where the student CHOOSES: from a list,
   from pairs, by ear.

   Split out of exercises.js, where fourteen types sat in a single 610-line
   file. The split follows WHAT THE STUDENT DOES, because that is the axis
   on which these types really differ: a choice from a list is checked by
   comparing an index, a typed answer goes through checkOpen with typo
   tolerance, and the voice needs a recording and a similarity threshold.

   The contract is unchanged: a builder returns {html, wire(root, onDone)},
   and `onDone(ok)` is called EXACTLY ONCE. The shared pieces (header,
   check button, ending) come from `Ex.kit`, the dispatcher stays in
   exercises.js. This loads AFTER it, because `Ex.register` is created there.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var kit = Ex.kit;
  var head = kit.head;
  var sayBtn = kit.sayBtn;
  var feedbackBox = kit.feedbackBox;
  var checkBtn = kit.checkBtn;
  var finish = kit.finish;
  var stripTags = kit.stripTags;

  /* ═══════════════ MCQ / TRUEFALSE ═══════════════ */
  function buildMcq(ex, idx, seed) {
    var opts = ex.opts.map(function (o, i) { return { txt: o, i: i }; });
    if (ex.shuffle !== false) opts = Core.seededShuffle(opts, seed + "-" + idx);
    var name = "q" + seed + "_" + idx;

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || "") + (ex.say ? " " + sayBtn(ex.say) : "") + "</p>" +
      (ex.sub ? '<p class="exq__sub">' + esc(ex.sub) + "</p>" : "") +
      '<div class="opts" role="radiogroup" aria-label="' + esc(t("ex.answersGroup")) + '">' +
      opts.map(function (o) {
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



  /* ═══════════════ MULTI (several correct answers) ═══════════════ */
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

  /* ═══════════════ MATCH (pairs) ═══════════════ */
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

  /* ═══════════════ GENDER (article / gender) ═══════════════ */
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

  /* ═══════════════ MINPAIR (minimal pair) ═══════════════ */
  /**
   * One of two words is heard, the student points at which one.
   *
   * ex.a, ex.b — both words; ex.heard — "a" or "b", the one played.
   *
   * Discrimination before production: as long as the ear does not hear the
   * difference between "nonno" and "nono", the mouth will not make it, and
   * correcting pronunciation is policing something the student does not
   * control. Hence a type of its own rather than a "listen" variant: there
   * you write down the sentence you heard, here you choose between two
   * words differing by a single sound.
   *
   * A recording is required. System synthesis confuses exactly the sounds
   * this exercise is about, so falling back to it would not be lower
   * quality but an exercise with no answer.
   */
  function buildMinpair(ex, idx, seed) {
    var opts = Core.seededShuffle([{ k: "a", w: ex.a }, { k: "b", w: ex.b }], seed + "mp" + idx);

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + esc(ex.q || t("ex.minpair.prompt")) + "</p>" +
      '<div class="voice-box" style="text-align:left">' +
      '<button type="button" class="btn btn--green js-play">' + t("ex.minpair.play") + "</button> " +
      '<button type="button" class="btn btn--ghost btn--sm js-slow">' + t("ex.listen.slow") + "</button>" +
      "</div>" +
      '<div class="opts" role="radiogroup" aria-label="' + esc(t("ex.answersGroup")) + '">' +
      opts.map(function (o) {
        return '<label class="opt" data-k="' + o.k + '">' +
          '<input type="radio" name="mp' + seed + "_" + idx + '" value="' + o.k + '">' +
          "<span>" + esc(o.w) + "</span></label>";
      }).join("") + "</div>" + checkBtn() + feedbackBox() + "</div>";

    function wire(root, onDone) {
      var slowo = ex.heard === "b" ? ex.b : ex.a;
      var zagrane = false;

      function graj(rate) {
        zagrane = true;
        Audio2.speak(slowo, rate ? { rate: rate } : {});
      }
      root.querySelector(".js-play").addEventListener("click", function () { graj(); });
      root.querySelector(".js-slow").addEventListener("click", function () { graj(0.6); });

      var labels = root.querySelectorAll(".opt");
      labels.forEach(function (l) {
        l.addEventListener("click", function () {
          labels.forEach(function (x) { x.classList.remove("is-sel"); });
          l.classList.add("is-sel");
        });
      });

      root.querySelector(".js-check").addEventListener("click", function () {
        var sel = root.querySelector('input[name="mp' + seed + "_" + idx + '"]:checked');
        if (!sel) { Core.toast(t("ex.pickOne")); return; }
        /* With nothing listened to there is nothing to check: it would be a
           coin toss recorded in the statistics as knowledge. */
        if (!zagrane) { Core.toast(t("ex.minpair.listenFirst")); return; }

        var ok = sel.value === (ex.heard || "a");
        labels.forEach(function (l) {
          if (l.getAttribute("data-k") === (ex.heard || "a")) l.classList.add("is-ok");
          else if (l.classList.contains("is-sel")) l.classList.add("is-ko");
        });
        finish(root, ok, ex.why, ok ? null : slowo, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  Ex.register("mcq", buildMcq);
  Ex.register("truefalse", buildMcq);
  Ex.register("multi", buildMulti);
  Ex.register("match", buildMatch);
  Ex.register("gender", buildGender);
  Ex.register("minpair", buildMinpair);

})();
