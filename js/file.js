const km = prompt("Quanti km devi percorrere?");

const età = parseInt(prompt("Quanti anni hai?"));

var costo = km * 0.21;

const scontoanziani = 40;

const scontogiovani = 20;

if (età < 19) {
  alert(costo - (costo / 100) * scontogiovani);
} else if (età > 65) {
  alert((costo = costo - (costo / 100) * scontoanziani));
} else {
  alert(costo);
}
