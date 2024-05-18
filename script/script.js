function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let firstNum;
let operator;
let secondNum;
let displayValue = "";
const main = document.querySelector("main");

function operate(firstNum, operator, secondNum) {
  if (operator === "+") {
    add(firstNum, secondNum);
  } else if (operator === "-") {
    subtract(firstNum, secondNum);
  } else if (operator === "*") {
    multiply(firstNum, secondNum);
  } else if (operator === "/") {
    divide(a, b);
  }
}

function showDisplay(num) {
  const display = main.querySelector("#display");
  displayValue += num;
  display.textContent = displayValue;
}

main.addEventListener("click", (e) => {
  let id = e.target.id;

  switch (id) {
    case "add":
      break;
    case "subtract":
      break;
    case "multiply":
      break;
    case "divide":
      break;
    default:
      showDisplay(id);
      break;
  }
});
