const input = document.querySelector('.input')
const pwdField = document.querySelector('.password')

function generatePassword() {
    const pwdChars = '!@1234567890abcdefgh#$%jkmnopqrstuvwxyz&*()'
    let password = ''
    if (input.value > 5) {
        for (let i = 0; i < input.value; i++) {
            const rnd = Math.floor(Math.random() * pwdChars.length)
            password += pwdChars[rnd]
        }
        pwdField.innerHTML = `Your randomly generated password is: <b>${password}</b>`
    }
    else {
        pwdField.innerHTML = 'Password length must be at least 6 characters long'
    }
}