/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log("Primo esercizio", pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
pets.sort();
console.log(pets);
//ho fatto una ricerca su google per imparare un metodo per ordinare in ordine alfabetico e ho scoperto "sort"

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
const ntELungo = function () {
  let x;
  x = pets.length - 1;
  return x;
};
for (let i = ntELungo(); i !== -1; i--) {
  console.log("Secondo", pets[i]);
}

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Es. 4: Array prima dello spostamento", pets);
const elemento1 = pets.shift();
pets.push(elemento1);
console.log("Es. 4: Array dopo dello spostamento", pets);
//Nota: ho utilizzato .shift() (facendo una ricerca) per eliminare un valore dell'array e al tempo stesso ricevere il suo valore

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
let licensePlate;
for (let i = 0; i < cars.length; i++) {
  if (cars[i].brand === "Ford") {
    cars[i].licensePlate = "No";
  } else {
    cars[i].licensePlate = "Yes";
  }
}
console.log("Esercizio 5: ", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.push({
  brand: "Fiat",
  model: "Punto",
  color: "green",
  trims: ["Grande punto", "Non so"],
});
for (let i = 0; i < cars.length; i++) {
  if (cars[i].trims.length > 0) {
    cars[i].trims.pop();
  }
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.indexOf("b") === 0) {
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
let i = 0;
while (i < numericArray.length && numericArray[i] !== 32) {
  console.log("Es. 9 - Stampa finchè non arriviamo a 32!", numericArray[i]);
  i++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const z = charactersArray.length;
const arrayInd = [];
for (let i = 0; i < z; i++) {
  switch (charactersArray[i]) {
    case "a":
      arrayInd.push(1);
      break;
    case "b":
      arrayInd.push(2);
      break;
    case "c":
      arrayInd.push(3);
      break;
    case "d":
      arrayInd.push(4);
      break;
    case "e":
      arrayInd.push(5);
      break;
    case "f":
      arrayInd.push(6);
      break;
    case "g":
      arrayInd.push(7);
      break;
    case "h":
      arrayInd.push(8);
      break;
    case "i":
      arrayInd.push(9);
      break;
    case "j":
      arrayInd.push(10);
      break;
    case "k":
      arrayInd.push(11);
      break;
    case "l":
      arrayInd.push(12);
      break;
    case "m":
      arrayInd.push(13);
      break;
    case "n":
      arrayInd.push(14);
      break;
    case "o":
      arrayInd.push(15);
      break;
    case "p":
      arrayInd.push(16);
      break;
    case "q":
      arrayInd.push(17);
      break;
    case "r":
      arrayInd.push(18);
      break;
    case "s":
      arrayInd.push(19);
      break;
    case "t":
      arrayInd.push(20);
      break;
    case "u":
      arrayInd.push(21);
      break;
    case "v":
      arrayInd.push(22);
      break;
    case "w":
      arrayInd.push(23);
      break;
    case "x":
      arrayInd.push(24);
      break;
    case "y":
      arrayInd.push(25);
      break;
    case "z":
      arrayInd.push(26);
      break;
  }
}
console.log(arrayInd);
