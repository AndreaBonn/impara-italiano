/* ============================================================
   Sesja dnia: jeden przycisk zamiast trzech decyzji.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function oggi(page) {
  await page.goto("/index.html#/oggi");
  await page.waitForFunction(() => window.Views && window.Views.oggi && window.Core.getLesson("a1-u01-l2"));
  await page.waitForSelector(".list-row");
}

/** Zakłada n kart błędów z terminem w przeszłości. */
async function zalegleBledy(page, n) {
  return page.evaluate(ile => {
    const L = window.Core.getLesson("a1-u01-l2").lesson;
    const klucze = [];
    for (let i = 0; i < ile && i < L.exercises.length; i++) {
      const k = window.Errors.record(L, i, false).key;
      window.Core.state.errors[k].due = Date.now() - 1000;
      klucze.push(k);
    }
    return klucze;
  }, n);
}

/* Sesja nigdy nie bywa pusta i to jest jej sens: zadania z generatora
   są zawsze dostępne, więc dziesięć minut zawsze ma czym się wypełnić.
   Gdyby przy braku zaległości pokazywała „dziś nic nie ma", odsyłałaby
   ucznia z powrotem do wyboru, którego ma go pozbawić. */
test("sesja ma co zaproponować także wtedy, gdy nic nie zalega", async ({ page }) => {
  await oggi(page);
  const zalegle = await page.evaluate(() =>
    window.Errors.dueCount() + window.Core.dueCards().length);
  expect(zalegle, "start bez żadnych zaległości").toBe(0);

  await expect(page.locator(".js-start")).toBeVisible();
  await page.locator(".js-start").click();
  await expect(page.locator(".exq")).toBeVisible();
});

test("sesja wymienia trzy części i liczy je", async ({ page }) => {
  await oggi(page);
  await expect(page.locator(".list-row")).toHaveCount(3);

  await zalegleBledy(page, 3);
  await page.reload();
  await page.waitForSelector(".js-start");

  const etykieta = await page.locator(".js-start").innerText();
  expect(etykieta, "przycisk niesie liczbę zadań").toMatch(/\d/);
});

test("przebieg pokazuje zadania i kończy się podsumowaniem", async ({ page }) => {
  await oggi(page);
  await zalegleBledy(page, 2);
  await page.reload();
  await page.waitForSelector(".js-start");
  await page.locator(".js-start").click();

  await expect(page.locator(".exq")).toBeVisible();

  /* Przechodzimy przez wszystkie zadania: odpowiedź nie ma znaczenia,
     liczy się to, że przebieg dochodzi do końca i nie gubi kroku. */
  for (let krok = 0; krok < 20; krok++) {
    if (await page.locator(".summary").count()) break;
    const check = page.locator(".exq .js-check").first();
    if (await check.count() && await check.isEnabled()) {
      const inp = page.locator(".exq .js-in, .exq .js-gap").first();
      if (await inp.count()) await inp.fill("cokolwiek");
      const radio = page.locator('.exq input[type="radio"]').first();
      if (await radio.count()) await radio.check();
      await check.click();
    }
    const next = page.locator(".js-next");
    if (await next.count() && await next.isVisible()) await next.click();
    else await page.waitForTimeout(120);
  }

  await expect(page.locator(".summary")).toBeVisible();
});

test("zamknięta sesja zostaje zapisana na dzisiejszą datę", async ({ page }) => {
  await oggi(page);
  const zapis = await page.evaluate(async () => {
    window.Core.state.session = { date: window.Core.today(), score: 5, total: 8 };
    window.Core.save();
    /* save() jest zdebouncowane na 180 ms: bez odczekania przeładowanie
       wyprzedziłoby zapis i test mierzyłby wyścig, nie zachowanie. */
    await new Promise(r => setTimeout(r, 300));
    return window.Core.state.session.date;
  });
  expect(zapis).toMatch(/^\d{4}-\d{2}-\d{2}$/);

  await page.reload();
  await page.waitForSelector(".list-row");
  await expect(page.locator(".card").first(), "informacja o zamkniętej sesji").toBeVisible();
});

test("rail prowadzi do sesji dnia", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await page.locator('.rail__item[data-route="oggi"]').click();
  await expect(page).toHaveURL(/#\/oggi/);
  await expect(page.locator('.rail__item[data-route="oggi"]')).toHaveAttribute("aria-current", "page");
});

test("napisy sesji dnia istnieją w pięciu językach", async ({ page }) => {
  await oggi(page);
  await zalegleBledy(page, 2);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("oggi");
      const puste = window.I18n.missing().filter(k => /^today\.|^nav\.today/.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
