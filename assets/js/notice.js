/* ============================================================
   notice.js — komunikaty na ekranie: znikające i te, które zostają.

   Wyjęte z core.js, bo były w nim jedynym miejscem dotykającym DOM.
   Przez nie test zapisu stanu musiał mieć podstawiony `document`:
   sprawdzało się przepełnienie pamięci, a stawiało się atrapę drzewa.

   Dwa rodzaje, każdy do czego innego:
   - `toast` znika po 3,2 sekundy i nadaje się do „zapisano" albo
     „wybierz odpowiedź";
   - `notice` zostaje do zamknięcia przez ucznia i jest dla rzeczy, które
     nie mają prawa przelecieć między jednym ćwiczeniem a drugim: utrata
     danych, prośba o kopię zapasową.
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

  /* Klucze już pokazane: ten sam komunikat nie ma się mnożyć przy każdym zapisie. */
  var noticed = {};

  /**
   * Komunikat, który zostaje na ekranie aż do zamknięcia przez ucznia.
   *
   * Toast znika po 3,2 sekundy i to jest właściwe dla „zapisano" albo
   * „wybierz odpowiedź". Utrata danych nie jest wiadomością do
   * przeoczenia między jednym ćwiczeniem a drugim, więc idzie tędy.
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

    /* Przycisk akcji, gdy komunikat prosi ucznia o zrobienie czegoś.
       Bez niego przypomnienie o kopii kończy się instrukcją „wejdź w
       Ustawienia", czyli przerzuca na ucznia nawigację w chwili, w
       której i tak zaraz zamknie komunikat. */
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
