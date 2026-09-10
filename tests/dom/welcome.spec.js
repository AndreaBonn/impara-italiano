/* ============================================================
   Ekran powitalny: kto go widzi i kiedy przestaje.

   Pomyłka w którąkolwiek stronę jest cicha. Za wąsko: nowy uczeń ląduje
   od razu w piętnastu zakładkach i zaczyna od A1, choć zna język — to
   jest dokładnie ten stan, przez który ekran powstał. Za szeroko: ktoś
   z czterdziestoma lekcjami dostaje na starcie pytanie „od czego
   zacząć", jakby kurs go nie pamiętał.

   Trzeci przypadek, najłatwiejszy do zepsucia: znacznik stawia WYBÓR,
   a nie wyświetlenie. Postawiony za wcześnie sprawia, że przypadkowe
   odświeżenie karty zabiera uczniowi tę jedną odpowiedź na zawsze.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const KLUCZ = "linguai.italiano.v2";

/** Wstawia profil DO localStorage, zanim silnik zdąży go wczytać. */
async function zProfilem(page, profil) {
  await page.addInitScript(([k, p]) => {
    window.localStorage.setItem(k, JSON.stringify(p));
  }, [KLUCZ, profil]);
}

async function gotowe(page) {
  await page.waitForFunction(() => window.App && window.Router);
  await page.waitForFunction(() => window.Router.current.route !== null);
}

test("pusty profil trafia na powitanie", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toBeVisible();
  await expect(page).toHaveURL(/#\/benvenuto/);
});

test("uczeń w połowie kursu nie dostaje powitania", async ({ page }) => {
  await zProfilem(page, { schema: 2, stats: { lessonsDone: 40, correct: 0, wrong: 0, days: {} } });
  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toHaveCount(0);
  expect(await page.evaluate(() => window.Router.current.route)).toBe("percorso");
});

test("adres z linku wygrywa nad powitaniem", async ({ page }) => {
  await page.goto("/index.html#/grammatica");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toHaveCount(0);
  expect(await page.evaluate(() => window.Router.current.route)).toBe("grammatica");
});

test("wybór kończy powitanie, samo obejrzenie nie", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);

  /* Odświeżenie bez wyboru: pytanie ma wrócić. */
  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toBeVisible();

  /* „Od zera" idzie wprost do pierwszej lekcji: podpis przycisku obiecuje
     lekcję, a nie spis poziomów. */
  await page.locator(".js-zero").click();
  await expect(page).toHaveURL(/#\/lezione\?id=/);
  expect(await page.evaluate(() => window.Core.state.onboarded)).toBe(true);

  /* Czekamy na ZAPIS, nie na upływ czasu: save() jest zdebouncowane na
     180 ms, więc przeładowanie zaraz po kliknięciu wyprzedziłoby zapis
     i test mierzyłby własny pośpiech zamiast zachowania kursu. */
  await page.waitForFunction(k => {
    const zapis = window.localStorage.getItem(k);
    return zapis && JSON.parse(zapis).onboarded === true;
  }, KLUCZ);

  await page.goto("/index.html");
  await gotowe(page);
  await expect(page.locator(".js-zero")).toHaveCount(0);
  expect(await page.evaluate(() => window.Router.current.route)).toBe("percorso");
});

test("droga przez test poziomujący prowadzi do testu", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await page.locator(".js-test").click();
  await expect(page).toHaveURL(/#\/piazzamento/);
  await expect(page.locator(".js-go")).toBeVisible();
});

test("ścieżka nauki po wyborze ma z czego się narysować", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await page.locator(".js-look").click();
  /* Poziom wczytuje się pod powitaniem, więc lekcje mają tu już być:
     inaczej ekran zostaje na „wczytuję materiał" i nikt go nie odświeży. */
  await expect(page.locator("[data-lesson]").first()).toBeVisible({ timeout: 15000 });
});

/* Ta sama zależność od wczytania, ale ostrzej: „od zera" musi ZNAĆ id
   pierwszej lekcji w chwili kliknięcia, inaczej po cichu spadnie na spis
   poziomów — czyli zrobi to, czego ten przycisk ma nie robić. */
test("od zera trafia w pierwszą lekcję kursu, nie w spis", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  await page.locator(".js-zero").click();
  await expect(page).toHaveURL(/#\/lezione\?id=/);
  const pierwsza = await page.evaluate(() =>
    window.Core.nextLesson(window.Core.registry.levels[0]).lesson.id);
  expect(page.url()).toContain("id=" + pierwsza);
  await expect(page.locator("#main h1")).toBeVisible();
});

test("napisy powitania istnieją w pięciu językach", async ({ page }) => {
  await page.goto("/index.html");
  await gotowe(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("benvenuto");
      const puste = window.I18n.missing().filter(k => /^welcome\./.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
