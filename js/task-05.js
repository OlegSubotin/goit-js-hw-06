let input = document.getElementById("name-input");
let nameOutput = document.getElementById("name-output");


input.addEventListener('input', function () {
    let newStr = input.value.trim();
    if (newStr === '') {
        nameOutput.textContent = 'Anonymous';
    } else {
        nameOutput.textContent = input.value;
    }
});



