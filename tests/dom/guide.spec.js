/* ============================================================
   The guide: a page that promises to say where everything is.

   The promise breaks silently and in both directions. A route listed in the
   map that nobody registered leads through the router back to the learning
   path — the button works, it just goes somewhere else. A screen added to
   the rail and left out of the map makes a page saying "every screen in
   order" simply keep quiet about it.

   Neither of the two is visible in the code or on the screen.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function przewodnik(page) {
  await page.goto("/index.html#/guida");
  await page.waitForSelector("#g-inizio");
}

test("all the sections are on the page", async ({ page }) => {
  await przewodnik(page);
  for (const id of ["inizio", "ordine", "lezione", "oggi", "ripasso",
                    "esame", "mappa", "backup", "bloccato"]) {
    await expect(page.locator("#g-" + id)).toBeVisible();
  }
});

test("the table of contents moves the focus to the section, not only the view", async ({ page }) => {
  await przewodnik(page);
  await page.locator('.js-toc[data-sekcja="esame"]').click();
  const id = await page.evaluate(() => document.activeElement.id);
  expect(id, "the focus after a click in the contents").toBe("g-esame");
});

test("an address with a section opens at it", async ({ page }) => {
  await page.goto("/index.html#/guida?s=backup");
  await page.waitForSelector("#g-backup");
  const id = await page.evaluate(() => document.activeElement.id);
  expect(id).toBe("g-backup");
});

/* The section name comes from the address, so it is sometimes stale: an old
   bookmark, a renamed section, a typo in a link. The view then raises
   `keepFocus` only when it really set the focus — otherwise it takes it away
   from the router too and the screen reader stays where it was BEFORE the
   move. The hit case is in the test above: without it this check would also
   pass for a view unable to jump to any section at all. */
test("an address with a non-existent section does not steal the content focus", async ({ page }) => {
  await page.goto("/index.html#/guida?s=nie-ma-takiej");
  await page.waitForSelector("#g-inizio");
  const id = await page.evaluate(() => document.activeElement.id);
  expect(id, "the focus after arriving with a wrong section name").toBe("main");
});

/* The first point: every route in the map has its view. */
test("no screen in the map leads nowhere", async ({ page }) => {
  await przewodnik(page);
  const sieroty = await page.evaluate(() =>
    [...document.querySelectorAll(".js-goto")]
      .map(b => b.getAttribute("data-route"))
      .filter(r => typeof window.Views[r] !== "function"));
  expect(sieroty, `trasy bez widoku: ${sieroty.join(", ")}`).toEqual([]);
});

/* The second point: the rail and the map speak about the same course. */
test("every rail entry is described in the map", async ({ page }) => {
  await przewodnik(page);
  const brakujace = await page.evaluate(() => {
    const wMapie = new Set([...document.querySelectorAll(".js-goto")]
      .map(b => b.getAttribute("data-route")));
    return [...document.querySelectorAll(".rail__item")]
      .map(b => b.getAttribute("data-route"))
      .filter(r => r !== "guida" && !wMapie.has(r));
  });
  expect(brakujace, `rail screens outside the map: ${brakujace.join(", ")}`).toEqual([]);
});

test("a button in the map opens its screen", async ({ page }) => {
  await przewodnik(page);
  await page.locator('.js-goto[data-route="suoni"]').click();
  await expect(page).toHaveURL(/#\/suoni/);
});

test("the placement test can be started from the guide", async ({ page }) => {
  await przewodnik(page);
  await page.locator(".js-place").click();
  await expect(page).toHaveURL(/#\/piazzamento/);
});

test("the guide strings exist in five languages", async ({ page }) => {
  await przewodnik(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("guida");
      const puste = window.I18n.missing().filter(k => /^(guide\.|nav\.guide)/.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
