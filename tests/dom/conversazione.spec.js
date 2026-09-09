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

/* Dialog czeka na KONIEC nagrania, zanim pokaże następną turę, a nagrań w tych
   rozmowach jest kilkanaście po dwie-trzy sekundy. Domyślne trzydzieści sekund
   na test wystarczało tylko dopóki nagrań nie było i silnik schodził na
   syntezę systemową, która w headless kończy się natychmiast: te testy były
   szybkie przez PRZYPADEK, a nie z projektu. Odtwarzanie zostaje prawdziwe,
   bo to ono odpalało `step()` dalej; rośnie limit. */
test.describe.configure({ timeout: 120000 });

/** Czeka, aż silnik poprosi o replikę ucznia (pole tekstowe albo wybór). */
async function czekajNaTure(page) {
  await page.waitForSelector(".js-in, .dlg-opts", { timeout: 30000 });
}

async function otworz(page, id) {
  await page.goto(`/index.html#/conversazione?id=${id}`);
  await czekajNaTure(page);
}

test.describe("rozmowy", () => {
  /* Poprawne repliki z `data/core/conversations.js` (bar-mattina). Treść MA
     teraz znaczenie: od kiedy zła odpowiedź zatrzymuje scenę, dowolne słowo
     wpisane w pole nie przesuwa dialogu ani o jedną turę. */
  const BAR = [
    "buongiorno, un caffè e un cornetto per favore",
    "vuoto grazie",
    "posso pagare con la carta",
    "grazie buona giornata"
  ];

  test("dialog liniowy idzie po kolei i kończy się podsumowaniem", async ({ page }) => {
    await otworz(page, "bar-mattina");
    for (const replika of BAR) {
      await czekajNaTure(page);
      await expect(page.locator(".dlg-opts")).toHaveCount(0);
      await page.fill(".js-in", replika);
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

  /* ─────────────────────────────────────────────────────────────
     Brak rozpoznawania mowy w przeglądarce.

     Zgłoszone z ekranu: „nie widzę, jak mówić". Scena bez mikrofonu
     wygląda dokładnie jak scena z usterką, bo nic w niej nie mówi,
     że mikrofonu nie ma z powodu przeglądarki. Nota z listy rozmów
     tego nie ratuje: uczeń czyta ją raz, a pyta trzy sceny później.

     Obie strony są sprawdzane, bo test na samą NIEOBECNOŚĆ noty
     przechodziłby także wtedy, gdyby widok przestał ją rysować w ogóle.
     ───────────────────────────────────────────────────────────── */
  async function otworzZeStt(page, wspierane) {
    await page.goto("/index.html#/");
    await page.waitForFunction(() => window.Audio2 && window.App);
    await page.evaluate(w => { window.Audio2.sttSupported = w; }, wspierane);
    await page.evaluate(() => App.go("conversazione", { id: "bar-mattina" }));
    await czekajNaTure(page);
  }

  test("z rozpoznawaniem mowy scena daje mikrofon, a pole jest alternatywą", async ({ page }) => {
    await otworzZeStt(page, true);
    await expect(page.locator(".js-turn .js-mic")).toBeVisible();
    await expect(page.locator(".js-turn .callout")).toHaveCount(0);
    /* Wielokropek w podpowiedzi pola znaczy „albo": ma sens tylko wtedy,
       gdy nad polem stoi to drugie „albo". */
    expect(await page.getAttribute(".js-in", "placeholder")).toMatch(/^…/);
  });

  test("bez rozpoznawania mowy scena tłumaczy brak mikrofonu, raz na przejście", async ({ page }) => {
    await otworzZeStt(page, false);
    await expect(page.locator(".js-turn .js-mic")).toHaveCount(0);
    await expect(page.locator(".js-turn .callout")).toBeVisible();
    expect(await page.getAttribute(".js-in", "placeholder")).not.toMatch(/^…/);

    await page.fill(".js-in", BAR[0]);
    await page.click(".js-send");
    await czekajNaTure(page);
    /* Powtarzana pod każdą repliką nota przestaje być informacją. */
    await expect(page.locator(".js-turn .callout")).toHaveCount(0);
    await expect(page.locator(".js-in")).toBeVisible();
  });

  /* ─────────────────────────────────────────────────────────────
     Zła odpowiedź zatrzymuje scenę.

     Przedtem rozmowa szła dalej, a w dymku stawał wzór zamiast tego, co
     uczeń powiedział: z ekranu wyglądało to jak zaliczone. Zgłoszone z
     ekranu: „nawet jak odpowiem źle, idzie dalej jakby nigdy nic".
     ───────────────────────────────────────────────────────────── */
  test("zła odpowiedź nie przesuwa dialogu i mówi o tym wprost", async ({ page }) => {
    await otworz(page, "bar-mattina");
    const bable = await page.locator(".dlg__line").count();

    await page.fill(".js-in", "spaghetti alle vongole");
    await page.click(".js-send");

    await expect(page.locator(".js-fb.is-on")).toBeVisible();
    await expect(page.locator(".js-fb")).toHaveClass(/fb--ko/);
    /* Ani jednego nowego dymka: scena stoi tam, gdzie stała. */
    expect(await page.locator(".dlg__line").count()).toBe(bable);
    await expect(page.locator(".js-in")).toBeVisible();
    /* Wpisane słowa zostają — poprawianie własnej odpowiedzi jest sensem
       zatrzymania, a czyszczenie pola kazałoby pisać od nowa. */
    expect(await page.inputValue(".js-in")).toBe("spaghetti alle vongole");

    /* Ta sama tura przyjmuje poprawną replikę: blokada jest na odpowiedzi,
       nie na scenie. */
    await page.fill(".js-in", BAR[0]);
    await page.click(".js-send");
    await czekajNaTure(page);
    expect(await page.locator(".dlg__line").count()).toBeGreaterThan(bable);
  });

  test("„Pokaż odpowiedź\" jest wyjściem z tury: wzór wchodzi do transkryptu", async ({ page }) => {
    await otworz(page, "bar-mattina");
    await page.fill(".js-in", "qualcosa a caso");
    await page.click(".js-send");
    await expect(page.locator(".js-fb.is-on")).toBeVisible();

    await page.click(".js-skip");
    await czekajNaTure(page);
    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("un caffè e un cornetto"))).toBe(true);
    /* Rezygnacja nie daje punktu: po czterech takich wynik jest zerowy. */
    for (let n = 0; n < 3; n++) {
      await czekajNaTure(page);
      await page.click(".js-skip");
    }
    await expect(page.locator(".summary__score")).toHaveText("0/4", { timeout: 30000 });
  });

  test("podpowiedź jest w języku ucznia, włoski wzór dopiero po rezygnacji", async ({ page }) => {
    await otworz(page, "presentarsi");
    await czekajNaTure(page);
    /* Włoskie zdanie w podpowiedzi robiło z rozmowy przepisywanie. */
    const podp = await page.locator(".voice-pl").first().innerText();
    expect(podp).toContain("Jasne, proszę!");
    expect(podp).not.toContain("Certo, prego");

    await page.click(".js-skip");
    await czekajNaTure(page);
    const linie = await page.locator(".dlg__it").allTextContents();
    expect(linie.some(x => x.includes("Certo, prego"))).toBe(true);
  });
});
