function validation() {
    var text = document.getElementById("text").value;
    var password = document.getElementById("pwd").value;
    var mail = document.getElementById("email").value;
    var num = document.getElementById("number").value;
    var phone = document.getElementById("tel").value;
    var salary = document.getElementById("salary").value;
    var dateTime = document.getElementById("party").value;

    var textRegex = /"^[A-Z]{1}[a-z]{2,}$"/;
    if (!textRegex.test(text)) {
        alert("Invalid Name format."+" Should contain first upperCase, lowerCase and length >= 3");
    }
}