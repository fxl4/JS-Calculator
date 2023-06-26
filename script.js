// Element Selectors
const number1 = document.getElementById("1");
const number2 = document.getElementById("2");
const number3 = document.getElementById("3");
const number4 = document.getElementById("4");
const number5 = document.getElementById("5");
const number6 = document.getElementById("6");
const number7 = document.getElementById("7");
const number8 = document.getElementById("8");
const number9 = document.getElementById("9");
const number0 = document.getElementById("0");
const operatorAdd = document.getElementById("+");
const operatorSubtract = document.getElementById("-");
const operatorMultiply = document.getElementById("*");
const operatorDivide = document.getElementById("/");
const selectedEquals = document.getElementById("=");
const selectedReset = document.getElementById("reset");

let keySelection;
let keySelections = [];
let indicatedEquals;
let convertToString;


// Event Handlers
const updateCalcDisplay = (event) => {
    const indicatedNumber = event.target.textContent;
    keySelection = indicatedNumber;
    keySelections.push(keySelection);
    //const indicatedOperator = event.target.textContent
    document.getElementById('calc-display').textContent = indicatedNumber;
    console.log(indicatedNumber);
};

const resetCalcDisplay = () => {
    document.getElementById('calc-display').textContent = '';
    keySelections = [];
};

const evaluateExpression = () => {
    const expression = keySelections.join('');
    const evaluatedExpression = eval(expression);
    document.getElementById('calc-display').textContent = evaluatedExpression;
    keySelections = [evaluatedExpression.toString()];
    console.log(evaluatedExpression);
  };

// Event Listeners
number1.addEventListener('click', updateCalcDisplay);
number2.addEventListener('click', updateCalcDisplay);
number3.addEventListener('click', updateCalcDisplay);
number4.addEventListener('click', updateCalcDisplay);
number5.addEventListener('click', updateCalcDisplay);
number6.addEventListener('click', updateCalcDisplay);
number7.addEventListener('click', updateCalcDisplay);
number8.addEventListener('click', updateCalcDisplay);
number9.addEventListener('click', updateCalcDisplay);
number0.addEventListener('click', updateCalcDisplay);
operatorAdd.addEventListener('click', updateCalcDisplay);
operatorSubtract.addEventListener('click', updateCalcDisplay);
operatorMultiply.addEventListener('click', updateCalcDisplay);
operatorDivide.addEventListener('click', updateCalcDisplay);
selectedReset.addEventListener('click', resetCalcDisplay);
selectedEquals.addEventListener('click', evaluateExpression);

//