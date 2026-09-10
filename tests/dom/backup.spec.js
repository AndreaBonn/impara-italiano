/* ============================================================
   The backup reminder in a real browser.

   The unit tests say WHEN the threshold is crossed. What matters here is
   what they cannot see: whether the message really stands on the screen,
   whether the button really downloads a file and whether after the download
   the counter really starts from zero. A reminder whose button does nothing
   passes every logic test and saves nobody's progress.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const PROG = 10;

/** Passes PROG different lessons the way the end of a lesson does in the view. */
async function zdajProgLekcji(page) {
  await page.evaluate((ile) => {
    for (let i = 0; i < ile; i++) window.Core.recordLesson("test-l" + i, 10, 10, 60);
  }, PROG);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);
});

test("after the tenth finished lesson the message stands on the screen", async ({ page }) => {
  await expect(page.locator(".toast--stuck"), "przed progiem nic nie wisi").toHaveCount(0);

  await zdajProgLekcji(page);

  const stuck = page.locator(".toast--stuck");
  await expect(stuck).toBeVisible();
  await expect(stuck).toHaveAttribute("role", "alert");

  const tekst = await stuck.innerText();
  expect(tekst, "napis, nie sam klucz i18n").not.toContain("core.backupDue");
  expect(tekst, "liczba lekcji dociera do napisu").toContain(String(PROG));
});

test("the button in the message downloads a file and moves the threshold", async ({ page }) => {
  await zdajProgLekcji(page);

  const przycisk = page.locator(".toast__act");
  await expect(przycisk).toBeVisible();

  /* A touch target, not an icon: with btn--sm it came out at 36 px. */
  const pole = await przycisk.boundingBox();
  expect(pole.height, "cel dotykowy na telefonie").toBeGreaterThanOrEqual(44);

  /* The button sat in the line of text and climbed onto the last line of the
     message: the contrast and the touch target were fine, and the text could
     not be read to the end. Measured with a range over the text node,
     because the text is a direct child of the message and has no rectangle
     of its own. */
  const nachodzi = await page.evaluate(() => {
    const box = document.querySelector(".toast--stuck");
    const zakres = document.createRange();
    zakres.selectNode(box.firstChild);
    return zakres.getBoundingClientRect().bottom >
      document.querySelector(".toast__act").getBoundingClientRect().top;
  });
  expect(nachodzi, "the button does not cover the last line").toBe(false);

  const [plik] = await Promise.all([
    page.waitForEvent("download"),
    przycisk.click()
  ]);
  expect(plik.suggestedFilename()).toMatch(/^impara-italiano-.+\.json$/);

  await expect(page.locator(".toast--stuck"), "komunikat znika po akcji").toHaveCount(0);
  expect(await page.evaluate(() => window.Core.backupDue()), "the threshold counted afresh").toBe(false);
});

test("a dismissed message does not come back after another lesson in the same session", async ({ page }) => {
  await zdajProgLekcji(page);
  await page.locator(".toast--stuck .toast__x").click();
  await expect(page.locator(".toast--stuck")).toHaveCount(0);

  await page.evaluate(() => window.Core.recordLesson("test-l99", 10, 10, 60));
  await expect(page.locator(".toast--stuck"), "no pestering after every lesson").toHaveCount(0);

  /* The pair to the one above: if the reminder never came back after being
     dismissed, that assertion would be green too and would mean nothing. */
  await page.evaluate((ile) => {
    for (let i = 0; i < ile; i++) window.Core.recordLesson("test-p" + i, 10, 10, 60);
  }, PROG);
  await expect(page.locator(".toast--stuck"), "it comes back after another ten").toBeVisible();
});

test("at 375 px the message fits in the window", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 720 });
  await zdajProgLekcji(page);
  await expect(page.locator(".toast--stuck")).toBeVisible();

  const przelewa = await page.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(przelewa, "brak poziomego przewijania strony").toBe(false);

  const pole = await page.locator(".toast--stuck").boundingBox();
  expect(pole.x, "the left edge inside the window").toBeGreaterThanOrEqual(0);
  expect(pole.x + pole.width, "the right edge inside the window").toBeLessThanOrEqual(375);
});
