/* ============================================================
   keys.js — pisanie po włosku na cudzej klawiaturze.

   Dwie rzeczy, obie o tarciu, nie o funkcjach:

   1. Pasek znaków. „à è é ì ò ù" i apostrof nie ma na klawiaturze
      polskiej ani amerykańskiej. Bez tego uczeń albo kopiuje znaki
      skądinąd, albo pisze „perche" i dostaje „prawie" — czyli kurs
      karze go za układ klawiatury, nie za znajomość włoskiego.

   2. Skróty. Enter przechodzi dalej, cyfra wybiera odpowiedź.
      Aktywne wyłącznie wtedy, gdy fokus NIE jest w polu tekstowym:
      inaczej „1" w odpowiedzi zaczęłoby klikać opcje.

   Skrypt klasyczny, doczepia się do gotowego DOM. Wymaga core.js.
   ============================================================ */
(function (global) {
  "use strict";

  var Keys = {};

  /* Akcenty włoskie plus apostrof: „l'una", „un'amica", „dell'acqua". */
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

    /* mousedown zamiast click: bez tego pole traci fokus, zanim zdążymy
       wstawić znak, i kursor wraca na koniec albo znika. */
    el.addEventListener("mousedown", function (e) {
      var b = e.target.closest(".keybar__k");
      if (!b || !forInput) return;
      e.preventDefault();
      insert(forInput, b.getAttribute("data-ch"));
    });
    return el;
  }

  /** Wstawia znak w miejscu kursora i zostawia kursor za nim. */
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

  /** Czy w tym polu w ogóle pisze się po włosku. */
  function wantsBar(el) {
    if (!el || el.tagName !== "INPUT") return false;
    if (el.type && el.type !== "text" && el.type !== "search") return false;
    /* Pole wyszukiwania w słowniku i w kursie też przyjmuje włoski. */
    return !!el.closest(".exq, #srsBox, #main");
  }

  function show(input) {
    if (!bar) { bar = buildBar(); document.body.appendChild(bar); }
    forInput = input;
    var r = input.getBoundingClientRect();
    bar.style.left = Math.max(8, Math.min(r.left, global.innerWidth - 260)) + "px";
    bar.style.top = (r.bottom + global.scrollY + 6) + "px";
    bar.hidden = false;
  }

  function hide() {
    if (bar) bar.hidden = true;
    forInput = null;
  }

  /* ---------------- Skróty ---------------- */

  function typing(el) {
    return el && (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable);
  }

  function onKeydown(e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;

    /* Enter idzie dalej, gdy przycisk „dalej" czeka widoczny. Działa też
       z pola tekstowego: tam ćwiczenie jest już sprawdzone i zablokowane. */
    if (e.key === "Enter") {
      var next = document.querySelector(".js-next:not([hidden])");
      if (next) { e.preventDefault(); next.click(); }
      return;
    }

    if (typing(e.target)) return;

    /* Cyfra wybiera odpowiedź. Tylko poza polem tekstowym, inaczej
       „1" wpisane w odpowiedzi klikałoby opcje. */
    if (/^[1-9]$/.test(e.key)) {
      var opts = document.querySelectorAll(".exq .opts .opt");
      var i = parseInt(e.key, 10) - 1;
      if (opts[i]) {
        e.preventDefault();
        /* Samo kliknięcie etykiety, bez ustawiania `checked` z ręki.
           Etykieta i tak przekazuje aktywację swojemu polu, więc ustawienie
           stanu wcześniej przełączało pole DWA RAZY: przy radiu nie było tego
           widać, ale checkbox wracał do stanu wyjściowego i zaznaczenie
           znikało. Wychodziło na jaw tylko wtedy, gdy generator wylosował
           zadanie z wieloma odpowiedziami — czyli losowo. */
        opts[i].click();
      }
    }
  }

  /* ---------------- Montaż ---------------- */

  function install() {
    document.addEventListener("focusin", function (e) {
      if (wantsBar(e.target)) show(e.target); else hide();
    });
    document.addEventListener("focusout", function (e) {
      /* Odsunięte, żeby kliknięcie w pasek zdążyło zadziałać. */
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
