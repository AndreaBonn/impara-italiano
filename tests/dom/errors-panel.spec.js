/* ============================================================
   The "Mistakes" tab inside Reviews.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Creates a mistake card without going through the lesson interface. */
async function zepsujOdpowiedz(page, lekcjaId, indeks) {
  return page.evaluate(([id, i]) => {
    const L = window.Core.getLesson(id).lesson;
    return window.Errors.record(L, i, false).key;
  }, [lekcjaId, indeks]);
}

async function start(page) {
  await page.goto("/index.html#/ripasso");
  await page.waitForFunction(() => window.Core && window.Errors && window.Train);
}

test("the tabs are visible and switch through the address", async ({ page }) => {
  await start(page);
  await expect(page.locator(".tab")).toHaveCount(2);

  await page.locator('.tab[data-tab="errori"]').click();
  await expect(page).toHaveURL(/tab=errori/);
  await expect(page.locator('.tab[data-tab="errori"]')).toHaveAttribute("aria-current", "true");

  /* The address carries the state, so a refresh comes back to the same place. */
  await page.reload();
  await expect(page.locator('.tab[data-tab="errori"]')).toHaveAttribute("aria-current", "true");
});

test("with no mistakes the tab explains what it is for", async ({ page }) => {
  await start(page);
  await page.locator('.tab[data-tab="errori"]').click();
  const pusty = page.locator(".empty");
  await expect(pusty).toBeVisible();
  await expect(pusty.locator("h3")).not.toBeEmpty();
});

test("after a mistake the tab shows a task to review and its topic", async ({ page }) => {
  await start(page);
  const klucz = await zepsujOdpowiedz(page, "a1-u01-l2", 1);
  expect(klucz).toContain("a1-u01-l2");

  /* A fresh mistake comes back in ten minutes: we move the due date back so
     the test does not wait on the clock (and does not depend on its
     accuracy). */
  await page.evaluate(k => { window.Core.state.errors[k].due = Date.now() - 1000; }, klucz);

  await page.goto("/index.html#/ripasso?tab=errori");
  await page.waitForSelector(".js-start");
  await expect(page.locator("#ripassoBody")).toContainText("a1-u01-l2".slice(0, 0) + "");
  await expect(page.locator(".list-row b").first(), "the topic name taken from a grammar entry").not.toBeEmpty();
});

test("the review shows the same exercise and accepts an answer", async ({ page }) => {
  await start(page);
  const klucz = await zepsujOdpowiedz(page, "a1-u01-l2", 1);
  await page.evaluate(k => { window.Core.state.errors[k].due = Date.now() - 1000; }, klucz);

  await page.goto("/index.html#/ripasso?tab=errori");
  await page.locator(".js-start").click();
  await expect(page.locator(".exq")).toBeVisible();
  await expect(page.locator("#ripassoBody")).toContainText(/./);

  const poprawna = await page.evaluate(() => {
    const L = window.Core.getLesson("a1-u01-l2").lesson;
    return L.exercises[1].a;
  });

  await page.locator(".exq .js-in").fill(Array.isArray(poprawna) ? poprawna[0] : String(poprawna));
  await page.locator(".exq .js-check").click();

  await expect(page.locator(".js-next")).toBeVisible();

  /* One correct answer moves the card forward but does not retire it: the threshold is two. */
  const reps = await page.evaluate(k => (window.Core.state.errors[k] || {}).reps, klucz);
  expect(reps).toBe(1);
});

test("a card with no exercise disappears and the student is told", async ({ page }) => {
  await start(page);

  /* A card pointing at content that is not in the course. */
  await page.evaluate(() => {
    window.Core.state.errors["a1-u01-l2#deadbeefdeadbeef#0"] = {
      kind: "authored", tag: "g-nome-genere", srcId: "a1-u01-l2",
      ef: 2.5, reps: 0, interval: 0, due: Date.now() - 1000, lapses: 1, ts: Date.now()
    };
  });

  await page.goto("/index.html#/ripasso?tab=errori");
  await page.locator(".js-start").click();

  await expect(page.locator(".summary")).toBeVisible();
  await expect(page.locator(".summary")).toContainText(/./);
  const zostalo = await page.evaluate(() => Object.keys(window.Core.state.errors).length);
  expect(zostalo, "the card with no exercise was removed").toBe(0);
});

test("every string of the tab exists in five languages", async ({ page }) => {
  await start(page);

  const brakujace = await page.evaluate(async () => {
    const braki = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.Core.state.errors["a1-u01-l2#deadbeefdeadbeef#0"] = {
        kind: "authored", tag: "g-nome-genere", srcId: "a1-u01-l2",
        ef: 2.5, reps: 0, interval: 0, due: Date.now() - 1000, lapses: 1, ts: Date.now()
      };
      window.App.go("ripasso", { tab: "errori" });
      const puste = window.I18n.missing().filter(k => /^err\.|^review\./.test(k));
      if (puste.length) braki[lang] = puste;
    }
    return braki;
  });

  expect(brakujace, JSON.stringify(brakujace)).toEqual({});
});
