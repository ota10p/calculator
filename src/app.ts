import { stateManagement } from "./state/stateManagement";
import { numBtnListener, operatorBtnListener } from "./addListener/addListener";

export const numBtns = document.querySelectorAll(".js-btn-number");
export const operatorBtns = document.querySelectorAll(".js-btn-operator");
export const outputResult = document.getElementById(
  "result"
)! as HTMLParagraphElement;
export const stateManagementFn = stateManagement();
numBtnListener(numBtns);
operatorBtnListener(operatorBtns);
