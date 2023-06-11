"import strict";
require('./css/style.css');
import { ISACalculatorFactory } from "./ISACalculatorFactory.js"

let DOMMessage;
let DOMparamsTextInput;
let DOMoperationTextInput;
class App {
  constructor() {
    this.calculatorFactory = new ISACalculatorFactory();
  }

  evaluateElements(elementParams, operatorParam) {
    const elementParamsLocal = elementParams.split(",");
    const numbers = [];
    elementParamsLocal.forEach((element) => {
      let numberConverted;
      try {
        numberConverted = parseFloat(element);
      } catch {
        numberConverted = "";
      }
      numbers.push(numberConverted);
    });
    const result = this.calculatorFactory.makeOperation(operatorParam, ...numbers);
    this.setResult(result);
  }

  setResult(result) {
    if (isNaN(result)) {
      DOMMessage.classList.add("input-error");
    } else {
      DOMMessage.classList.add("input-valid");
    }
    DOMMessage.textContent = result;
  }

  resetValues() {
    DOMparamsTextInput.value = "";
    DOMoperationTextInput.value = "";
    DOMMessage.textContent = "";
    DOMMessage.classList.remove("input-error");
    DOMMessage.classList.remove("input-valid");
  }



  start() {
    const DOMwrapper = document.querySelector(".formbold-form-wrapper");
    const DOMroot = document.getElementById("root");
    DOMparamsTextInput = document.getElementById("arguments");
    DOMoperationTextInput = document.getElementById("operation");
    const DOMcalculateButton = document.getElementById("calculate");
    const DOMresetButton = document.getElementById("reset");

    DOMMessage = document.getElementById("message");
    //Show Form
    DOMroot.classList.toggle("active");
    DOMwrapper.classList.toggle("active");

    //User input event on form submit
    DOMcalculateButton.addEventListener("click", () => {
      this.evaluateElements(DOMparamsTextInput.value, DOMoperationTextInput.value);
    }, this);

    DOMresetButton.addEventListener("click", () => {
      this.resetValues();
    },this);
  }
}

const app = new App();
app.start();