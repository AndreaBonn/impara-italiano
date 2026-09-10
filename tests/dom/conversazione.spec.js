/* ============================================================
   Conversations: linear and branching, on the same engine.

   The branches were ADDED to an engine that for ten dialogues could only go
   in order. That is why the first test is not about the new feature: it
   checks that the old road is untouched. If `go` or `opts` leaked into a
   dialogue without those fields, it would show up as a conversation cut off
   in the middle — and one of those looks finished and nobody would report it.

   The second test guards what branches are there for at all: consequence.
   Refusing dessert has to be visible on the bill a few turns LATER, not only
   in the waiter's next line.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/* The dialogue waits for the END of a recording before showing the next
   turn, and these conversations hold a dozen or so recordings of two or
   three seconds each. The default thirty seconds per test was only enough as
   long as there were no recordings and the engine fell back to system
   synthesis, which in headless finishes immediately: those tests were fast
   BY ACCIDENT, not by design. Playback stays real, because it is what drove
   `step()` onwards; the limit goes up instead. */
test.describe.configure({ timeout: 120000 });

/** Waits until the engine asks for the student's line (a text field or a choice). */
async function czekajNaTure(page) {
  await page.waitForSelector(".js-in, .dlg-opts", { timeout: 30000 });
}

async function otworz(page, id) {
  await page.goto(`/index.html#/conversazione?id=${id}`);
  await czekajNaTure(page);
}

test.describe("conversations", () => {
  /* The correct lines from `data/core/conversations.js` (bar-mattina). The
     content MATTERS now: since a wrong answer stops the scene, any old word
     typed into the field does not move the dialogue by a single turn. */
  const BAR = [
    "buongiorno, un caffè e un cornetto per favore",
    "vuoto grazie",
    "posso pagare con la carta",
    "grazie buona giornata"
  ];

  test("a linear dialogue goes in order and ends with a summary", async ({ page }) => {
    await otworz(page, "bar-mattina");
    for (const replika of BAR) {
      await czekajNaTure(page);
      await expect(page.locator(".dlg-opts")).toHaveCount(0);
      await page.fill(".js-in", replika);
      await page.click(".js-send");
    }
    await expect(page.locator(".summary__score")).toBeVisible({ timeout: 30000 });
    /* With no branches there is nowhere to return to: the branch button does not appear. */
    await expect(page.locator(".js-branch")).toHaveCount(0);
  });

  test("the choice changes the bill a few turns later", async ({ page }) => {
    await otworz(page, "ristorante-scelte");

    await page.waitForSelector(".dlg-opts");
    await page.locator(".js-opt").nth(1).click();   // bez rezerwacji
    await page.waitForSelector(".js-in");
    await page.fill(".js-in", "una bottiglia d'acqua naturale");
    await page.click(".js-send");
    await page.waitForSelector(".dlg-opts");
    await page.locator(".js-opt").nth(1).click();   // the vegetarian dish
    await page.waitForSelector(".dlg-opts");
    await page.locator(".js-opt").nth(1).click();   // bez deseru
    await page.waitForSelector(".js-in");

    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("basilico"))).toBe(true);
    expect(linie.some(x => x.includes("acqua e caffè"))).toBe(true);
    /* Dessert comes up earlier in the waiter's QUESTION, so the word alone
       says nothing. We check the item on the bill, because that is what
       depends on the choice. */
    expect(linie.some(x => x.includes("acqua e tiramisù"))).toBe(false);
  });

  test("returning to the choice shows the other branch without replaying the dialogue", async ({ page }) => {
    await otworz(page, "ristorante-scelte");
    for (const n of [0, null, 0, 1]) {
      if (n === null) {
        await page.waitForSelector(".js-in");
        await page.fill(".js-in", "acqua naturale grazie");
        await page.click(".js-send");
        continue;
      }
      await page.waitForSelector(".dlg-opts");
      await page.locator(".js-opt").nth(n).click();
    }
    await page.waitForSelector(".js-in");
    await page.fill(".js-in", "posso pagare con la carta");
    await page.click(".js-send");

    const gal = page.locator(".js-branch");
    await expect(gal).toBeVisible({ timeout: 30000 });
    const przed = await page.locator(".dlg__line").count();
    await gal.click();

    /* We return TO the branch, not to the beginning: the transcript gets
       shorter but does not disappear. */
    await page.waitForSelector(".dlg-opts");
    const po = await page.locator(".dlg__line").count();
    expect(po).toBeLessThan(przed);
    expect(po).toBeGreaterThan(0);

    await page.locator(".js-opt").nth(0).click();   // this time with dessert
    await page.waitForSelector(".js-in");
    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("acqua e tiramisù"))).toBe(true);
  });

  test("both lines are visible at the choice, together with the translation", async ({ page }) => {
    await otworz(page, "ristorante-scelte");
    await page.waitForSelector(".dlg-opts");
    /* A choice has to be a choice and not a guess: the student sees both
       possibilities in Italian and in their own language before deciding. */
    await expect(page.locator(".js-opt")).toHaveCount(2);
    for (const n of [0, 1]) {
      await expect(page.locator(".js-opt").nth(n).locator("i")).not.toBeEmpty();
      await expect(page.locator(".js-opt").nth(n).locator("span")).not.toBeEmpty();
    }
    /* The microphone or the text field stays: clicking is a shortcut. */
    await expect(page.locator(".js-in")).toBeVisible();
  });

  /* ─────────────────────────────────────────────────────────────
     No speech recognition in the browser.

     Reported from the screen: "I cannot see how to speak". A scene with no
     microphone looks exactly like a scene with a fault, because nothing in
     it says the microphone is missing because of the browser. The note on
     the conversation list does not save it: the student reads it once and
     asks three scenes later.

     Both sides are checked, because a test on the mere ABSENCE of the note
     would also pass if the view stopped drawing it altogether.
     ───────────────────────────────────────────────────────────── */
  async function otworzZeStt(page, wspierane) {
    await page.goto("/index.html#/");
    await page.waitForFunction(() => window.Audio2 && window.App);
    await page.evaluate(w => { window.Audio2.sttSupported = w; }, wspierane);
    await page.evaluate(() => App.go("conversazione", { id: "bar-mattina" }));
    await czekajNaTure(page);
  }

  test("with speech recognition the scene offers a microphone and the field is an alternative", async ({ page }) => {
    await otworzZeStt(page, true);
    await expect(page.locator(".js-turn .js-mic")).toBeVisible();
    await expect(page.locator(".js-turn .callout")).toHaveCount(0);
    /* Wielokropek w podpowiedzi pola znaczy „albo": ma sens tylko wtedy,
       gdy nad polem stoi to drugie „albo". */
    expect(await page.getAttribute(".js-in", "placeholder")).toMatch(/^…/);
  });

  test("without speech recognition the scene explains the missing microphone, once per run", async ({ page }) => {
    await otworzZeStt(page, false);
    await expect(page.locator(".js-turn .js-mic")).toHaveCount(0);
    await expect(page.locator(".js-turn .callout")).toBeVisible();
    expect(await page.getAttribute(".js-in", "placeholder")).not.toMatch(/^…/);

    await page.fill(".js-in", BAR[0]);
    await page.click(".js-send");
    await czekajNaTure(page);
    /* A note repeated under every line stops being information. */
    await expect(page.locator(".js-turn .callout")).toHaveCount(0);
    await expect(page.locator(".js-in")).toBeVisible();
  });

  /* ─────────────────────────────────────────────────────────────
     A wrong answer stops the scene.

     Before, the conversation went on and the bubble held the model line
     instead of what the student said: on screen it looked like a pass.
     Reported from the screen: "even when I answer wrongly it goes on as if
     nothing happened".
     ───────────────────────────────────────────────────────────── */
  test("a wrong answer does not move the dialogue and says so plainly", async ({ page }) => {
    await otworz(page, "bar-mattina");
    const bable = await page.locator(".dlg__line").count();

    await page.fill(".js-in", "spaghetti alle vongole");
    await page.click(".js-send");

    await expect(page.locator(".js-fb.is-on")).toBeVisible();
    await expect(page.locator(".js-fb")).toHaveClass(/fb--ko/);
    /* Not one new bubble: the scene stands where it stood. */
    expect(await page.locator(".dlg__line").count()).toBe(bable);
    await expect(page.locator(".js-in")).toBeVisible();
    /* The typed words stay — correcting your own answer is the point of
       stopping, and clearing the field would mean typing it all again. */
    expect(await page.inputValue(".js-in")).toBe("spaghetti alle vongole");

    /* The same turn accepts the correct line: the block is on the answer,
       not on the scene. */
    await page.fill(".js-in", BAR[0]);
    await page.click(".js-send");
    await czekajNaTure(page);
    expect(await page.locator(".dlg__line").count()).toBeGreaterThan(bable);
  });

  test("\"Show the answer\" is the way out of a turn: the model enters the transcript", async ({ page }) => {
    await otworz(page, "bar-mattina");
    await page.fill(".js-in", "qualcosa a caso");
    await page.click(".js-send");
    await expect(page.locator(".js-fb.is-on")).toBeVisible();

    await page.click(".js-skip");
    await czekajNaTure(page);
    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("un caffè e un cornetto"))).toBe(true);
    /* Rezygnacja nie daje punktu: po czterech takich wynik jest zerowy. */
    for (let n = 0; n < 3; n++) {
      await czekajNaTure(page);
      await page.click(".js-skip");
    }
    await expect(page.locator(".summary__score")).toHaveText("0/4", { timeout: 30000 });
  });

  test("the hint is in the student's language, the Italian model only after giving up", async ({ page }) => {
    await otworz(page, "presentarsi");
    await czekajNaTure(page);
    /* An Italian sentence in the hint turned the conversation into copying. */
    const podp = await page.locator(".voice-pl").first().innerText();
    expect(podp).toContain("Jasne, proszę!");
    expect(podp).not.toContain("Certo, prego");

    await page.click(".js-skip");
    await czekajNaTure(page);
    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("Certo, prego"))).toBe(true);
  });
});
