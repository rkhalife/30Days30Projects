const square = document.getElementsByClassName('square')
const timeleft = document.querySelector('.timeleft')
const yourscore = document.querySelector('.yourscore')
const previousscore = document.querySelector('.previousscore')

let score = 0;
let timer = 15;

if (localStorage.score) {
    previousscore.textContent = `Your previous score was: ${localStorage.score}`
}

let gameStart = setInterval(() => {
    reset()
    timer--
    timeleft.textContent = `Time left is ${timer}`
    let rndSquare = Math.floor(Math.random() * square.length);
    square[rndSquare].classList.toggle('mole')
    square[rndSquare].addEventListener('click', scored, false)
    if (timer == 0) {
        timeleft.textContent = `Game Over!`
        yourscore.textContent = `Your final score is: ${score}`
        reset()
        clearInterval(gameStart)
        storeScore(score)
    }
}, 600)

function scored() {
    score++;
    yourscore.textContent = `Your current score is ${score}`;
    reset()
}

function reset() {
    for (let index = 0; index < square.length; index++) {
        square[index].classList.remove('mole')
        square[index].removeEventListener('click', scored, false)
    }
}

function storeScore(score) {
    if (typeof(Storage) !== "undefined") {
        localStorage.score = score
    }
}