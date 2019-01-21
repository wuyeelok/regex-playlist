// validation script here
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


// username
const usernameEle = document.getElementsByName("username")[0]
const usernameRegex = /^[\w]{5,12}$/i
setInputFieldBorderColor(usernameEle, usernameRegex)