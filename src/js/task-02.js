const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');

const elements = (element) => {
  const liEl = document.createElement('li');
  liEl.textContent = element;
  liEl.classList.add('item');

  
  return liEl;
};

const totalEl = ingredients.map(elements) ;
ingredientsEl.append(...totalEl);
console.log(ingredientsEl);




