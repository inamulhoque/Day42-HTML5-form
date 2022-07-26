function validation() {
    var text = document.getElementById("text").value;
    var password = document.getElementById("pwd").value;
    var mail = document.getElementById("email").value;
    var num = document.getElementById("number").value;
    var phone = document.getElementById("tel").value;
    var salary = document.getElementById("salary").value;
    var dateTime = document.getElementById("party").value;

    var pwdRegex = /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=])(?=\\S+$).{7,}$/;
    if (!pwdRegex.test(password)) {
        alert("Invalid password. "+"Should contain upperCase, lowerCase, special char, number and length >= 8");
    }
    
    

}