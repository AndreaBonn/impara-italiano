/* ============================================================
   ui-en.js — interface strings, American English.

   Keys are area.element. A value is either a string or an object
   of plural forms picked by Intl.PluralRules.

   Italian grammar terms (passato prossimo, congiuntivo) and proper
   names stay identical across every language.
   ============================================================ */
LINGUAI.addUI("en", {

  /* ---------------- Shell ---------------- */
  "app.title": "Impara l'Italiano 🇮🇹 — Italian from A1 to C2",
  "app.description": "A complete Italian course explained in English: grammar, theory, exercises, listening and speaking. From A1 to near-native.",
  "app.skipToContent": "Skip to content",
  "app.openMenu": "Open menu",
  "app.mainNav": "Main navigation",
  "app.tagline": "Italian in English · A1 → C2",

  /* ---------------- Navigation ---------------- */
  "nav.path": "Learning path",
  "nav.review": "Review",
  "nav.talk": "Speaking practice",
  "nav.grammar": "Grammar",
  "nav.verbs": "Verb conjugator",
  "nav.lexicon": "My vocabulary",
  "nav.progress": "Progress",
  "nav.settings": "Settings",

  /* ---------------- Theme ---------------- */
  "theme.toggle": "Switch theme",
  "theme.dark": "🌙 Dark mode",
  "theme.light": "☀️ Light mode",

  /* ---------------- Rail counters ---------------- */
  "stats.days": { one: "day", other: "days" },
  "stats.lessons": { one: "lesson", other: "lessons" },
  /* abbreviated, the tile is narrow — does not inflect */
  "stats.points": "pts",

  /* ---------------- Accessibility ---------------- */
  "a11y.listen": "Listen",
  "a11y.listenTo": "Listen to {what}",

  /* ---------------- Learning path ---------------- */
  "path.noData": "No course data",
  "path.noDataHint": "The files in <code>data/</code> could not be loaded.",
  "path.levelsGroup": "CEFR levels",
  "path.loading": "Loading…",
  "path.loadError": "Could not load level {code}",
  "path.loadErrorHint": "Check these files: <code>{files}</code>.",
  "path.levelKicker": "Level {code} · {cefr}",
  "path.levelDone": "Level {code} complete 🌿",
  "path.levelDoneHint": "Move on to the next level, or go back to review to make it stick.",
  "path.continue": "Pick up where you left off",
  "path.start": "Let's go →",

  /* ---------------- Lesson ---------------- */
  "lesson.back": "← Path",
  "lesson.notFound": "Lesson not found",
  "lesson.notFoundHint": "Head back to the learning path.",
  "lesson.objectives": "By the end of this lesson you'll be able to:",
  "lesson.theory": "Theory",
  "lesson.trapLabel": "Watch out:",
  "lesson.contrastLabel": "If you speak English:",
  "lesson.tipLabel": "Tip:",
  "lesson.grammar": "Grammar",
  "lesson.vocab": "Vocabulary",
  "lesson.playAll": "🔊 Play the whole list",
  "lesson.saveAll": "⭐ Add all to review",
  "lesson.addToReview": "Add to review",
  "lesson.savedVocab": {
    one: "Added {n} word to your review deck.",
    other: "Added {n} words to your review deck."
  },
  "lesson.dialogue": "Dialogue: {title}",
  "lesson.playDialogue": "▶️ Play the whole dialogue",
  "lesson.culture": "Through Italian eyes",
  "lesson.exercises": "Exercises",
  "lesson.end.perfect": "Flawless. Perfetto!",
  "lesson.end.great": "Very good — you've got this.",
  "lesson.end.pass": "Passed. A couple of things are worth another look.",
  "lesson.end.fail": "Not passed yet (70% needed). Go back to the theory and try again.",
  "lesson.again": "Redo the lesson",
  "lesson.next": "Next: {title} →"

});
