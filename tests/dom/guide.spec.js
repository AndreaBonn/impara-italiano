/* ============================================================
   Przewodnik: strona, która obiecuje, że mówi, gdzie co jest.

   Obietnica psuje się cicho i w dwie strony. Trasa wypisana w mapie,
   której nikt nie zarejestrował, prowadzi przez router z powrotem na
   ścieżkę nauki — przycisk działa, tylko idzie gdzie indziej. Ekran
   dopisany do paska i pominięty w mapie sprawia, że strona mówiąca
   „wszystkie ekrany po kolei" po prostu o nim milczy.

   Żadnego z tych dwóch nie widać ani w kodzie, ani na ekranie.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function przewodnik(page) {
  await page.goto("/index.html#/guida");
  await page.waitForSelector("#g-inizio");
}

test("wszystkie sekcje są na stronie", async ({ page }) => {
  await przewodnik(page);
  for (const id of ["inizio", "ordine", "lezione", "oggi", "ripasso",
                    "esame", "mappa", "backup", "bloccato"]) {
    await expect(page.locator("#g-" + id)).toBeVisible();
  }
});

test("spis treści przenosi fokus na sekcję, nie tylko obraz", async ({ page }) => {
  await przewodnik(page);
  await page.locator('.js-toc[data-sekcja="esame"]').click();
  const id = await page.evaluate(() => document.activeElement.id);
  expect(id, "fokus po kliknięciu w spisie").toBe("g-esame");
});

test("adres z sekcją otwiera się na niej", async ({ page }) => {
  await page.goto("/index.html#/guida?s=backup");
  await page.waitForSelector("#g-backup");
  const id = await page.evaluate(() => document.activeElement.id);
  expect(id).toBe("g-backup");
});

/* Sedno pierwsze: każda trasa z mapy ma swój widok. */
test("żaden ekran z mapy nie prowadzi donikąd", async ({ page }) => {
  await przewodnik(page);
  const sieroty = await page.evaluate(() =>
    [...document.querySelectorAll(".js-goto")]
      .map(b => b.getAttribute("data-route"))
      .filter(r => typeof window.Views[r] !== "function"));
  expect(sieroty, `trasy bez widoku: ${sieroty.join(", ")}`).toEqual([]);
});

/* Sedno drugie: pasek i mapa mówią o tym samym kursie. */
test("każda pozycja paska jest opisana w mapie", async ({ page }) => {
  await przewodnik(page);
  const brakujace = await page.evaluate(() => {
    const wMapie = new Set([...document.querySelectorAll(".js-goto")]
      .map(b => b.getAttribute("data-route")));
    return [...document.querySelectorAll(".rail__item")]
      .map(b => b.getAttribute("data-route"))
      .filter(r => r !== "guida" && !wMapie.has(r));
  });
  expect(brakujace, `ekrany z paska poza mapą: ${brakujace.join(", ")}`).toEqual([]);
});

test("przycisk w mapie otwiera swój ekran", async ({ page }) => {
  await przewodnik(page);
  await page.locator('.js-goto[data-route="suoni"]').click();
  await expect(page).toHaveURL(/#\/suoni/);
});

test("test poziomujący da się zacząć z przewodnika", async ({ page }) => {
  await przewodnik(page);
  await page.locator(".js-place").click();
  await expect(page).toHaveURL(/#\/piazzamento/);
});

test("napisy przewodnika istnieją w pięciu językach", async ({ page }) => {
  await przewodnik(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("guida");
      const puste = window.I18n.missing().filter(k => /^(guide\.|nav\.guide)/.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
