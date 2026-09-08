/* ============================================================
   Tożsamość karty na PRAWDZIWYCH danych kursu.

   Testy jednostkowe pracują na ćwiczeniach zmyślonych na potrzeby
   testu. Tutaj chodzi o to, czego one nie widzą: czy w 1514
   ćwiczeniach kursu klucze naprawdę się nie zderzają i czy naprawdę
   przeżywają przełączenie języka wyjaśnień, które podmienia treść
   w tych samych obiektach.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Wczytuje wszystkie poziomy, nie tylko A1, który wchodzi na starcie. */
async function wczytajWszystko(page) {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);
  await page.evaluate(async () => {
    const kody = window.Core.registry.levels.map(l => l.code);
    for (const k of kody) {
      await new Promise(r => window.Core.loadLevelData(k, r));
    }
  });
}

test("klucze wszystkich ćwiczeń kursu są różne", async ({ page }) => {
  await wczytajWszystko(page);

  const wynik = await page.evaluate(() => {
    const wszystkie = [], zderzenia = [];
    const widziane = Object.create(null);
    let lekcji = 0;
    window.Core.registry.levels.forEach(lv => (lv.units || []).forEach(u => {
      (u.lessons || []).concat(u.test ? [u.test] : []).forEach(l => {
        lekcji++;
        window.Errors.keysIn(l).forEach(k => {
          if (widziane[k]) zderzenia.push(k);
          widziane[k] = true;
          wszystkie.push(k);
        });
      });
    }));
    return { ile: wszystkie.length, lekcji, zderzenia: zderzenia.slice(0, 5) };
  });

  expect(wynik.zderzenia, `zderzenia kluczy: ${wynik.zderzenia.join(", ")}`).toEqual([]);
  expect(wynik.lekcji).toBe(150);
  expect(wynik.ile).toBe(1514);
});

test("każdy klucz odnajduje z powrotem swoje ćwiczenie", async ({ page }) => {
  await wczytajWszystko(page);

  const zgubione = await page.evaluate(() => {
    const złe = [];
    window.Core.registry.levels.forEach(lv => (lv.units || []).forEach(u => {
      (u.lessons || []).concat(u.test ? [u.test] : []).forEach(l => {
        window.Errors.keysIn(l).forEach((k, i) => {
          const trafienie = window.Errors.locate(k);
          if (!trafienie || trafienie.ex !== l.exercises[i]) złe.push(k);
        });
      });
    }));
    return złe.slice(0, 5);
  });

  expect(zgubione, `klucze, które nie wracają do swojego ćwiczenia: ${zgubione.join(", ")}`).toEqual([]);
});

/* Sedno sprawy: nakładka podmienia treść W TYCH SAMYCH obiektach
   (i18n.js scala po indeksie, idempotentnie). Gdyby firma czytała
   cokolwiek z nakładki, cały quaderno osierociłby się przy zmianie
   języka — i to bez żadnego błędu w konsoli. */
test("klucze przeżywają zmianę języka wyjaśnień", async ({ page }) => {
  await wczytajWszystko(page);

  const przed = await page.evaluate(() => {
    const l = window.Core.getLesson("a1-u01-l1").lesson;
    return { klucze: window.Errors.keysIn(l), pytanie: (l.exercises[0] || {}).q || "" };
  });

  await page.evaluate(() => new Promise(r => window.Core.setLanguage("de", r)));

  const po = await page.evaluate(() => {
    const l = window.Core.getLesson("a1-u01-l1").lesson;
    return { klucze: window.Errors.keysIn(l), pytanie: (l.exercises[0] || {}).q || "" };
  });

  expect(po.pytanie, "nakładka naprawdę się zmieniła").not.toBe(przed.pytanie);
  expect(po.klucze, "a klucze nie").toEqual(przed.klucze);
});
