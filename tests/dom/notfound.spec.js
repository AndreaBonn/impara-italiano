/* ============================================================
   The not-found page, opened the way GitHub Pages serves it.

   404.html refers to everything from the root, under the prefix the site is
   published at (`/impara-italiano/...`). That is what makes it correct at
   any depth Pages hands it out at — and what makes it unopenable from the
   local server, where that prefix is not a directory. Opened by hand it
   arrives without its stylesheet, which looks like a bug and is not one.

   So the test does what Pages does: it rewrites the prefix away, and only
   then opens the page. That turns the awkward property into the assertion
   worth having — after the rewrite the stylesheet HAS to load, which proves
   the paths point at files that exist and not merely at plausible strings.
   scripts/check_404.mjs holds the other half, the shape of the references
   themselves, without a browser.

   The console assertion is the reason the font assertion stands next to it:
   "nothing went wrong" also passes on a page that drew nothing at all.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** The prefix the site is published at, as it appears inside 404.html. */
const PREFIKS = "/impara-italiano/";

/** The five languages of explanation, in the order of I18n.LANGS. */
const JEZYKI = ["pl", "en", "es", "fr", "de"];

/**
 * Serves the page the way Pages does: everything under the publication
 * prefix comes from the root of the local server.
 */
async function bezPrefiksu(page) {
  await page.route(`**${PREFIKS}**`, (route) => {
    const url = new URL(route.request().url());
    url.pathname = url.pathname.replace(PREFIKS, "/");
    return route.continue({ url: url.toString() });
  });
}

test("the page draws, styled, and reports nothing broken", async ({ page }) => {
  const bledy = [];
  page.on("pageerror", (e) => bledy.push(String(e)));
  page.on("console", (m) => { if (m.type() === "error") bledy.push(m.text()); });
  page.on("requestfailed", (r) => bledy.push(`${r.url()} — ${r.failure()?.errorText}`));

  await bezPrefiksu(page);
  await page.goto("/404.html");

  await expect(page.locator("h1")).toBeVisible();

  /* The stylesheet arrived: the display family only exists in app.css, which
     the page reaches through the absolute prefix. A wrong path leaves the
     heading in the browser's default serif and everything else looking
     roughly the same. */
  const krój = await page.locator("h1").evaluate((el) => getComputedStyle(el).fontFamily);
  expect(krój, "arkusz stylów kursu nie wczytał się przez prefiks").toContain("Spectral");

  expect(bledy, `błędy na stronie 404: ${bledy.join(" | ")}`).toEqual([]);
});

test("the sentence stands in all five languages of explanation", async ({ page }) => {
  await bezPrefiksu(page);
  await page.goto("/404.html");

  for (const kod of JEZYKI) {
    const wiersz = page.locator(`[lang="${kod}"]`);
    await expect(wiersz, `brak wiersza w języku ${kod}`).toHaveCount(1);
    await expect(wiersz).not.toBeEmpty();
  }
});

test("exactly one way back, and it opens the course", async ({ page }) => {
  await bezPrefiksu(page);
  await page.goto("/404.html");

  /* One, not "at least one": a lost visitor should not be choosing between
     two doors. The static gate counts the same thing without a browser. */
  const powroty = page.locator(`a[href="${PREFIKS}"]`);
  await expect(powroty).toHaveCount(1);

  await powroty.click();

  /* The course really came up, rather than the address merely changing:
     index.html is the only page here that builds the engine. */
  await page.waitForFunction(() => window.Core && window.Views);
  await expect(page.locator("#main")).toBeVisible();
});
