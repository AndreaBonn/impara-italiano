/* ============================================================
   _harness.mjs - loading the engine for the unit tests.

   The scripts in assets/js/ are classic ones: they cannot be imported,
   because they export nothing and only assign to a global. The same problem
   is already solved by scripts/validate.mjs and scripts/parity.mjs through
   node:vm - this is that same pattern, not a second one.

   The difference from those two: these tests touch state, so the sandbox has
   to provide a controllable localStorage and controllable time. save() is
   debounced with a 180 ms setTimeout (core.js:99), and a test that waits a
   real 180 ms is a test about the clock, not about saving: hence time is
   supplied here rather than measured.
   ============================================================ */
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import vm from "node:vm";

export const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");

/**
 * Substituting an engine file for the duration of one test run.
 *
 * It exists for `scripts/mutations.mjs`. The mutation gate has to execute a
 * BROKEN version of a file, and it must not break the file in the working
 * tree: an interrupted run would leave a mutation there that looks like an
 * ordinary change in the diff and could be committed without blinking. A
 * SIGINT handler does not solve that - the gate is entirely synchronous, so
 * the event loop never gets a turn before it ends and the signal handler
 * would never run.
 *
 * Instead the mutation lives in a temporary directory and what is swapped
 * here is only the path to READ from. Without the environment variable this
 * code is idle, so a plain `npm test` knows nothing about it.
 */
const PODMIANY = process.env.LINGUAI_PODMIANA ? JSON.parse(process.env.LINGUAI_PODMIANA) : {};

/**
 * The state engine in load order, the same as in index.html. A constant
 * rather than a list rewritten in every test file: splitting core.js into
 * modules must cost one change here, not ten edits in places nobody cares
 * about.
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
 * The conjugation engine: the Italian tables before the algorithm, the same
 * order as in index.html. verbs.js reads VERB_TABLES at module execution.
 */
export const VERBS = ["assets/js/verbs-data.js", "assets/js/verbs.js"];

/**
 * Lemmatisation: the rules of form before the verdict, the same order as in
 * index.html. lemma.js reads LemmaMorf at module execution.
 */
export const LEMMA = ["assets/js/lemma-morf.js", "assets/js/lemma.js"];

/**
 * The second judge: the provider tables and the pure rules before the file
 * that makes the request, the same order as in index.html and in PRECACHE.
 * llm.js reads all three; llm-rules.js reads Txt, which CORE already loads.
 */
export const LLM = [
  "assets/js/consent.js",
  "assets/js/llm-providers.js",
  "assets/js/llm-prompts.js",
  "assets/js/llm-rules.js",
  "assets/js/llm-keys.js",
  "assets/js/llm-net.js",
  "assets/js/llm.js",
  /* Last, and not part of the chain: llm.js reads both at CALL time — the
     first when the exam report asks for a reading of a production, the
     second when a free conversation sends a turn. In index.html they sit
     further down, next to the files that use them; here they have to be
     present, or `reportProduction` would hand back everything the model said
     and `chat` would throw on a missing global. */
  "assets/js/cils-report.js",
  "assets/js/chat-rules.js"
];

/**
 * Audio: the recording index before recordings.js, recordings.js before
 * audio.js. Both read their predecessor at module execution, not inside a
 * function.
 */
export const AUDIO = ["data/audio-index.js", "assets/js/recordings.js", "assets/js/audio.js"];

/**
 * The new-version announcement: the rules before the effects, the same order
 * as in index.html. pwa.js asks PwaRules for every decision. Notice comes
 * first, because the message goes through it.
 */
export const PWA = ["assets/js/notice.js", "assets/js/pwa-rules.js", "assets/js/pwa.js"];

/**
 * The five-minute session: the rules before the run, the same order as in
 * index.html. flash-run.js reads FlashRules at module execution. Load after
 * CORE, because the run grades through Core.
 */
export const FLASH = ["assets/js/flash-rules.js", "assets/js/flash-run.js"];

/**
 * localStorage with a controllable limit.
 * A real browser throws QuotaExceededError when it overflows; without that
 * there is no way to test how save() behaves on a full disk.
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

    /* outside the browser API - control from the test */
    _setLimit(n) { limit = n; },
    _raw: data
  };
  return api;
}

/**
 * A clock with no waiting. It queues the calls and fires them on demand, so
 * a test about saving state takes microseconds and has no race.
 */
function makeClock() {
  let seq = 0;
  const pending = new Map();
  return {
    setTimeout(fn, _ms) { const id = ++seq; pending.set(id, fn); return id; },
    clearTimeout(id) { pending.delete(id); },
    /** Fires everything pending, including what gets added along the way. */
    flush() {
      let guard = 0;
      while (pending.size) {
        if (++guard > 1000) throw new Error("flush: endless timer loop");
        const entries = Array.from(pending.entries());
        pending.clear();
        for (const [, fn] of entries) fn();
      }
    },
    get size() { return pending.size; }
  };
}

/**
 * The browser's audio surroundings: the synthesiser, an utterance and a
 * player.
 *
 * audio.js picks the voice source in a cascade (recording -> synthesis ->
 * silence), and every branch of it is a deliberate decision described in a
 * comment: an autoplay block does NOT fall back to synthesis, a missing file
 * does, and the warning fires once per session rather than on every word.
 * Without these three stubs none of them can be checked any way other than by
 * hand in a browser.
 *
 * `zachowaniePlay` controls how `play()` ends:
 *   "ok"          - the promise resolves (the recording plays),
 *   "not-allowed" - rejected with NotAllowedError (no user gesture),
 *   "blad"        - rejected with an ordinary error (the file will not load).
 */
function makeAudioEnv(opts) {
  const log = {
    voices: opts.voices || [],
    wypowiedzi: [],        // the SpeechSynthesisUtterance objects handed to speak()
    anulowania: 0,
    odtwarzacze: [],       // the Audio instances, in creation order
    rozpoznania: [],       // the SpeechRecognition instances, in creation order
    zachowaniePlay: opts.zachowaniePlay || "ok"
  };

  function Utterance(text) { this.text = text; }

  const speechSynthesis = opts.brakSyntezy ? null : {
    /* A copy, not the same array: the browser also returns a new list on
       every call. Without that, adding a voice in a test would be visible to
       the engine WITHOUT refreshing the list, so the `onvoiceschanged` test
       would pass even if that branch did not exist at all. */
    getVoices() { return log.voices.slice(); },
    speak(u) {
      /* Some Android WebViews throw from here instead of staying silent. */
      if (opts.mowaRzuca) throw new Error("speak unavailable");
      log.wypowiedzi.push(u);
    },
    cancel() { log.anulowania++; },
    /* Browsers from before 2018 have no addEventListener on the synthesiser,
       only `onvoiceschanged`. That branch exists for them. */
    addEventListener: opts.starySyntezator ? undefined : function () {}
  };

  /**
   * Speech recognition. This is the only place in the course from which
   * anything leaves the student's browser (browsers send the recording to the
   * vendor's server), so the consent gate before the first run is content
   * here, not decoration - and without this stub it could not be walked in
   * either direction.
   */
  function Recognition() {
    const rec = {
      lang: "", interimResults: false, maxAlternatives: 0, continuous: true,
      onstart: null, onresult: null, onerror: null, onend: null,
      starty: 0, przerwania: 0,
      start() { rec.starty++; if (opts.startRzuca) throw new Error("cannot start"); },
      abort() { rec.przerwania++; }
    };
    log.rozpoznania.push(rec);
    return rec;
  }

  function Player() {
    const el = {
      preload: "", src: "", playbackRate: 1, currentTime: 0,
      onended: null, onerror: null,
      pause() { el.pauzy++; },
      pauzy: 0,
      play() {
        el.zagrania++;
        if (log.zachowaniePlay === "not-allowed") {
          const e = new Error("play() failed"); e.name = "NotAllowedError";
          return Promise.reject(e);
        }
        if (log.zachowaniePlay === "blad") return Promise.reject(new Error("failed to load"));
        /* Before 2016 play() returned no promise: the code then has to report
           the start at once instead of waiting for a then() that never comes. */
        if (log.zachowaniePlay === "bez-obietnicy") return undefined;
        return Promise.resolve();
      },
      zagrania: 0
    };
    log.odtwarzacze.push(el);
    return el;
  }

  return {
    log, speechSynthesis, Utterance, Player,
    Recognition: opts.brakRozpoznawania ? undefined : Recognition
  };
}

/** A system voice for the `voices` list: as many fields as pickVoice() reads. */
export function glos(name, lang) {
  return { name: name, lang: lang || "it-IT" };
}

/**
 * The sandbox's calendar clock.
 *
 * A streak counts in DAYS, not milliseconds: `touchDay()` compares today's
 * date with the last one saved, and whether the streak grows or starts over
 * depends on that. A test that writes yesterday's date computed from the real
 * clock passes every minute but one per day - at midnight the date changes
 * halfway through the test and a "streak fault" appears.
 *
 * So we substitute the WHOLE date, not just `Date.now()`: `new Date()` with
 * no arguments returns the fixed moment, while `new Date("2026-03-01T00:00:00")`
 * still parses the string, because the day-gap computation uses that.
 *
 * The moment lives in a box rather than in a closure because it is sometimes
 * MOVED during a test: the threshold between two checks for a new version
 * (pwa-rules.js) measures a gap, so a test on it needs two different moments,
 * not one.
 *
 * @param {{teraz: number|undefined}} zegar a box holding the moment in ms
 */
function makeDate(zegar) {
  if (zegar.teraz === undefined) return Date;
  return class Zegar extends Date {
    constructor(...args) {
      if (args.length === 0) super(zegar.teraz);
      else super(...args);
    }
    static now() { return zegar.teraz; }
  };
}

/**
 * The page address and the window events.
 *
 * The router writes to `location.hash` and waits for the browser to hand it a
 * `hashchange`; it does not call itself. A stub that merely remembers the
 * string would make a route change look like a dead assignment - which is why
 * assigning the hash fires the handlers here, exactly as in a browser, and
 * just as surely does NOT fire them when the address does not change.
 */
function makeWindowEvents(opts) {
  const uchwyty = {};
  let hash = "";
  /** How many times the page reloaded. A browser would go back to the first
      line after that; here the call itself is what counts, because what is
      checked is the difference between one reload and a reload loop. */
  const przeladowania = { ile: 0 };

  const location = {
    protocol: (opts && opts.protocol) || "https:",
    get hash() { return hash; },
    set hash(v) {
      const next = String(v);
      if (next === hash) return;
      hash = next;
      (uchwyty.hashchange || []).slice().forEach((fn) => fn({ type: "hashchange" }));
    },
    reload() { przeladowania.ile++; }
  };

  return {
    location: location,
    przeladowania: przeladowania,
    addEventListener(type, fn) { (uchwyty[type] = uchwyty[type] || []).push(fn); },
    /** Outside the browser API: arriving "from outside", e.g. from a bookmark. */
    idzNa(nowy) { location.hash = nowy; },
    /** Outside the browser API: a window event, e.g. "load". */
    odpal(type) { (uchwyty[type] || []).slice().forEach((fn) => fn({ type: type })); },
    uchwyty: uchwyty
  };
}

/**
 * The service worker as seen from the PAGE, not from the worker.
 *
 * The whole new-version announcement (assets/js/pwa.js) lives in states the
 * browser exposes in a particular order, and that order is the content here.
 * `updatefound` arrives while the worker is still "installing" and
 * `registration.waiting` is still empty - a stub that hands over a ready
 * worker straight away lets through code that reads `waiting` in the
 * `updatefound` handler, which is exactly the defect that keeps the message
 * from appearing on the first load after a release.
 *
 * So the test moves the states one at a time: `znaleziono()` gives
 * "installing", `zainstalowany()` moves to "installed" and sends
 * `statechange`, `przejmuje()` sends `controllerchange`.
 */
function makeServiceWorker(opts) {
  const o = opts || {};
  const uchwyty = {};                 // events on navigator.serviceWorker
  const log = {
    rejestracje: [],                  // the addresses passed to register()
    wiadomosci: [],                   // the payloads sent to the waiting worker
    /* The numbers of the workers that received the payloads. Separate from the
       content, because across two successive releases "what was sent" is
       identical while "to whom" is the whole difference between a working
       button and a dead one. */
    odbiorcy: [],
    sprawdzenia: 0,                   // calls to registration.update()
    kontroler: o.kontroler === undefined ? null : o.kontroler
  };

  let numer = 0;

  function worker(state) {
    const wUchwyty = {};
    const nr = ++numer;
    return {
      state: state,
      nr: nr,
      addEventListener(type, fn) { (wUchwyty[type] = wUchwyty[type] || []).push(fn); },
      postMessage(dane) { log.wiadomosci.push(dane); log.odbiorcy.push(nr); },
      _odpal(type) { (wUchwyty[type] || []).slice().forEach((fn) => fn({ type: type })); }
    };
  }

  const rUchwyty = {};
  const rejestracja = {
    installing: null,
    waiting: o.waiting ? worker("installed") : null,
    active: worker("activated"),
    addEventListener(type, fn) { (rUchwyty[type] = rUchwyty[type] || []).push(fn); },
    update() { log.sprawdzenia++; return o.updateOdrzuca ? Promise.reject(new Error("no network")) : Promise.resolve(); }
  };

  const api = {
    get controller() { return log.kontroler; },
    addEventListener(type, fn) { (uchwyty[type] = uchwyty[type] || []).push(fn); },
    register(url) {
      log.rejestracje.push(url);
      return o.rejestracjaOdrzuca ? Promise.reject(new Error("refused")) : Promise.resolve(rejestracja);
    }
  };

  return {
    api, log, rejestracja,
    /** The browser found a new version: the worker is "installing". */
    znaleziono() {
      rejestracja.installing = worker("installing");
      (rUchwyty.updatefound || []).slice().forEach((fn) => fn({ type: "updatefound" }));
      return rejestracja.installing;
    },
    /** The installation finished: "installed" plus a statechange on the worker. */
    zainstalowany() {
      const w = rejestracja.installing;
      w.state = "installed";
      rejestracja.waiting = w;
      rejestracja.installing = null;
      w._odpal("statechange");
      return w;
    },
    /** The new worker has taken over the page. */
    przejmuje() {
      log.kontroler = rejestracja.waiting || rejestracja.active;
      (uchwyty.controllerchange || []).slice().forEach((fn) => fn({ type: "controllerchange" }));
    }
  };
}

/**
 * A minimal DOM: as much as core.js touches (a toast and a sticky message).
 *
 * `toasts` collects the strings alone - for simple checks. `notices` keeps the
 * elements with their class and attributes, because on a full storage the
 * difference between a message that disappears after three seconds and one
 * that stays IS what is being tested.
 */
function makeDocument(toasts, notices, opcje) {
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

      /* Downloading a backup goes through a click on an <a download> nobody
         sees. Without this method that whole branch ended in an exception in
         the stub and could not be walked. */
      click() { el.klikniecia++; el.fire("click"); },
      klikniecia: 0,

      /**
       * Outside the browser API - a click from the test.
       *
       * Until recently the handlers were thrown away, so the "save a backup"
       * button and the closing cross existed in the tests as two elements with
       * no behaviour: it was possible to check that they were there and
       * nothing more. The whole post-click branch (unblocking the key,
       * deferring the reminder) ran in the browser only.
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
   * The queue of injected scripts.
   *
   * registry.js fetches a level's data through <script>, not through fetch
   * (the course has to work from file://), and all its logic hangs on
   * onload/onerror. Without this queue there is no way to check either the
   * order of the files or what happens when one of them does not come in -
   * and that is the difference between "a level partially loaded" and "a level
   * in the error state".
   */
  const wstrzykniete = [];
  const czekajace = [];
  const head = {
    appendChild(el) { wstrzykniete.push(el.src); czekajace.push(el); return el; }
  };

  /**
   * Page elements ordered by the test (`box.el("main")`).
   *
   * By default `getElementById` returns null for everything but the toast
   * stack, because that was enough for the state engine. The router reaches
   * for `#main` to move the focus there after a route change: without it the
   * only way to check the router would be a browser. An unknown id still
   * returns null - a stub that returns an element for every question lets a
   * typo in an id through.
   */
  const naZamowienie = new Map();
  const utworzone = [];

  /* Handlers on the document itself. Until recently they were thrown away:
     `visibilitychange` is the only place where the course asks for a new
     version after startup, so a stub discarding the handler would only be
     checking that the registration does not blow up. */
  const docUchwyty = {};

  const document = {
    documentElement: { setAttribute() {}, getAttribute() { return null; } },
    readyState: (opcje && opcje.readyState) || "loading",
    visibilityState: "visible",
    head: head,
    getElementById(id) {
      if (id === "toastStack") return stack;
      return naZamowienie.has(id) ? naZamowienie.get(id) : null;
    },
    /* Created elements stay on a list: downloading a backup happens through an
       <a download> that is nowhere in the page tree, so without this list
       neither the file name nor the address can be checked. */
    createElement() { const el = makeEl(); utworzone.push(el); return el; },
    querySelectorAll() { return []; },
    querySelector() { return null; },
    addEventListener(type, fn) { (docUchwyty[type] = docUchwyty[type] || []).push(fn); }
  };

  /** Outside the browser API: a document event fired from the test. */
  function odpal(type) { (docUchwyty[type] || []).slice().forEach((fn) => fn({ type: type })); }

  function el(id) {
    if (!naZamowienie.has(id)) {
      const nowy = makeEl();
      nowy.focused = 0;
      nowy.focus = function () { nowy.focused++; };
      naZamowienie.set(id, nowy);
    }
    return naZamowienie.get(id);
  }

  return {
    document: document, stack: stack, el: el, utworzone: utworzone,
    wstrzykniete: wstrzykniete, czekajace: czekajace, odpal: odpal
  };
}

/**
 * Builds the sandbox and executes the given engine files inside it.
 *
 * @param {object} [options]
 * @param {string[]} [options.files]   files to execute, core.js alone by default
 * @param {object}   [options.storage] a ready localStorage (e.g. with a limit)
 * @param {object}   [options.seed]    entries to put in localStorage before loading
 * @param {number}   [options.now]     the fixed moment for `new Date()` and `Date.now()`
 * @param {Array}    [options.voices]  the system voices audio.js sees
 * @param {string}   [options.zachowaniePlay] how play() ends: ok | not-allowed | blad
 * @returns {object} the sandbox: Core, storage, clock, toasts, run()
 */
export function loadEngine(options) {
  const opts = options || {};
  const files = opts.files || CORE;
  const storage = opts.storage || makeStorage();
  const clock = makeClock();
  const toasts = [];
  const notices = [];
  const warnings = [];
  const audio = makeAudioEnv(opts);
  const okno = makeWindowEvents(opts);
  const guska = makeServiceWorker(opts);
  const zegar = { teraz: opts.now };
  /** What went to the student's disk: the content of downloaded files and the released handles. */
  const pobrania = { blobs: [], zwolnione: [] };

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
    Intl, JSON, Math, Date: makeDate(zegar), Object, Array, String, Number, Boolean,
    RegExp, Error, TypeError, Map, Set, BigInt, TextEncoder,
    isNaN, parseInt, parseFloat, encodeURIComponent, decodeURIComponent,
    localStorage: storage,
    /* As much navigator as pwa.js touches: the presence of the "serviceWorker"
       key is its first guard, so `brakGuski` has to give an object WITHOUT
       that field rather than a field set to null. */
    navigator: opts.brakGuski ? {} : { serviceWorker: guska.api },
    setTimeout: clock.setTimeout,
    clearTimeout: clock.clearTimeout,
    /**
     * Interface strings. The tests do not check translations, but the
     * VARIABLES have to reach the result: a stub that loses them collapsed 38
     * different tasks into four identical strings, and that looked like a
     * fault in the generator.
     */
    I18n: {
      t(k, v) {
        if (!v) return k;
        const czesci = Object.keys(v).sort().map(n => n + "=" + v[n]);
        return k + "(" + czesci.join(",") + ")";
      },
      lang: "pl", locale() { return "pl-PL"; }, LANGS: []
    },
    Promise,
    location: okno.location,
    addEventListener: okno.addEventListener,
    speechSynthesis: audio.speechSynthesis,
    SpeechSynthesisUtterance: audio.Utterance,
    SpeechRecognition: audio.Recognition,
    Audio: audio.Player,

    /* Downloading the backup file. The Blob keeps its content in a field
       instead of sealing it away like a browser: the point of this branch is
       WHAT went to disk (whether the backup marker had already been moved at
       the moment of serialisation), so a stub returning an opaque handle would
       only be checking that nothing threw. */
    Blob: function (czesci, opcje) {
      this.tresc = (czesci || []).join("");
      this.type = (opcje || {}).type || "";
      pobrania.blobs.push(this);
    },
    URL: {
      createObjectURL(b) { return "blob:" + pobrania.blobs.indexOf(b); },
      revokeObjectURL(u) { pobrania.zwolnione.push(u); }
    }
  };
  sandbox.window = sandbox;
  sandbox.self = sandbox;
  sandbox.globalThis = sandbox;
  const dom = makeDocument(toasts, notices, opts);
  sandbox.document = dom.document;

  vm.createContext(sandbox);

  const box = {
    sandbox, storage, clock, toasts, notices, warnings,
    /** What the browser "heard": utterances, cancellations, players. */
    audio: audio.log,
    /** Orders an element with the given id so that getElementById finds it. */
    el(id) { return dom.el(id); },
    /** The files the course sent to the student's disk. */
    pobrania: pobrania,
    /** The elements built by document.createElement, in order. */
    get utworzone() { return dom.utworzone; },
    /** The page address; assigning the hash fires hashchange as in a browser. */
    okno: okno,
    /** The service worker from the page's side: registration, states, takeover. */
    guska: guska,
    /** A document event from the test, e.g. `box.wDokumencie("visibilitychange")`. */
    wDokumencie(type) { dom.odpal(type); return box; },
    /** What is still on screen once time has passed - without the toasts that vanish. */
    visible() { return dom.stack.children.map(c => c.textContent); },
    /** Executes another engine file in the same sandbox. */
    run(rel) {
      /* `filename` stays the original one even when substituted: coverage.mjs
         recognises the file in the V8 dump by it. */
      vm.runInContext(readFileSync(PODMIANY[rel] || join(ROOT, rel), "utf8"),
        sandbox, { filename: rel });
      return box;
    },
    /** Saving is debounced: without this nothing reaches localStorage. */
    flush() { clock.flush(); return box; },
    /** Moves the fixed moment. Requires `now` when the sandbox is created. */
    przesunZegar(ms) {
      if (zegar.teraz === undefined) throw new Error("przesunZegar: sandbox without `now`");
      zegar.teraz += ms;
      return box;
    },
    /** The state as it lies in localStorage - not in memory. */
    stored(key) {
      const raw = storage.getItem(key || "linguai.italiano.v2");
      return raw === null ? null : JSON.parse(raw);
    },

    /** The addresses of the injected scripts, in injection order. */
    get scripts() { return dom.wstrzykniete; },

    /**
     * Settles every pending script: successfully or not.
     *
     * A loop rather than a single pass: loadScripts injects the NEXT file only
     * from the previous one's handler, so settling one adds another to the
     * queue.
     *
     * @param {string[]} [failing] the addresses that must report an error
     */
    settleScripts(failing) {
      const zle = failing || [];
      let guard = 0;
      while (dom.czekajace.length) {
        if (++guard > 500) throw new Error("settleScripts: endless scripts");
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
 * Whether Object's prototype has been polluted.
 * Checked on an object from the test, not from the sandbox: the vm has a realm
 * of its own, so pollution inside is invisible from outside and vice versa.
 */
export function probePrototype(box, prop) {
  return vm.runInContext(`({}).${prop}`, box.sandbox);
}
