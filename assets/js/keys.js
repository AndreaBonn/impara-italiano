/* ============================================================
   keys.js — typing Italian on somebody else's keyboard.

   Two things, both about friction rather than features:

   1. The character bar. "à è é ì ò ù" and the apostrophe are not on a
      Polish or an American keyboard. Without this the student either
      copies characters from elsewhere or writes "perche" and gets
      "almost" — that is, the course punishes them for their keyboard
      layout rather than for their Italian.

   2. Shortcuts. Enter moves on, a digit picks an answer. Active only when
      the focus is NOT in a text field: otherwise a "1" typed in an answer
      would start clicking options.

   Classic script, attaches to a ready DOM. Requires core.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Keys = {};

  /* The Italian accents plus the apostrophe: "l'una", "un'amica", "dell'acqua". */
  var CHARS = ["à", "è", "é", "ì", "ò", "ù", "'"];

  var bar = null;
  var forInput = null;

  function buildBar() {
    var el = document.createElement("div");
    el.className = "keybar";
    el.setAttribute("role", "group");
    el.setAttribute("aria-label", global.I18n ? I18n.t("keys.barLabel") : "");
    el.innerHTML = CHARS.map(function (c) {
      return '<button type="button" class="keybar__k" data-ch="' + c + '" tabindex="-1">' + c + "</button>";
    }).join("");

    /* mousedown instead of click: without it the field loses focus before
       we manage to insert the character, and the caret jumps to the end or
       disappears. */
    el.addEventListener("mousedown", function (e) {
      var b = e.target.closest(".keybar__k");
      if (!b || !forInput) return;
      e.preventDefault();
      insert(forInput, b.getAttribute("data-ch"));
    });
    return el;
  }

  /** Inserts a character at the caret and leaves the caret after it. */
  function insert(input, ch) {
    var start = input.selectionStart, end = input.selectionEnd;
    if (start === null || start === undefined) {
      input.value += ch;
    } else {
      input.value = input.value.slice(0, start) + ch + input.value.slice(end);
      input.selectionStart = input.selectionEnd = start + ch.length;
    }
    input.focus();
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }

  /** Whether Italian is typed in this field at all. */
  function wantsBar(el) {
    if (!el || el.tagName !== "INPUT") return false;
    if (el.type && el.type !== "text" && el.type !== "search") return false;
    /* The search field in the dictionary and in the course takes Italian too. */
    return !!el.closest(".exq, #srsBox, #main");
  }

  /**
   * The bar sits ABOVE the field, not below it.
   *
   * Below the field there is usually the "check" button, and the bar is a
   * floating element: it covered the button and the student could not
   * submit their answer until they clicked somewhere else. Above the field
   * there is the prompt and the label, that is nothing clickable. When
   * there is no room above (a field right under the window edge) we fall
   * back below — there, having no room is worse than a covered button.
   */
  var ODSTEP = 6;

  function show(input) {
    if (!bar) { bar = buildBar(); document.body.appendChild(bar); }
    forInput = input;
    bar.hidden = false;

    var r = input.getBoundingClientRect();
    var h = bar.offsetHeight || 56;
    var nadMiejsce = r.top - h - ODSTEP;
    var gora = nadMiejsce >= 0 ? nadMiejsce : r.bottom + ODSTEP;

    bar.style.left = Math.max(8, Math.min(r.left, global.innerWidth - bar.offsetWidth - 8)) + "px";
    bar.style.top = (gora + global.scrollY) + "px";
  }

  function hide() {
    if (bar) bar.hidden = true;
    forInput = null;
  }

  /* ---------------- Shortcuts ---------------- */

  function typing(el) {
    return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
  }

  function onKeydown(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    /* Enter moves on when the "next" button is visible and waiting. It
       works from a text field too: there the exercise is already checked
       and locked. */
    if (e.key === "Enter") {
      var next = document.querySelector(".js-next:not([hidden])");
      if (next) { e.preventDefault(); next.click(); }
      return;
    }

    if (typing(e.target)) return;

    /* A digit picks an answer. Only outside a text field, otherwise a "1"
       typed into an answer would click the options. */
    if (/^[1-9]$/.test(e.key)) {
      var opts = document.querySelectorAll(".exq .opts .opt");
      var i = parseInt(e.key, 10) - 1;
      if (opts[i]) {
        e.preventDefault();
        /* Just clicking the label, without setting `checked` by hand. The
           label forwards the activation to its input anyway, so setting the
           state beforehand toggled the input TWICE: with a radio you could
           not see it, but a checkbox went back to its initial state and the
           selection disappeared. It only surfaced when the generator drew a
           multiple-answer task — that is, at random. */
        opts[i].click();
      }
    }
  }

  /* ---------------- Mounting ---------------- */

  function install() {
    document.addEventListener("focusin", function (e) {
      if (wantsBar(e.target)) show(e.target); else hide();
    });
    document.addEventListener("focusout", function () {
      /* Deferred, so that a click on the bar has time to take effect. */
      global.setTimeout(function () {
        if (!document.activeElement || !wantsBar(document.activeElement)) hide();
      }, 120);
    });
    global.addEventListener("scroll", function () { if (forInput) show(forInput); }, true);
    global.addEventListener("resize", hide);
    document.addEventListener("keydown", onKeydown);
  }

  Keys.CHARS = CHARS;
  Keys.install = install;
  Keys.insert = insert;

  global.Keys = Keys;

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", install);
  else install();

})(window);
