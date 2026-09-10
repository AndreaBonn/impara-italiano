/* ============================================================
   T067 — content from somebody else's file does not execute in ANY view.

   The import is the only place where the student lets a string written by
   somebody else into the course. That string then comes back in three
   places: in the import preview, in My dictionary and in Coverage. Checking
   the preview alone would give a false sense of safety: one place inserting
   it through innerHTML is enough and the defence is worth nothing.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const OSTILE = '<img src=x onerror=window.__wykonane=1>';

async function zTaliaOstila(page) {
  await page.goto("/index.html#/lessico");
  await page.waitForFunction(() => window.Core && window.Core.state);
  await page.evaluate(zly => {
    Core.addCard(zly, zly, "test");
    Core.addCard("casa", zly, "test");
  }, OSTILE);
}

/** Whether the browser executed anything from the injected string. */
async function wykonane(page) {
  return page.evaluate(() => window.__wykonane === 1);
}

test.describe("import: hostile content stays a string", () => {
  test("My dictionary shows a string, not markup", async ({ page }) => {
    await zTaliaOstila(page);
    await page.evaluate(() => App.go("lessico"));
    await page.waitForSelector(".list-row");

    expect(await wykonane(page)).toBe(false);
    expect(await page.locator("#lexList img").count()).toBe(0);
    await expect(page.locator("#lexList").first()).toContainText("onerror");
  });

  test("Reviews show a string, not markup", async ({ page }) => {
    await zTaliaOstila(page);
    await page.evaluate(() => { Object.keys(Core.state.srs).forEach(k => { Core.state.srs[k].due = 1; }); App.go("ripasso"); });
    await page.waitForTimeout(400);

    expect(await wykonane(page)).toBe(false);
    expect(await page.locator("main img").count()).toBe(0);
  });

  test("Pokrycie pokazuje napis, nie znacznik", async ({ page }) => {
    await zTaliaOstila(page);
    await page.evaluate(async () => {
      for (const lv of Core.registry.levels) await new Promise(r => Core.loadLevelData(lv.code, r));
      Lemma.odswiez();
      App.go("copertura");
    });
    await page.waitForTimeout(600);

    expect(await wykonane(page)).toBe(false);
    expect(await page.locator("#covList img").count()).toBe(0);
  });

  test("the import preview shows a string and does not touch the state before confirmation", async ({ page }) => {
    await page.goto("/index.html#/impostazioni");
    await page.waitForSelector(".js-tsv-in", { state: "attached" });

    const przed = await page.evaluate(() => Object.keys(Core.state.srs).length);
    await page.setInputFiles(".js-tsv-in", {
      name: "obcy.tsv", mimeType: "text/plain",
      buffer: Buffer.from(`#separator:tab\n${OSTILE}\t${OSTILE}\tx\ncasa\tdom\ta1\n`, "utf8")
    });
    await page.waitForSelector(".js-tsv-preview .js-ok");

    expect(await wykonane(page)).toBe(false);
    expect(await page.locator(".js-tsv-preview img").count()).toBe(0);
    await expect(page.locator(".js-tsv-preview .js-rows")).toContainText("onerror");

    await page.click(".js-tsv-preview .js-no");
    expect(await page.evaluate(() => Object.keys(Core.state.srs).length)).toBe(przed);
  });
});
