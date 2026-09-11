/* ============================================================
   retention.js — the effects behind coming back tomorrow.

   The decisions are next door in retention-rules.js and are arithmetic; what
   is here is the half that cannot be reproduced outside a browser: a
   permission prompt, an icon badge painted by the operating system, an
   installation offer that only one family of browsers ever fires, and a file
   going to disk. Same split as pwa-rules.js against pwa.js.

   FOUR THINGS, and none of them is a notification, because notifications are
   the thing this course cannot have. Scheduled ones (`TimestampTrigger`)
   were removed from the only browser that shipped them, and push needs a
   server to push from. Rather than promise a reminder the browser will not
   deliver, the reminder is handed to the student's calendar (ics.js).

   1. PERMANENT STORAGE. The profile lives in localStorage and there is no
      account and no sync, so whatever the browser evicts is gone for good.
      `persist()` asks it not to. One attempt per profile: the refusal is
      remembered by the browser, not by us.
   2. THE BADGE. The number of cards waiting, painted on the app icon. Off
      until the student turns it on: it is the only thing the course draws
      outside its own page, and it is visible to whoever is holding the
      phone.
   3. THE INSTALLATION OFFER. Not marketing: installing is what makes the
      storage grant likely and the badge visible at all. Once, after a few
      lessons, and a refusal is final.
   4. THE REMINDER FILE. Built by ics.js, handed over the same way the backup
      is.

   EVERY BROWSER API HERE IS OPTIONAL and half of them are missing on any
   given platform: Firefox has no `beforeinstallprompt`, iOS has no badge
   outside an installed app, `file://` has no storage manager worth asking.
   So each one is feature-detected and the course simply does less, never
   worse — and the settings screen reads these same flags rather than
   drawing a control that would do nothing.

   Classic script. Requires core.js, retention-rules.js, ics.js, notice.js.
   ============================================================ */
(function (global) {
  "use strict";

  var R = global.RetentionRules;

  /** The deferred installation event, when the browser has given us one. */
  var odlozony = null;

  function stan() {
    var s = global.Core && global.Core.state;
    return (s && s.retention) || {};
  }

  function zapisz() { global.Core.save(); }

  /* ---------------- What this browser can actually do ---------------- */

  function magazyn() {
    var n = global.navigator;
    return (n && n.storage && typeof n.storage.persist === "function") ? n.storage : null;
  }

  function odznakiDostepne() {
    return typeof global.navigator.setAppBadge === "function";
  }

  /**
   * Whether the course is already running as an installed app.
   *
   * Two ways to tell, because the two platforms that matter disagree:
   * `display-mode` is the standard and Safari answers with a property of its
   * own. A missing `matchMedia` is not a branch for its own sake — the unit
   * sandbox has none, and neither does anything else that runs this file
   * outside a page.
   */
  function samodzielna() {
    var mm = global.matchMedia;
    if (mm && mm("(display-mode: standalone)").matches) return true;
    return global.navigator.standalone === true;
  }

  /* ---------------- 1. Permanent storage ---------------- */

  /**
   * Asks the browser to keep this profile, at most once per profile.
   *
   * `persisted()` first: a profile that already has the grant must never see
   * a prompt, and on an installed app the browser often grants it without
   * asking anybody. Only when that comes back false does the rule get to
   * decide whether this is the moment to spend our one attempt.
   */
  function zadbajOMiejsce() {
    var m = magazyn();
    if (!m) return;
    m.persisted().then(function (juz) {
      if (juz) {
        if (!stan().trwale) { stan().trwale = true; zapisz(); }
        return;
      }
      if (!R.pytacOMiejsce({
        lekcje: global.Core.state.stats.lessonsDone,
        pytano: stan().pytanoOMiejsce,
        trwale: stan().trwale
      })) return;

      stan().pytanoOMiejsce = true;
      zapisz();
      m.persist().then(function (dane) {
        stan().trwale = !!dane;
        zapisz();
      }, function () { /* refused or unavailable: the flag stays false */ });
    }, function () { /* a storage manager that will not answer is one we do not have */ });
  }

  /* ---------------- 2. The badge ---------------- */

  /**
   * Paints the number of cards waiting, or takes it down.
   *
   * Set when the tab goes away and cleared when it comes back, because
   * nothing can update it in between: this is the whole reason the count
   * looks a day ahead (see `odznaka` in retention-rules.js). A badge left
   * behind after the student has done their reviews would be the one thing
   * here that lies.
   */
  function pomaluj() {
    if (!odznakiDostepne() || !stan().odznaka) return;
    /* Both decks, the same two the rail badge adds up (app.js): the number
       on the icon and the number in the course have to mean the same thing. */
    var n = R.odznaka([global.Core.state.srs, global.Core.state.errors], Date.now());
    if (n > 0) global.navigator.setAppBadge(n);
    else global.navigator.clearAppBadge();
  }

  function zdejmij() {
    if (!odznakiDostepne()) return;
    global.navigator.clearAppBadge();
  }

  /** Turning the badge on or off from the settings, with immediate effect. */
  function ustawOdznake(wlaczona) {
    stan().odznaka = !!wlaczona;
    zapisz();
    if (wlaczona) pomaluj();
    else zdejmij();
  }

  /* ---------------- 3. The installation offer ---------------- */

  /**
   * The browser telling us it could install the course.
   *
   * Chromium only. The default is prevented so that the browser's own bar
   * does not appear on top of the course; from that moment the offer is ours
   * to make, and if we never make it nothing is shown at all — which is why
   * the rule below decides immediately rather than at some later screen.
   */
  function przechwyc(ev) {
    ev.preventDefault();
    odlozony = ev;
    if (!R.proponowacInstalacje({
      lekcje: global.Core.state.stats.lessonsDone,
      pytano: stan().pytanoOInstalacje,
      odrzucona: stan().instalacjaOdrzucona,
      samodzielna: samodzielna()
    })) return;

    stan().pytanoOInstalacje = true;
    zapisz();
    global.Notice.notice("ret.installReady", {
      actionKey: "ret.installNow",
      onAction: zainstaluj,
      /* Dismissing IS the refusal, and it is kept: the alternative is an
         invitation that returns every few lessons. */
      onDismiss: function () { stan().instalacjaOdrzucona = true; zapisz(); }
    });
  }

  /**
   * Hands the browser's own installation dialogue over.
   *
   * The event is single-use: after `prompt()` it is spent, so it is dropped
   * here rather than kept around as a button that silently does nothing the
   * second time.
   */
  function zainstaluj() {
    if (!odlozony) return false;
    var ev = odlozony;
    odlozony = null;
    ev.prompt();
    return true;
  }

  /** Whether there is an installation to offer at this moment. */
  function mozliwaInstalacja() { return !!odlozony; }

  /* ---------------- 4. The reminder file ---------------- */

  /**
   * Writes the daily reminder to disk and remembers the hour.
   *
   * The identifier is random and made here: ics.js takes it as an argument
   * precisely so that it stays a pure function of its inputs. Two downloads
   * are therefore two different events, which is what a calendar needs in
   * order not to overwrite the first one.
   */
  function pobierzPrzypomnienie(godzina, minuta) {
    var tekst = global.Ics.przypomnienie({
      godzina: godzina,
      minuta: minuta,
      tytul: global.I18n.t("ret.icsTitle"),
      opis: global.I18n.t("ret.icsBody"),
      uid: "linguai-" + Date.now() + "-" + Math.floor(Math.random() * 1e9) + "@impara-italiano",
      teraz: Date.now()
    });

    stan().przypomnienie = { godzina: godzina, minuta: minuta };
    zapisz();

    var blob = new global.Blob([tekst], { type: "text/calendar;charset=utf-8" });
    var a = global.document.createElement("a");
    a.href = global.URL.createObjectURL(blob);
    a.download = "impara-italiano.ics";
    a.click();
    global.setTimeout(function () { global.URL.revokeObjectURL(a.href); }, 1000);
    return tekst;
  }

  /* ---------------- Wiring ---------------- */

  /**
   * Called once from app.js, after the state is loaded.
   *
   * The storage question is asked HERE rather than at the end of a lesson,
   * and the difference is what the student is doing at that moment: a
   * permission prompt over a lesson summary interrupts something, while the
   * same prompt on the next opening arrives before anything has started.
   */
  function start() {
    zdejmij();
    zadbajOMiejsce();

    global.addEventListener("beforeinstallprompt", przechwyc);
    global.addEventListener("appinstalled", function () {
      odlozony = null;
      stan().pytanoOInstalacje = true;
      zapisz();
    });

    global.document.addEventListener("visibilitychange", function () {
      if (global.document.visibilityState === "hidden") pomaluj();
      else zdejmij();
    });
    return true;
  }

  global.Retention = {
    start: start,
    ustawOdznake: ustawOdznake,
    pobierzPrzypomnienie: pobierzPrzypomnienie,
    zainstaluj: zainstaluj,
    mozliwaInstalacja: mozliwaInstalacja,
    samodzielna: samodzielna,
    /* What the settings screen asks before drawing a control, so that a
       browser without the API gets the instructions instead of a dead
       button. */
    wspiera: {
      miejsce: function () { return !!magazyn(); },
      odznaka: odznakiDostepne
    }
  };

})(window);
