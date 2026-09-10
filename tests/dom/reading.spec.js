/* ============================================================
   Reading, continuous listening, dictation.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function lista(page) {
  await page.goto("/index.html#/lettura");
  await page.waitForFunction(() => window.READINGS && window.Views.lettura);
  await page.waitForSelector(".js-open");
}

async function tekst(page, id, mode) {
  await page.goto("/index.html#/lettura?id=" + id + (mode ? "&mode=" + mode : ""));
  await page.waitForFunction(() => window.READINGS && window.Views.lettura);
  await page.waitForSelector("#readBox");
}

test("every sentence of every reading has a recording", async ({ page }) => {
  await lista(page);
  const brak = await page.evaluate(() => {
    const zle = [];
    window.READINGS.forEach(r => (r.sentences || []).forEach(s => {
      if (!window.Audio2.hasNatural(s)) zle.push(r.id + ": " + s.slice(0, 40));
    }));
    return zle;
  });
  expect(brak, `bez nagrania: ${brak.slice(0, 3).join(" | ")}`).toEqual([]);
});

test("the list shows the Italian title and the translation", async ({ page }) => {
  await lista(page);
  const n = await page.evaluate(() => window.READINGS.length);
  await expect(page.locator(".js-open")).toHaveCount(n);

  const wiersz = page.locator(".list-row").first();
  await expect(wiersz.locator("b")).not.toBeEmpty();
  await expect(wiersz.locator("span span").first()).not.toBeEmpty();
});

test("reading mode shows the text and a button at every sentence", async ({ page }) => {
  await tekst(page, "r-a1-mattina");
  const zdan = await page.evaluate(() => window.READINGS[0].sentences.length);
  await expect(page.locator("#readBox .say-btn")).toHaveCount(zdan);
  await expect(page.locator("#readBox .js-all")).toBeVisible();
});

test("the glosses show a word and its translation", async ({ page }) => {
  await tekst(page, "r-a1-mattina");
  const glosy = await page.locator("#readBox .card .list-row").count();
  const ile = await page.evaluate(() => window.READINGS[0].glossIt.length);
  expect(glosy).toBe(ile);
});

/* The point of listening mode: the text must NOT be visible, otherwise this
   is reading with a soundtrack, not listening comprehension. */
test("listening mode does not show the text", async ({ page }) => {
  await tekst(page, "r-a1-mattina", "listen");
  const widoczne = await page.evaluate(() => {
    const zdanie = window.READINGS[0].sentences[0];
    return document.getElementById("readBox").innerText.includes(zdanie);
  });
  expect(widoczne, "the sentences of the text must not be on screen").toBe(false);
  await expect(page.locator("#readBox .js-all")).toBeVisible();
});

test("the questions are in Italian and appear on demand", async ({ page }) => {
  await tekst(page, "r-a1-mattina", "listen");
  await expect(page.locator("#quizBox .exq")).toHaveCount(0);

  await page.locator(".js-quiz").click();
  const ile = await page.evaluate(() => window.READINGS[0].questions.length);
  await expect(page.locator("#quizBox .exq")).toHaveCount(ile);

  /* The questions sit in the neutral layer, so they do not change with the language. */
  const przed = await page.locator("#quizBox .exq__prompt").first().innerText();
  await page.evaluate(() => new Promise(r => window.Core.setLanguage("de", r)));
  await page.locator(".js-mode[data-mode='listen']").click();
  await page.locator(".js-quiz").click();
  const po = await page.locator("#quizBox .exq__prompt").first().innerText();
  expect(po, "the question text is Italian and independent of the explanation language").toBe(przed);
});

test("dictation goes sentence by sentence and ends with a result", async ({ page }) => {
  await tekst(page, "r-a1-mattina", "dictation");
  await expect(page.locator(".exq")).toBeVisible();

  const zdan = await page.evaluate(() => window.READINGS[0].sentences.length);
  for (let i = 0; i < zdan + 2; i++) {
    if (await page.locator(".summary").count()) break;
    const inp = page.locator(".exq .js-in");
    if (await inp.count()) await inp.fill("cokolwiek");
    const check = page.locator(".exq .js-check");
    if (await check.count() && await check.isEnabled()) await check.click();
    const next = page.locator(".js-next");
    if (await next.count() && await next.isVisible()) await next.click();
    else await page.waitForTimeout(150);
  }
  await expect(page.locator(".summary")).toBeVisible();
});

test("switching modes stays in the address", async ({ page }) => {
  await tekst(page, "r-a1-mattina");
  await page.locator('.js-mode[data-mode="dictation"]').click();
  await expect(page).toHaveURL(/mode=dictation/);
  await page.reload();
  await expect(page.locator('.js-mode[data-mode="dictation"]')).toHaveAttribute("aria-current", "true");
});

test("the reading strings exist in five languages", async ({ page }) => {
  await lista(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("lettura");
      const bezTytulu = window.READINGS.filter(r => !r.title || !r.gloss).map(r => r.id);
      const puste = window.I18n.missing().filter(k => /^read\./.test(k));
      if (puste.length || bezTytulu.length) out[lang] = puste.concat(bezTytulu);
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
