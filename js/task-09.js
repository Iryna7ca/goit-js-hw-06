const btn = document.querySelector(".change-color");
const span = document.querySelector(".color");
 
const body = document.querySelector("body");
 
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
   .padStart(6, 0)}`;
   
};

function onHandleClick() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
  span.textContent = `#${randomColor}`;
  body.style.backgroundColor =  `#${randomColor}`;
};

btn.addEventListener("click", onHandleClick, getRandomHexColor);