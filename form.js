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
