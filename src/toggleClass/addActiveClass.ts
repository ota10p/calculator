import { removeActiveClass } from "./removeActiveClass";
import { discriminateValues } from "../discrimination/discriminateValues";

export function addActiveClass(
  operatorBtn: HTMLButtonElement,
  btnValue: string
) {
  if ("%" === btnValue) {
    return;
  } else if ("AC" === btnValue || "C" === btnValue || "=" === btnValue) {
    removeActiveClass();
  } else {
    removeActiveClass();
    operatorBtn.classList.add("active");
  }
}

export function addOperatorToStatus(event: Event) {
  if (event.currentTarget instanceof HTMLButtonElement) {
    const operatorBtn = event.currentTarget;
    const operatorBtnValue = event.currentTarget.dataset.operator!;
    discriminateValues(operatorBtnValue);
    addActiveClass(operatorBtn, operatorBtnValue);
  }
}
