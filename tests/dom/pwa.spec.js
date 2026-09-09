/* ============================================================
   Praca bez sieci.

   README obiecywał to od dawna; do tej pory obietnica kończyła się
   na pierwszym odświeżeniu. Te testy sprawdzają obietnicę, a nie
   obecność pliku sw.js.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Czeka, aż worker przejmie stronę. */
async function workerGotowy(page) {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await page.waitForFunction(
    () => navigator.serviceWorker && navigator.serviceWorker.controller !== undefined,
    null, { timeout: 10000 }
  );
  await page.evaluate(() => navigator.serviceWorker.ready);
}

test("manifest jest kompletny i wskazuje na istniejące ikony", async ({ page, request }) => {
  await page.goto("/index.html");
  const href = await page.locator('link[rel="manifest"]').getAttribute("href");
  expect(href).toBe("manifest.webmanifest");

  const res = await request.get("/manifest.webmanifest");
  expect(res.ok()).toBe(true);
  const m = await res.json();

  expect(m.name).toBeTruthy();
  expect(m.short_name.length, "short_name powinien się mieścić pod ikoną").toBeLessThanOrEqual(12);
  expect(m.display).toBe("standalone");
  expect(m.start_url).toBeTruthy();

  /* Instalacja wymaga ikony 192 i 512; maskable decyduje o tym, czy
     Android nie obetnie rogów własnym kształtem. */
  const rozmiary = m.icons.map(i => i.sizes);
  expect(rozmiary).toContain("192x192");
  expect(rozmiary).toContain("512x512");
  expect(m.icons.some(i => (i.purpose || "").includes("maskable"))).toBe(true);

  for (const ikona of m.icons) {
    const r = await request.get("/" + ikona.src);
    expect(r.ok(), `brakująca ikona: ${ikona.src}`).toBe(true);
    expect(r.headers()["content-type"]).toContain("image/png");
  }
});

test("worker rejestruje się i przejmuje stronę", async ({ page }) => {
  await workerGotowy(page);
  const stan = await page.evaluate(async () => {
    const reg = await navigator.serviceWorker.getRegistration();
    return { jest: !!reg, aktywny: !!(reg && reg.active) };
  });
  expect(stan.jest).toBe(true);
  expect(stan.aktywny).toBe(true);
});

test("po utracie sieci strona nadal się otwiera", async ({ page, context }) => {
  await workerGotowy(page);
  /* Pierwsze wejście napełnia pamięć; dopiero potem odcinamy sieć. */
  await page.reload();
  await page.waitForFunction(() => window.Core && window.Core.registry.levels.length > 0);

  await context.setOffline(true);
  await page.reload();

  await expect(page.locator("#main")).toBeVisible();
  await page.waitForFunction(() => window.Core && window.Views && window.Ex, null, { timeout: 10000 });
  const poziomy = await page.evaluate(() => window.Core.registry.levels.length);
  expect(poziomy, "spis poziomów przetrwał brak sieci").toBeGreaterThan(0);

  await context.setOffline(false);
});

/* Bez kroku budowania pliki nie mają skrótu w nazwie, więc jedyną wersją
   jest stała w sw.js, podnoszona ręcznie. Cache-first zamroziłby ucznia
   na starym kodzie po zapomnianym podniesieniu — nieodwracalnie z jego
   strony i niewidocznie z naszej. */
test("kod pobiera się z sieci, gdy sieć jest", async ({ page }) => {
  await workerGotowy(page);

  const zadania = [];
  page.on("request", r => { if (r.url().includes("/assets/js/core.js")) zadania.push(r.url()); });
  await page.reload();
  await page.waitForFunction(() => window.Core);

  expect(zadania.length, "core.js poszedł po sieć, a nie prosto z pamięci").toBeGreaterThan(0);
});

test("nagrania nie są pobierane po raz drugi", async ({ page }) => {
  await workerGotowy(page);

  const wynik = await page.evaluate(async () => {
    /* Bierzemy pierwszy skrót z indeksu: plik na pewno istnieje. */
    const hash = window.AUDIO_INDEX.slice(0, 16);
    const url = "audio/" + hash.slice(0, 2) + "/" + hash + ".mp3";
    await fetch(url);
    await new Promise(r => setTimeout(r, 300));
    const c = await caches.open("linguai-audio");
    const klucze = await c.keys();
    return { url: url, wPamieci: klucze.some(k => k.url.endsWith(url)) };
  });

  expect(wynik.wPamieci, `nagranie ${wynik.url} nie trafiło do pamięci`).toBe(true);
});

test("cudza domena nie jest przechwytywana", async ({ page }) => {
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
  expect(obce, `w pamięci wylądowały cudze adresy: ${obce.join(", ")}`).toEqual([]);
});
