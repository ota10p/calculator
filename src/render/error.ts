import { stateManagementFn, outputResult } from "../app";

export function errorIfCharactersOver() {
  if (outputResult.textContent!.length >= 11) {
    outputResult.textContent = "E";
    stateManagementFn.clearOperatorStatus();
    stateManagementFn.clearNumStatus();
  }
}
