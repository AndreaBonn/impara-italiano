/* ============================================================
   views-settings.js — ustawienia, kopia zapasowa i talia w formacie Anki.

   Ekran wydzielony z views.js, w którym leżało osiem ekranów naraz.
   Wzorzec jest ten sam, którym chodzą już views-talk.js, views-train.js
   i views-today.js: skorupa (set, pageHead, el, empty) przychodzi z
   `Views.shell`, a plik dokłada własną trasę do `Views`.

   Ładuje się PO views.js, bo `Views.shell` powstaje na końcu tamtego pliku.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  /* ═══════════════════════════════════════════════════════════
     USTAWIENIA
     ═══════════════════════════════════════════════════════════ */
  /** Wiersz tabeli „wsparcie przeglądarki". */
  function supportRow(name, note, ok, chip) {
    return '<div class="list-row"><span class="list-row__main"><b>' + esc(name) + "</b><span>" + esc(note) +
      '</span></span><span class="chip ' + (ok ? "chip--green" : "") + '">' + esc(chip) + "</span></div>";
  }

  /**
   * Wiersz o pracy bez sieci.
   *
   * Trzy stany, nie dwa: działa, nie działa mimo http(s), i „nie z tego
   * miejsca". Ostatni jest najczęstszy — kurs otwarty podwójnym
   * kliknięciem chodzi z file://, gdzie service worker jest zabroniony,
   * a to nie jest usterka do zgłaszania, tylko cena otwierania z dysku.
   */
  function offlineRow() {
    var http = /^https?:$/.test(global.location.protocol);
    var wspiera = "serviceWorker" in global.navigator;
    var dziala = http && wspiera && !!global.navigator.serviceWorker.controller;
    return supportRow(
      t("set.offline"),
      t(http ? "set.offlineUse" : "set.offlineFile"),
      dziala,
      t(dziala ? "set.works" : http ? "set.offlineWaiting" : "set.offlineNeedsServer")
    );
  }

  Views.impostazioni = function () {
    var st = Core.state.settings;
    var voices = Audio2.italianVoices();

    set(pageHead(t("set.kicker"), t("nav.settings"), t("set.intro")) +
      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:14px">' + t("set.speech") + "</h3>" +
      '<div class="stack">' +
      '<label style="display:block"><span style="font-weight:600;display:block;margin-bottom:5px">' + t("set.voiceSource") + "</span>" +
      '<select class="field js-source" style="max-width:420px">' +
      '<option value="natural"' + (st.voiceSource !== "system" ? " selected" : "") + (Audio2.naturalAvailable ? "" : " disabled") + '>' +
      t("set.recorded") + (Audio2.naturalAvailable ? " (" + t("set.sentences", { n: Audio2.naturalCount }) + ")" : " — " + t("set.notBuilt")) + "</option>" +
      '<option value="system"' + (st.voiceSource === "system" ? " selected" : "") + ">" + t("set.systemVoice") + "</option>" +
      "</select>" +
      '<span style="display:block;font-size:.84rem;color:var(--ink-soft);margin-top:6px">' +
      t(Audio2.naturalAvailable ? "set.recordedHint" : "set.notBuiltHint") +
      "</span></label>" +
      '<label style="display:block"><span style="font-weight:600;display:block;margin-bottom:5px">' + t("set.rate") + ' <b class="js-rate-v">' + st.rate + "×</b></span>" +
      '<input type="range" class="js-rate" min="0.6" max="1.4" step="0.05" value="' + st.rate + '" style="width:100%;max-width:420px;accent-color:var(--rosa-deep)"></label>' +
      '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-autoplay"' + (st.autoplay ? " checked" : "") + ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>' + t("set.autoplay") + "</span></label>" +
      '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-strict"' + (st.strictAccents ? " checked" : "") + ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>' + t("set.strictAccents") + "</span></label>" +
      '<button class="btn btn--ghost btn--sm js-test" style="align-self:flex-start">' + t("set.testVoice") + "</button>" +
      "</div></div>" +

      /* Powtórki stoją między mową a kopią zapasową, bo to nadal ustawienie
         nauki. Kopia i „wyczyść wszystko" są końcem strony celowo: to
         działania na całym profilu, nie pokrętła do kręcenia w trakcie.

         Suwak z gołą liczbą („0.87") nie znaczy dla ucznia nic, więc wybór
         jest z trzech nazwanych progów, a zdanie pod spodem mówi o SKUTKU,
         nie o algorytmie: nikt nie zmienia retencji, ludzie zmieniają „za
         często mi to wraca". */
      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">' + t("set.reviews") + "</h3>" +
      '<div class="stack">' +
      '<label style="display:block"><span style="font-weight:600;display:block;margin-bottom:5px">' + t("set.retention") + "</span>" +
      '<select class="field js-retention" style="max-width:420px">' +
      [["0.85", "set.retentionRelaxed"], ["0.9", "set.retentionDefault"], ["0.95", "set.retentionStrict"]]
        .map(function (o) {
          var wybrane = Math.abs((Core.state.settings.retention || 0.9) - parseFloat(o[0])) < 0.001;
          return '<option value="' + o[0] + '"' + (wybrane ? " selected" : "") + ">" + esc(t(o[1])) + "</option>";
        }).join("") +
      "</select></label>" +
      '<p style="color:var(--ink-soft);font-size:.9rem;margin:0">' + esc(t("set.retentionHint")) + "</p>" +
      "</div></div>" +

      /* Talia dla innych programów. Osobna karta od kopii postępów, bo to
         inna obietnica: kopia wraca TUTAJ z terminami, a ta wychodzi STĄD
         bez nich. Zlanie ich w jeden przycisk kończy się importem „na
         czysto" i utratą roku powtórek. */
      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">' + t("anki.title") + "</h3>" +
      '<p style="color:var(--ink-soft);font-size:.9rem">' + esc(t("anki.hint")) + "</p>" +
      '<p style="font-size:.9rem;font-weight:600">' + esc(t("anki.noSchedule")) + "</p>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">' +
      '<button class="btn btn--green btn--sm js-tsv-out">' + t("anki.export") + "</button>" +
      '<label class="btn btn--ghost btn--sm" style="cursor:pointer">' + t("anki.import") +
      '<input type="file" accept=".tsv,.txt,.csv,text/plain" class="js-tsv-in" hidden></label></div>' +
      '<div class="js-tsv-preview" style="margin-top:14px"></div></div>' +

      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">' + t("set.backup") + "</h3>" +
      '<p style="color:var(--ink-soft);font-size:.9rem">' + t("set.backupHint") + "</p>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">' +
      '<button class="btn btn--ghost btn--sm js-place">' + t("place.title") + "</button>" +
      '<button class="btn btn--green btn--sm js-export">' + t("set.export") + "</button>" +
      '<label class="btn btn--ghost btn--sm" style="cursor:pointer">' + t("set.import") + '<input type="file" accept="application/json" class="js-import" hidden></label>' +
      '<button class="btn btn--ghost btn--sm js-reset" style="color:var(--ko);border-color:var(--ko)">' + t("set.reset") + "</button></div></div>" +

      '<div class="card"><h3 style="font-size:1.05rem;margin-bottom:6px">' + t("set.support") + "</h3>" +
      '<div class="stack" style="font-size:.92rem">' +
      supportRow(t("set.recorded"), t("set.voicesUsed"), Audio2.naturalAvailable,
                 Audio2.naturalAvailable ? t("set.sentences", { n: Audio2.naturalCount }) : t("set.absent")) +
      supportRow(t("set.tts"), t("set.ttsUse"), Audio2.ttsSupported,
                 t(Audio2.ttsSupported ? "set.works" : "set.absent")) +
      supportRow(t("set.stt"), t("set.sttUse"), Audio2.sttSupported,
                 t(Audio2.sttSupported ? "set.works" : "set.absentTyping")) +
      supportRow(t("set.italianVoices"), t("set.fallbackOnly"), false, String(voices.length)) +
      offlineRow() +
      "</div></div>");

    var src = el().querySelector(".js-source");
    src.addEventListener("change", function () { Core.state.settings.voiceSource = src.value; Core.save(); });
    var r = el().querySelector(".js-rate");
    r.addEventListener("input", function () {
      Core.state.settings.rate = parseFloat(r.value);
      el().querySelector(".js-rate-v").textContent = r.value + "×";
      Core.save();
    });
    el().querySelector(".js-autoplay").addEventListener("change", function (e) { Core.state.settings.autoplay = e.target.checked; Core.save(); });
    el().querySelector(".js-strict").addEventListener("change", function (e) { Core.state.settings.strictAccents = e.target.checked; Core.save(); });
    /* Zmiana działa od NASTĘPNEJ odpowiedzi: terminów już wyznaczonych nie
       ruszamy. Przeliczenie całej talii przesunęłoby karty, których uczeń
       dziś nie widzi, a on zmienił ustawienie, nie poprosił o migrację. */
    el().querySelector(".js-retention").addEventListener("change", function (e) {
      Core.state.settings.retention = parseFloat(e.target.value);
      Core.save();
      Core.toast(t("set.retentionSaved"));
    });
    el().querySelector(".js-test").addEventListener("click", function () {
      Audio2.speak("Ciao! Sono la tua voce italiana. Andiamo a studiare insieme.");
    });

    el().querySelector(".js-place").addEventListener("click", function () { App.go("piazzamento"); });
    /* Ten sam eksport, którym kończy się przypomnienie o kopii: gdyby
       stał tu drugi raz, tylko jedno z dwóch miejsc przesuwałoby próg. */
    el().querySelector(".js-export").addEventListener("click", function () {
      Core.downloadBackup();
    });
    el().querySelector(".js-import").addEventListener("change", function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        // applyLang, nie samo refreshRail: plik niesie własny język i motyw,
        // a bez ich nałożenia interfejs zostaje w poprzednim języku aż do przeładowania
        try { Core.importState(fr.result); Core.toast(t("set.imported"), "ok"); App.applyLang(Core.state.settings.lang); App.go("progressi"); }
        /* Powód, nie samo „nie udało się": kto odzyskuje kopię zapasową,
           potrzebuje wiedzieć, czy plik jest z nowszej wersji, czy uszkodzony. */
        catch (err) { Core.toast(err && err.key ? t(err.key, err.vars) : t("set.importFailed")); }
      };
      fr.readAsText(f);
    });
    wireAnki();

    el().querySelector(".js-reset").addEventListener("click", function () {
      if (!global.confirm(t("set.resetConfirm"))) return;
      Core.resetState(); App.refreshRail(); Core.toast(t("set.resetDone")); App.go("percorso");
    });
  };

  /* ═══════════════ Talia w formacie Anki ═══════════════ */

  /**
   * Eksport i import TSV, z ANTEPRIMA przed zapisem.
   *
   * Import bez podglądu to jedyne miejsce w kursie, w którym cudzy plik
   * zmienia stan bezpowrotnie i po cichu. Uczeń ma najpierw zobaczyć, co
   * się stanie — ile dojdzie, ile się zaktualizuje, ile zostanie
   * pominiętych — i dopiero potem potwierdzić. Anulowanie nie może
   * zostawić po sobie ani jednej zmiany.
   */
  function wireAnki() {
    var root = el();
    var podglad = root.querySelector(".js-tsv-preview");

    root.querySelector(".js-tsv-out").addEventListener("click", function () {
      var karty = Object.keys(Core.state.srs).map(function (k) {
        var c = Core.state.srs[k];
        return { it: c.it, tr: Core.cardTr(c), tag: (c.src || "").replace(/[\s,]+/g, "-") };
      });
      if (!karty.length) { Core.toast(t("anki.nothingToExport")); return; }
      var blob = new Blob([Anki.toTsv(karty)], { type: "text/tab-separated-values" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "impara-italiano-" + Core.today() + ".tsv";
      a.click();
      setTimeout(function () { URL.revokeObjectURL(a.href); }, 1000);
      Core.toast(t("anki.exported", { n: karty.length }));
    });

    root.querySelector(".js-tsv-in").addEventListener("change", function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var fr = new FileReader();
      fr.onload = function () { pokazPodglad(String(fr.result), podglad); };
      fr.readAsText(f);
      e.target.value = "";        // ten sam plik da się wybrać drugi raz
    });
  }

  /** Co zrobi import: dojdzie, zaktualizuje się, zostanie pominięte. */
  function policz(karty) {
    var srs = Core.state.srs;
    var nowe = 0, aktualizacje = 0, pominiete = 0, widziane = {};
    karty.forEach(function (k) {
      var klucz = Core.cardKey(k.it);
      if (!klucz || Core.isForbidden(klucz)) { pominiete++; return; }
      if (widziane[klucz]) { pominiete++; return; }
      widziane[klucz] = true;
      if (Object.prototype.hasOwnProperty.call(srs, klucz)) aktualizacje++;
      else nowe++;
    });
    return { nowe: nowe, aktualizacje: aktualizacje, pominiete: pominiete };
  }

  function pokazPodglad(tekst, box) {
    var w = Anki.fromTsv(tekst);
    if (w.blad) {
      box.innerHTML = '<div class="callout callout--trap"></div>';
      box.querySelector(".callout").textContent = t(w.blad);
      return;
    }
    if (!w.karty.length) {
      box.innerHTML = "<p></p>";
      box.querySelector("p").textContent = t("anki.emptyFile");
      return;
    }

    var licz = policz(w.karty);
    licz.pominiete += w.pominiete;

    box.innerHTML = '<div class="card" style="margin:0">' +
      '<p style="font-weight:600;margin:0 0 8px" class="js-sum"></p>' +
      '<div class="stack js-rows" style="margin-bottom:12px"></div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<button class="btn btn--green btn--sm js-ok">' + esc(t("anki.confirm")) + "</button>" +
      '<button class="btn btn--ghost btn--sm js-no">' + esc(t("anki.cancel")) + "</button></div></div>";

    box.querySelector(".js-sum").textContent =
      t("anki.summary", { add: licz.nowe, upd: licz.aktualizacje, skip: licz.pominiete });

    /* Pierwsze pięć wierszy, WYŁĄCZNIE przez textContent. To jest treść z
       cudzego pliku: `esc()` by wystarczyło, ale textContent nie da się
       użyć źle, a to jedyne miejsce, gdzie cudzy napis trafia na ekran. */
    var lista = box.querySelector(".js-rows");
    w.karty.slice(0, 5).forEach(function (k) {
      var row = document.createElement("div");
      row.className = "list-row";
      var a = document.createElement("b");
      a.textContent = k.it;
      var b = document.createElement("span");
      b.style.color = "var(--ink-soft)";
      b.textContent = k.tr;
      var main = document.createElement("span");
      main.className = "list-row__main";
      main.appendChild(a);
      main.appendChild(b);
      row.appendChild(main);
      lista.appendChild(row);
    });

    box.querySelector(".js-no").addEventListener("click", function () {
      box.innerHTML = "";
      Core.toast(t("anki.cancelled"));
    });
    box.querySelector(".js-ok").addEventListener("click", function () {
      /* Zapis pomija DOKŁADNIE to, co podgląd policzył jako pominięte.
         Bez tego duplikat w pliku był liczony jako pominięty, a mimo to
         nadpisywał tłumaczenie — podgląd obiecywał jedno, import robił
         drugie, i uczeń nie miał jak zauważyć różnicy. Wygrywa pierwsze
         wystąpienie, tak jak przy liczeniu. */
      var dodane = 0, uzyte = {};
      w.karty.forEach(function (k) {
        var klucz = Core.cardKey(k.it);
        if (!klucz || uzyte[klucz]) return;
        uzyte[klucz] = true;
        if (Core.addCard(k.it, k.tr, k.tag || "anki")) dodane++;
      });
      box.innerHTML = "";
      App.refreshRail();
      Core.toast(t("anki.imported", { n: dodane }));
    });
  }
})(window);
