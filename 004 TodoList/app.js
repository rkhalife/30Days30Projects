const input = document.querySelector('.input')
const ul = document.querySelector('.list')
const btnAdd = document.querySelector('#btnAdd')

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    const li = document.createElement("li")
    ul.appendChild(li)
    li.appendChild(document.createTextNode(input.value))
    input.value = ''
    li.addEventListener('click', () => {
        li.classList.toggle("checked")
    })
})
