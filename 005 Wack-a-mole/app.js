const square = document.getElementsByClassName('square')
const timeleft = document.querySelector('.timeleft')
const yourscore = document.querySelector('.yourscore')

let score = 0;
let timer = 15;

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