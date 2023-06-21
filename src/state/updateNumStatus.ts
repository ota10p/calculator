import { stateManagementFn, outputResult } from "../app";

export function updateNumStatus() {
  stateManagementFn.getNumStatus().pop();
  stateManagementFn.addNumStatus(+outputResult.textContent!);
}
