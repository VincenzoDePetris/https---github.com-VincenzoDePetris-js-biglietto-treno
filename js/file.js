// const km = parseInt(document.getElementById("km"));

// const età = parseInt(document.getElementById("anni"));

// const btn1 = document.getElementById("btn1");

// var costo = km * 0.21;

// const scontoanziani = 40;

// const scontogiovani = 20;

// if (età < 19) {
//   function fun1() {
//     output.innerHTML =
//       "il costo del biglietto è " +
//       (costo - (costo / 100) * scontogiovani) +
//       "€";
//   }
//   btn1.addEventListener("click", fun1);
// } else if (età > 65) {
//   function fun2() {
//     output.innerHTML =
//       "il costo del biglietto è " +
//       (costo = costo - (costo / 100) * scontoanziani) +
//       "€";
//   }
//   btn1.addEventListener("click", fun2);
// } else {
//   function fun3() {
//     output.innerHTML = "il costo del biglietto è " + costo + "€";
//   }
//   btn1.addEventListener("click", fun3);
// }

const nameInput = document.getElementById("name-input");
const surnameInput = document.getElementById("surname-input");
const kmsInput = document.getElementById("km-input");
const ageInput = document.getElementById("age-input");
const generateTicketButton = document.getElementById("generate-ticket");
const scontoGiovani = 0.8;
const scontoAnziani = 0.6;
// ticket element
const ticketSection = document.getElementById("ticket-section");
const ticketNameElement = document.getElementById("ticket-name-element");
const ticketPnrElement = document.getElementById("ticket-pnr-element");
const ticketCoachElement = document.getElementById("ticket-coach-element");
const ticketStationElement = document.getElementById("ticket-station-element");
const ticketPriceElement = document.getElementById("ticket-price-element");

generateTicketButton.addEventListener("click", function () {
  const nameValue = nameInput.value;
  const surnameValue = surnameInput.value;
  const kmsValue = parseFloat(kmsInput.value);
  const ageValue = parseInt(ageInput.value);

  // calcolo il prezzo del biglietto
  const tariffaTicket = 0.21;
  let ticketPrice = tariffaTicket * kmsValue;

  if (ageValue < 18) {
    ticketPrice *= scontoGiovani;
  } else if (ageValue > 65) {
    ticketPrice *= scontoAnziani;
  } else {
    ticketPrice;
  }

  const ticketName = nameValue + "" + surnameValue;
  const ticketPnr = "52468";
  const ticketCoach = "45";
  const ticketStation = "Roma Tiburtina";

  ticketNameElement.innerHTML = ticketName;
  ticketPnrElement.innerHTML = ticketPnr;
  ticketCoachElement.innerHTML = ticketCoach;
  ticketStationElement.innerHTML = ticketStation;
  ticketPriceElement.innerHTML = "€" + ticketPrice.toFixed(2);
});
