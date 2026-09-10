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

/* ============================================================
   Written exercises: the same judge, a different contract.

   In a conversation the run has no "exactly once" rule. Here it does:
   `onDone` is what the lesson progress counts, and the gate now sits
   between the click and that call. Everything a wait introduces — a second
   click, a lesson that moves on, a comment drawn into the page — lands on
   a counter nobody watches.
   ============================================================ */
test.describe("the second judge in a written exercise", () => {
  /**
   * Builds one exercise in the page and answers it, with the model scripted.
   *
   * Returns how many times `onDone` fired and with what, because that pair
   * is the contract: called twice, or called with the wrong verdict, both
   * read on screen as an ordinary wrong answer.
   */
  async function odpowiedz(page, opcje) {
    await przygotuj(page, { key: "sk-test-key-1234", esito: opcje.esito, commento: opcje.commento });
    await zgoda(page);
    await page.goto("/index.html#/impostazioni");
    await page.waitForSelector(".js-llm-key");

    return page.evaluate(async (cfg) => {
      const host = document.createElement("div");
      document.getElementById("main").appendChild(host);
      const built = window.Ex.build(
        { t: "trans", q: "Traduci: vorrei un caffè", a: ["vorrei un caffè"] }, 0, "s");
      host.innerHTML = built.html;
      const root = host.firstElementChild;

      let wywolan = 0, ok = null;
      built.wire(root, (v) => { wywolan++; ok = v; });

      root.querySelector(".js-in").value = "prendo un caffè";
      root.querySelector(".js-check").click();
      /* A second click while the verdict is in flight. */
      if (cfg.dwaRazy) root.querySelector(".js-check").click();

      await new Promise((r) => setTimeout(r, 1500));
      return {
        wywolan, ok,
        fb: root.querySelector(".fb").textContent,
        html: root.querySelector(".fb").innerHTML,
        klasa: root.className
      };
    }, { dwaRazy: !!opcje.dwaRazy });
  }

  test("a promotion turns the exercise green, once", async ({ page }) => {
    const w = await odpowiedz(page, { esito: "SI", commento: "Też poprawnie." });
    expect(w.ok).toBe(true);
    expect(w.wywolan, "the progress counter was told twice about one answer").toBe(1);
    expect(w.klasa).toContain("exq--ok");
    expect(w.fb).toContain("Też poprawnie.");
  });

  test("a rejection keeps the answer wrong, and says why", async ({ page }) => {
    const w = await odpowiedz(page, { esito: "NO", commento: "Zły czasownik." });
    expect(w.ok).toBe(false);
    expect(w.wywolan).toBe(1);
    expect(w.klasa).toContain("exq--ko");
    expect(w.fb).toContain("Zły czasownik.");
  });

  test("a second click during the wait does not answer twice", async ({ page }) => {
    const w = await odpowiedz(page, { esito: "SI", commento: "Dobrze.", dwaRazy: true });
    expect(w.wywolan, "two clicks produced two answers to one exercise").toBe(1);
  });

  test("the model's comment is text, in an exercise too", async ({ page }) => {
    const w = await odpowiedz(page, {
      esito: "NO",
      commento: '<img src=x onerror="window.__xssEx=1">'
    });
    expect(await page.evaluate(() => window.__xssEx)).toBe(undefined);
    /* Paired: it did arrive, as text. */
    expect(w.fb).toContain("onerror");
    expect(w.html).not.toContain("<img");
  });
});

/* ============================================================
   A composition read by the model.

   The third place this feature reaches, and the one with the loosest
   contract: no verdict, no clamp, nothing to promote. What matters here is
   that it stays optional, stays out of the student's progress, and that
   somebody else's prose lands on the page as text.
   ============================================================ */
test.describe("the model reading a composition", () => {
  async function napisz(page, opcje) {
    const o = opcje || {};
    await przygotuj(page, { key: o.key === undefined ? "sk-test-key-1234" : o.key });
    await zgoda(page);
    /* The transport answers with prose, not with a verdict. */
    await page.addInitScript((tekst) => {
      window.__opinia = tekst;
    }, o.opinia || "Uwaga: «sono andato» jest poprawne, ale «un gelato» chce rodzajnika.");
    await page.goto("/index.html#/scrittura?id=w-a2-giornata");
    await page.waitForSelector(".js-text");

    await page.evaluate(() => {
      /* Re-point the transport at the prose the test wants back. */
      window.Llm.useTransport(() => {
        window.__llmZapytania++;
        return Promise.resolve({
          status: 200,
          json: { choices: [{ message: { content: window.__opinia } }] }
        });
      });
      document.querySelector(".js-text").value =
        "Ieri sono andato al mare con mia sorella e ho mangiato gelato. È stata una giornata bella e tranquilla.";
    });
    await page.click(".js-check");
    await page.waitForSelector("#writeResult");
  }

  test("the opinion is asked for, never taken", async ({ page }) => {
    await napisz(page);
    /* The button exists and nothing has gone out yet: a composition costs
       more than a sentence, and the money is the student's. */
    await expect(page.locator(".js-opinion")).toBeVisible();
    expect(await page.evaluate(() => window.__llmZapytania)).toBe(0);

    await page.click(".js-opinion");
    await expect(page.locator(".js-opinion-box")).toBeVisible({ timeout: 15000 });
    await expect(page.locator(".js-opinion-box")).toContainText("un gelato");
  });

  test("the opinion is prose from outside, so it goes in as text", async ({ page }) => {
    await napisz(page, { opinia: '<img src=x onerror="window.__xssW=1">' });
    await page.click(".js-opinion");
    await expect(page.locator(".js-opinion-box")).toBeVisible({ timeout: 15000 });

    expect(await page.evaluate(() => window.__xssW)).toBe(undefined);
    await expect(page.locator(".js-opinion-box")).toContainText("onerror");
    expect(await page.locator(".js-opinion-box").innerHTML()).not.toContain("<img");
  });

  test("it says it is an opinion and not a mark", async ({ page }) => {
    await napisz(page);
    await page.click(".js-opinion");
    await expect(page.locator(".js-opinion-box")).toBeVisible({ timeout: 15000 });
    /* The sentence matters: without it a student reads a model's guess as
       the course's verdict on their Italian. */
    await expect(page.locator(".js-opinion-box")).toContainText("Nie wpływa");
  });

  test("asking twice is not offered: the button goes and does not come back", async ({ page }) => {
    await napisz(page);
    await page.click(".js-opinion");
    await expect(page.locator(".js-opinion-box")).toBeVisible({ timeout: 15000 });
    await expect(page.locator(".js-opinion")).toHaveCount(0);
    expect(await page.evaluate(() => window.__llmZapytania)).toBe(1);
  });

  test("without a key the composition is checked exactly as before", async ({ page }) => {
    await napisz(page, { key: "" });
    /* The mechanical reading is still there — this feature adds a line, it
       does not replace the one the course already had. */
    await expect(page.locator("#writeResult .list-row")).not.toHaveCount(0);
    await expect(page.locator(".js-opinion")).toHaveCount(0);
    expect(await page.evaluate(() => window.__llmZapytania)).toBe(0);
  });
});
