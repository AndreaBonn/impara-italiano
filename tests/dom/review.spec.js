/* ============================================================
   The Review tab when nothing is due.

   With two lessons finished and no starred word the deck is empty, and the
   one useful action (five minutes on the words of those lessons) used to be a
   secondary button under an explanation of the scheduling algorithm.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function ripasso(page, profil) {
  if (profil) {
    await page.addInitScript(p => {
      if (sessionStorage.getItem("seeded")) return;
      localStorage.setItem("linguai.italiano.v2", JSON.stringify(p));
      sessionStorage.setItem("seeded", "1");
    }, profil);
  }
  await page.goto("/index.html#/ripasso");
  await page.waitForFunction(() => window.App && window.Core && window.Core.registry.levels.length > 0);
  await page.waitForSelector("#ripassoBody .empty");
}


test("both tabs say how many items they hold, zero included", async ({ page }) => {
  await ripasso(page);
  const liczniki = page.locator(".js-tab .tab__n");
  await expect(liczniki).toHaveCount(2);
  await expect(liczniki.first()).toHaveText("0");
});
