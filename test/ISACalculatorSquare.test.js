import { ISACalculatorFactory } from "../src/ISACalculatorFactory";

/** @type {Integer} */
const ACCURACY = 3;

describe("Calculator arithmetical root square", () => {
  /**
   * @type {ISACalculatorFactory}
   */
  let calculatorFactory; // Factory Method object


  // Instantiate ISACalculatorFactory derived class for root square operations
  beforeEach(() => {
    calculatorFactory = new ISACalculatorFactory();
  });

  test("Use 1 positive integer number and return the result", () => {
    const result = calculatorFactory.makeOperation("sqrt", 121)
    expect(result).toBeCloseTo(11, ACCURACY);
  });

  test("Use 2 positive integer numbers and return the result using just the first number", () => {
    const result = calculatorFactory.makeOperation("sqrt", 3650, 20)
    expect(result).toBeCloseTo(59.6, ACCURACY);
  });

  test("Use 1 positive real number and return the result", () => {
    const result = calculatorFactory.makeOperation("sqrt", 225.45)
    expect(result).toBeCloseTo(15.01, ACCURACY);
  });

  test("Use 1 negative real number and return NaN as result", () => {
    const result = calculatorFactory.makeOperation("sqrt", -121.0)
    expect(result).toEqual(NaN);
  });

  test("Use 1 string and return NaN as result", () => {
    const result = calculatorFactory.makeOperation("sqrt", "49")
    expect(result).toEqual(NaN);
  });

});