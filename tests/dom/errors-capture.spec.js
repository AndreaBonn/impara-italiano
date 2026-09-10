/* ============================================================
   Capturing wrong answers in a real lesson.

   The unit tests call Errors.record directly. What matters here is what they
   cannot check: whether the Ex.build wrapper really catches an answer in the
   flow of a lesson, and whether it changes the progress counter along the
   way, which rests on that same onDone.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Goes to an A1 lesson and waits until the exercises are wired up. */
async function otworzLekcje(page, id) {
  await page.goto("/index.html#/lezione?id=" + id);
  await page.waitForFunction(() => window.Core && window.Errors && window.Ex);
  await page.waitForSelector(".exq .js-check, .exq .match-btn");
}

test("the wrapper is installed exactly once", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Ex && window.Errors);
  const stan = await page.evaluate(() => ({
    zalozone: window.Ex.recordsErrors === true,
    drugie: window.Errors.install(window.Ex)      // the second attempt must do nothing
  }));
  expect(stan.zalozone).toBe(true);
  expect(stan.drugie, "install nie owija po raz drugi").toBe(false);
});

test("a wrong answer in a lesson creates a card with that lesson's tag", async ({ page }) => {
  await otworzLekcje(page, "a1-u01-l2");

  const wynik = await page.evaluate(async () => {
    const L = window.Core.getLesson("a1-u01-l2").lesson;
    const idx = L.exercises.findIndex(e => e.t === "fill");
    const root = document.querySelectorAll(".exq")[idx];
    root.querySelector(".js-in").value = "definitely a wrong answer";
    root.querySelector(".js-check").click();
    root.querySelector(".js-check").click();     // "almost" on the first attempt happens
    await new Promise(r => setTimeout(r, 250));

    const karty = Object.values(window.Core.state.errors);
    return { ile: karty.length, karta: karty[0] || null, tagiLekcji: L.tags };
  });

  expect(wynik.ile, "exactly one card was created").toBe(1);
  expect(wynik.karta.kind).toBe("authored");
  expect(wynik.karta.srcId).toBe("a1-u01-l2");
  expect(wynik.tagiLekcji).toContain(wynik.karta.tag);
});

test("a correct answer creates no card", async ({ page }) => {
  await otworzLekcje(page, "a1-u01-l1");

  const ile = await page.evaluate(async () => {
    const L = window.Core.getLesson("a1-u01-l1").lesson;
    const idx = L.exercises.findIndex(e => e.t === "fill");
    const root = document.querySelectorAll(".exq")[idx];
    root.querySelector(".js-in").value = L.exercises[idx].a[0];
    root.querySelector(".js-check").click();
    await new Promise(r => setTimeout(r, 250));
    return Object.keys(window.Core.state.errors).length;
  });

  expect(ile).toBe(0);
});

/* The lesson progress counter rests on the same onDone we wrap. If the
   wrapper called it a second time, progress would grow twice as fast and
   nothing would break in any visible way. */
test("the answer counter grows by as much as there are answers", async ({ page }) => {
  /* Without this a "speak" exercise demands a recording and does not finish
     on a click alone: in headless Chromium webkitSpeechRecognition EXISTS.
     We remove it before the page loads, that is we reproduce a browser
     without speech recognition — a case the application handles anyway. */
  await page.addInitScript(() => {
    delete window.SpeechRecognition;
    delete window.webkitSpeechRecognition;
  });
  await otworzLekcje(page, "a1-u01-l1");

  const wynik = await page.evaluate(async () => {
    const przed = window.Core.state.stats.correct + window.Core.state.stats.wrong;
    const wszystkie = document.querySelectorAll(".exq");
    let kliknięte = 0;
    for (const root of wszystkie) {
      const btn = root.querySelector(".js-check");
      if (!btn || btn.disabled) continue;
      const inp = root.querySelector(".js-in, .js-gap");
      if (inp) inp.value = "qualcosa";
      const radio = root.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      const tok = root.querySelector(".js-bank .tok");
      if (tok) tok.click();
      btn.click();
      kliknięte++;
    }
    await new Promise(r => setTimeout(r, 400));
    const po = window.Core.state.stats.correct + window.Core.state.stats.wrong;
    return { kliknięte, wzrost: po - przed };
  });

  expect(wynik.kliknięte, "something was answered").toBeGreaterThan(3);
  expect(wynik.wzrost, "one answer is one entry in the statistics").toBe(wynik.kliknięte);
});
