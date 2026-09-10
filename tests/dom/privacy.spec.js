/* ============================================================
   The privacy notice: it draws in all five languages, it is reachable
   without knowing its address, and the switch it promises exists.

   Three things here fail silently, which is why each has its own test.

   A MISSING KEY does not break anything: i18n.js falls back to English, so
   a German student would read four sections in German and one in English
   and would probably assume it was meant that way. parity.mjs compares the
   dictionaries WITH EACH OTHER and cannot see this - it would pass happily
   if the view asked for a key none of the five files has. `I18n.missing()`
   is the other half: it lists what the page actually asked for and did not
   find.

   A DEAD LINK in the footer looks exactly like a live one until it is
   clicked. The router falls back to the learning path for an unknown route
   (router.js:85), so a typo in the href would land the student somewhere
   plausible instead of nowhere.

   AND THE CONSENT SWITCH is the reason T3.13 exists at all: the notice
   states the consent can be withdrawn, and until this switch was added the
   only way to withdraw it was erasing the whole profile. A notice that
   promises a control nobody built is worse than one that admits there is
   none.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** The five languages of explanation, in the order of I18n.LANGS. */
const JEZYKI = ["pl", "en", "es", "fr", "de"];

async function otworz(page) {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Views && window.Core && window.Core.registry.levels.length > 0);
}

/** Switches the language and waits until the engine has redrawn in it. */
async function naJezyk(page, kod) {
  await page.evaluate((k) => window.App.applyLang(k), kod);
  await page.waitForFunction((k) => window.I18n.lang === k, kod);
}

test("the notice draws in all five languages, with no key falling back", async ({ page }) => {
  await otworz(page);

  for (const kod of JEZYKI) {
    await naJezyk(page, kod);
    await page.evaluate(() => window.App.go("privacy", {}));

    /* Drawn, not merely routed to: every section is a card with an id, and
       the view builds ten of them — the tenth is the model checking, added
       when the course gained a way to send answers off the device. */
    await expect(page.locator("#main section[id^='p-']")).toHaveCount(10);

    /* No heading left as its own key: t() returns the key itself when
       nothing is found, so "privacy.voce.h" on screen is what a missing
       string looks like. */
    const surowe = await page.locator("#main section[id^='p-'] h3").allTextContents();
    expect(surowe.filter((s) => s.startsWith("privacy.")),
      `nagłówki bez tłumaczenia w ${kod}`).toEqual([]);
  }

  /* Asked for and not found, across all five passes. The English fallback
     means a gap here costs nothing visible, which is exactly why it needs
     to be asserted rather than looked at. */
  const brakujace = await page.evaluate(() => window.I18n.missing());
  expect(brakujace, `klucze bez tłumaczenia: ${brakujace.join(", ")}`).toEqual([]);
});

test("the address is a working mailto, not text that looks like one", async ({ page }) => {
  await otworz(page);
  await page.evaluate(() => window.App.go("privacy", {}));

  const listy = page.locator("#main a[href^='mailto:']");
  await expect(listy).toHaveCount(2);

  /* The same address in both places, and it comes from the view rather than
     from five dictionaries - which is the property that keeps one language
     from quietly holding a stale one. */
  const adresy = await listy.evaluateAll((as) => as.map((a) => a.getAttribute("href")));
  expect(new Set(adresy).size).toBe(1);
});

test("the footer link reaches the notice from any screen", async ({ page }) => {
  await otworz(page);

  /* From somewhere that is not the default route, so that landing on the
     notice cannot be confused with never having left. */
  await page.evaluate(() => window.App.go("impostazioni", {}));

  await page.locator(".site-foot a[href='#/privacy']").click();
  await page.waitForFunction(() => window.Router.current.route === "privacy");
  await expect(page.locator("#main section#p-voce")).toBeVisible();
});

test("the buttons inside the notice open the screen where you can act", async ({ page }) => {
  await otworz(page);
  await page.evaluate(() => window.App.go("privacy", {}));

  /* Three sections carry the button: what stays on the device, the voice,
     and the model checking. All three talk about something the student can
     change, and all three are useless without a way to get there. */
  const przyciski = page.locator("#main .js-ustawienia");
  await expect(przyciski).toHaveCount(3);

  await przyciski.first().click();
  await page.waitForFunction(() => window.Router.current.route === "impostazioni");
  await expect(page.locator("#main .js-export")).toBeVisible();
});

test("the consent switch grants and withdraws, and the state follows", async ({ page }) => {
  await otworz(page);
  await page.evaluate(() => window.App.go("impostazioni", {}));

  const przelacznik = page.locator(".js-consent");

  /* Chromium in the test config exposes speech recognition; where a browser
     does not, the switch is deliberately absent (views-settings.js) and this
     assertion is the thing that would notice it disappearing by accident. */
  await expect(przelacznik).toHaveCount(1);

  await przelacznik.check();
  expect(await page.evaluate(() => window.Core.state.settings.sttConsent)).toBe(true);

  await przelacznik.uncheck();
  expect(await page.evaluate(() => window.Core.state.settings.sttConsent)).toBe(false);

  /* And the withdrawal actually reaches the gate: with no consent stored,
     Audio2.listen refuses instead of recording. That is the sentence the
     notice makes, checked where it is kept. */
  const odmowa = await page.evaluate(() => new Promise((resolve) => {
    window.Consent.uzyjPytania(function (cb) { cb(false); });
    window.Audio2.listen({ onerror: resolve });
  }));
  expect(odmowa).toBe("no-consent");
});
