import { ISACalculatorFactory } from "../src/ISACalculatorFactory";

/** @type {Integer} */
const ACCURACY = 3;

describe("Calculator arithmetical sum", () => {
  /**
   * @type {ISACalculatorFactory}
   */
  let calculatorFactory; // Factory Method object


  // Instantiate ISACalculatorFactory derived class for sum operations
  beforeEach(() => {
    calculatorFactory = new ISACalculatorFactory();
  });

  test("Add 2 positive real numbers and return the sum", () => {
    const result = calculatorFactory.makeOperation("+", 5.0, 6.0)
    expect(result).toBeCloseTo(11.0, ACCURACY);
  });

  test("Add 1 positive integer number and 1 positive real number and return the sum", () => {
    const result = calculatorFactory.makeOperation("+", 4, 6.0)
    expect(result).toBeCloseTo(10.0, ACCURACY);
  });

  test("Add 1 positive real number and 1 string and return not-number as the result", () => {
    const result = calculatorFactory.makeOperation("+", 120.45, "45.0")
    expect(result).toEqual(NaN);
  });

  test("Add 4 positive real numbers and 1 negative real number and return the sum", () => {
    const result = calculatorFactory.makeOperation("+", 2.0, 3.0, 1.0, 5.0, -2.0)
    expect(result).toBeCloseTo(9.0, ACCURACY);
  });

});