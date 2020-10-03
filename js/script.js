{


    const calculateOutcome = (PLNAmount, currency) => {
        const USDrate = 3.73;
        const EURrate = 4.40;
    
        switch (currency) {
            case "USD":
                return PLNAmount / USDrate;
              
            case "EUR":
                return PLNAmount / EURrate;
        }
    };

const onFormSubmit = (event) => {
    event.preventDefault();

    const PLNAmountElement = document.querySelector(".js-PLNAmount");
    const currencyPicker = document.querySelector(".js-currencyPicker");
    const outcomeElement = document.querySelector(".js-outcome");

    const PLNAmount = +PLNAmountElement.value;
    const currency = currencyPicker.value;

    let outcome = calculateOutcome(PLNAmount, currency);

    outcomeElement.innerHTML = `${PLNAmount} PLN = <strong>${outcome.toFixed(
        2
    )} ${currency} </strong>`;
};

const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit); 
};

init();
}

        /* próbowałam tak, ale nie wyszło:
        
            const PLNAmount = +PLNAmountElement.value;
            if (currencyPicker.value === "USD") {
                const outcome = PLNAmount * USDrate;
                outcomeElement.innerText = outcome;
            } else {
                const outcome = PLNAmount * EURrate;
                outcomeElement.innerText = outcome;
            }
        */