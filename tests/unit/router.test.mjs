/* ============================================================
   The address, the choice of view and cleaning up after the previous one
   (assets/js/router.js).

   The router used to be part of app.js and ran in the browser only, so the
   one thing checking it was the DOM tests - and those go in through the
   interface, that is never through a hand-typed address nor a broken one.

   Three things whose breakage does not look like a failure:
   - an unknown route must show the learning path, not an empty screen;
   - `Views.onLeave` must fire EXACTLY ONCE and then be gone: that is the only
     place where the exam countdown stops after leaving the route;
   - after a route change the focus goes to the content, unless the view has
     claimed it itself.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, CORE } from "./_harness.mjs";

/**
 * An object from the sandbox realm compared by structure, not by prototype:
 * `node:vm` has an Object.prototype of its own, so a deepEqual on an object
 * from there reports "same structure but not reference-equal" - and says it
 * about EVERY result, correct ones included.
 */
function struktura(o) { return JSON.parse(JSON.stringify(o)); }

/**
 * The router with stubbed views. A view is a function, so the stub is a
 * function recording that it was called and with what - nothing more is
 * needed.
 *
 * Audio2 is a stub too, and deliberately: the question "does the router
 * silence the audio on every route change" is about the router, and pulling
 * the real audio engine in here would turn it into a question about audio.
 */
function silnik(trasy) {
  const box = loadEngine({ files: [...CORE, "assets/js/router.js"] });
  const wywolania = [];
  const uciszenia = [];
  const Views = { onLeave: null, keepFocus: false };

  (trasy || ["percorso"]).forEach((nazwa) => {
    Views[nazwa] = function (params) { wywolania.push({ route: nazwa, params: params }); };
  });

  box.sandbox.Views = Views;
  box.sandbox.Audio2 = { stop() { uciszenia.push(1); } };
  box.el("main");
  return { box: box, R: box.sandbox.Router, Views: Views, wywolania: wywolania, uciszenia: uciszenia };
}

describe("the address", () => {
  test("a route with no parameters is the address alone", () => {
    const { R } = silnik();
    assert.equal(R.encode("percorso"), "#/percorso");
    assert.equal(R.encode("percorso", {}), "#/percorso");
  });

  test("parameters go into the address and come back unchanged", () => {
    const { R } = silnik();
    const adres = R.encode("lezione", { id: "a1-u01-l1", level: "A1" });
    assert.equal(adres, "#/lezione?id=a1-u01-l1&level=A1");
    assert.deepEqual(struktura(R.decode(adres)), { route: "lezione", params: { id: "a1-u01-l1", level: "A1" } });
  });

  test("a value with a special character survives both directions", () => {
    /* The search box puts whatever the student typed into the address: a
       space, a question mark and an ampersand would cut the address apart
       were it not for the encoding. */
    const { R } = silnik();
    const fraza = "un caffè & un tè?";
    const wrocilo = R.decode(R.encode("cerca", { q: fraza })).params.q;
    assert.equal(wrocilo, fraza);
  });

  test("an unreadable address comes back as the learning path, not an empty screen", () => {
    const { R } = silnik();
    const domyslna = { route: "percorso", params: {} };
    assert.deepEqual(struktura(R.decode("")), domyslna, "an empty hash");
    assert.deepEqual(struktura(R.decode("#/")), domyslna, "just the slash");
    assert.deepEqual(struktura(R.decode("#/LEZIONE")), domyslna, "routes are lowercase");
    assert.deepEqual(struktura(R.decode("#somebody-elses")), domyslna, "an address from another site");
    assert.deepEqual(struktura(R.decode(null)), domyslna);
  });

  test("a parameter with no value is an empty string, not a missing key", () => {
    const { R } = silnik();
    assert.deepEqual(struktura(R.decode("#/lezione?id=")), { route: "lezione", params: { id: "" } });
  });
});

describe("moving to a route", () => {
  test("changing the address draws the view through hashchange, not directly", () => {
    const { R, box, wywolania } = silnik(["percorso", "lezione"]);
    R.listen();
    R.go("lezione", { id: "a1-u01-l1" });

    assert.equal(box.okno.location.hash, "#/lezione?id=a1-u01-l1");
    assert.deepEqual(struktura(wywolania), [{ route: "lezione", params: { id: "a1-u01-l1" } }]);
  });

  test("the same address still draws: the browser reports no change", () => {
    /* Clicking the nav entry we are already on must refresh the screen.
       Without this branch nothing happened and it looked like a freeze. */
    const { R, wywolania } = silnik(["percorso"]);
    R.listen();
    R.go("percorso");
    R.go("percorso");

    assert.equal(wywolania.length, 2);
  });

  test("arriving from a bookmark draws the route from the address", () => {
    const { R, box, wywolania } = silnik(["percorso", "lezione"]);
    R.listen();
    box.okno.idzNa("#/lezione?id=a1-u01-l1");

    assert.deepEqual(struktura(wywolania), [{ route: "lezione", params: { id: "a1-u01-l1" } }]);
  });

  test("a route with no view shows the learning path", () => {
    const { R, wywolania } = silnik(["percorso"]);
    R.render("niemategowidoku", {});

    assert.deepEqual(struktura(wywolania), [{ route: "percorso", params: {} }]);
    assert.equal(R.current.route, "niemategowidoku",
      "the address stays the one that was asked for: otherwise the course would quietly rewrite the address bar");
  });
});

describe("cleaning up after the previous view", () => {
  test("onLeave fires exactly once and then is gone", () => {
    /* The exam simulation has a countdown on setInterval. Without this hook
       the clock lived on after leaving the route and half an hour later closed
       a section on somebody else's screen. Two calls would be a second bug,
       not half of one. */
    const { R, Views, uciszenia } = silnik(["percorso", "lezione"]);
    let posprzatane = 0;
    Views.onLeave = function () { posprzatane++; };

    R.render("lezione", {});
    assert.equal(posprzatane, 1);
    assert.equal(Views.onLeave, null, "the contract is single-use");

    R.render("percorso", {});
    assert.equal(posprzatane, 1, "nobody has to remember to unregister");
    assert.equal(uciszenia.length, 2, "every render silences the audio as well");
  });

  test("a view that left nothing behind does not break the route change", () => {
    const { R, wywolania } = silnik(["percorso"]);
    R.render("percorso", {});
    assert.equal(wywolania.length, 1);
  });
});

describe("focus after a route change", () => {
  test("by default it lands on the content, so a screen reader starts from the top", () => {
    const { R, box } = silnik(["percorso"]);
    R.render("percorso", {});
    assert.equal(box.el("main").focused, 1);
  });

  test("a view that sets the focus itself keeps it", () => {
    /* The search view puts the focus on the input field. The router would
       take it away right afterwards, so this is declared with a flag rather
       than raced with a setTimeout. */
    const { R, box, Views } = silnik(["cerca"]);
    Views.cerca = function () { Views.keepFocus = true; };

    R.render("cerca", {});
    assert.equal(box.el("main").focused, 0);
  });

  test("the flag does not carry over to the next view", () => {
    const { R, box, Views } = silnik(["cerca", "percorso"]);
    Views.cerca = function () { Views.keepFocus = true; };

    R.render("cerca", {});
    R.render("percorso", {});
    assert.equal(box.el("main").focused, 1, "the second view did not claim the focus");
  });
});

describe("the shell hook", () => {
  test("onRender gets the route that was actually drawn", () => {
    const { R, wywolania } = silnik(["percorso", "lezione"]);
    const widziane = [];
    R.onRender = function (route) { widziane.push(route); };

    R.render("lezione", {});
    R.render("niemategowidoku", {});

    assert.deepEqual(widziane, ["lezione", "percorso"],
      "the nav must highlight what is on screen, not the route that was asked for");
    assert.equal(wywolania.length, 2);
  });

  test("a missing hook is not a failure: the router works without the shell", () => {
    const { R, wywolania } = silnik(["percorso"]);
    R.onRender = null;
    R.render("percorso", {});
    assert.equal(wywolania.length, 1);
  });
});
