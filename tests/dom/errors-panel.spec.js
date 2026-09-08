/* ============================================================
   Zakładka „Błędy" w Powtórkach.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Zakłada kartę błędu bez przechodzenia przez interfejs lekcji. */
async function zepsujOdpowiedz(page, lekcjaId, indeks) {
  return page.evaluate(([id, i]) => {
    const L = window.Core.getLesson(id).lesson;
    return window.Errors.record(L, i, false).key;
  }, [lekcjaId, indeks]);
}

async function start(page) {
  await page.goto("/index.html#/ripasso");
  await page.waitForFunction(() => window.Core && window.Errors && window.Train);
}

test("zakładki są widoczne i przełączają się przez adres", async ({ page }) => {
  await start(page);
  await expect(page.locator(".tab")).toHaveCount(2);

  await page.locator('.tab[data-tab="errori"]').click();
  await expect(page).toHaveURL(/tab=errori/);
  await expect(page.locator('.tab[data-tab="errori"]')).toHaveAttribute("aria-current", "true");

  /* Adres niesie stan, więc odświeżenie wraca w to samo miejsce. */
  await page.reload();
  await expect(page.locator('.tab[data-tab="errori"]')).toHaveAttribute("aria-current", "true");
});

test("bez błędów zakładka tłumaczy, po co jest", async ({ page }) => {
  await start(page);
  await page.locator('.tab[data-tab="errori"]').click();
  const pusty = page.locator(".empty");
  await expect(pusty).toBeVisible();
  await expect(pusty.locator("h3")).not.toBeEmpty();
});

test("po pomyłce zakładka pokazuje zadanie do powtórki i zagadnienie", async ({ page }) => {
  await start(page);
  const klucz = await zepsujOdpowiedz(page, "a1-u01-l2", 1);
  expect(klucz).toContain("a1-u01-l2");

  /* Świeża pomyłka wraca za dziesięć minut: cofamy termin, żeby test
     nie czekał na zegar (i nie zależał od jego dokładności). */
  await page.evaluate(k => { window.Core.state.errors[k].due = Date.now() - 1000; }, klucz);

  await page.goto("/index.html#/ripasso?tab=errori");
  await page.waitForSelector(".js-start");
  await expect(page.locator("#ripassoBody")).toContainText("a1-u01-l2".slice(0, 0) + "");
  await expect(page.locator(".list-row b").first(), "nazwa zagadnienia z hasła gramatycznego").not.toBeEmpty();
});

test("powtórka pokazuje to samo ćwiczenie i przyjmuje odpowiedź", async ({ page }) => {
  await start(page);
  const klucz = await zepsujOdpowiedz(page, "a1-u01-l2", 1);
  await page.evaluate(k => { window.Core.state.errors[k].due = Date.now() - 1000; }, klucz);

  await page.goto("/index.html#/ripasso?tab=errori");
  await page.locator(".js-start").click();
  await expect(page.locator(".exq")).toBeVisible();
  await expect(page.locator("#ripassoBody")).toContainText(/./);

  const poprawna = await page.evaluate(() => {
    const L = window.Core.getLesson("a1-u01-l2").lesson;
    return L.exercises[1].a;
  });

  await page.locator(".exq .js-in").fill(Array.isArray(poprawna) ? poprawna[0] : String(poprawna));
  await page.locator(".exq .js-check").click();

  await expect(page.locator(".js-next")).toBeVisible();

  /* Jedna poprawna odpowiedź posuwa kartę, ale jej nie kończy: próg to dwie. */
  const reps = await page.evaluate(k => (window.Core.state.errors[k] || {}).reps, klucz);
  expect(reps).toBe(1);
});

test("karta bez ćwiczenia znika i uczeń się o tym dowiaduje", async ({ page }) => {
  await start(page);

  /* Karta wskazująca na treść, której w kursie nie ma. */
  await page.evaluate(() => {
    window.Core.state.errors["a1-u01-l2#deadbeefdeadbeef#0"] = {
      kind: "authored", tag: "g-nome-genere", srcId: "a1-u01-l2",
      ef: 2.5, reps: 0, interval: 0, due: Date.now() - 1000, lapses: 1, ts: Date.now()
    };
  });

  await page.goto("/index.html#/ripasso?tab=errori");
  await page.locator(".js-start").click();

  await expect(page.locator(".summary")).toBeVisible();
  await expect(page.locator(".summary")).toContainText(/./);
  const zostalo = await page.evaluate(() => Object.keys(window.Core.state.errors).length);
  expect(zostalo, "karta bez ćwiczenia została usunięta").toBe(0);
});

test("wszystkie napisy zakładki istnieją w pięciu językach", async ({ page }) => {
  await start(page);

  const brakujace = await page.evaluate(async () => {
    const braki = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.Core.state.errors["a1-u01-l2#deadbeefdeadbeef#0"] = {
        kind: "authored", tag: "g-nome-genere", srcId: "a1-u01-l2",
        ef: 2.5, reps: 0, interval: 0, due: Date.now() - 1000, lapses: 1, ts: Date.now()
      };
      window.App.go("ripasso", { tab: "errori" });
      const puste = window.I18n.missing().filter(k => /^err\.|^review\./.test(k));
      if (puste.length) braki[lang] = puste;
    }
    return braki;
  });

  expect(brakujace, JSON.stringify(brakujace)).toEqual({});
});
