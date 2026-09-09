/* ============================================================
   Trening: hub i przebieg serii.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function hub(page) {
  await page.goto("/index.html#/allenamento");
  await page.waitForFunction(() => window.Drills && window.Train && window.Views.allenamento);
  await page.waitForSelector(".js-topic");
}

test("hub wymienia wszystkie zagadnienia z własnymi nazwami", async ({ page }) => {
  await hub(page);
  const n = await page.evaluate(() => window.Drills.TOPICS.length);
  await expect(page.locator(".js-topic")).toHaveCount(n);

  /* Nazwa zagadnienia NIE może być tytułem hasła gramatycznego: tag
     „numeri" wskazuje na g-frase, czyli „strukturę zdania". */
  /* W hubie stoi też wiersz prowadzący do rozróżniania dźwięków, więc
     liczymy tylko wiersze z przyciskiem zagadnienia. */
  const nazwy = await page.locator(".list-row:has(.js-topic) b").allInnerTexts();
  expect(nazwy.filter(Boolean).length).toBe(n);
  expect(new Set(nazwy).size, "nazwy nie powtarzają się").toBe(n);
});

test("rail prowadzi do treningu i oznacza go jako bieżący", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await page.locator('.rail__item[data-route="allenamento"]').click();
  await expect(page).toHaveURL(/#\/allenamento/);
  await expect(page.locator('.rail__item[data-route="allenamento"]')).toHaveAttribute("aria-current", "page");
});

test("seria pokazuje dziesięć zadań i liczy postęp", async ({ page }) => {
  await hub(page);
  await page.locator('.js-topic[data-topic="numeri"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  const naglowek = await page.locator(".exq__num").first().innerText();
  expect(naglowek).toMatch(/1/);
  expect(naglowek).toMatch(new RegExp(String(await page.evaluate(() => window.Train.DRILL_N))));
});

test("zła odpowiedź w treningu zakłada kartę oznaczoną jako generowana", async ({ page }) => {
  await hub(page);
  await page.locator('.js-topic[data-topic="prep-art"]').click();
  await expect(page.locator(".exq .js-in")).toBeVisible();

  /* Odpowiedź jest jawnie zła, nie „prawie": jedno kliknięcie kończy zadanie. */
  await page.locator(".exq .js-in").fill("na pewno zła");
  await page.locator(".exq .js-check").click();

  await expect(page.locator(".js-next")).toBeVisible();

  const karta = await page.evaluate(() => Object.values(window.Core.state.errors)[0]);
  expect(karta.kind).toBe("generated");
  expect(karta.tag).toBe("g-preposizioni");
  expect(karta.srcId).toBe("prep-art");
});

/* Karta z generatora nie zapisuje treści: musi się odtworzyć z pary
   (generator, ziarno). Gdyby ziarno nie było stabilne, powtórka
   pokazałaby inne zadanie niż to, na którym uczeń się potknął. */
test("karta z treningu odtwarza dokładnie to samo zadanie", async ({ page }) => {
  await hub(page);
  await page.locator('.js-topic[data-topic="date"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  const trescPrzed = await page.locator(".exq__prompt").first().innerText();

  await page.locator(".exq .js-in").fill("zła data");
  await page.locator(".exq .js-check").click();
  await expect(page.locator(".js-next")).toBeVisible();

  const odtworzone = await page.evaluate(() => {
    const klucz = Object.keys(window.Core.state.errors)[0];
    const gdzie = window.Errors.locate(klucz);
    return { generated: gdzie.generated, q: gdzie.ex.q };
  });

  expect(odtworzone.generated).toBe(true);
  /* q niesie znaczniki HTML, treść porównujemy po zdjęciu tagów. */
  expect(odtworzone.q.replace(/<[^>]+>/g, "")).toBe(trescPrzed.replace(/\s+/g, " ").trim());
});

test("żadne zadanie treningu nie ma przycisku głośnika", async ({ page }) => {
  await hub(page);
  const bezDzwieku = await page.evaluate(() => {
    const zle = [];
    window.Drills.TOPICS.forEach(topic => {
      for (let i = 0; i < 30; i++) {
        const { ex } = window.Drills.make(topic.id, "dom" + i);
        const b = window.Ex.build(ex, 0, "drill-" + topic.id);
        if (/data-say=/.test(b.html)) zle.push(topic.id);
      }
    });
    return zle;
  });
  expect(bezDzwieku, "wygenerowane zdanie nie ma nagrania, więc nie ma przycisku").toEqual([]);
});

test("napisy treningu istnieją w pięciu językach", async ({ page }) => {
  await hub(page);
  const braki = await page.evaluate(async () => {
    const out = {};
    for (const lang of ["pl", "en", "es", "fr", "de"]) {
      await new Promise(r => window.Core.setLanguage(lang, r));
      window.I18n.set(lang);
      window.App.go("allenamento");
      window.Drills.TOPICS.forEach(t => window.Drills.make(t.id, "i18n"));
      const puste = window.I18n.missing().filter(k => /^train\.|^drill\.|^nav\.train/.test(k));
      if (puste.length) out[lang] = puste;
    }
    return out;
  });
  expect(braki, JSON.stringify(braki)).toEqual({});
});
