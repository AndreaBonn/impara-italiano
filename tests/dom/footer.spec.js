/* ============================================================
   The footer: on every screen, and it survives a change of route.

   The failure this guards against is silent. `Views.shell.set` writes into
   `#main.innerHTML` at every route, so a footer that ended up inside <main>
   would show on the first screen — the one whoever added it was looking at —
   and disappear at the first click in the menu. Nothing in the console, no
   broken layout: just a footer that is there sometimes.

   Hence the check goes through several routes, and the last of them is a
   lesson, that is the screen that redraws #main most often.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const PROFIL = "https://github.com/AndreaBonn";

/* The footer holds two links, and they are addressed separately on purpose.
   A bare `.site-foot a` used to be unambiguous, and stopped being so the day
   the privacy notice was linked from here - in strict mode that reads as a
   failure of the footer rather than of the selector. Naming each one keeps
   the next link from breaking these tests too. */
const NAZWISKO = `.site-foot a[href="${PROFIL}"]`;
const PRYWATNOSC = '.site-foot a[href="#/privacy"]';

/** Waits for the engine and the course index. */
async function otworz(page) {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App && window.Core && window.Core.registry.levels.length > 0);
}

test("the footer holds the copyright sign and the name", async ({ page }) => {
  await otworz(page);
  const stopka = page.locator(".site-foot");
  await expect(stopka).toBeVisible();
  await expect(stopka).toContainText("©");
  await expect(stopka).toContainText("Andrea Bonacci");
});

test("the name leads to the GitHub profile, in a new tab", async ({ page }) => {
  await otworz(page);
  const link = page.locator(NAZWISKO);
  await expect(link).toHaveText("Andrea Bonacci");
  await expect(link).toHaveAttribute("href", PROFIL);
  await expect(link).toHaveAttribute("target", "_blank");
  /* Without `noopener` the opened page gets a handle on this one through
     `window.opener`. */
  await expect(link).toHaveAttribute("rel", /noopener/);
});

test("a change of screen does not take the footer away", async ({ page }) => {
  await otworz(page);

  for (const trasa of ["oggi", "percorso", "grammatica", "impostazioni"]) {
    await page.evaluate(r => window.App.go(r), trasa);
    await expect(page.locator(NAZWISKO), `route ${trasa}`).toHaveText("Andrea Bonacci");
    /* The privacy link rides on the same property, and it is the one that
       has to hold: the notice is reachable from the footer PRECISELY
       because the footer is on every screen. */
    await expect(page.locator(PRYWATNOSC), `route ${trasa}`).toBeVisible();
  }

  /* A lesson: the screen that rewrites #main at every exercise. */
  await page.evaluate(() => window.App.go("lezione", { id: "a1-u01-l1" }));
  await expect(page.locator(".exq, .lesson-top").first()).toBeVisible();
  await expect(page.locator(NAZWISKO)).toHaveText("Andrea Bonacci");
  await expect(page.locator(PRYWATNOSC)).toBeVisible();
});

/* The footer sits outside <main>, so it must not end up inside the landmark
   nor be swallowed by the rail: on a narrow screen the rail is off-canvas and
   the column takes the whole width. */
test("the footer stays visible on a narrow screen", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 720 });
  await otworz(page);
  const stopka = page.locator(".site-foot");
  await expect(stopka).toBeVisible();
  const poza = await page.evaluate(() => {
    const el = document.querySelector(".site-foot");
    return { wMain: !!el.closest("main"), prawy: el.getBoundingClientRect().right };
  });
  expect(poza.wMain, "the footer must not be inside <main>").toBe(false);
  expect(poza.prawy).toBeLessThanOrEqual(375);
});
