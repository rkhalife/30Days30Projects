const rock = document.querySelector('.Rock')
const paper = document.querySelector('.Paper')
const scissors = document.querySelector('.Scissors')
const result = document.querySelector('.result')
let userSelection = ''
let cpuChoice = ''

rock.addEventListener('click', () => {
    userSelection = rock.className
    cpuRandom()
})

paper.addEventListener('click', () => {
    userSelection = 'Paper'
    cpuRandom()
})

scissors.addEventListener('click', () => {
    userSelection = 'Scissors'
    cpuRandom()
})

function cpuRandom() {
    const choices = ['Rock', 'Paper', 'Scissors']
    const rnd = Math.floor(Math.random() * choices.length)
    cpuChoice = choices[rnd]
    if (userSelection === cpuChoice)                            { result.innerHTML = `You selected ${userSelection}, cpu selected ${cpuChoice}. It's a TIE!` }
    if (userSelection === 'Rock' && cpuChoice === 'Scissors')   { result.innerHTML = `You selected ${userSelection}, cpu selected ${cpuChoice}. You WIN!` }
    if (userSelection === 'Rock' && cpuChoice === 'Paper')      { result.innerHTML = `You selected ${userSelection}, cpu selected ${cpuChoice}. You LOSE!` }
    if (userSelection === 'Paper' && cpuChoice === 'Scissors')  { result.innerHTML = `You selected ${userSelection}, cpu selected ${cpuChoice}. You LOSE!` }
    if (userSelection === 'Paper' && cpuChoice === 'Rock')      { result.innerHTML = `You selected ${userSelection}, cpu selected ${cpuChoice}. You WIN!` }
    if (userSelection === 'Scissors' && cpuChoice === 'Rock')   { result.innerHTML = `You selected ${userSelection}, cpu selected ${cpuChoice}. You LOSE!` }
    if (userSelection === 'Scissors' && cpuChoice === 'Paper')  { result.innerHTML = `You selected ${userSelection}, cpu selected ${cpuChoice}. You WIN!` }
}

