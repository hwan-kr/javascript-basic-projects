const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; // 16개

const clickBtn = document.getElementById('btn');
const backgroundColor = document.querySelector('main');
const colorTag = document.querySelector('span');

let newColorCode = [];
let colorCode;

// num1 ~ num2-1 사이 숫자 생성.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function makeColor() {
    newColorCode = [];
    let element;
    for (i = 0; i < 6; i++) {
        element = hex[randomNumber(0, 15)];
        newColorCode.push(element);
    }
    colorCode = newColorCode.join('');
    backgroundColor.style.backgroundColor = `#${colorCode}`;
    colorTag.textContent = `#${colorCode}`;
}

clickBtn.addEventListener('click', makeColor);
