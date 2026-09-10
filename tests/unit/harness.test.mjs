/* ============================================================
   A check on the sandbox itself. If these tests fail, it is not the engine
   that is broken but the way we load it — and then every other result in
   this directory is worthless.
   ============================================================ */
import { test } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, makeStorage } from "./_harness.mjs";

test("piaskownica wystawia Core bez zmiany w aplikacji", () => {
  const box = loadEngine();
  assert.equal(typeof box.Core, "object");
  assert.equal(typeof box.Core.norm, "function");
});

test("norm collapses whitespace and trims", () => {
  const box = loadEngine();
  assert.equal(box.Core.norm(" A  b "), "a b");
});

test("norm removes the accents unless asked otherwise", () => {
  const box = loadEngine();
  assert.equal(box.Core.norm("perché"), "perche");
  assert.equal(box.Core.norm("perché", { keepAccents: true }), "perché");
});

test("the substituted clock does not run on its own", () => {
  const box = loadEngine();
  let fired = false;
  box.sandbox.setTimeout(() => { fired = true; }, 180);
  assert.equal(fired, false, "a timer must not fire without flush");
  box.flush();
  assert.equal(fired, true);
});

test("localStorage z limitem rzuca QuotaExceededError", () => {
  const storage = makeStorage({ limit: 10 });
  storage.setItem("a", "12345");
  assert.throws(() => storage.setItem("b", "12345678901"), /QuotaExceeded/);
});

test("toast trafia do zebranego rejestru zamiast do DOM", () => {
  const box = loadEngine();
  box.Core.toast("a message");
  assert.deepEqual(box.toasts, ["a message"]);
});
