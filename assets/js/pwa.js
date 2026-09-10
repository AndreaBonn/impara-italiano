/* ============================================================
   pwa.js — service worker registration and the new-version announcement.

   A separate file rather than a few lines in app.js: this is the only
   place in the whole course that assumes a server is present, while
   app.js is responsible for routes and the shell.

   Only EFFECTS live here: registration, listeners, the message, the
   reload. The decisions ("should we announce", "are we allowed to ask
   yet", "should we reload") sit in pwa-rules.js and know nothing about
   the browser.

   Classic script. Loads AFTER pwa-rules.js.
   ============================================================ */
(function (global) {
  "use strict";

  var rejestracja = null;

  /**
   * Whether the page had a controller AT LOAD TIME.
   *
   * Written once, at startup, and only read afterwards. Asking later
   * answers "yes" from the moment control is taken, so the first visit
   * would pretend to be an update and end in reloading a page the student
   * had only just opened.
   */
  var kontrolowana = false;
  var juzPrzeladowana = false;
  var ostatnieSprawdzenie = 0;

  function sw() { return global.navigator.serviceWorker; }

  /**
   * The message about a ready update: two ways out and neither is hidden.
   *
   * "Update" asks the waiting worker to take over and its role ends there —
   * the page reloads only once the takeover ACTUALLY happens
   * (controllerchange below). Reloading at this point would open the old
   * version once again.
   *
   * The cross dismisses without applying: the version stays in the queue
   * and the message comes back the next time the course is opened. A
   * persistent message, not a toast — this is not something to be missed
   * between one exercise and the next.
   */
  function zapowiedz(worker) {
    if (!global.PwaRules.ogloszenie({ czeka: !!worker, kontrolowana: kontrolowana })) return false;
    global.Notice.notice("pwa.updateReady", {
      actionKey: "pwa.updateNow",
      /* We ask for the waiting worker AT CLICK TIME, not for the one that
         was waiting when the message went up. A second release pushed out
         while the message is still on screen demotes the first worker to
         "redundant" — and Notice will not show the message twice under the
         same key. A remembered reference would leave the student with a
         button that does nothing and says nothing about it. */
      onAction: function () {
        var czeka = (rejestracja && rejestracja.waiting) || worker;
        czeka.postMessage({ typ: "przejmij" });
      }
    });
    return true;
  }

  /**
   * Watches the worker that is currently installing.
   *
   * `updatefound` arrives TOO EARLY: the worker is in the "installing"
   * state then and `registration.waiting` is still empty — an announcement
   * placed here would have nothing to announce. The transition to
   * "installed" fires no further event on the registration and is visible
   * only on the worker itself, through `statechange`.
   */
  function sledz(worker) {
    if (!worker) return;
    worker.addEventListener("statechange", function () {
      if (worker.state === "installed") zapowiedz(worker);
    });
  }

  /**
   * Asks the server about a new version, no more often than every PRZERWA.
   *
   * A missing network is not a fault to report here: the course is meant to
   * work without one, and asking about an update is the only thing that
   * then has no way to succeed.
   */
  function sprawdz() {
    if (!rejestracja) return false;
    var teraz = Date.now();
    if (!global.PwaRules.sprawdzac(ostatnieSprawdzenie, teraz)) return false;
    ostatnieSprawdzenie = teraz;
    rejestracja.update().catch(function () { return null; });
    return true;
  }

  /**
   * A return to the foreground — on an installed app that is the real
   * "opening of the course", more frequent than a page load.
   *
   * First the announcement of whatever is already waiting (a "later"
   * deferral comes back exactly here), and only then the question to the
   * server: the first is free and immediate, the second costs a request and
   * has a threshold.
   */
  function naPierwszyPlan() {
    if (global.document.visibilityState !== "visible") return;
    if (rejestracja && rejestracja.waiting) zapowiedz(rejestracja.waiting);
    sprawdz();
  }

  /**
   * Registration happens over http(s) ONLY.
   *
   * From file:// registration throws, and opening the course by
   * double-clicking is a project requirement, not an edge case. That is why
   * the guard sits on the protocol rather than in a try/catch, and why no
   * code path assumes the worker exists: without it the course loses
   * offline mode and nothing else.
   */
  function register() {
    if (!("serviceWorker" in global.navigator)) return false;
    if (!/^https?:$/.test(global.location.protocol)) return false;

    kontrolowana = !!sw().controller;
    ostatnieSprawdzenie = Date.now();   // registration itself IS a check

    /* A new worker taking over control. It arrives in tabs where nobody
       clicked anything too: since the new version already serves their
       requests, they must be running its code, not the old one. */
    sw().addEventListener("controllerchange", function () {
      if (!global.PwaRules.przeladowanie({
        kontrolowana: kontrolowana,
        juzPrzeladowana: juzPrzeladowana
      })) return;
      juzPrzeladowana = true;
      global.location.reload();
    });

    sw().register("sw.js").then(function (reg) {
      rejestracja = reg;
      /* Three ways into the same announcement, because when registration
         finishes an update can be in three different places: ready since a
         previous visit (waiting), mid-installation (installing — updatefound
         fired before we reached the listener), or still ahead of us
         (updatefound below). */
      if (reg.waiting) zapowiedz(reg.waiting);
      sledz(reg.installing);
      reg.addEventListener("updatefound", function () { sledz(reg.installing); });
    }).catch(function (err) {
      // losing offline mode does not break the course, but it must not vanish silently
      console.warn("[LinguAI] Service worker niezarejestrowany:", err && err.message);
    });

    global.document.addEventListener("visibilitychange", naPierwszyPlan);
    return true;
  }

  global.PWA = { register: register, check: sprawdz };

  /* Not addEventListener("load") alone: in a finished page this file is
     sometimes executed AFTER that event and the handler would never fire,
     and the course would then look like it works — without offline mode and
     without the update announcement, neither of which anyone watches from
     day to day. The same pattern as the application start in app.js. */
  if (global.document.readyState === "complete") register();
  else global.addEventListener("load", register);

})(window);
