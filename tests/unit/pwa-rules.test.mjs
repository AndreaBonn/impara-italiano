/* ============================================================
   The rules for announcing a new version (assets/js/pwa-rules.js).

   Three decisions, each guarding against something different, and none of
   them visible on screen when taken wrongly:

   - an announcement on the first visit looks like a fault to the student
     ("an update to what? I have only just arrived");
   - with no threshold between checks, switching windows turns into a burst
     of requests nobody will ever count;
   - a reload with no guard falls into a loop, and a reload on the first
     visit is a flash of the screen for no reason.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function reguly() {
  return loadEngine({ files: ["assets/js/pwa-rules.js"] }).sandbox.PwaRules;
}

describe("whether to announce a new version", () => {
  test("a waiting version on a page a worker already served: yes", () => {
    assert.equal(reguly().ogloszenie({ czeka: true, kontrolowana: true }), true);
  });

  /* The first worker also passes through "installed", so without this
     condition a first visit in a clean browser would end in a request to
     update a page opened a moment ago. */
  test("first visit: no, even though a worker has just installed", () => {
    assert.equal(reguly().ogloszenie({ czeka: true, kontrolowana: false }), false);
  });

  test("nothing is waiting: there is nothing to announce", () => {
    assert.equal(reguly().ogloszenie({ czeka: false, kontrolowana: true }), false);
  });

  test("a missing state neither blows up nor announces", () => {
    assert.equal(reguly().ogloszenie(undefined), false);
  });
});

describe("whether the server may be asked again", () => {
  const R = reguly();

  test("we have never asked yet: yes", () => {
    assert.equal(R.sprawdzac(0, 1000), true);
  });

  test("right after the previous question: no", () => {
    assert.equal(R.sprawdzac(1000, 1000 + R.PRZERWA - 1), false);
  });

  test("after the interval has passed: yes", () => {
    assert.equal(R.sprawdzac(1000, 1000 + R.PRZERWA), true);
  });

  /* A timezone change or a clock correction yields a negative gap. Without a
     branch of its own that would read as "not yet" for as long as the
     correction was — that is, silence until the page is reloaded. */
  test("a clock moved back: we ask instead of waiting indefinitely", () => {
    assert.equal(R.sprawdzac(5000, 1000), true);
  });

  test("the threshold can be supplied from outside, the default is not the only one", () => {
    assert.equal(R.sprawdzac(1000, 1500, 400), true);
    assert.equal(R.sprawdzac(1000, 1300, 400), false);
  });
});

describe("whether to reload after control is taken", () => {
  const R = reguly();

  test("a page under the old worker: yes, otherwise it runs old code over new files", () => {
    assert.equal(R.przeladowanie({ kontrolowana: true, juzPrzeladowana: false }), true);
  });

  test("first visit: no, because that is the first takeover, not a version change", () => {
    assert.equal(R.przeladowanie({ kontrolowana: false, juzPrzeladowana: false }), false);
  });

  test("a second event does not reload a second time", () => {
    assert.equal(R.przeladowanie({ kontrolowana: true, juzPrzeladowana: true }), false);
  });

  test("a missing state neither blows up nor reloads", () => {
    assert.equal(R.przeladowanie(null), false);
  });
});
