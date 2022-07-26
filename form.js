function validation() {
    var text = document.getElementById("text").value;
    var password = document.getElementById("pwd").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("tel").value;

    var textRegex = /"^[A-Z]{1}[a-z]{2,}$"/;
    if (!textRegex.test(text)) {
        alert("Invalid Name format."+" Should contain first upperCase, lowerCase and length >= 3");
    }

    var mailRegex = /^[a-z\\d+_.-]+@[a-z\\d.-]+$/;
    if (!mailRegex.test(mail)) {
        alert("Invalid e-mail");
    }

    var phoneRegex = /[+91]+[\\d]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number."+" Length should be=10");
    }

    var pwdRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=])(?=\\S+$).{7,}$/;
    if (!pwdRegex.test(password)) {
        alert("Invalid password. "+"Should contain upperCase, lowerCase, special char, number and length >= 8");
    }
}