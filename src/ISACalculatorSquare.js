//@ts-check
"import strict";
import { ISACalculator } from "./ISACalculator.js";

/* #region CONSTANTS AND PRIVATE METHODS */

  /** @type {Number} */
  const ACCURACY = 0.001;

  /**
   * Absolute function for a Number
   * @private
   * @param {Number} numberParam
   * @returns {Number}
   */
  const abs = (numberParam) => {
    return (numberParam >=0) ? numberParam : -numberParam;
  }

/* #endregion */

/**
 * @class
 * @public
 */
export class ISACalculatorSquare extends ISACalculator {

  /**
   * Instantiate the derived clases for making the rightful operation
   * @public
   */
  resolveOperation() {
    const [numberParam] = this.numbers;
    let x = numberParam;
    let y = 1;

    while (abs(x-y)/abs(x) > ACCURACY) {
      x = (x+y)/2;
      y = numberParam / x;
    }

    return x;
  }

}