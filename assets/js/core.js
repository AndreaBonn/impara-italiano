/* ============================================================
   core.js — the student's progress: lessons passed, streak, XP, backup.

   This used to be an 1100-line file housing five independent things.
   Taken out one by one: text comparison (text.js), on-screen messages
   (notice.js), state persistence (store.js), the course structure
   (registry.js) and the review deck (srs.js). What is left answers a
   single question: what has the student already done.

   `Core` is still the facade of the whole engine and re-exposes those
   modules under their existing names — twenty files call Core.norm,
   Core.save and Core.addCard and there is no reason for them to know
   about the split. New code may call a module directly; old code does not
   have to change.
   ============================================================ */
(function (global) {
  "use strict";

  /* ---------------- Persistent state ----------------
     All reading and writing sits in store.js: it owns `state`, its schema,
     the migrations and browser storage. Lesson progress reaches in here for
     two things: the current state and a request to save.
     ------------------------------------------------------- */
  var Store = global.Store;
  var save = Store.save;

  /* ---------------- Modules re-exposed by Core ----------------
     Nothing below is used in this file: this is a facade. Lesson progress
     calls neither the registry, nor the deck, nor the card identity — which
     is why they could be separated at all.
     ------------------------------------------------------- */
  var isForbidden = Store.isForbidden;
  var cardKey = Store.cardKey;
  var Registry = global.Registry;
  var registry = Registry.registry;
  var Srs = global.Srs;

  /* ---------------- Text comparison ----------------
     The implementation sits in text.js: these are pure functions and state
     is of no use to them. Only the short name stays here, so the rest of the
     file reads as it did, plus the re-export in Core at the end — because
     twenty modules call Core.norm, not Txt.norm.
     ------------------------------------------------------- */
  var stripAccents = global.Txt.stripAccents;
  var fold = global.Txt.fold;
  var norm = global.Txt.norm;
  var levenshtein = global.Txt.levenshtein;
  var similarity = global.Txt.similarity;
  var checkOpen = global.Txt.checkOpen;
  var esc = global.Txt.esc;

  /* On-screen messages sit in notice.js — see there for the reason. */
  var toast = global.Notice.toast;
  var notice = global.Notice.notice;

  /* ---------------- Day / streak ---------------- */
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  function daysBetween(aStr, bStr) {
    var a = new Date(aStr + "T00:00:00"), b = new Date(bStr + "T00:00:00");
    return Math.round((b - a) / 86400000);
  }

  function touchDay() {
    var t = today();
    Store.state.stats.days[t] = Store.state.stats.days[t] || 0;
    var s = Store.state.streak;
    if (s.lastDay === t) return;
    if (s.lastDay && daysBetween(s.lastDay, t) === 1) s.count += 1;
    else s.count = 1;
    s.lastDay = t;
    if (s.count > s.best) s.best = s.count;
    save();
  }

  /* ---------------- Lesson progress ---------------- */
  function lessonState(id) {
    return Store.state.lessons[id] || null;
  }

  function isLessonDone(id) {
    var l = Store.state.lessons[id];
    return !!(l && l.done);
  }

  function recordLesson(id, score, total, seconds) {
    var prev = Store.state.lessons[id] || { attempts: 0, best: 0 };
    var pct = total ? score / total : 0;
    var wasDone = !!prev.done;
    Store.state.lessons[id] = {
      attempts: (prev.attempts || 0) + 1,
      score: score,
      total: total,
      best: Math.max(prev.best || 0, pct),
      done: pct >= 0.7 || wasDone,
      ts: Date.now()
    };
    var t = today();
    Store.state.stats.days[t] = (Store.state.stats.days[t] || 0) + score;
    if (!wasDone && Store.state.lessons[id].done) {
      Store.state.stats.lessonsDone += 1;
      Store.state.xp += 20;
      /* The gate sits HERE, not in the end-of-lesson view: recordLesson is
         also called by the conversation screen, and the next view that calls
         it has nothing to remember it by. The same pattern as consent in
         consent.js. */
      if (backupDue()) {
        notice("core.backupDue", {
          vars: { n: lessonsSinceBackup() },
          actionKey: "core.backupSave",
          onAction: downloadBackup,
          onDismiss: snoozeBackup
        });
      }
    }
    Store.state.xp += score * 2;
    Store.state.minutes += Math.round((seconds || 0) / 60);
    touchDay();
    save();
    return Store.state.lessons[id];
  }

  function recordAnswer(ok) {
    if (ok) { Store.state.stats.correct += 1; Store.state.xp += 1; }
    else Store.state.stats.wrong += 1;
    save();
  }

  /* ---------------- Unit and level progress ---------------- */
  function unitProgress(unit) {
    var ids = (unit.lessons || []).map(function (l) { return l.id; });
    if (unit.test) ids.push(unit.test.id);
    var done = ids.filter(isLessonDone).length;
    return { done: done, total: ids.length, pct: ids.length ? done / ids.length : 0 };
  }

  function levelProgress(level) {
    var done = 0, total = 0;
    (level.units || []).forEach(function (u) {
      var p = unitProgress(u);
      done += p.done; total += p.total;
    });
    return { done: done, total: total, pct: total ? done / total : 0 };
  }

  /** The first unfinished lesson of a level — "where am I". */
  function nextLesson(level) {
    for (var i = 0; i < (level.units || []).length; i++) {
      var u = level.units[i];
      for (var j = 0; j < (u.lessons || []).length; j++) {
        if (!isLessonDone(u.lessons[j].id)) return { unit: u, lesson: u.lessons[j] };
      }
      if (u.test && !isLessonDone(u.test.id)) return { unit: u, lesson: u.test };
    }
    return null;
  }

  /* ---------------- Backup ---------------- */
  /* Every how many FINISHED lessons to remind about a backup. Retaking a
     lesson already passed does not count: nothing new appeared that could be
     lost. The number also reaches the message through {n}, so changing it
     here changes the message and does not require touching five files of
     strings. */
  var BACKUP_EVERY = 10;

  /**
   * How many lessons the student has finished since the matter was last
   * settled: either since a saved copy or since the reminder was deferred.
   *
   * Two fields, not one: `at` means "this much progress is secured" and ONLY
   * saving a copy moves it. If dismissing the message moved it too, the
   * course would treat "later" as a copy made and would lie about what the
   * student has on disk.
   */
  function lessonsSinceBackup() {
    var b = Store.state.backup || {};
    return Store.state.stats.lessonsDone - Math.max(b.at || 0, b.snoozed || 0);
  }

  function backupDue() {
    return lessonsSinceBackup() >= BACKUP_EVERY;
  }

  function markBackup() {
    var b = Store.state.backup || {};
    Store.state.backup = { at: Store.state.stats.lessonsDone, ts: Date.now(), snoozed: b.snoozed || 0 };
    save();
  }

  /**
   * "Not now": the next reminder after another ten lessons.
   *
   * Without this, dismissing the message only lifts the repeat lock in
   * notice(), so once the threshold is passed the reminder comes back after
   * the VERY NEXT lesson and after each one that follows. Asking for a copy
   * every ten lessons is a reminder; the same request every lesson is a
   * reason to stop reading this course's messages.
   */
  function snoozeBackup() {
    var b = Store.state.backup || {};
    Store.state.backup = { at: b.at || 0, ts: b.ts || 0, snoozed: Store.state.stats.lessonsDone };
    save();
  }

  /**
   * Writes the state to a file and moves the reminder threshold.
   *
   * The marker goes BEFORE serialization, not after: the file must already
   * carry the new `backup.at`. The other order releases a copy with the old
   * marker, so a student who restores it some day gets a reminder
   * immediately — about the copy they have just loaded.
   */
  function downloadBackup() {
    markBackup();
    var blob = new global.Blob([Store.exportState()], { type: "application/json" });
    var a = document.createElement("a");
    a.href = global.URL.createObjectURL(blob);
    a.download = "impara-italiano-" + global.I18n.lang + "-" + today() + ".json";
    a.click();
    global.setTimeout(function () { global.URL.revokeObjectURL(a.href); }, 1000);
  }

  /** Deterministic shuffle (seed = string), so exercises do not jump on re-render. */
  function seededShuffle(arr, seed) {
    var a = arr.slice(), h = 2166136261;
    for (var i = 0; i < String(seed).length; i++) {
      h ^= String(seed).charCodeAt(i); h = Math.imul(h, 16777619);
    }
    function rnd() { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 100000) / 100000; }
    for (var j = a.length - 1; j > 0; j--) {
      var k = Math.floor(rnd() * (j + 1));
      var t = a[j]; a[j] = a[k]; a[k] = t;
    }
    return a;
  }

  /* ---------------- Module export ---------------- */
  var Core = {
    STORE_KEY: Store.KEY,
    registry: registry,
    get state() { return Store.state; },
    load: Store.load, save: save,
    norm: norm, fold: fold, stripAccents: stripAccents, levenshtein: levenshtein,
    similarity: similarity, checkOpen: checkOpen,
    today: today, touchDay: touchDay,
    cardKey: cardKey, addCard: Srs.addCard, cardTr: Srs.cardTr, isForbidden: isForbidden,
    schedule: Srs.schedule, gradeCard: Srs.gradeCard,
    dueCards: Srs.dueCards, dueCount: Srs.dueCount,
    lessonState: lessonState, isLessonDone: isLessonDone,
    recordLesson: recordLesson, recordAnswer: recordAnswer,
    unitProgress: unitProgress, levelProgress: levelProgress, nextLesson: nextLesson,
    registerLevel: Registry.registerLevel, addUnits: Registry.addUnits, getLesson: Registry.getLesson,
    loadLevelData: Registry.loadLevelData, setLanguage: Registry.setLanguage,
    exportState: Store.exportState, importState: Store.importState, resetState: Store.resetState,
    backupDue: backupDue, markBackup: markBackup, snoozeBackup: snoozeBackup,
    downloadBackup: downloadBackup,
    toast: toast, notice: notice, esc: esc, seededShuffle: seededShuffle
  };

  global.Core = Core;

})(window);
