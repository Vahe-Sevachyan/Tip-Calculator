const tipInput = document.querySelector(".tipInput");
const peopleAmount = document.querySelector(".peopleAmount");
const tipAmount = document.querySelector(".tipAmount5");

const calculateTip5 = () => {
  const tipValue = tipInput.value;
  const peopleCount = peopleAmount.value;
  const total = tipValue * peopleCount * 0.5;
  console.log(total);
};

tipAmount.addEventListener("click", calculateTip5);
