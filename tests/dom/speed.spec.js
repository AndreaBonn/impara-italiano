/* ============================================================
   Tempo mowy.

   Sprawdzamy jedną rzecz, której nie widać z kodu: czy wybrane tempo
   naprawdę dociera do elementu audio. `playbackRate` ustawiony na
   niewłaściwym obiekcie nie rzuca błędem — nagranie po prostu leci tak
   samo, a ćwiczenie o tempie przestaje o czymkolwiek być.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test.describe("tempo mowy", () => {
  test("zdanie jest zakryte, dopóki uczeń go nie odkryje", async ({ page }) => {
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
    /* Kolejność jest treścią, nie układem: zaczynanie od wolnego uczy
       słuchać włoskiego, którym nikt nie mówi. */
    const pierwszy = page.locator(".js-play").first();
    await expect(pierwszy).toHaveAttribute("data-rate", "1");
  });

  test("następne zdanie zakrywa tekst i przesuwa licznik", async ({ page }) => {
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

  test("stan jest ogłaszany czytnikowi ekranu", async ({ page }) => {
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");
    await expect(page.locator(".js-state")).toHaveAttribute("aria-live", "polite");
  });
});
