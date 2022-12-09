/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
pets.sort();
for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.

*/

pets.push(pets.shift());
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[i].licensePlate = 10 + i;
}
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Audi",
  model: "A5",
  color: "black",
  trims: ["titanium", "st", "active"],
  licensePlate: 13,
});
console.log(cars);

for (let i = 0; i < cars.length; i++) {
  cars[i].trims.splice(cars[i].trims.length - 1, 1);
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims.shift());
}
console.log(justTrims);
/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt() === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let index = 0;
while (index < numericArray.length) {
  if (numericArray[index] <= 32) {
    console.log(numericArray[index]);
  }
  index++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/

/*

primo metodo molto più macchinoso:

const charactersArray = ["g", "n", "u", "z", "d"];
const alf = [];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "a":
      alf.push(1);
      break;
    case "b":
      alf.push(2);
      break;
    case "c":
      alf.push(3);
      break;
    case "d":
      alf.push(4);
      break;
    case "e":
      alf.push(5);
      break;
    case "f":
      alf.push(6);
      break;
    case "g":
      alf.push(7);
      break;
    case "h":
      alf.push(8);
      break;
    case "i":
      alf.push(9);
      break;
    case "l":
      alf.push(10);
      break;
    case "m":
      alf.push(11);
      break;
    case "n":
      alf.push(12);
      break;
    case "o":
      alf.push(13);
      break;
    case "p":
      alf.push(14);
      break;
    case "q":
      alf.push(15);
      break;
    case "r":
      alf.push(16);
      break;
    case "s":
      alf.push(17);
      break;
    case "t":
      alf.push(18);
      break;
    case "u":
      alf.push(19);
      break;
    case "v":
      alf.push(20);
      break;
    case "z":
      alf.push(21);
      break;
  }
}
console.log(alf);


Oppure:
Secondo metodo con meno codice
*/

const charactersArray = ["g", "n", "u", "z", "d"];
const alfabetoIta = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "z",
];
let alfabetNum = [];

for (let i = 0; i < charactersArray.length; i++) {
  for (let i2 = 0; i2 < alfabetoIta.length; i2++)
    switch (true) {
      case alfabetoIta[i2] === charactersArray[i]:
        alfabetNum.push(i2 + 1);
    }
}
console.log(alfabetNum);

/*      Questo algoritmo invece mette automaticamente in ordine di grandezza i numeri all interno dell array alfabetNum 

for (let i = 0; i < alfabetoIta.length; i++) {
  for (let i2 = 0; i2 < charactersArray.length; i2++)
    switch (true) {
      case alfabetoIta[i] === charactersArray[i2]:
        alfabetNum.push(i + 1);
    }
}
console.log(alfabetNum);
*/
