const items = document.querySelectorAll('.item');
console.log("Number of categories:", items.length);

items.forEach((item) => {
    const nameCategory = item.firstElementChild.textContent;
    const counter = item.lastElementChild.length;
    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${counter}`);
});