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

if (isNaN(userTripLength) || isNaN(userAge)) {
    outputMessage = "C'è stato un errore, riprova";
} else {
    isMinor = userAge < 18;
    isOver = userAge > 65;

    console.log("isMinor", isMinor);
    console.log("isOver", isOver);

    if (isMinor) {
        outputPrice = outputPrice - (outputPrice / 100 * minorsDiscount);
    }
    if (isOver) {
        outputPrice = outputPrice - (outputPrice / 100 * overDiscount);
    }

    outputMessage = `Il costo del biglietto è di: € ${outputPrice.toFixed(2)}`;
}

alert(outputMessage);