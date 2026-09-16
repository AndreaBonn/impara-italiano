/* ============================================================
   mutations.mjs — whether the unit tests can see red
   Usage:  node scripts/mutations.mjs [--tylko <part of a description>]

   Every row of the table below breaks ONE decision in the engine and names
   the test file that must then fall over. A mutation after which the suite
   stays green means nobody is guarding that decision.

   WHY THIS IS NOT THE SAME AS COVERAGE. `coverage.mjs` says a line was
   EXECUTED. Execution is not verification: the assertion
   `assert.ok(!out.includes("js-play"))` runs the whole generator and passes
   even when the generator produces NOTHING. I wrote three such assertions
   on the day this table was created, and all three had 100% coverage. They
   only came out here:

   - an empty audio block entering the reading section (I counted the
     buttons, not the block wrapping them);
   - `cils-h` as a substring also matching `cils-hint`;
   - `cils.limit` as a substring matching `cils.limitLabel`, so the whole
     warning about the simulator's limit could disappear on green.

   THE SCOPE IS NARROW AND MEANT TO BE DECLARED. The table covers four files
   (`cils-html.js`, `lemma-morf.js`, `pwa-rules.js`, `pwa.js`) out of the
   sixty-odd in `assets/js/`. A result of "34/34" does not mean "the engine
   is verified", it means "those 34 decisions are verified". Adding a file of
   pure functions is a good moment to add a row here; there is no obligation
   to cover the whole engine.

   The exception to "pure functions" is `pwa.js`, which is not a pure
   function: it holds the WIRING of the rules to the service worker states,
   and any mistake in that wiring looks on screen like an absent update,
   that is like nothing. The four mutations below are four ways this feature
   stops working without a single red test.

   IT DOES NOT TOUCH FILES IN THE WORKING TREE. The mutated version lives in
   a temporary directory, and `tests/unit/_harness.mjs` reads it through
   `LINGUAI_PODMIANA`. The first version mutated the file in place and
   restored it in `finally`, with a SIGINT handler — the handler was useless,
   because the whole gate is synchronous and the event loop does not get a
   word in before it ends: the signal waited in the queue until the very end
   of the run. Worse, merely registering the handler disabled the default
   process kill, so Ctrl+C stopped stopping the script. Now there is nothing
   to restore.

   Three ways this gate ends in an error (all verified): a mutation with no
   red, a fragment absent from the file (the table rotted after a refactor)
   and a fragment occurring several times (the substitution would hit the
   first occurrence and would measure something other than its description
   says).
   ============================================================ */
import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join, basename } from "node:path";
import { tmpdir } from "node:os";
import { spawnSync } from "node:child_process";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");

const HTML = "assets/js/cils-html.js";
const MORF = "assets/js/lemma-morf.js";
const REG = "assets/js/pwa-rules.js";
const PWA = "assets/js/pwa.js";
const T_HTML = "tests/unit/cils-html.test.mjs";
const T_MORF = "tests/unit/lemma-morf.test.mjs";
const T_REG = "tests/unit/pwa-rules.test.mjs";
const T_PWA = "tests/unit/pwa.test.mjs";
const RULES = "assets/js/llm-rules.js";
const PROV = "assets/js/llm-providers.js";
const T_RULES = "tests/unit/llm-rules.test.mjs";
const T_PROV = "tests/unit/llm-providers.test.mjs";
const PROMPTS = "assets/js/llm-prompts.js";
const T_PROMPTS = "tests/unit/llm-prompts.test.mjs";
const RET = "assets/js/retention-rules.js";
const T_RET = "tests/unit/retention-rules.test.mjs";
const ICS = "assets/js/ics.js";
const T_ICS = "tests/unit/ics.test.mjs";
const RAPORT = "assets/js/cils-report.js";
const T_RAPORT = "tests/unit/cils-report.test.mjs";
const CHAT = "assets/js/chat-rules.js";
const T_CHAT = "tests/unit/chat-rules.test.mjs";
const PROV_CHAT = "tests/unit/llm-providers.test.mjs";
const STORE = "assets/js/store.js";
const T_STORE = "tests/unit/store.test.mjs";
const FLASH = "assets/js/flash-rules.js";
const T_FLASH = "tests/unit/flash-rules.test.mjs";
const RUN = "assets/js/flash-run.js";
const T_RUN = "tests/unit/flash-run.test.mjs";

/**
 * The mutations. `z` must occur in the file EXACTLY ONCE — with two
 * occurrences the substitution would hit the first of them and nobody would
 * notice that the mutation measures something other than its description
 * says.
 */
const MUTACJE = [
  /* ---- cils-html.js: the answer grid ---- */
  { plik: HTML, test: T_HTML, opis: "radio: one group for the whole task",
    z: 'var nome = "p" + n + "i" + i;', na: 'var nome = "p" + n;' },
  { plik: HTML, test: T_HTML, opis: "cloze: a gap after every piece of text",
    z: "var buco = i < (p.items || []).length", na: "var buco = i < (p.testo || []).length" },
  { plik: HTML, test: T_HTML, opis: "listening: the audio block in the reading section too",
    z: 'if (sez.id === "ascolto") testa += ascolti(p, n);', na: "testa += ascolti(p, n);" },
  { plik: HTML, test: T_HTML, opis: "scritta: every prompt selected at once",
    z: '(i === 0 ? " checked" : "") + "> " + esc(tr.it)', na: '" checked> " + esc(tr.it)' },
  { plik: HTML, test: T_HTML, opis: "orale: a record button with no microphone",
    z: "(powod ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :",
    na: "(false ? '<p class=\"cils-hint\">' + esc(t(powod)) + \"</p>\" :" },
  { plik: HTML, test: T_HTML, opis: "orale: no topic selected up front",
    z: '(i === 0 ? " checked" : "") + "> " + esc(a.it)', na: '"> " + esc(a.it)' },

  /* ---- cils-html.js: the list and the summary ---- */
  { plik: HTML, test: T_HTML, opis: "list: the warning about the limit removed",
    z: 'esc(t("cils.limit")) + "</div>" +', na: '"</div>" +' },
  { plik: HTML, test: T_HTML, opis: "list: only the first simulation",
    z: "(symulacje || []).map(function (s) {", na: "(symulacje || []).slice(0, 1).map(function (s) {" },
  { plik: HTML, test: T_HTML, opis: "list: the start button without the simulation id",
    z: 'data-id="', na: 'data-sim="' },
  { plik: HTML, test: T_HTML, opis: "abilità: no marker for time that ran out",
    z: 'var scad = czyScadla(a) ? " " + t("cils.expiredMark") : "";', na: 'var scad = "";' },
  { plik: HTML, test: T_HTML, opis: "abilità: always a tick, never a cross",
    z: 'd.punti + " / " + d.max + " " + (d.sopraSoglia ? "✓" : "✗")',
    na: 'd.punti + " / " + d.max + " ✓"' },
  { plik: HTML, test: T_HTML, opis: "abilità: an unmeasured skill shown as a result",
    z: "var val = d.misurata", na: "var val = true" },
  { plik: HTML, test: T_HTML, opis: "summary: the verdict always undetermined",
    z: 'esc(t(esito.verdetto === "sotto-soglia" ? "cils.verdictBelow" : "cils.verdictUnknown"))',
    na: 'esc(t("cils.verdictUnknown"))' },
  { plik: HTML, test: T_HTML, opis: "summary: without the source of the threshold",
    z: 'esc(t("cils.thresholdSource")) + "</p></div>" +\n      scritta',
    na: '"</p></div>" +\n      scritta' },
  { plik: HTML, test: T_HTML, opis: "summary: the production cards never appear",
    z: "scritta(pisemna) + orale(ustna) +", na: '"" +' },
  { plik: HTML, test: T_HTML, opis: "summary: without the way back to the list",
    z: 'class="btn btn--ghost js-list"', na: 'class="btn btn--ghost js-brak"' },
  { plik: HTML, test: T_HTML, opis: "written: a card for an untouched section",
    z: 'if (!pisemna) return "";', na: 'if (false) return "";' },
  /* The same expression now sits in both production cards, so each mutation
     carries enough of its own line to be unambiguous: with two occurrences
     the substitution would hit the first and measure the other card. */
  { plik: HTML, test: T_HTML, opis: "written: the requirement label replaced by the key",
    z: 'var wym = ((pisemna.traccia || {}).richiede || [])[i] || {};',
    na: 'var wym = {};' },
  { plik: HTML, test: T_HTML, opis: "oral: the requirement label replaced by the key",
    z: "var wym = (arg.richiede || [])[i] || {};", na: "var wym = {};" },
  { plik: HTML, test: T_HTML, opis: "oral: an empty account analysed as if it were an answer",
    z: '    if (!testo.trim()) {', na: "    if (false) {" },

  /* ---- lemma-morf.js: the form rules ---- */
  { plik: MORF, test: T_MORF, opis: "slowa: a lone auxiliary is dropped too",
    z: "if (cz.length < 2) return cz;", na: "if (false) return cz;" },
  { plik: MORF, test: T_MORF, opis: "enclitics: the length threshold too short",
    z: "if (w.length <= z.length + 2) return;", na: "if (w.length <= z.length) return;" },
  { plik: MORF, test: T_MORF, opis: "enclitics: the infinitive without rebuilding the -e",
    z: 'if (/[aei]r$/.test(rdzen)) out.push(rdzen + "e");', na: "if (false) out.push(rdzen);" },
  { plik: MORF, test: T_MORF, opis: "rule: amiche reduces to a non-existent word",
    z: '[/che$/, "ca"],      // amiche -> amica', na: '[/che$/, "cx"],      // amiche -> amica' },
  { plik: MORF, test: T_MORF, opis: "superlative: without rebuilding the hard k",
    z: '[/chissim[oaie]$/, "co"],', na: '[/chissim[oaie]$/, "o"],' },
  { plik: MORF, test: T_MORF, opis: "infinitive: reflexive forms rejected",
    z: "return /^[a-zàèéìòù]+(are|ere|ire|arsi|ersi|irsi)$/",
    na: "return /^[a-zàèéìòù]+(are|ere|ire)$/" },
  { plik: MORF, test: T_MORF, opis: "function words: without lowering the case",
    z: "return !!funkcyjneSet[String(w).toLowerCase()];", na: "return !!funkcyjneSet[String(w)];" },
  { plik: MORF, test: T_MORF, opis: "function words: the numerals left out of the set",
    z: "FUNKCYJNE.concat(LICZEBNIKI).forEach", na: "FUNKCYJNE.forEach" },
  { plik: MORF, test: T_MORF, opis: "accent: the tonic accent is not removed",
    z: "return w.replace(/[àáèéìíòóùú]/g, function (c) { return AKCENTY[c] || c; });",
    na: "return w;" },

  /* ---- pwa-rules.js: the rules for announcing a new version ---- */
  { plik: REG, test: T_REG, opis: "announcement: the first visit treated as an update",
    z: "return !!stan.czeka && !!stan.kontrolowana;", na: "return !!stan.czeka;" },
  { plik: REG, test: T_REG, opis: "threshold: a clock moved back stops the questions for good",
    z: "if (teraz < ostatnie) return true;", na: "if (false) return true;" },
  { plik: REG, test: T_REG, opis: "reload: without the loop guard",
    z: "return !!stan.kontrolowana && !stan.juzPrzeladowana;", na: "return !!stan.kontrolowana;" },

  /* ---- pwa.js: wiring the rules to the browser states ---- */

  /* The most obvious defect and the hardest to see: at the moment of
     `updatefound` the worker is in "installing" and `waiting` is empty. */
  { plik: PWA, test: T_PWA, opis: "announcement read at updatefound, not after installation",
    z: 'reg.addEventListener("updatefound", function () { sledz(reg.installing); });',
    na: 'reg.addEventListener("updatefound", function () { zapowiedz(reg.waiting); });' },
  { plik: PWA, test: T_PWA, opis: "update reloads at once instead of asking the worker",
    z: "czeka.postMessage({ typ: \"przejmij\" });", na: "global.location.reload();" },
  { plik: PWA, test: T_PWA, opis: "update asks the worker from announcement time, not the current one",
    z: "var czeka = (rejestracja && rejestracja.waiting) || worker;", na: "var czeka = worker;" },
  { plik: PWA, test: T_PWA, opis: "registration on \"load\" only, without checking readyState",
    z: 'if (global.document.readyState === "complete") register();', na: "if (false) register();" },
  { plik: PWA, test: T_PWA, opis: "the question to the server without a threshold",
    z: "if (!global.PwaRules.sprawdzac(ostatnieSprawdzenie, teraz)) return false;",
    na: "if (false) return false;" },
  /* ---- llm-rules.js: what the model is allowed to change ---- */
  { plik: RULES, test: T_RULES, opis: "clamp: an accepted answer can be rejected",
    z: "    if (localOk) return { ok: true, promoted: false, comment: \"\" };",
    na: "    if (false) return { ok: true, promoted: false, comment: \"\" };" },
  { plik: RULES, test: T_RULES, opis: "verdict: any truthy value promotes",
    z: "      promote: esito.replace(\"Ì\", \"I\") === \"SI\",",
    na: "      promote: !!esito," },
  { plik: RULES, test: T_RULES, opis: "verdict: the accented word is rejected",
    z: "esito.replace(\"Ì\", \"I\") === \"SI\"", na: "esito === \"SI\"" },
  { plik: RULES, test: T_RULES, opis: "cascade: a provider with no key is asked anyway",
    z: "      if (own(have, id) && !own(out, id)) return id;",
    na: "      if (!own(out, id)) return id;" },
  { plik: RULES, test: T_RULES, opis: "cascade: a timeout is reported as a rejected key",
    z: "    if (permanent.length !== list.length) return null;", na: "" },
  { plik: RULES, test: T_RULES, opis: "comment: the cap on length removed",
    z: "      .slice(0, MAX_COMMENT);", na: "      .slice(0);" },

  /* ---- llm-providers.js: reading four different answers ---- */
  { plik: PROV, test: T_PROV, opis: "anthropic: the first block read as the answer",
    z: "        var text = blocks\n          .filter(function (b) { return b && b.type === \"text\"; })\n          .map(function (b) { return b.text || \"\"; })\n          .join(\"\");",
    na: "        var text = (blocks[0] && blocks[0].text) || \"\";" },
  { plik: PROV, test: T_PROV, opis: "errors: a rate limit retires the provider",
    z: "    if (status === 401 || status === 403 || status === 404) return \"permanent\";",
    na: "    if (status !== 200) return \"permanent\";" },
  { plik: PROV, test: T_PROV, opis: "lookup: an inherited name passes for a provider",
    z: "    return Object.prototype.hasOwnProperty.call(PROVIDERS, id) ? PROVIDERS[id] : null;",
    na: "    return PROVIDERS[id] || null;" },
  { plik: PROV, test: T_PROV, opis: "gemini: a withheld answer read as transient",
    z: "        if (!c) return { error: \"answer withheld\", kind: \"permanent\" };",
    na: "        if (!c) return { error: \"answer withheld\", kind: \"transient\" };" },
  { plik: PROV, test: T_PROV, opis: "gemini: thinking left unbounded",
    z: "            maxOutputTokens: MAX_OUT,\n            thinkingConfig: { thinkingLevel: \"low\" }",
    na: "            maxOutputTokens: MAX_OUT" },
  { plik: PROV, test: T_PROV, opis: "gemini: the temperature the vendor asks us not to send",
    z: "            thinkingConfig: { thinkingLevel: \"low\" }",
    na: "            temperature: 0, thinkingConfig: { thinkingLevel: \"low\" }" },
  { plik: PROV, test: T_PROV, opis: "openai: the temperature the family may refuse",
    z: "        delete b.temperature;\n", na: "" },
  { plik: PROV, test: T_PROV, opis: "openai: reasoning left at the vendor's default",
    z: "        b.reasoning_effort = \"none\";\n", na: "" },
  { plik: PROV, test: T_PROV, opis: "openai: the ceiling that does not count reasoning",
    z: "        b.max_completion_tokens = b.max_tokens;\n        delete b.max_tokens;\n",
    na: "" },

  /* ---- llm-prompts.js: what the model is actually told ---- */
  { plik: PROMPTS, test: T_PROMPTS, opis: "judge: a comment longer than the one kept",
    z: "  var MAX_COMMENT_CHARS = 160;", na: "  var MAX_COMMENT_CHARS = 400;" },
  { plik: PROMPTS, test: T_PROMPTS,
    opis: "writing: the level invented when the task has none",
    z: "      ? \"a learner at level \" + cefr + \" of the CEFR\"\n      : \"a learner\";",
    na: "      ? \"a learner at level \" + cefr + \" of the CEFR\"\n      : \"a learner at level B1 of the CEFR\";" },
  { plik: PROMPTS, test: T_PROMPTS, opis: "writing: the level never reaches the model",
    z: "      system: writingSystem(lang, t.cefr),",
    na: "      system: writingSystem(lang)," },

  /* ---- retention-rules.js: the three decisions behind coming back ---- */
  { plik: RET, test: T_RET, opis: "storage: asked before a single lesson is done",
    z: "    return (s.lekcje || 0) >= PROG_MIEJSCA;", na: "    return true;" },
  { plik: RET, test: T_RET, opis: "storage: the one attempt spent twice",
    z: "    if (s.pytano) return false;        /* our one attempt is spent */\n", na: "" },
  { plik: RET, test: T_RET, opis: "install: a refusal that comes back",
    z: "    if (s.odrzucona) return false;     /* asked and answered, for good */\n", na: "" },
  { plik: RET, test: T_RET, opis: "install: offered inside the installed app",
    z: "    if (s.samodzielna) return false;   /* this IS the installed app */\n", na: "" },
  { plik: RET, test: T_RET, opis: "badge: the horizon dropped, so it counts only what is due now",
    z: "    var granica = teraz + HORYZONT_MS;", na: "    var granica = teraz;" },
  { plik: RET, test: T_RET, opis: "badge: a card with no due date counted as due",
    z: "        if (!c || typeof c.due !== \"number\") return;", na: "        if (!c) return;" },
  { plik: RET, test: T_RET, opis: "badge: only the first deck walked, so mistakes stop counting",
    z: "    (Array.isArray(talie) ? talie : []).forEach(function (talia) {",
    na: "    (Array.isArray(talie) ? talie : []).slice(0, 1).forEach(function (talia) {" },

  /* ---- ics.js: what another program has to be able to read ---- */
  { plik: ICS, test: T_ICS, opis: "escaping: the comma left as a value separator",
    z: "      .replace(/,/g, \"\\\\,\")\n", na: "" },
  { plik: ICS, test: T_ICS, opis: "escaping: a newline left to end the property",
    z: "      .replace(/\\r\\n|\\r|\\n/g, \"\\\\n\");", na: "      .replace(/\\r\\n|\\r|\\n/g, \"\\n\");" },
  { plik: ICS, test: T_ICS, opis: "escaping: the backslash escaped last, so every escape doubles",
    z: "      .replace(/\\\\/g, \"\\\\\\\\\")\n", na: "" },
  { plik: ICS, test: T_ICS, opis: "folding: measured in characters instead of octets",
    z: "      var dl = oktety(ch);", na: "      var dl = 1;" },
  { plik: ICS, test: T_ICS, opis: "folding: the continuation space not counted in its own line",
    z: "        limit = MAX_OKTETOW - 1;   /* the leading space of a continuation */",
    na: "        limit = MAX_OKTETOW;" },
  { plik: ICS, test: T_ICS, opis: "start: written in UTC, so the hour moves with the timezone",
    z: "      \"DTSTART:\" + poczatek,", na: "      \"DTSTART:\" + stempel(p.teraz)," },

  /* ---- cils-report.js: the decision that a machine does not mark this exam ---- */
  { plik: RAPORT, test: T_RAPORT, opis: "report: a fraction passes, so 9/12 reaches the student",
    z: "    if (UŁAMEK.test(zdanie) || PROCENT.test(zdanie) || PUNKTY.test(zdanie)) return true;",
    na: "    if (PROCENT.test(zdanie) || PUNKTY.test(zdanie)) return true;" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: the verdict words stop being checked",
    z: "      if (male.indexOf(WERDYKT[i]) >= 0) return true;", na: "" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: the ceiling on length dropped",
    z: "  var MAX_CHARS = 700;", na: "  var MAX_CHARS = 700000;" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: a sentence with a verdict kept instead of dropped",
    z: "      if (werdykt(z)) continue;", na: "" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: the full stop between digits ends a sentence again",
    z: "    var zdania = s.match(/(?:[^.!?]|\\.(?=\\d))+[.!?]*/g) || [s];",
    na: "    var zdania = s.match(/[^.!?]+[.!?]*/g) || [s];" },
  { plik: RAPORT, test: T_RAPORT, opis: "report: a mark said in words passes (9 su 12, otto punti su dodici)",
    z: "    if (NA_ILE.test(zdanie) || NA_SLOWNIE.test(zdanie) || OCENA.test(zdanie)) return true;",
    na: "" },

  /* ---- chat-rules.js: a conversation the student pays for ---- */
  { plik: CHAT, test: T_CHAT, opis: "chat: the partner's replies counted against the ceiling too",
    z: 'var moje = lista(historia).filter(function (t) { return t && t.role === "student"; }).length;',
    na: "var moje = lista(historia).length;" },
  { plik: CHAT, test: T_CHAT, opis: "chat: the ceiling goes negative instead of stopping at zero",
    z: "    return Math.max(0, MAX_TUR - moje);", na: "    return MAX_TUR - moje;" },
  { plik: CHAT, test: T_CHAT, opis: "chat: the history is pruned from the newest end",
    z: "    for (var i = wszystkie.length - 1; i >= 0; i--) {",
    na: "    for (var i = 0; i < wszystkie.length; i++) {" },
  { plik: CHAT, test: T_CHAT, opis: "chat: an oversized turn is dropped, so the newest line never travels",
    z: "        if (out.length === 0) out.unshift({ role: t.role, text: tekst.slice(0, MAX_ZNAKOW) });",
    na: "" },
  { plik: CHAT, test: T_CHAT, opis: "chat: prose instead of JSON kills the turn",
    z: '    return { risposta: porzadek(surowy).slice(0, MAX_REPLIKI), correzione: "" };',
    na: '    return { risposta: "", correzione: "" };' },
  { plik: CHAT, test: T_CHAT, opis: "chat: a reply that runs on is not cut",
    z: "        risposta: porzadek(parsed.risposta).slice(0, MAX_REPLIKI),",
    na: "        risposta: porzadek(parsed.risposta)," },

  /* ---- llm-providers.js: the same turns in three dialects ---- */
  { plik: PROV, test: PROV_CHAT, opis: "chat: gemini given the role name of the other dialect",
    z: 'var wczesniej = tury(prompt.history, { student: "user", partner: "model" })',
    na: 'var wczesniej = tury(prompt.history, { student: "user", partner: "assistant" })' },
  { plik: PROV, test: PROV_CHAT, opis: "chat: an unknown role passed through instead of dropped",
    z: '      .filter(function (t) { return t && (t.role === "student" || t.role === "partner"); })',
    na: "      .filter(function (t) { return !!t; })" },

  /* ---- store.js: the save that must not wait for the timer ---- */
  { plik: STORE, test: T_STORE, opis: "flush writes but leaves the timer to write again",
    z: "    global.clearTimeout(saveTimer);\n", na: "\n" },
  { plik: STORE, test: T_STORE, opis: "flush on every visibility change, visible included",
    z: 'if (global.document.visibilityState === "hidden") flush();', na: "flush();" },

  /* ---- flash-rules.js / flash-run.js: the five-minute session ---- */
  { plik: FLASH, test: T_FLASH, opis: "the card cap one card too late",
    z: "if (answered >= LIMITS.cards) return \"cap\";", na: "if (answered > LIMITS.cards) return \"cap\";" },
  { plik: FLASH, test: T_FLASH, opis: "the time bound ignored",
    z: "if (now - start >= LIMITS.ms) return \"time\";", na: "" },
  { plik: FLASH, test: T_FLASH, opis: "a clock moved backwards gives extra time",
    z: "return Math.max(0, Math.min(LIMITS.ms, LIMITS.ms - (now - start)));", na: "return Math.max(0, LIMITS.ms - (now - start));" },
  { plik: FLASH, test: T_FLASH, opis: "a started second rounds down to 0:00",
    z: "var s = Math.ceil(Math.max(0, ms) / 1000);", na: "var s = Math.floor(Math.max(0, ms) / 1000);" },
  { plik: RUN, test: T_RUN, opis: "the bound checked before grading the open card",
    z: "      if (powod) return powod;\n      var c = kolejka[i];",
    na: "      if (powod) return powod;\n      if (Rules.isOver(start, now, i + 1) === \"time\") { powod = \"time\"; return powod; }\n      var c = kolejka[i];" },
  { plik: RUN, test: T_RUN, opis: "answering after the end grades again",
    z: "      if (powod) return powod;\n      var c = kolejka[i];", na: "      var c = kolejka[i] || kolejka[kolejka.length - 1];" },
  { plik: RUN, test: T_RUN, opis: "a new word graded without joining the deck",
    z: "var key = c.fresh ? global.Core.addCard(c.it, c.tr, c.src) : c.key;", na: "var key = c.key;" },
  { plik: FLASH, test: T_FLASH, opis: "reserve: the same word twice",
    z: "if (!k || seen[k] || opts.inDeck(k)) return;", na: "if (!k || opts.inDeck(k)) return;" },
  { plik: FLASH, test: T_FLASH, opis: "reserve: words already in the deck come back as new",
    z: "if (!k || seen[k] || opts.inDeck(k)) return;", na: "if (!k || seen[k]) return;" },
  { plik: FLASH, test: T_FLASH, opis: "reserve: a student with nothing finished gets nothing",
    z: "      if (!lekcje.length) {", na: "      if (false) {" },
  { plik: FLASH, test: T_FLASH, opis: "new today: a review at midnight counted as yesterday",
    z: "return first[k] >= dayStart;", na: "return first[k] > dayStart;" },
  { plik: FLASH, test: T_FLASH, opis: "compose: an overdrawn allowance goes negative",
    z: "Math.max(0, NEW_PER_DAY - newSoFar)", na: "NEW_PER_DAY - newSoFar" }
];

/* ---------------- Running ---------------- */

const argv = process.argv.slice(2);
const tylkoIdx = argv.indexOf("--tylko");
const TYLKO = tylkoIdx >= 0 ? argv[tylkoIdx + 1] : null;

const zrodla = new Map();
for (const m of MUTACJE) {
  if (!zrodla.has(m.plik)) zrodla.set(m.plik, readFileSync(join(ROOT, m.plik), "utf8"));
}

/** How many times a string occurs in the file. */
function ile(hay, igla) {
  return hay.split(igla).length - 1;
}

/**
 * One run of a test file, with an optional substitution of an engine file.
 * @param {string} test  the path of the test file
 * @param {object} [podmiana] a map "path in the repo" -> "path of the mutated copy"
 */
function suita(test, podmiana) {
  const env = { ...process.env };
  if (podmiana) env.LINGUAI_PODMIANA = JSON.stringify(podmiana);
  else delete env.LINGUAI_PODMIANA;
  const out = spawnSync(process.execPath, ["--test", test], { cwd: ROOT, encoding: "utf8", env });
  const liczba = (n) => Number((out.stdout.match(new RegExp("^. " + n + " (\\d+)$", "m")) || [])[1]);
  return { pass: liczba("pass"), fail: liczba("fail") };
}

const katalog = mkdtempSync(join(tmpdir(), "linguai-mut-"));
const wyniki = [];
let bledy = 0;

try {
  /* A green baseline is a condition of meaning: from a red suite there is no
     way to tell whether the mutation knocked it over or it was already
     broken. */
  for (const test of [...new Set(MUTACJE.map(m => m.test))]) {
    const { pass, fail } = suita(test);
    if (fail !== 0 || !pass) {
      console.error(`BŁĄD — ${test} nie jest zielony przed mutacjami (pass ${pass}, fail ${fail}).`);
      process.exit(1);
    }
  }

  for (const m of MUTACJE) {
    if (TYLKO && !m.opis.includes(TYLKO) && !m.plik.includes(TYLKO)) continue;
    const src = zrodla.get(m.plik);
    const wystapienia = ile(src, m.z);

    if (wystapienia !== 1) {
      wyniki.push({
        stan: wystapienia === 0 ? "NIE MA" : "NIEJEDNOZNACZNE", m,
        info: wystapienia === 0 ? "fragment zniknął z pliku" : `${wystapienia} wystąpień`
      });
      bledy++;
      continue;
    }

    const kopia = join(katalog, basename(m.plik));
    writeFileSync(kopia, src.replace(m.z, m.na));
    const { fail } = suita(m.test, { [m.plik]: kopia });

    if (fail > 0) wyniki.push({ stan: "CZERWONE", m, info: `fail ${fail}` });
    else { wyniki.push({ stan: "ZIELONE", m, info: "nikt tego nie pilnuje" }); bledy++; }
  }
} finally {
  rmSync(katalog, { recursive: true, force: true });
}

/* ---------------- The report ---------------- */

for (const w of wyniki) {
  console.log(`${w.stan === "CZERWONE" ? "✔" : "✖"} ${w.stan.padEnd(16)} ` +
    `${w.m.opis.padEnd(52)} ${w.info}`);
}

const zlapane = wyniki.filter(w => w.stan === "CZERWONE").length;
console.log(`\nZŁAPANE ${zlapane}/${wyniki.length} mutacji ` +
  `(${[...new Set(wyniki.map(w => w.m.plik))].join(", ")}).`);
console.log("Zasięg jest wąski i zadeklarowany: to nie jest miara całego silnika.");

if (bledy) {
  console.error(`\nBŁĄD — ${bledy} mutacji bez czerwonego albo nie do zastosowania.`);
  process.exit(1);
}
