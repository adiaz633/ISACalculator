import { ISACalculator } from "../src/ISACalculator";


describe("ISACalculator reference", () => {
  /**
   * @type {ISACalculator}
   */
  let calculatorObj;

  // Instantiate calculator object to perform unit tests
  beforeEach(() => {
    calculatorObj = new ISACalculator();
  });

  describe("Global TESTS for Any aritmetical Operation", () => {
    // These tests check arimetical operations available

    test("Check addition operation available", () => {
      const result = calculatorObj.setOperation("+");
      expect(result).toBeTruthy();
    });

    test("Check substraction operation available", () => {
      const result = calculatorObj.setOperation("-");
      expect(result).toBeTruthy();
    });

    test("Check multiply operation available", () => {
      const result = calculatorObj.setOperation("*");
      expect(result).toBeTruthy();
    });

    test("Check division available", () => {
      const result = calculatorObj.setOperation("/");
      expect(result).toBeTruthy();
    });

    test("Check root square available", () => {
      const result = calculatorObj.setOperation("sqrt");
      expect(result).toBeTruthy();
    });

    test("Aritmetical operation not available", () => {
      const result = calculatorObj.setOperation("other");
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
