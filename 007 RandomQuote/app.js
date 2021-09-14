const quote = document.querySelector('.quote')

let requestURL = 'https://game-of-thrones-quotes.herokuapp.com/v1/random'
let request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = () => {
    const response = request.response.sentence
    const character = request.response.character.name
    quote.innerHTML = `"${response}" - ${character}`
}