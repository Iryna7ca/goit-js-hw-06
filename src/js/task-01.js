const items = document.querySelectorAll('.item');
console.log("Number of categories:", items.length);

items.forEach((item) => {
    const nameCategory = item.querySelector("h2").textContent;
    const counter = item.querySelectorAll("li").length;
    console.log(`Category: ${nameCategory}`);
    console.log(`Elements: ${counter}`);
});