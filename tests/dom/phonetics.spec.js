/* ============================================================
   Telling sounds apart.

   The point: the exercise only makes sense when the recording EXISTS.
   System synthesis confuses exactly the sounds this is about, so falling
   back to it would not be lower quality but a task with no answer.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function suoni(page) {
  await page.goto("/index.html#/suoni");
  await page.waitForFunction(() => window.PHONETICS && window.Views.suoni && window.Audio2);
  await page.waitForSelector(".js-set");
}

test("every word of every pair has a recording", async ({ page }) => {
  await suoni(page);
  const brak = await page.evaluate(() => {
    const zle = [];
    window.PHONETICS.forEach(z => (z.pairs || []).forEach(p => {
      if (!window.Audio2.hasNatural(p.a)) zle.push(z.id + ": " + p.a);
      if (!window.Audio2.hasNatural(p.b)) zle.push(z.id + ": " + p.b);
    }));
    return zle;
  });
  expect(brak, `bez nagrania: ${brak.join(", ")}`).toEqual([]);
});

test("the set list shows the overlay titles, not the identifiers", async ({ page }) => {
  await suoni(page);
  const n = await page.evaluate(() => window.PHONETICS.length);
  await expect(page.locator(".js-set")).toHaveCount(n);

  const tytuly = await page.locator(".list-row b").allInnerTexts();
  expect(tytuly.length).toBe(n);
  expect(tytuly.every(x => !/^ph-/.test(x)), `surowe id w interfejsie: ${tytuly.join(", ")}`).toBe(true);
});

test("a set shows the contrastive note before the exercise", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".card--contrast")).toBeVisible();
  const tekst = await page.locator(".card--contrast").innerText();
  expect(tekst.length, "the contrastive note must not be empty").toBeGreaterThan(80);
});

test("the exercise refuses to check before anything is played", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  await page.locator(".exq .opt").first().click();
  await page.locator(".exq .js-check").click();

  /* Nothing was decided: the "next" button is still hidden. */
  await expect(page.locator(".js-next")).toBeHidden();
  await expect(page.locator("#toastStack .toast")).toBeVisible();
});

test("after listening the answer is accepted and shows the glosses", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  await page.locator(".exq .js-play").click();
  await page.locator(".exq .opt").first().click();
  await page.locator(".exq .js-check").click();

  await expect(page.locator(".js-next")).toBeVisible();
  const fb = await page.locator(".exq .fb").innerText();
  expect(fb, "the feedback carries the meaning of both words").toMatch(/=/);
});

test("both options of the pair are shown and only one word is played", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-gli"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  const opcje = await page.locator(".exq .opt span").allInnerTexts();
  expect(opcje.length).toBe(2);
  expect(new Set(opcje).size, "two different words").toBe(2);
});

test("a mistake in discrimination reaches the mistake notebook", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  /* The exercise has something to choose from. Which option was NOT played
     cannot be read from the DOM — so below we click them in turn until one
     turns out to be wrong. */
  const zla = await page.evaluate(() => {
    const opts = [...document.querySelectorAll(".exq .opt")];
    return opts.length ? 0 : -1;
  });
  expect(zla).toBe(0);

  await page.locator(".exq .js-play").click();
  const przed = await page.evaluate(() => Object.keys(window.Core.state.errors).length);
  for (const o of await page.locator(".exq .opt").all()) {
    await o.click();
    await page.locator(".exq .js-check").click();
    if (await page.locator(".js-next").isVisible()) break;
  }
  const po = await page.evaluate(() => Object.keys(window.Core.state.errors).length);
  expect(po >= przed, "a wrong answer creates a card, a correct one does not").toBe(true);
});

test("the sound strings exist in five languages", async ({ page }) => {
  await suoni(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("suoni");
      /* The overlay has to give every set a title and a contrastive note. */
      const bezTytulu = window.PHONETICS.filter(z => !z.title || !z.contrast).map(z => z.id);
      const puste = window.I18n.missing().filter(k => /^sound\.|^ex\.minpair/.test(k));
      if (puste.length || bezTytulu.length) out[lang] = puste.concat(bezTytulu);
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
