/* ============================================================
   Symulacja egzaminu w przeglądarce.

   Silnik liczy poprawnie (tests/unit/cils.test.mjs). Tutaj sprawdzamy
   rzeczy, których w silniku nie ma: że sekcja zamknięta zostaje
   zamknięta, że zdanie o granicy symulatora pada PRZED startem, i że
   podsumowanie nie obiecuje wyniku egzaminu.

   Zegara nie odmierzamy naprawdę: sekcja trwa trzydzieści minut, a test,
   który je odczekuje, jest testem o cierpliwości. Podmieniamy czasy w
   danych zaraz po wczytaniu strony, przed wejściem w symulację.
   ============================================================ */
const { test, expect } = require("@playwright/test");

test.describe.configure({ timeout: 60000 });

/** Wchodzi w symulację ze skróconymi czasami sekcji. */
async function otworz(page, sekundy) {
  await page.goto("/index.html#/esame");
  await page.waitForSelector(".js-start");
  if (sekundy) {
    await page.evaluate(s => {
      window.CILS.forEach(sim => sim.sezioni.forEach(sez => { sez.minuti = s / 60; }));
    }, sekundy);
  }
  await page.locator(".js-start").first().click();
  await page.waitForSelector(".cils-clock");
}

test.describe("simulazione d'esame", () => {
  test("il limite del simulatore è detto prima di cominciare", async ({ page }) => {
    await page.goto("/index.html#/esame");
    await page.waitForSelector(".js-start");
    const avviso = await page.locator(".callout--trap").first().textContent();
    /* Non è una frase decorativa: dice che due abilità su quattro non
       vengono contate, e deve stare sopra il pulsante di avvio. */
    expect(avviso.length).toBeGreaterThan(80);
    const yAvviso = (await page.locator(".callout--trap").first().boundingBox()).y;
    const yStart = (await page.locator(".js-start").first().boundingBox()).y;
    expect(yAvviso).toBeLessThan(yStart);
  });

  test("le quattro sezioni si susseguono e non si torna indietro", async ({ page }) => {
    await otworz(page);
    const visti = [];
    for (let i = 0; i < 4; i++) {
      visti.push(await page.textContent(".cils-step"));
      if (await page.locator(".js-text").count()) await page.fill(".js-text", "prova");
      await page.click(".js-next");
      await page.waitForTimeout(250);
    }
    expect(visti.length).toBe(4);
    /* Arrivati al riepilogo non c'è alcun controllo che riapra una sezione. */
    await expect(page.locator(".cils-tab")).toBeVisible();
    await expect(page.locator(".cils-clock")).toHaveCount(0);
  });

  test("il tempo scaduto chiude la sezione e conta quello che c'era", async ({ page }) => {
    await otworz(page, 3);
    await page.locator('.cils-items input[type="radio"]').first().check();
    await page.waitForSelector(".js-expired:not([hidden])", { timeout: 20000 });
    /* Dopo la scadenza gli input sono disattivati: nessuna risposta in più. */
    const disabilitati = await page.evaluate(() =>
      [...document.querySelectorAll('.js-body input')].every(i => i.disabled));
    expect(disabilitati).toBe(true);
  });

  test("il riepilogo non promette un esito d'esame", async ({ page }) => {
    await otworz(page);
    for (let i = 0; i < 4; i++) {
      if (await page.locator(".js-text").count()) await page.fill(".js-text", "prova");
      await page.click(".js-next");
      await page.waitForTimeout(250);
    }
    const righe = await page.locator(".cils-tab tr").allTextContents();
    expect(righe.length).toBe(4);
    /* Scritta e orale compaiono, ma senza punteggio. */
    expect(righe[2] + righe[3]).not.toMatch(/\d+\s*\/\s*12/);
    /* La provenienza della soglia sta nella stessa schermata del verdetto. */
    await expect(page.locator(".cils-src")).toBeVisible();
  });

  test("un testo d'ascolto si può sentire due volte, non tre", async ({ page }) => {
    await otworz(page);
    const b = page.locator(".js-play").first();
    await b.click();
    await page.waitForTimeout(150);
    await b.click();
    await page.waitForTimeout(150);
    await expect(b).toBeDisabled();
  });

  test("uscire dalla rotta ferma il conto alla rovescia", async ({ page }) => {
    /* Il timer viveva oltre la vista: mezz'ora dopo il callback chiudeva
       una sezione sullo schermo di qualcun altro. Contiamo gli intervalli
       aperti, non il comportamento visibile: il difetto non si vedeva. */
    await page.addInitScript(() => {
      window.__vivi = 0;
      const si = window.setInterval, ci = window.clearInterval;
      window.setInterval = function (...a) { window.__vivi++; return si.apply(window, a); };
      window.clearInterval = function (id) { if (id != null) window.__vivi--; return ci.call(window, id); };
    });
    await otworz(page);
    expect(await page.evaluate(() => window.__vivi)).toBe(1);
    await page.evaluate(() => window.App.go("lettura"));
    await page.waitForTimeout(400);
    expect(await page.evaluate(() => window.__vivi)).toBe(0);
  });

  test("un doppio clic non salta la sezione successiva", async ({ page }) => {
    await otworz(page);
    const b = page.locator(".js-next");
    await b.dblclick();
    await page.waitForTimeout(400);
    /* Dopo un doppio clic siamo nella sezione 2, non nella 3. */
    expect(await page.textContent(".cils-step")).toMatch(/2/);
  });

  test("l'orologio non parla a ogni secondo", async ({ page }) => {
    await otworz(page);
    /* La cifra che cambia ogni secondo è nascosta agli screen reader; la
       regione live resta vuota finché non si arriva a un avviso. */
    await expect(page.locator(".cils-clock")).toHaveAttribute("aria-hidden", "true");
    await page.waitForTimeout(2200);
    expect((await page.textContent(".js-clock-live")).trim()).toBe("");
  });
});
