/* ============================================================
   sw.js — praca bez sieci.

   README obiecywał to od dawna („nie wymaga internetu po pierwszym
   wczytaniu"), ale bez service workera obietnica kończyła się na
   pierwszym odświeżeniu.

   Dwie strategie, każda z powodu:

   - NAGRANIA (audio/**) — cache-first, na zawsze. Nazwa pliku jest
     skrótem treści zdania (FNV-1a), więc plik pod danym adresem nigdy
     nie zmienia zawartości. Unieważnianie takiej pamięci nie ma sensu:
     zmienione zdanie dostaje po prostu inny adres.

   - KOD I DANE — network-first, z pamięci dopiero przy braku sieci.
     Projekt nie ma kroku budowania, więc pliki nie mają skrótu w
     nazwie i jedyną wersją jest stała niżej, podnoszona ręcznie.
     Zapomniane podniesienie MUSI kosztować jeden obieg po sieci, a nie
     zamrożenie ucznia na starym kodzie — czego on nie umie ani
     zauważyć, ani odkręcić.

   Cudzych domen nie dotykamy w ogóle (fonty Google): nieprzejrzysta
   odpowiedź w pamięci to rozmiar bez treści i błędy nie do zdiagnozowania.
   ============================================================ */

/* Podnieś przy każdej zmianie plików z PRECACHE. */
var SW_VERSION = "v5";

var SHELL_CACHE = "linguai-shell-" + SW_VERSION;
/* Nagrania są adresowane treścią, więc ich pamięć przeżywa zmianę wersji. */
var AUDIO_CACHE = "linguai-audio";

var PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/app.css",
  "./assets/js/core.js",
  "./assets/js/i18n.js",
  "./assets/js/audio.js",
  "./assets/js/verbs.js",
  "./assets/js/exercises.js",
  "./assets/js/errors-key.js",
  "./assets/js/errors.js",
  "./assets/js/drills-lex.js",
  "./assets/js/drills.js",
  "./assets/js/views.js",
  "./assets/js/views-train.js",
  "./assets/js/views-today.js",
  "./assets/js/placement.js",
  "./assets/js/views-phonetics.js",
  "./assets/js/views-placement.js",
  "./assets/js/views-reading.js",
  "./assets/js/search.js",
  "./assets/js/keys.js",
  "./assets/js/app.js",
  "./data/audio-index.js",
  "./data/i18n/ui-pl.js",
  "./data/i18n/ui-en.js",
  "./data/i18n/ui-es.js",
  "./data/i18n/ui-fr.js",
  "./data/i18n/ui-de.js",
  "./data/core/curriculum-index.js",
  "./data/core/grammar-reference.js",
  "./data/core/conversations.js",
  "./data/core/phonetics.js",
  "./data/core/readings.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png"
];

function isAudio(url) { return /\/audio\/[0-9a-f]{2}\/[0-9a-f]{16}\.mp3$/.test(url.pathname); }

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      /* addAll przewraca się w całości, gdy padnie JEDEN plik; wolimy
         wczytać tyle, ile się da, i nie zostawić ucznia bez niczego. */
      .then(function (c) {
        return Promise.all(PRECACHE.map(function (u) {
          return c.add(u).catch(function () { return null; });
        }));
      })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (klucze) {
      return Promise.all(klucze.map(function (k) {
        /* Stare wersje guska idą precz; pamięć nagrań zostaje. */
        if (k === SHELL_CACHE || k === AUDIO_CACHE) return null;
        if (k.indexOf("linguai-") !== 0) return null;
        return caches.delete(k);
      }));
    }).then(sweepAudio).then(function () { return self.clients.claim(); })
  );
});

/**
 * Wyrzuca z pamięci nagrania, których nie ma już w indeksie.
 *
 * Nazwy są skrótami treści, więc poprawione zdanie nie nadpisuje pliku,
 * tylko zostawia stary jako sierotę. Bez tego pamięć nagrań mogłaby
 * tylko rosnąć, przez wszystkie kolejne wydania kursu.
 */
function sweepAudio() {
  return fetch("./data/audio-index.js", { cache: "no-store" })
    .then(function (r) { return r.ok ? r.text() : null; })
    .then(function (src) {
      if (!src) return null;
      var m = /AUDIO_INDEX\s*=\s*"([0-9a-f]*)"/.exec(src);
      if (!m || !m[1]) return null;
      var indeks = m[1];
      return caches.open(AUDIO_CACHE).then(function (c) {
        return c.keys().then(function (zapisane) {
          return Promise.all(zapisane.map(function (req) {
            var hash = (new URL(req.url).pathname.match(/([0-9a-f]{16})\.mp3$/) || [])[1];
            if (hash && indeks.indexOf(hash) < 0) return c.delete(req);
            return null;
          }));
        });
      });
    })
    .catch(function () { return null; });   // sprzątanie nie ma prawa zablokować aktywacji
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  /* Cudza domena: nie dotykamy. Fonty Google odpowiadają nieprzejrzyście,
     a taka odpowiedź w pamięci to rozmiar bez możliwości sprawdzenia treści. */
  if (url.origin !== self.location.origin) return;

  if (isAudio(url)) {
    e.respondWith(
      caches.open(AUDIO_CACHE).then(function (c) {
        return c.match(req).then(function (hit) {
          if (hit) return hit;
          return fetch(req).then(function (res) {
            if (res && res.ok) c.put(req, res.clone());
            return res;
          });
        });
      })
    );
    return;
  }

  /* Kod i dane: najpierw sieć, pamięć jako siatka pod spodem. */
  e.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) {
        var kopia = res.clone();
        caches.open(SHELL_CACHE).then(function (c) { c.put(req, kopia); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        if (hit) return hit;
        /* Nawigacja bez sieci i bez trafienia: oddajemy powłokę, bo trasy
           są na hashu i strona sama dojdzie, gdzie ma być. */
        if (req.mode === "navigate") return caches.match("./index.html");
        return Response.error();
      });
    })
  );
});
