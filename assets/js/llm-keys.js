/* ============================================================
   llm-keys.js — the student's API keys, deliberately outside the state.

   Their own container in localStorage, which store.js does not know about
   and which `exportState` and `importState` never walk. Three facts decided
   this, and all three are about a file that leaves the device:

   - `exportState` serialises the WHOLE state into the backup the course
     tells the student to keep. A credential that bills their card does not
     belong in a file they are encouraged to email to themselves;
   - `resetState` keeps `settings`, so "delete everything" would leave the
     secrets behind — the one place a student would expect them to go;
   - `validateImport` checks only that `settings` is an object, and `merge`
     writes any nested key it finds. Under settings, a backup file from
     somebody else could quietly overwrite which provider is asked first.

   Outside the state, the whole import machinery is simply irrelevant to
   this data: not carefully avoided, structurally unable to reach it. The
   price is real and accepted — restore a backup on a new device and the
   keys have to be typed again.

   The name: `Keys` is taken by keys.js, which is about typing Italian on a
   foreign keyboard.

   Classic script. Requires llm-providers.js for the list of names.
   ============================================================ */
(function (global) {
  "use strict";

  var STORE_KEY = "linguai.llm.v1";

  /* Shorter than this is not a key anyone issued — it is a paste that went
     wrong, and storing it buys a rejected request and a puzzled student. */
  var MIN_KEY = 8;

  /**
   * Reads the container.
   *
   * Storage can be blocked outright (private mode, a browser policy), and
   * the answer to that is the same as to an empty container: the feature
   * does not exist for this student. There is nothing to recover and
   * nothing worth saying.
   */
  function read() {
    try {
      var raw = global.localStorage.getItem(STORE_KEY);
      if (!raw) return {};
      var parsed = JSON.parse(raw);
      return parsed && typeof parsed === "object" ? parsed : {};
    } catch (e) {
      return {};
    }
  }

  /** Writes the container. `false` means the browser refused. */
  function write(box) {
    try {
      global.localStorage.setItem(STORE_KEY, JSON.stringify(box));
      return true;
    } catch (e) {
      return false;
    }
  }

  /**
   * Only names the course actually offers.
   *
   * A container carries whatever was in localStorage, which the student can
   * edit by hand and which a bookmarklet can write. Filtering through the
   * provider table means an unknown name never becomes an address anything
   * sends a key to.
   */
  function known(id) {
    return !!(global.LlmProviders && global.LlmProviders.get(id));
  }

  /** Every key currently stored, by provider. */
  function all() {
    var box = read();
    var out = {};
    Object.keys(box).forEach(function (id) {
      var k = box[id];
      if (known(id) && typeof k === "string" && k.length >= MIN_KEY) out[id] = k;
    });
    return out;
  }

  /** The one key, or an empty string. */
  function get(id) {
    var box = all();
    return Object.prototype.hasOwnProperty.call(box, id) ? box[id] : "";
  }

  /**
   * Stores one key, or removes it when the field is left empty.
   *
   * Trimmed, because a key pasted from a web page arrives with a newline
   * often enough that the alternative is a student certain they typed it
   * right and a provider certain they did not.
   */
  function set(id, key) {
    if (!known(id)) return false;
    var value = String(key == null ? "" : key).trim();
    var box = read();
    if (!value) delete box[id];
    else if (value.length < MIN_KEY) return false;
    else box[id] = value;
    return write(box);
  }

  function remove(id) { return set(id, ""); }

  /** Everything gone, including the container itself. */
  function clear() {
    try {
      global.localStorage.removeItem(STORE_KEY);
      return true;
    } catch (e) {
      return false;
    }
  }

  /** Whether any provider at all can be asked. */
  function any() {
    return Object.keys(all()).length > 0;
  }

  /**
   * A key with only its last four characters left.
   *
   * Settings show this instead of the key: enough for the student to tell
   * which of four they pasted where, useless to whoever is reading over
   * their shoulder or looking at the screenshot they posted asking for
   * help.
   */
  function fingerprint(key) {
    var k = String(key == null ? "" : key);
    if (k.length <= 4) return k ? "…" : "";
    return "…" + k.slice(-4);
  }

  /**
   * The stored keys removed from a message before anyone shows it.
   *
   * Providers quote the offending credential back inside their error text,
   * and that text goes on the settings page. Without this, "your key
   * sk-abc… is invalid" prints a working secret in the middle of the
   * screen, where a screenshot picks it up.
   */
  function redact(message) {
    var out = String(message == null ? "" : message);
    var box = all();
    /* Longest first. If one stored key happens to begin with another, the
       shorter one replaced first cuts the longer one in half and leaves its
       tail in the message — a partial secret on screen, which reads as
       redacted and is not. */
    Object.keys(box)
      .sort(function (a, b) { return box[b].length - box[a].length; })
      .forEach(function (id) {
        out = out.split(box[id]).join(fingerprint(box[id]));
      });
    return out;
  }

  global.LlmKeys = {
    all: all,
    get: get,
    set: set,
    remove: remove,
    clear: clear,
    any: any,
    fingerprint: fingerprint,
    redact: redact,
    STORE_KEY: STORE_KEY,
    MIN_KEY: MIN_KEY
  };

})(window);
