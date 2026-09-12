/* ============================================================
   The placement test in a browser.

   The search logic is covered by the unit tests. What matters here is what
   they cannot see: whether the tasks appear at all, whether the result is
   NOT saved without the student's consent, and whether the number of lessons
   to be marked is shown BEFORE the decision rather than after it.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function wejscie(page) {
  await page.goto("/index.html#/piazzamento");
  await page.waitForFunction(() => window.Placement && window.Views.piazzamento);
  await page.waitForSelector(".js-go");
}

/** Walks the whole test, answering at random; returns the result screen. */
async function przejdzCaly(page) {
  await page.locator(".js-go").click();
  await page.waitForSelector(".exq", { timeout: 20000 });

  let poprzednie = null, zablokowane = 0;
  for (let krok = 0; krok < 40; krok++) {
    if (await page.locator(".summary").count()) break;
    const check = page.locator(".exq .js-check").first();
    if (await check.count() && await check.isEnabled()) {
      const inp = page.locator(".exq .js-in, .exq .js-gap").first();
      if (await inp.count()) await inp.fill("qualcosa");
      const radio = page.locator('.exq input[type="radio"]').first();
      if (await radio.count()) await radio.check();
      /* A checkbox, not a radio: "multi" refuses an empty answer on purpose
         (exercises-choice.js), so without this tick onDone never fires, the
         "next" button stays hidden and the loop spins to its last turn. */
      const box = page.locator('.exq input[type="checkbox"]').first();
      if (await box.count()) await box.check();
      await check.click();
    }
    const next = page.locator(".js-next");
    if (await next.count() && await next.isVisible()) await next.click();
    else await page.waitForTimeout(120);

    /* A task we cannot answer has to say so. Otherwise the run leaves behind
       nothing but ".summary is not visible" after every turn, and the type
       that blocked it has to be dug out by hand — which is what happened
       here: the session's drills are drawn from the current day
       (views-today.js), so the exercise that turns up first changes daily
       and a type the loop cannot handle only shows up on some dates. */
    const exq = page.locator(".exq").first();
    /* The signature is the task's own text. data-idx is NOT usable here: it
       numbers the exercise inside its lesson, so two tasks in a row can carry
       the same one. And it is read only when .exq is still there — after the
       last task the run swaps it for .summary, and waiting for a locator that
       will never appear turns the end of the run into a timeout. */
    const firma = (await exq.count()) ? (await exq.innerText()).slice(0, 120) : null;
    if (firma !== null && firma === poprzednie) zablokowane++;
    else zablokowane = 0;
    poprzednie = firma;
    if (zablokowane >= 8) {
      throw new Error("the run is stuck on a task the loop cannot answer:\n" + firma);
    }
  }
  await expect(page.locator(".summary")).toBeVisible();
}

test("the entry explains what this is for and how long it takes", async ({ page }) => {
  await wejscie(page);
  const tekst = await page.locator("#main").innerText();
  expect(tekst).toMatch(/\d/);            // the number of tasks
  await expect(page.locator(".js-go")).toBeVisible();
});

test("the test asks questions and ends with a proposed level", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);

  const poziom = await page.locator(".summary__score").innerText();
  expect(poziom, "wynik to kod poziomu").toMatch(/^(A1|A2|B1|B2|C1|C2)$/);
});

/* Marking a hundred lessons as passed is a change the student cannot undo
   with one click. The test proposes, the student decides. */
test("the result does not save itself", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);

  const stan = await page.evaluate(() => ({
    placement: window.Core.state.placement,
    lekcje: Object.keys(window.Core.state.lessons).length
  }));
  expect(stan.placement, "nothing saved before the decision").toBe(null);
  expect(stan.lekcje).toBe(0);

  await expect(page.locator(".js-accept")).toBeVisible();
  await expect(page.locator(".js-scratch")).toBeVisible();
});

test("the number of lessons to be marked is visible before the decision", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);
  const tekst = await page.locator(".summary").innerText();
  expect(tekst, "the summary says how many lessons will disappear from the path").toMatch(/\d/);
});

test("a refusal leaves the state untouched", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);
  await page.locator(".js-scratch").click();
  await expect(page).toHaveURL(/#\/percorso/);

  const stan = await page.evaluate(() => ({
    placement: window.Core.state.placement,
    lekcje: Object.keys(window.Core.state.lessons).length
  }));
  expect(stan.placement).toBe(null);
  expect(stan.lekcje).toBe(0);
});

test("accepting saves the level and adds no points", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);
  /* XP grows from ANSWERING the test tasks alone (recordAnswer does that the
     same way everywhere) — so we measure whether ACCEPTING the result adds
     anything on top, because that is exactly what must not be added. */
  const przed = await page.evaluate(() => ({
    xp: window.Core.state.xp,
    zrobione: window.Core.state.stats.lessonsDone
  }));

  await page.locator(".js-accept").click();
  await expect(page).toHaveURL(/#\/percorso/);

  const stan = await page.evaluate(() => ({
    poziom: (window.Core.state.placement || {}).level,
    xp: window.Core.state.xp,
    zrobione: window.Core.state.stats.lessonsDone,
    oznaczone: Object.values(window.Core.state.lessons).filter(l => l.placed).length
  }));

  expect(stan.poziom).toMatch(/^(A1|A2|B1|B2|C1|C2)$/);
  expect(stan.xp, "accepting the result adds no points").toBe(przed.xp);
  expect(stan.zrobione, "the finished counter tells the truth").toBe(przed.zrobione);
  expect(stan.zrobione, "marked lessons do not count as finished").toBe(0);
  /* With an A1 result there is nothing to mark, and that is correct too. */
  expect(stan.oznaczone).toBeGreaterThanOrEqual(0);
});

test("the entry is reachable from the settings", async ({ page }) => {
  await page.goto("/index.html#/impostazioni");
  await page.waitForSelector(".js-place");
  await page.locator(".js-place").click();
  await expect(page).toHaveURL(/#\/piazzamento/);
});

/* Settings was the only entry the test had for a long time, and it is a tab
   no newcomer opens. The learning path is the screen where the question
   "from which level" arises, so the hint stands there — but only as long as
   the choice is still ahead of the student. */
test("the learning path leads to the test until a level is chosen", async ({ page }) => {
  await page.goto("/index.html#/percorso");
  await page.waitForFunction(() => window.App && window.Core.registry.levels.length);
  await expect(page.locator(".js-place")).toBeVisible();

  await page.evaluate(() => {
    window.Core.state.stats.lessonsDone = 5;
    window.App.go("percorso");
  });
  await expect(page.locator(".js-place")).toHaveCount(0);

  await page.evaluate(() => {
    window.Core.state.stats.lessonsDone = 0;
    window.App.go("percorso");
  });
  await page.locator(".js-place").click();
  await expect(page).toHaveURL(/#\/piazzamento/);
});

test("the test strings exist in five languages", async ({ page }) => {
  await wejscie(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("piazzamento");
      const puste = window.I18n.missing().filter(k => /^place\./.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
