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

const DWIE_LEKCJE = {
  schema: 2, onboarded: true, settings: { lang: "en" },
  lessons: {
    "a1-u01-l1": { attempts: 1, score: 9, total: 10, best: 0.9, done: true, ts: 1 },
    "a1-u01-l2": { attempts: 1, score: 8, total: 10, best: 0.8, done: true, ts: 2 }
  },
  stats: { correct: 17, wrong: 3, lessonsDone: 2, days: {} }
};

test("after finished lessons an empty deck leads straight to their words", async ({ page }) => {
  await ripasso(page, DWIE_LEKCJE);
  const karta = page.locator(".review-start");
  await expect(karta).toBeVisible();
  await expect(karta).toContainText("2");
  await expect(karta.locator(".js-flash")).toHaveClass(/btn--primary/);
  await karta.locator(".js-flash").click();
  await expect(page).toHaveURL(/#\/cinque/);
});

test("with no lesson finished there is no such card, only the quiet button", async ({ page }) => {
  await ripasso(page);
  await expect(page.locator(".review-start")).toHaveCount(0);
  await expect(page.locator(".js-flash")).toHaveClass(/btn--ghost/);
});

test("the algorithm's name sits in a note that opens, not in the explanation", async ({ page }) => {
  await ripasso(page);
  await expect(page.locator("#ripassoBody .empty > p")).not.toContainText("FSRS");
  const nota = page.locator("#ripassoBody details");
  await expect(nota).toHaveCount(1);
  await nota.locator("summary").click();
  await expect(nota).toContainText("FSRS");
});

test("both tabs say how many items they hold, zero included", async ({ page }) => {
  await ripasso(page);
  const liczniki = page.locator(".js-tab .tab__n");
  await expect(liczniki).toHaveCount(2);
  await expect(liczniki.first()).toHaveText("0");
});
