import { ISACalculatorFactory } from "../src/ISACalculatorFactory";

/** @type {Integer} */
const ACCURACY = 3;

describe("Calculator arithmetical multiply", () => {
  /**
   * @type {ISACalculatorFactory}
   */
  let calculatorFactory; // Factory Method object


  // Instantiate ISACalculatorFactory derived class for multiply operations
  beforeEach(() => {
    calculatorFactory = new ISACalculatorFactory();
  });

  test("Multiply 2 positive real numbers and return the result", () => {
    const result = calculatorFactory.makeOperation("*", 5.0, 6.0)
    expect(result).toBeCloseTo(30.0, ACCURACY);
  });

  test("Multiply 1 positive integer number and 1 positive real number and return the result", () => {
    const result = calculatorFactory.makeOperation("*", 4, 6.0)
    expect(result).toBeCloseTo(24.0, ACCURACY);
  });

  test("Multiply 1 positive real number and 1 string and return not-number as the result", () => {
    const result = calculatorFactory.makeOperation("*", 120.45, "45.0")
    expect(result).toEqual(NaN);
  });

  test("Multiply 4 positive real numbers and 1 negative real number and return the result", () => {
    const result = calculatorFactory.makeOperation("*", 2.0, 3.0, 1.0, 5.0, -2.0)
    expect(result).toBeCloseTo(-60.0, ACCURACY);
  });

});