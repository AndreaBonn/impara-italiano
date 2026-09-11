/* ============================================================
   ics.js — the daily reminder, as a file a calendar can read.

   The course has no backend, so it cannot send anything at an agreed hour:
   a service worker is terminated between visits, and scheduled notifications
   (`TimestampTrigger`) were removed from the one browser that shipped them.
   What is left is to hand the job to a program the student already keeps
   open all day, and that program is their calendar.

   So this file writes an iCalendar event and nothing else. No network, no
   storage, no DOM. Fire and forget by design: the reminder is cancelled in
   the calendar, not here, which is also why nothing in the course pretends
   to know whether it is still there.

   THREE THINGS THAT BREAK SILENTLY IN SOMEBODY ELSE'S CALENDAR, and that the
   tests hold in place:

   - a comma, a semicolon or a newline inside a value does not corrupt the
     line, it ENDS it, and the rest is parsed as another property. Our own
     Polish and Italian strings carry commas, so this is ordinary text rather
     than a hostile input;
   - lines are limited to 75 OCTETS, not characters. Accented letters weigh
     two bytes each, so a line well under seventy letters can be over the
     limit, and splitting one in half stops the file from being UTF-8;
   - DTSTART carries no Z and no TZID. RFC 5545 calls that a floating time
     and it is what we want: seven in the morning means seven wherever the
     student is. A UTC stamp would move the reminder for everybody outside
     the timezone of whoever generated the file.

   The clock and the identifier come in as ARGUMENTS rather than being read
   here. That is what keeps the function pure, and with it the whole file
   checkable in node:test down to the byte.

   Classic script. No dependencies.
   ============================================================ */
(function (global) {
  "use strict";

  var PRODID = "-//LinguAI//Impara l'Italiano//PL";

  /* RFC 5545 §3.1: "Lines of text SHOULD NOT be longer than 75 octets,
     excluding the line break". A continuation line begins with one space,
     and that space is part of its 75. */
  var MAX_OKTETOW = 75;

  /**
   * The characters a calendar reads as structure, made into text.
   *
   * Order matters: the backslash goes first, or every escape added after it
   * would be escaped a second time. The colon is deliberately NOT here — it
   * separates a property name from its value, and only the first one on a
   * line counts, so "7:00" inside a title is fine.
   */
  function uciecz(s) {
    return String(s == null ? "" : s)
      .replace(/\\/g, "\\\\")
      .replace(/;/g, "\\;")
      .replace(/,/g, "\\,")
      .replace(/\r\n|\r|\n/g, "\\n");
  }

  function oktety(s) { return new global.TextEncoder().encode(s).length; }

  /**
   * One logical line cut into physical ones.
   *
   * It walks by CHARACTER and measures in OCTETS, which is the whole point:
   * cutting by character count lets an accented line through over the limit,
   * and cutting by byte offset splits a character in half. A surrogate pair
   * is taken as one unit for the same reason.
   */
  function zwin(linia) {
    var czesci = [], biezaca = "", waga = 0, limit = MAX_OKTETOW;
    for (var i = 0; i < linia.length; i++) {
      var ch = linia.charAt(i);
      if (ch >= "\uD800" && ch <= "\uDBFF" && i + 1 < linia.length) {
        ch += linia.charAt(i + 1);
        i++;
      }
      var dl = oktety(ch);
      if (waga + dl > limit) {
        czesci.push(biezaca);
        biezaca = "";
        waga = 0;
        limit = MAX_OKTETOW - 1;   /* the leading space of a continuation */
      }
      biezaca += ch;
      waga += dl;
    }
    czesci.push(biezaca);
    return czesci.join("\r\n ");
  }

  function dwa(n) { return (n < 10 ? "0" : "") + n; }

  /**
   * The date part of the start, taken in UTC.
   *
   * Mixing a UTC date with a local time reads odd and is deliberate. The
   * series repeats every day, so the only thing its start date has to be is
   * "around now"; taking it from UTC makes the file identical whatever the
   * timezone of the machine that wrote it, which is what lets the tests
   * assert bytes instead of shapes.
   */
  function dzien(ms) {
    var d = new global.Date(ms);
    return String(d.getUTCFullYear()) + dwa(d.getUTCMonth() + 1) + dwa(d.getUTCDate());
  }

  /** DTSTAMP is a real instant and therefore really is UTC. */
  function stempel(ms) {
    var d = new global.Date(ms);
    return dzien(ms) + "T" + dwa(d.getUTCHours()) + dwa(d.getUTCMinutes()) +
      dwa(d.getUTCSeconds()) + "Z";
  }

  /**
   * A daily reminder at the hour the student chose.
   *
   * @param {object} o
   * @param {number} o.godzina  0-23, local to whoever opens the file
   * @param {number} o.minuta   0-59
   * @param {string} o.tytul    what the calendar shows
   * @param {string} o.opis     the line under it, and the alarm's text
   * @param {string} o.uid      the event's identity; the caller makes it
   * @param {number} o.teraz    the instant of writing, for DTSTAMP
   * @returns {string} the whole file, CRLF throughout
   */
  function przypomnienie(o) {
    var p = o || {};
    var poczatek = dzien(p.teraz) + "T" + dwa(p.godzina || 0) + dwa(p.minuta || 0) + "00";

    var wiersze = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:" + PRODID,
      "CALSCALE:GREGORIAN",
      "BEGIN:VEVENT",
      "UID:" + uciecz(p.uid),
      "DTSTAMP:" + stempel(p.teraz),
      "DTSTART:" + poczatek,
      "RRULE:FREQ=DAILY",
      "SUMMARY:" + uciecz(p.tytul),
      "DESCRIPTION:" + uciecz(p.opis),
      "BEGIN:VALARM",
      "ACTION:DISPLAY",
      /* At the moment of the event, not before it: the event IS the moment. */
      "TRIGGER:PT0M",
      "DESCRIPTION:" + uciecz(p.opis),
      "END:VALARM",
      "END:VEVENT",
      "END:VCALENDAR"
    ];

    return wiersze.map(zwin).join("\r\n") + "\r\n";
  }

  global.Ics = {
    przypomnienie: przypomnienie,
    uciecz: uciecz,
    zwin: zwin,
    MAX_OKTETOW: MAX_OKTETOW
  };

})(window);
