// validation script here
const usernameRegex = new RegExp(/^[\w]{5,12}$/)

const usernameEle = document.getElementsByName("username")[0]

if(usernameEle !== undefined && usernameEle !== null) {
    usernameEle.oninput = () => {
        const userInput = usernameEle.value
        if(usernameRegex.test(userInput)) {
            usernameEle.style.borderColor = "green"
        } else {
            usernameEle.style.borderColor = "red"
        }
    }
}
