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
  window.__kontrast = (sel) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const pod = tlo(el);
    return {
      tekst: ratio(srgb(cs.color, pod), srgb(pod)),
      obramowanie: ratio(srgb(cs.borderTopColor, pod), srgb(pod)),
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
