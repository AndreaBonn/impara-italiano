/* ============================================================
   exercises-voice.js — typy z głosem: dyktando, wymowa, rozmowa z wyborem kwestii.

   Wydzielone z exercises.js, w którym czternaście typów leżało w jednym
   pliku na 610 linii. Podział idzie po tym, CO ROBI UCZEŃ, bo to jest oś,
   na której te typy naprawdę się różnią: wybór z listy sprawdza się
   porównaniem indeksu, wpisana odpowiedź przechodzi przez checkOpen z
   tolerancją literówki, a głos wymaga nagrania i progu podobieństwa.

   Kontrakt bez zmian: builder oddaje {html, wire(root, onDone)}, a
   `onDone(ok)` woła się DOKŁADNIE RAZ. Wspólne kawałki (nagłówek, przycisk
   sprawdzania, zakończenie) przychodzą z `Ex.kit`, dyspozytor zostaje w
   exercises.js. Ładuje się PO nim, bo `Ex.register` powstaje tam.
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
            oninterim: function (partial) { heard.innerHTML = "…" + esc(partial); },
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

  Ex.register("listen", buildListen);
  Ex.register("speak", buildSpeak);
  Ex.register("dialogue", buildDialogue);

})();
