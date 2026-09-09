/* ============================================================
   Pisanie: co kurs mierzy, czego nie mierzy i czego nie wykona.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function lista(page) {
  await page.goto("/index.html#/scrittura");
  await page.waitForFunction(() => window.WRITING && window.Views.scrittura && window.Writing);
  await page.waitForSelector(".js-open");
}

async function zadanie(page, id) {
  await page.goto("/index.html#/scrittura?id=" + id);
  await page.waitForFunction(() => window.WRITING && window.Views.scrittura);
  await page.waitForSelector("#writeBox");
}

test("lista pokazuje zadania z rodzajem", async ({ page }) => {
  await lista(page);
  const n = await page.evaluate(() => window.WRITING.length);
  await expect(page.locator(".js-open")).toHaveCount(n);
});

test("wypracowanie mówi z góry, jakich konstrukcji wymaga", async ({ page }) => {
  await zadanie(page, "w-a2-giornata");
  const ile = await page.evaluate(() => window.WRITING[0].requires.length);
  await expect(page.locator("#writeBox .card .list-row")).toHaveCount(ile);
  await expect(page.locator("#writeText")).toBeVisible();
});

test("sprawdzenie odczytuje, czego uczeń użył, a czego nie", async ({ page }) => {
  await zadanie(page, "w-a2-giornata");
  await page.locator("#writeText").fill(
    "Di solito mi sveglio alle sette. Faccio colazione, poi esco di casa e vado in ufficio.");
  await page.locator(".js-check").click();

  const wynik = await page.evaluate(() => {
    const zapis = window.Core.state.writing["w-a2-giornata"];
    return { found: zapis.found, total: zapis.total, words: zapis.words };
  });
  /* „mi sveglio", „di solito" i „poi" są w tekście; „lavorare" nie. */
  expect(wynik.found).toBe(3);
  expect(wynik.total).toBe(4);
  expect(wynik.words).toBeGreaterThan(10);

  const chipy = await page.locator("#writeResult .chip").allInnerTexts();
  expect(chipy.length).toBe(4);
});

/* Kurs nie ma oceniającego i nie ma prawa udawać, że ma. */
test("wynik nazywa wprost to, czego nie sprawdzono", async ({ page }) => {
  await zadanie(page, "w-a2-giornata");
  await page.locator("#writeText").fill("Mi sveglio presto.");
  await page.locator(".js-check").click();

  const nota = page.locator("#writeResult .card--contrast");
  await expect(nota).toBeVisible();
  const tekst = await nota.innerText();
  expect(tekst.length).toBeGreaterThan(60);

  const ileZListy = await page.evaluate(() => window.WRITING[0].checklist.length);
  await expect(nota.locator(".list-row")).toHaveCount(ileZListy);
});

test("model pokazuje się dopiero po sprawdzeniu", async ({ page }) => {
  await zadanie(page, "w-a2-giornata");
  await expect(page.locator(".js-model")).toBeHidden();

  await page.locator("#writeText").fill("Mi sveglio presto e lavoro.");
  await page.locator(".js-check").click();
  await expect(page.locator(".js-model")).toBeVisible();

  await page.locator(".js-model").click();
  await expect(page.locator(".js-model-box")).toBeVisible();
});

test("tekst wraca po ponownym wejściu", async ({ page }) => {
  await zadanie(page, "w-a2-giornata");
  await page.locator("#writeText").fill("Un testo che deve tornare.");
  await page.locator(".js-check").click();
  await page.waitForTimeout(300);

  await page.reload();
  await page.waitForSelector("#writeText");
  await expect(page.locator("#writeText")).toHaveValue("Un testo che deve tornare.");
});

/* Tekst ucznia wychodzi z aplikacji przez eksport i może wejść do cudzej
   przeglądarki przez import: jest treścią niezaufaną, choć napisał ją
   właściciel profilu. Nigdy nie może trafić do DOM jako HTML. */
test("tekst ucznia nie staje się znacznikami", async ({ page }) => {
  await zadanie(page, "w-a2-giornata");
  const zlosliwy = '<img src=x onerror="window.__wstrzykniete=1"> ciao';
  await page.locator("#writeText").fill(zlosliwy);
  await page.locator(".js-check").click();
  await page.waitForTimeout(300);

  expect(await page.evaluate(() => !!window.__wstrzykniete), "kod z tekstu się nie wykonał").toBe(false);
  expect(await page.locator("#writeBox img").count(), "tekst nie tworzy elementów").toBe(0);

  await page.reload();
  await page.waitForSelector("#writeText");
  expect(await page.evaluate(() => !!window.__wstrzykniete), "ani po ponownym wczytaniu").toBe(false);
  await expect(page.locator("#writeText")).toHaveValue(zlosliwy);
});

test("tłumaczenie jedzie zwykłymi ćwiczeniami i liczy wynik", async ({ page }) => {
  await zadanie(page, "w-a2-ieri");
  const ile = await page.evaluate(() => window.WRITING.filter(w => w.id === "w-a2-ieri")[0].items.length);
  await expect(page.locator("#writeBox .exq")).toHaveCount(ile);

  /* Pierwsze zdanie poprawnie, reszta byle jak: liczy się dojście do końca. */
  const poprawna = await page.evaluate(() => window.WRITING.filter(w => w.id === "w-a2-ieri")[0].items[0].a[0]);
  const pola = page.locator("#writeBox .exq .js-in");
  await pola.nth(0).fill(poprawna);
  for (let i = 1; i < ile; i++) await pola.nth(i).fill("qualcosa");
  for (let i = 0; i < ile; i++) {
    const b = page.locator("#writeBox .exq .js-check").nth(i);
    if (await b.isEnabled()) await b.click();
    if (await b.isEnabled()) await b.click();
  }
  await expect(page.locator("#writeSum .summary")).toBeVisible();
});

test("polecenie i lista kontrolna istnieją w pięciu językach", async ({ page }) => {
  await lista(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("scrittura");
      const bez = window.WRITING.filter(w => !w.title || !w.brief || !w.checklist).map(w => w.id);
      const zdania = window.WRITING
        .filter(w => w.kind === "translate")
        .filter(w => (w.items || []).some(i => !i.q)).map(w => w.id + ":items");
      const puste = window.I18n.missing().filter(k => /^write\./.test(k));
      if (puste.length || bez.length || zdania.length) out[lang] = puste.concat(bez, zdania);
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
