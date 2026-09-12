/* ============================================================
   Praca bez sieci.

   The README promised this for a long time; until now the promise ended at
   the first refresh. These tests check the promise, not the presence of a
   sw.js file.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/**
 * Waits until the worker REALLY takes over the page.
 *
 * The first version waited for `controller !== undefined`, and on a page not
 * yet taken over `controller` is **null** — the condition was satisfied
 * immediately and the test ran without a worker. It only came to light when
 * a version change moved the moment of takeover.
 */
async function workerGotowy(page) {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await page.evaluate(() => navigator.serviceWorker.ready);
  if (!(await page.evaluate(() => !!navigator.serviceWorker.controller))) {
    /* Registered, but this tab started earlier: after a refresh it comes in
       under its control. */
    await page.reload();
    await page.waitForFunction(() => window.App);
  }
  await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 10000 });
}

test("the manifest is complete and points at icons that exist", async ({ page, request }) => {
  await page.goto("/index.html");
  const href = await page.locator('link[rel="manifest"]').getAttribute("href");
  expect(href).toBe("manifest.webmanifest");

  const res = await request.get("/manifest.webmanifest");
  expect(res.ok()).toBe(true);
  const m = await res.json();

  expect(m.name).toBeTruthy();
  expect(m.short_name.length, "short_name should fit under the icon").toBeLessThanOrEqual(12);
  expect(m.display).toBe("standalone");
  expect(m.start_url).toBeTruthy();

  /* Installation requires a 192 and a 512 icon; maskable decides whether
     Android cuts the corners off with a shape of its own. */
  const rozmiary = m.icons.map(i => i.sizes);
  expect(rozmiary).toContain("192x192");
  expect(rozmiary).toContain("512x512");
  expect(m.icons.some(i => (i.purpose || "").includes("maskable"))).toBe(true);

  for (const ikona of m.icons) {
    const r = await request.get("/" + ikona.src);
    expect(r.ok(), `missing icon: ${ikona.src}`).toBe(true);
    expect(r.headers()["content-type"]).toContain("image/png");
  }
});

test("the worker registers and takes over the page", async ({ page }) => {
  await workerGotowy(page);
  const stan = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    return { jest: !!reg, aktywny: !!(reg && reg.active) };
  });
  expect(stan.jest).toBe(true);
  expect(stan.aktywny).toBe(true);
});

test("with the network gone the page still opens", async ({ page, context }) => {
  await workerGotowy(page);
  /* The first visit fills the cache; only then do we cut the network. */
  await page.reload();
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  await context.setOffline(true);
  await page.reload();

  await expect(page.locator("#main")).toBeVisible();
  await page.waitForFunction(() => window.Core && window.Views && window.Ex, null, { timeout: 10000 });
  const poziomy = await page.evaluate(() => window.Core.registry.levels.length);
  expect(poziomy, "the level index survived the loss of network").toBeGreaterThan(0);

  await context.setOffline(false);
});

/* With no build step the files have no hash in their names, so the only
   version is the constant in sw.js. Cache-first would freeze the student on
   old code after a forgotten bump — irreversibly from their side and
   invisibly from ours. */
test("the code is fetched from the network while there is a network", async ({ page }) => {
  await workerGotowy(page);

  const zadania = [];
  page.on("request", r => { if (r.url().includes("/assets/js/core.js")) zadania.push(r.url()); });
  await page.reload();
  await page.waitForFunction(() => window.Core);

  expect(zadania.length, "core.js went to the network rather than straight to the cache").toBeGreaterThan(0);
});

test("recordings are not fetched a second time", async ({ page }) => {
  await workerGotowy(page);

  const wynik = await page.evaluate(async () => {
    /* We take the first hash from the index: the file certainly exists. */
    const hash = window.AUDIO_INDEX.slice(0, 16);
    const url = "audio/" + hash.slice(0, 2) + "/" + hash + ".mp3";
    await fetch(url);
    await new Promise(r => setTimeout(r, 300));
    /* The cache is looked up by prefix and not by full name on purpose: the
       suffix on AUDIO_CACHE is bumped whenever the audio at unchanged
       addresses changes, that is on a change of voice (sw.js). A name written
       out here would turn that bump into a red test about nothing, and the
       property under test is "the recording landed in the audio cache", not
       what that cache is called today. */
    const nazwy = (await caches.keys()).filter(n => n.indexOf("linguai-audio") === 0);
    const trafienia = [];
    for (const n of nazwy) {
      const klucze = await (await caches.open(n)).keys();
      if (klucze.some(k => k.url.endsWith(url))) trafienia.push(n);
    }
    return { url: url, wPamieci: trafienia.length > 0, nazwy: nazwy };
  });

  expect(wynik.nazwy.length, "there is no audio cache at all").toBeGreaterThan(0);
  expect(wynik.wPamieci, `the recording ${wynik.url} did not reach the cache ${wynik.nazwy}`).toBe(true);
});

test("a foreign origin is not intercepted", async ({ page }) => {
  await workerGotowy(page);
  const obce = await page.evaluate(async () => {
    const nazwy = await caches.keys();
    const wszystkie = [];
    for (const n of nazwy) {
      const c = await caches.open(n);
      for (const k of await c.keys()) {
        if (new URL(k.url).origin !== location.origin) wszystkie.push(k.url);
      }
    }
    return wszystkie;
  });
  expect(obce, `foreign addresses landed in the cache: ${obce.join(", ")}`).toEqual([]);
});
