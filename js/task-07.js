const fontChange = document.getElementById('font-size-control');
const text = document.getElementById('text');

text.style.fontSize = fontChange.value + 'px';

fontChange.addEventListener('input', function () {
  text.style.fontSize = fontChange.value + 'px';
})
