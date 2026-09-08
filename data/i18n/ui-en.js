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
  "lesson.next": "Next: {title} →",

  /* ---------------- Exercises: type names ---------------- */
  "ex.type.mcq": "multiple choice",
  "ex.type.multi": "pick several",
  "ex.type.fill": "fill the gap",
  "ex.type.cloze": "fill the text",
  "ex.type.trans": "translation",
  "ex.type.order": "build the sentence",
  "ex.type.match": "matching",
  "ex.type.conj": "conjugation",
  "ex.type.gender": "articles",
  "ex.type.listen": "listening",
  "ex.type.speak": "pronunciation",
  "ex.type.dialogue": "conversation",
  "ex.type.truefalse": "true / false",

  /* ---------------- Exercises: shared ---------------- */
  "ex.num": "Exercise {n} · {type}",
  "ex.check": "Check",
  "ex.done.ok": "Correct ✓",
  "ex.done.checked": "Checked",
  "ex.bravo": "Nice one! 🎉",
  "ex.correctIs": "The answer is: “{answer}”",
  "ex.notYet": "Not quite.",
  "ex.answersGroup": "Answers",
  "ex.pickOne": "Pick an answer.",
  "ex.pickAtLeastOne": "Select at least one answer.",
  "ex.multiHint": "Select every correct answer.",
  "ex.hintLabel": "Hint: {hint}",
  "ex.almost": "Almost! Check the spelling (a typo or a missing accent).",
  "ex.ph.toIt": "Write it in Italian",
  "ex.ph.toBase": "Write it in English",
  "ex.ph.answer": "Type your answer",
  "ex.unknownType": "Unknown exercise type: {t}",

  /* ---------------- Exercises: per type ---------------- */
  "ex.cloze.prompt": "Fill in the gaps.",
  "ex.order.prompt": "Build the Italian sentence:",
  "ex.order.yourSentence": "Your sentence",
  "ex.order.clear": "Clear",
  "ex.order.empty": "Build the sentence from the tiles.",
  "ex.match.prompt": "Match the Italian phrases with their English meanings.",
  "ex.match.mistakes": "Mistakes: {n}.",
  "ex.conj.prompt": "Conjugate: {verb} — {tense}",
  "ex.gender.prompt": "Pick the right article.",
  "ex.listen.prompt": "Listen and write down what you hear.",
  "ex.listen.play": "🔊 Play",
  "ex.listen.slow": "🐢 Slower",
  "ex.listen.ph": "Write it in Italian",
  "ex.speak.prompt": "Say it out loud in Italian:",
  "ex.speak.mic": "Record your answer",
  "ex.speak.hint": "Tap the mic and read the sentence.",
  "ex.speak.noStt": "Your browser doesn't support speech recognition. Listen to the model, repeat it out loud, then type the sentence from memory.",
  "ex.speak.ph": "Type the sentence",
  "ex.speak.pass": "Mark as done",
  "ex.speak.recordFirst": "Record your answer first.",
  "ex.speak.ok": "Pronunciation recognized correctly.",
  "ex.speak.retry": "Speech recognition can be harsh on a foreign accent — listen to the model and try again at a calm pace.",
  "ex.dialogue.prompt": "Listen and reply.",
  "ex.dialogue.yourTurn": "Your turn — {task}",
  "ex.dialogue.pickAnswer": "pick a reply",
  "ex.dialogue.mistakes": "Mistakes: {n}. Read the dialogue out loud once more.",
  "ex.dialogue.allOk": "The whole conversation was right.",
  "ex.truefalse.true": "True (vero)",
  "ex.truefalse.false": "False (falso)",

  /* ---------------- Speech recognition ---------------- */
  "ex.stt.listening": "Listening…",
  "ex.stt.denied": "Microphone access denied. Allow it in your browser settings.",
  "ex.stt.failed": "Recording failed. Try again.",
  "ex.stt.nothing": "I didn't catch anything. Try again.",
  "ex.stt.heard": "I heard: {text}"

});
