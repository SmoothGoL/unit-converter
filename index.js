/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let inputValue = 20;
const inputEl = document.getElementById("input-el");
const lengthPar = document.getElementById("length-par");
const volumePar = document.getElementById("volume-par");
const massPar = document.getElementById("mass-par");

inputEl.value = inputValue;
renderMetrics();

inputEl.addEventListener("input", () => {
    inputEl.value = inputEl.value.replace(/\D+/, "");
});

function renderMetrics() {
    // lengthPar.textContent = `${inputValue} meters = ${(3.281 * inputValue).toFixed(3)}`;
    lengthPar.textContent = "20 meters = 65.616 feet | 20 feet = 6.096 meters";
    volumePar.textContent = "20 liters = 5.284 gallons | 20 gallons = 75.708 liters";
    massPar.textContent = "20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos";
}