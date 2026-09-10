/* ============================================================
   views-talk.js — spoken conversations: the scene list and the scene itself.

   Pulled out of views.js with no change of behaviour. There is one reason
   and the length shows it: the conversation engine grew branches, a return
   to the last choice and stopping the scene on a wrong answer, and at 277
   lines it was the biggest block of a file housing fifteen other screens. A
   separate file does not make it shorter, but it stops mixing it with the
   rest.

   The view shell (`set`, `pageHead`, `el`, `empty`) comes from
   `Views.shell`, the same as in views-shadow.js and views-train.js — three
   copies of the same four functions would drift apart at the first change
   to the header.

   The RUN of the scene itself (where we are, the result, the branches, the
   return to the last choice) sits in talk-run.js. What is left here is what
   you see: the bubbles, the answer field, the microphone and the summary.
   The split follows testability, not length — that half can be played to
   the end in node:test, this one needs a browser.

   Classic script. Requires core.js, audio.js, exercises.js, talk-run.js,
   views.js (after it, because it consumes Views.shell) and the data from
   data/core/conversations.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  var empty = Views.shell.empty;

  Views.conversazione = function (params) {
    var all = global.CONVERSATIONS || [];
    if (params && params.id) return runConversation(all.filter(function (c) { return c.id === params.id; })[0]);

    set(pageHead(t("talk.kicker"), t("nav.talk"), t("talk.intro")) +
      (Audio2.sttSupported ? "" :
        '<div class="callout callout--trap"><b>' + t("talk.noSttLabel") + "</b> " + t("talk.noStt") + "</div>") +
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
    if (!conv) { set(empty(t("talk.notFound"))); return; }

    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">' + t("talk.backToList") + "</button>" +
      pageHead(conv.cefr + " · " + conv.title, conv.titleIt, conv.setting) +
      '<div class="card"><div class="dlg js-dlg"></div><div class="js-turn" style="margin-top:20px"></div></div>');

    el().querySelector(".js-back").addEventListener("click", function () { Audio2.stop(); App.go("conversazione"); });

    var dlg = el().querySelector(".js-dlg");
    var turn = el().querySelector(".js-turn");

    /* The run (where we are, the result, the branches, the return) sits in
       talk-run.js: it does not touch the DOM and can be played to the end in
       a test, which cannot be done with this file other than in a browser. */
    var run = Talk.create(conv);

    /* Without speech recognition the note about it stands HERE, in the
       scene, and not only in the conversation list: the student enters a
       scene and sees only a text field, so a missing microphone looks like a
       fault rather than like missing browser support. Once per run, not at
       every turn — repeated under ten successive lines it stops being
       information. */
    var notaSttPokazana = false;

    /* Whether this scene is still on screen.
       The second opinion answers seconds after it was asked, and by then the
       student may be somewhere else entirely — the exam, the settings, a
       different conversation. A verdict that draws into a view that has been
       replaced writes into a detached node at best; at worst it commits a
       turn in a run nobody is playing any more and the score of the NEXT
       scene starts wrong. The router calls `Views.onLeave` on the way out,
       which is where this is turned off. */
    var zywy = true;
    Views.onLeave = function () { zywy = false; };

    function bubble(it, pl, mine) {
      var d = document.createElement("div");
      d.className = "dlg__line" + (mine ? " dlg__line--b" : "");
      d.innerHTML = '<div class="dlg__who" aria-hidden="true">' + (mine ? "🙋" : esc(conv.icon)) + "</div>" +
        '<div class="dlg__bubble"><span class="dlg__it">' + esc(it) +
        ' <button type="button" class="say-btn" data-say="' + esc(it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button></span>' +
        (pl ? '<span class="dlg__pl">' + esc(pl) + "</span>" : "") + "</div>";
      dlg.appendChild(d);
      Ex.wireSpeakers(d);
      d.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    function step() {
      if (run.done) return finishConv();
      var turnData = run.current();
      if (!run.mine()) {
        bubble(turnData.it, turnData.tr, false);
        run.advance();
        Audio2.speak(turnData.it, { onend: function () { setTimeout(step, 260); } });
        return;
      }
      renderTurn(turnData);
    }

    /* At a branch both possibilities are SHOWN. This is not a memory test:
       the student is meant to decide what to say, not to guess what the
       course expects. The microphone and the text field stay — clicking is a
       shortcut, not the only road, so the scene can still be played by
       voice. */
    function podpowiedziWyboru(opcje) {
      return '<p class="voice-pl" style="margin-bottom:10px">' + esc(t("talk.chooseOne")) + "</p>" +
        '<div class="dlg-opts">' + opcje.map(function (o) {
          /* We send the TEXT OF THE HINT, not the answer key: the keys are
             written without capitals and without punctuation, for comparison,
             and in a bubble they would look like a carelessly written
             sentence. `norm()` inside `similarity` reduces one to the other
             anyway. */
          var wzor = o.hintIt || (o.accept && o.accept[0]) || "";
          return '<button type="button" class="dlg-opt js-opt" data-opt="' + esc(wzor) + '">' +
            "<i>" + esc(o.hintIt || wzor) + "</i>" +
            (o.tr ? "<span>" + esc(o.tr) + "</span>" : "") + "</button>";
        }).join("") + "</div>";
    }

    // the parameter is called turnData, not t: `t` is the translation helper in this file
    function renderTurn(turnData) {
      /* The mark of a return point is the length of the transcript: after
         returning to a branch we cut the bubbles exactly where the student
         was choosing. */
      run.beginTurn(dlg.children.length);
      var opcje = turnData.opts || null;
      turn.innerHTML =
        '<div class="voice-box">' +
        '<p style="font-weight:600;margin:0 0 4px">' + esc(t("talk.yourTurn", { task: turnData.task })) + "</p>" +
        (opcje ? podpowiedziWyboru(opcje) :
          /* The hint is in the STUDENT'S LANGUAGE, not in Italian. An
             Italian sentence in this place turned the conversation into
             copying: the student read a ready-made line and sent it back, so
             the scene tested eyesight rather than knowledge of the language.
             The translation of that line ALREADY EXISTS in the overlay
             (`turns[].tr`, all five languages) and had so far been used only
             in the bubble — not one string had to be added.
             The Italian model stays under "Show the answer", that is where
             the student reaches for it deliberately. */
          (turnData.tr
            ? '<p class="voice-pl" style="margin-bottom:14px">' + t("ex.hintLabel", { hint: "<i>" + esc(turnData.tr) + "</i>" }) + "</p>"
            : "")) +
        (Audio2.sttSupported
          ? '<button type="button" class="mic js-mic" aria-label="' + esc(t("talk.speak")) + '">🎤</button><p class="voice-heard js-heard">' + t("talk.tapAndSpeak") + "</p>"
          : notaSttPokazana ? ""
            : '<div class="callout callout--trap"><b>' + t("talk.noSttLabel") + "</b> " + t("talk.noStt") + "</div>") +
        '<div style="margin-top:12px;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' +
        '<input type="text" class="field js-in" style="max-width:340px" placeholder="' + esc(t(Audio2.sttSupported ? "talk.orType" : "talk.typeAnswer")) + '" autocomplete="off" spellcheck="false">' +
        '<button class="btn btn--primary js-send">' + t("talk.send") + "</button>" +
        '<button class="btn btn--quiet js-skip">' + t("talk.reveal") + "</button></div>" +
        '<div class="fb js-fb" role="status"></div></div>';

      if (!Audio2.sttSupported) notaSttPokazana = true;

      var heard = turn.querySelector(".js-heard");
      var input = turn.querySelector(".js-in");
      var fb = turn.querySelector(".js-fb");

      /* A wrong answer STOPS the scene. Before, the conversation went on,
         except that the bubble held the model line instead of what the
         student said: on screen it looked like a pass, so a mistake had no
         consequence at all, and with the microphone you could not even tell
         something had gone wrong. There is one deliberate way out of the
         loop: "Show the answer".

         `zPola` says whether the answer came from the keyboard or from the
         microphone. The focus returns to the field ONLY in the first case:
         after speaking it would push the system keyboard and the accent bar
         onto a phone under a scene the student did not want to type in at
         all (the same conclusion as in views-lookup.js). The caret goes to
         the end and does not select everything: after a mistake you usually
         correct one word, and a full selection is lost at the first
         keystroke. */
      function odrzuc(wynik, zPola, komentarz) {
        if (wynik.pierwszaPomylka) Core.recordAnswer(false);
        fb.className = "fb js-fb fb--ko is-on";
        /* textContent, not innerHTML: `komentarz` is written by a model
           that has just read a sentence the student typed. It is the one
           string on this screen the course did not write, and the box it
           lands in is the same one the course fills with its own markup
           elsewhere — which is exactly how this would become an XSS. */
        fb.textContent = komentarz || t("talk.tryAgain");
        if (zPola) {
          input.focus();
          input.setSelectionRange(input.value.length, input.value.length);
        }
      }

      /** Moving on: the text from the run lands in the bubble, the scene proceeds. */
      function idzDalej(wynik) {
        bubble(wynik.tekst, wynik.tr, true);
        turn.innerHTML = "";
        setTimeout(step, 420);
      }

      /* True while a second opinion is on its way. It blocks a second send:
         the field stays live during the wait, and two answers in flight
         would each commit a turn — the scene would jump two lines and score
         twice for one sentence. */
      var czekaNaSad = false;

      /**
       * The student's answer.
       *
       * The local comparison decides first and, when it accepts, decides
       * alone: nothing leaves the browser for an answer the course already
       * counted as right. Only a rejection is worth a question, and only
       * when the student has set the judge up at all — otherwise this is
       * the course exactly as it was.
       */
      function accept(text, zPola) {
        if (czekaNaSad) return;
        var wynik = run.judge(text);
        if (wynik.ok) {
          Core.recordAnswer(true);
          return idzDalej(run.commit(text, wynik.opcja));
        }
        if (!Llm.available()) return odrzuc(run.reject(), zPola);
        zapytajSedziego(text, wynik, zPola);
      }

      /**
       * Asks the model about an answer the course rejected.
       *
       * Two things are checked before the verdict is allowed to do
       * anything, because it arrives seconds later and the student has not
       * been sitting still: the view may have been left (`zywy`), and the
       * scene may have moved on by another road — "show the answer", a
       * branch, a rewind. Both are compared against the turn we asked
       * about, not against the clock: acting on a verdict for a line that
       * scrolled past would move the scene somewhere nobody chose.
       */
      function zapytajSedziego(text, wynik, zPola) {
        var pytanyIndeks = run.index;
        czekaNaSad = true;
        fb.className = "fb js-fb is-on";
        fb.textContent = t("talk.checking");

        Llm.judge({
          question: turnData.task || "",
          accepted: run.accepted(),
          given: text
        }, function (verdict) {
          czekaNaSad = false;
          if (!zywy || run.index !== pytanyIndeks) return;
          if (verdict && verdict.promote) {
            Core.recordAnswer(true);
            /* The comment goes through the toast, which writes with
               textContent. It is the only string on this screen that comes
               from outside the course, and the feedback box next to it is
               filled with innerHTML for the course's own markup. */
            if (verdict.comment) Core.toast(verdict.comment);
            return idzDalej(run.commit(text, wynik.opcja));
          }
          odrzuc(run.reject(), zPola, verdict && verdict.comment);
        });
      }

      /* Giving up: the model line enters the transcript and the scene moves on, with no point. */
      function ujawnij() {
        var wynik = run.reveal();
        if (wynik.pierwszaPomylka) Core.recordAnswer(false);
        Audio2.speak(wynik.tekst);
        idzDalej(wynik);
      }

      /* A click on a branch does NOT go through the similarity threshold:
         the student picked a line from a list, so there is nothing to grade,
         and since a wrong answer stops the scene, running the click through
         the comparison could block the choice on the course's own
         suggestion. */
      if (opcje) turn.querySelectorAll(".js-opt").forEach(function (b, n) {
        b.addEventListener("click", function () {
          var wynik = run.choose(n);
          Core.recordAnswer(true);
          idzDalej(wynik);
        });
      });

      if (Audio2.sttSupported) {
        var mic = turn.querySelector(".js-mic");
        mic.addEventListener("click", function () {
          heard.textContent = t("ex.stt.listening");
          mic.classList.add("is-rec");
          Audio2.listen({
            oninterim: function (x) { heard.innerHTML = "…" + esc(x); },
            onerror: function (e) { mic.classList.remove("is-rec"); heard.textContent = t(e === "not-allowed" ? "ex.stt.denied" : "ex.stt.failed"); },
            onend: function (text) {
              mic.classList.remove("is-rec");
              if (!text) { heard.textContent = t("ex.stt.nothing"); return; }
              heard.innerHTML = t("ex.stt.heard", { text: "<b>" + esc(text) + "</b>" });
              setTimeout(function () { accept(text); }, 500);
            }
          });
        });
      }
      turn.querySelector(".js-send").addEventListener("click", function () {
        if (!input.value.trim()) { Core.toast(t("talk.emptyAnswer")); return; }
        accept(input.value.trim(), true);
      });
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") turn.querySelector(".js-send").click(); });
      turn.querySelector(".js-skip").addEventListener("click", ujawnij);
    }

    /* A return to the last branch, not to the beginning. The branch you did
       not take is what branches are for in the first place; making someone
       replay the whole dialogue to see it means showing it to nobody. */
    function wrocDoWyboru() {
      var w = run.rewind();
      if (!w) return;
      while (dlg.children.length > w.znak) dlg.removeChild(dlg.lastChild);
      turn.innerHTML = "";
      step();
    }

    function finishConv() {
      var score = run.score, turns = run.turns, maGalezie = run.canRewind;
      Core.recordLesson("conv-" + conv.id, score, Math.max(turns, 1), 0);
      App.refreshRail();
      turn.innerHTML = '<div class="summary"><div class="summary__score">' + score + "/" + turns + "</div>" +
        '<p class="summary__msg">' + esc(conv.closing || t("talk.defaultClosing")) + "</p>" +
        '<div class="summary__acts">' +
        (maGalezie ? '<button class="btn btn--primary js-branch">' + t("talk.otherBranch") + "</button>" : "") +
        '<button class="btn ' + (maGalezie ? "btn--ghost" : "btn--primary") + ' js-again">' + t("talk.again") + "</button>" +
        '<button class="btn btn--ghost js-list">' + t("talk.others") + "</button></div></div>";
      var gal = turn.querySelector(".js-branch");
      if (gal) gal.addEventListener("click", wrocDoWyboru);
      turn.querySelector(".js-again").addEventListener("click", function () { App.go("conversazione", { id: conv.id }); });
      turn.querySelector(".js-list").addEventListener("click", function () { App.go("conversazione"); });
    }

    step();
  }

})(window);
