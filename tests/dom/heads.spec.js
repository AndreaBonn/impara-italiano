/* ============================================================
   Screen headings on a phone.

   Every screen opens with a kicker, a large title and three or four lines of
   introduction; on a phone the first useful thing arrived halfway down the
   screen. The introduction now folds to two lines, and opens on request.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function oggi(page) {
  await page.goto("/index.html#/oggi");
  await page.waitForFunction(() => window.Views && window.Views.oggi);
  await page.waitForSelector(".view-head");
}

test("on a phone the introduction folds to two lines and opens on request", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await oggi(page);
  const wstep = page.locator(".view-head__intro");
  const linia = await wstep.evaluate(e => parseFloat(getComputedStyle(e).lineHeight));
  const zwiniety = (await wstep.boundingBox()).height;
  expect(zwiniety, "folded height").toBeLessThanOrEqual(linia * 2 + 2);

  const wiecej = page.locator(".view-head__more");
  await expect(wiecej).toBeVisible();
  await expect(wiecej).toHaveAttribute("aria-expanded", "false");
  await wiecej.click();
  await expect(wiecej).toHaveAttribute("aria-expanded", "true");
  expect((await wstep.boundingBox()).height, "open height").toBeGreaterThan(zwiniety);
});

test("on a desktop the introduction is whole and there is nothing to open", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await oggi(page);
  await expect(page.locator(".view-head__intro")).toBeVisible();
  await expect(page.locator(".view-head__more")).toBeHidden();
});

/* The overflow was measured once, at render: a window narrowed afterwards
   (a phone turned, a desktop window resized) kept a folded intro and no
   button to open it. */
test("narrowing the window after the render brings the button", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await oggi(page);
  await expect(page.locator(".view-head__more")).toBeHidden();
  await page.setViewportSize({ width: 375, height: 800 });
  await expect(page.locator(".view-head__more")).toBeVisible();
});
