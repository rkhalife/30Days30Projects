const button = document.querySelector('.btnChangebg')

button.addEventListener('click', rndColor) 

function rndColor() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    const colors = `rgb(${r},${g},${b})`
    document.body.style.backgroundColor = colors
}
