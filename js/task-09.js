function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

  const spanItem = document.querySelector('.color');
  const btnItem = document.querySelector('.change-color');


  btnItem.addEventListener('click', changeColor);

function changeColor () {
  document.body.style.backgroundColor = getRandomHexColor();
  spanItem.textContent = getRandomHexColor();
}