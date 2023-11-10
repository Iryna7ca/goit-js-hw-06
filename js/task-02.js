const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");

function createMarcup(ingredients) {
  const markup = ingredients.map((ingredient) => {
    const li = document.createElement("li");
    li.textContent = `${ingredient}`;
    li.classList.add("item");
    list.append(li);
    return li;
  })
   
}
 createMarcup(ingredients)
 
 
 