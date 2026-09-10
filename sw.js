/* ============================================================
   sw.js — working without a network.

   The README promised this for a long time ("no internet needed after the
   first load"), but without a service worker the promise ended at the
   first refresh.

   Two strategies, each with a reason:

   - RECORDINGS (audio/**) — cache-first, forever. The file name is the
     hash of the sentence's content (FNV-1a), so the file at a given
     address never changes its contents. Invalidating such a cache makes no
     sense: a corrected sentence simply gets a different address.

   - CODE AND DATA — network-first, from the cache only when the network is
     gone. The project has no build step, so the files have no hash in
     their names and the only version is the constant below. A version
     mismatch MUST cost one round trip over the network rather than
     freezing the student on old code — which they can neither notice nor
     undo.

   A new version does not take the course over by itself: it waits in the
   queue until the page (assets/js/pwa.js) asks the student about it.
   Details at `install` and at the `message` handler.

   We do not touch other origins at all: an opaque response in the cache is
   a size with no content and errors that cannot be diagnosed. Since the
   fonts have lived in assets/fonts/, no request from the course goes there
   anyway.
   ============================================================ */

/* The release, followed after the dot by a fingerprint of the PRECACHE
   file contents. The fingerprint is written by a script:
   `node scripts/check_swversion.mjs --napraw`.

   The browser recognises a new release by the BYTES of this file and by
   nothing else. As long as the version was just a number rewritten by
   hand, a fix in core.js did not change sw.js by a single byte: an update
   had no way to announce itself until somebody remembered it. The
   fingerprint changes by itself at every change of content, and the CI
   gate does not let it go stale.

   A human raises "v35" when they want to name a release; the fingerprint
   is not their job. */
var SW_VERSION = "v35.9d01a992f173";

var SHELL_CACHE = "linguai-shell-" + SW_VERSION;
/* Recordings are content-addressed, so their cache survives a version change. */
var AUDIO_CACHE = "linguai-audio";

var PRECACHE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/css/app.css",
  "./assets/js/fsrs.js",
  "./assets/js/text.js",
  "./assets/js/notice.js",
  "./assets/js/store.js",
  "./assets/js/registry.js",
  "./assets/js/srs.js",
  "./assets/js/core.js",
  "./assets/js/i18n.js",
  "./assets/js/i18n-merge.js",
  "./assets/js/consent.js",
  "./assets/js/llm-providers.js",
  "./assets/js/llm-prompts.js",
  "./assets/js/llm-rules.js",
  "./assets/js/llm-keys.js",
  "./assets/js/llm.js",
  "./assets/js/recordings.js",
  "./assets/js/audio.js",
  "./assets/js/recorder.js",
  "./assets/js/views-shadow.js",
  "./assets/js/views-speed.js",
  "./assets/js/cils.js",
  "./assets/js/cils-run.js",
  "./assets/js/cils-html.js",
  "./assets/js/views-cils.js",
  "./assets/js/verbs-data.js",
  "./assets/js/verbs.js",
  "./assets/js/exercises.js",
  "./assets/js/exercises-choice.js",
  "./assets/js/exercises-text.js",
  "./assets/js/exercises-voice.js",
  "./assets/js/errors-key.js",
  "./assets/js/errors.js",
  "./assets/js/drills-lex.js",
  "./assets/js/drills.js",
  "./assets/js/views.js",
  "./assets/js/views-path.js",
  "./assets/js/views-lesson.js",
  "./assets/js/views-review.js",
  "./assets/js/views-grammar.js",
  "./assets/js/views-conjugator.js",
  "./assets/js/views-lexicon.js",
  "./assets/js/views-progress.js",
  "./assets/js/views-settings.js",
  "./assets/js/talk-run.js",
  "./assets/js/views-talk.js",
  "./assets/js/views-train.js",
  "./assets/js/views-today.js",
  "./assets/js/placement.js",
  "./assets/js/views-phonetics.js",
  "./assets/js/views-placement.js",
  "./assets/js/views-welcome.js",
  "./assets/js/views-guide.js",
  "./assets/js/views-privacy.js",
  "./assets/js/writing.js",
  "./assets/js/lemma-morf.js",
  "./assets/js/lemma.js",
  "./assets/js/views-lookup.js",
  "./assets/js/anki.js",
  "./assets/js/frequency.js",
  "./assets/js/views-frequency.js",
  "./assets/js/views-falsi.js",
  "./assets/js/views-reading.js",
  "./assets/js/views-writing.js",
  "./assets/js/search.js",
  "./assets/js/keys.js",
  "./assets/js/router.js",
  "./assets/js/app.js",
  "./assets/js/pwa-rules.js",
  "./assets/js/pwa.js",
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
  "./data/core/cils.js",
  "./data/core/readings.js",
  "./data/core/interference.js",
  "./data/i18n/pl/interference.js",
  "./data/i18n/en/interference.js",
  "./data/i18n/es/interference.js",
  "./data/i18n/fr/interference.js",
  "./data/i18n/de/interference.js",
  "./data/core/frequenza.js",
  "./data/core/writing.js",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  /* The fonts. They used to come from fonts.googleapis.com and for that
     reason NEVER reached the cache: the `fetch` handler below bails out at
     the first foreign origin. Without a network the page therefore looked
     different than with one, which read like a fault and was written down
     in the rule. */
  "./assets/fonts/fraunces-latin.woff2",
  "./assets/fonts/fraunces-latin-ext.woff2",
  "./assets/fonts/inter-latin.woff2",
  "./assets/fonts/inter-latin-ext.woff2"
];

function isAudio(url) { return /\/audio\/[0-9a-f]{2}\/[0-9a-f]{16}\.mp3$/.test(url.pathname); }

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(SHELL_CACHE)
      /* addAll fails as a whole when ONE file fails; we would rather load
         as much as we can and not leave the student with nothing.

         Resilience, however, is not the same as silence. The error used to
         go into the bin without the file name, so the first offline start
         failed on a missing script with no way to check which one. The name
         now goes to the worker console (DevTools -> Application -> Service
         Workers), and the installation ends the same way it did before:
         deliberately. */
      .then(function (c) {
        return Promise.all(PRECACHE.map(function (u) {
          return c.add(u).catch(function (blad) {
            console.warn("[sw] precache pominął: " + u, blad);
            return null;
          });
        }));
      })
  );
  /* No skipWaiting: a new version does NOT take the course over by itself.
     Taking over in the background leaves an open page running the old
     release's code over the new release's files — and with no build step
     the file names do not change, so the old code reaches for addresses the
     new release no longer knows. Instead we wait in the queue, and the page
     announces it to the student (assets/js/pwa.js) and asks whether now. */
});

/**
 * Taking over ON THE PAGE'S REQUEST, never of its own accord.
 *
 * The only road from "waiting" to "active" before every tab is closed. On
 * the other side there is an "Update" button, not a timer and not a
 * heuristic: the student decides when to interrupt their own lesson.
 */
self.addEventListener("message", function (e) {
  if (e.data && e.data.typ === "przejmij") self.skipWaiting();
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (klucze) {
      return Promise.all(klucze.map(function (k) {
        /* Old worker versions go away; the recording cache stays. */
        if (k === SHELL_CACHE || k === AUDIO_CACHE) return null;
        if (k.indexOf("linguai-") !== 0) return null;
        return caches.delete(k);
      }));
    }).then(sweepAudio).then(function () { return self.clients.claim(); })
  );
});

/**
 * Drops the recordings that are no longer in the index from the cache.
 *
 * The names are content hashes, so a corrected sentence does not overwrite
 * a file but leaves the old one as an orphan. Without this the recording
 * cache could only grow, across every successive release of the course.
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
    .catch(function () { return null; });   // cleanup has no right to block activation
}

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var url = new URL(req.url);
  /* A foreign origin: we do not touch it. An opaque response in the cache is
     a size with no way to check the contents. The course itself no longer
     reaches outside anywhere; this branch defends against whatever a browser
     extension attaches. */
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

  /* Code and data: the network first, the cache as a net underneath. */
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
        /* A navigation with no network and no hit: we return the shell,
           because the routes are on the hash and the page will find its own
           way to where it should be. */
        if (req.mode === "navigate") return caches.match("./index.html");
        return Response.error();
      });
    })
  );
});
