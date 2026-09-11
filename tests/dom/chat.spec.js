/* ============================================================
   The free conversation in a real browser.

   The unit tests walk the rules and the run with the transport replaced.
   Four things they cannot reach:

   - the partner's words become a bubble. If they ever went in as HTML, the
     payload would run with the student's API key one localStorage read
     away, and the screen would look entirely normal;
   - a turn that got no answer has to be GIVEN BACK, with the student's line
     taken off the screen and put back in the field. On paper it is one
     branch; on screen it is the difference between retrying and losing a
     turn to a conversation that never happened;
   - nothing here may touch progress. No XP, no streak, no card, no lesson.
     That absence is what makes this mode safe to leave uncorrected, and it
     is invisible in any single function;
   - without a key the screen has to say so before the student types a
     sentence into a field that will not send it.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Sets keys, consent and a scripted reply before the page's scripts run. */
async function przygotuj(page, opcje) {
  const o = opcje || {};
  await page.addInitScript((cfg) => {
    window.__zapytania = 0;
    if (cfg.key) window.localStorage.setItem("linguai.llm.v1", JSON.stringify({ openai: cfg.key }));

    const raw = window.localStorage.getItem("linguai.italiano.v2");
    const state = raw ? JSON.parse(raw) : { schema: 2, settings: {} };
    state.settings = state.settings || {};
    state.settings.lang = "pl";
    state.settings.llmConsent = true;
    state.settings.llmChatConsent = cfg.zgoda !== false;
    state.settings.autoplay = false;   /* no synthesis in a test */
    window.localStorage.setItem("linguai.italiano.v2", JSON.stringify(state));

    const czekaj = new Promise((r) => { window.__gotowy = r; });
    Object.defineProperty(window, "Llm", {
      configurable: true,
      set(v) {
        delete window.Llm;
        window.Llm = v;
        v.useTransport(() => {
          window.__zapytania++;
          if (cfg.pada) return Promise.resolve({ status: 401, json: { error: { message: "no" } } });
          return Promise.resolve({
            status: 200,
            json: { choices: [{ message: { content: JSON.stringify({
              risposta: cfg.risposta, correzione: cfg.correzione || ""
            }) } }] }
          });
        });
        window.__gotowy();
      }
    });
    return czekaj;
  }, {
    key: o.key === undefined ? "sk-test-key-1234" : o.key,
    zgoda: o.zgoda,
    pada: !!o.pada,
    risposta: o.risposta || "Certo, un caffè. Altro?",
    correzione: o.correzione || ""
  });
}

async function otworzScena(page) {
  await page.goto("/index.html#/chiacchiere?id=bar");
  await page.waitForSelector(".js-in", { timeout: 30000 });
}

test("the opening line is on screen before the student types anything", async ({ page }) => {
  await przygotuj(page);
  await otworzScena(page);
  const bolle = await page.locator(".dlg__line").allInnerTexts();
  expect(bolle.length).toBe(1);
  expect(bolle[0]).toContain("Buongiorno");
  expect(await page.evaluate(() => window.__zapytania), "nothing was asked yet").toBe(0);
});

test("a turn draws both bubbles, and the correction is text", async ({ page }) => {
  await przygotuj(page, {
    risposta: "Certo, un caffè!",
    correzione: "<img src=x onerror=\"window.__xss=1\">Si dice «vorrei»."
  });
  await otworzScena(page);

  await page.fill(".js-in", "volere un caffè");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);

  await expect(page.locator(".chat-fix")).toContainText("vorrei");
  expect(await page.evaluate(() => window.__xss)).toBeUndefined();
  expect(await page.locator(".chat-fix img").count()).toBe(0);
});

test("the counter of turns left goes down by one", async ({ page }) => {
  await przygotuj(page);
  await otworzScena(page);
  const przed = await page.locator(".js-left").innerText();
  await page.fill(".js-in", "un caffè per favore");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);
  const po = await page.locator(".js-left").innerText();
  expect(po, "the counter did not move: " + przed).not.toBe(przed);
});

test("a turn that got no answer is given back, with the words returned", async ({ page }) => {
  await przygotuj(page, { pada: true });
  await otworzScena(page);
  const przed = await page.locator(".js-left").innerText();

  await page.fill(".js-in", "vorrei un caffè");
  await page.click(".js-send");

  /* The student's line is off the screen again, the field holds it back, the
     counter is where it was, and the field is usable. */
  await expect(page.locator(".dlg__line")).toHaveCount(1);
  await expect(page.locator(".js-in")).toHaveValue("vorrei un caffè");
  await expect(page.locator(".js-in")).toBeEnabled();
  expect(await page.locator(".js-left").innerText()).toBe(przed);
});

test("nothing in a conversation touches the student's progress", async ({ page }) => {
  /* The structural claim of this whole mode, and the only place it can be
     checked end to end: XP, the streak, the deck and the lessons are exactly
     where they were before the conversation. */
  await przygotuj(page, { correzione: "Si dice «vorrei»." });
  await otworzScena(page);
  const przed = await page.evaluate(() => JSON.stringify({
    xp: window.Core.state.xp,
    streak: window.Core.state.streak,
    lekcje: Object.keys(window.Core.state.lessons).length,
    talia: Object.keys(window.Core.state.srs).length,
    bledy: Object.keys(window.Core.state.errors).length
  }));

  await page.fill(".js-in", "volere un caffè");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);

  const po = await page.evaluate(() => JSON.stringify({
    xp: window.Core.state.xp,
    streak: window.Core.state.streak,
    lekcje: Object.keys(window.Core.state.lessons).length,
    talia: Object.keys(window.Core.state.srs).length,
    bledy: Object.keys(window.Core.state.errors).length
  }));
  expect(po).toBe(przed);
});

test("the conversation never reaches the exported profile", async ({ page }) => {
  await przygotuj(page);
  await otworzScena(page);
  await page.fill(".js-in", "un segreto che non deve uscire");
  await page.click(".js-send");
  await expect(page.locator(".dlg__line")).toHaveCount(3);

  const kopia = await page.evaluate(() => window.Core.exportState());
  expect(kopia).not.toContain("un segreto che non deve uscire");
  expect(kopia).not.toContain("Certo, un caffè");
});

test("without a key the screen says so and sends nothing", async ({ page }) => {
  await przygotuj(page, { key: "" });
  await page.goto("/index.html#/chiacchiere");
  await page.waitForSelector(".callout--trap");

  const avviso = await page.locator(".callout--trap").innerText();
  expect(avviso.length, "the sentence is there before the list").toBeGreaterThan(40);
  expect(avviso, "and it is a sentence, not a key").not.toContain("chat.needsKey");

  await page.locator("[data-scena]").first().click();
  await page.waitForSelector(".js-in");
  await page.fill(".js-in", "ciao");
  await page.click(".js-send");
  await page.waitForTimeout(300);
  expect(await page.evaluate(() => window.__zapytania)).toBe(0);
  await expect(page.locator(".dlg__line")).toHaveCount(1);
});

test("with the conversation consent withdrawn, nothing leaves", async ({ page }) => {
  /* The key is there and the judge's consent is there: only the third one is
     missing, and it is enough. */
  await przygotuj(page, { zgoda: false });
  await otworzScena(page);
  await page.fill(".js-in", "ciao");
  await page.click(".js-send");
  await page.waitForTimeout(400);
  expect(await page.evaluate(() => window.__zapytania)).toBe(0);
});
