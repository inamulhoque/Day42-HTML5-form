const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");

text.addEventListener('input', function () {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,)$");

    if (nameRegex.test(text.value)) {
        textError.textContent = "";
    }
    else textError.textContent = "Name is Incorrect";
});
