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
    result.innerHTML = `You selected ${userSelection}, Computer selected ${cpuChoice}. `
    switch (userSelection) {
        case cpuChoice:
            result.innerHTML += "It's a TIE!"
            break
        case "Rock":
            (cpuChoice === "Scissors") ? result.innerHTML += 'You WON ⭐' : result.innerHTML += 'You LOST 😢'
            break
        case "Paper":
            (cpuChoice === "Rock") ?  result.innerHTML += 'You WON ⭐' : result.innerHTML += 'You LOST 😢'
            break
        case "Scissors":
            (cpuChoice === "Paper") ? result.innerHTML += 'You WON ⭐' : result.innerHTML += 'You LOST 😢'
            break
        default:
            result.innerHTML = "Something went wrong"
    }
}

