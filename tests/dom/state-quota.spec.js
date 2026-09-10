/* ============================================================
   Full storage in a real browser.

   The unit tests check this against a substituted DOM, so they speak about
   the logic and not about what the student sees. Here it is the second that
   matters: whether the message really appears on the page and really stays,
   while an ordinary toast disappears.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Longer than the 3.2 s after which a toast disappears — otherwise the test tells nothing apart. */
const DŁUŻEJ_NIŻ_TOAST = 4200;

test("with storage full the message stays on the screen", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => {
    localStorage.setItem = function () {
      const e = new Error("QuotaExceededError");
      e.name = "QuotaExceededError";
      throw e;
    };
    window.Core.state.xp = 5;
    window.Core.save();
  });

  const stuck = page.locator(".toast--stuck");
  await expect(stuck).toBeVisible();
  await expect(stuck).toHaveAttribute("role", "alert");

  const tekst = await stuck.innerText();
  expect(tekst.length, "the message must not be an empty key").toBeGreaterThan(10);

  await page.waitForTimeout(DŁUŻEJ_NIŻ_TOAST);
  await expect(stuck, "still visible after a toast's lifetime").toBeVisible();
});

test("an ordinary toast in the same place disappears on its own", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => window.Core.toast("a test message"));
  await expect(page.locator(".toast").first()).toBeVisible();

  await page.waitForTimeout(DŁUŻEJ_NIŻ_TOAST);
  await expect(page.locator("#toastStack .toast")).toHaveCount(0);
});

test("the message can be dismissed and does not come back by itself", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => {
    localStorage.setItem = function () {
      const e = new Error("QuotaExceededError");
      e.name = "QuotaExceededError";
      throw e;
    };
    window.Core.save();
  });

  const stuck = page.locator(".toast--stuck");
  await expect(stuck).toBeVisible();

  const x = stuck.locator(".toast__x");
  await expect(x, "the close button must have a name for a screen reader")
    .toHaveAttribute("aria-label", /.{3,}/);
  await x.click();
  await expect(stuck).toHaveCount(0);
});

/* Measured, not estimated: the first version was 28 px and looked fine in a
   screenshot. On a phone 28 px is a target for a fingernail. */
test("on a narrow screen the message has a margin and the close button 44 px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => {
    localStorage.setItem = function () {
      const e = new Error("QuotaExceededError");
      e.name = "QuotaExceededError";
      throw e;
    };
    window.Core.save();
  });
  await page.waitForSelector(".toast--stuck");

  const m = await page.evaluate(() => {
    const el = document.querySelector(".toast--stuck");
    const x = document.querySelector(".toast__x");
    const b = el.getBoundingClientRect(), xb = x.getBoundingClientRect();
    return {
      przelew: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      lewa: Math.round(b.left),
      w: Math.round(xb.width), h: Math.round(xb.height)
    };
  });

  expect(m.przelew, "brak przewijania w poziomie").toBe(0);
  expect(m.lewa, "the message does not touch the edge of the screen").toBeGreaterThanOrEqual(8);
  expect(m.w).toBeGreaterThanOrEqual(44);
  expect(m.h).toBeGreaterThanOrEqual(44);
});

test("lesson progress survives a lack of space, the mistake cards give way", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  const wynik = await page.evaluate(async () => {
    /* Storage that accepts small writes only: a large state is rejected, a
       pruned one goes through. That is exactly the R6 situation. */
    const LIMIT = 3000;
    let ostatni = null;
    localStorage.setItem = function (k, v) {
      if (String(v).length > LIMIT) {
        const e = new Error("QuotaExceededError");
        e.name = "QuotaExceededError";
        throw e;
      }
      ostatni = String(v);
    };

    window.Core.state.lessons["a1-u01-l1"] = { done: true, best: 1, score: 10, total: 10, attempts: 1, ts: 1 };
    for (let i = 0; i < 60; i++) {
      window.Core.state.errors["k" + i] = {
        kind: "authored", tag: "g-presente", ef: 2.5, reps: 3, interval: 5,
        due: 1, lapses: 0, ts: 1000 + i, wypelniacz: "x".repeat(200)
      };
    }
    window.Core.save();
    await new Promise(r => setTimeout(r, 400));

    if (!ostatni) return { zapisano: false };
    const s = JSON.parse(ostatni);
    return {
      zapisano: true,
      lekcjaDone: !!(s.lessons["a1-u01-l1"] || {}).done,
      ileBledow: Object.keys(s.errors || {}).length
    };
  });

  expect(wynik.zapisano, "the save went through after pruning").toBe(true);
  expect(wynik.lekcjaDone, "the lesson progress survived").toBe(true);
  expect(wynik.ileBledow, "some of the mistake cards gave way").toBeLessThan(60);
});
