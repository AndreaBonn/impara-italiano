/* ============================================================
   views-settings.js — settings, the backup and the deck in Anki format.

   A screen split out of views.js, which held eight screens at once. The
   pattern is the same one views-talk.js, views-train.js and views-today.js
   already use: the shell (set, pageHead, el, empty) comes from
   `Views.shell`, and the file adds a route of its own to `Views`.

   It loads AFTER views.js, because `Views.shell` is created at the end of
   that file.
   ============================================================ */
(function (global) {
  "use strict";

  var esc = Core.esc;
  var t = function (k, v) { return I18n.t(k, v); };
  var set = Views.shell.set;
  var pageHead = Views.shell.head;
  var el = Views.shell.root;
  /* ═══════════════════════════════════════════════════════════
     SETTINGS
     ═══════════════════════════════════════════════════════════ */
  /** A row of the "browser support" table. */
  /**
   * The four providers in the student's own order.
   *
   * Rebuilt from the provider table rather than returned as stored. The
   * order lives in the settings, and the settings ride inside the backup
   * file the course tells students to keep and carry — so it can arrive
   * naming something we do not serve, or missing one of the four. Filtering
   * through the table and appending whatever is left keeps the result a
   * permutation of what actually exists, whatever the file said.
   */
  function kolejnoscDostawcow() {
    var zapisana = Core.state.settings.llmOrder;
    var wybrana = Array.isArray(zapisana) ? zapisana : [];
    var znane = LlmProviders.list();
    var out = [];
    function juzJest(id) {
      return out.some(function (x) { return x.id === id; });
    }
    /* By id, not by reference: `out` holds copies, so looking for the table's
       own object in it never finds anything and a name repeated in the file
       is added twice — four rows become five, and one provider owns two key
       fields that overwrite each other. */
    wybrana.forEach(function (id) {
      var p = LlmProviders.get(id);
      if (p && !juzJest(p.id)) out.push({ id: p.id, label: p.label, model: p.model });
    });
    znane.forEach(function (p) {
      if (!juzJest(p.id)) out.push(p);
    });
    return out;
  }

  function supportRow(name, note, ok, chip) {
    return '<div class="list-row"><span class="list-row__main"><b>' + esc(name) + "</b><span>" + esc(note) +
      '</span></span><span class="chip ' + (ok ? "chip--green" : "") + '">' + esc(chip) + "</span></div>";
  }

  /**
   * The row about working offline.
   *
   * Three states, not two: it works, it does not work despite http(s), and
   * "not from here". The last one is the most frequent — a course opened by
   * double-clicking runs from file://, where a service worker is forbidden,
   * and that is not a fault to report but the price of opening it from disk.
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

  /**
   * The row about surviving in storage.
   *
   * Three states for the same reason offlineRow has three: "not granted" and
   * "cannot be asked" are different facts, and the second one is what a
   * student opening the course from a disk will see. Only the first is worth
   * doing anything about.
   */
  function storageRow() {
    var r = Core.state.retention || {};
    var mozna = Retention.wspiera.miejsce();
    return supportRow(
      t("set.storage"),
      t("set.storageUse"),
      !!r.trwale,
      t(r.trwale ? "set.storageGranted" : mozna ? "set.storageDenied" : "set.storageUnknown")
    );
  }

  /** The hours a reminder may be set to, as whole hours: 06:00 … 22:00. */
  function godzinyPrzypomnienia(wybrana) {
    var out = "";
    for (var h = 6; h <= 22; h++) {
      var etykieta = (h < 10 ? "0" : "") + h + ":00";
      out += '<option value="' + h + '"' + (h === wybrana ? " selected" : "") + ">" + etykieta + "</option>";
    }
    return out;
  }

  /**
   * The card that exists so that tomorrow happens.
   *
   * Three controls and each one is drawn only where it can do something. The
   * badge switch is absent where the operating system has no badge; the
   * installation button is absent until the browser has actually offered us
   * an installation, and in its place stands the sentence that says how to
   * do it by hand — which on iOS is the only way there has ever been.
   */
  function powrotyCard() {
    var r = Core.state.retention || {};
    var godzina = (r.przypomnienie && r.przypomnienie.godzina) || 9;

    return '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">' +
      t("ret.title") + "</h3>" +
      '<p style="color:var(--ink-soft);font-size:.9rem">' + esc(t("ret.intro")) + "</p>" +
      '<div class="stack" style="margin-top:12px">' +

      (Retention.wspiera.odznaka()
        ? '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-badge"' +
          (r.odznaka ? " checked" : "") +
          ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>' + esc(t("ret.badge")) + "</span></label>" +
          '<span style="display:block;font-size:.84rem;color:var(--ink-soft);margin-top:-4px">' +
          esc(t("ret.badgeHint")) + "</span>"
        : '<span style="display:block;font-size:.84rem;color:var(--ink-soft)">' +
          esc(t("ret.badgeAbsent")) + "</span>") +

      '<label style="display:block"><span style="font-weight:600;display:block;margin-bottom:5px">' +
      esc(t("ret.reminder")) + "</span>" +
      '<select class="field js-hour" style="max-width:200px">' + godzinyPrzypomnienia(godzina) + "</select></label>" +
      '<span style="display:block;font-size:.84rem;color:var(--ink-soft);margin-top:-4px">' +
      esc(t("ret.reminderHint")) + "</span>" +
      '<button class="btn btn--green btn--sm js-ics" style="align-self:flex-start">' + t("ret.download") + "</button>" +

      (Retention.samodzielna()
        ? '<span style="display:block;font-size:.84rem;color:var(--ink-soft)">' + esc(t("ret.installed")) + "</span>"
        : Retention.mozliwaInstalacja()
          ? '<button class="btn btn--ghost btn--sm js-install" style="align-self:flex-start">' + t("ret.install") + "</button>"
          : '<span style="display:block;font-size:.84rem;color:var(--ink-soft)">' + esc(t("ret.installManual")) + "</span>") +

      "</div></div>";
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

      /* Withdrawing the speech-recognition consent. It sits HERE, next to
         the other voice settings, and not on the privacy page: the notice
         explains, this screen acts, and a student looking for a switch
         looks where the switches are.

         The checkbox exists because the notice says the consent can be
         withdrawn. `Consent.ustaw(false)` had been in consent.js since the
         gate was written, and no view ever called it - so the only way back
         was erasing the whole profile, and the sentence "you can withdraw
         it whenever you want" would have been false the day it was written.

         Shown only where the browser has speech recognition at all: an
         inert switch for a permission that can never be asked for is worse
         than no switch. */
      (Audio2.sttSupported
        ? '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-consent"' +
          (Consent.udzielona() ? " checked" : "") +
          ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>' + t("set.sttConsent") + "</span></label>" +
          '<span style="display:block;font-size:.84rem;color:var(--ink-soft);margin-top:-4px">' +
          esc(t("set.sttConsentHint")) + "</span>"
        : "") +
      "</div></div>" +

      /* Reviews sit between speech and the backup, because they are still a
         learning setting. The backup and "erase everything" are at the end
         of the page on purpose: those are operations on the whole profile,
         not knobs to turn while studying.

         A slider with a bare number ("0.87") means nothing to a student, so
         the choice is between three named thresholds, and the sentence below
         talks about the EFFECT, not the algorithm: nobody changes retention,
         people change "this keeps coming back too often". */
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

      /* The second judge: a card of its own, because it is the only place in
         the course where the student hands over a credential.

         Everything about it is opt-in and reversible from here. The keys are
         theirs and are billed to them, so the page shows what each one costs
         them rather than what it does for us, and it never shows a key back:
         only its last four characters, enough to tell which of four was
         pasted where and useless in a screenshot.

         The switch below the fields is the consent. It exists for the same
         reason the speech one does: the privacy notice promises it can be
         withdrawn, and a promise no view can keep is a false sentence. */
      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">' + t("llm.title") + "</h3>" +
      '<p style="color:var(--ink-soft);font-size:.9rem">' + esc(t("llm.hint")) + "</p>" +
      '<p style="color:var(--ink-soft);font-size:.9rem">' + esc(t("llm.orderHint")) + "</p>" +
      '<div class="stack" style="margin-top:12px">' +
      /* In the student's own order, and numbered, because the order IS the
         setting: the course asks the first provider that has a key and only
         moves on when it fails. Without the number on screen, the list looks
         like four equal fields and the choice looks like it does not exist. */
      kolejnoscDostawcow().map(function (p, n) {
        var zapisany = LlmKeys.get(p.id);
        return '<label style="display:block"><span style="font-weight:600;display:block;margin-bottom:5px">' +
          '<span style="color:var(--ink-soft)">' + (n + 1) + ".</span> " + esc(p.label) +
          (zapisany ? ' <span style="font-weight:400;color:var(--ink-soft)">' +
            esc(LlmKeys.fingerprint(zapisany)) + "</span>" : "") + "</span>" +
          '<span style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">' +
          '<input type="password" class="field js-llm-key" data-id="' + esc(p.id) + '" style="max-width:300px"' +
          ' autocomplete="off" spellcheck="false" placeholder="' + esc(t(zapisany ? "llm.keySaved" : "llm.keyEmpty")) + '">' +
          /* The first one has nowhere to go up to. A disabled button would
             read as broken; no button reads as "this is already the top". */
          (n === 0 ? "" :
            '<button type="button" class="btn btn--quiet btn--sm js-llm-up" data-id="' + esc(p.id) +
            '" aria-label="' + esc(t("llm.moveUp", { name: p.label })) + '">↑</button>') +
          '<button class="btn btn--quiet btn--sm js-llm-test" data-id="' + esc(p.id) + '">' + t("llm.test") + "</button>" +
          "</span></label>";
      }).join("") +
      '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-llm-consent"' +
      (Consent.udzielonaLlm() ? " checked" : "") +
      ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>' + t("llm.consent") + "</span></label>" +
      '<span style="display:block;font-size:.84rem;color:var(--ink-soft);margin-top:-4px">' +
      esc(t("llm.consentHint")) + "</span>" +

      /* The second switch, under the first and never folded into it. What
         leaves is a different thing: the judge sends one sentence, the free
         conversation sends everything said in the scene. Somebody who agreed
         to the first has not agreed to the second, and turning one off must
         leave the other alone. */
      '<label style="display:flex;gap:10px;align-items:center"><input type="checkbox" class="js-chat-consent"' +
      (Consent.udzielonaChat() ? " checked" : "") +
      ' style="width:18px;height:18px;accent-color:var(--rosa-deep)"><span>' + t("chat.consent") + "</span></label>" +
      '<span style="display:block;font-size:.84rem;color:var(--ink-soft);margin-top:-4px">' +
      esc(t("chat.consentHint")) + "</span>" +
      '<div class="fb js-llm-fb" role="status"></div>' +
      '<div><button class="btn btn--ghost btn--sm js-llm-clear">' + t("llm.forget") + "</button></div>" +
      "</div></div>" +

      /* The deck for other programs. A separate card from the progress
         backup, because it is a different promise: the backup comes back
         HERE with its due dates, this one goes out FROM HERE without them.
         Merging them into one button ends in a clean import and the loss of
         a year of reviews. */
      '<div class="card" style="margin-bottom:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">' + t("anki.title") + "</h3>" +
      '<p style="color:var(--ink-soft);font-size:.9rem">' + esc(t("anki.hint")) + "</p>" +
      '<p style="font-size:.9rem;font-weight:600">' + esc(t("anki.noSchedule")) + "</p>" +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:12px">' +
      '<button class="btn btn--green btn--sm js-tsv-out">' + t("anki.export") + "</button>" +
      '<label class="btn btn--ghost btn--sm" style="cursor:pointer">' + t("anki.import") +
      '<input type="file" accept=".tsv,.txt,.csv,text/plain" class="js-tsv-in" hidden></label></div>' +
      '<div class="js-tsv-preview" style="margin-top:14px"></div></div>' +

      powrotyCard() +

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
      storageRow() +
      "</div></div>" +

      /* The notice, last on the page and reachable in one click. The footer
         carries the same link from every screen; this row is here because
         Settings is where a student ends up when they start wondering what
         the course keeps, and arriving at the answer should not require
         remembering that a footer exists. */
      '<div class="card" style="margin-top:20px"><h3 style="font-size:1.05rem;margin-bottom:6px">' +
      esc(t("privacy.title")) + "</h3>" +
      '<p style="color:var(--ink-soft);font-size:.9rem">' + esc(t("privacy.intro")) + "</p>" +
      '<button class="btn btn--ghost btn--sm js-privacy" style="margin-top:12px">' +
      esc(t("privacy.title")) + "</button></div>");

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

    el().querySelector(".js-privacy").addEventListener("click", function () { App.go("privacy"); });

    /* Only present where the browser has speech recognition (see the render
       above), so the handler is conditional too. Ticking it grants consent
       without going through an exercise; unticking withdraws it, and the
       next exercise that needs the microphone asks again. */
    var zgoda = el().querySelector(".js-consent");
    if (zgoda) {
      zgoda.addEventListener("change", function (e) {
        Consent.ustaw(e.target.checked);
        Core.toast(t(e.target.checked ? "set.sttConsentOn" : "set.sttConsentOff"));
      });
    }
    /* ---------------- The second judge ---------------- */

    var llmFb = el().querySelector(".js-llm-fb");

    /* Moving a provider one place up.
       The stored order is rebuilt from the provider table every time rather
       than trusted as it stands: it lives in the settings, and the settings
       travel inside the exported backup, so it can arrive from a file
       somebody else wrote with names we do not serve or with one of the four
       missing. Filtering through the table and appending the rest keeps it a
       permutation of what the course actually offers. */
    el().querySelectorAll(".js-llm-up").forEach(function (przycisk) {
      przycisk.addEventListener("click", function () {
        var id = przycisk.getAttribute("data-id");
        var lista = kolejnoscDostawcow().map(function (p) { return p.id; });
        var n = lista.indexOf(id);
        if (n <= 0) return;
        lista.splice(n - 1, 0, lista.splice(n, 1)[0]);
        Core.state.settings.llmOrder = lista;
        Core.save();
        App.go("impostazioni");
      });
    });

    /** A message under the fields. `textContent`: providers quote the key
        back inside their errors, and `LlmKeys.redact` has already taken it
        out — but the text is still theirs, not ours. */
    function llmPowiedz(tekst, ok) {
      llmFb.className = "fb js-llm-fb is-on" + (ok ? " fb--ok" : " fb--ko");
      llmFb.textContent = tekst;
    }

    /* Saving happens on `change`, so on leaving the field — not on every
       keystroke, which would write a dozen half-keys to storage on the way
       to one whole one. An emptied field deletes the key: that is the way
       back for a student who wants one provider gone without erasing the
       rest. */
    el().querySelectorAll(".js-llm-key").forEach(function (pole) {
      pole.addEventListener("change", function () {
        var id = pole.getAttribute("data-id");
        if (!pole.value.trim()) {
          LlmKeys.remove(id);
          return llmPowiedz(t("llm.removed"), true);
        }
        if (!LlmKeys.set(id, pole.value)) return llmPowiedz(t("llm.tooShort"), false);
        /* The field is emptied at once. It holds a secret in a DOM node on
           a page the student may leave open, and the value is in storage by
           now: the placeholder below the label says it is saved. */
        pole.value = "";
        llmPowiedz(t("llm.saved"), true);
      });
    });

    /* Trying a key BEFORE it is saved, using what is in the field, falling
       back to what is stored. A student who has just pasted a key wants to
       know it works; making them save first and then discover it in the
       middle of an exercise is the whole failure this button prevents. */
    el().querySelectorAll(".js-llm-test").forEach(function (przycisk) {
      przycisk.addEventListener("click", function () {
        var id = przycisk.getAttribute("data-id");
        var pole = el().querySelector('.js-llm-key[data-id="' + id + '"]');
        var klucz = (pole && pole.value.trim()) || LlmKeys.get(id);
        if (!klucz) return llmPowiedz(t("llm.noKey"), false);
        llmPowiedz(t("llm.testing"), true);
        Llm.test(id, klucz, function (out) {
          if (out.ok) return llmPowiedz(t("llm.testOk"), true);
          llmPowiedz(t("llm.testFailed") + " " + (out.error || ""), false);
        });
      });
    });

    el().querySelector(".js-llm-consent").addEventListener("change", function (e) {
      Consent.ustawLlm(e.target.checked);
      Core.toast(t(e.target.checked ? "llm.consentOn" : "llm.consentOff"));
    });

    el().querySelector(".js-chat-consent").addEventListener("change", function (e) {
      Consent.ustawChat(e.target.checked);
      Core.toast(t(e.target.checked ? "chat.consentOn" : "chat.consentOff"));
    });

    el().querySelector(".js-llm-clear").addEventListener("click", function () {
      LlmKeys.clear();
      Consent.ustawLlm(false);
      /* Forgetting the keys withdraws BOTH consents: the button says the
         course forgets everything, and leaving one of the two behind would
         make that sentence false. */
      Consent.ustawChat(false);
      Core.toast(t("llm.forgotten"));
      App.go("impostazioni");
    });

    /* The change takes effect from the NEXT answer: the due dates already
       set are left alone. Recomputing the whole deck would shift cards the
       student does not see today, and they changed a setting rather than
       asking for a migration. */
    el().querySelector(".js-retention").addEventListener("change", function (e) {
      Core.state.settings.retention = parseFloat(e.target.value);
      Core.save();
      Core.toast(t("set.retentionSaved"));
    });
    el().querySelector(".js-test").addEventListener("click", function () {
      Audio2.speak("Ciao! Sono la tua voce italiana. Andiamo a studiare insieme.");
    });

    /* The three controls of the return card. Each one is queried rather than
       assumed: the card draws a switch only where the browser has the API
       behind it, so on Firefox `.js-badge` is genuinely absent and reading
       `.addEventListener` on nothing would break the whole settings screen
       over a feature that is not there. */
    var odznaka = el().querySelector(".js-badge");
    if (odznaka) odznaka.addEventListener("change", function (e) {
      Retention.ustawOdznake(e.target.checked);
      Core.toast(t(e.target.checked ? "ret.badgeOn" : "ret.badgeOff"));
    });

    el().querySelector(".js-ics").addEventListener("click", function () {
      var h = parseInt(el().querySelector(".js-hour").value, 10);
      Retention.pobierzPrzypomnienie(h, 0);
      Core.toast(t("ret.saved"));
    });

    var instaluj = el().querySelector(".js-install");
    if (instaluj) instaluj.addEventListener("click", function () {
      /* Redrawing afterwards, because the browser's event is single-use: the
         button has to disappear once it has been spent, or the second click
         does nothing and says nothing. */
      Retention.zainstaluj();
      Views.impostazioni();
    });

    el().querySelector(".js-place").addEventListener("click", function () { App.go("piazzamento"); });
    /* The same export the backup reminder ends with: if it stood here a
       second time, only one of the two places would move the threshold. */
    el().querySelector(".js-export").addEventListener("click", function () {
      Core.downloadBackup();
    });
    el().querySelector(".js-import").addEventListener("change", function (e) {
      var f = e.target.files[0];
      if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        // applyLang, not refreshRail alone: the file carries its own language and theme,
        // and without applying them the interface stays in the previous language until a reload
        try { Core.importState(fr.result); Core.toast(t("set.imported"), "ok"); App.applyLang(Core.state.settings.lang); App.go("progressi"); }
        /* The reason, not just "it failed": whoever is restoring a backup
           needs to know whether the file is from a newer version or damaged. */
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

  /* ═══════════════ The deck in Anki format ═══════════════ */

  /**
   * TSV export and import, with a PREVIEW before saving.
   *
   * An import without a preview is the only place in the course where
   * somebody else's file changes the state irreversibly and silently. The
   * student must first see what will happen — how many will be added, how
   * many updated, how many skipped — and only then confirm. Cancelling must
   * not leave a single change behind.
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
      e.target.value = "";        // the same file can be picked a second time
    });
  }

  /** What the import will do: added, updated, skipped. */
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

    /* The first five rows, through textContent ONLY. This is content from
       somebody else's file: `esc()` would be enough, but textContent cannot
       be misused, and this is the only place where a foreign string reaches
       the screen. */
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
      /* The save skips EXACTLY what the preview counted as skipped. Without
         this, a duplicate in the file was counted as skipped and still
         overwrote the translation — the preview promised one thing, the
         import did another, and the student had no way to notice the
         difference. The first occurrence wins, just as when counting. */
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
