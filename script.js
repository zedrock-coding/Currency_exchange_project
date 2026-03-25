function convert(){
    var amount = document.getElementById("amount").value;
    var fromCurrency = document.getElementById("fromCurrency").value;
    var toCurrency = document.getElementById("toCurrency").value;
    var url = "https://api.exchangerate-api.com/v4/latest/" + fromCurrency;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            var rate = data.rates[toCurrency];
            var result = amount * rate;
            document.getElementById("result").innerHTML = result.toFixed(2);
        })
        .catch(error => console.log(error));
}