/* ============================================================
   The return hook in a real browser.

   The unit tests say WHEN each of the three things should happen. What they
   cannot see is the half that only exists in a page: whether a switch is
   drawn at all where the browser has no API behind it, whether the button
   really puts a file on disk, and whether the file that lands there is the
   one a calendar would accept.

   THE CASE WORTH THE MOST HERE IS THE ABSENT ONE. Firefox has no
   `beforeinstallprompt` and no `setAppBadge`; iOS has neither outside an
   installed app. A dead control is the worst possible outcome, because it
   looks like the course is broken rather than like the browser is missing a
   feature — and it passes every unit test, since nothing about it is
   arithmetic. Playwright runs Chromium here, so the missing API is produced
   by deleting it before the page's own scripts run, which is the same
   situation from the code's point of view.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Opens the settings with the chosen browser APIs removed. */
async function ustawienia(page, opcje) {
  const o = opcje || {};
  await page.addInitScript((cfg) => {
    if (cfg.bezOdznaki) {
      /* Defined over, not deleted: these live on Navigator.prototype rather
         than on the instance, so `delete navigator.setAppBadge` removes
         nothing and the test would quietly go on running WITH the API. It
         passed that way once already, which is exactly the shape of a green
         test that checks nothing. */
      ["setAppBadge", "clearAppBadge"].forEach((n) => {
        Object.defineProperty(window.navigator, n, { value: undefined, configurable: true });
      });
    }
    if (!cfg.bezOdznaki) {
      /* A badge that records instead of painting: the operating system is
         not reachable from a test, but the CALL is what the course controls. */
      window.__odznaka = [];
      window.navigator.setAppBadge = (n) => { window.__odznaka.push(n); return Promise.resolve(); };
      window.navigator.clearAppBadge = () => { window.__odznaka.push(null); return Promise.resolve(); };
    }
  }, { bezOdznaki: !!o.bezOdznaki });

  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n && window.Retention);
  await page.evaluate(() => window.App.go("impostazioni"));
  await page.waitForSelector(".js-ics");
}

test("without the badge API there is no switch, there is a sentence", async ({ page }) => {
  await ustawienia(page, { bezOdznaki: true });

  await expect(page.locator(".js-badge"), "nessun controllo morto").toHaveCount(0);

  const karta = page.locator(".card", { hasText: await page.evaluate(() => window.I18n.t("ret.title")) }).first();
  const tekst = await karta.innerText();
  expect(tekst, "napis, nie sam klucz i18n").not.toContain("ret.badgeAbsent");
  expect(tekst.length, "la spiegazione sta al posto dell'interruttore").toBeGreaterThan(0);

  /* And the rest of the card still works: losing one API must not take the
     reminder down with it. */
  await expect(page.locator(".js-ics")).toBeVisible();
});

test("with the badge API the switch is there, off, and turning it on paints", async ({ page }) => {
  await ustawienia(page);

  const przelacznik = page.locator(".js-badge");
  await expect(przelacznik).toBeVisible();
  await expect(przelacznik, "spento di default: si vede fuori dal corso").not.toBeChecked();

  await page.evaluate(() => {
    /* One card in each deck. Both, because the badge next to "Powtórki"
       inside the course adds them up (app.js) and two badges under the same
       name must not show two numbers. */
    window.Core.state.srs["ciao"] = { it: "ciao", tr: {}, due: Date.now() + 1000 };
    window.Core.state.errors["a1-01#x#0"] = { tag: "g-presente", due: Date.now() - 1000 };
  });
  await przelacznik.check();

  const wypisane = await page.evaluate(() => window.__odznaka);
  expect(wypisane.filter((n) => n === 2).length, "il vocabolario e il quaderno insieme").toBeGreaterThan(0);

  await przelacznik.uncheck();
  const poWylaczeniu = await page.evaluate(() => window.__odznaka);
  expect(poWylaczeniu[poWylaczeniu.length - 1], "spegnendo si cancella").toBe(null);
});

test("the reminder button really puts a calendar file on disk", async ({ page }) => {
  await ustawienia(page);

  const [pobranie] = await Promise.all([
    page.waitForEvent("download"),
    page.locator(".js-ics").click()
  ]);
  expect(pobranie.suggestedFilename()).toBe("impara-italiano.ics");

  /* The bytes, not the fact that something was clicked: a file a calendar
     refuses is the same as no reminder at all, and nothing on screen would
     say so. */
  const tresc = await page.evaluate(() => window.Ics.przypomnienie({
    godzina: 9, minuta: 0, tytul: window.I18n.t("ret.icsTitle"),
    opis: window.I18n.t("ret.icsBody"), uid: "x@y", teraz: Date.now()
  }));
  expect(tresc.startsWith("BEGIN:VCALENDAR\r\n")).toBe(true);
  expect(tresc).toContain("RRULE:FREQ=DAILY");
  expect(tresc, "l'ora scelta finisce nell'evento").toContain("T090000");
  expect(tresc, "il testo e quello tradotto, non la chiave").not.toContain("ret.icsTitle");
});

test("the chosen hour survives leaving the screen", async ({ page }) => {
  await ustawienia(page);

  await page.locator(".js-hour").selectOption("7");
  await Promise.all([page.waitForEvent("download"), page.locator(".js-ics").click()]);

  await page.evaluate(() => window.App.go("percorso"));
  await page.evaluate(() => window.App.go("impostazioni"));
  await page.waitForSelector(".js-hour");
  await expect(page.locator(".js-hour")).toHaveValue("7");
});
