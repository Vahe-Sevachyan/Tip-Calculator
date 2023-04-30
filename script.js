const percentageNum = document.querySelectorAll(".percent-numbers");
const TipPerPersonDisplay = document.querySelector(".tip-per-person");
const totalPerPersonDisplay = document.querySelector(".total-per-person");
const billTotal = document.querySelector("#bill-total").value;
const numOfPeople = document.querySelector("#num-people").value;
const customTipSelector = document.querySelector(".custom-tip");
let tipAmount = 0;
let customTip = 0;

percentageNum.forEach((number) => {
  number.addEventListener("click", (e) => {
    tipAmount = e.target.innerText;
    tipAmountPerPerson(tipAmount);
  });
});

function tipAmountPerPerson(percentNum) {
  const billTotal = document.querySelector("#bill-total").value;
  const numOfPeople = document.querySelector("#num-people").value;
  //removes % symbol
  tipAmount = percentNum.replace("%", "");
  //converts to  str to num
  tipAmount = parseInt(tipAmount);
  //adds decimal (.0) to the beginning of num value
  tipAmount = (tipAmount / 100).toFixed(2);
  let tipAmountPerPerson = (billTotal * tipAmount) / numOfPeople;
  let totalAmountPerPerson = billTotal / numOfPeople + tipAmountPerPerson;
  //adds decimal to value (.00) the end of num value
  TipPerPersonDisplay.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
  //adds decimal to value (.00) the end of num value
  totalPerPersonDisplay.innerText = `$${totalAmountPerPerson.toFixed(2)}`;
}

function customPercent(customTip) {
  const billTotal = document.querySelector("#bill-total").value;
  const numOfPeople = document.querySelector("#num-people").value;
  //adds decimal (.0) to the beginning of num value
  customTip = (customTip / 100).toFixed(2);
  let tipAmountPerPerson = (billTotal * customTip) / numOfPeople;
  //adds decimal to value (.00) the end of num value
  TipPerPersonDisplay.innerText = `$${tipAmountPerPerson.toFixed(2)}`;
}

customTipSelector.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    customTip = parseInt(customTipSelector.value);
    customPercent(customTip);
  }
});
