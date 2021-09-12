const password = document.querySelector('.password')
const strengthBar = document.querySelector('#strength')
const lblStrength = document.querySelector('#lblstrength')
const tooshort = document.querySelector('.minlength')
document.addEventListener('input', checkPassword)

function checkPassword() {
    let score = 0;
    if (password.value.length < 5) {
        tooshort.style.visibility='visible'
        strengthBar.style.visibility='hidden'
        lblStrength.style.visibility='hidden'
    }
    if (password.value.length > 5) {
        tooshort.style.visibility='hidden'
        strengthBar.style.visibility='visible'
        lblStrength.style.visibility='visible'
        password.value.match(/[a-z]+/) ? score+=20 : score
        password.value.match(/[A-Z]+/) ? score+=25 : score
        password.value.match(/[0-9]+/) ? score+=20 : score
        password.value.match(/[%@$()#&!]+/) ? score+=25 : score
        password.value.length > 10 ? score+=5 : score
        password.value.length > 20 ? score+=5 : score
    }
    strengthBar.value = score
}