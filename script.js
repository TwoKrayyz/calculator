const textBox = document.getElementById('txtBox');
const clr = document.getElementById('clrBtn');
const del = document.getElementById('delBtn');
const add = document.getElementById('addBtn');
const sub = document.getElementById('subBtn');
const mul = document.getElementById('mulBtn');
const div = document.getElementById('divBtn');
const zero = document.getElementById('zeroBtn');
const one = document.getElementById('oneBtn');
const two = document.getElementById('twoBtn');
const three = document.getElementById('threeBtn');
const four = document.getElementById('fourBtn');
const five = document.getElementById('fiveBtn');
const six = document.getElementById('sixBtn');
const seven = document.getElementById('sevenBtn');
const eight = document.getElementById('eightBtn');
const nine = document.getElementById('nineBtn');

clr.addEventListener('click', () => {
    textBox.value = "";
});

del.addEventListener('click', () => {
    textBox.value = textBox.value.slice(0, -1);
});



zero.addEventListener('click', () => {
    textBox.value += "0";
});

one.addEventListener('click', () => {
    textBox.value += "1";
});

two.addEventListener('click', () => {
    textBox.value += "2";
});

three.addEventListener('click', () => {
    textBox.value += "3";
});

four.addEventListener('click', () => {
    textBox.value += "4";
});

five.addEventListener('click', () => {
    textBox.value += "5";
});

six.addEventListener('click', () => {
    textBox.value += "6";
});

seven.addEventListener('click', () => {
    textBox.value += "7";
});

eight.addEventListener('click', () => {
    textBox.value += "8";
});

nine.addEventListener('click', () => {
    textBox.value += "9";
});
