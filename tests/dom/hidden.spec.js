/* ============================================================
   The `hidden` attribute really hides.

   The browser rule is a plain [hidden]{display:none}, so any class with a
   `display` of its own beats it on specificity and the attribute stops doing
   anything. Nothing falls over: the element simply stays on screen, and in
   the HTML it looks correct.

   This defect has happened twice already — the drawer scrim and the "next"
   button in training — so it is checked once, for all of them.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test("the drawer scrim is hidden while the menu is closed", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await expect(page.locator("#railScrim")).toBeHidden();
});

test("the next button in training appears only after an answer", async ({ page }) => {
  await page.goto("/index.html#/allenamento");
  await page.waitForSelector(".js-topic");
  await page.locator('.js-topic[data-topic="numeri"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  await expect(page.locator(".js-next")).toBeHidden();
  await page.locator(".exq .js-in").fill("cokolwiek");
  await page.locator(".exq .js-check").click();
  await expect(page.locator(".js-next")).toBeVisible();
});

test("the review badge is hidden when there is nothing to review", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await expect(page.locator("#dueBadge")).toBeHidden();
});

/* The point: not "is this one element hidden", but whether the rule works
   regardless of the class the element carries. */
test("no element with hidden takes up space, whatever class it carries", async ({ page }) => {
  await page.goto("/index.html#/allenamento");
  await page.waitForSelector(".js-topic");

  const widoczne = await page.evaluate(() => {
    const zle = [];
    document.querySelectorAll("[hidden]").forEach(el => {
      if (getComputedStyle(el).display !== "none") {
        zle.push(el.className || el.id || el.tagName);
      }
    });
    return zle;
  });

  expect(widoczne, `elements with hidden that are drawn anyway: ${widoczne.join(", ")}`).toEqual([]);
});

/* The fourteen-day chart has a minimum width of its own: without wrapping it
   pushed the whole page off screen at 375 px. */
test("no route scrolls horizontally on a narrow screen", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App && window.Core.registry.levels.length);

  const TRASY = ["percorso", "oggi", "ripasso", "allenamento", "suoni", "lettura",
    "scrittura", "piazzamento", "cerca", "grammatica", "coniugatore", "lessico",
    "progressi", "impostazioni"];
  const zle = [];
  for (const tr of TRASY) {
    await page.evaluate(t => { location.hash = "#/" + t; }, tr);
    await page.waitForTimeout(220);
    const o = await page.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (o > 0) zle.push(tr + " (+" + o + "px)");
  }
  expect(zle, `trasy z przewijaniem w poziomie: ${zle.join(", ")}`).toEqual([]);
});
