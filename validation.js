// validation script here
const inputs = document.querySelectorAll("input")

const patterns = {
    username: /^[\w]{5,12}$/,
    email: /^[\w]+@[\w]+.com$/i,
    password: /^[a-z,0-9,@,_,-]{8,20}$/i,
    telephone: /^[\d]{11}$/,
    slug: /^[a-z,0-9,-]{8,20}$/
}

//  validation function
const validate = (field, regex) => {
    return regex.test(field.value)
}

inputs.forEach(input => {
    input.addEventListener('input', e => {
        const borderColor = (validate(e.target, patterns[e.target.attributes.name.value])?"green":"red")
        e.target.style.borderColor = borderColor
    })
})

/*
const setInputFieldBorderColor = (inputFieldEle, regex) => {
    if(inputFieldEle !== undefined && inputFieldEle !== null) {
        inputFieldEle.oninput = () => {
            const userInputValue = inputFieldEle.value
            if(userInputValue !== undefined && userInputValue !== null) {
                if(regex.test(userInputValue)) {
                    inputFieldEle.style.borderColor = "green"
                } else {
                    inputFieldEle.style.borderColor = "red"
                }
            }
        }
    }
}


//  username
const usernameEle = document.getElementsByName("username")[0]
const usernameRegex = /^[\w]{5,12}$/
setInputFieldBorderColor(usernameEle, usernameRegex)


//  telephone
const telephoneEle = document.getElementsByName("telephone")[0]
const telephoneRegex = /^[\d]{11}$/
setInputFieldBorderColor(telephoneEle, patterns.telephone)
*/
