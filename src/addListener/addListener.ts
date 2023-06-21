import { outputOfNumber } from "../render/outputOfNumber";
import { addOperatorToStatus } from "../toggleClass/addActiveClass";

export function numBtnListener(numBtns: NodeListOf<Element>) {
  for (const numBtn of numBtns) {
    numBtn.addEventListener("click", outputOfNumber);
  }
}

export function operatorBtnListener(operatorBtns: NodeListOf<Element>) {
  for (const operatorBtn of operatorBtns) {
    operatorBtn.addEventListener("click", addOperatorToStatus);
  }
}
