/* ============================================================
   The side menu: groups, the screens it lists, the counters.

   Eighteen entries in one flat list left a newcomer with no idea where to
   start, and three whole screens (reading, writing, minimal pairs) were only
   reachable from the bottom of Training.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function otworz(page, lang) {
  if (lang) {
    await page.addInitScript(l => {
      if (sessionStorage.getItem("seeded")) return;
      localStorage.setItem("linguai.italiano.v2", JSON.stringify({ schema: 2, onboarded: true, settings: { lang: l } }));
      sessionStorage.setItem("seeded", "1");
    }, lang);
  }
  await page.goto("/index.html#/oggi");
  await page.waitForFunction(() => window.App && window.Core && window.Core.registry.levels.length > 0);
}

test("every menu entry sits in one of four named groups", async ({ page }) => {
  await otworz(page);
  const grupy = page.locator(".rail__group");
  await expect(grupy).toHaveCount(4);
  for (const g of await grupy.all()) {
    await expect(g.locator(".rail__group-title")).not.toBeEmpty();
  }
  const luzem = await page.evaluate(() =>
    [...document.querySelectorAll(".rail__item")].filter(b => !b.closest(".rail__group")).length);
  expect(luzem, "entries outside a group").toBe(0);
});

test("reading, writing and minimal pairs have their own menu entries", async ({ page }) => {
  await otworz(page);
  for (const trasa of ["lettura", "scrittura", "suoni"]) {
    const wpis = page.locator(`.rail__item[data-route="${trasa}"]`);
    await expect(wpis, trasa).toHaveCount(1);
    await expect(wpis, trasa).not.toHaveText("");
  }
  await page.locator('.rail__item[data-route="lettura"]').click();
  await expect(page).toHaveURL(/#\/lettura/);
  await expect(page.locator('.rail__item[data-route="lettura"]')).toHaveAttribute("aria-current", "page");
});

test("the counters say what they count and lead to Progress", async ({ page }) => {
  await otworz(page, "en");
  const licznik = page.locator("#railStats");
  await expect(licznik).toContainText(/in a row/);
  await licznik.click();
  await expect(page).toHaveURL(/#\/progressi/);
});

test("on a phone the open menu does not hide the course name under the button", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await otworz(page);
  await page.locator("#railToggle").click();
  await expect(page.locator("#rail")).toHaveClass(/is-open/);
  /* The panel slides in: measuring mid-transition compares the button with a name still off screen. */
  await page.waitForFunction(() => document.getElementById("rail").getBoundingClientRect().left >= 0);
  const [przycisk, nazwa] = await Promise.all([
    page.locator("#railToggle").boundingBox(),
    page.locator(".rail__brand").boundingBox()
  ]);
  const zachodzi = przycisk.x < nazwa.x + nazwa.width && nazwa.x < przycisk.x + przycisk.width &&
    przycisk.y < nazwa.y + nazwa.height && nazwa.y < przycisk.y + przycisk.height;
  expect(zachodzi, `button ${JSON.stringify(przycisk)} over name ${JSON.stringify(nazwa)}`).toBe(false);
});

/* On a phone every move went through the round button and an eighteen-entry
   menu; the three daily screens are now one tap away at the bottom. */
test("on a phone a bottom bar leads to the daily screens and opens the menu", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await otworz(page);
  const pasek = page.locator(".bottom-nav");
  await expect(pasek).toBeVisible();
  await expect(pasek.locator("[data-route]")).toHaveCount(3);
  await pasek.locator('[data-route="ripasso"]').click();
  await expect(page).toHaveURL(/#\/ripasso/);
  await expect(pasek.locator('[data-route="ripasso"]')).toHaveAttribute("aria-current", "page");
  await pasek.locator(".js-more").click();
  await expect(page.locator("#rail")).toHaveClass(/is-open/);
});

test("on a desktop there is no bottom bar", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  await otworz(page);
  await expect(page.locator(".bottom-nav")).toBeHidden();
  await expect(page.locator(".rail")).toBeVisible();
});

test("the bottom bar's More says whether the menu is open", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await otworz(page);
  const wiecej = page.locator(".bottom-nav .js-more");
  await expect(wiecej).toHaveAttribute("aria-expanded", "false");
  await wiecej.click();
  await expect(wiecej).toHaveAttribute("aria-expanded", "true");
});
