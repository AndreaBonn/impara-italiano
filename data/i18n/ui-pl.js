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
  "stats.points": "pkt"

});
