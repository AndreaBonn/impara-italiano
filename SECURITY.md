**English** | [Italiano](./SECURITY.it.md)

# Security Policy

## Supported Versions

This repository carries no git tags. Security fixes are applied to the latest commit on `main`, which is also what GitHub Pages serves.

The service worker version constant (`SW_VERSION` in `sw.js`) identifies a release to the browser, not a supported version line.

## Reporting a Vulnerability

Report through [GitHub Security Advisories](https://github.com/AndreaBonn/impara-italiano/security/advisories/new).

Please include:

- a description of the issue
- steps to reproduce it
- expected against actual behavior
- what an attacker could achieve

Response timeline:

- acknowledgment within 72 hours
- fix for critical issues within 30 days
- public disclosure coordinated after the fix ships

This is a single-maintainer project with no funding and no bug bounty.

## Threat model

The course has no server, no database, no account and no session. There is no login to break into, no API to abuse and no other user's data to reach. That removes most of what a web application is normally attacked for, and it also means the measures below defend a narrower surface than the list length suggests.

What remains worth defending:

- foreign code attaching itself to the page (a browser extension, a dependency arriving over the network some day)
- a hostile file handed to the import features
- the one outbound channel that exists, speech recognition

## Security Measures Implemented

Each item below was verified in the code at the reference given.

- **Content Security Policy** restricting scripts to same-origin, with `object-src 'none'`, `base-uri 'none'` and `form-action 'none'` (`index.html:18`). The course contains no inline script and no `on*=` attribute, so `script-src 'self'` costs nothing. `style-src` keeps `'unsafe-inline'` because the engine builds `style="..."` attributes from computed values in 166 places, and with no server and no build step neither a nonce nor a hash can be produced. `frame-ancestors` is deliberately absent: browsers ignore it in a `<meta>` tag, and a rule that does nothing looks in the list exactly like one that works.

- **No third-party origin.** The page requests nothing outside its own directory. Fonts are self-hosted in `assets/fonts/`, and the service worker refuses to cache cross-origin responses (`sw.js`), because an opaque response in a cache is a size with no inspectable content.

- **Explicit consent before any voice leaves the browser**, gated in one place rather than at each call site (`assets/js/consent.js:42`, enforced inside `Audio2.listen`). Consent defaults to refused, is stored in settings and is revocable. A defense spread across the three views that call it today would hold until the fourth view is added.

- **Output escaping** for anything that reaches the DOM as text, covering `&`, `<`, `>`, `"` and `'` (`assets/js/text.js:102`, re-exposed as `Core.esc`).

- **Import validation on the progress file**: type enforced per field, schema version rejected if absent, below 1 or from a future release, and a hard ceiling of 8 MB before parsing (`assets/js/store.js:349`, `assets/js/store.js:387`).

- **Import validation on Anki decks**: ceilings of 50 000 rows and 8 MB, ragged rows and unterminated quotes rejected outright, and nothing written to state until the learner confirms a preview (`assets/js/anki.js:93`).

- **Hostile deck content stays a string**, asserted across three screens by browser tests rather than by inspection (`tests/dom/anki.spec.js:29`).

- **Dependency pinning**: `package-lock.json` is committed. The five dev dependencies never reach a learner's browser; the shipped application has zero runtime dependencies.

- **Eleven gates on every push and pull request** (`.github/workflows/ci.yml`), including lint, data validation, 826 unit assertions, 232 browser assertions, mutation testing and a 99 percent coverage floor.

## Known limitations

- **Speech recognition sends the learner's voice to their browser vendor.** This is inherent to the Web Speech API, not a defect in the course, and it cannot be avoided without a server the project deliberately does not have. It is disclosed to the learner in the consent dialog before the first use, it covers roughly 150 exercises and the fourteen conversations, and refusing turns those into written exercises.

- **Lesson theory fields are inserted as HTML on purpose**, so that emphasis and inline markup work inside explanations. This is safe because those fields come from `data/`, which is repository content. Anything originating from a learner must never be routed into them.

- **`style-src` allows inline styles.** See the CSP note above for why, and for what that does and does not open.

- **No automated dependency scanning.** Dependabot and equivalent are not configured.

- **No Subresource Integrity.** It would have nothing to protect: every script is same-origin and same-directory.

## Security Best Practices for Users

- Serve the course over HTTPS. Speech recognition and offline mode both require a secure context, and neither is available on plain `http` beyond `localhost`.
- Import progress and Anki files only from a source you trust. The validators bound the damage a malformed file can do; they do not make an unknown file trustworthy.
- Export your progress before clearing browsing data. Nothing about that is recoverable afterwards.
- If you would rather nothing left your device at all, decline the speech recognition consent. The course works in full without it.

## Out of Scope

The following are not treated as vulnerabilities here:

- self-XSS requiring the victim to paste code into their own console
- attacks that presuppose an already compromised browser, extension or operating system
- social engineering
- denial of service through excessive legitimate use, on a site with no server to exhaust
- the absence of features this project deliberately does not have (accounts, sync, server-side storage)
- publicly disclosed issues in third-party dependencies, which belong upstream
- missing security headers that require a server to send, on a repository published through GitHub Pages

## Acknowledgments

Researchers who disclose responsibly will be credited here.

---

[Back to README](./README.md)
