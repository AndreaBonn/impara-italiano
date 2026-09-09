/* ============================================================
   Przypomnienie o kopii zapasowej w prawdziwej przeglądarce.

   Testy jednostkowe mówią, KIEDY próg zostaje przekroczony. Tutaj
   chodzi o to, czego one nie widzą: czy komunikat naprawdę stoi na
   ekranie, czy przycisk naprawdę pobiera plik i czy po pobraniu
   licznik naprawdę rusza od zera. Przypomnienie, którego przycisk
   nic nie robi, przechodzi każdy test logiki i nie ratuje nikomu
   postępów.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const PROG = 10;

/** Zdaje PROG różnych lekcji tak, jak robi to koniec lekcji w widoku. */
async function zdajProgLekcji(page) {
  await page.evaluate((ile) => {
    for (let i = 0; i < ile; i++) window.Core.recordLesson("test-l" + i, 10, 10, 60);
  }, PROG);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.I18n);
});

test("po dziesiątej ukończonej lekcji komunikat stoi na ekranie", async ({ page }) => {
  await expect(page.locator(".toast--stuck"), "przed progiem nic nie wisi").toHaveCount(0);

  await zdajProgLekcji(page);

  const stuck = page.locator(".toast--stuck");
  await expect(stuck).toBeVisible();
  await expect(stuck).toHaveAttribute("role", "alert");

  const tekst = await stuck.innerText();
  expect(tekst, "napis, nie sam klucz i18n").not.toContain("core.backupDue");
  expect(tekst, "liczba lekcji dociera do napisu").toContain(String(PROG));
});

test("przycisk w komunikacie pobiera plik i przesuwa próg", async ({ page }) => {
  await zdajProgLekcji(page);

  const przycisk = page.locator(".toast__act");
  await expect(przycisk).toBeVisible();

  /* Cel dotykowy, nie ikonka: przy btn--sm wychodziło 36 px. */
  const pole = await przycisk.boundingBox();
  expect(pole.height, "cel dotykowy na telefonie").toBeGreaterThanOrEqual(44);

  /* Przycisk stał w linii tekstu i wchodził na ostatni wiersz komunikatu:
     kontrast i cel dotykowy były w porządku, a napisu nie dało się
     doczytać. Mierzone zakresem na węźle tekstowym, bo tekst jest
     bezpośrednim dzieckiem komunikatu i nie ma własnego prostokąta. */
  const nachodzi = await page.evaluate(() => {
    const box = document.querySelector(".toast--stuck");
    const zakres = document.createRange();
    zakres.selectNode(box.firstChild);
    return zakres.getBoundingClientRect().bottom >
      document.querySelector(".toast__act").getBoundingClientRect().top;
  });
  expect(nachodzi, "przycisk nie zasłania ostatniego wiersza").toBe(false);

  const [plik] = await Promise.all([
    page.waitForEvent("download"),
    przycisk.click()
  ]);
  expect(plik.suggestedFilename()).toMatch(/^impara-italiano-.+\.json$/);

  await expect(page.locator(".toast--stuck"), "komunikat znika po akcji").toHaveCount(0);
  expect(await page.evaluate(() => window.Core.backupDue()), "próg policzony od nowa").toBe(false);
});

test("zamknięty komunikat nie wraca po kolejnej lekcji tej samej sesji", async ({ page }) => {
  await zdajProgLekcji(page);
  await page.locator(".toast--stuck .toast__x").click();
  await expect(page.locator(".toast--stuck")).toHaveCount(0);

  await page.evaluate(() => window.Core.recordLesson("test-l99", 10, 10, 60));
  await expect(page.locator(".toast--stuck"), "bez nagabywania po każdej lekcji").toHaveCount(0);

  /* Para do powyższego: gdyby przypomnienie po zamknięciu nie wracało
     NIGDY, tamta asercja też byłaby zielona i nie znaczyłaby nic. */
  await page.evaluate((ile) => {
    for (let i = 0; i < ile; i++) window.Core.recordLesson("test-p" + i, 10, 10, 60);
  }, PROG);
  await expect(page.locator(".toast--stuck"), "wraca po kolejnych dziesięciu").toBeVisible();
});

test("na 375 px komunikat mieści się w oknie", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 720 });
  await zdajProgLekcji(page);
  await expect(page.locator(".toast--stuck")).toBeVisible();

  const przelewa = await page.evaluate(() =>
    document.documentElement.scrollWidth > document.documentElement.clientWidth);
  expect(przelewa, "brak poziomego przewijania strony").toBe(false);

  const pole = await page.locator(".toast--stuck").boundingBox();
  expect(pole.x, "lewa krawędź w oknie").toBeGreaterThanOrEqual(0);
  expect(pole.x + pole.width, "prawa krawędź w oknie").toBeLessThanOrEqual(375);
});
