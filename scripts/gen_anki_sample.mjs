/* A sample for the check_anki.py gate: 40 cards holding whatever this format
   breaks on — accents, apostrophes, commas, quotation marks, a line break
   inside a field and formula prefixes. It serialises the PRODUCTION
   assets/js/anki.js, not a copy. */
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";
const ROOT="/home/bonn/Documenti/00_Lavoro/ProgettiPersonali/LinguAI/versione-statica";
const box={console}; box.window=box; box.global=box; vm.createContext(box);
vm.runInContext(readFileSync(`${ROOT}/assets/js/anki.js`,"utf8"),box);

const KARTE=[
 {it:"un caffè",tr:"kawa",tag:"a1"},
 {it:"perché",tr:"dlaczego / bo",tag:"a1"},
 {it:"l'acqua",tr:"woda",tag:"a1"},
 {it:"città",tr:"miasto",tag:"a1"},
 {it:"È vero?",tr:"czy to prawda?",tag:"a1"},
 {it:"sì, però",tr:"tak, ale",tag:"a1"},
 {it:"dell'anno",tr:"roku",tag:"a2"},
 {it:"tra l'altro",tr:"poza tym",tag:"b1"},
 {it:'dice "no"',tr:'mówi „nie”',tag:"b1"},
 {it:"uno, due, tre",tr:"raz, dwa, trzy",tag:"a1"},
 {it:"=SOMMA(A1:A9)",tr:"pułapka: formuła",tag:"test"},
 {it:"+39 06 1234",tr:"numer telefonu",tag:"test"},
 {it:"-cento",tr:"minus sto",tag:"test"},
 {it:"@casa",tr:"w domu",tag:"test"},
 {it:"riga uno\nriga due",tr:"dwie linie",tag:"test"},
 {it:"pèsca",tr:"brzoskwinia",tag:"fon"},
 {it:"già",tr:"już",tag:"a1"},
 {it:"più",tr:"więcej",tag:"a1"},
 {it:"qual è",tr:"jaki jest",tag:"a1"},
 {it:"po' di",tr:"trochę",tag:"a1"}
];
for(let i=0;i<20;i++) KARTE.push({it:`parola${i} con, virgola`,tr:`słowo${i}`,tag:"bulk"});
writeFileSync(process.argv[2], box.Anki.toTsv(KARTE));
console.log("carte:",KARTE.length,"| byte:",box.Anki.toTsv(KARTE).length);
