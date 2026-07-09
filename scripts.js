// GLobal Variables // 

let firstNumber = 0;
let currentOperator = "";
let resetScreen = false;
let secondNumber = 0;

// Basic Math Functions //

function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function divide(a, b) {
  return a / b;
}
function multiply(a, b) {
  return a * b;
}

// Operate Function //

function operate(num1, operator, num2) {
  if (operator === "+") {
    return add(num1, num2);
  } else if (operator === "-") {
    return subtract(num1, num2);
  } else if (operator === "*") {
    return multiply(num1, num2);
  } else if (operator === "/") {
    return divide(num1, num2);
  }
}

// Nummbers //

let screen = document.querySelector("#screen");
let numButtons = document.querySelectorAll(".number");

numButtons.forEach((number) => {
  number.addEventListener("click", () => {
    if (screen.textContent === "0" || resetScreen) {
      screen.textContent = number.textContent;
      resetScreen = false;
    } else {
      screen.textContent += number.textContent;
    }
  });
});

// Operators //

let opsButtons = document.querySelectorAll(".operator");
opsButtons.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (operator.textContent === "+") {
      newOperator = "+";
    } else if (operator.textContent === "-") {
      newOperator = "-";
    } else if (operator.textContent === "÷") {
      newOperator = "/";
    } else if (operator.textContent === "×") {
      newOperator = "*";
    }
    if (currentOperator !== "" && resetScreen === false) {
      secondNumber = Number(screen.textContent);
      let result = operate(firstNumber, currentOperator, secondNumber);
      screen.textContent = rounded(result);
      firstNumber = result;
    } else {
      firstNumber = Number(screen.textContent);
    }
    currentOperator = newOperator;
    resetScreen = true;
  });
});

// Equals Button //

let equalsButton = document.querySelector("#equals-button");
equalsButton.addEventListener("click", () => {
  if (currentOperator === "" || resetScreen) {
    return;
  }
  secondNumber = Number(screen.textContent);
  if (currentOperator === "/" && secondNumber === 0) {
    screen.textContent = "Nuh-uh, Nice Try!";
    resetScreen = true
    return;
  }
  let result = operate(firstNumber, currentOperator, secondNumber);
  screen.textContent = rounded(result);
  resetScreen = true;
  return
});

// Clear Function //

let clearButton = document.querySelector("#clear-button");
clearButton.addEventListener("click", () => {
  firstNumber = 0;
  secondNumber = 0;
  currentOperator = "";
  resetScreen = false;
  screen.textContent = "0";
});

// Decimal Function //

let decimal = document.querySelector(".decimal")
decimal.addEventListener("click", () => {
    if (resetScreen === true) {
        screen.textContent = "0.";
        resetScreen = false;
    } else if (screen.textContent.includes(".")) {
        return
    } else {
        screen.textContent += "."
    }    
    })

// Backspace Function //

let backspace = document.querySelector(".back");
backspace.addEventListener("click", () => {
   if (resetScreen) {
    return
   } else if (screen.textContent.length === 1) {
    screen.textContent = "0"   
   } else {
    screen.textContent = screen.textContent.slice(0, -1);
   }
})

// Auxiliary //

function rounded(x) {
    return Math.round(x * 10) / 10
}