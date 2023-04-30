const numbers = document.querySelectorAll(".percent-numbers");
const TipPerPersonDisplay = document.querySelector(".total-per-person");
let tipAmount = 0;

function calculate(number) {
  const billTotal = document.querySelector("#bill-total").value;
  const numOfPeople = document.querySelector("#num-people").value;
  tipAmount = number.replace("%", "");
  tipAmount = parseInt(tipAmount);
  tipAmount = (tipAmount / 100).toFixed(2);
  let tipAmountPerPerson = billTotal * tipAmount;
  TipPerPersonDisplay.innerText = tipAmountPerPerson;
}
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    tipAmount = e.target.innerText;
    calculate(tipAmount);
  });
});
