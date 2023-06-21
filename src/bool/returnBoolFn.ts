import { stateManagementFn } from "../app";

export function existsOperator(): boolean {
  if (stateManagementFn.getOperatorStatus()) {
    return true;
  }
  return false;
}

export function existsOneOperand(): boolean {
  if (stateManagementFn.getNumStatus().length === 1) {
    return true;
  }
  return false;
}

export function existsOperand(): boolean {
  if (stateManagementFn.getNumStatus().length === 2) {
    return true;
  }
  return false;
}
