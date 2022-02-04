let inputStr = document.getElementById("validation-input");

let inputLength = inputStr.getAttribute("data-length");
let inputLengthNum = parseInt(inputLength);


inputStr.oninput = function() {
  if (inputStr.value.length === inputLengthNum) {
    inputStr.classList.remove("invalid");
    inputStr.classList.add("valid");
  } 
  if (inputStr.value.length !== inputLengthNum) {
    inputStr.classList.remove('valid');
    inputStr.classList.add('invalid');
  }

};


