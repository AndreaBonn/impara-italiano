/* ============================================================
   Five minutes: the session keeps both of its promises.

   Unit tests prove the bounds against a fake clock. What they cannot prove
   is that the screen really stops: that after the twentieth card the summary
   replaces the card, that the card open when the bell rings stays answerable,
   and that leaving the screen stops the clock instead of letting it announce
   "time is up" over another view.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/**
 * n due cards straight in the deck, then the screen drawn from scratch.
 * With `pisane` every card is stable and one that FlashRules gives the write
 * mode today: the keyboard tests are about the typed card, and the mode
 * otherwise turns with the date.
 */
async function zTalia(page, n, pisane) {
  await page.goto("/index.html#/percorso");
  await page.waitForFunction(() => window.Views && window.Views.cinque && window.Core);
  await page.evaluate(([ile, tylkoPisane]) => {
    const dzien = window.Core.today();
    let dodane = 0;
    for (let i = 0; dodane < ile; i++) {
      const it = "parola" + i;
      if (!tylkoPisane) { window.Core.addCard(it, "slowo" + i, "test"); dodane++; continue; }
      const karta = { key: it, st: "review", s: 30 };
      if (window.FlashRules.pickMode(karta, { choice: true }, dzien) !== "write") continue;
      const k = window.Core.addCard(it, "slowo" + i, "test");
      Object.assign(window.Core.state.srs[k], { st: "review", s: 30, d: 5, last: Date.now() - 864e5 * 30, due: Date.now() - 1000 });
      dodane++;
    }
    window.Store.flush();
  }, [n, !!pisane]);
  await page.evaluate(() => window.App.go("cinque"));
  await page.waitForSelector(".view-head");
}

/** Answers whatever card is on screen, in the way its mode asks. */
async function odpowiedz(page) {
  const karta = page.locator(".flash__card");
  if (await karta.locator(".js-in").count()) {
    await karta.locator(".js-in").fill("x");
    await karta.locator(".js-show").click();
    await karta.locator('.js-grade button[data-q="4"]').click();
  } else if (await karta.locator(".opts").count()) {
    await karta.locator(".opt").first().click();
    await karta.locator(".js-check").click();
    await karta.locator(".js-next").click();
  } else {
    await karta.locator(".js-show").click();
    await karta.locator('.js-grade button[data-q="4"]').click();
  }
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
  await expect(page.locator(".flash__card .exq"), "the open card stays").toBeVisible();

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
  await zTalia(page, 2, true);
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
  await zTalia(page, 4, true);
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
  /* A mark on the card node: a redraw would replace the node and lose it,
     whichever mode the card came in. */
  await page.evaluate(() => { document.querySelector(".flash__card .exq").dataset.znak = "ta sama"; });

  pusc();
  await page.waitForFunction(() => window.Core.registry.loaded.B1 === true);
  await expect(page.locator(".flash__card .exq"), "the same card node stays").toHaveAttribute("data-znak", "ta sama");
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

/* ---------------- Modes ---------------- */

/**
 * One due card from a real A1 lesson that FlashRules sends as a choice today,
 * with at least two distractors. Returns its Italian and gloss.
 */
async function kartaWyboru(page) {
  await page.goto("/index.html#/percorso");
  await page.waitForFunction(() => window.Core && window.Core.registry.loaded.A1 === true);
  const karta = await page.evaluate(() => {
    const R = window.FlashRules, C = window.Core, dzien = C.today();
    for (const lv of C.registry.levels) for (const u of lv.units || []) for (const l of u.lessons || []) {
      for (const v of l.vocab || []) {
        if (!R.articleOf(v.it)) continue;
        const key = C.cardKey(v.it);
        const audio = R.audioAvailable(window.Audio2.hasNatural(v.it), C.state.settings.voiceSource);
        if (R.pickMode({ key, st: "learning", s: 1 }, { choice: true, audio }, dzien) !== "choice") continue;
        const ds = R.distractors({ it: v.it, tr: v.tr }, R.tiersFor(l.id, C.registry.levels), 3, key + "|" + dzien);
        if (ds.length < 2) continue;
        C.addCard(v.it, v.tr, l.id);
        Object.assign(C.state.srs[key], { st: "learning", s: 1, d: 5, due: Date.now() - 1000 });
        window.Store.flush();
        return { it: v.it, tr: v.tr, art: R.articleOf(v.it) };
      }
    }
    return null;
  });
  expect(karta, "the course has a word for a choice card today").not.toBeNull();
  await page.evaluate(() => window.App.go("cinque", { unit: "a1-u01" }));
  await page.waitForSelector(".js-start");
  return karta;
}

test("a choice card: Italian options that share the article, graded 3 when right", async ({ page }) => {
  const karta = await kartaWyboru(page);
  await page.locator(".js-start").click();

  const opcje = await page.locator(".flash__card .opt span").allInnerTexts();
  expect(opcje.length).toBeGreaterThanOrEqual(3);
  expect(opcje).toContain(karta.it);
  const rodzajniki = await page.evaluate(os => os.map(o => window.FlashRules.articleOf(o)), opcje);
  expect(rodzajniki, `options ${opcje.join(" / ")}`).toEqual(opcje.map(() => karta.art));
  expect(opcje, "no translation among the options").not.toContain(karta.tr);
  await expect(page.locator(".flash__card .opts")).toHaveAttribute("role", "radiogroup");

  await page.locator(".flash__card .opt", { hasText: karta.it }).first().click();
  await page.locator(".flash__card .js-check").click();
  await expect(page.locator(".flash__card .fb")).toHaveClass(/fb--ok/);
  expect(await page.evaluate(() => window.Core.state.reviews.length), "checking shows, it does not grade").toBe(0);
  await page.locator(".flash__card .js-next").click();

  const wpis = await page.evaluate(() => window.Core.state.reviews[0]);
  expect(wpis.q).toBe(3);
  expect(wpis.m).toBe("choice");
});

test("a choice card by keyboard, a wrong pick graded 0", async ({ page }) => {
  const karta = await kartaWyboru(page);
  await page.locator(".js-start").click();
  await expect(page.locator(".flash__card .opt input").first()).toBeFocused();

  const opcje = await page.locator(".flash__card .opt span").allInnerTexts();
  const zla = opcje.findIndex(o => o !== karta.it);
  for (let i = 0; i < zla; i++) await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Space");
  await page.keyboard.press("Tab");
  await page.keyboard.press("Enter");
  await expect(page.locator(".flash__card .fb")).toHaveClass(/fb--ko/);
  await expect(page.locator(".flash__card .js-next")).toBeFocused();
  await page.keyboard.press("Enter");

  const wpis = await page.evaluate(() => window.Core.state.reviews[0]);
  expect(wpis.q).toBe(0);
  expect(wpis.m).toBe("choice");
});

/* ---------------- Listening ---------------- */

/**
 * One due card from a real A1 lesson that has a recording and gets `tryb`
 * today. Counts Audio2.speak calls in window.__mowi.
 */
async function kartaSluchu(page, tryb) {
  await page.goto("/index.html#/percorso");
  await page.waitForFunction(() => window.Core && window.Core.registry.loaded.A1 === true);
  const karta = await page.evaluate(szukany => {
    const R = window.FlashRules, C = window.Core, dzien = C.today();
    const stabilna = szukany === "listen-write";
    for (const u of C.registry.byCode.A1.units) for (const l of u.lessons || []) for (const v of l.vocab || []) {
      if (!window.Audio2.hasNatural(v.it)) continue;
      const key = C.cardKey(v.it);
      const stan = stabilna ? { st: "review", s: 30 } : { st: "learning", s: 1 };
      if (R.pickMode(Object.assign({ key }, stan), { choice: true, audio: true }, dzien) !== szukany) continue;
      const ds = R.distractors({ it: v.it, tr: v.tr }, R.tiersFor(l.id, C.registry.levels), 3, key + "|" + dzien);
      if (!stabilna && ds.length < 2) continue;
      C.addCard(v.it, v.tr, l.id);
      Object.assign(C.state.srs[key], stan, { d: 5, last: Date.now() - 864e5, due: Date.now() - 1000 });
      window.__mowi = [];
      const speak = window.Audio2.speak;
      window.Audio2.speak = function (t, o) { window.__mowi.push(t); return speak.call(this, t, o); };
      return { it: v.it, tr: v.tr };
    }
    return null;
  }, tryb);
  expect(karta, `the course has a recorded word for ${tryb} today`).not.toBeNull();
  await page.evaluate(() => window.App.go("cinque", { unit: "a1-u01" }));
  await page.waitForSelector(".js-start");
  return karta;
}

test("hear and pick: the word plays, is never written in the question, and is graded as a pick", async ({ page }) => {
  const karta = await kartaSluchu(page, "listen-choice");
  await page.locator(".js-start").click();

  await expect(page.locator(".flash__card .js-replay")).toBeVisible();
  expect(await page.evaluate(() => window.__mowi.length), "the recording plays when the card appears").toBe(1);
  const pytanie = await page.locator(".flash__card .exq__prompt").innerHTML();
  expect(pytanie, "the Italian is not in the question, not even in an attribute").not.toContain(karta.it);
  expect(pytanie).not.toContain(karta.tr);

  await page.locator(".flash__card .js-replay").click();
  expect(await page.evaluate(() => window.__mowi.length), "replay plays again").toBe(2);

  await page.locator(".flash__card .opt", { hasText: karta.it }).first().click();
  await page.locator(".flash__card .js-check").click();
  await page.locator(".flash__card .js-next").click();
  const wpis = await page.evaluate(() => window.Core.state.reviews[0]);
  expect(wpis.m).toBe("listen-choice");
  expect(wpis.q).toBe(3);
});

test("dictation: heard, typed, self-graded", async ({ page }) => {
  const karta = await kartaSluchu(page, "listen-write");
  await page.locator(".js-start").click();
  expect(await page.locator(".flash__card .exq__prompt").innerHTML()).not.toContain(karta.it);

  /* The accent bar opens above a focused field (keys.js), over whatever
     sits there: that must not be the replay button the student needs while
     typing. */
  await page.locator(".flash__card .js-in").focus();
  await expect(page.locator(".keybar")).toBeVisible();
  const zakryty = await page.evaluate(() => {
    const a = document.querySelector(".keybar").getBoundingClientRect();
    const b = document.querySelector(".flash__card .js-replay").getBoundingClientRect();
    return !(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top);
  });
  expect(zakryty, "the accent bar covers the replay button").toBe(false);

  await page.locator(".flash__card .js-in").fill(karta.it);
  await page.keyboard.press("Enter");
  await expect(page.locator(".flash__card .fb")).toHaveClass(/fb--ok/);
  await page.locator('.flash__card .js-grade button[data-q="4"]').click();
  const wpis = await page.evaluate(() => window.Core.state.reviews[0]);
  expect(wpis.m).toBe("listen-write");
  expect(wpis.q).toBe(4);
});

test("with the system voice chosen in Settings no card is asked by ear", async ({ page }) => {
  await kartaSluchu(page, "listen-choice");
  await page.evaluate(() => { window.Core.state.settings.voiceSource = "system"; window.App.go("cinque", { unit: "a1-u01" }); });
  await page.waitForSelector(".js-start");
  await page.locator(".js-start").click();
  await expect(page.locator(".flash__card .exq")).toBeVisible();
  await expect(page.locator(".flash__card .js-replay")).toHaveCount(0);
});

test("a browser that refuses to play leaves the card usable, with no error", async ({ page }) => {
  const bledy = [];
  page.on("pageerror", e => bledy.push(e.message));
  await page.addInitScript(() => {
    HTMLMediaElement.prototype.play = function () {
      const e = new Error("autoplay"); e.name = "NotAllowedError";
      return Promise.reject(e);
    };
  });
  const karta = await kartaSluchu(page, "listen-choice");
  await page.locator(".js-start").click();
  await expect(page.locator(".flash__card .js-replay")).toBeVisible();
  await page.locator(".flash__card .js-replay").click();

  await page.locator(".flash__card .opt", { hasText: karta.it }).first().click();
  await page.locator(".flash__card .js-check").click();
  await page.locator(".flash__card .js-next").click();
  expect(await page.evaluate(() => window.Core.state.reviews.length)).toBe(1);
  expect(bledy).toEqual([]);
});

/* The card appears without a route change, so its field keeps the focus and
   keys.js opens the accent bar above it at once. Above the field sits the
   question: covered, the student is asked to type a word they cannot see. */
for (const szer of [320, 375, 1280]) {
  test(`the accent bar leaves the question readable on a typed card at ${szer}px`, async ({ page }) => {
    await page.setViewportSize({ width: szer, height: 900 });
    await zTalia(page, 1, true);
    await page.locator(".js-start").click();
    await expect(page.locator(".flash__card .js-in")).toBeFocused();
    await expect(page.locator(".keybar")).toBeVisible();

    const zakryte = await page.evaluate(() => {
      const a = document.querySelector(".keybar").getBoundingClientRect();
      return [...document.querySelectorAll(".flash__card .exq__prompt, .flash__card .exq__sub")]
        .filter(el => { const r = el.getBoundingClientRect();
          return !(a.right <= r.left || r.right <= a.left || a.bottom <= r.top || r.bottom <= a.top); })
        .map(el => el.textContent.trim());
    });
    expect(zakryte, "text under the accent bar").toEqual([]);
  });
}

/* A card that spoke (a heard card, or any card after its answer is shown)
   can still be playing when the student moves on. Only speak() stops what
   plays, and a flip, pick or typed card does not speak when it appears, so
   the old word went on over the new question. */
test("moving to the next card silences the word still playing", async ({ page }) => {
  const karta = await kartaSluchu(page, "listen-choice");
  await page.locator(".js-start").click();
  await page.evaluate(() => {
    window.__cisza = 0;
    const stop = window.Audio2.stop;
    window.Audio2.stop = function () { window.__cisza++; return stop.apply(this, arguments); };
  });
  await page.locator(".flash__card .opt", { hasText: karta.it }).first().click();
  await page.locator(".flash__card .js-check").click();
  const przed = await page.evaluate(() => window.__cisza);
  await page.locator(".flash__card .js-next").click();
  await expect(page.locator(".flash__card .exq")).toBeVisible();
  expect(await page.evaluate(() => window.__cisza), "the next card stops the audio").toBeGreaterThan(przed);
});
