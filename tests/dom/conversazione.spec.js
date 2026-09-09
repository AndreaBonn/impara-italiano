/* ============================================================
   Rozmowy: liniowa i rozgałęziona, tym samym silnikiem.

   Rozwidlenia zostały DOŁOŻONE do silnika, który przez dziesięć dialogów
   umiał tylko iść po kolei. Dlatego pierwszy test nie dotyczy nowej
   funkcji: sprawdza, że stara droga jest nietknięta. Gdyby `go` albo
   `opts` przeciekły do dialogu bez tych pól, objawiłoby się to rozmową
   uciętą w środku — a taka wygląda na skończoną i nikt by nie zgłosił.

   Drugi test pilnuje tego, po co rozwidlenia w ogóle są: konsekwencji.
   Odmowa deseru ma być widoczna na rachunku kilka tur PÓŹNIEJ, a nie
   tylko w następnej replice kelnera.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Czeka, aż silnik poprosi o replikę ucznia (pole tekstowe albo wybór). */
async function czekajNaTure(page) {
  await page.waitForSelector(".js-in, .dlg-opts", { timeout: 30000 });
}

async function otworz(page, id) {
  await page.goto(`/index.html#/conversazione?id=${id}`);
  await czekajNaTure(page);
}

test.describe("rozmowy", () => {
  test("dialog liniowy idzie po kolei i kończy się podsumowaniem", async ({ page }) => {
    await otworz(page, "bar-mattina");
    /* Cztery repliki ucznia; treść nie ma znaczenia, bo sprawdzamy przebieg,
       a nie ocenę. Pusta odpowiedź jest odrzucana, więc coś wpisać trzeba. */
    for (let i = 0; i < 4; i++) {
      await czekajNaTure(page);
      await expect(page.locator(".dlg-opts")).toHaveCount(0);
      await page.fill(".js-in", "buongiorno");
      await page.click(".js-send");
    }
    await expect(page.locator(".summary__score")).toBeVisible({ timeout: 30000 });
    /* Bez rozwidleń nie ma dokąd wracać: przycisk gałęzi się nie pokazuje. */
    await expect(page.locator(".js-branch")).toHaveCount(0);
  });

  test("wybór zmienia rachunek kilka tur później", async ({ page }) => {
    await otworz(page, "ristorante-scelte");

    await page.waitForSelector(".dlg-opts");
    await page.locator(".js-opt").nth(1).click();   // bez rezerwacji
    await page.waitForSelector(".js-in");
    await page.fill(".js-in", "una bottiglia d'acqua naturale");
    await page.click(".js-send");
    await page.waitForSelector(".dlg-opts");
    await page.locator(".js-opt").nth(1).click();   // danie wegetariańskie
    await page.waitForSelector(".dlg-opts");
    await page.locator(".js-opt").nth(1).click();   // bez deseru
    await page.waitForSelector(".js-in");

    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("basilico"))).toBe(true);
    expect(linie.some(x => x.includes("acqua e caffè"))).toBe(true);
    /* Deser pada wcześniej w PYTANIU kelnera, więc samo słowo nic nie mówi.
       Sprawdzamy pozycję na rachunku, bo to ona zależy od wyboru. */
    expect(linie.some(x => x.includes("acqua e tiramisù"))).toBe(false);
  });

  test("powrót do wyboru pokazuje drugą gałąź bez powtarzania dialogu", async ({ page }) => {
    await otworz(page, "ristorante-scelte");
    for (const n of [0, null, 0, 1]) {
      if (n === null) {
        await page.waitForSelector(".js-in");
        await page.fill(".js-in", "acqua naturale grazie");
        await page.click(".js-send");
        continue;
      }
      await page.waitForSelector(".dlg-opts");
      await page.locator(".js-opt").nth(n).click();
    }
    await page.waitForSelector(".js-in");
    await page.fill(".js-in", "posso pagare con la carta");
    await page.click(".js-send");

    const gal = page.locator(".js-branch");
    await expect(gal).toBeVisible({ timeout: 30000 });
    const przed = await page.locator(".dlg__line").count();
    await gal.click();

    /* Wracamy NA rozwidlenie, nie na początek: transkrypt się skraca,
       ale nie znika. */
    await page.waitForSelector(".dlg-opts");
    const po = await page.locator(".dlg__line").count();
    expect(po).toBeLessThan(przed);
    expect(po).toBeGreaterThan(0);

    await page.locator(".js-opt").nth(0).click();   // tym razem z deserem
    await page.waitForSelector(".js-in");
    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("acqua e tiramisù"))).toBe(true);
  });

  test("obie repliki są widoczne przy wyborze, razem z tłumaczeniem", async ({ page }) => {
    await otworz(page, "ristorante-scelte");
    await page.waitForSelector(".dlg-opts");
    /* Wybór ma być wyborem, a nie zgadywanką: uczeń widzi obie możliwości
       po włosku i po swojemu, zanim zdecyduje. */
    await expect(page.locator(".js-opt")).toHaveCount(2);
    for (const n of [0, 1]) {
      await expect(page.locator(".js-opt").nth(n).locator("i")).not.toBeEmpty();
      await expect(page.locator(".js-opt").nth(n).locator("span")).not.toBeEmpty();
    }
    /* Mikrofon albo pole tekstowe zostaje: kliknięcie jest skrótem. */
    await expect(page.locator(".js-in")).toBeVisible();
  });
});
