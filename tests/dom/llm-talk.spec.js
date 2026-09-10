/* ============================================================
   The second judge, in a real browser.

   The unit tests walk the cascade with the transport replaced, which is
   where the logic lives. Three things they cannot reach, and all three fail
   silently in a way that looks like something else:

   - the model's comment is drawn into the page. If it ever went in as HTML
     rather than as text, the payload would run with the student's API key
     one localStorage read away, and the screen would look completely
     normal;
   - without a key the course must behave exactly as it did before, and
     "exactly" includes sending nothing. A request that goes out anyway is
     invisible on screen;
   - a promotion has to move the scene, not merely say something nice.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/**
 * Sets the course up before any of its scripts run.
 *
 * `addInitScript` runs before the page's own scripts, so the transport is
 * replaced the moment llm.js has defined it — after load would be a race
 * against the student's first answer.
 */
async function przygotuj(page, opcje) {
  const o = opcje || {};
  await page.addInitScript((cfg) => {
    window.__llmZapytania = 0;
    if (cfg.key) window.localStorage.setItem("linguai.llm.v1", JSON.stringify({ openai: cfg.key }));
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
            json: { choices: [{ message: { content: JSON.stringify({ esito: cfg.esito, commento: cfg.commento }) } }] }
          });
        });
        window.__llmGotowy();
      }
    });
    return czekaj;
  }, {
    key: o.key || "",
    esito: o.esito || "SI",
    commento: o.commento || "Poprawnie."
  });
}

/** Consent, written straight into the profile: this is not the consent test. */
async function zgoda(page) {
  await page.addInitScript(() => {
    const raw = window.localStorage.getItem("linguai.italiano.v2");
    const state = raw ? JSON.parse(raw) : { schema: 2, settings: {} };
    state.settings = state.settings || {};
    state.settings.llmConsent = true;
    state.settings.lang = "pl";
    window.localStorage.setItem("linguai.italiano.v2", JSON.stringify(state));
  });
}

async function otworzBar(page) {
  await page.goto("/index.html#/conversazione?id=bar-mattina");
  await page.waitForSelector(".js-in", { timeout: 30000 });
}

test.describe("the second judge in the browser", () => {
  test("a comment from the model is text, never markup", async ({ page }) => {
    await przygotuj(page, {
      key: "sk-test-key-1234",
      esito: "SI",
      commento: '<img src=x onerror="window.__xss=1">'
    });
    await zgoda(page);
    await otworzBar(page);

    /* A sentence no letter-by-letter comparison accepts, so the judge is
       the only road to a promotion. */
    await page.fill(".js-in", "vorrei per cortesia un caffè ed un cornetto");
    await page.click(".js-send");

    await page.waitForFunction(() => window.__llmZapytania > 0, { timeout: 15000 });
    await page.waitForTimeout(600);

    expect(await page.evaluate(() => window.__xss)).toBe(undefined);
    /* Paired with the positive: the payload really did reach the page, as
       text. Without this the check above would also pass against a course
       that dropped the comment on the floor. */
    const widoczne = await page.evaluate(() => document.body.innerText);
    expect(widoczne).toContain("onerror");
  });

  test("a promotion moves the scene on", async ({ page }) => {
    await przygotuj(page, { key: "sk-test-key-1234", esito: "SI", commento: "Dobrze." });
    await zgoda(page);
    await otworzBar(page);

    const przedtem = await page.locator(".dlg__it").count();
    await page.fill(".js-in", "vorrei per cortesia un caffè ed un cornetto");
    await page.click(".js-send");

    await expect
      .poll(() => page.locator(".dlg__it").count(), { timeout: 20000 })
      .toBeGreaterThan(przedtem);
  });

  test("a rejection by the model leaves the scene where it was", async ({ page }) => {
    await przygotuj(page, { key: "sk-test-key-1234", esito: "NO", commento: "Zły czas." });
    await zgoda(page);
    await otworzBar(page);

    const przedtem = await page.locator(".dlg__it").count();
    await page.fill(".js-in", "completamente sbagliato questo");
    await page.click(".js-send");
    await page.waitForFunction(() => window.__llmZapytania > 0, { timeout: 15000 });
    await page.waitForTimeout(600);

    expect(await page.locator(".dlg__it").count()).toBe(przedtem);
    await expect(page.locator(".js-fb")).toContainText("Zły czas.");
  });

  test("without a key nothing leaves, and the course behaves as it always did", async ({ page }) => {
    await przygotuj(page, { key: "" });
    await zgoda(page);

    /* Every request to a foreign host, counted by the browser rather than
       by our own stub: a stub can only report calls that reached it. */
    const obce = [];
    page.on("request", (r) => {
      const url = r.url();
      if (!url.startsWith("http://localhost") && !url.startsWith("data:")) obce.push(url);
    });

    await otworzBar(page);
    await page.fill(".js-in", "vorrei per cortesia un caffè ed un cornetto");
    await page.click(".js-send");
    await page.waitForTimeout(1200);

    expect(obce).toEqual([]);
    expect(await page.evaluate(() => window.__llmZapytania)).toBe(0);
    /* And the rejection is the one the course has always shown. */
    await expect(page.locator(".js-fb")).toBeVisible();
  });

  test("the settings page never shows a key back", async ({ page }) => {
    await przygotuj(page, { key: "sk-test-key-1234" });
    await zgoda(page);
    await page.goto("/index.html#/impostazioni");
    await page.waitForSelector(".js-llm-key");

    const html = await page.content();
    expect(html).not.toContain("sk-test-key-1234");
    /* Paired: something identifies the stored key, or the student cannot
       tell which of four fields is filled in. */
    expect(html).toContain("1234");
  });
});

test.describe("the order of the providers", () => {
  const leggi = (page) => page.$$eval(".js-llm-key", (n) => n.map((x) => x.getAttribute("data-id")));

  test("moving one up changes who is asked first, and it survives a reload", async ({ page }) => {
    await page.goto("/index.html#/impostazioni");
    await page.waitForSelector(".js-llm-key");
    expect(await leggi(page)).toEqual(["gemini", "groq", "openai", "anthropic"]);

    await page.click('.js-llm-up[data-id="openai"]');
    await page.waitForSelector(".js-llm-key");
    expect(await leggi(page)).toEqual(["gemini", "openai", "groq", "anthropic"]);

    /* The setting is saved through the same debounce as every other one, so
       the wait is about the course's own timing and not about this feature. */
    await page.waitForTimeout(400);
    await page.reload();
    await page.waitForSelector(".js-llm-key");
    expect(await leggi(page), "the order was a reshuffle on screen, not a setting")
      .toEqual(["gemini", "openai", "groq", "anthropic"]);
  });

  test("the top provider has no way up, and the arrow says which one it moves", async ({ page }) => {
    await page.goto("/index.html#/impostazioni");
    await page.waitForSelector(".js-llm-key");
    /* Three arrows on four rows. A disabled button would read as broken;
       no button reads as "this one is already first". */
    await expect(page.locator(".js-llm-up")).toHaveCount(3);
    /* And each one is named, or a screen reader announces four identical
       arrows. */
    const nazwa = await page.locator('.js-llm-up[data-id="openai"]').getAttribute("aria-label");
    expect(nazwa).toContain("OpenAI");
  });

  test("an order arriving from somebody else's backup cannot break the list", async ({ page }) => {
    /* The order lives in settings, and settings travel inside the exported
       profile. A file naming providers we do not serve, or naming one of
       them twice, must still leave four usable rows. */
    await page.addInitScript(() => {
      window.localStorage.setItem("linguai.italiano.v2", JSON.stringify({
        schema: 2,
        settings: { lang: "pl", llmOrder: ["mistral", "openai", "openai", "__proto__"] }
      }));
    });
    await page.goto("/index.html#/impostazioni");
    await page.waitForSelector(".js-llm-key");

    const rzad = await leggi(page);
    expect(rzad).toHaveLength(4);
    expect(new Set(rzad).size, "a provider appeared twice").toBe(4);
    expect(rzad[0], "the one name in the file we do serve should lead").toBe("openai");
  });
});
