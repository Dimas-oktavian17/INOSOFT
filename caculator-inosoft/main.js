// Get input field caculator
const display = document.getElementById("display");

// Menangani operasi kalkulator
let firstValue = 0;
let operator = "";
let awaitingNextValue = false;

//Fungsi menangani operasi angka
function handleNumber(number) {
  if (awaitingNextValue) {
    display.value = number;
    awaitingNextValue = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}
function handleOperator(nextOperator) {
  var current = display.value;
  if (operator && awaitingNextValue) {
    operator = nextOperator;
    return;
  }
  firstValue = parseFloat(current);
  operator = nextOperator;
  display.value += operator;
  awaitingNextValue = true;
}
// Fungsi untuk menangani operasi koma
function handleDecimal() {
  if (!display.value.includes(".")) {
    display.value += ".";
  }
}
// Fungsi untuk menangani operasi persen
function handlePercent() {
  var current = display.value;
  current = parseFloat(current);
  current = current / 100;
  display.value = current;
}
// Fungsi untuk menangani operasi negatif
function handleNegate() {
  var current = display.value;
  current = parseFloat(current);
  current = -current;
  display.value = current;
}
// Fungsi untuk menangani operasi sama dengan (=)
function handleEqual() {
  var current = display.value;
  current = parseFloat(current);
  if (operator === "+") {
    display.value = firstValue + current;
  } else if (operator === "-") {
    display.value = firstValue - current;
  } else if (operator === "*") {
    display.value = firstValue * current;
  } else if (operator === "/") {
    display.value = firstValue / current;
  }
  // membersihkan variabel setelah perhitungan selesai
  firstValue = 0;
  operator = "";
  awaitingNextValue = false;
}
const buttons = document.getElementsByClassName("number");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    handleNumber(this.textContent);
  });
}
const operatorButtons = document.getElementsByClassName("operator");
for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function () {
    switch (this.id) {
      case "clear":
        display.value = "0";
        firstValue = 0;
        operator = "";
        awaitingNextValue = false;
        break;
      case "negate":
        handleNegate();
        break;
      case "percent":
        handlePercent();
        break;
      case "divide":
        handleOperator("/");
        break;
      case "multiply":
        handleOperator("*");
        break;
      case "subtract":
        handleOperator("-");
        break;
      case "add":
        handleOperator("+");
        break;
      case "decimal":
        handleDecimal();
        break;
      case "equals":
        handleEqual();
        break;
    }
  });
}
