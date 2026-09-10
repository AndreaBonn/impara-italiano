/* ============================================================
   recordings.js — czy dane zdanie ma nagranie i pod jakim adresem.

   Wyjęte z audio.js, w którym mieszkały obok siebie trzy różne rzeczy:
   ten indeks, synteza systemowa i rozpoznawanie mowy. Tylko pierwsza z
   nich jest czystą funkcją treści napisu i tylko ona ma drugą, niezależną
   implementację po stronie budowania — a właśnie zgodność tych dwóch
   trzyma cały dźwięk kursu.

   KONTRAKT MIĘDZY JĘZYKAMI. Nazwa pliku to skrót FNV-1a 64-bit treści
   zdania, liczony DWA RAZY: tutaj przez hash(), a w scripts/build_audio.py
   przez audio_hash(). Rozjazd nie wywraca niczego widocznego — po prostu
   każde nagranie staje się nieosiągalne, kurs cicho schodzi na syntezę
   systemową, brzmi jak espeak i nie zgłasza ani jednego błędu. Ta sama
   parzystość dotyczy norm(): jej odpowiednik siedzi w
   scripts/extract_strings.mjs i decyduje, DLA JAKIEGO napisu powstał plik.

   Skrypt klasyczny. Wymaga data/audio-index.js (globalna AUDIO_INDEX).
   ============================================================ */
(function (global) {
  "use strict";

  var REC_LEN = 16;                       // długość skrótu w indeksie
  var index = global.AUDIO_INDEX || "";   // sklejone, posortowane skróty
  var indexCount = Math.floor(index.length / REC_LEN);

  var encoder = global.TextEncoder ? new global.TextEncoder() : null;
  var canHash = !!(encoder && typeof global.BigInt === "function");

  /** Normalizacja identyczna z tą w scripts/extract_strings.mjs. */
  function norm(text) {
    return String(text == null ? "" : text).replace(/\s+/g, " ").trim();
  }

  var FNV_OFFSET = canHash ? global.BigInt("0xcbf29ce484222325") : null;
  var FNV_PRIME = canHash ? global.BigInt("0x100000001b3") : null;
  var MASK64 = canHash ? global.BigInt("0xffffffffffffffff") : null;

  /** FNV-1a 64-bit po bajtach UTF-8, zapisany szesnastkowo na 16 znakach. */
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

  /** Wyszukiwanie binarne po rekordach stałej długości — bez fałszywych trafień. */
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

  /** Adres pliku. Katalog z dwóch pierwszych znaków skrótu: 256 katalogów zamiast jednego na 3,5 tysiąca plików. */
  function url(digest) {
    return "audio/" + digest.slice(0, 2) + "/" + digest + ".mp3";
  }

  /** Czy dany tekst ma nagranie. Odpowiedź jest synchroniczna, więc nie generuje 404. */
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
