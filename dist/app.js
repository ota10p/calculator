"use strict";
const numBtns = document.querySelectorAll(".js-btn-number");
const operatorBtns = document.querySelectorAll(".js-btn-operator");
const outputResult = document.getElementById("result");
const stateManagementFn = stateManagement();
numBtnListener(numBtns);
operatorBtnListener(operatorBtns);
function stateManagement() {
    const operand = [];
    let operatorStatus;
    return {
        addNumStatus(num) {
            operand.push(num);
        },
        addOperatorStatus(operator) {
            operatorStatus = operator;
        },
        getNumStatus() {
            return operand;
        },
        getOperatorStatus() {
            return operatorStatus;
        },
        clearNumStatus() {
            operand.length = 0;
        },
        clearOperatorStatus() {
            operatorStatus = "";
        },
    };
}
function existsOperator() {
    if (stateManagementFn.getOperatorStatus()) {
        return true;
    }
    return false;
}
function existsOneOperand() {
    if (stateManagementFn.getNumStatus().length === 1) {
        return true;
    }
    return false;
}
function existsOperand() {
    if (stateManagementFn.getNumStatus().length === 2) {
        return true;
    }
    return false;
}
function errorIfCharactersOver() {
    if (outputResult.textContent.length >= 11) {
        outputResult.textContent = "E";
        stateManagementFn.clearOperatorStatus();
        stateManagementFn.clearNumStatus();
    }
}
function updateNumStatus() {
    stateManagementFn.getNumStatus().pop();
    stateManagementFn.addNumStatus(+outputResult.textContent);
}
function calculate() {
    const num1 = stateManagementFn.getNumStatus().shift();
    const num2 = stateManagementFn.getNumStatus().shift();
    const operator = stateManagementFn.getOperatorStatus();
    if ("+" === operator) {
        const result = num1 + num2;
        outputResult.textContent = result.toString();
    }
    else if ("-" === operator) {
        const result = num1 - num2;
        outputResult.textContent = result.toString();
    }
    else if ("*" === operator) {
        const result = num1 * num2;
        outputResult.textContent = result.toString();
    }
    else if ("/" === operator) {
        const result = num1 / num2;
        outputResult.textContent = result.toString();
    }
    stateManagementFn.clearNumStatus();
    stateManagementFn.clearOperatorStatus();
    stateManagementFn.addNumStatus(+outputResult.textContent);
    errorIfCharactersOver();
}
function calculateIfCalculable(operatorValue) {
    if (existsOperand()) {
        calculate();
    }
    if (existsOperator()) {
        stateManagementFn.clearOperatorStatus();
    }
    if (existsOneOperand()) {
        stateManagementFn.addOperatorStatus(operatorValue);
    }
}
function discriminateValues(operatorValue) {
    if ("AC" === operatorValue) {
        stateManagementFn.clearNumStatus();
        stateManagementFn.clearOperatorStatus();
        outputResult.textContent = "0";
    }
    else if ("C" === operatorValue) {
        outputResult.textContent = "0";
        updateNumStatus();
    }
    else if ("%" === operatorValue) {
        const CONVERT_TO_PERCENTAGE = 0.01;
        const numberOnDisplay = +outputResult.textContent;
        outputResult.textContent = (numberOnDisplay * CONVERT_TO_PERCENTAGE).toString();
        updateNumStatus();
        errorIfCharactersOver();
    }
    else if ("=" === operatorValue && existsOperand()) {
        calculate();
        stateManagementFn.addOperatorStatus(operatorValue);
    }
    else if ("=" !== operatorValue) {
        calculateIfCalculable(operatorValue);
    }
}
function outputOfNumber(event) {
    if (event.currentTarget instanceof HTMLButtonElement) {
        const numBtnValue = event.currentTarget.dataset.number;
        if (outputResult.textContent.indexOf(".") !== -1 && numBtnValue === ".") {
            return;
        }
        if (outputResult.textContent === "0" && numBtnValue === ".") {
            outputResult.textContent += numBtnValue;
            updateNumStatus();
            return;
        }
        if (stateManagementFn.getOperatorStatus() === "=" && numBtnValue === ".") {
            stateManagementFn.clearOperatorStatus();
            outputResult.textContent += numBtnValue;
            updateNumStatus();
            return;
        }
        if (outputResult.textContent === "0" || outputResult.textContent === "E") {
            outputResult.textContent = "";
        }
        if (existsOperator() && existsOneOperand()) {
            stateManagementFn.addNumStatus(+numBtnValue);
            outputResult.textContent = "";
        }
        if (outputResult.textContent.length >= 11) {
            return;
        }
        outputResult.textContent += numBtnValue;
        updateNumStatus();
        removeActiveClass();
    }
}
function removeActiveClass() {
    const activEl = document.querySelector(".active");
    if (activEl) {
        activEl.classList.remove("active");
    }
}
function addActiveClass(operatorBtn, btnValue) {
    if ("%" === btnValue) {
        return;
    }
    else if ("AC" === btnValue || "C" === btnValue || "=" === btnValue) {
        removeActiveClass();
    }
    else {
        removeActiveClass();
        operatorBtn.classList.add("active");
    }
}
function addOperatorToStatus(event) {
    if (event.currentTarget instanceof HTMLButtonElement) {
        const operatorBtn = event.currentTarget;
        const operatorBtnValue = event.currentTarget.dataset.operator;
        discriminateValues(operatorBtnValue);
        addActiveClass(operatorBtn, operatorBtnValue);
    }
}
function numBtnListener(numBtns) {
    for (const numBtn of numBtns) {
        numBtn.addEventListener("click", outputOfNumber);
    }
}
function operatorBtnListener(operatorBtns) {
    for (const operatorBtn of operatorBtns) {
        operatorBtn.addEventListener("click", addOperatorToStatus);
    }
}
