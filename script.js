let chosenNumber1;
let chosenOperator1;
let chosenNumber2;
let chosenOperator2;
let chosenNumber3;


// Element Selectors
const numberButton = document.querySelector('#frame');

// Event Handlers
const updateCalcDisplay = (event) => {
    const clickedNumber = event.target.textContent;
    document.getElementById('calc-display').textContent = clickedNumber;
    /* WIP

    if (event.target.className = "number-button") {
        const clickedNumber = event.target.textContent;
        document.getElementById('calc-display').textContent = clickedNumber;
        chosenNumber1 = clickedNumber;
    } else if (event.target.className = "operation-button") {
        
    }
    
    */
};

// Event Listeners
numberButton.addEventListener('click', updateCalcDisplay);