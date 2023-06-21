import { stateManagementFn, outputResult } from "../app";
import { updateNumStatus } from "../state/updateNumStatus";
import { errorIfCharactersOver } from "../render/error";
import { existsOperand } from "../bool/returnBoolFn";
import { calculate } from "../calculate/calculate";
import { calculateIfCalculable } from "./calculateIfCalculable";

export function discriminateValues(operatorValue: string) {
  if ("AC" === operatorValue) {
    stateManagementFn.clearNumStatus();
    stateManagementFn.clearOperatorStatus();
    outputResult.textContent = "0";
  } else if ("C" === operatorValue) {
    outputResult.textContent = "0";
    updateNumStatus();
  } else if ("%" === operatorValue) {
    const CONVERT_TO_PERCENTAGE = 0.01;
    const numberOnDisplay = +outputResult.textContent!;
    outputResult.textContent = (
      numberOnDisplay * CONVERT_TO_PERCENTAGE
    ).toString();
    updateNumStatus();
    errorIfCharactersOver();
  } else if ("=" === operatorValue && existsOperand()) {
    calculate();
    stateManagementFn.addOperatorStatus(operatorValue);
  } else if ("=" !== operatorValue) {
    calculateIfCalculable(operatorValue);
  }
}
