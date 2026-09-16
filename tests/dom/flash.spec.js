/* ============================================================
   Five minutes: the session keeps both of its promises.

   Unit tests prove the bounds against a fake clock. What they cannot prove
   is that the screen really stops: that after the twentieth card the summary
   replaces the card, that the card open when the bell rings stays answerable,
   and that leaving the screen stops the clock instead of letting it announce
   "time is up" over another view.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** n due cards straight in the deck, then the screen drawn from scratch. */
async function zTalia(page, n) {
  await page.goto("/index.html#/percorso");
  await page.waitForFunction(() => window.Views && window.Views.cinque && window.Core);
  await page.evaluate(ile => {
    for (let i = 0; i < ile; i++) window.Core.addCard("parola" + i, "slowo" + i, "test");
    window.Store.flush();
  }, n);
  await page.evaluate(() => window.App.go("cinque"));
  await page.waitForSelector(".view-head");
}

async function odpowiedz(page) {
  await page.locator(".flash__card .js-in").fill("x");
  await page.locator(".flash__card .js-show").click();
  await page.locator('.flash__card .js-grade button[data-q="4"]').click();
}

test("thirty due cards: the session stops at twenty and every answer is in the journal", async ({ page }) => {
  await zTalia(page, 30);
  await page.locator(".js-start").click();
  for (let i = 0; i < 20; i++) await odpowiedz(page);

  await expect(page.locator(".summary")).toBeVisible();
  await expect(page.locator(".flash__card")).toHaveCount(0);
  const n = await page.evaluate(() => window.Core.state.reviews.length);
  expect(n).toBe(20);
});

test("time runs out on an open card: that card still counts, the next one never shows", async ({ page }) => {
  await page.clock.install();
  await zTalia(page, 10);
  await page.locator(".js-start").click();
  await odpowiedz(page);
  await odpowiedz(page);

  await page.clock.fastForward("05:01");
  await expect(page.locator(".flash__note")).not.toBeEmpty();
  await expect(page.locator(".flash__card .js-in"), "the open card stays").toBeVisible();

  await odpowiedz(page);
  await expect(page.locator(".summary")).toBeVisible();
  const n = await page.evaluate(() => window.Core.state.reviews.length);
  expect(n, "the answer after the bell was graded").toBe(3);
});

test("the clock counts down and leaving the screen stops it", async ({ page }) => {
  await page.clock.install();
  await zTalia(page, 3);
  /* A leaked interval draws nothing: it ticks on nodes already detached from
     the page. The only way to see it is to count the intervals alive. */
  await page.evaluate(() => {
    const zywe = window.__zyweInterwaly = new Set();
    const si = window.setInterval.bind(window), ci = window.clearInterval.bind(window);
    window.setInterval = (f, ms) => { const id = si(f, ms); zywe.add(id); return id; };
    window.clearInterval = id => { zywe.delete(id); ci(id); };
  });
  await page.locator(".js-start").click();
  await expect(page.locator(".flash__clock")).toHaveText("5:00");
  await page.clock.fastForward("01:00");
  await expect(page.locator(".flash__clock")).toHaveText("4:00");
  expect(await page.evaluate(() => window.__zyweInterwaly.size), "the running session has its clock").toBe(1);

  await page.evaluate(() => window.App.go("percorso"));
  expect(await page.evaluate(() => window.__zyweInterwaly.size), "leaving the screen cleared it").toBe(0);
});

/* Enter in the field reveals the answer and moves the focus to the grades.
   If the key's default action is left alone it lands on the button that now
   has the focus, and one keystroke grades the card "no idea" before the
   student has seen the answer. */
test("the keyboard: Enter reveals, it does not also grade", async ({ page }) => {
  await zTalia(page, 2);
  await page.locator(".js-start").click();
  await page.keyboard.type("parola0");
  await page.keyboard.press("Enter");

  await expect(page.locator(".flash__card .fb")).not.toBeEmpty();
  expect(await page.evaluate(() => window.Core.state.reviews.length), "nothing graded yet").toBe(0);
  await expect(page.locator(".flash__card .js-grade button").first()).toBeFocused();

  await page.keyboard.press("Tab");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  const log = await page.evaluate(() => window.Core.state.reviews);
  expect(log.length).toBe(1);
  expect(log[0].q, "the grade the student chose, not the first button").toBe(4);
});

/* A held Enter repeats. Each repeat lands on whatever has the focus at that
   moment: the grade after a reveal, the field on the next card, the grade
   again. Without a guard one long press grades a string of cards the student
   never looked at. */
test("the keyboard: a held Enter grades nothing", async ({ page }) => {
  await zTalia(page, 4);
  await page.locator(".js-start").click();
  await page.keyboard.type("parola0");
  await page.keyboard.down("Enter");
  for (let i = 0; i < 8; i++) await page.keyboard.down("Enter");
  await page.keyboard.up("Enter");

  expect(await page.evaluate(() => window.Core.state.reviews.length), "repeats graded nothing").toBe(0);
  await expect(page.locator(".flash__card .fb"), "the first press still revealed").not.toBeEmpty();
});

test("an empty deck says so and offers no start", async ({ page }) => {
  await page.goto("/index.html#/cinque");
  await page.waitForSelector(".view-head");
  await expect(page.locator(".empty")).toBeVisible();
  await expect(page.locator(".js-start")).toHaveCount(0);
});
