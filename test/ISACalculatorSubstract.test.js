import { ISACalculatorFactory } from "../src/ISACalculatorFactory";


/** @type {Integer} */
const ACCURACY = 3;

describe("Calculator arithmetical substraction", () => {
  /**
   * @type {ISACalculatorFactory}
   */
  let calculatorFactory; // Factory Method object


  // Instantiate ISACalculatorFactory derived class for substract operations
  beforeEach(() => {
    calculatorFactory = new ISACalculatorFactory();
  });

  test("Substract 2 positive real numbers and return the substraction", () => {
    const result = calculatorFactory.makeOperation("-", 5.0, 6.0)
    expect(result).toBeCloseTo(-1.0, ACCURACY);
  });

  test("Substract 1 positive integer number and 1 positive real number and return the substraction", () => {
    const result = calculatorFactory.makeOperation("-", 4, 6.0)
    expect(result).toBeCloseTo(-2.0, ACCURACY);
  });

  test("Substract 1 positive real number and 1 string and return not-number as the result", () => {
    const result = calculatorFactory.makeOperation("-", 120.45, "45.0")
    expect(result).toEqual(NaN);
  });

  test("Substract 4 positive real numbers and 1 negative real number and return the substraction", () => {
    const result = calculatorFactory.makeOperation("-", 2.0, 3.0, 1.0, 5.0, -2.0)
    expect(result).toBeCloseTo(-5.0, ACCURACY);
  });

});