const key = 'fb399a94a240ff0f716a8d44f5476c0d';
const apiUrl = 'http://localhost:3000/forex';

var fromCurrency = document.getElementById('fromCurrency');
var toCurrency = document.getElementById('toCurrency');
var amount = document.getElementById('amount');
var result = document.getElementById('result');
var pairs = [];

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        pairs = data.supportedPairs;
    })
    .catch(error => console.error(error));
for (let pair of pairs) {
    let option1 = document.createElement('option');
    option1.value = pair.substring(0, 3);
    option1.textContent = pair.substring(0, 3);
    fromCurrency.appendChild(option1);
}
