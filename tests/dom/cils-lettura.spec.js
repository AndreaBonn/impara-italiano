/* ============================================================
   The model's reading of an exam production, in a real browser.

   The unit tests walk the guard and the cascade with the transport replaced.
   Three things they cannot reach, and all three fail in a way that looks
   like something else:

   - the reading is drawn into the report. If it ever went in as HTML rather
     than as text, the payload would run with the student's API key one
     localStorage read away, and the screen would look entirely normal;
   - without a key the report has to be exactly the one this course has
     always drawn. A request that goes out anyway, or a gap left where the
     reading would have been, is invisible;
   - the decision of ADR-009 is that no machine marks this exam. A model that
     sends a mark must reach a screen that does not show one.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/**
 * Sets the course up before any of its scripts run.
 *
 * The transport is replaced the moment llm.js defines it — after load would
 * be a race against the student finishing the exam.
 */
async function przygotuj(page, opcje) {
  const o = opcje || {};
  await page.addInitScript((cfg) => {
    window.__llmZapytania = 0;
    if (cfg.key) window.localStorage.setItem("linguai.llm.v1", JSON.stringify({ openai: cfg.key }));

    const raw = window.localStorage.getItem("linguai.italiano.v2");
    const state = raw ? JSON.parse(raw) : { schema: 2, settings: {} };
    state.settings = state.settings || {};
    state.settings.llmConsent = true;
    state.settings.lang = "pl";
    window.localStorage.setItem("linguai.italiano.v2", JSON.stringify(state));

    const czekaj = new Promise((r) => { window.__llmGotowy = r; });
    Object.defineProperty(window, "Llm", {
      configurable: true,
      set(v) {
        delete window.Llm;
        window.Llm = v;
        v.useTransport(() => {
          window.__llmZapytania++;
          return Promise.resolve({
            status: 200,
            json: { choices: [{ message: { content: cfg.odpowiedz } }] }
          });
        });
        window.__llmGotowy();
      }
    });
    return czekaj;
  }, { key: o.key || "", odpowiedz: o.odpowiedz || "Hai scritto «prova»: è troppo poco per capire." });
}

/** Walks the whole exam: four sections, then the review, then the report. */
async function przejdzEgzamin(page, cosPowiedzial) {
  await page.goto("/index.html#/esame");
  await page.waitForSelector(".js-start");
  await page.locator(".js-start").first().click();
  await page.waitForSelector(".js-next");

  for (let i = 0; i < 4; i++) {
    if (await page.locator(".js-text").count()) {
      await page.fill(".js-text", "Gentile ufficio, non posso venire giovedì perché lavoro. Cordiali saluti.");
    }
    await page.click(".js-next");
    await page.waitForTimeout(250);
  }

  await page.waitForSelector(".js-said");
  if (cosPowiedzial) await page.fill(".js-said", cosPowiedzial);
  await page.click(".js-next");
  await page.waitForSelector(".cils-tab");
}

test("with no key the report is the one the course has always drawn", async ({ page }) => {
  await przygotuj(page, { key: "" });
  await przejdzEgzamin(page, "Abito a Roma e faccio i turni in fabbrica.");

  expect(await page.evaluate(() => window.__llmZapytania), "nothing left the browser").toBe(0);
  await expect(page.locator(".cils-lettura")).toHaveCount(2, "the slots exist");
  /* Empty, and CSS hides an empty one, so the report has no gap in it. */
  for (const box of await page.locator(".cils-lettura").all()) {
    expect((await box.textContent()).trim()).toBe("");
    expect(await box.isVisible()).toBe(false);
  }
});

test("with a key the reading appears next to the production, as text", async ({ page }) => {
  await przygotuj(page, {
    key: "sk-test-key-1234",
    odpowiedz: "<img src=x onerror=\"window.__xss=1\">Hai scritto «non posso venire»: va bene."
  });
  await przejdzEgzamin(page, "Abito a Roma da tre anni e lavoro in fabbrica.");

  const lettura = page.locator(".cils-lettura").first();
  await expect(lettura).toBeVisible();
  await expect(lettura).toContainText("non posso venire");
  /* The payload is on the screen as characters and did not run. */
  expect(await page.evaluate(() => window.__xss)).toBeUndefined();
  expect(await page.locator(".cils-lettura img").count()).toBe(0);
});

test("a model that sends a mark reaches a report without one", async ({ page }) => {
  /* ADR-009 as a property of the program rather than of the instruction:
     this is what the student sees when the model ignores what it was told. */
  await przygotuj(page, {
    key: "sk-test-key-1234",
    odpowiedz: "La mail è chiara e completa. Voto: 10/12, saresti promosso."
  });
  await przejdzEgzamin(page, "Abito a Roma.");

  const lettura = page.locator(".cils-lettura").first();
  await expect(lettura).toContainText("chiara e completa");
  const caly = await page.locator(".cils-body, body").first().innerText();
  expect(caly).not.toMatch(/10\s*\/\s*12/);
  expect(caly.toLowerCase()).not.toContain("promosso");
});

test("the oral row reads what the student wrote, and says whose words they are", async ({ page }) => {
  await przygotuj(page, { key: "" });
  await przejdzEgzamin(page, "Abito nel mio quartiere da due anni, funziona bene, cambierei i trasporti.");

  const karty = (await page.locator(".card").allInnerTexts()).join("\n");
  expect(karty, "the requirements it met are detected").toContain("✓");

  /* The sentence saying whose words these are, compared against the
     interface string rather than against a word: the course draws this
     screen in five languages, and an Italian word hard-coded here would
     pass only as long as nobody switched language. */
  const zdanie = await page.evaluate(() => window.I18n.t("cils.oralOwnWords"));
  expect(zdanie.length, "the key resolves to a real sentence").toBeGreaterThan(20);
  expect(karty).toContain(zdanie);
});
