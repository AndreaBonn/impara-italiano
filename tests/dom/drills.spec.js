/* ============================================================
   Trening: hub i przebieg serii.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function hub(page) {
  await page.goto("/index.html#/allenamento");
  await page.waitForFunction(() => window.Drills && window.Train && window.Views.allenamento);
  await page.waitForSelector(".js-topic");
}

test("the hub lists every topic under its own name", async ({ page }) => {
  await hub(page);
  const n = await page.evaluate(() => window.Drills.TOPICS.length);
  await expect(page.locator(".js-topic")).toHaveCount(n);

  /* The topic name must NOT be the title of a grammar entry: the "numeri"
     tag points at g-frase, that is "sentence structure". */
  /* The hub also has a row leading to sound discrimination, so we count only
     the rows with a topic button. */
  const nazwy = await page.locator(".list-row:has(.js-topic) b").allInnerTexts();
  expect(nazwy.filter(Boolean).length).toBe(n);
  expect(new Set(nazwy).size, "the names do not repeat").toBe(n);
});

test("the rail leads to training and marks it as current", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await page.locator('.rail__item[data-route="allenamento"]').click();
  await expect(page).toHaveURL(/#\/allenamento/);
  await expect(page.locator('.rail__item[data-route="allenamento"]')).toHaveAttribute("aria-current", "page");
});

test("a run shows ten tasks and counts the progress", async ({ page }) => {
  await hub(page);
  await page.locator('.js-topic[data-topic="numeri"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  const naglowek = await page.locator(".exq__num").first().innerText();
  expect(naglowek).toMatch(/1/);
  expect(naglowek).toMatch(new RegExp(String(await page.evaluate(() => window.Train.DRILL_N))));
});

test("a wrong answer in training creates a card marked as generated", async ({ page }) => {
  await hub(page);
  await page.locator('.js-topic[data-topic="prep-art"]').click();
  await expect(page.locator(".exq .js-in")).toBeVisible();

  /* The answer is plainly wrong, not "almost": one click ends the task. */
  await page.locator(".exq .js-in").fill("definitely wrong");
  await page.locator(".exq .js-check").click();

  await expect(page.locator(".js-next")).toBeVisible();

  const karta = await page.evaluate(() => Object.values(window.Core.state.errors)[0]);
  expect(karta.kind).toBe("generated");
  expect(karta.tag).toBe("g-preposizioni");
  expect(karta.srcId).toBe("prep-art");
});

/* A generated card stores no content: it has to be reconstructed from the
   pair (generator, seed). If the seed were not stable, the review would show
   a different task from the one the student stumbled on. */
test("a training card reproduces exactly the same task", async ({ page }) => {
  await hub(page);
  await page.locator('.js-topic[data-topic="date"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  const trescPrzed = await page.locator(".exq__prompt").first().innerText();

  await page.locator(".exq .js-in").fill("wrong date");
  await page.locator(".exq .js-check").click();
  await expect(page.locator(".js-next")).toBeVisible();

  const odtworzone = await page.evaluate(() => {
    const klucz = Object.keys(window.Core.state.errors)[0];
    const gdzie = window.Errors.locate(klucz);
    return { generated: gdzie.generated, q: gdzie.ex.q };
  });

  expect(odtworzone.generated).toBe(true);
  /* q carries HTML markup, so we compare the content with the tags stripped. */
  expect(odtworzone.q.replace(/<[^>]+>/g, "")).toBe(trescPrzed.replace(/\s+/g, " ").trim());
});

test("no training task has a speaker button", async ({ page }) => {
  await hub(page);
  const bezDzwieku = await page.evaluate(() => {
    const zle = [];
    window.Drills.TOPICS.forEach(topic => {
      for (let i = 0; i < 30; i++) {
        const { ex } = window.Drills.make(topic.id, "dom" + i);
        const b = window.Ex.build(ex, 0, "drill-" + topic.id);
        if (/data-say=/.test(b.html)) zle.push(topic.id);
      }
    });
    return zle;
  });
  expect(bezDzwieku, "a generated sentence has no recording, so it has no button").toEqual([]);
});

test("the training strings exist in five languages", async ({ page }) => {
  await hub(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("allenamento");
      window.Drills.TOPICS.forEach(t => window.Drills.make(t.id, "i18n"));
      const puste = window.I18n.missing().filter(k => /^train\.|^drill\.|^nav\.train/.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
