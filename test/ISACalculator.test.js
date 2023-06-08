import { ISACalculator } from "../src/ISACalculator";
import { ISACalculatorFactory } from "../src/ISACalculatorFactory";


describe("ISACalculator reference", () => {
  /**
   * @type {ISACalculator}
   */
  let calculatorObj; // Global glass for arithmetical operations

  /**
   * @type {ISACalculatorFactory}
   */
  let calculatorFactory; // Factory class to implement solution using Factory Method design pattern

  // Instantiate calculator object and factory object to perform unit tests
  beforeEach(() => {
    calculatorObj = new ISACalculator();
    calculatorFactory = new ISACalculatorFactory();
  });

  describe("Global TESTS for Any aritmetical Operation", () => {
    // These tests check arithmetical operations available

    test("Check addition operation available", () => {
      const result = calculatorFactory.setOperation("+");
      expect(result).toBeTruthy();
    });

    test("Check substraction operation available", () => {
      const result = calculatorFactory.setOperation("-");
      expect(result).toBeTruthy();
    });

    test("Check multiply operation available", () => {
      const result = calculatorFactory.setOperation("*");
      expect(result).toBeTruthy();
    });

    test("Check division available", () => {
      const result = calculatorFactory.setOperation("/");
      expect(result).toBeTruthy();
    });

    test("Check root square available", () => {
      const result = calculatorFactory.setOperation("sqrt");
      expect(result).toBeTruthy();
    });

    test("Aritmetical operation not available", () => {
      const result = calculatorFactory.setOperation("other");
      expect(result).toBeFalsy();
    });

    // These tests check correct value types for the values

    test("Check one real number as valid value", () => {
      const result = calculatorObj.addNumber(5.0)
      expect(result).toBeTruthy();
    });

    test("Check one real number and one string as not valid values", () => {
      const result = calculatorObj.addNumber(5.0,"5a");
      expect(result).toBeFalsy();
    });


  });


});
