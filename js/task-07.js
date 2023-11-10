const controlLine = document.querySelector("#font-size-control");
console.log(controlLine.value);
const text = document.querySelector("#text");
text.style.fontSize = "56px";
 
controlLine.addEventListener("input", onInputChange);
function onInputChange(event) {
     
     const textFontSize = parseInt(event.currentTarget.value);
    text.style.fontSize = `${textFontSize}px`;
};
 