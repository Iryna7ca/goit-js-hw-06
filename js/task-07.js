const controlLine = document.querySelector("#font-size-control");
 
const text = document.querySelector("#text");
 
 
controlLine.addEventListener("input", onInputChange);
function onInputChange(event) {
     
     const textFontSize = parseInt(event.currentTarget.value);
    text.style.fontSize = `${textFontSize}px`;
};
 