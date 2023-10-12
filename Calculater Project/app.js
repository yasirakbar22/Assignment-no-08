let display = document.getElementById('display');
let input = '';

function appendToDisplay(value) {
    input += value;
    display.value = input;
}

function clearLastCharacter() {
    input = input.slice(0, -1);
    display.value = input;
}

function calculateResult() {
    try {
        input = eval(input);
        display.value = input;
    } catch (error) {
        display.value = 'Error';
        input = '';
    }
}

