/* ============================================================
   views.js — skorupa ekranów: montaż w #main i wspólne kawałki HTML.

   Był to plik z ośmioma ekranami naraz. Każdy z nich mieszka teraz w
   swoim views-*.js, tak jak od dawna mieszkały rozmowy, trening i sesja
   dnia. Tutaj zostało to, co wszystkie dzielą — i `runCards`, przebieg
   talii fiszek, którego używają dwa ekrany (powtórki i sesja dnia).

   `Views.shell` powstaje na KOŃCU tego pliku, więc wszystkie moduły
   ekranów muszą ładować się po nim. Kolejność między nimi jest obojętna:
   każdy dokłada własną trasę do `Views` i nie czyta pozostałych.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var Views = {};
  var mount = null;

  function el() { return mount || (mount = document.getElementById("main")); }

  function set(html) {
    var m = el();
    m.innerHTML = html;
    Ex.wireSpeakers(m);
    m.scrollTop = 0;
    global.scrollTo(0, 0);
    return m;
  }

  function pageHead(kicker, title, sub) {
    return '<header class="view-head">' +
      (kicker ? '<p class="view-head__kicker">' + esc(kicker) + "</p>" : "") +
      "<h1>" + esc(title) + "</h1>" +
      (sub ? "<p>" + esc(sub) + "</p>" : "") + "</header>";
  }

  function pct(n) { return Math.round(n * 100); }

  function empty(title, hint) {
    return '<div class="empty"><h3>' + title + "</h3>" + (hint ? "<p>" + hint + "</p>" : "") + "</div>";
  }

  /**
   * Przebieg talii fiszek w podanym kontenerze.
   *
   * Wydzielone z zakładki Powtórek, bo sesja dnia (views-today.js)
   * potrzebuje tego samego przebiegu. Bez tego sesja kończyłaby się
   * odesłaniem gdzie indziej, czyli tym, czemu ma zapobiegać.
   *
   * onFinish(dobre, wszystkie) decyduje, co pokazać na końcu: zakładka
   * pokazuje podsumowanie talii, sesja dnia idzie do następnej części.
   */
  function runCards(box, due, onFinish) {
    var i = 0, right = 0;
    function card() {
      if (i >= due.length) { onFinish(right, due.length); return; }
      var c = due[i];
      box.innerHTML = '<div class="exq">' +
        '<p class="exq__num">' + esc(t("srs.cardOf", { i: i + 1, n: due.length })) + "</p>" +
        '<p class="exq__prompt" style="font-size:1.3rem">' + esc(Core.cardTr(c)) + "</p>" +
        '<p class="exq__sub">' + t("srs.howInItalian") + "</p>" +
        '<div class="field-row"><input type="text" class="field js-in" placeholder="' + esc(t("srs.ph")) + '" autocomplete="off" spellcheck="false">' +
        '<button class="btn btn--primary js-show">' + t("ex.check") + "</button></div>" +
        '<div class="fb" role="status"></div>' +
        '<div class="js-grade" style="margin-top:14px;display:none;gap:8px;flex-wrap:wrap">' +
        '<button class="btn btn--ghost btn--sm" data-q="0">' + t("srs.grade0") + "</button>" +
        '<button class="btn btn--ghost btn--sm" data-q="3">' + t("srs.grade3") + "</button>" +
        '<button class="btn btn--green btn--sm" data-q="4">' + t("srs.grade4") + "</button>" +
        '<button class="btn btn--green btn--sm" data-q="5">' + t("srs.grade5") + "</button></div></div>";

      var input = box.querySelector(".js-in");
      var fb = box.querySelector(".fb");
      var grade = box.querySelector(".js-grade");
      input.focus();

      function reveal() {
        var res = Core.checkOpen(input.value, [c.it], false);
        fb.className = "fb is-on " + (res.ok ? "fb--ok" : "fb--ko");
        fb.innerHTML = t(res.ok ? "srs.right" : "srs.wrong") + " <b>" + esc(c.it) + "</b>" +
          ' <button type="button" class="say-btn" data-say="' + esc(c.it) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button>';
        Ex.wireSpeakers(fb);
        Audio2.speak(c.it);
        grade.style.display = "flex";
        box.querySelector(".js-show").disabled = true;
        input.disabled = true;
        if (res.ok) right++;
      }
      box.querySelector(".js-show").addEventListener("click", reveal);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") reveal(); });

      grade.querySelectorAll("button").forEach(function (b) {
        b.addEventListener("click", function () {
          Core.gradeCard(c.key, parseInt(b.getAttribute("data-q"), 10));
          i++; card();
        });
      });
    }
    card();
  }

  /**
   * Skorupa widoku, wystawiona dla modułów, które dokładają własne trasy
   * (views-train.js). Bez tego taki moduł musiałby powtórzyć u siebie
   * set/pageHead/el — trzy kopie tego samego, rozjeżdżające się przy
   * pierwszej zmianie nagłówka.
   */
  Views.shell = { set: set, head: pageHead, root: el, empty: empty, pct: pct, runCards: runCards };

  global.Views = Views;

})(window);
