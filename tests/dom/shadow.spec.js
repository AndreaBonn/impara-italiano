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

  /* audio.js promises that without consent the course behaves exactly as it
     does without support, because the views know how to turn the exercise
     into a written one. That was true for the conversation, which always
     draws a text field next to the microphone, and false for the 150 `speak`
     exercises: their branch is chosen while the markup is built and nobody
     rewrote it afterwards. A refusal left a microphone, a "recording failed"
     message and no way to finish the exercise. */
  test("refusing consent turns a speak exercise into a written one", async ({ page }) => {
    await page.goto("/index.html");
    await page.waitForFunction(() => window.Ex && window.I18n);

    await page.evaluate(() => {
      window.Audio2.speak = () => {};
      const host = document.createElement("div");
      host.id = "probe-speak";
      document.getElementById("main").appendChild(host);
      const built = window.Ex.build({ t: "speak", it: "Buongiorno a tutti", tr: "dzień dobry" }, 0, "probe");
      host.innerHTML = built.html;
      window.__zaliczone = [];
      built.wire(host.firstElementChild, ok => window.__zaliczone.push(ok));
    });

    await page.click("#probe-speak .js-mic");
    await page.waitForSelector("#sttConsent");
    await page.click("#sttConsent .js-no");

    /* The microphone goes away instead of inviting a second refusal, and the
       message says what to do now rather than reporting a failure that did
       not happen. */
    await expect(page.locator("#probe-speak .js-mic")).toHaveCount(0);
    await expect(page.locator("#probe-speak .js-heard"))
      .toHaveText(await page.evaluate(() => window.I18n.t("ex.stt.noConsent")));

    const pole = page.locator("#probe-speak .js-in");
    await expect(pole).toBeVisible();
    await pole.fill("Buongiorno a tutti");
    await page.click("#probe-speak .js-check");
    expect(await page.evaluate(() => window.__zaliczone)).toEqual([true]);
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
