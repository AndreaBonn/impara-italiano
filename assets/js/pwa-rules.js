/* ============================================================
   pwa-rules.js — the rules for announcing a new version of the course.

   Three questions, all three of them decisions rather than effects:
   should the new version be announced, are we allowed to ask the server
   again, should taking over control reload the page. None of them touches
   the DOM, the service worker or the clock — they take state and return
   "yes" or "no".

   The split is the same one lemma-morf.js and cils-html.js already use:
   a pure function apart from whatever touches the browser. The reason is
   sharper here than usual. This whole feature lives in worker states that
   doubles reproduce badly: a test on the real sequence needs two releases
   and two tabs, that is Playwright and a dozen seconds. Whatever can be
   settled without a browser should be settled without one.

   Classic script.
   ============================================================ */
(function (global) {
  "use strict";

  /**
   * The shortest gap between two questions to the server about a new version.
   *
   * The check runs on every return to the foreground, and on an installed
   * app that happens on every window switch: with no threshold, going back
   * and forth between two apps turns into a burst of requests. A quarter of
   * an hour is a compromise — a student coming back to the course after a
   * break gets a check immediately anyway, because they arrive through a
   * page load, not through a return to the foreground.
   */
  var PRZERWA = 15 * 60 * 1000;

  /**
   * Whether to announce a new version.
   *
   * Two conditions, not one. `czeka` says a new version is ready and
   * queued. `kontrolowana` says a previous worker was ALREADY serving the
   * page when it loaded — and without that second condition the first visit
   * would look exactly like an update, because the first worker also passes
   * through the "installed" state. The student would be asked to refresh a
   * page they had just opened.
   *
   * @param {{czeka: boolean, kontrolowana: boolean}} stan
   * @returns {boolean}
   */
  function ogloszenie(stan) {
    if (!stan) return false;
    return !!stan.czeka && !!stan.kontrolowana;
  }

  /**
   * Whether we may ask the server about a new version again.
   *
   * A clock moved backwards (a timezone change, a time correction) yields a
   * negative gap. Without a branch of its own that would read as "not yet"
   * for as long as the correction was — that is, silence until the page is
   * reloaded.
   *
   * @param {number} ostatnie moment of the last check (ms); 0 = never
   * @param {number} teraz    the current moment (ms)
   * @param {number} [przerwa] threshold in ms; PRZERWA by default
   * @returns {boolean}
   */
  function sprawdzac(ostatnie, teraz, przerwa) {
    var prog = przerwa === undefined ? PRZERWA : przerwa;
    if (!ostatnie) return true;
    if (teraz < ostatnie) return true;
    return teraz - ostatnie >= prog;
  }

  /**
   * Whether a new worker taking over control should reload the page.
   *
   * `kontrolowana` filters out the first visit: there control is taken by
   * the very first worker (clients.claim in activate) and a reload would be
   * a flash of the screen for no reason. `juzPrzeladowana` filters out the
   * loop: the event can arrive more than once, and a second attempt would
   * hit a page that is already loading.
   *
   * @param {{kontrolowana: boolean, juzPrzeladowana: boolean}} stan
   * @returns {boolean}
   */
  function przeladowanie(stan) {
    if (!stan) return false;
    return !!stan.kontrolowana && !stan.juzPrzeladowana;
  }

  global.PwaRules = {
    ogloszenie: ogloszenie,
    sprawdzac: sprawdzac,
    przeladowanie: przeladowanie,
    PRZERWA: PRZERWA
  };

})(window);
