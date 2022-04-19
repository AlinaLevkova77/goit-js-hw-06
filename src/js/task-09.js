// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.


const btnElement = document.querySelector('.change-color');
const textColor = document.querySelector('.color');

btnElement.addEventListener('click',onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  textColor.textContent = newColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}