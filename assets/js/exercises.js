/* ============================================================
   exercises.js — the exercise dispatcher and the pieces common to all.

   The contract: Ex.build(ex, idx, seed) -> { html, wire(root, onDone) }
   onDone(ok:boolean) is called EXACTLY ONCE, after checking. The lesson
   progress counter rests on that, and so does the mistake capture in
   errors.js, which wraps Ex.build.

   Fourteen types live in three files next door, grouped by what the
   student does: exercises-choice.js (chooses), exercises-text.js
   (writes), exercises-voice.js (speaks and listens). Each of them calls
   `Ex.register`, so adding a type touches one file, and not this one.

   The dispatcher asks the registry ONLY when an exercise is built, so the
   loading order among the families does not matter — as long as they all
   come in before the first lesson. A forgotten <script> does not bring
   the course down: it produces an "unknown type" exercise, and that is
   what the test building every type present in the data is for
   (tests/dom/exercises.spec.js).
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };

  /** The name of an exercise type — a dictionary key, not a string. */
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

  /** The shared ending of an exercise. */
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

  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ""); }

  /* ═══════════════ Dispatcher ═══════════════ */
  var BUILDERS = {};

  /** Adds a type to the registry. Called from the family files as they load. */
  function register(type, builder) { BUILDERS[type] = builder; }

  function build(ex, idx, seed) {
    if (ex.t === "truefalse" && !ex.opts) {
      ex = Object.assign({}, ex, { opts: [t("ex.truefalse.true"), t("ex.truefalse.false")], shuffle: false });
    }
    var b = BUILDERS[ex.t];
    if (!b) return { html: '<div class="exq">' + esc(t("ex.unknownType", { t: ex.t })) + "</div>", wire: function () {} };
    return b(ex, idx, seed || "s");
  }

  /** Wires up the 🔊 buttons inside a container, globally. */
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

  /* Pieces shared by the type families. This is not the public API of the
     course: outside the exercises-*.js files nobody calls it, and there is
     no reason to. */
  var kit = {
    head: head, sayBtn: sayBtn, feedbackBox: feedbackBox, checkBtn: checkBtn,
    finish: finish, stripTags: stripTags
  };

  global.Ex = {
    build: build, wireSpeakers: wireSpeakers, label: label,
    register: register, kit: kit
  };

})(window);
