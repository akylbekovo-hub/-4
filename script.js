// ====================
// COUNTER
// ====================

let count = 0;

const countElement = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const resetButton = document.getElementById("reset");
const decreaseButton = document.getElementById("decrease");

function updateCounter() {
    countElement.textContent = count;

    if (count > 0) {
        countElement.style.color = "green";
    } else if (count < 0) {
        countElement.style.color = "red";
    } else {
        countElement.style.color = "gray";
    }
}

increaseButton.addEventListener("click", function () {
    count++;
    updateCounter();
});

resetButton.addEventListener("click", function () {
    count = 0;
    updateCounter();
});

decreaseButton.addEventListener("click", function () {
    count--;
    updateCounter();
});

updateCounter();


// ====================
// LOTTO
// ====================

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const generateButton = document.getElementById("generate");
const lottoNumbers = document.getElementById("lottoNumbers");

generateButton.addEventListener("click", function () {

    lottoNumbers.innerHTML = "";

    for (let i = 0; i < 6; i++) {

        const number = getRandomInt(1, 99);

        const ball = document.createElement("div");

        ball.classList.add("lotto-ball");

        ball.textContent = number.toString().padStart(2, "0");

        lottoNumbers.appendChild(ball);
    }
});

