let PLNAmountElement = document.querySelector(".js-PLNAmount");
let currencyPicker = document.querySelector(".js-currencyPicker");
let outcomeElement = document.querySelector(".js-outcome");
let formElement = document.querySelector(".js-form");

let USDrate = 3.73;
let EURrate = 4.40;

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    
    /* próbowałam tak, ale nie wyszło:
    
        let PLNAmount = +PLNAmountElement.value;
        if (currencyPicker.value === "USD") {
            let outcome = PLNAmount * USDrate;
            outcomeElement.innerText = outcome;
        } else {
            let outcome = PLNAmount * EURrate;
            outcomeElement.innerText = outcome;
        }
    */


    let PLNAmount = +PLNAmountElement.value;
    let currency = currencyPicker.value;

    switch (currency) {
        case "USD":
            outcome = PLNAmount / USDrate;
            break;

        case "EUR":
            outcome = PLNAmount / EURrate;
            break;
    }

    outcomeElement.innerHTML = `${PLNAmount} PLN = <strong>${outcome.toFixed(
        2
    )} ${currency} </strong>`;


});