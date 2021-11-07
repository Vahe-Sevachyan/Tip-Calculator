// const billAmount = document.querySelector(".billAmount");
const peopleAmount = document.querySelector(".peopleAmount");
const tipAmount = document.querySelector(".tipAmount5");
const tipPerEach = document.querySelector(".tipPerPerson");

const calculateTip5 = () => {
  const tipPercent = 0.05;
  //bill total
  const billAmountValue = document.querySelector(".billAmount").value;
  //tip amount
  const tipAmount = billAmountValue * tipPercent;
  //tip amount per person
  const tipPerPerson = tipAmount / peopleAmount;
  //bill per person
  const billPerPerson = billAmount + tipAmount / peopleAmount;
  //
  tipPerEach.innerHTML = tipPerPerson;
  //console.log(total);
};

tipAmount.addEventListener("click", calculateTip5);
