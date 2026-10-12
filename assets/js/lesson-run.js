/* ============================================================
   lesson-run.js — where the student is among a lesson's exercises.

   Nine exercises used to stand open on one page, each with its own Check;
   the lesson closed only when all nine had an answer, so one skipped while
   scrolling meant no summary and no word about why. Now one exercise shows
   at a time, numbered chips say which are still open, and the summary lists
   the ones that went wrong.

   This file is the arithmetic of that, nothing else: pure functions over a
   small state, so node:test checks it without a browser. The screen
   (views-lesson.js) draws it. The state is never mutated: every step
   returns a new one.

   state = { answers: [null | true | false, ...], current: index }
   ============================================================ */
(function (global) {
  "use strict";

  function create(total) {
    var answers = [];
    for (var i = 0; i < total; i++) answers.push(null);
    return { answers: answers, current: 0 };
  }

  function unanswered(state) {
    var out = [];
    state.answers.forEach(function (a, i) { if (a === null) out.push(i); });
    return out;
  }

  function wrong(state) {
    var out = [];
    state.answers.forEach(function (a, i) { if (a === false) out.push(i); });
    return out;
  }

  function isDone(state) { return state.answers.length > 0 && unanswered(state).length === 0; }

  /** Moves to an exercise; an index outside the lesson leaves the state as it was. */
  function go(state, i) {
    if (i < 0 || i >= state.answers.length) return state;
    return { answers: state.answers, current: i };
  }

  /**
   * Records an answer. The first answer counts: the exercise reports once
   * (onDone is called exactly once), and a second call must not turn a
   * wrong answer into a right one. The current exercise does not move: the
   * student reads the feedback and moves on with Next.
   */
  function answer(state, i, ok) {
    if (i < 0 || i >= state.answers.length || state.answers[i] !== null) return state;
    var answers = state.answers.slice();
    answers[i] = !!ok;
    return { answers: answers, current: state.current };
  }

  /**
   * Where Next leads: the first open exercise after the current one, then
   * the first open one before it (one skipped earlier), and with none open
   * simply the following exercise, or null after the last.
   */
  function next(state) {
    var open = unanswered(state);
    var after = open.filter(function (i) { return i > state.current; })[0];
    if (after !== undefined) return after;
    if (open.length) return open[0];
    return state.current + 1 < state.answers.length ? state.current + 1 : null;
  }

  global.LessonRun = {
    create: create, go: go, answer: answer, next: next,
    unanswered: unanswered, wrong: wrong, isDone: isDone
  };
})(window);
