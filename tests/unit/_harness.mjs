/* ============================================================
   _harness.mjs — ładowanie silnika do testów jednostkowych.

   Skrypty w assets/js/ są klasyczne: nie da się ich zaimportować,
   bo nie eksportują niczego, tylko przypisują do globala. Ten sam
   problem rozwiązują już scripts/validate.mjs i scripts/parity.mjs
   przez node:vm — tutaj jest ten sam wzorzec, nie drugi.

   Różnica wobec tamtych dwóch: te testy dotykają stanu, więc
   piaskownica musi dawać sterowalne localStorage i sterowalny czas.
   save() jest zdebouncowane setTimeoutem na 180 ms (core.js:99),
   a test, który czeka realne 180 ms, jest testem o zegarze, nie
   o zapisie: dlatego czas jest tu podstawiony, a nie odmierzany.
   ============================================================ */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

/**
 * localStorage z kontrolowanym limitem.
 * Prawdziwa przeglądarka rzuca QuotaExceededError przy przepełnieniu;
 * bez tego nie da się przetestować zachowania save() na pełnym dysku.
 */
export function makeStorage(options) {
  const opts = options || {};
  const data = new Map();
  let limit = opts.limit === undefined ? Infinity : opts.limit;

  const api = {
    getItem(k) { return data.has(String(k)) ? data.get(String(k)) : null; },
    setItem(k, v) {
      const key = String(k), val = String(v);
      let size = val.length;
      for (const [dk, dv] of data) if (dk !== key) size += dv.length;
      if (size > limit) {
        const err = new Error("QuotaExceededError");
        err.name = "QuotaExceededError";
        throw err;
      }
      data.set(key, val);
    },
    removeItem(k) { data.delete(String(k)); },
    clear() { data.clear(); },
    key(i) { return Array.from(data.keys())[i] ?? null; },
    get length() { return data.size; },

    /* poza API przeglądarki — sterowanie z testu */
    _setLimit(n) { limit = n; },
    _raw: data
  };
  return api;
}

/**
 * Zegar bez czekania. Kolejkuje wywołania i odpala je na żądanie,
 * dzięki czemu test na zapisie stanu trwa mikrosekundy i nie ma wyścigu.
 */
function makeClock() {
  let seq = 0;
  const pending = new Map();
  return {
    setTimeout(fn, _ms) { const id = ++seq; pending.set(id, fn); return id; },
    clearTimeout(id) { pending.delete(id); },
    /** Odpala wszystko, co czeka, łącznie z tym, co dołoży się w trakcie. */
    flush() {
      let guard = 0;
      while (pending.size) {
        if (++guard > 1000) throw new Error("flush: pętla timerów bez końca");
        const entries = Array.from(pending.entries());
        pending.clear();
        for (const [, fn] of entries) fn();
      }
    },
    get size() { return pending.size; }
  };
}

/** Minimalny DOM: tyle, ile dotyka core.js (toast) i nic więcej. */
function makeDocument(toasts) {
  function makeEl() {
    const el = {
      className: "", textContent: "", children: [],
      appendChild(c) { el.children.push(c); return c; },
      remove() {},
      setAttribute() {}, removeAttribute() {},
      querySelector() { return null; }, querySelectorAll() { return []; }
    };
    return el;
  }
  const stack = makeEl();
  stack.appendChild = function (c) {
    stack.children.push(c);
    toasts.push(c.textContent);
    return c;
  };
  return {
    documentElement: { setAttribute() {}, getAttribute() { return null; } },
    getElementById(id) { return id === "toastStack" ? stack : null; },
    createElement() { return makeEl(); },
    querySelectorAll() { return []; },
    querySelector() { return null; },
    addEventListener() {}
  };
}

/**
 * Buduje piaskownicę i wykonuje w niej wskazane pliki silnika.
 *
 * @param {object} [options]
 * @param {string[]} [options.files]   pliki do wykonania, domyślnie sam core.js
 * @param {object}   [options.storage] gotowe localStorage (np. z limitem)
 * @param {object}   [options.seed]    wpisy do localStorage przed wczytaniem
 * @returns {object} piaskownica: Core, storage, clock, toasts, run()
 */
export function loadEngine(options) {
  const opts = options || {};
  const files = opts.files || ["assets/js/core.js"];
  const storage = opts.storage || makeStorage();
  const clock = makeClock();
  const toasts = [];
  const warnings = [];

  if (opts.seed) {
    for (const k of Object.keys(opts.seed)) {
      const v = opts.seed[k];
      storage.setItem(k, typeof v === "string" ? v : JSON.stringify(v));
    }
  }

  const sandbox = {
    console: {
      log() {}, error() {}, info() {},
      warn(...a) { warnings.push(a.join(" ")); }
    },
    Intl, JSON, Math, Date, Object, Array, String, Number, Boolean,
    RegExp, Error, TypeError, Map, Set, BigInt, TextEncoder,
    isNaN, parseInt, parseFloat, encodeURIComponent, decodeURIComponent,
    localStorage: storage,
    setTimeout: clock.setTimeout,
    clearTimeout: clock.clearTimeout,
    /* Napisy interfejsu: test nie sprawdza tłumaczeń, tylko że klucz doszedł. */
    I18n: { t(k) { return k; }, lang: "pl", locale() { return "pl-PL"; }, LANGS: [] },
    Audio: function () { return { play() { return Promise.resolve(); }, pause() {} }; }
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.globalThis = sandbox;
  sandbox.document = makeDocument(toasts);

  vm.createContext(sandbox);

  const box = {
    sandbox, storage, clock, toasts, warnings,
    /** Wykonuje kolejny plik silnika w tej samej piaskownicy. */
    run(rel) {
      vm.runInContext(readFileSync(join(ROOT, rel), "utf8"), sandbox, { filename: rel });
      return box;
    },
    /** Zapis jest zdebouncowany: bez tego nic nie trafia do localStorage. */
    flush() { clock.flush(); return box; },
    /** Stan tak, jak leży w localStorage — nie w pamięci. */
    stored(key) {
      const raw = storage.getItem(key || "linguai.italiano.v2");
      return raw === null ? null : JSON.parse(raw);
    },
    get Core() { return sandbox.Core; }
  };

  files.forEach(f => box.run(f));
  return box;
}

/**
 * Czy prototyp Obiektu został zanieczyszczony.
 * Sprawdzane na obiekcie z testu, nie z piaskownicy: vm ma własne
 * realm, więc zanieczyszczenie w środku nie widać z zewnątrz i odwrotnie.
 */
export function probePrototype(box, prop) {
  return vm.runInContext(`({}).${prop}`, box.sandbox);
}
