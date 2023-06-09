//@ts-check
"import strict";
import { ISACalculator } from "./ISACalculator.js";
/**
 * @class
 * @public
 */
export class ISACalculatorSum extends ISACalculator {

  /**
   * Instantiate the derived clases for making the rightful operation
   */
  resolveOperation() {
    /**@type {Number} */
    let result = 0.0;
    this.numbers.forEach((element) => {
      result = result + element;
    });
    return result;
  }

}