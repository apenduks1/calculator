"use stict";

const res = document.getElementById("result");
const calculatorClearButton = document.querySelector(
  ".calculator-clear-button"
);
const calculatorButton = document.querySelectorAll(".calculator-button");
const qualButton = document.querySelector(".calculator-result");

function calculator(value) {
  const calculatorValue = eval(value || null);
  if (isNaN(calculatorValue)) {
    res.value = "Неможливо поділити 0 на 0";
    setTimeout(() => {
      res.value = "";
    }, 1000);
  } else {
    res.value = calculatorValue;
  }

  //відображення значеня на екрані
  
}
function liveScreen(enteredValue) {
    if (!res.value) {
      res.value = "";
    }
    res.value += enteredValue;
  }
calculatorButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    liveScreen(btn.value);
  });
});

qualButton.addEventListener("click", () => {
  calculator(res.value);
});
calculatorClearButton.addEventListener("click", () => {
  res.value = "";
});
