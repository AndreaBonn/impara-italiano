/* ============================================================
   recordings.js — whether a sentence has a recording, and at what address.

   Pulled out of audio.js, where three different things lived side by side:
   this index, system speech synthesis and speech recognition. Only the
   first is a pure function of the string's content, and only it has a
   second, independent implementation on the build side — and it is exactly
   the agreement between those two that holds the course audio together.

   THE CONTRACT BETWEEN THE TWO LANGUAGES. The file name is the FNV-1a
   64-bit hash of the sentence, computed TWICE: here by hash(), and in
   scripts/build_audio.py by audio_hash(). A drift breaks nothing visible —
   every recording simply becomes unreachable, the course quietly falls
   back to system synthesis, sounds like espeak and reports not a single
   error. The same parity applies to norm(): its counterpart sits in
   scripts/extract_strings.mjs and decides FOR WHICH string the file was
   produced.

   Classic script. Requires data/audio-index.js (the global AUDIO_INDEX).
   ============================================================ */
(function (global) {
  "use strict";

  var REC_LEN = 16;                       // length of a hash in the index
  var index = global.AUDIO_INDEX || "";   // concatenated, sorted hashes
  var indexCount = Math.floor(index.length / REC_LEN);

  var encoder = global.TextEncoder ? new global.TextEncoder() : null;
  var canHash = !!(encoder && typeof global.BigInt === "function");

  /** Normalization identical to the one in scripts/extract_strings.mjs. */
  function norm(text) {
    return String(text == null ? "" : text).replace(/\s+/g, " ").trim();
  }

  var FNV_OFFSET = canHash ? global.BigInt("0xcbf29ce484222325") : null;
  var FNV_PRIME = canHash ? global.BigInt("0x100000001b3") : null;
  var MASK64 = canHash ? global.BigInt("0xffffffffffffffff") : null;

  /** FNV-1a 64-bit over UTF-8 bytes, written in hex on 16 characters. */
  function hash(text) {
    if (!canHash) return null;
    var bytes = encoder.encode(text);
    var h = FNV_OFFSET;
    for (var i = 0; i < bytes.length; i++) {
      h = ((h ^ global.BigInt(bytes[i])) * FNV_PRIME) & MASK64;
    }
    var hex = h.toString(16);
    while (hex.length < REC_LEN) hex = "0" + hex;
    return hex;
  }

  /** Binary search over fixed-length records — no false hits. */
  function inIndex(digest) {
    if (!digest || !indexCount) return false;
    var lo = 0, hi = indexCount - 1;
    while (lo <= hi) {
      var mid = (lo + hi) >> 1;
      var rec = index.substr(mid * REC_LEN, REC_LEN);
      if (rec === digest) return true;
      if (rec < digest) lo = mid + 1; else hi = mid - 1;
    }
    return false;
  }

  /** File address. The directory comes from the first two characters of the hash: 256 directories instead of one holding 3500 files. */
  function url(digest) {
    return "audio/" + digest.slice(0, 2) + "/" + digest + ".mp3";
  }

  /** Whether a given text has a recording. The answer is synchronous, so it produces no 404s. */
  function has(text) {
    if (!canHash || !indexCount) return false;
    return inIndex(hash(norm(text)));
  }

  global.Recordings = {
    norm: norm,
    hash: hash,
    inIndex: inIndex,
    url: url,
    has: has,
    count: indexCount,
    available: canHash && indexCount > 0
  };

})(window);
