
const buttonLeft = document.querySelector('button[data-action="decrement"]');
console.log(buttonLeft);
const buttonRight = document.querySelector('button[data-action="increment"]');
console.log(buttonRight);
const value = document.querySelector("#value");

let counterValue = 0;
const leftClick = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};
const rigthClick = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

buttonLeft.addEventListener("click", leftClick);
buttonRight.addEventListener("click", rigthClick);