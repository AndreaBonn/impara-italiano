/* ============================================================
   The new-version announcement — two successive releases, in a real browser.

   The unit tests (tests/unit/pwa.test.mjs) check the wiring of the rules to
   the states through a double: the order of events there is THE ONE WE
   DESCRIBED. Here the browser sets the order, and the release is a real
   release — different sw.js bytes at the same address, that is exactly what
   the student sees after we push our changes.

   The server is our own, on a port of its own: a worker registration is
   bound to an origin, so a test on the port from playwright.config.js would
   share it with the rest of the suite and a "first visit" would not be
   first. The release is swapped by a function from `scripts/serve.mjs`, so
   that no file in the working tree has to be broken.
   ============================================================ */
const { test, expect } = require("@playwright/test");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const ROOT = join(__dirname, "..", "..");
const ZRODLO = readFileSync(join(ROOT, "sw.js"), "utf8");

const KOMUNIKAT = "#toastStack .toast--stuck";

/** The same worker under a different version: different bytes and a different shell cache name. */
function wydanie(nazwa) {
  return ZRODLO.replace(/var SW_VERSION = "[^"]+";/, `var SW_VERSION = "${nazwa}";`);
}

let serwer, ADRES;
let biezace = "v900.000000000000";

test.beforeAll(async () => {
  const modul = await import("../../scripts/serve.mjs");
  serwer = modul.serwer({ podmiany: { "/sw.js": () => wydanie(biezace) } });
  await new Promise((gotowe) => serwer.listen(0, gotowe));
  ADRES = `http://localhost:${serwer.address().port}`;
});

test.afterAll(async () => {
  await new Promise((gotowe) => serwer.close(gotowe));
});

/**
 * Opens the course and waits until the worker REALLY takes over the page.
 *
 * A tab that started before the registration has no controller until a
 * refresh — and with no controller there is nothing to update, so this whole
 * file would be checking a first visit five times over.
 */
async function podKontrola(page) {
  await page.goto(ADRES + "/index.html");
  await page.evaluate(() => navigator.serviceWorker.ready);
  if (!(await page.evaluate(() => !!navigator.serviceWorker.controller))) {
    await page.reload();
  }
  await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 15000 });
}

/** A new release on the server plus a refresh: exactly what a student does. */
async function nowaWersja(page, nazwa) {
  biezace = nazwa;
  await page.reload();
  await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 15000 });
}

/** Whether the new release's shell is already cached — that is, whether the worker is active. */
function pamiecPowloki(page, nazwa) {
  return page.waitForFunction(
    async (n) => (await caches.keys()).includes("linguai-shell-" + n),
    nazwa, { timeout: 20000 }
  );
}

test("a first visit in a clean browser announces nothing", async ({ browser }) => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  await podKontrola(page);
  /* The first worker also passes through "installed": if the announcement
     did not ask about the controller, the message would come out right
     here. */
  await expect(page.locator(KOMUNIKAT)).toHaveCount(0);

  await ctx.close();
});

test("after a release the message appears by itself, and \"Update\" moves to the new version", async ({ browser }) => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  await podKontrola(page);
  await nowaWersja(page, "v901.000000000000");

  const komunikat = page.locator(KOMUNIKAT);
  await expect(komunikat).toBeVisible({ timeout: 20000 });
  await expect(komunikat).toContainText("nowa wersja");

  /* The marker survives everything except a page reload: after the click it
     must be gone, and that is the only proof the page started from scratch. */
  await page.evaluate(() => { window.__znacznik = 1; });
  await komunikat.locator(".toast__act").click();

  await pamiecPowloki(page, "v901.000000000000");
  await page.waitForFunction(() => window.__znacznik === undefined, null, { timeout: 20000 });
  await expect(page.locator(KOMUNIKAT)).toHaveCount(0, { timeout: 15000 });

  await ctx.close();
});

test("\"later\" leaves the version in the queue and the message returns on opening", async ({ browser }) => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  await podKontrola(page);
  await nowaWersja(page, "v902.000000000000");
  await expect(page.locator(KOMUNIKAT)).toBeVisible({ timeout: 20000 });

  await page.locator(KOMUNIKAT + " .toast__x").click();
  await expect(page.locator(KOMUNIKAT)).toHaveCount(0);

  const czeka = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    return !!(reg && reg.waiting);
  });
  expect(czeka, "the version stayed in the queue, it was not applied").toBe(true);

  await page.reload();
  await expect(page.locator(KOMUNIKAT)).toBeVisible({ timeout: 20000 });

  await ctx.close();
});

test("two tabs: accepting in one brings the other into line", async ({ browser }) => {
  const ctx = await browser.newContext();
  const pierwsza = await ctx.newPage();
  const druga = await ctx.newPage();

  await podKontrola(pierwsza);
  await podKontrola(druga);

  await nowaWersja(pierwsza, "v903.000000000000");
  await expect(pierwsza.locator(KOMUNIKAT)).toBeVisible({ timeout: 20000 });

  /* Nobody clicks anything in the second tab. It has to reload by itself,
     because from the takeover on its requests are served by the new version
     — and old code over new files is exactly the mismatch this whole feature
     defends against. */
  await druga.evaluate(() => { window.__znacznik = 1; });
  await pierwsza.locator(KOMUNIKAT + " .toast__act").click();

  await druga.waitForFunction(() => window.__znacznik === undefined, null, { timeout: 25000 });
  await pamiecPowloki(druga, "v903.000000000000");

  await ctx.close();
});
