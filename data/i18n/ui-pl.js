/* ============================================================
   ui-pl.js — napisy interfejsu po polsku.

   Klucz ma postać obszar.element. Wartość to napis albo obiekt
   z formami liczby mnogiej — polski ma cztery kategorie i wybiera
   je Intl.PluralRules, nie warunek na n === 1.

   Terminy gramatyczne włoskie (passato prossimo, congiuntivo)
   i nazwy własne zostają bez zmian we wszystkich językach.
   ============================================================ */
LINGUAI.addUI("pl", {

  /* ---------------- Powłoka ---------------- */
  "app.title": "Impara l'Italiano 🇮🇹 — kurs włoskiego od A1 do C2",
  "app.description": "Kompletny kurs języka włoskiego po polsku: gramatyka, teoria, ćwiczenia, słuchanie i mówienie. Od A1 do poziomu native.",
  "app.skipToContent": "Przejdź do treści",
  "app.openMenu": "Otwórz menu",
  "app.mainNav": "Nawigacja główna",
  "app.tagline": "Włoski po polsku · A1 → C2",

  /* ---------------- Nawigacja ---------------- */
  "nav.path": "Ścieżka nauki",
  "nav.review": "Powtórki",
  "nav.talk": "Rozmowy na głos",
  "nav.grammar": "Gramatyka",
  "nav.verbs": "Odmiana czasowników",
  "nav.lexicon": "Mój słownik",
  "nav.progress": "Postępy",
  "nav.settings": "Ustawienia",

  /* ---------------- Motyw ---------------- */
  "theme.toggle": "Przełącz motyw",
  "theme.dark": "🌙 Tryb nocny",
  "theme.light": "☀️ Tryb dzienny",

  /* ---------------- Licznik w pasku ---------------- */
  "stats.days": { one: "dzień", few: "dni", many: "dni", other: "dni" },
  "stats.lessons": { one: "lekcja", few: "lekcje", many: "lekcji", other: "lekcji" },
  /* skrót, bo kafelek jest wąski — nie odmienia się przez liczbę */
  "stats.points": "pkt",

  /* ---------------- Dostępność ---------------- */
  "a11y.listen": "Posłuchaj",
  "a11y.listenTo": "Posłuchaj {what}",

  /* ---------------- Ścieżka nauki ---------------- */
  "path.noData": "Brak danych kursu",
  "path.noDataHint": "Nie udało się wczytać plików w katalogu <code>data/</code>.",
  "path.levelsGroup": "Poziomy CEFR",
  "path.loading": "Wczytuję materiał…",
  "path.loadError": "Nie udało się wczytać poziomu {code}",
  "path.loadErrorHint": "Sprawdź pliki: <code>{files}</code>.",
  "path.levelKicker": "Poziom {code} · {cefr}",
  "path.levelDone": "Poziom {code} ukończony 🌿",
  "path.levelDoneHint": "Przejdź do kolejnego poziomu albo wróć do powtórek, żeby utrwalić materiał.",
  "path.continue": "Kontynuuj",
  "path.start": "Zaczynamy →",

  /* ---------------- Lekcja ---------------- */
  "lesson.back": "← Ścieżka",
  "lesson.notFound": "Nie znaleziono lekcji",
  "lesson.notFoundHint": "Wróć do ścieżki nauki.",
  "lesson.objectives": "Po tej lekcji będziesz umieć:",
  "lesson.theory": "Teoria",
  "lesson.trapLabel": "Uwaga, pułapka:",
  "lesson.contrastLabel": "Dla Polaków:",
  "lesson.tipLabel": "Wskazówka:",
  "lesson.grammar": "Gramatyka",
  "lesson.vocab": "Słownictwo",
  "lesson.playAll": "🔊 Odsłuchaj całą listę",
  "lesson.saveAll": "⭐ Dodaj wszystko do powtórek",
  "lesson.addToReview": "Dodaj do powtórek",
  "lesson.savedVocab": {
    one: "Dodano {n} słówko do powtórek.",
    few: "Dodano {n} słówka do powtórek.",
    many: "Dodano {n} słówek do powtórek.",
    other: "Dodano {n} słówek do powtórek."
  },
  "lesson.dialogue": "Dialog: {title}",
  "lesson.playDialogue": "▶️ Odtwórz cały dialog",
  "lesson.culture": "Okiem Włocha",
  "lesson.exercises": "Ćwiczenia",
  "lesson.end.perfect": "Bezbłędnie. Perfetto!",
  "lesson.end.great": "Bardzo dobrze — materiał opanowany.",
  "lesson.end.pass": "Zaliczone. Kilka rzeczy warto powtórzyć.",
  "lesson.end.fail": "Jeszcze nie zaliczone (potrzeba 70%). Wróć do teorii i spróbuj ponownie.",
  "lesson.again": "Powtórz lekcję",
  "lesson.next": "Dalej: {title} →"

});
