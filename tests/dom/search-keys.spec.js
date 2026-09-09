/* ============================================================
   Szukanie w kursie i pasek znaków.
   ============================================================ */
const { test, expect } = require("@playwright/test");

async function szukaj(page, q) {
  await page.goto("/index.html#/cerca" + (q ? "?q=" + encodeURIComponent(q) : ""));
  await page.waitForFunction(() => window.Search && window.Views.cerca);
  await page.waitForSelector("#searchQ");
}

test("wejście do wyszukiwarki jest w główce panelu", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.App);
  await page.locator("#railSearch").click();
  await expect(page).toHaveURL(/#\/cerca/);
  await expect(page.locator("#searchQ")).toBeFocused();
});

test("znajduje słowo w słownictwie i prowadzi do lekcji", async ({ page }) => {
  await szukaj(page, "caffè");
  await expect(page.locator(".js-hit").first()).toBeVisible();
  await page.locator(".js-hit").first().click();
  await expect(page).toHaveURL(/#\/(lezione|grammatica|conversazione)/);
});

test("akcenty nie są wymagane, ani po jednej, ani po drugiej stronie", async ({ page }) => {
  await szukaj(page, "caffe");
  const bez = await page.locator(".js-hit").count();
  await szukaj(page, "caffè");
  const z = await page.locator(".js-hit").count();
  expect(bez).toBeGreaterThan(0);
  expect(bez).toBe(z);
});

test("brak wyników mówi to wprost", async ({ page }) => {
  await szukaj(page, "xyzqwerty");
  await expect(page.locator(".empty")).toBeVisible();
});

/* Zapytanie ucznia trafia do wyniku jako podświetlenie. To jest dokładnie
   ten punkt, w którym reflected XSS wchodzi do dokumentu, jeśli podmienia
   się tekst w gotowym już HTML-u. */
test("zapytanie ze znacznikami nie staje się znacznikami", async ({ page }) => {
  const zlosliwe = '<img src=x onerror="window.__wstrzykniete=1">';
  await szukaj(page, zlosliwe);
  await page.waitForTimeout(200);

  const wstrzykniete = await page.evaluate(() => !!window.__wstrzykniete);
  expect(wstrzykniete, "kod z zapytania nie ma prawa się wykonać").toBe(false);

  const obcyObraz = await page.locator("#searchBody img").count();
  expect(obcyObraz, "zapytanie nie tworzy elementów").toBe(0);
});

test("podświetlenie zwraca tekst, nie znaczniki, także dla groźnej treści", async ({ page }) => {
  await szukaj(page, "a");
  const wynik = await page.evaluate(() =>
    window.Search.highlight('<b>ciao</b> & "cose"', "ciao"));
  expect(wynik).not.toContain("<b>");
  expect(wynik).toContain("&lt;b&gt;");
  expect(wynik).toContain("<mark>");
});

/* ---------------- Pasek znaków ---------------- */

test("pasek znaków pojawia się przy polu tekstowym i wstawia akcent", async ({ page }) => {
  await page.goto("/index.html#/cerca");
  await page.waitForSelector("#searchQ");
  await page.locator("#searchQ").click();

  const pasek = page.locator(".keybar");
  await expect(pasek).toBeVisible();

  await page.locator("#searchQ").fill("perch");
  await pasek.locator('[data-ch="é"]').click();
  await expect(page.locator("#searchQ")).toHaveValue("perché");
});

test("znak wchodzi w miejscu kursora, nie na końcu", async ({ page }) => {
  await page.goto("/index.html#/cerca");
  await page.waitForSelector("#searchQ");
  await page.locator("#searchQ").fill("cit");
  await page.evaluate(() => {
    const i = document.getElementById("searchQ");
    i.focus();
    i.selectionStart = i.selectionEnd = 1;      // kursor po „c"
  });
  await page.locator(".keybar").waitFor();
  await page.locator('.keybar [data-ch="à"]').click();
  await expect(page.locator("#searchQ")).toHaveValue("càit");
});

test("przyciski paska mają rozmiar celu dotykowego", async ({ page }) => {
  await page.goto("/index.html#/cerca");
  await page.waitForSelector("#searchQ");
  await page.locator("#searchQ").click();
  await page.locator(".keybar").waitFor();

  const male = await page.evaluate(() => {
    const zle = [];
    document.querySelectorAll(".keybar__k").forEach(b => {
      const r = b.getBoundingClientRect();
      if (r.width < 44 || r.height < 44) zle.push(b.textContent + " " + Math.round(r.width) + "x" + Math.round(r.height));
    });
    return zle;
  });
  expect(male, `za małe przyciski: ${male.join(", ")}`).toEqual([]);
});

test("cyfra wybiera odpowiedź tylko poza polem tekstowym", async ({ page }) => {
  await page.goto("/index.html#/allenamento");
  await page.waitForSelector(".js-topic");
  await page.locator('.js-topic[data-topic="ausiliare"]').click();
  await expect(page.locator(".exq")).toBeVisible();

  const maOpcje = await page.locator(".exq .opts .opt").count();
  test.skip(maOpcje === 0, "to podejście wylosowało zadanie bez opcji");

  await page.locator("body").press("1");
  await expect(page.locator(".exq .opts .opt").first()).toHaveClass(/is-sel/);
});
