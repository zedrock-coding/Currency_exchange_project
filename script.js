
const fromCurrencySelect = document.getElementById('from_currency');
const toCurrencySelect = document.getElementById('to_currency');
const amountInput = document.getElementById('amount');
const convertBtn = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');
const pairSpan = document.getElementById('pair');

const API_URL = 'https://api.exchangerate-api.com/v4/latest/USD';

// Fetch currencies and populate dropdowns
fetch(API_URL)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        const currencies = Object.keys(data.rates);
        populateCurrencies(currencies);
    })
    .catch(error => {
        console.error('Error fetching currency data:', error);
        resultDiv.textContent = 'Error fetching currency data. Please try again later.';
    });

function populateCurrencies(currencies) {
    currencies.forEach(currency => {
        const option1 = document.createElement('option');
        option1.value = currency;
        option1.textContent = currency;
        fromCurrencySelect.appendChild(option1);

        const option2 = document.createElement('option');
        option2.value = currency;
        option2.textContent = currency;
        toCurrencySelect.appendChild(option2);
    });
     // Set default values
     fromCurrencySelect.value = 'USD';
     toCurrencySelect.value = 'INR';
     updatePair();
}

function updatePair() {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    pairSpan.textContent = `${fromCurrency}/${toCurrency}`;
}

fromCurrencySelect.addEventListener('change', updatePair);
toCurrencySelect.addEventListener('change', updatePair);


convertBtn.addEventListener('click', () => {
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;
    const amount = amountInput.value;

    if (!amount || amount <= 0) {
        resultDiv.textContent = 'Please enter a valid amount.';
        return;
    }

    resultDiv.textContent = 'Loading...';

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const rate = data.rates[toCurrency];
            if (!rate) {
                throw new Error('Invalid currency selected.');
            }
            const convertedAmount = (amount * rate).toFixed(2);
            resultDiv.innerHTML = `${amount} ${fromCurrency} = <span class="highlight">${convertedAmount} ${toCurrency}</span>`;
        })
        .catch(error => {
            console.error('Error converting currency:', error);
            resultDiv.textContent = 'Error converting currency. Please try again.';
        });
});