/* ============================================================
   Atrybut `hidden` chowa naprawdę.

   Reguła przeglądarki to zwykłe [hidden]{display:none}, więc dowolna
   klasa z własnym `display` bije ją specyficznością i atrybut przestaje
   cokolwiek robić. Nic się nie wywraca: element po prostu zostaje na
   ekranie, a w HTML-u wygląda poprawnie.

   Ten defekt trafił się już dwa razy — zasłona szuflady i przycisk
   „dalej" w treningu — więc sprawdzany jest raz, dla wszystkich.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test("zasłona szuflady jest schowana przy zamkniętym menu", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 800 });
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await expect(page.locator("#railScrim")).toBeHidden();
});

test("przycisk dalej w treningu pojawia się dopiero po odpowiedzi", async ({ page }) => {
  await page.goto("/index.html#/allenamento");
  await page.waitForSelector(".js-topic");
  await page.locator('.js-topic[data-topic="numeri"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  await expect(page.locator(".js-next")).toBeHidden();
  await page.locator(".exq .js-in").fill("cokolwiek");
  await page.locator(".exq .js-check").click();
  await expect(page.locator(".js-next")).toBeVisible();
});

test("odznaka powtórek jest schowana, gdy nie ma nic do powtórzenia", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await expect(page.locator("#dueBadge")).toBeHidden();
});

/* Sedno: nie „czy ten jeden element jest schowany", tylko czy reguła
   działa niezależnie od klasy, którą element nosi. */
test("żaden element z hidden nie zajmuje miejsca, jakąkolwiek ma klasę", async ({ page }) => {
  await page.goto("/index.html#/allenamento");
  await page.waitForSelector(".js-topic");

  const widoczne = await page.evaluate(() => {
    const zle = [];
    document.querySelectorAll("[hidden]").forEach(el => {
      if (getComputedStyle(el).display !== "none") {
        zle.push(el.className || el.id || el.tagName);
      }
    });
    return zle;
  });

  expect(widoczne, `elementy z hidden, które i tak się rysują: ${widoczne.join(", ")}`).toEqual([]);
});

/* Wykres czternastu dni ma własną szerokość minimalną: bez owinięcia
   wypychał całą stronę poza ekran przy 375 px. */
test("żadna trasa nie przewija się w poziomie na wąskim ekranie", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App && window.Core.registry.levels.length);

  const TRASY = ["percorso", "oggi", "ripasso", "allenamento", "suoni", "lettura",
    "scrittura", "piazzamento", "cerca", "grammatica", "coniugatore", "lessico",
    "progressi", "impostazioni"];
  const zle = [];
  for (const tr of TRASY) {
    await page.evaluate(t => { location.hash = "#/" + t; }, tr);
    await page.waitForTimeout(220);
    const o = await page.evaluate(() =>
      document.documentElement.scrollWidth - document.documentElement.clientWidth);
    if (o > 0) zle.push(tr + " (+" + o + "px)");
  }
  expect(zle, `trasy z przewijaniem w poziomie: ${zle.join(", ")}`).toEqual([]);
});
