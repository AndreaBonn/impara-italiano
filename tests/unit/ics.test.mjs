/* ============================================================
   The reminder file (assets/js/ics.js).

   This is the only thing the course produces that another program reads and
   acts on. Everything else it writes is read by the course itself, where a
   malformed byte shows up as a broken screen; here it shows up in somebody's
   calendar, or nowhere at all, and the student has no way to tell which.

   Three things are checked below and each one fails silently in a real
   calendar rather than loudly:

   - ESCAPING. A comma or a newline inside SUMMARY does not corrupt the line,
     it ENDS it, and what follows is read as a new iCalendar property. The
     course writes those strings today, so this is not about a hostile input:
     it is about a Polish or Italian title that happens to carry a comma.
   - FOLDING at 75 OCTETS, not characters. Accented letters are two bytes,
     so a line of 70 Polish characters can be 80 bytes, and a parser that
     enforces the limit drops it. Splitting inside a multi-byte character is
     worse: the file stops being UTF-8.
   - LOCAL TIME. DTSTART carries no Z and no TZID on purpose, which RFC 5545
     calls a floating time: "seven in the morning" means seven wherever the
     student is. A UTC stamp would move the reminder for everybody who is not
     in the timezone of whoever generated it.
   ============================================================ */
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { loadEngine } from "./_harness.mjs";

function ics() {
  return loadEngine({ files: ["assets/js/ics.js"] }).sandbox.Ics;
}

/* A fixed instant, because DTSTAMP is the one field that comes from a clock.
   2026-09-11 08:30:00 UTC. */
const TERAZ = Date.UTC(2026, 8, 11, 8, 30, 0);

function plik(over) {
  return ics().przypomnienie(Object.assign({
    godzina: 7, minuta: 0,
    tytul: "Włoski",
    opis: "Powtórki czekają",
    uid: "test-uid-1",
    teraz: TERAZ
  }, over || {}));
}

/** The unfolded value of a property, with the folding undone the way a parser does it. */
function wartosc(tekst, nazwa) {
  const rozwiniety = tekst.replace(/\r\n /g, "");
  const wiersz = rozwiniety.split("\r\n").filter((l) => l.indexOf(nazwa + ":") === 0)[0];
  return wiersz === undefined ? null : wiersz.slice(nazwa.length + 1);
}

describe("ics: the shape of the file", () => {
  test("a calendar with one recurring event and an alarm", () => {
    const out = plik();
    assert.match(out, /^BEGIN:VCALENDAR\r\n/);
    assert.match(out, /\r\nEND:VCALENDAR\r\n$/);
    assert.equal((out.match(/BEGIN:VEVENT/g) || []).length, 1);
    assert.equal(wartosc(out, "RRULE"), "FREQ=DAILY");
    assert.equal((out.match(/BEGIN:VALARM/g) || []).length, 1);
  });

  test("every line ends with CRLF, none with a bare LF", () => {
    const out = plik();
    assert.equal(out.indexOf("\n\n"), -1);
    /* Every \n in the file is preceded by \r. A bare LF is accepted by some
       parsers and rejected by others, which is the worst of both. */
    for (let i = 0; i < out.length; i++) {
      if (out.charAt(i) === "\n") assert.equal(out.charAt(i - 1), "\r", "bare LF at " + i);
    }
  });

  test("the hour chosen by the student is the hour in DTSTART, with no zone", () => {
    const out = plik({ godzina: 7, minuta: 5 });
    assert.equal(wartosc(out, "DTSTART"), "20260911T070500");
  });

  test("DTSTAMP is UTC, because that one is a real instant", () => {
    assert.equal(wartosc(plik(), "DTSTAMP"), "20260911T083000Z");
  });

  test("the series starts today whether or not the hour has passed", () => {
    /* At 08:30 a reminder for 07:00 gets today's date all the same. A DAILY
       series whose first occurrence is behind us is ordinary iCalendar: the
       calendar shows the next one. Moving the start to tomorrow would be a
       branch that buys nothing and can only be wrong across midnight. */
    assert.equal(wartosc(plik({ godzina: 7 }), "DTSTART"), "20260911T070000");
    assert.equal(wartosc(plik({ godzina: 9 }), "DTSTART"), "20260911T090000");
  });
});

describe("ics: escaping, the part a calendar reads as structure", () => {
  test("a comma in the title does not end the property", () => {
    const out = plik({ tytul: "Włoski, codziennie" });
    assert.equal(wartosc(out, "SUMMARY"), "Włoski\\, codziennie");
  });

  test("a semicolon and a backslash are escaped too", () => {
    const out = plik({ tytul: "a;b\\c" });
    assert.equal(wartosc(out, "SUMMARY"), "a\\;b\\\\c");
  });

  test("a newline becomes the two characters backslash-n, never a real break", () => {
    const out = plik({ opis: "pierwszy\ndrugi" });
    assert.equal(wartosc(out, "DESCRIPTION"), "pierwszy\\ndrugi");
    /* The positive half of the pair: the line really is one line. Without
       this the assertion above would also pass on a file split in two, where
       "DESCRIPTION:pierwszy" is followed by a property called "drugi". */
    assert.equal(out.split("\r\n").filter((l) => l.indexOf("drugi") === 0).length, 0);
  });

  test("a title that tries to inject a property injects nothing", () => {
    const out = plik({ tytul: "x\r\nATTENDEE:mailto:kto@example.com" });
    assert.equal(out.indexOf("\r\nATTENDEE:"), -1);
  });

  test("the colon is NOT escaped: it separates name from value and only the first one counts", () => {
    assert.equal(wartosc(plik({ tytul: "7:00" }), "SUMMARY"), "7:00");
  });
});

describe("ics: folding by octets", () => {
  function oktety(s) { return new TextEncoder().encode(s).length; }

  test("no line goes past 75 octets", () => {
    const out = plik({ opis: "ą".repeat(400) });
    out.split("\r\n").forEach((l) => {
      assert.ok(oktety(l) <= 75, "line of " + oktety(l) + " octets: " + l.slice(0, 20));
    });
  });

  test("the leading space of a continuation counts towards its own 75", () => {
    /* This needs ONE-byte characters to say anything. With two-byte ones the
       limit is odd and the last character does not fit either way, so a
       continuation that forgets to account for its own leading space comes
       out the same length and the mistake hides. The mutation gate found
       this hole by leaving that line green. */
    const out = plik({ opis: "a".repeat(400) });
    const linie = out.split("\r\n");
    const ciagi = linie.filter((l) => l.indexOf(" ") === 0);
    assert.ok(ciagi.length > 0, "nothing was folded, so nothing is being checked");
    ciagi.forEach((l) => assert.ok(oktety(l) <= 75, "continuation of " + oktety(l) + " octets"));
  });

  test("a folded line still reads back as the same value", () => {
    const dlugi = "ą".repeat(200);
    assert.equal(wartosc(plik({ opis: dlugi }), "DESCRIPTION"), dlugi);
  });

  test("folding never splits a two-byte character", () => {
    /* A split inside a character leaves half a code point on each line and
       the file stops being valid UTF-8. Decoding it back is the check: a
       broken pair comes out as U+FFFD. */
    const out = plik({ opis: "ó".repeat(300) });
    assert.equal(out.indexOf("�"), -1);
    assert.equal(wartosc(out, "DESCRIPTION"), "ó".repeat(300));
  });

  test("folding never splits a surrogate pair either", () => {
    /* An emoji is one character to a person, two units to JavaScript and
       four octets on the wire. Cutting between the two units leaves a lone
       surrogate on each line, and the encoder turns those into U+FFFD: the
       reminder arrives in the calendar with a black diamond where the course
       put a flag. The course's own strings carry emoji, so this is the
       ordinary case rather than a hostile one. */
    const out = plik({ opis: "🇮🇹".repeat(60) });
    assert.equal(out.indexOf("�"), -1);
    assert.equal(wartosc(out, "DESCRIPTION"), "🇮🇹".repeat(60));
  });

  test("a short line is not folded at all", () => {
    const out = plik({ opis: "krótko" });
    assert.equal(out.indexOf("\r\n krótko"), -1);
    assert.equal(wartosc(out, "DESCRIPTION"), "krótko");
  });
});

describe("ics: the identity of the event", () => {
  test("the uid handed in is the uid written", () => {
    assert.equal(wartosc(plik({ uid: "abc-123" }), "UID"), "abc-123");
  });

  test("two files made from the same arguments are identical", () => {
    /* Nothing inside reaches for a clock or for randomness: both arrive as
       arguments. That is what makes every assertion above stable. */
    assert.equal(plik(), plik());
  });
});
