//@ts-check
"import strict";

import { ISACalculatorSum } from "./ISACalculatorSum.js";
import { ISACalculatorSubstract } from "./ISACalculatorSubstract.js";
import { ISACalculatorMultiply } from "./ISACalculatorMultiply.js";
import { ISACalculatorDivision } from "./ISACalculatorDivision.js"
import { ISACalculatorSquare } from "./ISACalculatorSquare.js"

/* #region CONSTANS AND TYPEDEFS */

/**
 * @typedef {object} OPERATORS
 * @param {string} SUM
 * @param {string} MINUS
 * @param {string} MULTIPLY
 * @param {string} DIVISION
 * @param {string} SQUARE
*/
const OPERATORS = {
  SUM: "+",
  MINUS: "-",
  MULTIPLY: "*",
  DIVISION: "/",
  SQUARE: "sqrt"
};

/**
 * @typedef {object} DERIVEDCLASS
 * @param {string} OPERATOR
 * @param {ISACalculatorSum} SUBCLASS
 */


/**
 * @typedef {Array<DERIVEDCLASS>}
 */
const SUBCLASSES = [
  {
    OPERATOR: OPERATORS.SUM,
    SUBCLASS: ISACalculatorSum
  },
  {
    OPERATOR: OPERATORS.MINUS,
    SUBCLASS: ISACalculatorSubstract
  },
  {
    OPERATOR: OPERATORS.MULTIPLY,
    SUBCLASS: ISACalculatorMultiply
  },
  {
    OPERATOR: OPERATORS.DIVISION,
    SUBCLASS: ISACalculatorDivision
  },
  {
    OPERATOR: OPERATORS.SQUARE,
    SUBCLASS: ISACalculatorSquare
  }
]

/** @type {DERIVEDCLASS} */
let derivedClass = null;

/* #endregion */

/**
 * @class
 * @public
 */
export class ISACalculatorFactory {


 /**
   * Set arithmetical valid operator
   * @method
   * @public
   * @param {string} operator
   * @return {boolean} True/False when the operator has truly added
   */
 setOperation(operator) {
  const result = SUBCLASSES.find((element) => element.OPERATOR === operator);
  derivedClass = result;
  return typeof result !== "undefined";
}


  /**
   * Instantiate the derived clases for making the rightful operation
   * @method
   * @public
   * @param {string} operation
   * @param {...Number} numbers
   * @returns {Number|NaN} result
   */
  makeOperation(operation, ...numbers) {
    const numbersLocal = numbers;
    let result = NaN;
    if (this.setOperation(operation)) {
      const arithmeticClass = new derivedClass["SUBCLASS"]();
      if (arithmeticClass.addNumber(...numbersLocal)) {
        result = arithmeticClass.resolveOperation();
      }
    }
    return result;

  }

}