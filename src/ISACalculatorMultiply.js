//@ts-check
"import strict";
import { ISACalculator } from "./ISACalculator.js";
/**
 * @class
 * @public
 */
export class ISACalculatorMultiply extends ISACalculator {

  /**
   * Instantiate the derived clases for making the rightful operation
   */
  resolveOperation() {
    /**@type {Number} */
    let result = 1.0;

    this.numbers.forEach((element) => {
      result = result * element;
    });

    return result;
  }

}