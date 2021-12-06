let fontChange = document.getElementById("font-size-control");

let text = document.getElementById("text");

fontChange.oninput = function() {
  text.style.fontSize = fontChange.value + "px";
};