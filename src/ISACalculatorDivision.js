//@ts-check
"import strict";
import { ISACalculator } from "./ISACalculator.js";
/**
 * @class
 * @public
 */
export class ISACalculatorDivision extends ISACalculator {

  /**
   * Instantiate the derived clases for making the rightful operation
   */
  resolveOperation() {
    // Destructuring params
     const [dividend, divisor = 1.0] = this.numbers;
     /**@type {Number} */
     return divisor === 0 ? NaN : dividend / divisor;
  }

}