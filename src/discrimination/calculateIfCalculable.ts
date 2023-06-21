import { stateManagementFn } from "../app";
import {
  existsOperand,
  existsOperator,
  existsOneOperand,
} from "../bool/returnBoolFn";
import { calculate } from "../calculate/calculate";

export function calculateIfCalculable(operatorValue: string) {
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
