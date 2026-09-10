/* ============================================================
   The Coverage screen counts the WHOLE course, not the part that happens
   to be in memory.

   Levels arrive lazily: at start-up only A1 is loaded and the rest comes in
   when the student walks into it. Both numbers on this screen are built from
   the loaded levels, so entering it straight after opening the course
   measured A1 alone — and the caption calls that number the ceiling of the
   course, a thing that cannot grow. It grew anyway, quietly, for anybody who
   had passed through A2 first.

   Nothing here falls over when it breaks: the screen shows a smaller number
   with the same confidence. Hence a test rather than an eye.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test("the ceiling counts every level, not only the ones already in memory", async ({ page }) => {
  await page.goto("/index.html#/copertura");
  await page.waitForFunction(() => window.Core && window.Frequency && window.FREQUENCY);

  /* The view pulls the missing levels itself. If it stopped doing that, this
     is where the test dies: nobody else on this screen would load them. */
  await page.waitForFunction(
    () => window.Core.registry.levels.every(lv => window.Core.registry.loaded[lv.code]),
    null,
    { timeout: 15000 }
  );

  const { wDom, policzone, poziomow } = await page.evaluate(() => {
    const F = window.FREQUENCY;
    const pelne = window.Frequency.pokrycie(F.words, window.Frequency.slownikKursu(), F.tokens);
    /* The second bar is the course; the first one is the student's deck. */
    const n = document.querySelectorAll(".cov .cov__n")[1].textContent;
    return {
      wDom: parseInt(n, 10),
      policzone: pelne.znane,
      poziomow: window.Core.registry.levels.length
    };
  });

  expect(poziomow).toBeGreaterThan(1);
  /* Not a fixed number: the course grows and the frequency list is
     regenerated. What has to hold is that the screen shows what the whole
     loaded course covers, and it redraws after the levels arrive. */
  expect(wDom).toBe(policzone);
});

test("the student's deck meets the frequency list at all", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  /* The card key is normalised for identity — "il caffè" is filed under
     "il caffe" — while the frequency list holds bare accented forms. A deck
     read key by key therefore met the list nowhere, and a full deck scored
     zero. */
  await page.evaluate(() => { window.Core.addCard("il caffè", "kawa", "test"); });
  const znane = await page.evaluate(() => {
    const F = window.FREQUENCY;
    return window.Frequency.pokrycie(F.words, window.Frequency.slownikUcznia(), F.tokens).znane;
  });

  expect(znane, "a deck with one common word covers at least that word").toBeGreaterThan(0);
});
