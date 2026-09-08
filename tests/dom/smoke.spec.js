/* ============================================================
   Sprawdzenie samej instalacji testów DOM.
   Jeśli to pada, żaden inny wynik w tym katalogu nic nie znaczy.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test("strona wstaje bez błędów w konsoli", async ({ page }) => {
  const errors = [];
  page.on("console", m => { if (m.type() === "error") errors.push(m.text()); });
  page.on("pageerror", e => errors.push(String(e)));

  await page.goto("/index.html");
  await expect(page.locator("#main")).toBeVisible();
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  expect(errors, `błędy w konsoli: ${errors.join(" | ")}`).toEqual([]);
});

test("silnik jest wczytany w komplecie", async ({ page }) => {
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

/* Powód istnienia własnego serwera: bez tego test czyta skrypt sprzed zmiany. */
test("serwer testowy nie pozwala cache'ować", async ({ page }) => {
  const res = await page.goto("/assets/js/core.js");
  expect(res.headers()["cache-control"]).toBe("no-store");
});
