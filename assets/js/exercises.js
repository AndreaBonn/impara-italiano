/* ============================================================
   exercises.js — dyspozytor ćwiczeń i kawałki wspólne dla wszystkich.

   Kontrakt: Ex.build(ex, idx, seed) -> { html, wire(root, onDone) }
   onDone(ok:boolean) wywoływane DOKŁADNIE RAZ, po sprawdzeniu. Na tym
   opiera się licznik postępu lekcji i przechwytywanie błędów w errors.js,
   które owija Ex.build.

   Czternaście typów mieszka w trzech plikach obok, po tym, co robi uczeń:
   exercises-choice.js (wybiera), exercises-text.js (pisze),
   exercises-voice.js (mówi i słucha). Każdy z nich woła `Ex.register`,
   więc dołożenie typu to jeden plik, nie ten.

   Dyspozytor pyta o rejestr DOPIERO przy budowaniu ćwiczenia, więc
   kolejność ładowania rodzin między sobą jest obojętna — byle wszystkie
   weszły przed pierwszą lekcją. Zapomniany <script> nie wywraca kursu:
   daje ćwiczenie „nieznany typ", i po to jest test, który buduje każdy typ
   obecny w danych (tests/dom/exercises.spec.js).
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

  function stripTags(s) { return String(s).replace(/<[^>]+>/g, ""); }

  /* ═══════════════ Dyspozytor ═══════════════ */
  var BUILDERS = {};

  /** Dokłada typ do rejestru. Woła się z plików rodzin, przy ich wczytaniu. */
  function register(type, builder) { BUILDERS[type] = builder; }

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

  /* Kawałki wspólne dla rodzin typów. Nie jest to publiczne API kursu:
     poza plikami exercises-*.js nikt tego nie woła i nie ma powodu. */
  var kit = {
    head: head, sayBtn: sayBtn, feedbackBox: feedbackBox, checkBtn: checkBtn,
    finish: finish, stripTags: stripTags
  };

  global.Ex = {
    build: build, wireSpeakers: wireSpeakers, label: label,
    register: register, kit: kit
  };

})(window);
