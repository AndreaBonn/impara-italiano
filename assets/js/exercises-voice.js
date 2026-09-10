/* ============================================================
   exercises-voice.js — the types with voice: dictation, pronunciation, a
   dialogue where you pick your line.

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

  /* ═══════════════ LISTEN (dictation) ═══════════════ */
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

  /* ═══════════════ SPEAK (pronunciation) ═══════════════ */
  function buildSpeak(ex, idx) {
    var supported = Audio2.sttSupported;

    function poleTekstowe() {
      return '<input type="text" class="field js-in" placeholder="' + esc(t("ex.speak.ph")) + '" autocomplete="off" spellcheck="false">';
    }

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.speak.prompt") + "</p>" +
      '<div class="voice-box">' +
      '<p class="voice-target">' + esc(ex.it) + " " + sayBtn(ex.it) + "</p>" +
      '<p class="voice-pl">' + esc(ex.tr || "") + "</p>" +
      (supported
        ? '<button type="button" class="mic js-mic" aria-label="' + esc(t("ex.speak.mic")) + '">🎤</button>' +
          '<p class="voice-heard js-heard">' + t("ex.speak.hint") + "</p>"
        : '<p class="voice-heard js-heard">' + t("ex.speak.noStt") + "</p>" + poleTekstowe()) +
      "</div>" +
      '<div style="margin-top:14px">' + checkBtn(supported ? t("ex.speak.pass") : t("ex.check")) + "</div>" +
      feedbackBox() + "</div>";

    function wire(root, onDone) {
      var score = -1;
      var pisane = !supported;

      /* Consent refused: audio.js promises we then behave exactly as without
         support, and the written branch was already chosen when this markup
         was built. Nobody would rewrite it on its own, so the refusal left a
         microphone the student had just declined and a check button that
         demanded a recording — an exercise with no way out. */
      function naPisanie() {
        pisane = true;
        var box = root.querySelector(".voice-box");
        box.querySelector(".js-mic").remove();
        box.querySelector(".js-heard").textContent = t("ex.stt.noConsent");
        box.insertAdjacentHTML("beforeend", poleTekstowe());
        root.querySelector(".js-check").textContent = t("ex.check");
      }

      if (supported) {
        var mic = root.querySelector(".js-mic");
        var heard = root.querySelector(".js-heard");
        var rec = null;
        mic.addEventListener("click", function () {
          if (mic.classList.contains("is-rec")) { rec && rec.abort(); mic.classList.remove("is-rec"); return; }
          heard.textContent = t("ex.stt.listening");
          mic.classList.add("is-rec");
          rec = Audio2.listen({
            oninterim: function (partial) { heard.innerHTML = "…" + esc(partial); },
            onerror: function (err) {
              mic.classList.remove("is-rec");
              if (err === "no-consent") { naPisanie(); return; }
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
        if (!pisane) {
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

  /* ═══════════════ DIALOGUE (you listen and answer) ═══════════════ */
  function buildDialogue(ex, idx) {
    // ex.lines: [{sp:"A"|"TY", it, pl, choices?:[...], a?:int}]  ("TY" = the student's turn)
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
        // the student's turn
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

  Ex.register("listen", buildListen);
  Ex.register("speak", buildSpeak);
  Ex.register("dialogue", buildDialogue);

})();
