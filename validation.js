// validation script here
const inputs = document.querySelectorAll("input")

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i,
    password: /^[\w@-]{8,20}$/i,
    telephone: /^[\d]{11}$/,
    slug: /^[a-z\d-]{8,20}$/
}

//  validation function
const validate = (field, regex) => {
    if(regex.test(field.value)) {
        field.classList.remove('invalid')
        field.classList.add('valid')
    } else {
        field.classList.remove('valid')
        field.classList.add('invalid')
    }
}

inputs.forEach(input => {
    input.addEventListener('input', e => {
        validate(e.target, patterns[e.target.attributes.name.value])
    })
})
