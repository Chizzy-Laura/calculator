let display = document.querySelector('input');

function insertValue(char) {
    display.value += char;    
}

function erase() {
    display.value = '';
}

function squareroot() {
    display.value = Math.sqrt(display.value);
}

function calc() {
    display.value = eval(display.value);
}