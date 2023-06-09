import { ISACalculatorFactory } from "../src/ISACalculatorFactory";

/** @type {Integer} */
const ACCURACY = 3;

describe("Calculator arithmetical division", () => {
  /**
   * @type {ISACalculatorFactory}
   */
  let calculatorFactory; // Factory Method object


  // Instantiate ISACalculatorFactory derived class for division operations
  beforeEach(() => {
    calculatorFactory = new ISACalculatorFactory();
  });

  test("Divide 2 positive real numbers and return the result", () => {
    const result = calculatorFactory.makeOperation("/", 15.0, 5.0)
    expect(result).toBeCloseTo(3.0, ACCURACY);
  });

  test("Divide 4 positive real numbers using just the first number as dividend and the second as divisor and return the result", () => {
    const result = calculatorFactory.makeOperation("/", 50.0, 2.0, 4.25, 3.45)
    expect(result).toBeCloseTo(25.0, ACCURACY);
  });

  test("Divide 1 positive real number and use 0 as divisor and return not-number", () => {
    const result = calculatorFactory.makeOperation("/", 120.45, 0.0)
    expect(result).toEqual(NaN);
  });

  test("Divide 2 strings and return not-number as result", () => {
    const result = calculatorFactory.makeOperation("/", "120.45", "45.0")
    expect(result).toEqual(NaN);
  });

  test("Divide 1 string as dividend and real number as divisor and return not-number as result", () => {
    const result = calculatorFactory.makeOperation("/", "120.45", 45.0)
    expect(result).toEqual(NaN);
  });

  test("Divide 1 real number as dividend and 1 string as divisor and return not-number as result", () => {
    const result = calculatorFactory.makeOperation("/", 120.45, "45.0")
    expect(result).toEqual(NaN);
  });

  test("Divide 1 positive real number as dividend and 1 negative real number as divisor and return the result", () => {
    const result = calculatorFactory.makeOperation("/", 45.0, -5.0)
    expect(result).toBeCloseTo(-9.0, ACCURACY);
  });

  test("Divide 1 negative real number as dividend and 1 positive real number as divisor and return the result", () => {
    const result = calculatorFactory.makeOperation("/", -135.0, 25.0)
    expect(result).toBeCloseTo(-5.4, ACCURACY);
  });

});