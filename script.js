const username = document.querySelector('#username')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')



const showError = (input, msg) => {
    const formBox = input.parentElement
    const errorMsg = formBox.querySelector('.error-text')

    formBox.classList. add('error')
    errorMsg.textContent = msg
}

const clearError = input => {
    const formBox = input.parentElement
    formBox.classList.remove('error')
    
}

const checkForm = input => {
    input.forEach(el => {
        if(el.value === ""){
            showError(el, "Check ".concat(el.placeholder))
        }
        else {
            clearError(el)
        
        }
    })
    
}

const checkLength = (input, min) => {
    if(input.value.length < min){
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} should have at least ${min} characters long`)
    }
}

const checkPassword = (pass1, pass2) => {
    if(pass1.value != pass2.value){
        showError(pass2, "Passwords are not the same")
    }
}

const chechEmail = email => {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i; 

    if(re.test(email.value)){
        clearError(email)
    }
    else{
        showError(email, "Incorrect email format")
    }
}

const chceckErrors = () => {
    const allInputs = document.querySelectorAll('.form-box')
    let errorCount = 0
    allInputs.forEach(element => {
        if(element.classList.contains('error')){
            errorCount++;
        }
    })

    if(errorCount == 0){
        popup.classList.add('show-popup')
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault()

    checkForm([username, password, password2, email])
    checkLength(username, 3)
    checkLength(password, 8)
    checkPassword(password, password2)
    chechEmail(email)
    chceckErrors()
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();
    [username, password, password2, email].forEach(element => {
        element.value = ""
        clearError(element)
    });
})
