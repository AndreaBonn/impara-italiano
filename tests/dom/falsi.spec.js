/* ============================================================
   Fałszywi przyjaciele — jedyna kategoria asymetryczna w kursie.

   Sprawdzamy dwie rzeczy, których nie widać w testach jednostkowych:
   że zmiana języka WYMIENIA zbiór, a nie dokłada do poprzedniego, i że
   ćwiczenie woła onDone dokładnie raz, tak jak wszystkie pozostałe.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function otworz(page, lang) {
  await page.goto("/index.html#/falsi");
  await page.waitForSelector(".fa-card");
  if (lang) {
    await page.evaluate(l => App.applyLang(l), lang);
    await page.waitForTimeout(400);
    await page.evaluate(() => App.go("falsi"));
    await page.waitForSelector(".fa-card");
  }
}

test.describe("fałszywi przyjaciele", () => {
  test("każdy język ma własny zbiór, a nie tłumaczenie tego samego", async ({ page }) => {
    await otworz(page, "pl");
    const pl = await page.locator(".fa-card .fa-it").allTextContents();
    await otworz(page, "es");
    const es = await page.locator(".fa-card .fa-it").allTextContents();

    expect(pl.length).toBeGreaterThan(10);
    expect(es.length).toBeGreaterThan(10);
    /* Zbiory mają być RÓŻNE: „la targa" myli Polaka, „el burro" Hiszpana. */
    const wspolne = pl.filter(w => es.includes(w));
    expect(wspolne.length).toBeLessThan(pl.length);
    expect(es.some(w => !pl.includes(w))).toBe(true);
  });

  test("po zmianie języka nie zostaje ani jedno stare wyjaśnienie", async ({ page }) => {
    await otworz(page, "pl");
    const plWhy = await page.locator(".fa-card .js-why").allTextContents();
    await otworz(page, "de");
    const deWhy = await page.locator(".fa-card .js-why").allTextContents();

    expect(deWhy.every(w => w.trim().length > 0)).toBe(true);
    expect(deWhy.some(w => plWhy.includes(w))).toBe(false);
  });

  test("ćwiczenie woła onDone dokładnie raz", async ({ page }) => {
    await otworz(page, "pl");
    await page.click(".js-quiz");
    await page.waitForSelector(".exq");

    await page.evaluate(() => {
      window.__n = 0;
      const o = Core.recordAnswer;
      Core.recordAnswer = function () { window.__n++; return o.apply(this, arguments); };
    });
    await page.click(".opt");
    await page.click(".js-check");
    await page.waitForTimeout(300);

    /* Drugiego kliknięcia nie próbujemy wykonać: przycisk jest wyłączony i
       Playwright czekałby na jego odblokowanie aż do końca testu. To, co
       naprawdę chcemy stwierdzić, brzmi „nie da się odpowiedzieć drugi
       raz", i tak jest zapisane. */
    await expect(page.locator(".exq .js-check")).toBeDisabled();
    expect(await page.evaluate(() => window.__n)).toBe(1);
  });

  test("wyjaśnienie wchodzi jako tekst, nie jako znacznik", async ({ page }) => {
    await otworz(page, "pl");
    expect(await page.locator(".fa-card .js-why img").count()).toBe(0);
    await expect(page.locator(".fa-card").first()).toContainText("PODPIS");
  });
});
