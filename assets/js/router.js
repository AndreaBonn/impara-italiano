/* ============================================================
   router.js — the address in the hash, choosing the view, cleaning up
   after the previous one.

   Pulled out of app.js, which was four things at once: the router, the
   shell (side rail, theme), the language switcher and the application
   start. The router is the only one of them that does not touch specific
   page elements — it reads the hash, calls a view and enforces two
   contracts — so it is the only one that can be checked without a browser.

   The hash, not the History API: the course must also work from file://,
   where pushState has nowhere to write.

   Two contracts, both one-shot and both called EXCLUSIVELY from here:

   - `Views.onLeave` — a view that left something running (an exam
     countdown, a dialogue sequence) registers its cleanup here. The router
     calls it at the next route change and clears it immediately, so nobody
     has to remember to unregister. Without this the exam simulation clock
     kept running and half an hour later closed a section on somebody
     else's screen.
   - `Views.keepFocus` — by default, after a route change the focus lands
     on the content container, so a screen reader reads the page from the
     top. A view that sets the focus itself (the search) raises this flag.

   `Router.onRender` is a hook for the shell: app.js attaches the rail
   highlighting and the drawer closing there. The router does not know
   those elements and has no reason to.

   Classic script. Requires Views and Audio2 at render time, not at load
   time.
   ============================================================ */
(function (global) {
  "use strict";

  var current = { route: "percorso", params: {} };

  /** The route the course falls back to when the address is empty or unreadable. */
  var DOMYSLNA = "percorso";

  function encode(route, params) {
    var q = Object.keys(params || {}).map(function (k) {
      return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
    }).join("&");
    return "#/" + route + (q ? "?" + q : "");
  }

  /**
   * Address -> route and parameters. A route name is lower-case letters
   * only: anything that does not fit (an empty hash, an address from
   * another site, a hand-made typo) comes back as the learning path rather
   * than an empty screen.
   */
  function decode(hash) {
    var m = /^#\/([a-z]+)(?:\?(.*))?$/.exec(hash || "");
    if (!m) return { route: DOMYSLNA, params: {} };
    var params = {};
    (m[2] || "").split("&").filter(Boolean).forEach(function (pair) {
      var kv = pair.split("=");
      params[decodeURIComponent(kv[0])] = decodeURIComponent(kv[1] || "");
    });
    return { route: m[1], params: params };
  }

  /**
   * Renders a route. An unknown route is not a failure: the course shows
   * the learning path. A forgotten view `<script>` therefore looks like a
   * working course with one menu entry leading somewhere else — which is
   * why a separate test guards it (tests/dom/routes.spec.js), and not the
   * router itself.
   */
  function render(route, params) {
    if (global.Audio2) global.Audio2.stop();

    var Views = global.Views;
    if (typeof Views.onLeave === "function") {
      var sprzatnij = Views.onLeave;
      Views.onLeave = null;
      sprzatnij();
    }
    current = { route: route, params: params };
    Views.keepFocus = false;

    var fn = Views[route];
    if (!fn) { Views[DOMYSLNA]({}); route = DOMYSLNA; }
    else fn(params);

    if (typeof Router.onRender === "function") Router.onRender(route, params);

    if (!Views.keepFocus) {
      var main = global.document.getElementById("main");
      main.focus({ preventScroll: true });
    }
  }

  /**
   * Going to a route. When the address does not change the browser fires no
   * `hashchange` and the view would not refresh at all — hence the direct
   * render.
   */
  function go(route, params) {
    var h = encode(route, params);
    if (global.location.hash === h) render(route, params || {});
    else global.location.hash = h;
  }

  function onHashChange() {
    var d = decode(global.location.hash);
    render(d.route, d.params);
  }

  var Router = {
    encode: encode,
    decode: decode,
    go: go,
    render: render,
    onHashChange: onHashChange,
    /** The route currently on screen — for redrawing after a language change. */
    get current() { return current; },
    /** Attached by the shell (app.js), called after every render. */
    onRender: null,
    listen: function () { global.addEventListener("hashchange", onHashChange); }
  };

  global.Router = Router;

})(window);
