const km = parseInt(document.getElementById("km"));

const età = parseInt(document.getElementById("anni"));

const btn1 = document.getElementById("btn1");

var costo = km * 0.21;

const scontoanziani = 40;

const scontogiovani = 20;

if (età < 19) {
  function fun1() {
    output.innerHTML =
      "il costo del biglietto è " +
      (costo - (costo / 100) * scontogiovani) +
      "€";
  }
  btn1.addEventListener("click", fun1);
} else if (età > 65) {
  function fun2() {
    output.innerHTML =
      "il costo del biglietto è " +
      (costo = costo - (costo / 100) * scontoanziani) +
      "€";
  }
  btn1.addEventListener("click", fun2);
} else {
  function fun3() {
    output.innerHTML = "il costo del biglietto è " + costo + "€";
  }
  btn1.addEventListener("click", fun3);
}
