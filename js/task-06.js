let inputStr = document.getElementById("validation-input");

let inputLength = inputStr.getAttribute("data-length");
let inputLengthNum = parseInt(inputLength);


inputStr.oninput = function() {
  if (inputStr.value.length === inputLengthNum) {
    inputStr.classList.remove("invalid");
    inputStr.classList.add("valid");
  }
  if (inputStr.value.length === 0) {
    inputStr.classList.remove("valid");
    inputStr.classList.remove("invalid");
  }
  if (inputStr.value.length !== inputLengthNum &&
      inputStr.value.length !== 0) {
    inputStr.classList.add("invalid");
  }
};


