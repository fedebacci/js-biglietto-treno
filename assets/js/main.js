// @ INFORMAZIONI NOTE
const ticketPriceForKM = 0.21;
const minorsDiscount = 20;
const overDiscount = 40;

// @ INFORMAZIONI RICAVATE DALL'UTENTE
const userTripLength = parseInt(prompt("Di quanti chilometri sarà il viaggio?"));
const userAge = parseInt(prompt("Quanti anni hai?"));
console.log("userTripLength", userTripLength);
console.log("userAge", userAge);

// @ PREPARAZIONE INFORMAZIONI NECESSARIE PER IL CALCOLO
let outputMessage;
let outputPrice = ticketPriceForKM * userTripLength;
console.log("outputPrice", outputPrice);

// @ SVOLGIMENTO DEL CALCOLO
if (isNaN(userTripLength) || isNaN(userAge)) {
    outputMessage = "C'è stato un errore, leggi le istruzioni sotto riportate e riprova.";

    if (isNaN(userTripLength)) {
        outputMessage = `${outputMessage} \n(I chilometri devono essere espressi sotto forma di numero)`
    }
    if (isNaN(userAge)) {
        outputMessage = `${outputMessage} \n(L'età deve essere espressa sotto forma di numero)`
    }
} else {
    isMinor = userAge < 18;
    isOver = userAge > 65;
    console.log("isMinor", isMinor);
    console.log("isOver", isOver);

    if (isMinor) {
        console.log("Prezzo non scontato:", outputPrice)
        console.log("Sconto in percentuale:", minorsDiscount)
        console.log("Sconto in €:", outputPrice / 100 * minorsDiscount)
        outputPrice = outputPrice - (outputPrice / 100 * minorsDiscount);
        console.log("Prezzo con sconto applicato:", outputPrice)
    }
    if (isOver) {
        console.log("Prezzo non scontato:", outputPrice)
        console.log("Sconto in percentuale:", outputPrice)
        console.log("Sconto in €:", outputPrice / 100 * overDiscount)
        outputPrice = outputPrice - (outputPrice / 100 * overDiscount);
        console.log("Prezzo con sconto applicato:", outputPrice)
    }

    outputMessage = `Il costo del biglietto è di: € ${outputPrice.toFixed(2)}`;
}

// @ COMUNICAZIONE DEL PREZZO ALL'UTENTE
alert(outputMessage);