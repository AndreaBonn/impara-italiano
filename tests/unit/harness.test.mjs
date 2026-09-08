/* ============================================================
   Sprawdzenie samej piaskownicy. Jeśli te testy padają, to nie
   silnik jest zepsuty, tylko sposób, w jaki go wczytujemy —
   a wtedy każdy inny wynik w tym katalogu jest bez wartości.
   ============================================================ */
import { test } from "node:test";
import assert from "node:assert/strict";
import { loadEngine, makeStorage } from "./_harness.mjs";

test("piaskownica wystawia Core bez zmiany w aplikacji", () => {
  const box = loadEngine();
  assert.equal(typeof box.Core, "object");
  assert.equal(typeof box.Core.norm, "function");
});

test("norm zwęża białe znaki i przycina", () => {
  const box = loadEngine();
  assert.equal(box.Core.norm(" A  b "), "a b");
});

test("norm zdejmuje akcenty, chyba że proszono inaczej", () => {
  const box = loadEngine();
  assert.equal(box.Core.norm("perché"), "perche");
  assert.equal(box.Core.norm("perché", { keepAccents: true }), "perché");
});

test("podstawiony zegar nie płynie sam", () => {
  const box = loadEngine();
  let fired = false;
  box.sandbox.setTimeout(() => { fired = true; }, 180);
  assert.equal(fired, false, "timer nie może odpalić bez flush");
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
  box.Core.toast("wiadomość");
  assert.deepEqual(box.toasts, ["wiadomość"]);
});
