/* ============================================================
   notice.js — on-screen messages: the vanishing ones and the ones that stay.

   Pulled out of core.js, where they were the only place touching the DOM.
   Because of them the state-saving test needed a substituted `document`:
   it checked storage overflow while setting up a fake tree.

   Two kinds, each for something different:
   - `toast` disappears after 3.2 seconds and suits "saved" or
     "pick an answer";
   - `notice` stays until the student dismisses it and is for things that
     must not slip past between one exercise and the next: data loss, a
     request for a backup.
   ============================================================ */
(function (global) {
  "use strict";

  function stack() { return global.document.getElementById("toastStack"); }

  function toast(msg, kind) {
    var host = stack();
    if (!host) return;
    var el = global.document.createElement("div");
    el.className = "toast" + (kind === "ok" ? " toast--ok" : "");
    el.textContent = msg;
    host.appendChild(el);
    global.setTimeout(function () { el.remove(); }, 3200);
  }

  /* Keys already shown: the same message must not multiply on every save. */
  var noticed = {};

  /**
   * A message that stays on screen until the student dismisses it.
   *
   * A toast disappears after 3.2 seconds and that is right for "saved" or
   * "pick an answer". Data loss is not a message to be missed between one
   * exercise and the next, so it goes this way.
   */
  function notice(key, opts) {
    if (noticed[key]) return;
    var host = stack();
    if (!host) return;
    noticed[key] = true;
    var o = opts || {};

    var el = global.document.createElement("div");
    el.className = "toast toast--stuck";
    el.setAttribute("role", "alert");
    el.textContent = global.I18n.t(key, o.vars);

    /* An action button, when the message asks the student to do something.
       Without it the backup reminder ends in an instruction to "go to
       Settings", which pushes the navigation onto the student at the very
       moment they are about to dismiss the message anyway. */
    if (o.actionKey && o.onAction) {
      var act = global.document.createElement("button");
      act.type = "button";
      act.className = "btn btn--primary toast__act";
      act.textContent = global.I18n.t(o.actionKey);
      act.addEventListener("click", function () {
        o.onAction();
        el.remove();
        noticed[key] = false;
      });
      el.appendChild(act);
    }

    var x = global.document.createElement("button");
    x.type = "button";
    x.className = "toast__x";
    x.textContent = "×";
    x.setAttribute("aria-label", global.I18n.t("core.noticeDismiss"));
    x.addEventListener("click", function () {
      el.remove();
      noticed[key] = false;
      if (o.onDismiss) o.onDismiss();
    });

    el.appendChild(x);
    host.appendChild(el);
  }

  global.Notice = { toast: toast, notice: notice };

})(window);
