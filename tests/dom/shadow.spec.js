/* ============================================================
   Shadowing and consent for sending the voice.

   Playwright gets a fake device (`--use-fake-device-for-media-stream` in
   playwright.config.js), so the recording can be played through from start
   to finish. What CANNOT be reproduced here: a real permission denial —
   headless Chromium then returns a different error than the user's browser.
   That path is mapped in recorder.js and declared unverified.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test.describe("shadowing", () => {
  test("the recording cycle: the button state and the playback appear only after a recording", async ({ page }) => {
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
    /* The recording of the previous sentence has no right to stay on screen:
       it would be a comparison of your own voice against SOMEBODY ELSE'S
       sentence. */
    await expect(page.locator(".js-mine")).toBeHidden();
  });

  test("the state is announced, not only shown by colour", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    await expect(page.locator(".js-state")).toHaveAttribute("role", "status");
    await expect(page.locator(".js-state")).toHaveAttribute("aria-live", "polite");
  });
});

test.describe("zgoda na rozpoznawanie mowy", () => {
  test("the first call to listen() asks instead of sending the voice", async ({ page }) => {
    await page.goto("/index.html#/shadowing");
    await page.waitForSelector(".sh-it");
    expect(await page.evaluate(() => Core.state.settings.sttConsent)).toBe(false);

    const esito = await page.evaluate(() => new Promise(res => {
      Audio2.listen({ onstart: () => res("sent without asking") });
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

  test("the consent is remembered and it does not ask a second time", async ({ page }) => {
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
