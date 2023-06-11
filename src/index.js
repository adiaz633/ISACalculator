"import strict";
require('./css/style.css');
import { ISACalculatorFactory } from "./ISACalculatorFactory.js"

let DOMMessage;

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
    DOMMessage.textContent = result;
  }



  start() {
    const DOMwrapper = document.querySelector(".formbold-form-wrapper");
    const DOMroot = document.getElementById("root");
    const DOMparamsTextInput = document.getElementById("arguments");
    const DOMoperationTextInput = document.getElementById("operation");
    const DOMcalculateButton = document.getElementById("calculate");
    DOMMessage = document.getElementById("message");
    //Show Form
    DOMroot.classList.toggle("active");
    DOMwrapper.classList.toggle("active");

    //User input event on form submit
    DOMcalculateButton.addEventListener("click", () => {
      this.evaluateElements(DOMparamsTextInput.value, DOMoperationTextInput.value);
    }, this);
  }
}

const app = new App();
app.start();