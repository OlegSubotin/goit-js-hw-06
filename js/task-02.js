const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


let List = document.getElementById("ingredients");
const foodIngredients = ingredients.forEach(ingredient => {
  let items = document.createElement("li");
  
  items.innerHTML = ingredient;
  
  List.append(items);
  
});

