// chiedo all'utente numero di km che vuole percorrere

let kmUtente = prompt("Quanti Km devi percorrere ?");

if (isNaN(kmUtente)) {
    alert("I Km inseriti non sono validi, devi inserire un numero !");
}

else {

    // chiedo all'utente l'età

    const anniUtente = prompt("Quanti anni hai ?");

    if (isNaN(anniUtente)) {
        alert("L'età inserita non è valida, devi inserire un numero !");
    }

    else {

        // calcolo del costo del biglietto (generico)

        let prezzoBiglietto = kmUtente * 0.21

        console.log(prezzoBiglietto)

        // sconto per minorenni -20% e anziani -40%

        if (anniUtente < 18) {
            prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto * 20) / 100));
        }

        else if (anniUtente >= 65) {
            prezzoBiglietto = (prezzoBiglietto - ((prezzoBiglietto * 40) / 100));
        }

        console.log(prezzoBiglietto)

        // mostra all'utente il costo del biglietto in €

        alert("Il costo del tuo biglietto è di € " + prezzoBiglietto.toFixed(2));

    }

}






