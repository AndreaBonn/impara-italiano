/* ============================================================
   Minimal pairs — English text.

   The contrastive notes are written for an English speaker, not
   translated: the problem is different in every language. English
   has no phonemic consonant length, so the doubled consonants are
   inaudible at first; English stress does move, so that section is
   easier here than it is for a French or Polish speaker.
   ============================================================ */
LINGUAI.addStrings("en", {

  "ph:ph-doppie": {
    title: "Double consonants",
    note: "A double consonant is one sound held longer, not two separate ones. In nonno the tongue stays against the ridge behind your teeth about twice as long as in nono.",
    contrast: "English writes double letters all the time and pronounces them single: <i>rabbit</i>, <i>bitter</i>, <i>summer</i>. So your ear has learned that the doubling is a spelling habit, and in Italian it is the word. Compare <i>unnamed</i> with <i>unaimed</i> — that held n is the length Italian uses everywhere. Learn to hear it before you try to say it: until the ear catches the difference, the mouth will not make it.",
    pairs: [
      { glossA: "grandfather", glossB: "ninth" },
      { glossA: "seven", glossB: "thirst" },
      { glossA: "till, crate", glossB: "house" },
      { glossA: "pen", glossB: "pity, penalty" },
      { glossA: "ball", glossB: "shovel" },
      { glossA: "sleep", glossB: "I am" },
      { glossA: "night", glossB: "notes" },
      { glossA: "red (f.)", glossB: "pink, rose" }
    ]
  },

  "ph:ph-accento": {
    title: "Where the stress falls",
    note: "Italian stress can land on the third syllable from the end, the second, or the last, and it decides which word you said. The written accent (àncora) is a teaching aid; ordinary Italian text does not mark it.",
    contrast: "This one is familiar territory: English does the same thing with <i>récord</i> and <i>recórd</i>, <i>présent</i> and <i>presént</i>. The trap is that Italian looks phonetic, so you read at speed and default to the second-to-last syllable, which is right most of the time and wrong exactly where it matters. <i>Àncora</i> is an anchor, <i>ancòra</i> means still.",
    pairs: [
      { glossA: "anchor", glossB: "still, again" },
      { glossA: "princes", glossB: "principles" },
      { glossA: "immediately", glossB: "undergone, suffered" },
      { glossA: "I turn up, it happens to me", glossB: "understood" },
      { glossA: "to read", glossB: "light (f. pl.)" }
    ]
  },

  "ph:ph-e-aperta": {
    title: "Open and closed E",
    note: "Open è is pronounced with the mouth wider than closed é. The distinction varies by region and Italians themselves disagree about it, but in these two pairs it changes the word.",
    contrast: "English has both sounds — the vowel of <i>bed</i> and the one starting <i>they</i> — so you can make them; what you have never done is treat the choice as meaningful. That is the whole task here. It is also the least costly mistake in this section: a wrong e usually survives the context, while a wrong consonant length does not.",
    pairs: [
      { glossA: "peach", glossB: "fishing" },
      { glossA: "axe", glossB: "he/she accepts" }
    ]
  },

  "ph:ph-gli": {
    title: "The GL sound",
    note: "gl before i is a single sound: the middle of the tongue touches the palate and air escapes along the sides. It is neither an l nor an l followed by y.",
    contrast: "English has nothing like it, and the reflex is to reach for the <i>lli</i> of <i>million</i>, which comes out as two sounds where Italian has one. Say <i>million</i> and hold the middle: that held part, on its own and without the separate i, is close to figli.",
    pairs: [
      { glossA: "the (m. pl.), to him", glossB: "them (m.)" },
      { glossA: "sons", glossB: "threads, wires" },
      { glossA: "wife", glossB: "soft (pl.)" }
    ]
  },

  "ph:ph-dolci-dure": {
    title: "Soft and hard C and G",
    note: "c and g go soft before e and i: ci sounds like the ch of chip, gi like the j of jam. An h wedged between hardens them again: chi is key, ghi is give.",
    contrast: "Nothing here is hard to hear; it is easy to misread. English h is a sound of its own, so you expect one, and <i>pesche</i> comes out as <i>pesh-eh</i> instead of <i>pes-keh</i>, peaches. In Italian that h is not pronounced at all — it exists only to change the consonant beside it.",
    pairs: [
      { glossA: "kisses", glossB: "grubs, bugs" },
      { glossA: "fish", glossB: "peaches" },
      { glossA: "turn, ride", glossB: "dormouse" }
    ]
  }

});
