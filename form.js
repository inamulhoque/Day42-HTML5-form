function validation() {
    var text = document.getElementById("text").value;
    var password = document.getElementById("pwd").value;
    var mail = document.getElementById("email").value;
    var phone = document.getElementById("tel").value;

    var phoneRegex = /[+91]+[\\d]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Invalid phone number."+" Length should be=10");
    }
}