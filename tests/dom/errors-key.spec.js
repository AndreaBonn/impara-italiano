/* ============================================================
   Card identity on the REAL course data.

   The unit tests work on exercises invented for the test. What matters here
   is what they cannot see: whether across the 1514 exercises of the course
   the keys really do not collide, and whether they really survive a switch
   of the explanation language, which replaces the content inside the same
   objects.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Loads every level, not only the A1 that comes in at startup. */
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

test("the keys of every exercise in the course are different", async ({ page }) => {
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
  /* The two counts are the guard that the walk really saw the whole course:
     without them a registry that loaded half the levels would report zero
     collisions and pass. They are a BASELINE, so they move whenever content
     is added — and the value to put here is the one `node scripts/baseline.mjs`
     prints, not a number anybody counts by hand. */
  expect(wynik.lekcji).toBe(154);
  expect(wynik.ile).toBe(1557);
});

test("every key finds its own exercise again", async ({ page }) => {
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

  expect(zgubione, `keys that do not lead back to their exercise: ${zgubione.join(", ")}`).toEqual([]);
});

/* The heart of the matter: the overlay replaces content INSIDE THE SAME
   objects (i18n.js merges by index, idempotently). If the signature read
   anything from the overlay, the whole notebook would be orphaned on a
   language change — and with no error in the console. */
test("the keys survive a change of the explanation language", async ({ page }) => {
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

  expect(po.pytanie, "the overlay really changed").not.toBe(przed.pytanie);
  expect(po.klucze, "a klucze nie").toEqual(przed.klucze);
});
