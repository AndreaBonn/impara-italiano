/* ============================================================
   Pełna pamięć w prawdziwej przeglądarce.

   Testy jednostkowe sprawdzają to na podstawionym DOM, więc mówią
   o logice, nie o tym, co uczeń zobaczy. Tu chodzi o drugie: czy
   komunikat naprawdę pojawia się na stronie i czy naprawdę zostaje,
   podczas gdy zwykły toast znika.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Dłużej niż 3,2 s, po których znika toast — inaczej test niczego nie rozróżnia. */
const DŁUŻEJ_NIŻ_TOAST = 4200;

test("przy pełnej pamięci komunikat zostaje na ekranie", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => {
    localStorage.setItem = function () {
      const e = new Error("QuotaExceededError");
      e.name = "QuotaExceededError";
      throw e;
    };
    window.Core.state.xp = 5;
    window.Core.save();
  });

  const stuck = page.locator(".toast--stuck");
  await expect(stuck).toBeVisible();
  await expect(stuck).toHaveAttribute("role", "alert");

  const tekst = await stuck.innerText();
  expect(tekst.length, "komunikat nie może być pustym kluczem").toBeGreaterThan(10);

  await page.waitForTimeout(DŁUŻEJ_NIŻ_TOAST);
  await expect(stuck, "po czasie życia toasta nadal widoczny").toBeVisible();
});

test("zwykły toast w tym samym miejscu znika sam", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => window.Core.toast("wiadomość testowa"));
  await expect(page.locator(".toast").first()).toBeVisible();

  await page.waitForTimeout(DŁUŻEJ_NIŻ_TOAST);
  await expect(page.locator("#toastStack .toast")).toHaveCount(0);
});

test("komunikat da się zamknąć i nie wraca sam", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => {
    localStorage.setItem = function () {
      const e = new Error("QuotaExceededError");
      e.name = "QuotaExceededError";
      throw e;
    };
    window.Core.save();
  });

  const stuck = page.locator(".toast--stuck");
  await expect(stuck).toBeVisible();

  const x = stuck.locator(".toast__x");
  await expect(x, "przycisk zamykania musi mieć nazwę dla czytnika ekranu")
    .toHaveAttribute("aria-label", /.{3,}/);
  await x.click();
  await expect(stuck).toHaveCount(0);
});

/* Zmierzone, nie oszacowane: pierwsza wersja miała 28 px i wyglądała
   dobrze na zrzucie ekranu. Na telefonie 28 px to cel dla paznokcia. */
test("na wąskim ekranie komunikat ma margines, a zamknięcie 44 px", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 700 });
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  await page.evaluate(() => {
    localStorage.setItem = function () {
      const e = new Error("QuotaExceededError");
      e.name = "QuotaExceededError";
      throw e;
    };
    window.Core.save();
  });
  await page.waitForSelector(".toast--stuck");

  const m = await page.evaluate(() => {
    const el = document.querySelector(".toast--stuck");
    const x = document.querySelector(".toast__x");
    const b = el.getBoundingClientRect(), xb = x.getBoundingClientRect();
    return {
      przelew: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      lewa: Math.round(b.left),
      w: Math.round(xb.width), h: Math.round(xb.height)
    };
  });

  expect(m.przelew, "brak przewijania w poziomie").toBe(0);
  expect(m.lewa, "komunikat nie dotyka krawędzi ekranu").toBeGreaterThanOrEqual(8);
  expect(m.w).toBeGreaterThanOrEqual(44);
  expect(m.h).toBeGreaterThanOrEqual(44);
});

test("postępy lekcji przeżywają brak miejsca, karty błędów ustępują", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);

  const wynik = await page.evaluate(async () => {
    /* Magazyn, który przyjmuje tylko małe zapisy: duży stan odpada,
       przycięty przechodzi. To jest dokładnie sytuacja z R6. */
    const LIMIT = 3000;
    let ostatni = null;
    localStorage.setItem = function (k, v) {
      if (String(v).length > LIMIT) {
        const e = new Error("QuotaExceededError");
        e.name = "QuotaExceededError";
        throw e;
      }
      ostatni = String(v);
    };

    window.Core.state.lessons["a1-u01-l1"] = { done: true, best: 1, score: 10, total: 10, attempts: 1, ts: 1 };
    for (let i = 0; i < 60; i++) {
      window.Core.state.errors["k" + i] = {
        kind: "authored", tag: "g-presente", ef: 2.5, reps: 3, interval: 5,
        due: 1, lapses: 0, ts: 1000 + i, wypelniacz: "x".repeat(200)
      };
    }
    window.Core.save();
    await new Promise(r => setTimeout(r, 400));

    if (!ostatni) return { zapisano: false };
    const s = JSON.parse(ostatni);
    return {
      zapisano: true,
      lekcjaDone: !!(s.lessons["a1-u01-l1"] || {}).done,
      ileBledow: Object.keys(s.errors || {}).length
    };
  });

  expect(wynik.zapisano, "zapis doszedł do skutku po przycięciu").toBe(true);
  expect(wynik.lekcjaDone, "postęp lekcji przetrwał").toBe(true);
  expect(wynik.ileBledow, "część kart błędów ustąpiła miejsca").toBeLessThan(60);
});
