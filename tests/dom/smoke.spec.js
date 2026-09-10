/* ============================================================
   A check on the DOM test setup itself.
   If this fails, no other result in this directory means anything.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test("the page comes up with no console errors", async ({ page }) => {
  const errors = [];
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", e => errors.push(String(e)));

  await page.goto("/index.html");
  await expect(page.locator("#main")).toBeVisible();
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  expect(errors, `console errors: ${errors.join(" | ")}`).toEqual([]);
});

test("the engine is loaded in full", async ({ page }) => {
  await page.goto("/index.html");
  const present = await page.evaluate(() => ({
    core: typeof window.Core,
    i18n: typeof window.I18n,
    ex: typeof window.Ex,
    verbs: typeof window.Verbs,
    audio: typeof window.Audio2,
    views: typeof window.Views,
    app: typeof window.App
  }));
  expect(present).toEqual({
    core: "object", i18n: "object", ex: "object", verbs: "object",
    audio: "object", views: "object", app: "object"
  });
});

/* Why we have a server of our own: without it a test reads the script from before the change. */
test("the test server does not allow caching", async ({ page }) => {
  const res = await page.goto("/assets/js/core.js");
  expect(res.headers()["cache-control"]).toBe("no-store");
});
