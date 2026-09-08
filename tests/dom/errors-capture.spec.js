/* ============================================================
   Przechwytywanie złych odpowiedzi w prawdziwej lekcji.

   Testy jednostkowe wołają Errors.record wprost. Tutaj chodzi o to,
   czego one nie sprawdzą: czy owinięcie Ex.build naprawdę łapie
   odpowiedź w przepływie lekcji i czy przy okazji nie zmienia
   licznika postępu, który stoi na tym samym onDone.
   ============================================================ */
const { test, expect } = require("@playwright/test");

/** Przechodzi do lekcji A1 i czeka, aż ćwiczenia będą podpięte. */
async function otworzLekcje(page, id) {
  await page.goto("/index.html#/lezione?id=" + id);
  await page.waitForFunction(() => window.Core && window.Errors && window.Ex);
  await page.waitForSelector(".exq .js-check, .exq .match-btn");
}

test("owinięcie jest założone dokładnie raz", async ({ page }) => {
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Ex && window.Errors);
  const stan = await page.evaluate(() => ({
    zalozone: window.Ex.recordsErrors === true,
    drugie: window.Errors.install(window.Ex)      // druga próba ma nic nie zrobić
  }));
  expect(stan.zalozone).toBe(true);
  expect(stan.drugie, "install nie owija po raz drugi").toBe(false);
});

test("zła odpowiedź w lekcji zakłada kartę z tagiem tej lekcji", async ({ page }) => {
  await otworzLekcje(page, "a1-u01-l2");

  const wynik = await page.evaluate(async () => {
    const L = window.Core.getLesson("a1-u01-l2").lesson;
    const idx = L.exercises.findIndex(e => e.t === "fill");
    const root = document.querySelectorAll(".exq")[idx];
    root.querySelector(".js-in").value = "na pewno zła odpowiedź";
    root.querySelector(".js-check").click();
    root.querySelector(".js-check").click();     // „prawie" na pierwszej próbie bywa
    await new Promise(r => setTimeout(r, 250));

    const karty = Object.values(window.Core.state.errors);
    return { ile: karty.length, karta: karty[0] || null, tagiLekcji: L.tags };
  });

  expect(wynik.ile, "powstała dokładnie jedna karta").toBe(1);
  expect(wynik.karta.kind).toBe("authored");
  expect(wynik.karta.srcId).toBe("a1-u01-l2");
  expect(wynik.tagiLekcji).toContain(wynik.karta.tag);
});

test("dobra odpowiedź nie zakłada karty", async ({ page }) => {
  await otworzLekcje(page, "a1-u01-l1");

  const ile = await page.evaluate(async () => {
    const L = window.Core.getLesson("a1-u01-l1").lesson;
    const idx = L.exercises.findIndex(e => e.t === "fill");
    const root = document.querySelectorAll(".exq")[idx];
    root.querySelector(".js-in").value = L.exercises[idx].a[0];
    root.querySelector(".js-check").click();
    await new Promise(r => setTimeout(r, 250));
    return Object.keys(window.Core.state.errors).length;
  });

  expect(ile).toBe(0);
});

/* Licznik postępu lekcji stoi na tym samym onDone, które owijamy.
   Gdyby owinięcie zawołało je drugi raz, postęp rósłby dwa razy
   szybciej i nic by się nie zepsuło w widoczny sposób. */
test("licznik odpowiedzi rośnie o tyle, ile odpowiedzi", async ({ page }) => {
  /* Bez tego ćwiczenie „speak" żąda nagrania i nie kończy się samym
     kliknięciem: w headless Chromium webkitSpeechRecognition ISTNIEJE.
     Zdejmujemy je przed wczytaniem strony, czyli odtwarzamy przeglądarkę
     bez rozpoznawania mowy — przypadek, który aplikacja i tak obsługuje. */
  await page.addInitScript(() => {
    delete window.SpeechRecognition;
    delete window.webkitSpeechRecognition;
  });
  await otworzLekcje(page, "a1-u01-l1");

  const wynik = await page.evaluate(async () => {
    const przed = window.Core.state.stats.correct + window.Core.state.stats.wrong;
    const wszystkie = document.querySelectorAll(".exq");
    let kliknięte = 0;
    for (const root of wszystkie) {
      const btn = root.querySelector(".js-check");
      if (!btn || btn.disabled) continue;
      const inp = root.querySelector(".js-in, .js-gap");
      if (inp) inp.value = "qualcosa";
      const radio = root.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;
      const tok = root.querySelector(".js-bank .tok");
      if (tok) tok.click();
      btn.click();
      kliknięte++;
    }
    await new Promise(r => setTimeout(r, 400));
    const po = window.Core.state.stats.correct + window.Core.state.stats.wrong;
    return { kliknięte, wzrost: po - przed };
  });

  expect(wynik.kliknięte, "coś zostało rozwiązane").toBeGreaterThan(3);
  expect(wynik.wzrost, "jedna odpowiedź to jeden wpis w statystykach").toBe(wynik.kliknięte);
});
