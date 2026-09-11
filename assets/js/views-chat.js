/* ============================================================
   views-chat.js — a conversation nobody wrote in advance.

   The fourteen scenes in `views-talk.js` are authored: every branch, every
   acceptable answer, every mistake worth stopping on. They work without a
   key, they are spoken by real recordings, and a wrong answer stops the
   scene because the scene knows what the right one was.

   None of that is true here, and the differences are the whole design:

   - THERE IS NO RIGHT ANSWER, so nothing stops. The partner answers
     whatever the student says, and the correction arrives BESIDE the reply
     rather than instead of it. A conversation that halts on a mistake is an
     exercise; this is the other thing.
   - NOTHING IS SCORED. No card, no streak, no XP, no lesson marked done.
     There is no path from this screen to the student's progress, and that
     absence is why the mode needs no equivalent of `clamp`.
   - THE PARTNER IS READ BY THE SYSTEM VOICE, when there is one, and the
     screen says so. Its sentences are invented as the conversation goes, so
     they are not in `data/core/` and cannot have recordings: the voice of
     the course is recordings, and this is the one place that is not it.
   - IT COSTS THE STUDENT MONEY, so the turns left are on screen from the
     first line rather than announced when they run out.

   Classic script. Requires core.js, chat-rules.js, chat-run.js, llm.js,
   audio.js, views.js, and data/core/chat-scenarios.js.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;

  /** The scenes, with their titles taken from the interface dictionary. */
  function sceny() { return global.CHAT_SCENARIOS || []; }

  function scena(id) {
    var lista = sceny();
    for (var i = 0; i < lista.length; i++) if (lista[i].id === id) return lista[i];
    return null;
  }

  /* ═══════════════════ The list ═══════════════════ */

  Views.chiacchiere = function (params) {
    if (params && params.id) return prowadz(scena(params.id));

    var lista = sceny();
    if (!lista.length) { set(Views.shell.empty(t("chat.none"))); return; }

    /* The sentence about what this costs and what it needs comes BEFORE the
       list, not after the first turn. It is the same principle as the exam:
       whoever finds out at the end has spent the session on a false
       expectation — except that here the expectation costs money. */
    set(pageHead(t("chat.kicker"), t("chat.title"), t("chat.intro")) +
      '<div class="callout callout--trap"><b>' + esc(t("chat.needsKeyLabel")) + "</b> " +
      esc(t(global.Llm && Llm.available() ? "chat.needsKeyOn" : "chat.needsKeyOff")) + "</div>" +
      '<div class="stack">' + lista.map(function (s) {
        return '<button class="list-row" data-scena="' + esc(s.id) + '" style="text-align:left;cursor:pointer;width:100%">' +
          '<span style="font-size:1.6rem">' + esc(s.icon) + "</span>" +
          '<span class="list-row__main"><b>' + esc(t("chat.sc." + s.id)) + "</b>" +
          "<span>" + esc(s.apertura) + "</span></span>" +
          '<span class="chip chip--cefr">' + esc(s.cefr) + "</span></button>";
      }).join("") + "</div>");

    el().querySelectorAll("[data-scena]").forEach(function (b) {
      b.addEventListener("click", function () {
        App.go("chiacchiere", { id: b.getAttribute("data-scena") });
      });
    });
  };

  /* ═══════════════════ One conversation ═══════════════════ */

  function prowadz(sc) {
    if (!sc) { set(Views.shell.empty(t("chat.notFound"))); return; }

    var run = ChatRun.create(sc);

    /* Whether this scene is still on screen. The reply lands seconds later
       and the student may be elsewhere by then; drawing into a view that has
       been replaced writes into a detached node and spends a turn nobody
       sees. Same guard, same reason, as views-talk.js. */
    var zywy = true;
    Views.onLeave = function () { zywy = false; Audio2.stop(); };

    set('<button class="btn btn--ghost btn--sm js-back" style="margin-bottom:18px">' + t("chat.backToList") + "</button>" +
      /* The kicker names the MODE and the heading names the scene. Both
         holding the scene's name printed it twice, one line under the other,
         which reads as a mistake rather than as emphasis. */
      pageHead(sc.cefr + " · " + t("chat.title"), esc(t("chat.sc." + sc.id)), esc(sc.situazione || "")) +
      '<div class="card"><div class="dlg js-dlg"></div>' +
      '<p class="chat-left js-left" role="status" aria-live="polite"></p>' +
      '<div class="js-turn" style="margin-top:20px"></div></div>');

    el().querySelector(".js-back").addEventListener("click", function () {
      Audio2.stop();
      App.go("chiacchiere");
    });

    var dlg = el().querySelector(".js-dlg");
    var turn = el().querySelector(".js-turn");
    var left = el().querySelector(".js-left");

    /**
     * One bubble.
     *
     * `textContent` for everything that came from outside: the partner's
     * reply and its correction are written by a model that has just read
     * what the student typed, and they are the only strings on this screen
     * the course did not write. The markup around them is ours; the words
     * are never markup.
     */
    function bolla(tekst, mine, korekta) {
      var d = global.document.createElement("div");
      d.className = "dlg__line" + (mine ? " dlg__line--b" : "");

      var kto = global.document.createElement("div");
      kto.className = "dlg__who";
      kto.setAttribute("aria-hidden", "true");
      kto.textContent = mine ? "🙋" : (run.scenario.icon || "💬");

      var box = global.document.createElement("div");
      box.className = "dlg__bubble";
      var linia = global.document.createElement("span");
      linia.className = "dlg__it";
      linia.textContent = tekst;
      box.appendChild(linia);

      if (korekta) {
        var k = global.document.createElement("span");
        k.className = "chat-fix";
        k.textContent = korekta;
        box.appendChild(k);
      }

      d.appendChild(kto);
      d.appendChild(box);
      dlg.appendChild(d);
      d.scrollIntoView({ behavior: "smooth", block: "nearest" });
      return d;
    }

    function odswiezLicznik() {
      left.textContent = t("chat.left", { n: run.zostalo });
    }

    /* The opening line is written, not generated: without it the first move
       belongs to a student staring at an empty field. */
    bolla(sc.apertura, false, "");
    if (Core.state.settings.autoplay) Audio2.speak(sc.apertura);
    odswiezLicznik();
    rysujPole();

    function rysujPole() {
      if (run.koniec) return koniecRozmowy();

      turn.innerHTML =
        '<div class="voice-box">' +
        '<div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">' +
        '<input type="text" class="field js-in" style="max-width:420px" placeholder="' +
        esc(t("chat.placeholder")) + '" autocomplete="off">' +
        '<button class="btn btn--primary js-send">' + t("chat.send") + "</button></div>" +
        '<p class="voice-heard js-state" role="status"></p></div>';

      var input = turn.querySelector(".js-in");
      var send = turn.querySelector(".js-send");
      var stan = turn.querySelector(".js-state");

      /* One question in flight at a time. Two would each commit a turn, and
         the two replies would arrive in whichever order the network decided:
         the conversation would answer the second line before the first. */
      var czeka = false;

      function wyslij() {
        var tekst = input.value.trim();
        if (!tekst || czeka) return;
        if (!global.Llm || !Llm.available()) { stan.textContent = t("chat.needsKeyOff"); return; }

        czeka = true;
        send.disabled = true;
        input.disabled = true;
        stan.textContent = t("chat.waiting");
        run.dodajStudenta(tekst);
        bolla(tekst, true, "");
        input.value = "";

        Llm.chat({
          scenario: run.scenario,
          cefr: run.scenario.cefr,
          message: tekst,
          history: run.historia.slice(0, -1)
        }, function (turnData) {
          if (!zywy) return;
          czeka = false;

          if (!turnData) {
            /* Nothing came back: give the turn back rather than spend it on
               a conversation that did not happen, and take the line off the
               screen so the student is not left talking to nobody. */
            run.cofnijStudenta();
            if (dlg.lastChild) dlg.removeChild(dlg.lastChild);
            send.disabled = false;
            input.disabled = false;
            input.value = tekst;
            stan.textContent = t("chat.failed");
            odswiezLicznik();
            return;
          }

          run.dodajPartnera(turnData);
          bolla(turnData.risposta, false, turnData.correzione);
          if (Core.state.settings.autoplay) Audio2.speak(turnData.risposta);
          odswiezLicznik();
          rysujPole();
        });
      }

      send.addEventListener("click", wyslij);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") wyslij(); });
      input.focus();
    }

    /**
     * The end of a conversation: the corrections gathered in one place.
     *
     * Not a score and not a percentage — there is nothing here to be right
     * about. What the student gets is the list of things the partner
     * corrected, which is the only thing this scene produced that is worth
     * reading twice.
     */
    function koniecRozmowy() {
      var korekty = run.korekty;
      turn.innerHTML = '<div class="summary">' +
        '<p class="summary__msg">' + esc(t("chat.over", { n: run.tury })) + "</p>" +
        (korekty.length
          ? '<ul class="cils-check js-fixes"></ul>'
          : '<p class="cils-hint">' + esc(t("chat.noFixes")) + "</p>") +
        '<div class="summary__acts">' +
        '<button class="btn btn--primary js-again">' + t("chat.again") + "</button>" +
        '<button class="btn btn--ghost js-list">' + t("chat.others") + "</button></div></div>";

      var ul = turn.querySelector(".js-fixes");
      if (ul) korekty.forEach(function (k) {
        var li = global.document.createElement("li");
        li.textContent = k;
        ul.appendChild(li);
      });

      turn.querySelector(".js-again").addEventListener("click", function () {
        App.go("chiacchiere", { id: run.scenario.id });
      });
      turn.querySelector(".js-list").addEventListener("click", function () { App.go("chiacchiere"); });
      left.textContent = "";
    }
  }

})(window);
