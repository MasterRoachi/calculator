let currentNumber = 0;
let currentOperator = "";

function add(a,b) {
    return a + b
}
function subtract(a,b) {
    return a - b
}
function divide(a,b) {
    return a / b
}
function times(a,b) {
    return a * b
}


function operate (num1, operator, num2) {
    if (operator === "+") {
        let currentNumber = add(num1,num2);
    } else if (operator === "-") {
        let currentNumber = subtract(num1,num2)
    } else if (operator === "*") {
        return currentNumber = multiply(num1,num2)
    } else if (operator === "/") {
        return currentNumber = divide(num1,num2)
    }
    return currentNumber
}
