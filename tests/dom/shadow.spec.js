/* ============================================================
   Shadowing i zgoda na wysyłanie głosu.

   Playwright dostaje sztuczne urządzenie (`--use-fake-device-for-media-stream`
   w playwright.config.js), więc nagrywanie da się przejść od początku do
   końca. Czego NIE da się tu odtworzyć: prawdziwej odmowy uprawnienia —
   headless Chromium zwraca wtedy inny błąd niż przeglądarka użytkownika.
   Ta ścieżka jest zmapowana w recorder.js i zadeklarowana jako niesprawdzona.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test.describe("shadowing", () => {
  test("cykl nagrania: stan przycisku i odsłuch pojawiają się dopiero po nagraniu", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");

    const rec = page.locator(".js-rec");
    await expect(rec).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator(".js-mine")).toBeHidden();

    await rec.click();
    await expect(rec).toHaveAttribute("aria-pressed", "true");
    await page.waitForTimeout(500);
    await rec.click();

    await expect(page.locator(".js-mine")).toBeVisible();
    await expect(rec).toHaveAttribute("aria-pressed", "false");
    await expect(page.locator(".js-state")).toContainText(/\d/);
  });

  test("zmiana zdania kasuje poprzednie nagranie", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    await page.click(".js-rec");
    await page.waitForTimeout(400);
    await page.click(".js-rec");
    await expect(page.locator(".js-mine")).toBeVisible();

    await page.click(".js-next");
    /* Nagranie poprzedniego zdania nie ma prawa zostać na ekranie: byłoby
       porównaniem własnego głosu z CUDZYM zdaniem. */
    await expect(page.locator(".js-mine")).toBeHidden();
  });

  test("stan jest ogłaszany, nie tylko pokazany kolorem", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    await expect(page.locator(".js-state")).toHaveAttribute("role", "status");
    await expect(page.locator(".js-state")).toHaveAttribute("aria-live", "polite");
  });
});

test.describe("zgoda na rozpoznawanie mowy", () => {
  test("pierwsze wywołanie listen() pyta, zamiast wysłać głos", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    expect(await page.evaluate(() => Core.state.settings.sttConsent)).toBe(false);

    const esito = await page.evaluate(() => new Promise(res => {
      Audio2.listen({ onstart: () => res("wysłano bez pytania") });
      setTimeout(() => res(document.getElementById("sttConsent") ? "zapytano" : "nic"), 800);
    }));
    expect(esito).toBe("zapytano");
  });

  test("odmowa nie zapisuje zgody i zwraca fokus", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    await page.evaluate(() => { Audio2.listen({}); });
    await page.waitForSelector("#sttConsent");

    await page.click("#sttConsent .js-no");
    await expect(page.locator("#sttConsent")).toHaveCount(0);
    expect(await page.evaluate(() => Core.state.settings.sttConsent)).toBe(false);
  });

  test("zgoda jest zapamiętana i drugi raz się nie pyta", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    await page.evaluate(() => { Audio2.listen({}); });
    await page.waitForSelector("#sttConsent");
    await page.click("#sttConsent .js-yes");

    expect(await page.evaluate(() => Core.state.settings.sttConsent)).toBe(true);
    const drugi = await page.evaluate(() => new Promise(res => {
      Audio2.listen({ onerror: () => res("bez pytania") });
      setTimeout(() => res(document.getElementById("sttConsent") ? "zapytano znowu" : "bez pytania"), 700);
    }));
    expect(drugi).toBe("bez pytania");
  });

  test("okno zgody jest dialogiem i trzyma fokus", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    await page.evaluate(() => { Audio2.listen({}); });
    const box = page.locator("#sttConsent");
    await expect(box).toHaveAttribute("role", "dialog");
    await expect(box).toHaveAttribute("aria-modal", "true");
    expect(await page.evaluate(() => document.activeElement.className)).toContain("js-yes");

    await page.keyboard.press("Escape");
    await expect(box).toHaveCount(0);
  });
});
