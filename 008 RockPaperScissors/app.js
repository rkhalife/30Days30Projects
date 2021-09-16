const rock = document.querySelector('.Rock')
const paper = document.querySelector('.Paper')
const scissors = document.querySelector('.Scissors')
const result = document.querySelector('.result')
let userSelection = ''
let cpuChoice = ''

document.body.addEventListener('click', (e) => {
    userSelection = e.target.id
    cpuRandomPick()
    showResult()
  })
  
  function cpuRandomPick() {
      const choices = ['Rock', 'Paper', 'Scissors']
      const rnd = Math.floor(Math.random() * choices.length)
      cpuChoice = choices[rnd]
      result.innerHTML = `You selected ${userSelection}, Computer selected ${cpuChoice}. `
  }
  
  function showResult() {
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
  