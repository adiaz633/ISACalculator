//@ts-check
"import strict";

const TYPEOF_NUMBER = "number";

/**
 * @class
 * @public
 */
export class ISACalculator {

  /**
   * @constructor
   */
  constructor() {
    /** @type {Array} */
    this.numbers = [];
  }

  /**
   * Add number to an array of operators
   * @method
   * @public
   * @param { ...Number} numbers Real number used as an operator
   * @return { boolean } True/False when all operators have been added
   */
  addNumber(...numbers) {
    const numbersLocal = numbers;
    let result = false;
    numbersLocal.every((valor) => {
      result = typeof valor === TYPEOF_NUMBER;
      return result;
    });

    this.numbers = result ? numbersLocal : [];
    return result;
  }

  makeOperation() {
    // Method implemented in derived classes
  }

}