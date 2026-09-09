/* ============================================================
   views-conjugator.js — odmiana czasownika przez wszystkie czasy.

   Ekran wydzielony z views.js, w którym leżało osiem ekranów naraz.
   Wzorzec jest ten sam, którym chodzą już views-talk.js, views-train.js
   i views-today.js: skorupa (set, pageHead, el, empty) przychodzi z
   `Views.shell`, a plik dokłada własną trasę do `Views`.

   Ładuje się PO views.js, bo `Views.shell` powstaje na końcu tamtego pliku.
   ============================================================ */
(function () {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  var empty = Views.shell.empty;
  /* ═══════════════════════════════════════════════════════════
     KONIUGATOR
     ═══════════════════════════════════════════════════════════ */
  Views.coniugatore = function () {
    set(pageHead(t("conj.kicker"), t("nav.verbs"), t("conj.intro")) +
      '<div class="card" style="margin-bottom:22px">' +
      '<div class="field-row"><input type="text" class="field js-verb" placeholder="' + esc(t("conj.ph")) + '" list="verbList" autocomplete="off" spellcheck="false" style="max-width:340px">' +
      '<button class="btn btn--primary js-go">' + t("conj.run") + "</button></div>" +
      '<datalist id="verbList">' + Verbs.COMMON.map(function (v) { return '<option value="' + esc(v) + '">' + esc(t("verb." + v)) + "</option>"; }).join("") + "</datalist>" +
      '<div style="margin-top:14px;display:flex;gap:6px;flex-wrap:wrap">' +
      ["essere", "avere", "fare", "andare", "capire", "svegliarsi", "mangiare", "potere"].map(function (v) {
        return '<button class="btn btn--ghost btn--sm js-quick" data-v="' + v + '">' + v + "</button>";
      }).join("") + "</div></div>" +
      '<div id="conjOut"></div>');

    var input = el().querySelector(".js-verb");
    function run() {
      var v = (input.value || "").trim().toLowerCase();
      if (!v) return;
      if (!/^[a-zàèéìòù]+(are|ere|ire|rre|rsi|arsi|ersi|irsi)$/.test(v)) {
        document.getElementById("conjOut").innerHTML = empty(t("conj.notInfinitive"), t("conj.notInfinitiveHint"));
        return;
      }
      // nie `t`: tak nazywa się helper tłumaczeń w tym pliku
      var table = Verbs.fullTable(v);
      var m = table._meta;
      var out = '<div class="meta-row">' +
        '<span class="chip chip--cefr">' + esc(m.gruppo) + "</span>" +
        '<span class="chip">ausiliare: ' + esc(m.ausiliare) + "</span>" +
        '<span class="chip chip--green">participio: ' + esc(m.participio) + "</span>" +
        '<span class="chip">gerundio: ' + esc(m.gerundio) + "</span>" +
        '<span class="chip ' + (m.irregolare ? "chip--gold" : "chip--green") + '">' + t(m.irregolare ? "conj.irregular" : "conj.regular") + "</span>" +
        (m.riflessivo ? '<span class="chip chip--gold">' + t("conj.reflexive") + "</span>" : "") + "</div>" +
        '<div class="grid-2">' + Verbs.TENSES.map(function (tn) {
          var forms = table[tn.key];
          if (!forms || !forms.filter(Boolean).length) return "";
          // tabela zawsze w kontenerze przewijalnym: bez tego przy 320 px strona przewija się w poziomie
          return '<div class="card"><h3 style="font-size:1rem;margin-bottom:2px">' + esc(tn.labelIt) + "</h3>" +
            '<p style="font-size:.8rem;color:var(--ink-soft);margin-bottom:10px">' + esc(t("tense." + tn.key)) + "</p>" +
            '<div class="table-wrap"><table class="gt"><tbody>' + forms.map(function (f, k) {
              if (!f) return "";
              return "<tr><td>" + esc(Verbs.PERSONS[k]) + '</td><td class="it">' + esc(f) +
                ' <button type="button" class="say-btn" data-say="' + esc(f) + '" aria-label="' + esc(t("a11y.listen")) + '">🔊</button></td></tr>';
            }).join("") + "</tbody></table></div></div>";
        }).join("") + "</div>";
      var box = document.getElementById("conjOut");
      box.innerHTML = out;
      Ex.wireSpeakers(box);
    }
    el().querySelector(".js-go").addEventListener("click", run);
    input.addEventListener("keydown", function (e) { if (e.key === "Enter") run(); });
    el().querySelectorAll(".js-quick").forEach(function (b) {
      b.addEventListener("click", function () { input.value = b.getAttribute("data-v"); run(); });
    });
    input.value = "parlare"; run();
  };
})();
