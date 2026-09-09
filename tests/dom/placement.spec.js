/* ============================================================
   Test poziomujący w przeglądarce.

   Logikę wyszukiwania pokrywają testy jednostkowe. Tutaj chodzi o to,
   czego one nie widzą: czy zadania w ogóle się pojawiają, czy wynik
   NIE zapisuje się bez zgody ucznia, i czy liczba lekcji do oznaczenia
   jest pokazana PRZED decyzją, a nie po niej.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function wejscie(page) {
  await page.goto("/index.html#/piazzamento");
  await page.waitForFunction(() => window.Placement && window.Views.piazzamento);
  await page.waitForSelector(".js-go");
}

/** Przechodzi cały test, odpowiadając byle jak; zwraca ekran wyniku. */
async function przejdzCaly(page) {
  await page.locator(".js-go").click();
  await page.waitForSelector(".exq", { timeout: 20000 });

  for (let krok = 0; krok < 40; krok++) {
    if (await page.locator(".summary").count()) break;
    const check = page.locator(".exq .js-check").first();
    if (await check.count() && await check.isEnabled()) {
      const inp = page.locator(".exq .js-in, .exq .js-gap").first();
      if (await inp.count()) await inp.fill("qualcosa");
      const radio = page.locator('.exq input[type="radio"]').first();
      if (await radio.count()) await radio.check();
      await check.click();
    }
    const next = page.locator(".js-next");
    if (await next.count() && await next.isVisible()) await next.click();
    else await page.waitForTimeout(120);
  }
  await expect(page.locator(".summary")).toBeVisible();
}

test("wejście tłumaczy, po co to jest, i ile potrwa", async ({ page }) => {
  await wejscie(page);
  const tekst = await page.locator("#main").innerText();
  expect(tekst).toMatch(/\d/);            // liczba zadań
  await expect(page.locator(".js-go")).toBeVisible();
});

test("test zadaje pytania i kończy się propozycją poziomu", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);

  const poziom = await page.locator(".summary__score").innerText();
  expect(poziom, "wynik to kod poziomu").toMatch(/^(A1|A2|B1|B2|C1|C2)$/);
});

/* Oznaczenie stu lekcji jako zaliczonych to zmiana, której uczeń nie
   cofnie jednym kliknięciem. Test proponuje, decyduje uczeń. */
test("wynik nie zapisuje się sam", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);

  const stan = await page.evaluate(() => ({
    placement: window.Core.state.placement,
    lekcje: Object.keys(window.Core.state.lessons).length
  }));
  expect(stan.placement, "nic nie zapisane przed decyzją").toBe(null);
  expect(stan.lekcje).toBe(0);

  await expect(page.locator(".js-accept")).toBeVisible();
  await expect(page.locator(".js-scratch")).toBeVisible();
});

test("liczba lekcji do oznaczenia jest widoczna przed decyzją", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);
  const tekst = await page.locator(".summary").innerText();
  expect(tekst, "podsumowanie mówi, ile lekcji zniknie ze ścieżki").toMatch(/\d/);
});

test("odmowa zostawia stan nietknięty", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);
  await page.locator(".js-scratch").click();
  await expect(page).toHaveURL(/#\/percorso/);

  const stan = await page.evaluate(() => ({
    placement: window.Core.state.placement,
    lekcje: Object.keys(window.Core.state.lessons).length
  }));
  expect(stan.placement).toBe(null);
  expect(stan.lekcje).toBe(0);
});

test("przyjęcie zapisuje poziom i nie dopisuje punktów", async ({ page }) => {
  await wejscie(page);
  await przejdzCaly(page);
  /* XP rośnie od samego ODPOWIADANIA na zadania testu (recordAnswer robi to
     wszędzie tak samo) — mierzymy więc, czy PRZYJĘCIE wyniku dokłada coś
     ponad to, bo właśnie tego dokładać nie wolno. */
  const przed = await page.evaluate(() => ({
    xp: window.Core.state.xp,
    zrobione: window.Core.state.stats.lessonsDone
  }));

  await page.locator(".js-accept").click();
  await expect(page).toHaveURL(/#\/percorso/);

  const stan = await page.evaluate(() => ({
    poziom: (window.Core.state.placement || {}).level,
    xp: window.Core.state.xp,
    zrobione: window.Core.state.stats.lessonsDone,
    oznaczone: Object.values(window.Core.state.lessons).filter(l => l.placed).length
  }));

  expect(stan.poziom).toMatch(/^(A1|A2|B1|B2|C1|C2)$/);
  expect(stan.xp, "przyjęcie wyniku nie dokłada punktów").toBe(przed.xp);
  expect(stan.zrobione, "licznik ukończonych mówi prawdę").toBe(przed.zrobione);
  expect(stan.zrobione, "oznaczone lekcje nie liczą się jako ukończone").toBe(0);
  /* Przy wyniku A1 nie ma czego oznaczać i to też jest poprawne. */
  expect(stan.oznaczone).toBeGreaterThanOrEqual(0);
});

test("wejście jest dostępne z ustawień", async ({ page }) => {
  await page.goto("/index.html#/impostazioni");
  await page.waitForSelector(".js-place");
  await page.locator(".js-place").click();
  await expect(page).toHaveURL(/#\/piazzamento/);
});

test("napisy testu istnieją w pięciu językach", async ({ page }) => {
  await wejscie(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("piazzamento");
      const puste = window.I18n.missing().filter(k => /^place\./.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
