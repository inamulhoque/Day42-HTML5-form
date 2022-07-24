const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener('input', function () {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,)$");

    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    }
    else textError.textContent = "Name is Incorrect";
});

const email = document.querySelector("#email");
const emailError = document.querySelector(".email-error");
email.addEventListener('input', function(){
    let emailRegex = RegExp("^[a-z\\d+_.-]+@[a-z\\d.-]+$");
    if (emailRegex.test(email.value)) {
        emailError.textContent = "";
    } else {
        emailError.textContent = "Email format invalid";
    }
} );

const phone = document.querySelector("#tel");
const phoneError = document.querySelector(".tel-error");
phone.addEventListener('input', function(){
    let phoneRegex = RegExp("[+91]+[\\d]{10}$");
    if (phoneRegex.test(phone.value)) {
        phoneError.textContent = "";
    } else {
        phoneError.textContent = "Invalid phone number";
    }
});
const password = document.querySelector("#pwd");
const passwordError = document.querySelector(".password-error");
password.addEventListener('input', function () {
    let pwdRegex = RegExp("^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=])(?=\\S+$).{7,}$");
    if (pwdRegex.test(pwdRegex.value)) {
        passwordError.textContent = "";
    }
    else {
        passwordError.textContent = "Password format invalid";
    }    
});

const salary = document.querySelector("#salary");
const output = document.querySelector(".salary-output");
salary.addEventListener('input', function () {
    output.textContent = salary.value;
});