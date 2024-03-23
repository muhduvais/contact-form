const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
})

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const setError = (element, messages) => {
    const inputField = element.parentElement;
    const displayError = inputField.querySelector('.error');

    displayError.innerText=messages;
    inputField.classList.add('error');
    inputField.classList.remove('success');
}

const setSuccess = element => {
    const inputField = element.parentElement;
    const displayError = inputField.querySelector('.error');

    displayError.innerText='';
    inputField.classList.add('success');
    inputField.classList.remove('error');
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();

    if(nameValue === '') {
        setError(name, '*Please enter your name');
    }
    else{
        setSuccess(name);
    }

    if(emailValue === '') {
        setError(email, '+Please enter your email');
    }
    else if(!isValidEmail(emailValue)) {
        setError(email, '*Please enter a valid email')
    }
    else{
        setSuccess(email);
    }

    if(phoneValue === '') {
        setError(phone, '*Please enter your phone number');
    }
    else if(phoneValue.toString().length < 10) {
        setError(phone, '*There should be atleast 10 digits')
    }
    else if(phoneValue.toString().length > 10) {
        setError(phone, '*There should be only 10 digits')
    }
    else{
        setSuccess(phone);
    }

    if(messageValue === '') {
        setError(message, '*Please enter a message');
    }
    else{
        setSuccess(message);
    }
}