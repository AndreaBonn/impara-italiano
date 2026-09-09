/* ============================================================
   Learner-language text (en) for data/core/conversations.js
   Keys point at ids in the neutral layer; arrays merge by index,
   so their length has to match core.
   Checked by scripts/parity.mjs.

   Note: the Italian model answers live in core and are recorded as
   audio, so a task that leads to "Sono dalla Polonia" still says
   Poland here. Changing the country would mean regenerating mp3s.
   ============================================================ */
LINGUAI.addStrings("en", {
  "conv:bar-mattina": {
    title: "Breakfast at the bar",
    setting: "Monday, 8:15. You walk into the bar on the corner. The barista knows your face.",
    closing: "Three minutes, one coffee, not a second wasted. That's Italian breakfast.",
    turns: [
      { tr: "Morning! What can I get you?" },
      { task: "Say hello and order a coffee and a cornetto.", tr: "Good morning, a coffee and a cornetto please." },
      { tr: "Plain cornetto or filled with cream?" },
      { task: "Say you'd rather have it plain.", tr: "Plain, thanks." },
      { tr: "Perfect. That's two thirty." },
      { task: "Say you're paying by card.", tr: "Can I pay by card?" },
      { tr: "Of course, the reader is right here. Have a good one!" },
      { task: "Say thank you and goodbye.", tr: "Thanks, have a good day!" }
    ]
  },
  "conv:presentarsi": {
    title: "First day of class",
    setting: "A language school in Florence. Somebody sits down next to you before class.",
    closing: "Four sentences and you've made your first Italian friend. That's all it takes.",
    turns: [
      { tr: "Hi! Can I sit here?" },
      { task: "Agree, politely.", tr: "Sure, go ahead!" },
      { tr: "Thanks. I'm Matteo, what's your name?" },
      { task: "Introduce yourself by name.", tr: "My name is Anna." },
      { tr: "Nice to meet you! Where are you from?" },
      { task: "Say you're from Poland — that's the recorded model answer.", tr: "I'm from Poland." },
      { tr: "Great! And what do you do?" },
      { task: "Say what you do for a living (a teacher, for instance).", tr: "I'm a teacher." }
    ]
  },
  "conv:mercato": {
    title: "At the neighborhood market",
    setting: "Saturday morning, an open-air market. The vendor is shouting prices across the street.",
    closing: "At the market it's pace and precision that count. Etti, chili, basta così.",
    turns: [
      { tr: "Yes ma'am, what'll it be! Beautiful tomatoes today." },
      { task: "Ask for a kilo of tomatoes.", tr: "A kilo of tomatoes, please." },
      { tr: "Here you go. Anything else? Apples are cheap today." },
      { task: "Ask how much the apples cost.", tr: "How much are the apples?" },
      { tr: "Two euros a kilo. Sweet as anything." },
      { task: "Say that's enough and ask for the total.", tr: "That's all, how much altogether?" },
      { tr: "Four fifty. Thank you!" }
    ]
  },
  "conv:ristorante": {
    title: "Dinner at a restaurant",
    setting: "Evening, a restaurant, no reservation. The server comes over with menus.",
    closing: "Ordering in Italian follows a fixed rhythm: primo, secondo, contorno, dolce, caffè.",
    turns: [
      { tr: "Good evening! Do you have a reservation?" },
      {
        task: "Say you don't, and ask for a table for two.",
        tr: "No, is there a table for two?"
      },
      { tr: "Of course, take a seat. Here are the menus. Something to drink?" },
      {
        task: "Ask for a bottle of sparkling water and a glass of red wine.",
        tr: "A bottle of sparkling water and a glass of red wine."
      },
      { tr: "Very good. And for your first course?" },
      {
        task: "Order the cacio e pepe and ask whether it's spicy.",
        tr: "I'll have the cacio e pepe. Is it spicy?"
      },
      { tr: "Only a little, you can taste the pepper. Would you like a second course?" },
      {
        task: "Decline politely and ask for the check afterward.",
        tr: "No thank you, just the check later please."
      }
    ]
  },
  "conv:treno": {
    title: "At the ticket window",
    setting: "Roma Termini, a line at the window, the departures board flickering overhead.",
    closing: "Regionale or Frecciarossa — the difference is an hour of travel and thirty euros.",
    turns: [
      { tr: "Next, please." },
      {
        task: "Ask for a ticket to Florence for this afternoon.",
        tr: "A ticket to Florence for this afternoon."
      },
      { tr: "Regional or Frecciarossa? The Freccia takes an hour and a half." },
      { task: "Ask how much the Frecciarossa costs.", tr: "How much is the Frecciarossa?" },
      { tr: "Forty-two euros in second class." },
      { task: "Accept and ask which platform it leaves from.", tr: "All right, which platform does it leave from?" },
      { tr: "Platform 9, in twenty minutes. Remember to validate it if you take the regional." }
    ]
  },
  "conv:medico": {
    title: "At the doctor's",
    setting: "A clinic, walk-in visit. The doctor asks what's wrong.",
    closing: "Three phrases will save you at the doctor's: mi fa male, da quanto tempo, ho la febbre.",
    turns: [
      { tr: "Good morning, have a seat. What's going on?" },
      { task: "Say your throat hurts and you have a fever.", tr: "My throat hurts and I have a fever." },
      { tr: "For how long?" },
      { task: "Say for three days.", tr: "For three days." },
      { tr: "Are you allergic to any medication?" },
      { task: "Say you have no allergies.", tr: "No, I don't have any allergies." },
      { tr: "I'll prescribe an antibiotic. Rest and plenty of water." },
      { task: "Ask how many times a day to take it.", tr: "How many times a day should I take it?" }
    ]
  },
  "conv:affitto": {
    title: "Viewing an apartment",
    setting: "An agent shows you a one-bedroom in Bologna. You have ten minutes and a hundred questions.",
    closing: "Three things to always ask about: spese condominiali, cauzione, tipo di contratto.",
    turns: [
      { tr: "So, here's the one-bedroom. As you can see, bright and just renovated." },
      { task: "Ask how much the monthly rent is.", tr: "How much is the monthly rent?" },
      { tr: "Seven hundred a month, not counting fees." },
      { task: "Ask how much the building fees are.", tr: "How much are the building fees?" },
      { tr: "About ninety euros, heating included." },
      { task: "Ask about the type of lease and the size of the deposit.", tr: "What kind of lease is it? And how much is the deposit?" },
      { tr: "A 4+4 lease, deposit of three months' rent." },
      { task: "Say you'll think it over and get back to them tomorrow.", tr: "I'll think about it and let you know tomorrow." }
    ]
  },
  "conv:colloquio": {
    title: "A job interview",
    setting: "A marketing agency in Milan. HR opens with the classic.",
    closing: "In an Italian interview you speak concretely, and you don't undersell yourself.",
    turns: [
      { tr: "All right, tell me a bit about yourself." },
      {
        task: "Say your name, how much experience you have and in what.",
        tr: "My name is Anna, I have five years of experience in digital marketing."
      },
      { tr: "Why did you decide to apply here?" },
      {
        task: "Say their approach to international projects interests you.",
        tr: "Because I'm interested in your approach to international projects."
      },
      { tr: "What would you say is your weakness?" },
      {
        task: "Admit a weakness and say how you're working on it.",
        tr: "I tend to want to control everything, but I'm learning to delegate."
      },
      { tr: "Good. Do you have any questions for us?" },
      {
        task: "Ask about the team and the next steps in the process.",
        tr: "Yes: what does the team look like, and what are the next steps?"
      }
    ]
  },
  "conv:burocrazia": {
    title: "At the tax office",
    setting: "In line for a codice fiscale. You're number 87, the display says 61.",
    closing: "The codice fiscale is the key to everything in Italy: bank accounts, contracts, a doctor, a SIM card.",
    turns: [
      { tr: "Number eighty-seven, window three. Good morning, what do you need?" },
      { task: "Say you need to get a codice fiscale.", tr: "I need to get a codice fiscale." },
      { tr: "Do you have valid ID and a filled-in form?" },
      {
        task: "Say you have your passport but not the form.",
        tr: "I have my passport, but I don't have the form."
      },
      { tr: "No problem, I'll give you one. Print in block letters, please." },
      { task: "Ask how long it takes.", tr: "How long will it take?" },
      { tr: "I'll issue it right now, it's immediate." }
    ]
  },
  "conv:dibattito": {
    title: "An argument over dinner",
    setting: "Dinner at a friend's place. Talk turns to remote work, and nobody plans to back down.",
    closing: "Italians interrupt each other in an argument — that isn't rudeness, it's engagement.",
    turns: [
      { tr: "If you ask me, remote work destroyed any sense of a team. What do you think?" },
      {
        task: "Agree in part, then raise a counterpoint.",
        tr: "I partly agree, but it also cut the stress for people who commute."
      },
      { tr: "Sure, but don't you think younger people learn less when they're not in the office?" },
      {
        task: "Answer that it depends on how the company organizes mentoring.",
        tr: "That depends on how the company organizes mentoring."
      },
      { tr: "There I'll grant you the point. But hybrid is the worst of both worlds, in my opinion." },
      {
        task: "Disagree firmly and back it up with one argument.",
        tr: "I completely disagree: hybrid lets you choose depending on the kind of work."
      }
    ]
  },
  "conv:ristorante-scelte": {
    title: "At the table, with a few decisions",
    setting: "Friday evening, the trattoria round the corner. This time the conversation follows what you say: at three points you pick one of two answers.",
    closing: "The bill at the end matched what was actually ordered. That is what separates a choice from a decoration.",
    turns: [
      { tr: "Good evening. Do you have a reservation?" },
      { task: "Say whether you have a reservation.", opts: [
        { tr: "Yes, I have a reservation under Rossi." },
        { tr: "No, there are two of us. Is there a table?" }
      ] },
      { tr: "Perfect. The table by the window. This way, please." },
      { tr: "There is a table for two at the back of the room. Please." },
      { tr: "Here is the menu. Something to drink in the meantime?" },
      { task: "Order a bottle of still water.", tr: "A bottle of still water, please." },
      { tr: "Still water, right away. And for the first course?" },
      { task: "Choose your first course.", opts: [
        { tr: "Carbonara for me." },
        { tr: "Pasta with tomato: I am vegetarian." }
      ] },
      { tr: "The carbonara is excellent tonight, the guanciale is crisp." },
      { tr: "Then I would suggest tomato and basil: the basil comes from our own garden." },
      { tr: "A dessert to finish? We make the tiramisu ourselves." },
      { task: "Decide whether you want dessert.", opts: [
        { tr: "Yes, the tiramisu, thank you." },
        { tr: "No, thank you, just a coffee." }
      ] },
      { tr: "Excellent choice, coming right up." },
      { tr: "A coffee, very good." },
      { tr: "Here is the bill: first course, water and tiramisu. Twenty-two euros." },
      { tr: "Here is the bill: first course, water and coffee. Sixteen euros." },
      { task: "Ask whether you can pay by card.", tr: "Can I pay by card?" },
      { tr: "Of course, the card reader is right here. Thank you and have a good evening." }
    ]
  }
});
