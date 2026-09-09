/* ============================================================
   core.js — postępy ucznia: zaliczone lekcje, passa, XP, kopia zapasowa.

   Był to plik na 1100 linii, w którym mieszkało pięć niezależnych rzeczy.
   Wyprowadzone kolejno: porównywanie tekstu (text.js), komunikaty na
   ekranie (notice.js), zapis stanu (store.js), struktura kursu
   (registry.js) i talia powtórek (srs.js). Zostało to, co odpowiada na
   jedno pytanie: co uczeń już zrobił.

   `Core` jest nadal fasadą całego silnika i wystawia tamte moduły pod
   dotychczasowymi nazwami — dwadzieścia plików woła Core.norm, Core.save
   i Core.addCard i nie ma powodu, żeby wiedziały o podziale. Nowy kod
   może wołać moduł wprost; stary nie musi się zmieniać.
   ============================================================ */
(function (global) {
  "use strict";

  /* ---------------- Stan trwały ----------------
     Cały zapis i odczyt siedzi w store.js: to on trzyma `state`, jego
     schemat, migracje i pamięć przeglądarki. Postępy lekcji sięgają stąd
     po dwie rzeczy: bieżący stan i prośbę o zapis.
     ------------------------------------------------------- */
  var Store = global.Store;
  var save = Store.save;

  /* ---------------- Moduły wystawiane dalej przez Core ----------------
     Nic poniżej nie jest w tym pliku używane: to jest fasada. Postępy
     lekcji nie wołają ani rejestru, ani talii, ani tożsamości fiszki —
     dlatego dały się rozdzielić.
     ------------------------------------------------------- */
  var isForbidden = Store.isForbidden;
  var cardKey = Store.cardKey;
  var Registry = global.Registry;
  var registry = Registry.registry;
  var Srs = global.Srs;

  /* ---------------- Porównywanie tekstu ----------------
     Implementacja siedzi w text.js: to są funkcje czyste, a stan im do
     niczego nie służy. Tutaj zostaje sam skrót nazwy, żeby reszta pliku
     czytała się jak dotąd, i ponowne wystawienie w Core na końcu — bo
     dwadzieścia modułów woła Core.norm, nie Txt.norm.
     ------------------------------------------------------- */
  var stripAccents = global.Txt.stripAccents;
  var fold = global.Txt.fold;
  var norm = global.Txt.norm;
  var levenshtein = global.Txt.levenshtein;
  var similarity = global.Txt.similarity;
  var checkOpen = global.Txt.checkOpen;
  var esc = global.Txt.esc;

  /* Komunikaty na ekranie siedzą w notice.js — patrz tam po powód. */
  var toast = global.Notice.toast;
  var notice = global.Notice.notice;

  /* ---------------- Dzień / passa ---------------- */
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

  /* ---------------- Postęp lekcji ---------------- */
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
      /* Bramka stoi TUTAJ, a nie w widoku końca lekcji: recordLesson woła
         też ekran rozmów, a przy następnym widoku, który go zawoła, nie
         ma o czym pamiętać. Ten sam wzorzec co zgoda w consent.js. */
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

  /* ---------------- Postęp jednostek i poziomów ---------------- */
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

  /** Pierwsza nieukończona lekcja poziomu — „gdzie jestem". */
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

  /* ---------------- Kopia zapasowa ---------------- */
  /* Co ile UKOŃCZONYCH lekcji przypominać o kopii. Powtórzone podejście
     do zdanej już lekcji nie liczy się: nie przybyło niczego, co można
     stracić. Liczba trafia też do napisu przez {n}, więc zmiana tutaj
     zmienia komunikat i nie wymaga ruszania pięciu plików z napisami. */
  var BACKUP_EVERY = 10;

  /**
   * Ile lekcji uczeń ukończył od ostatniego zamknięcia sprawy: albo od
   * zapisanej kopii, albo od odłożenia przypomnienia na później.
   *
   * Dwa pola, nie jedno: `at` znaczy „tyle postępów jest zabezpieczone"
   * i przesuwa je WYŁĄCZNIE zapis kopii. Gdyby przesuwało je też
   * zamknięcie komunikatu, kurs uznałby odłożenie na później za
   * zrobioną kopię i skłamałby o tym, co uczeń ma na dysku.
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
   * „Nie teraz": następne przypomnienie po kolejnych dziesięciu lekcjach.
   *
   * Bez tego zamknięcie komunikatu zdejmuje tylko blokadę powtórzeń w
   * notice(), więc przy przekroczonym progu przypomnienie wraca po
   * NAJBLIŻSZEJ lekcji i tak po każdej następnej. Prośba o kopię co
   * dziesięć lekcji jest przypomnieniem, ta sama prośba co lekcję jest
   * powodem, żeby przestać czytać komunikaty tego kursu.
   */
  function snoozeBackup() {
    var b = Store.state.backup || {};
    Store.state.backup = { at: b.at || 0, ts: b.ts || 0, snoozed: Store.state.stats.lessonsDone };
    save();
  }

  /**
   * Zapisuje stan do pliku i przesuwa próg przypomnienia.
   *
   * Znacznik idzie PRZED serializacją, nie po niej: plik ma nieść już
   * nową wartość `backup.at`. Odwrotna kolejność wypuszcza kopię ze
   * starym znacznikiem, więc uczeń, który ją kiedyś odzyska, dostaje
   * przypomnienie natychmiast — o kopii, którą właśnie wgrał.
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

  /** Deterministyczny shuffle (seed = string), by ćwiczenia nie skakały przy re-renderze. */
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

  /* ---------------- Eksport modułu ---------------- */
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
