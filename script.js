const plusButton = document.querySelector(".plus");
const minusButton = document.querySelector(".minus");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const allClear = document.querySelector(".ac");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");

const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

function operate(num1, num2, opp) {
  const realNum2 = num2.split("").shift();
  const num1Digit = Number(num1);
  const num2Digit = Number(realNum2);
  if (opp === "+") {
    return add(num1Digit, num2Digit);
  } else if (opp === "-") {
    return subtract(num1Digit, num2Digit);
  } else if (opp === "*") {
    return multiply(num1Digit, num2Digit);
  } else if (opp === "/") {
    return divide(num1Digit, num2Digit);
  }
}

let firstNum = localStorage.getItem("firstNum");
let secNum = localStorage.getItem("secNum");
let operator = localStorage.getItem("operator");

let displayNum = ``;
let displayScreen = ``;

let displayVal;

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
    displayVal = display.innerHTML;
    if (!display.classList.contains("operated")) {
      localStorage.setItem("firstNum", displayVal);
    } else if (display.classList.contains("operated")) {
      localStorage.setItem("secNum", displayVal);
    }
  });
});

operators.forEach((e) => {
  e.addEventListener("click", () => {
    operator = ``;

    if (operator === ``) {
      localStorage.setItem("operator", e.innerHTML);
      displayOperator(e.innerHTML);
      console.log(operator);
      displayScreen = operator;
      display.innerHTML = displayScreen;

      displayVal = display.innerHTML;
      display.classList.add("operated");
    } else {
      operator = ``;
    }
  });
});

equal.addEventListener("click", () => {
  console.log(operate("55", "66", "*"));
});

console.log(displayVal);
console.log(firstNum);
console.log(secNum);

console.log(operator);
