function convertCurrency() {

const currency = document.getElementById("currency").value
const rates = {
	EUR: 0.92,
    GBP: 0.79,
    CAD: 1.36,
    CHF: 0.88,
    PY: 149.50 
}
const euros= 0.92 * currency;
document.getElementById("EUR").innerText= euros + " Euros"
const pound= 0.79 * currency;
document.getElementById("GBP").innerText= pound + " British Pounds"
const canadiandollar = 1.36 * currency;
document.getElementById("CAD").innerText= canadiandollar + " Canadian Dollars"
const swissfranc= 0.88 * currency;
document.getElementById("CHF").innerText= swissfranc + " Swiss Dollars"
const japaneseyen= 149.50 * currency;
document.getElementById("JPY").innerText= japaneseyen + " Yen"


}