let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");


input.oninput = function () {
    let newStr = input.value.trim();
    (newStr === '' ) 
    ? nameOutput.textContent = 'Anonymous'
    : nameOutput.textContent = input.value;
}