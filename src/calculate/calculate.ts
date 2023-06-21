import { stateManagementFn, outputResult } from "../app";
import { errorIfCharactersOver } from "../render/error";

export function calculate() {
  const num1 = stateManagementFn.getNumStatus().shift()!;
  const num2 = stateManagementFn.getNumStatus().shift()!;
  const operator = stateManagementFn.getOperatorStatus();
  if ("+" === operator) {
    const result = num1 + num2;
    outputResult.textContent = result.toString();
  } else if ("-" === operator) {
    const result = num1 - num2;
    outputResult.textContent = result.toString();
  } else if ("*" === operator) {
    const result = num1 * num2;
    outputResult.textContent = result.toString();
  } else if ("/" === operator) {
    const result = num1 / num2;
    outputResult.textContent = result.toString();
  }
  stateManagementFn.clearNumStatus();
  stateManagementFn.clearOperatorStatus();
  stateManagementFn.addNumStatus(+outputResult.textContent!);
  errorIfCharactersOver();
}
