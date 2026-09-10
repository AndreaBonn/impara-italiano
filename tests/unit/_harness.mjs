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
 * Podstawienie pliku silnika na czas jednego przebiegu testów.
 *
 * Istnieje dla `scripts/mutations.mjs`. Bramka mutacyjna musi wykonać
 * ZEPSUTĄ wersję pliku, a nie wolno jej psuć pliku w drzewie roboczym:
 * przerwany przebieg zostawiłby tam mutację, która w diffie wygląda jak
 * zwykła zmiana i da się ją zacommitować bez mrugnięcia okiem. Handler na
 * SIGINT tego nie załatwia — bramka jest w całości synchroniczna, więc
 * pętla zdarzeń nie dochodzi do głosu przed jej końcem i uchwyt sygnału
 * nigdy by się nie wykonał.
 *
 * Zamiast tego mutacja leży w katalogu tymczasowym, a tutaj podmieniana
 * jest sama ścieżka do ODCZYTU. Bez zmiennej środowiskowej ten kod jest
 * bezczynny, więc zwykły `npm test` nic o nim nie wie.
 */
const PODMIANY = process.env.LINGUAI_PODMIANA ? JSON.parse(process.env.LINGUAI_PODMIANA) : {};

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
 * Silnik odmiany: tabele włoskiego przed algorytmem, ta sama kolejność
 * co w index.html. verbs.js czyta VERB_TABLES przy wykonaniu modułu.
 */
export const VERBS = ["assets/js/verbs-data.js", "assets/js/verbs.js"];

/**
 * Lematyzacja: reguły formy przed rozstrzyganiem, ta sama kolejność co
 * w index.html. lemma.js czyta LemmaMorf przy wykonaniu modułu.
 */
export const LEMMA = ["assets/js/lemma-morf.js", "assets/js/lemma.js"];

/**
 * Dźwięk: indeks nagrań przed recordings.js, recordings.js przed audio.js.
 * Oba czytają swojego poprzednika przy wykonaniu modułu, nie w funkcji.
 */
export const AUDIO = ["data/audio-index.js", "assets/js/recordings.js", "assets/js/audio.js"];

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
 * Otoczenie dźwiękowe przeglądarki: syntezator, wypowiedź i odtwarzacz.
 *
 * audio.js wybiera źródło głosu w kaskadzie (nagranie → synteza → cisza),
 * a każda jej gałąź jest decyzją podjętą świadomie i opisaną w komentarzu:
 * blokada autoodtwarzania NIE schodzi na syntezę, brakujący plik owszem,
 * a ostrzeżenie leci raz na sesję, nie przy każdym słówku. Bez tych trzech
 * atrap żadnej z nich nie da się sprawdzić inaczej niż ręcznie w przeglądarce.
 *
 * `zachowaniePlay` steruje tym, czym kończy się `play()`:
 *   "ok"          — obietnica spełniona (nagranie gra),
 *   "not-allowed" — odrzucona NotAllowedError (brak gestu użytkownika),
 *   "blad"        — odrzucona zwykłym błędem (plik nie do wczytania).
 */
function makeAudioEnv(opts) {
  const log = {
    voices: opts.voices || [],
    wypowiedzi: [],        // SpeechSynthesisUtterance oddane do speak()
    anulowania: 0,
    odtwarzacze: [],       // instancje Audio, w kolejności powstania
    rozpoznania: [],       // instancje SpeechRecognition, w kolejności powstania
    zachowaniePlay: opts.zachowaniePlay || "ok"
  };

  function Utterance(text) { this.text = text; }

  const speechSynthesis = opts.brakSyntezy ? null : {
    /* Kopia, nie ta sama tablica: przeglądarka też oddaje nową listę przy
       każdym wywołaniu. Bez tego dopisanie głosu w teście byłoby widoczne
       w silniku BEZ odświeżenia listy, więc test na `onvoiceschanged`
       przechodziłby także wtedy, gdyby tej gałęzi w ogóle nie było. */
    getVoices() { return log.voices.slice(); },
    speak(u) {
      /* Część WebView na Androidzie rzuca stąd wyjątkiem zamiast milczeć. */
      if (opts.mowaRzuca) throw new Error("speak niedostępne");
      log.wypowiedzi.push(u);
    },
    cancel() { log.anulowania++; },
    /* Przeglądarki sprzed 2018 nie mają addEventListener na syntezatorze,
       tylko `onvoiceschanged`. Ta gałąź istnieje właśnie dla nich. */
    addEventListener: opts.starySyntezator ? undefined : function () {}
  };

  /**
   * Rozpoznawanie mowy. To jedyne miejsce w kursie, z którego coś opuszcza
   * przeglądarkę ucznia (przeglądarki wysyłają nagranie na serwer dostawcy),
   * więc bramka zgody przed pierwszym uruchomieniem jest tu treścią, nie
   * ozdobą — a bez tej atrapy nie dawała się przejść ani w jedną, ani
   * w drugą stronę.
   */
  function Recognition() {
    const rec = {
      lang: "", interimResults: false, maxAlternatives: 0, continuous: true,
      onstart: null, onresult: null, onerror: null, onend: null,
      starty: 0, przerwania: 0,
      start() { rec.starty++; if (opts.startRzuca) throw new Error("nie da się"); },
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
        if (log.zachowaniePlay === "blad") return Promise.reject(new Error("nie wczytano"));
        /* Przed 2016 play() nie oddawał obietnicy: kod ma wtedy zgłosić
           start od razu, zamiast czekać na then(), który nie przyjdzie. */
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

/** Głos systemowy do listy `voices`: tyle pól, ile czyta pickVoice(). */
export function glos(name, lang) {
  return { name: name, lang: lang || "it-IT" };
}

/**
 * Zegar kalendarzowy piaskownicy.
 *
 * Passa liczy się po DNIACH, nie po milisekundach: `touchDay()` porównuje
 * dzisiejszą datę z ostatnią zapisaną i od tego zależy, czy seria rośnie,
 * czy zaczyna się od nowa. Test, który wpisuje wczorajszą datę wyliczoną z
 * prawdziwego zegara, przechodzi zawsze poza jedną minutą na dobę — o
 * północy data zmienia się w połowie testu i wychodzi „usterka passy".
 *
 * Podstawiamy więc CAŁĄ datę, nie samo `Date.now()`: `new Date()` bez
 * argumentów oddaje ustalony moment, a `new Date("2026-03-01T00:00:00")`
 * dalej parsuje napis, bo tego używa liczenie odstępu między dniami.
 *
 * @param {number} [now] moment w milisekundach; bez niego prawdziwy zegar
 */
function makeDate(now) {
  if (now === undefined) return Date;
  return class Zegar extends Date {
    constructor(...args) {
      if (args.length === 0) super(now);
      else super(...args);
    }
    static now() { return now; }
  };
}

/**
 * Adres strony i zdarzenia okna.
 *
 * Router pisze do `location.hash` i czeka, aż przeglądarka odda mu
 * `hashchange`; sam się nie woła. Atrapa, która tylko zapamiętuje napis,
 * pokazywałaby przejście na trasę jako martwe przypisanie — dlatego
 * przypisanie hasha odpala tu uchwyty, dokładnie jak w przeglądarce,
 * i dokładnie tak samo NIE odpala ich, gdy adres się nie zmienia.
 */
function makeWindowEvents() {
  const uchwyty = {};
  let hash = "";

  const location = {
    get hash() { return hash; },
    set hash(v) {
      const next = String(v);
      if (next === hash) return;
      hash = next;
      (uchwyty.hashchange || []).slice().forEach((fn) => fn({ type: "hashchange" }));
    }
  };

  return {
    location: location,
    addEventListener(type, fn) { (uchwyty[type] = uchwyty[type] || []).push(fn); },
    /** Poza API przeglądarki: wejście „z zewnątrz", np. z zakładki. */
    idzNa(nowy) { location.hash = nowy; },
    uchwyty: uchwyty
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

      /* Pobranie kopii zapasowej idzie przez kliknięcie w <a download>,
         którego nikt nie widzi. Bez tej metody cała ta gałąź kończyła się
         wyjątkiem w atrapie i nie dawała się przejść. */
      click() { el.klikniecia++; el.fire("click"); },
      klikniecia: 0,

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

  /**
   * Elementy strony zamawiane przez test (`box.el("main")`).
   *
   * Domyślnie `getElementById` oddaje null dla wszystkiego poza stosem
   * toastów, bo tyle wystarczało silnikowi stanu. Router sięga po
   * `#main`, żeby przestawić na nie fokus po zmianie trasy: bez tego
   * jedynym sposobem sprawdzenia routera byłaby przeglądarka. Nieznane
   * id nadal oddaje null — atrapa, która oddaje element na każde
   * pytanie, przepuszcza literówkę w id.
   */
  const naZamowienie = new Map();
  const utworzone = [];

  const document = {
    documentElement: { setAttribute() {}, getAttribute() { return null; } },
    head: head,
    getElementById(id) {
      if (id === "toastStack") return stack;
      return naZamowienie.has(id) ? naZamowienie.get(id) : null;
    },
    /* Utworzone elementy zostają na liście: pobranie kopii dzieje się
       przez <a download>, którego nigdzie nie ma w drzewie strony, więc
       bez tej listy nie da się sprawdzić ani nazwy pliku, ani adresu. */
    createElement() { const el = makeEl(); utworzone.push(el); return el; },
    querySelectorAll() { return []; },
    querySelector() { return null; },
    addEventListener() {}
  };

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
    wstrzykniete: wstrzykniete, czekajace: czekajace
  };
}

/**
 * Buduje piaskownicę i wykonuje w niej wskazane pliki silnika.
 *
 * @param {object} [options]
 * @param {string[]} [options.files]   pliki do wykonania, domyślnie sam core.js
 * @param {object}   [options.storage] gotowe localStorage (np. z limitem)
 * @param {object}   [options.seed]    wpisy do localStorage przed wczytaniem
 * @param {number}   [options.now]     ustalony moment dla `new Date()` i `Date.now()`
 * @param {Array}    [options.voices]  głosy systemowe widziane przez audio.js
 * @param {string}   [options.zachowaniePlay] czym kończy się play(): ok | not-allowed | blad
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
  const audio = makeAudioEnv(opts);
  const okno = makeWindowEvents();
  /** Co poszło na dysk ucznia: treść pobranych plików i zwolnione uchwyty. */
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
    Intl, JSON, Math, Date: makeDate(opts.now), Object, Array, String, Number, Boolean,
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
    Promise,
    location: okno.location,
    addEventListener: okno.addEventListener,
    speechSynthesis: audio.speechSynthesis,
    SpeechSynthesisUtterance: audio.Utterance,
    SpeechRecognition: audio.Recognition,
    Audio: audio.Player,

    /* Pobranie pliku z kopią zapasową. Blob trzyma treść w polu, zamiast ją
       zamykać jak przeglądarka: sensem tej gałęzi jest to, CO wyszło na dysk
       (czy znacznik kopii był już przestawiony w chwili serializacji), więc
       atrapa, która oddaje nieczytelny uchwyt, sprawdzałaby tylko, że nie
       rzuciło wyjątkiem. */
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
  const dom = makeDocument(toasts, notices);
  sandbox.document = dom.document;

  vm.createContext(sandbox);

  const box = {
    sandbox, storage, clock, toasts, notices, warnings,
    /** Co przeglądarka „usłyszała": wypowiedzi, anulowania, odtwarzacze. */
    audio: audio.log,
    /** Zamawia element o danym id, żeby getElementById go znalazł. */
    el(id) { return dom.el(id); },
    /** Pliki, które kurs wypuścił na dysk ucznia. */
    pobrania: pobrania,
    /** Elementy zbudowane przez document.createElement, w kolejności. */
    get utworzone() { return dom.utworzone; },
    /** Adres strony; przypisanie hasha odpala hashchange jak w przeglądarce. */
    okno: okno,
    /** Co nadal wisi na ekranie po upływie czasu — bez znikających toastów. */
    visible() { return dom.stack.children.map(c => c.textContent); },
    /** Wykonuje kolejny plik silnika w tej samej piaskownicy. */
    run(rel) {
      /* `filename` zostaje oryginalny także przy podmianie: po nim
         coverage.mjs rozpoznaje plik w zrzucie V8. */
      vm.runInContext(readFileSync(PODMIANY[rel] || join(ROOT, rel), "utf8"),
        sandbox, { filename: rel });
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
