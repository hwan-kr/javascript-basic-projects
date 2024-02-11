const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];

const clickBtn = document.getElementById('btn');
const backgroundColor = document.querySelector('main');
const colorTag = document.querySelector('span');

// num1 ~ num2-1 사이 숫자 생성.
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function changeColor() {
    let colorIndex = colors[randomNumber(0, 4)];
    backgroundColor.style.backgroundColor = colorIndex;
    colorTag.textContent = colorIndex;
}

clickBtn.addEventListener('click', changeColor);
//test