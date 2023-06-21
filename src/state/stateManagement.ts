export function stateManagement() {
  const operand: number[] = [];
  let operatorStatus: string;

  return {
    addNumStatus(num: number) {
      operand.push(num);
    },
    addOperatorStatus(operator: string) {
      operatorStatus = operator;
    },
    getNumStatus(): number[] {
      return operand;
    },
    getOperatorStatus(): string {
      return operatorStatus;
    },
    clearNumStatus() {
      operand.length = 0;
    },
    clearOperatorStatus() {
      operatorStatus = "";
    },
  };
}
