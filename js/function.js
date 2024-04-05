function isPalindroma(parola) {
    let inizio = 0;
    let fine = parola.length - 1;
    while (inizio < fine) {
        if (parola[inizio] !== parola[fine]) {
            return false; // Se i caratteri non corrispondono, non è palindroma
        }
        inizio++;
        fine--;
    }
    return true; // Se il ciclo termina senza trovare differenze, è palindroma
}