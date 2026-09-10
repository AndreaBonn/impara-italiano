/* ============================================================
   Kontrast liczony przez przeglądarkę.

   Paleta projektu jest w OKLCH. Zewnętrzne narzędzia czytają
   `oklch(0.31 0.035 350)` jako trójkę RGB i wypisują kanał „350",
   więc ich wynik jest artefaktem parsera, nie pomiarem — jest to
   już odnotowane w docs/REPORT_ATTIVITA.md.

   Tutaj konwersję robi silnik przeglądarki: kolor idzie na canvas
   1×1 i wraca jako sRGB. To działa na dowolnej przestrzeni barw,
   którą CSS rozumie, więc nie zestarzeje się przy następnej.

   Progi WCAG 2.2 AA: tekst 4.5, tekst duży 3, elementy UI 3.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const TEKST = 4.5;
const UI = 3;

/** Wstrzykuje mierniki i zwraca funkcję do wołania w kontekście strony. */
const MIERNIK = () => {
  const cv = document.createElement("canvas");
  cv.width = cv.height = 1;
  const ctx = cv.getContext("2d", { willReadFrequently: true });

  /* Kolor na tle: półprzezroczystość liczy się względem tego, co pod spodem. */
  function srgb(color, under) {
    ctx.clearRect(0, 0, 1, 1);
    if (under) { ctx.fillStyle = under; ctx.fillRect(0, 0, 1, 1); }
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, 1, 1);
    const d = ctx.getImageData(0, 0, 1, 1).data;
    return [d[0], d[1], d[2]];
  }
  function lum(c) {
    const s = c.map(v => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * s[0] + 0.7152 * s[1] + 0.0722 * s[2];
  }
  function ratio(a, b) {
    const L1 = lum(a), L2 = lum(b);
    return (Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05);
  }
  /** Tło elementu z uwzględnieniem przezroczystych przodków. */
  function tlo(el) {
    let n = el, stos = [];
    while (n && n !== document.documentElement) {
      const bg = getComputedStyle(n).backgroundColor;
      stos.push(bg);
      if (bg && !/rgba\(0, 0, 0, 0\)|transparent/.test(bg)) break;
      n = n.parentElement;
    }
    const strona = getComputedStyle(document.body).backgroundColor;
    return stos.reverse().reduce((pod, c) => `rgb(${srgb(c, pod).join(",")})`, strona);
  }
  /* `tloJawne` dla elementów leżących na gradiencie: `tlo()` idzie po
     `backgroundColor` przodków i gradientu nie widzi, więc bez tego liczyłoby
     napis wobec tła strony, czyli wobec czegoś, czego tam nie ma. */
  window.__kontrast = (sel, tloJawne) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const pod = tloJawne || tlo(el);
    /* Kontrolka wypełniona odróżnia się tłem, nie krawędzią: WCAG 1.4.11
       pyta, czy WIDAĆ, że to kontrolka, a nie którym pikselem to widać. */
    const podSpodem = el.parentElement ? tlo(el.parentElement) : pod;
    return {
      tekst: ratio(srgb(cs.color, pod), srgb(pod)),
      obramowanie: ratio(srgb(cs.borderTopColor, pod), srgb(pod)),
      wypelnienie: ratio(srgb(cs.backgroundColor, podSpodem), srgb(podSpodem)),
      wielkosc: parseFloat(cs.fontSize),
      waga: cs.fontWeight
    };
  };
};

async function przygotuj(page, theme) {
  await page.addInitScript(MIERNIK);
  await page.goto("/index.html");
  await page.waitForFunction(() => window.Core && window.Errors && window.Train);
  await page.waitForFunction(() => window.Core.getLesson("a1-u01-l2"));
  await page.evaluate(t => {
    document.documentElement.setAttribute("data-theme", t);
    const L = window.Core.getLesson("a1-u01-l2").lesson;
    [1, 2].forEach(i => {
      const k = window.Errors.record(L, i, false).key;
      window.Core.state.errors[k].due = Date.now() - 1000;
    });
    window.App.go("ripasso", { tab: "errori" });
  }, theme);
  await page.waitForSelector(".js-start");
}

for (const theme of ["light", "dark"]) {
  test(`zakładki powtórek: kontrast w motywie ${theme}`, async ({ page }) => {
    await przygotuj(page, theme);

    const cele = [
      { sel: '.tab[aria-current="true"]', prog: TEKST, opis: "zakładka aktywna" },
      { sel: ".tab:not([aria-current])", prog: TEKST, opis: "zakładka nieaktywna" },
      { sel: ".tab__n", prog: TEKST, opis: "licznik na zakładce" },
      { sel: ".js-start", prog: TEKST, opis: "przycisk rozpoczęcia" },
      { sel: ".list-row b", prog: TEKST, opis: "nazwa zagadnienia" },
      { sel: ".list-row .chip", prog: TEKST, opis: "znacznik terminu" }
    ];

    for (const c of cele) {
      const m = await page.evaluate(s => window.__kontrast(s), c.sel);
      expect(m, `${c.opis} (${c.sel}) nie istnieje na stronie`).not.toBeNull();
      /* Tekst duży (>=24px, albo >=18.66px i bold) ma niższy próg. */
      const duzy = m.wielkosc >= 24 || (m.wielkosc >= 18.66 && Number(m.waga) >= 700);
      const prog = duzy ? UI : c.prog;
      expect(m.tekst, `${c.opis}: ${m.tekst.toFixed(2)}:1, próg ${prog}`).toBeGreaterThanOrEqual(prog);
    }
  });

  test(`zakładki powtórek: obramowanie odróżnialne w motywie ${theme}`, async ({ page }) => {
    await przygotuj(page, theme);
    /* Granica kontrolki to element UI: próg 3:1, nie 4.5:1. */
    for (const sel of ['.tab[aria-current="true"]', ".tab:not([aria-current])"]) {
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m.obramowanie, `${sel}: ${m.obramowanie.toFixed(2)}:1`).toBeGreaterThanOrEqual(UI);
    }
  });
}

/* ============================================================
   Kontrast POD KURSOREM, nie tylko w spoczynku.

   Defekt, który to złapało: w ciemnym motywie napis na przycisku jest
   ciemny, a `:hover` przyciemniał tło — oba kolory zbiegały się do
   3,36:1 przy progu 4,5. W jasnym motywie ta sama reguła jest poprawna,
   bo tam napis jest jasny. Stan spoczynku przechodził w obu.

   Dwie rzeczy, których nie widać, dopóki się nie potkniesz: paleta ma
   przejście, więc pomiar zaraz po przełączeniu motywu zwraca kolor
   pośredni; i sam klik Playwrighta zostawia kursor NA przycisku, więc
   „stan spoczynku" zmierzony po kliknięciu jest w rzeczywistości hover.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`przyciski akcji: kontrast pod kursorem w motywie ${theme}`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* przejście palety */

    for (const [sel, opis] of [[".js-reveal", "przycisk podstawowy"],
                               [".js-play.btn--green", "przycisk zielony"]]) {
      await page.hover(sel);
      await page.waitForTimeout(400);
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m, `${opis} (${sel}) nie istnieje`).not.toBeNull();
      expect(m.tekst, `${opis} pod kursorem: ${m.tekst.toFixed(2)}:1, próg ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
      await page.mouse.move(0, 0);
    }
  });
}

/* ============================================================
   Nazwa języka na przełączniku: dwa tła, nie jedno.

   Przycisk zamknięty leży na gradiencie panelu (napis jasny), a otwarty
   dostaje własne tło z papieru (napis ciemny) — czyli para kolorów zmienia
   się w środku interakcji i stan spoczynku o drugim nic nie mówi.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`nazwa języka: kontrast w obu stanach, motyw ${theme}`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html");
    await page.waitForSelector("#langToggle .rail__lang-name");
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* przejście palety */

    /* Panel jest gradientem: napis mierzy się wobec KAŻDEJ jego fermaty,
       bo najjaśniejszy koniec decyduje, a nie ten, który akurat wypadł
       pod przyciskiem. Fermaty czyta się z palety, nie przepisuje. */
    const fermaty = await page.evaluate(() => {
      const bi = getComputedStyle(document.getElementById("rail")).backgroundImage;
      return bi.match(/oklch\([^)]*\)|rgba?\([^)]*\)/g) || [];
    });
    expect(fermaty.length, "gradient panelu nie ma czytelnych fermat").toBeGreaterThan(1);

    for (const f of fermaty) {
      const m = await page.evaluate(([s, t]) => window.__kontrast(s, t), [".rail__lang-name", f]);
      expect(m, "nazwa języka na przycisku nie istnieje").not.toBeNull();
      expect(m.tekst, `zamknięty na ${f}: ${m.tekst.toFixed(2)}:1, próg ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
    }

    await page.click("#langToggle");
    await page.waitForSelector("#langList:not([hidden])");
    await page.mouse.move(0, 0); /* klik zostawia kursor na przycisku */
    await page.waitForTimeout(300);
    const otwarty = await page.evaluate(() => window.__kontrast(".rail__lang-name"));
    expect(otwarty.tekst, `otwarty: ${otwarty.tekst.toFixed(2)}:1, próg ${TEKST}`)
      .toBeGreaterThanOrEqual(TEKST);
  });
}

/* ============================================================
   Trwały komunikat: mierzony na własnym tle, nie na tle strony.

   Toast ma swoje `background`, więc czytelność jego napisu nie wynika
   z niczego, co zmierzono wyżej — a jest to jedyne miejsce w kursie,
   które prosi ucznia o zrobienie czegoś z jego postępami.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`komunikat o kopii: kontrast w motywie ${theme}`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html");
    await page.waitForFunction(() => window.Core && window.I18n);
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* przejście palety */
    await page.evaluate(() => {
      for (let i = 0; i < 10; i++) window.Core.recordLesson("kontrast-l" + i, 10, 10, 60);
    });
    await page.waitForSelector(".toast--stuck");

    for (const [sel, opis] of [[".toast--stuck", "napis komunikatu"],
                               [".toast__act", "przycisk zapisania kopii"],
                               [".toast__x", "przycisk zamknięcia"]]) {
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m, `${opis} (${sel}) nie istnieje`).not.toBeNull();
      expect(m.tekst, `${opis}: ${m.tekst.toFixed(2)}:1, próg ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
    }

    /* Przycisk akcji ma się odcinać od tła komunikatu: ghost wychodził
       tu 1,58:1 obramowaniem, czyli wyglądał jak podkreślony napis. */
    const act = await page.evaluate(() => window.__kontrast(".toast__act"));
    expect(act.wypelnienie, `tło przycisku wobec komunikatu: ${act.wypelnienie.toFixed(2)}:1`)
      .toBeGreaterThanOrEqual(UI);
  });
}
