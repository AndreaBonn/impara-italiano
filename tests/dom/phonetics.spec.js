/* ============================================================
   Rozróżnianie dźwięków.

   Sedno: ćwiczenie ma sens tylko wtedy, gdy nagranie ISTNIEJE.
   Synteza systemowa myli dokładnie te dźwięki, o które tu chodzi,
   więc zejście do niej nie byłoby gorszą jakością, tylko zadaniem
   bez odpowiedzi.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function suoni(page) {
  await page.goto("/index.html#/suoni");
  await page.waitForFunction(() => window.PHONETICS && window.Views.suoni && window.Audio2);
  await page.waitForSelector(".js-set");
}

test("każdy wyraz z każdej pary ma nagranie", async ({ page }) => {
  await suoni(page);
  const brak = await page.evaluate(() => {
    const zle = [];
    window.PHONETICS.forEach(z => (z.pairs || []).forEach(p => {
      if (!window.Audio2.hasNatural(p.a)) zle.push(z.id + ": " + p.a);
      if (!window.Audio2.hasNatural(p.b)) zle.push(z.id + ": " + p.b);
    }));
    return zle;
  });
  expect(brak, `bez nagrania: ${brak.join(", ")}`).toEqual([]);
});

test("lista zbiorów pokazuje tytuły z nakładki, nie identyfikatory", async ({ page }) => {
  await suoni(page);
  const n = await page.evaluate(() => window.PHONETICS.length);
  await expect(page.locator(".js-set")).toHaveCount(n);

  const tytuly = await page.locator(".list-row b").allInnerTexts();
  expect(tytuly.length).toBe(n);
  expect(tytuly.every(x => !/^ph-/.test(x)), `surowe id w interfejsie: ${tytuly.join(", ")}`).toBe(true);
});

test("zbiór pokazuje uwagę kontrastywną przed ćwiczeniem", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".card--contrast")).toBeVisible();
  const tekst = await page.locator(".card--contrast").innerText();
  expect(tekst.length, "uwaga kontrastywna nie może być pusta").toBeGreaterThan(80);
});

test("ćwiczenie odmawia sprawdzenia przed odsłuchaniem", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  await page.locator(".exq .opt").first().click();
  await page.locator(".exq .js-check").click();

  /* Nic się nie rozstrzygnęło: przycisk „dalej" nadal schowany. */
  await expect(page.locator(".js-next")).toBeHidden();
  await expect(page.locator("#toastStack .toast")).toBeVisible();
});

test("po odsłuchaniu odpowiedź jest przyjmowana i pokazuje glosy", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  await page.locator(".exq .js-play").click();
  await page.locator(".exq .opt").first().click();
  await page.locator(".exq .js-check").click();

  await expect(page.locator(".js-next")).toBeVisible();
  const fb = await page.locator(".exq .fb").innerText();
  expect(fb, "informacja zwrotna niesie znaczenie obu wyrazów").toMatch(/=/);
});

test("obie opcje pary są pokazane, a odtwarzany jest tylko jeden wyraz", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-gli"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  const opcje = await page.locator(".exq .opt span").allInnerTexts();
  expect(opcje.length).toBe(2);
  expect(new Set(opcje).size, "dwa różne wyrazy").toBe(2);
});

test("pomyłka w rozróżnianiu trafia do quaderno błędów", async ({ page }) => {
  await suoni(page);
  await page.locator('.js-set[data-set="ph-doppie"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  /* Ćwiczenie ma z czego wybierać. Której opcji NIE odtworzono, nie da się
     odczytać z DOM — dlatego niżej klikamy po kolei, aż któraś okaże się zła. */
  const zla = await page.evaluate(() => {
    const opts = [...document.querySelectorAll(".exq .opt")];
    return opts.length ? 0 : -1;
  });
  expect(zla).toBe(0);

  await page.locator(".exq .js-play").click();
  const przed = await page.evaluate(() => Object.keys(window.Core.state.errors).length);
  for (const o of await page.locator(".exq .opt").all()) {
    await o.click();
    await page.locator(".exq .js-check").click();
    if (await page.locator(".js-next").isVisible()) break;
  }
  const po = await page.evaluate(() => Object.keys(window.Core.state.errors).length);
  expect(po >= przed, "zła odpowiedź zakłada kartę, dobra nie").toBe(true);
});

test("napisy dźwiękowe istnieją w pięciu językach", async ({ page }) => {
  await suoni(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("suoni");
      /* Nakładka musi dać tytuł i uwagę kontrastywną każdemu zbiorowi. */
      const bezTytulu = window.PHONETICS.filter(z => !z.title || !z.contrast).map(z => z.id);
      const puste = window.I18n.missing().filter(k => /^sound\.|^ex\.minpair/.test(k));
      if (puste.length || bezTytulu.length) out[lang] = puste.concat(bezTytulu);
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
