const feetPerMeter = 3.28084;
const gallonPerLiter = 0.264172;
const poundPerKilogram = 2.20462;

let inputValue = 0;
const inputEl = document.getElementById("input-el");
const lengthPar = document.getElementById("length-par");
const volumePar = document.getElementById("volume-par");
const massPar = document.getElementById("mass-par");
const convertBtn = document.getElementById("convert-btn");

renderMetrics();

inputEl.addEventListener("input", () => {
    inputEl.value = inputEl.value.replace(/\D+/, "");
});

convertBtn.addEventListener("click", () => {
    inputValue = Number(inputEl.value);
    renderMetrics();
});

function renderMetrics() {
    // lengthPar.textContent = "20 meters = 65.616 feet | 20 feet = 6.096 meters";
    // volumePar.textContent = "20 liters = 5.284 gallons | 20 gallons = 75.708 liters";
    // massPar.textContent = "20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos";
    lengthPar.textContent = `
        ${inputValue} meters = ${(feetPerMeter * inputValue).toFixed(3)} feet |
        ${inputValue} feet = ${(inputValue / feetPerMeter).toFixed(3)} meters`;
    volumePar.textContent = `
        ${inputValue} liters = ${(gallonPerLiter * inputValue).toFixed(3)} gallons |
        ${inputValue} gallons = ${(inputValue / gallonPerLiter).toFixed(3)} liters`;
    massPar.textContent = `
        ${inputValue} kilos = ${(poundPerKilogram * inputValue).toFixed(3)} pounds |
        ${inputValue} pounds = ${(inputValue / poundPerKilogram).toFixed(3)} kilos`;

}