var paraElement = document.getElementById("p1_card1");
var oldContent = paraElement.innerHTML;
var newContent = oldContent.substring(0, 40)+"..." + "<a href='#' onclick='readMoreFunc(paraElement, oldContent);'>Read More</a>";
paraElement.innerHTML = newContent;
function readMoreFunc(paraElement, oldContent){
    paraElement.innerHTML = oldContent;

}

function loginValidation(){

    var emails = document.getElementById("emails").value;
    var pass = document.getElementById("pass").value;
    
    document.getElementById("passwords").innerHTML = "";
    document.getElementById("username").innerHTML = "";

    if(emails == ""){
        document.getElementById("username").innerHTML = " **Please enter your email id";
        return false;
    }
    if(emails.indexOf('@') <= 0){
        document.getElementById("username").innerHTML = " **Invalid email id";
        return false;
    }
    if((emails.charAt(emails.length-4) != '.')&&(emails.charAt(emails.length-3) != '.')){
        document.getElementById("username").innerHTML = " **Invalid email id";
        return false;
    }

    if(pass == ""){
        document.getElementById("passwords").innerHTML = " **Please enter your password";
        return false;
    }

    if(pass.length < 6){
        document.getElementById("passwords").innerHTML = " **Password is very short";
        return false;
    } 

    if(pass.length >= 12){
        document.getElementById("passwords").innerHTML = " **Password is very long";
        return false;
    } 

    var numberPattern = /[0-9]/;
    var numberCheck = numberPattern.test(pass);
    if(numberCheck == false){
        document.getElementById("passwords").innerHTML = " **Password must contain a digit";
        return false;
    }
    
}
