const percentageNum = document.querySelectorAll(".percent-numbers");
const tipPerPersonDisplay = document.querySelector(".tip-per-person");
const totalPerPersonDisplay = document.querySelector(".total-per-person");
const billTotal = document.querySelector("#bill-total").value;
const numOfPeople = document.querySelector("#num-people").value;
const customTipSelector = document.querySelector(".custom-tip");
const zeroNumWarningDisplay = document.querySelector(
  ".zeroNum-warning-display"
);
let tipAmount = 0;
let customTip = 0;

// percent button selections
percentageNum.forEach((number) => {
  number.addEventListener("click", (e) => {
    tipAmount = e.target.innerText;
    tipAmountPerPerson(tipAmount);
  });
});

//disable enter key for bill amount input field
document.querySelector("#bill-total").addEventListener("keypress", (e) => {
  if (e.keyCode == 13) e.preventDefault();
});
//disable enter key for num of people input field
document.querySelector("#num-people").addEventListener("keypress", (e) => {
  if (e.keyCode == 13) e.preventDefault();
});

// custom tip input field
customTipSelector.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    // prevDefault stops the form tag from submitting the value on enter key press
    event.preventDefault();
    customTip = parseInt(customTipSelector.value);
    customPercent(customTip);
  }
});

function checkZeroValues() {
  zeroNumWarningDisplay.innerText = `Cant be zero`;
  tipPerPersonDisplay.innerText = `0.00`;
  totalPerPersonDisplay.innerText = `0.00`;
}
//calculations for displayed percentages
function tipAmountPerPerson(percentNum) {
  const billTotal = document.querySelector("#bill-total").value;
  const numOfPeople = document.querySelector("#num-people").value;
  if (billTotal === "" || numOfPeople === "") {
    checkZeroValues();
  } else if ((billTotal.length > 0) & (numOfPeople.length > 0)) {
    //removes % symbol
    tipAmount = percentNum.replace("%", "");
    //converts to  str to num
    tipAmount = parseInt(tipAmount);
    //adds decimal (.0) to the beginning of num value
    tipAmount = (tipAmount / 100).toFixed(2);
    let tipAmountPerPerson = (billTotal * tipAmount) / numOfPeople;
    let totalAmountPerPerson = billTotal / numOfPeople + tipAmountPerPerson;
    //adds decimal to value (.00) the end of num value
    tipPerPersonDisplay.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
    //adds decimal to value (.00) the end of num value
    totalPerPersonDisplay.innerText = `$${totalAmountPerPerson.toFixed(2)}`;
    zeroNumWarningDisplay.innerText = "";
  }
}

//calculations for custom tip value
function customPercent(customTip) {
  const billTotal = document.querySelector("#bill-total").value;
  const numOfPeople = document.querySelector("#num-people").value;
  if (billTotal === "" || numOfPeople === "") {
    checkZeroValues();
  } else if ((billTotal.length > 0) & (numOfPeople.length > 0)) {
    //adds decimal (.0) to the beginning of num value
    customTip = (customTip / 100).toFixed(2);
    let tipAmountPerPerson = (billTotal * customTip) / numOfPeople;
    let totalAmountPerPerson = billTotal / numOfPeople + tipAmountPerPerson;
    //adds decimal to value (.00) the end of num value
    tipPerPersonDisplay.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
    totalPerPersonDisplay.innerText = `$${totalAmountPerPerson.toFixed(2)}`;
    zeroNumWarningDisplay.innerText = "";
  }
}
