/* ============================================================
   exercises-text.js — typy, w których uczeń PISZE: pole, luki, żetony, odmiana.

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

  /* ═══════════════ FILL / TRANS ═══════════════ */
  function buildFill(ex, idx) {
    var accepted = Array.isArray(ex.a) ? ex.a : [ex.a];
    var isTrans = ex.t === "trans";
    var ph = isTrans
      ? t(ex.dir === "toBase" ? "ex.ph.toBase" : "ex.ph.toIt")
      : t("ex.ph.answer");

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || "") + (ex.say ? " " + sayBtn(ex.say) : "") + "</p>" +
      (ex.hint ? '<p class="exq__sub">' + esc(t("ex.hintLabel", { hint: ex.hint })) + "</p>" : "") +
      '<div class="field-row"><input type="text" class="field js-in" placeholder="' + esc(ph) + '" autocomplete="off" autocapitalize="off" spellcheck="false">' +
      checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      var input = root.querySelector(".js-in");
      var btn = root.querySelector(".js-check");
      var tries = 0;
      function go() {
        if (btn.disabled) return;
        var res = Core.checkOpen(input.value, accepted, Core.state.settings.strictAccents);
        if (!res.ok && res.near && tries === 0) {
          tries++;
          var fb = root.querySelector(".fb");
          fb.className = "fb is-on fb--ko";
          fb.innerHTML = esc(t("ex.almost"));
          return;
        }
        finish(root, res.ok, ex.why, res.ok ? null : accepted[0], onDone);
      }
      btn.addEventListener("click", go);
      input.addEventListener("keydown", function (e) { if (e.key === "Enter") { e.preventDefault(); go(); } });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ CLOZE (kilka luk w tekście) ═══════════════ */
  function buildCloze(ex, idx) {
    // ex.text: "Ieri {{1}} al mercato e {{2}} la frutta."  ex.gaps: [["sono andato"],["ho comprato"]]
    var parts = String(ex.text).split(/\{\{(\d+)\}\}/);
    var htmlBody = "";
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) htmlBody += esc(parts[i]);
      else htmlBody += '<input type="text" class="field js-gap" data-gap="' + (parseInt(parts[i], 10) - 1) + '" ' +
        'style="display:inline-block;width:auto;min-width:130px;max-width:220px;margin:2px 4px;" autocomplete="off" spellcheck="false">';
    }
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + (ex.q || t("ex.cloze.prompt")) + "</p>" +
      (ex.tr ? '<p class="exq__sub">' + esc(ex.tr) + "</p>" : "") +
      '<p style="font-size:1.04rem;line-height:2.3;">' + htmlBody + "</p>" +
      checkBtn() + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelector(".js-check").addEventListener("click", function () {
        var allOk = true, first = null;
        root.querySelectorAll(".js-gap").forEach(function (inp) {
          var g = parseInt(inp.getAttribute("data-gap"), 10);
          var accepted = Array.isArray(ex.gaps[g]) ? ex.gaps[g] : [ex.gaps[g]];
          var res = Core.checkOpen(inp.value, accepted, Core.state.settings.strictAccents);
          inp.style.borderColor = res.ok ? "var(--ok)" : "var(--ko)";
          if (!res.ok) { allOk = false; if (!first) first = accepted[0]; inp.value = inp.value + " → " + accepted[0]; }
          inp.disabled = true;
        });
        finish(root, allOk, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ ORDER (ułóż zdanie) ═══════════════ */
  function buildOrder(ex, idx, seed) {
    var tokens = Core.seededShuffle(ex.tokens.slice(), seed + "o" + idx);
    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.order.prompt") + "</p>" +
      '<p class="exq__sub">' + esc(ex.tr || "") + "</p>" +
      // rola „group" jest konieczna: div bez roli nie może nieść aria-label (WCAG 4.1.2)
      '<div class="tok-target js-target" role="group" aria-label="' + esc(t("ex.order.yourSentence")) + '"></div>' +
      '<div class="tok-bank js-bank">' + tokens.map(function (tok) {
        return '<button type="button" class="tok">' + esc(tok) + "</button>";
      }).join("") + "</div>" +
      '<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">' + checkBtn() +
      '<button type="button" class="btn btn--ghost btn--sm js-clear">' + t("ex.order.clear") + "</button></div>" +
      feedbackBox() + "</div>";

    function wire(root, onDone) {
      var target = root.querySelector(".js-target");
      var bank = root.querySelector(".js-bank");

      bank.addEventListener("click", function (e) {
        var b = e.target.closest(".tok");
        if (!b || root.querySelector(".js-check").disabled) return;
        b.classList.add("tok--placed");
        target.appendChild(b);
      });
      target.addEventListener("click", function (e) {
        var b = e.target.closest(".tok");
        if (!b || root.querySelector(".js-check").disabled) return;
        b.classList.remove("tok--placed");
        bank.appendChild(b);
      });
      root.querySelector(".js-clear").addEventListener("click", function () {
        target.querySelectorAll(".tok").forEach(function (b) { b.classList.remove("tok--placed"); bank.appendChild(b); });
      });
      root.querySelector(".js-check").addEventListener("click", function () {
        var built = Array.prototype.map.call(target.querySelectorAll(".tok"), function (b) { return b.textContent; }).join(" ");
        if (!built.trim()) { Core.toast(t("ex.order.empty")); return; }
        var accepted = Array.isArray(ex.a) ? ex.a : [ex.a];
        var res = Core.checkOpen(built, accepted, false);
        finish(root, res.ok, ex.why, res.ok ? null : accepted[0], onDone);
      });
    }
    return { html: html, wire: wire };
  }

  /* ═══════════════ CONJ (tabela odmiany) ═══════════════ */
  function buildConj(ex, idx) {
    // ex.verb, ex.tense (klucz z Verbs.TENSES), ex.persons: indeksy do uzupełnienia
    var forms = Verbs.conjugate(ex.verb, ex.tense || "pres");
    // tryb rozkazujący nie ma formy „io" — pomijamy osoby bez formy
    var which = (ex.persons || [0, 1, 2, 3, 4, 5]).filter(function (p) { return !!forms[p]; });
    var tenseLabel = (Verbs.TENSES.filter(function (x) { return x.key === (ex.tense || "pres"); })[0] || {}).labelIt;

    var rows = which.map(function (p) {
      return '<label for="c' + idx + "_" + p + '">' + esc(Verbs.PERSONS[p]) + "</label>" +
        '<input id="c' + idx + "_" + p + '" class="field js-cell" data-p="' + p + '" autocomplete="off" spellcheck="false">';
    }).join("");

    var html = '<div class="exq" data-idx="' + idx + '">' + head(idx, ex) +
      '<p class="exq__prompt">' + t("ex.conj.prompt", { verb: '<b style="color:var(--rosa-deep)">' + esc(ex.verb) + "</b>", tense: esc(tenseLabel) }) + "</p>" +
      (ex.tr ? '<p class="exq__sub">' + esc(ex.tr) + "</p>" : "") +
      '<div class="conj-grid">' + rows + "</div>" +
      '<div style="margin-top:14px">' + checkBtn() + "</div>" + feedbackBox() + "</div>";

    function wire(root, onDone) {
      root.querySelector(".js-check").addEventListener("click", function () {
        var allOk = true;
        root.querySelectorAll(".js-cell").forEach(function (inp) {
          var p = parseInt(inp.getAttribute("data-p"), 10);
          var want = forms[p] || "";
          var ok = Core.checkOpen(inp.value, [want], Core.state.settings.strictAccents).ok;
          inp.style.borderColor = ok ? "var(--ok)" : "var(--ko)";
          if (!ok) { allOk = false; inp.value = want; }
          inp.disabled = true;
        });
        finish(root, allOk, ex.why, null, onDone);
      });
    }
    return { html: html, wire: wire };
  }

  Ex.register("fill", buildFill);
  Ex.register("trans", buildFill);
  Ex.register("cloze", buildCloze);
  Ex.register("order", buildOrder);
  Ex.register("conj", buildConj);

})();
