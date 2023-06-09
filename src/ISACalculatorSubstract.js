//@ts-check
"import strict";
import { ISACalculator } from "./ISACalculator.js";
/**
 * @class
 * @public
 */
export class ISACalculatorSubstract extends ISACalculator {

  /**
   * Instantiate the derived clases for making the rightful operation
   */
  resolveOperation() {
    /**@type {any[Number]} */
    let [result] = this.numbers; // The first element will be the minuend

    // The rest of the numbrs will be substrahends
    let numbers = this.numbers.splice(1, this.numbers.length - 1);

    numbers.forEach((element) => {
      result = result - element;
    });

    return result;
  }

}