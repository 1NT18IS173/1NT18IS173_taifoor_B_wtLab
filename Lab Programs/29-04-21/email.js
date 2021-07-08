function validateEmail(){ 
    email=prompt("enter email")
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    document.getElementById("i2").innerHTML="<b>"+emailPattern.test(email)+"</b>";
    }