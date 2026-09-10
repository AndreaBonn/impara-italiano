/* ============================================================
   Zapowiedź nowej wersji — dwa kolejne wydania, w prawdziwej przeglądarce.

   Testy jednostkowe (tests/unit/pwa.test.mjs) sprawdzają podpięcie reguł
   do stanów przez atrapę: kolejność zdarzeń jest tam TAKA, JAKĄ JĄ
   OPISALIŚMY. Tutaj kolejność ustala przeglądarka, a wydanie jest
   prawdziwym wydaniem — inne bajty sw.js pod tym samym adresem, czyli
   dokładnie to, co widzi uczeń po naszym wypchnięciu zmian.

   Serwer jest własny, na osobnym porcie: rejestracja workera jest
   przypisana do origin, więc test na porcie z playwright.config.js
   dzieliłby ją z resztą suity i „pierwsza wizyta" nie byłaby pierwsza.
   Wydanie podmienia funkcja z `scripts/serve.mjs`, żeby nie trzeba było
   psuć pliku w drzewie roboczym.
   ============================================================ */
const { test, expect } = require("@playwright/test");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");

const ROOT = join(__dirname, "..", "..");
const ZRODLO = readFileSync(join(ROOT, "sw.js"), "utf8");

const KOMUNIKAT = "#toastStack .toast--stuck";

/** Ta sama guska pod inną wersją: inne bajty i inna nazwa pamięci powłoki. */
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
 * Otwiera kurs i czeka, aż worker NAPRAWDĘ przejmie stronę.
 *
 * Karta, która wystartowała przed rejestracją, nie ma kontrolera aż do
 * odświeżenia — a bez kontrolera nie ma czego aktualizować i cały ten
 * plik sprawdzałby pierwszą wizytę pięć razy.
 */
async function podKontrola(page) {
  await page.goto(ADRES + "/index.html");
  await page.evaluate(() => navigator.serviceWorker.ready);
  if (!(await page.evaluate(() => !!navigator.serviceWorker.controller))) {
    await page.reload();
  }
  await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 15000 });
}

/** Nowe wydanie na serwerze plus odświeżenie: dokładnie to, co robi uczeń. */
async function nowaWersja(page, nazwa) {
  biezace = nazwa;
  await page.reload();
  await page.waitForFunction(() => !!navigator.serviceWorker.controller, null, { timeout: 15000 });
}

/** Czy powłoka nowego wydania jest już w pamięci — czyli czy worker aktywny. */
function pamiecPowloki(page, nazwa) {
  return page.waitForFunction(
    async (n) => (await caches.keys()).includes("linguai-shell-" + n),
    nazwa, { timeout: 20000 }
  );
}

test("pierwsza wizyta w czystej przeglądarce nie ogłasza niczego", async ({ browser }) => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  await podKontrola(page);
  /* Pierwszy worker też przechodzi przez „installed": gdyby zapowiedź nie
     pytała o kontrolera, komunikat wyszedłby właśnie tutaj. */
  await expect(page.locator(KOMUNIKAT)).toHaveCount(0);

  await ctx.close();
});

test("po wydaniu komunikat pojawia się sam, a „Zaktualizuj” przenosi na nową wersję", async ({ browser }) => {
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  await podKontrola(page);
  await nowaWersja(page, "v901.000000000000");

  const komunikat = page.locator(KOMUNIKAT);
  await expect(komunikat).toBeVisible({ timeout: 20000 });
  await expect(komunikat).toContainText("nowa wersja");

  /* Znacznik przeżywa wszystko poza przeładowaniem strony: po kliknięciu
     ma go nie być, i to jest jedyny dowód, że strona wróciła od zera. */
  await page.evaluate(() => { window.__znacznik = 1; });
  await komunikat.locator(".toast__act").click();

  await pamiecPowloki(page, "v901.000000000000");
  await page.waitForFunction(() => window.__znacznik === undefined, null, { timeout: 20000 });
  await expect(page.locator(KOMUNIKAT)).toHaveCount(0, { timeout: 15000 });

  await ctx.close();
});

test("„później” zostawia wersję w kolejce, a komunikat wraca przy otwarciu", async ({ browser }) => {
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
  expect(czeka, "wersja została w kolejce, nie została zastosowana").toBe(true);

  await page.reload();
  await expect(page.locator(KOMUNIKAT)).toBeVisible({ timeout: 20000 });

  await ctx.close();
});

test("dwie karty: przyjęcie w jednej wyrównuje drugą", async ({ browser }) => {
  const ctx = await browser.newContext();
  const pierwsza = await ctx.newPage();
  const druga = await ctx.newPage();

  await podKontrola(pierwsza);
  await podKontrola(druga);

  await nowaWersja(pierwsza, "v903.000000000000");
  await expect(pierwsza.locator(KOMUNIKAT)).toBeVisible({ timeout: 20000 });

  /* W drugiej karcie nikt nic nie klika. Ma się przeładować sama, bo od
     przejęcia kontroli jej żądania obsługuje już nowa wersja — a stary kod
     nad nowymi plikami jest dokładnie tym rozjazdem, przed którym broni
     cała ta funkcja. */
  await druga.evaluate(() => { window.__znacznik = 1; });
  await pierwsza.locator(KOMUNIKAT + " .toast__act").click();

  await druga.waitForFunction(() => window.__znacznik === undefined, null, { timeout: 25000 });
  await pamiecPowloki(druga, "v903.000000000000");

  await ctx.close();
});
