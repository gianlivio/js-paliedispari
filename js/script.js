// let parolaUtente = prompt("inserisci una parola");
// console.log("La parola inserita è:", parolaUtente);

// if (isPalindroma(parolaUtente)) {
//     alert(parolaUtente + " è palindroma");
// } else {
//     alert(parolaUtente + " non è palindroma");
// }








let sceltaUtente = prompt("Scegli pari o dispari");



// VALIDAZIONE pari/dispari
while (sceltaUtente !== "pari" && sceltaUtente !== "dispari") {
    sceltaUtente = prompt("Scelta non valida. Scegli 'pari' o 'dispari':");
}
console.log(sceltaUtente);

// Conversione del numero utente in un intero e validazione numero
let numUtente = parseInt(prompt("Digita un numero da 1 a 5"));
while (isNaN(numUtente) || numUtente < 1 || numUtente > 5) {
    numUtente = parseInt(prompt("Valore non valido. Digita un numero da 1 a 5"));
}
console.log(numUtente);



let numeroComputer = generaNumeroRandom();
console.log(numeroComputer);

let somma = numUtente + numeroComputer;
console.log(somma);