/* ============================================================
   Tempo mowy.

   We check one thing the code does not show: whether the chosen speed
   really reaches the audio element. `playbackRate` set on the wrong object
   throws no error — the recording simply plays the same way, and an
   exercise about tempo stops being about anything.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test.describe("tempo mowy", () => {
  test("the sentence stays covered until the student reveals it", async ({ page }) => {
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");
    await expect(page.locator(".js-it")).toBeHidden();

    await page.click(".js-reveal");
    await expect(page.locator(".js-it")).toBeVisible();
    await expect(page.locator(".js-it")).not.toBeEmpty();
  });

  test("wybrane tempo dociera do odtwarzacza", async ({ page }) => {
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");

    const tempa = await page.evaluate(async () => {
      const widziane = [];
      const orig = HTMLMediaElement.prototype.play;
      HTMLMediaElement.prototype.play = function () {
        widziane.push(this.playbackRate);
        return Promise.resolve();
      };
      for (const r of ["1", "0.75", "1.25"]) {
        document.querySelector(`.js-play[data-rate="${r}"]`).click();
        await new Promise(s => setTimeout(s, 200));
      }
      HTMLMediaElement.prototype.play = orig;
      return widziane;
    });
    expect(tempa).toEqual([1, 0.75, 1.25]);
  });

  test("normalne tempo jest pierwsze, nie wolne", async ({ page }) => {
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");
    /* The order is content, not layout: starting from slow teaches listening
       to an Italian nobody speaks. */
    const pierwszy = page.locator(".js-play").first();
    await expect(pierwszy).toHaveAttribute("data-rate", "1");
  });

  test("the next sentence covers the text and advances the counter", async ({ page }) => {
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");
    await page.click(".js-reveal");
    const pierwsze = await page.textContent(".js-it");
    const licznikA = await page.textContent(".sp-num");

    await page.click(".js-next");
    await expect(page.locator(".js-it")).toBeHidden();
    expect(await page.textContent(".sp-num")).not.toBe(licznikA);

    await page.click(".js-reveal");
    expect(await page.textContent(".js-it")).not.toBe(pierwsze);
  });

  test("the state is announced to a screen reader", async ({ page }) => {
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");
    await expect(page.locator(".js-state")).toHaveAttribute("aria-live", "polite");
  });
});
