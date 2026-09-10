/* ============================================================
   Contrast computed by the browser.

   The project palette is in OKLCH. External tools read
   `oklch(0.31 0.035 350)` as an RGB triple and report a channel of "350",
   so their result is an artefact of the parser and not a measurement — this
   is already noted in docs/REPORT_ATTIVITA.md.

   Here the conversion is done by the browser engine: the colour goes onto a
   1×1 canvas and comes back as sRGB. That works for any colour space CSS
   understands, so it will not go stale at the next one.

   WCAG 2.2 AA thresholds: text 4.5, large text 3, UI elements 3.
   ============================================================ */
const { test, expect } = require("@playwright/test");

const TEKST = 4.5;
const UI = 3;

/** Injects the meters and returns a function to be called in the page context. */
const MIERNIK = () => {
  const cv = document.createElement("canvas");
  cv.width = cv.height = 1;
  const ctx = cv.getContext("2d", { willReadFrequently: true });

  /* A colour over a background: semi-transparency counts against what is underneath. */
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
  /** The background of an element, taking transparent ancestors into account. */
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
  /* `tloJawne` for elements sitting on a gradient: `tlo()` walks the
     `backgroundColor` of the ancestors and does not see a gradient, so
     without it the text would be measured against the page background, that
     is against something that is not there. */
  window.__kontrast = (sel, tloJawne) => {
    const el = document.querySelector(sel);
    if (!el) return null;
    const cs = getComputedStyle(el);
    const pod = tloJawne || tlo(el);
    /* A filled control is distinguished by its background, not by its edge:
       WCAG 1.4.11 asks whether it is VISIBLE that this is a control, not
       which pixel makes it visible. */
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
  test(`the review tabs: contrast in the ${theme} theme`, async ({ page }) => {
    await przygotuj(page, theme);

    const cele = [
      { sel: '.tab[aria-current="true"]', prog: TEKST, opis: "the active tab" },
      { sel: ".tab:not([aria-current])", prog: TEKST, opis: "an inactive tab" },
      { sel: ".tab__n", prog: TEKST, opis: "the counter on the tab" },
      { sel: ".js-start", prog: TEKST, opis: "the start button" },
      { sel: ".list-row b", prog: TEKST, opis: "nazwa zagadnienia" },
      { sel: ".list-row .chip", prog: TEKST, opis: "znacznik terminu" }
    ];

    for (const c of cele) {
      const m = await page.evaluate(s => window.__kontrast(s), c.sel);
      expect(m, `${c.opis} (${c.sel}) nie istnieje na stronie`).not.toBeNull();
      /* Large text (>=24px, or >=18.66px and bold) has a lower threshold. */
      const duzy = m.wielkosc >= 24 || (m.wielkosc >= 18.66 && Number(m.waga) >= 700);
      const prog = duzy ? UI : c.prog;
      expect(m.tekst, `${c.opis}: ${m.tekst.toFixed(2)}:1, threshold ${prog}`).toBeGreaterThanOrEqual(prog);
    }
  });

  test(`the review tabs: a distinguishable border in the ${theme} theme`, async ({ page }) => {
    await przygotuj(page, theme);
    /* The border of a control is a UI element: the threshold is 3:1, not 4.5:1. */
    for (const sel of ['.tab[aria-current="true"]', ".tab:not([aria-current])"]) {
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m.obramowanie, `${sel}: ${m.obramowanie.toFixed(2)}:1`).toBeGreaterThanOrEqual(UI);
    }
  });
}

/* ============================================================
   Contrast UNDER THE CURSOR, not only at rest.

   The defect this caught: in the dark theme the text on a button is dark,
   and `:hover` darkened the background — the two colours converged at
   3.36:1 against a threshold of 4.5. In the light theme the same rule is
   correct, because there the text is light. The resting state passed in
   both.

   Two things you cannot see until you trip over them: the palette has a
   transition, so a measurement right after switching the theme returns an
   intermediate colour; and Playwright's click itself leaves the cursor ON
   the button, so the "resting state" measured after a click is in fact
   hover.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`action buttons: contrast under the cursor in the ${theme} theme`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html#/velocita");
    await page.waitForSelector(".sp-num");
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* the palette transition */

    for (const [sel, opis] of [[".js-reveal", "przycisk podstawowy"],
                               [".js-play.btn--green", "przycisk zielony"]]) {
      await page.hover(sel);
      await page.waitForTimeout(400);
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m, `${opis} (${sel}) nie istnieje`).not.toBeNull();
      expect(m.tekst, `${opis} under the cursor: ${m.tekst.toFixed(2)}:1, threshold ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
      await page.mouse.move(0, 0);
    }
  });
}

/* ============================================================
   The language name on the switcher: two backgrounds, not one.

   The closed button sits on the panel gradient (light text), while the open
   one gets a paper background of its own (dark text) — that is, the pair of
   colours changes in the middle of the interaction and the resting state
   says nothing about the other one.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`the language name: contrast in both states, ${theme} theme`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html");
    await page.waitForSelector("#langToggle .rail__lang-name");
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* the palette transition */

    /* The panel is a gradient: the text is measured against EVERY one of its
       stops, because the lightest end decides, not the one that happened to
       fall under the button. The stops are read from the palette, not copied
       out. */
    const fermaty = await page.evaluate(() => {
      const bi = getComputedStyle(document.getElementById("rail")).backgroundImage;
      return bi.match(/oklch\([^)]*\)|rgba?\([^)]*\)/g) || [];
    });
    expect(fermaty.length, "gradient panelu nie ma czytelnych fermat").toBeGreaterThan(1);

    for (const f of fermaty) {
      const m = await page.evaluate(([s, t]) => window.__kontrast(s, t), [".rail__lang-name", f]);
      expect(m, "the language name on the button does not exist").not.toBeNull();
      expect(m.tekst, `closed on ${f}: ${m.tekst.toFixed(2)}:1, threshold ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
    }

    await page.click("#langToggle");
    await page.waitForSelector("#langList:not([hidden])");
    await page.mouse.move(0, 0); /* klik zostawia kursor na przycisku */
    await page.waitForTimeout(300);
    const otwarty = await page.evaluate(() => window.__kontrast(".rail__lang-name"));
    expect(otwarty.tekst, `open: ${otwarty.tekst.toFixed(2)}:1, threshold ${TEKST}`)
      .toBeGreaterThanOrEqual(TEKST);
  });
}

/* ============================================================
   The persistent message: measured on its own background, not on the page's.

   A toast has a `background` of its own, so the readability of its text does
   not follow from anything measured above — and it is the only place in the
   course that asks the student to do something with their progress.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`komunikat o kopii: kontrast w motywie ${theme}`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html");
    await page.waitForFunction(() => window.Core && window.I18n);
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* the palette transition */
    await page.evaluate(() => {
      for (let i = 0; i < 10; i++) window.Core.recordLesson("kontrast-l" + i, 10, 10, 60);
    });
    await page.waitForSelector(".toast--stuck");

    for (const [sel, opis] of [[".toast--stuck", "the message text"],
                               [".toast__act", "the save-a-copy button"],
                               [".toast__x", "the close button"]]) {
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m, `${opis} (${sel}) nie istnieje`).not.toBeNull();
      expect(m.tekst, `${opis}: ${m.tekst.toFixed(2)}:1, threshold ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
    }

    /* The action button has to stand out from the message background: a
       ghost came out at 1.58:1 on its border here, that is it looked like
       underlined text. */
    const act = await page.evaluate(() => window.__kontrast(".toast__act"));
    expect(act.wypelnienie, `the button background against the message: ${act.wypelnienie.toFixed(2)}:1`)
      .toBeGreaterThanOrEqual(UI);
  });
}

/* ============================================================
   A ghost button on a card: the text, the border and the state under the cursor.

   A ghost has no fill of its own, so only its edge distinguishes it from the
   background — and that edge already came out at 1.58:1 once, in the backup
   message. The pattern runs in several places in the course (training, the
   learning path), so it is measured where it sits on a card rather than once
   per instance.

   Under the cursor the pair of colours changes: that is a separate
   measurement, not the same one.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`the placement test hint: contrast in the ${theme} theme`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html#/percorso");
    await page.waitForSelector(".js-place");
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* the palette transition */

    for (const [sel, opis] of [[".list-row__main b", "the hint heading"],
                               [".list-row__main span", "zdanie podpowiedzi"],
                               [".js-place", "przycisk testu"]]) {
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m, `${opis} (${sel}) nie istnieje`).not.toBeNull();
      expect(m.tekst, `${opis}: ${m.tekst.toFixed(2)}:1, threshold ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
    }

    const spoczynek = await page.evaluate(() => window.__kontrast(".js-place"));
    expect(spoczynek.obramowanie, `obramowanie przycisku: ${spoczynek.obramowanie.toFixed(2)}:1`)
      .toBeGreaterThanOrEqual(UI);

    await page.hover(".js-place");
    await page.waitForTimeout(400);
    const kursor = await page.evaluate(() => window.__kontrast(".js-place"));
    expect(kursor.tekst, `the button under the cursor: ${kursor.tekst.toFixed(2)}:1, threshold ${TEKST}`)
      .toBeGreaterThanOrEqual(TEKST);
  });
}

/* ============================================================
   The welcome screen: three roads, three different button weights.

   It is the first thing the student sees, and the only screen where all
   three variants stand side by side: primary, ghost and quiet. The last one
   has neither a background nor a border — only the text is left, so it is
   measured as text and not as a control.
   ============================================================ */
for (const theme of ["light", "dark"]) {
  test(`the welcome: contrast of the three roads in the ${theme} theme`, async ({ page }) => {
    await page.addInitScript(MIERNIK);
    await page.goto("/index.html#/benvenuto");
    await page.waitForSelector(".js-zero");
    await page.evaluate(t => document.documentElement.setAttribute("data-theme", t), theme);
    await page.waitForTimeout(600); /* the palette transition */

    for (const [sel, opis] of [[".js-zero", "przycisk podstawowy"],
                               [".js-test", "przycisk ghost"],
                               [".js-look", "przycisk quiet"],
                               [".list-row--stack .list-row__main span", "the explaining sentence"]]) {
      const m = await page.evaluate(s => window.__kontrast(s), sel);
      expect(m, `${opis} (${sel}) nie istnieje`).not.toBeNull();
      expect(m.tekst, `${opis}: ${m.tekst.toFixed(2)}:1, threshold ${TEKST}`)
        .toBeGreaterThanOrEqual(TEKST);
    }
  });
}
