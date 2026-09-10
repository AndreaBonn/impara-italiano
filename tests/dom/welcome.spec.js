/* ============================================================
   The welcome screen: who sees it and when it stops.

   A mistake in either direction is silent. Too narrow: a new student lands
   straight in fifteen tabs and starts at A1 despite knowing the language —
   that is exactly the state the screen was created for. Too wide: somebody
   with forty lessons behind them is asked at startup "where do I start", as
   if the course did not remember them.

   The third case, the easiest to break: the marker is set by the CHOICE, not
   by the screen being shown. Set too early, it means an accidental refresh
   takes that one answer away from the student for good.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const KLUCZ = "linguai.italiano.v2";

/** Puts a profile INTO localStorage before the engine gets to read it. */
async function zProfilem(page, profil) {
  await page.addInitScript(([k, p]) => {
    window.localStorage.setItem(k, JSON.stringify(p));
  }, [KLUCZ, profil]);
}

async function gotowe(page) {
  await page.waitForFunction(() => window.App && window.Router);
  await page.waitForFunction(() => window.Router.current.route !== null);
}

test("pusty profil trafia na powitanie", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toBeVisible();
  await expect(page).toHaveURL(/#\/benvenuto/);
});

test("a student halfway through the course gets no welcome", async ({ page }) => {
  await zProfilem(page, { schema: 2, stats: { lessonsDone: 40, correct: 0, wrong: 0, days: {} } });
  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toHaveCount(0);
  expect(await page.evaluate(() => window.Router.current.route)).toBe("percorso");
});

test("adres z linku wygrywa nad powitaniem", async ({ page }) => {
  await page.goto("/index.html#/grammatica");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toHaveCount(0);
  expect(await page.evaluate(() => window.Router.current.route)).toBe("grammatica");
});

test("the choice ends the welcome, merely looking at it does not", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);

  /* A refresh with no choice: the question has to come back. */
  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toBeVisible();

  /* "From scratch" goes straight to the first lesson: the button's caption
     promises a lesson, not a list of levels. */
  await page.locator(".js-zero").click();
  await expect(page).toHaveURL(/#\/lezione\?id=/);
  expect(await page.evaluate(() => window.Core.state.onboarded)).toBe(true);

  /* We wait for the SAVE, not for time to pass: save() is debounced by
     180 ms, so a reload right after the click would overtake the save and
     the test would measure its own haste instead of the course's
     behaviour. */
  await page.waitForFunction(k => {
    const zapis = window.localStorage.getItem(k);
    return zapis && JSON.parse(zapis).onboarded === true;
  }, KLUCZ);

  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toHaveCount(0);
  expect(await page.evaluate(() => window.Router.current.route)).toBe("percorso");
});

test("the road through the placement test leads to the test", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await page.locator(".js-test").click();
  await expect(page).toHaveURL(/#\/piazzamento/);
  await expect(page.locator(".js-go")).toBeVisible();
});

test("after the choice the learning path has something to draw itself from", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await page.locator(".js-look").click();
  /* The level loads under the welcome screen, so the lessons have to be here
     already: otherwise the screen stays on "loading material" and nobody
     will refresh it. */
  await expect(page.locator("[data-lesson]").first()).toBeVisible({ timeout: 15000 });
});

/* The same dependency on loading, but sharper: "from scratch" has to KNOW
   the id of the first lesson at the moment of the click, otherwise it
   quietly falls back to the list of levels — that is, it does the very thing
   this button must not do. */
test("from scratch lands on the first lesson of the course, not on the list", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await page.locator(".js-zero").click();
  await expect(page).toHaveURL(/#\/lezione\?id=/);
  const pierwsza = await page.evaluate(() =>
    window.Core.nextLesson(window.Core.registry.levels[0]).lesson.id);
  expect(page.url()).toContain("id=" + pierwsza);
  await expect(page.locator("#main h1")).toBeVisible();
});

test("the welcome strings exist in five languages", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("benvenuto");
      const puste = window.I18n.missing().filter(k => /^welcome\./.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
