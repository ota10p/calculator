import { stateManagementFn, outputResult } from "../app";
import { updateNumStatus } from "../state/updateNumStatus";
import { existsOperator, existsOneOperand } from "../bool/returnBoolFn";
import { removeActiveClass } from "../toggleClass/removeActiveClass";

export function outputOfNumber(event: Event) {
  if (event.currentTarget instanceof HTMLButtonElement) {
    const numBtnValue = event.currentTarget.dataset.number!;
    if (outputResult.textContent!.indexOf(".") !== -1 && numBtnValue === ".") {
      return;
    }
    if (outputResult.textContent === "0" && numBtnValue === ".") {
      outputResult.textContent! += numBtnValue;
      updateNumStatus();
      return;
    }
    if (stateManagementFn.getOperatorStatus() === "=" && numBtnValue === ".") {
      stateManagementFn.clearOperatorStatus();
      outputResult.textContent! += numBtnValue;
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
    if (outputResult.textContent!.length >= 11) {
      return;
    }
    outputResult.textContent! += numBtnValue;
    updateNumStatus();
    removeActiveClass();
  }
}
