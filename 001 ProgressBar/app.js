const progressBar = document.getElementById('progress')
let number = 0
const progressTimer = setInterval(incrementProgressBar, 100)

function incrementProgressBar() {
    number++
    number == 101 ? clearInterval(progressTimer) : progressBar.value = number
}