
// individua palindromi

// function isPalindroma(parola) {
//     let inizio = 0;
//     let fine = parola.length - 1;
//     while (inizio < fine) {
//         if (parola[inizio] !== parola[fine]) {
//             return false; // Se i caratteri non corrispondono, non è palindroma
//         }
//         inizio++;
//         fine--;
//     }
//     return true; // Se il ciclo termina senza trovare differenze, è palindroma
// }



// genera num da 1 a 5

function generaNumeroRandom() {
    return Math.floor(Math.random() * 5) + 1;
}