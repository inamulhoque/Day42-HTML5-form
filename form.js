function validation() {
    var text = document.getElementById("text").value;
    var password = document.getElementById("pwd").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("tel").value;

    var mailRegex = /^[a-z\\d+_.-]+@[a-z\\d.-]+$/;
    if (!mailRegex.test(mail)) {
        alert("Invalid e-mail");
    }
}