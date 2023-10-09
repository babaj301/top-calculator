const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const allClear = document.querySelector(".ac");
const operators = document.querySelectorAll(".operator");

const add = function (a, b) {
  a + b;
};
const subtract = function (a, b) {
  a - b;
};

const multiply = function (a, b) {
  a * b;
};

const divide = function (a, b) {
  a / b;
};

let firstNum = ``;
let secNum = ``;
let operator = ``;

let displayNum = ``;
let displayScreen = ``;

function displayValue(value) {
  displayNum = value;
}
function displayOperator(value) {
  operator = value;
}

numbers.forEach((e) => {
  e.addEventListener("click", () => {
    displayValue(e.innerHTML);
    console.log(displayNum);
    displayScreen += displayNum;
    display.innerHTML = displayScreen;
  });
});

operators.forEach((e) => {
  e.addEventListener("click", () => {
    if (operator === ``) {
      displayOperator(e.innerHTML);
      console.log(displayNum);
      displayScreen += operator;
      display.innerHTML = displayScreen;
    } else {
      operator = ``;
    }
  });
});
