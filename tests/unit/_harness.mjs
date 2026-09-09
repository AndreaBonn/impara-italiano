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
 * Silnik stanu w kolejności ładowania, tej samej co w index.html.
 * Stała, a nie lista przepisywana w każdym pliku testu: rozbicie core.js
 * na moduły ma kosztować jedną zmianę tutaj, a nie dziesięć poprawek
 * w miejscach, które nikogo nie obchodzą.
 */
export const CORE = [
  "assets/js/fsrs.js",
  "assets/js/text.js",
  "assets/js/notice.js",
  "assets/js/store.js",
  "assets/js/registry.js",
  "assets/js/srs.js",
  "assets/js/core.js"
];

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

/**
 * Minimalny DOM: tyle, ile dotyka core.js (toast i komunikat trwały).
 *
 * `toasts` zbiera same napisy — do prostych sprawdzeń. `notices` trzyma
 * elementy z klasą i atrybutami, bo przy pełnej pamięci różnica między
 * komunikatem znikającym po trzech sekundach a takim, który zostaje,
 * JEST tym, co się testuje.
 */
function makeDocument(toasts, notices) {
  function makeEl() {
    const attrs = {};
    const handlers = {};
    const el = {
      className: "", textContent: "", innerHTML: "", children: [], attrs, handlers,
      appendChild(c) { el.children.push(c); c.parent = el; return c; },
      remove() {
        if (!el.parent) return;
        const i = el.parent.children.indexOf(el);
        if (i >= 0) el.parent.children.splice(i, 1);
      },
      setAttribute(k, v) { attrs[k] = String(v); },
      getAttribute(k) { return attrs[k] === undefined ? null : attrs[k]; },
      removeAttribute(k) { delete attrs[k]; },
      addEventListener(type, fn) { (handlers[type] = handlers[type] || []).push(fn); },
      querySelector() { return null; }, querySelectorAll() { return []; },

      /**
       * Poza API przeglądarki — kliknięcie z testu.
       *
       * Uchwyty były do niedawna wyrzucane do kosza, więc przycisk
       * „zapisz kopię" i krzyżyk zamykający istniały w teście jako dwa
       * elementy bez zachowania: dało się sprawdzić, że są, i nic poza
       * tym. Cała gałąź po kliknięciu (odblokowanie klucza, odłożenie
       * przypomnienia) chodziła wyłącznie w przeglądarce.
       */
      fire(type) { (handlers[type] || []).slice().forEach(fn => fn({ type: type })); }
    };
    return el;
  }
  const stack = makeEl();
  stack.appendChild = function (c) {
    stack.children.push(c);
    c.parent = stack;
    toasts.push(c.textContent);
    notices.push(c);
    return c;
  };

  /**
   * Kolejka wstrzykiwanych skryptów.
   *
   * registry.js dociąga dane poziomu przez <script>, nie przez fetch (kurs
   * ma działać z file://), i cała jego logika wisi na onload/onerror. Bez
   * tej kolejki nie da się sprawdzić ani kolejności plików, ani tego, co
   * się dzieje, gdy jeden z nich nie wejdzie — a to jest różnica między
   * „poziom wczytany częściowo" a „poziom w stanie error".
   */
  const wstrzykniete = [];
  const czekajace = [];
  const head = {
    appendChild(el) { wstrzykniete.push(el.src); czekajace.push(el); return el; }
  };

  const document = {
    documentElement: { setAttribute() {}, getAttribute() { return null; } },
    head: head,
    getElementById(id) { return id === "toastStack" ? stack : null; },
    createElement() { return makeEl(); },
    querySelectorAll() { return []; },
    querySelector() { return null; },
    addEventListener() {}
  };
  return { document: document, stack: stack, wstrzykniete: wstrzykniete, czekajace: czekajace };
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
  const files = opts.files || CORE;
  const storage = opts.storage || makeStorage();
  const clock = makeClock();
  const toasts = [];
  const notices = [];
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
    /**
     * Napisy interfejsu. Test nie sprawdza tłumaczeń, ale ZMIENNE muszą
     * dotrzeć do wyniku: stub, który je gubi, sklejał 38 różnych zadań
     * w cztery identyczne napisy i wyglądało to na usterkę generatora.
     */
    I18n: {
      t(k, v) {
        if (!v) return k;
        const czesci = Object.keys(v).sort().map(n => n + "=" + v[n]);
        return k + "(" + czesci.join(",") + ")";
      },
      lang: "pl", locale() { return "pl-PL"; }, LANGS: []
    },
    Audio: function () { return { play() { return Promise.resolve(); }, pause() {} }; }
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.globalThis = sandbox;
  const dom = makeDocument(toasts, notices);
  sandbox.document = dom.document;

  vm.createContext(sandbox);

  const box = {
    sandbox, storage, clock, toasts, notices, warnings,
    /** Co nadal wisi na ekranie po upływie czasu — bez znikających toastów. */
    visible() { return dom.stack.children.map(c => c.textContent); },
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

    /** Adresy wstrzykniętych skryptów, w kolejności wstrzyknięcia. */
    get scripts() { return dom.wstrzykniete; },

    /**
     * Rozstrzyga wszystkie oczekujące skrypty: udane albo nie.
     *
     * Pętla, a nie jedno przejście: loadScripts wstrzykuje NASTĘPNY plik
     * dopiero z uchwytu poprzedniego, więc rozstrzygnięcie jednego dokłada
     * kolejnego do kolejki.
     *
     * @param {string[]} [failing] adresy, które mają zgłosić błąd
     */
    settleScripts(failing) {
      const zle = failing || [];
      let guard = 0;
      while (dom.czekajace.length) {
        if (++guard > 500) throw new Error("settleScripts: skrypty bez końca");
        const el = dom.czekajace.shift();
        if (zle.indexOf(el.src) >= 0) el.onerror();
        else el.onload();
      }
      return box;
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
