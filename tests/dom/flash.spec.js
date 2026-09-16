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

/* ---------------- The reserve ---------------- */

/** A saved profile in place before the course's scripts run, once per test. */
async function zProfilem(page, profil) {
  await page.addInitScript(p => {
    if (window.sessionStorage.getItem("__zapisano")) return;
    window.sessionStorage.setItem("__zapisano", "1");
    window.localStorage.setItem("linguai.italiano.v2",
      JSON.stringify(Object.assign({ schema: 2, settings: { lang: "pl" } }, p)));
  }, profil);
}

test("a new student with nothing due still gets a session, and only answered words join the deck", async ({ page }) => {
  await page.goto("/index.html#/cinque");
  await page.waitForSelector(".js-start");
  await expect(page.locator(".js-ready")).toContainText("10");

  await page.locator(".js-start").click();
  await expect(page.locator(".flash__card .chip")).toBeVisible();
  for (let i = 0; i < 2; i++) {
    await page.locator(".flash__card .js-show").click();
    await page.locator('.flash__card .js-grade button[data-q="4"]').click();
  }

  const stan = await page.evaluate(() => ({
    talia: Object.keys(window.Core.state.srs).length,
    zrodla: Object.values(window.Core.state.srs).map(c => c.src)
  }));
  expect(stan.talia, "two answered, two cards, not ten").toBe(2);
  expect(stan.zrodla.every(z => z.startsWith("a1-u01")), stan.zrodla.join()).toBe(true);
});

test("ten new words today: nothing due means an honest empty screen, not more words", async ({ page }) => {
  const dzis = Date.now();
  const reviews = Array.from({ length: 10 }, (_, i) => ({ k: "nowe" + i, t: dzis - i, q: 4 }));
  await zProfilem(page, { reviews });
  await page.goto("/index.html#/cinque");
  await page.waitForSelector(".view-head");
  await expect(page.locator(".empty")).toContainText("Dziesięć nowych słów");
  await expect(page.locator(".js-start")).toHaveCount(0);
});

test("the unit picker draws new words from the chosen unit and keeps it in the address", async ({ page }) => {
  await page.goto("/index.html#/cinque");
  await page.waitForSelector(".js-unit option[value='a1-u02']", { state: "attached" });
  await page.locator(".js-unit").selectOption("a1-u02");
  await page.waitForFunction(() => location.hash.includes("unit=a1-u02"));
  await page.waitForSelector(".js-start");

  await page.locator(".js-start").click();
  const slowo = await page.locator(".flash__card .exq__prompt").innerText();
  const zJednostki = await page.evaluate(() => window.Core.registry.byCode.A1.units
    .find(u => u.id === "a1-u02").lessons.flatMap(l => (l.vocab || []).map(v => v.it)));
  expect(zJednostki.some(w => slowo.includes(w)), `"${slowo}" comes from a1-u02`).toBe(true);
});

test("a finished B1 lesson: the level loads on a cold open and its words come up", async ({ page }) => {
  await zProfilem(page, { lessons: { "b1-u01-l1": { done: true, attempts: 1, best: 1 } } });
  await page.goto("/index.html#/cinque");
  await page.waitForFunction(() => window.Core && window.Core.registry.loaded.B1 === true);
  await page.waitForSelector(".js-start");
  await page.locator(".js-start").click();

  const slowo = await page.locator(".flash__card .exq__prompt").innerText();
  const b1 = await page.evaluate(() => window.Core.getLesson("b1-u01-l1").lesson.vocab.map(v => v.it));
  expect(b1.some(w => slowo.includes(w)), `"${slowo}" comes from b1-u01-l1`).toBe(true);
});

test("a level that fails to load is named on screen", async ({ page }) => {
  await zProfilem(page, { lessons: { "b1-u01-l1": { done: true, attempts: 1, best: 1 } } });
  await page.route("**/data/core/b1-01.js", r => r.abort());
  await page.goto("/index.html#/cinque");
  await expect(page.locator(".toast").filter({ hasText: "B1" })).toBeVisible();
});

test("an empty Reviews tab points to five minutes", async ({ page }) => {
  await page.goto("/index.html#/ripasso");
  await page.locator(".js-flash").click();
  await page.waitForFunction(() => location.hash === "#/cinque");
});

test("a level that finishes loading mid-session does not redraw over the card", async ({ page }) => {
  const teraz = Date.now();
  await zProfilem(page, {
    lessons: { "b1-u01-l1": { done: true, attempts: 1, best: 1 } },
    srs: { "il gatto": { it: "il gatto", tr: { pl: "kot" }, src: "t", ef: 2.5, reps: 0, interval: 0, due: teraz - 1000, lapses: 0 } }
  });
  let pusc;
  const wstrzymany = new Promise(r => { pusc = r; });
  await page.route("**/data/core/b1-01.js", async r => { await wstrzymany; await r.continue(); });
  /* The held file is part of the page load, so "load" would never come. */
  await page.goto("/index.html#/cinque", { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".js-start");
  await page.locator(".js-start").click();
  await page.locator(".flash__card .js-in").fill("il gatto");

  pusc();
  await page.waitForFunction(() => window.Core.registry.loaded.B1 === true);
  await expect(page.locator(".flash__card .js-in"), "the card and what was typed stay").toHaveValue("il gatto");
  await expect(page.locator(".js-start")).toBeHidden();
});

test("while the first level loads the screen says so, not that every word is taken", async ({ page }) => {
  let pusc;
  const wstrzymany = new Promise(r => { pusc = r; });
  await page.route("**/data/core/a1-01.js", async r => { await wstrzymany; await r.continue(); });
  await page.goto("/index.html#/cinque", { waitUntil: "domcontentloaded" });
  await page.waitForSelector(".view-head");
  await expect(page.locator(".empty")).toContainText("Wczytuję");

  pusc();
  await page.waitForSelector(".js-start");
});

test("a level that lands after the student picked another unit keeps the student's pick", async ({ page }) => {
  await zProfilem(page, { lessons: {
    "a1-u01-l1": { done: true, attempts: 1, best: 1 },
    "b1-u01-l1": { done: true, attempts: 1, best: 1 }
  } });
  let pusc;
  const wstrzymany = new Promise(r => { pusc = r; });
  await page.route("**/data/core/b1-01.js", async r => { await wstrzymany; await r.continue(); });
  /* A1 first, on a screen that does not ask for B1: level scripts run in
     insertion order, so a held B1 file would otherwise hold A1 behind it. */
  await page.goto("/index.html#/percorso");
  await page.waitForFunction(() => window.Core && window.Core.registry.loaded.A1 === true);

  await page.evaluate(() => window.App.go("cinque"));
  await page.waitForSelector(".js-unit option[value='a1-u02']", { state: "attached" });
  expect(await page.evaluate(() => window.Core.registry.loaded.B1), "B1 is still on its way").toBe("loading");
  await page.locator(".js-unit").selectOption("a1-u02");
  await page.waitForFunction(() => location.hash.includes("unit=a1-u02"));

  pusc();
  await page.waitForFunction(() => window.Core.registry.loaded.B1 === true);
  await page.waitForTimeout(300);
  await expect(page.locator(".js-unit")).toHaveValue("a1-u02");
});
