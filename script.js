import * as mathjs from "https://cdn.skypack.dev/mathjs@11.8.0";

// get all class=number button buttons and no operators

const elements = document.querySelector('.number-button');
const calcDisplay = document.getElementByID('calc-display');

// update id="calc-display"

let displayText = '';
calcDisplay.textContent = displayText;