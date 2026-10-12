/* ============================================================
   Notices that inform, and empty screens that lead somewhere.

   The red "trap" callout was used for plain information (a feature needs a
   key, the simulator scores two skills): it read as a failure. And an empty
   vocabulary showed three zero tiles above the message, with no way out.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function trasa(page, r) {
  await page.goto("/index.html#/" + r);
  await page.waitForFunction(() => window.App && window.Core && window.Core.registry.levels.length > 0);
}

test("the key notice of the free conversation is information, and leads to Settings", async ({ page }) => {
  await trasa(page, "chiacchiere");
  const avviso = page.locator(".callout--info").first();
  await expect(avviso).toBeVisible();
  await expect(page.locator(".callout--trap")).toHaveCount(0);
  await avviso.locator(".js-settings").click();
  await expect(page).toHaveURL(/#\/impostazioni/);
});

test("the exam notice before the list is information, not an error", async ({ page }) => {
  await trasa(page, "esame");
  await expect(page.locator(".callout--info").first()).toBeVisible();
  await expect(page.locator(".callout--trap")).toHaveCount(0);
});

test("an empty vocabulary shows one message with a way to a lesson", async ({ page }) => {
  await trasa(page, "lessico");
  await expect(page.locator(".stat-card")).toHaveCount(0);
  await expect(page.locator(".empty")).toBeVisible();
  await page.locator(".empty .js-go").click();
  await expect(page).toHaveURL(/#\/lezione\?id=a1-u01-l1/);
});

test("a vocabulary with cards still shows its counters", async ({ page }) => {
  await trasa(page, "lessico");
  await page.evaluate(() => { window.Core.addCard("il treno", "train", "a1-u01-l3"); window.App.go("percorso"); window.App.go("lessico"); });
  await expect(page.locator(".stat-card")).toHaveCount(3);
  await expect(page.locator(".empty")).toHaveCount(0);
});
