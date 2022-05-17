
let ropotPhoto = document.querySelector(".DIV");
ropotPhoto.onclick = function(){

    document.querySelector(".displayedClass").style.display = "block";
    var x = document.getElementById("sitehint");
    x.style.display = "none";
   
}

let XButton = document.querySelector(".x");
XButton.onclick = function(){

    document.querySelector(".displayedClass").style.display = "none";
    var x = document.getElementById("sitehint");
    x.style.display = "block";
}




function dissContactName() {
    var conName = document.getElementById("conName").value;
    let regexOfUserName = /^[a-z]{3,}$/i;
    if (conName == "" || conName == " Type Your Name " || regexOfUserName.test(conName) == false || conName.length > 10) {
            document.getElementById("conName").value = "Oops, Enter Valid UserName !";
            document.getElementById("validate").src = "../Resources/notvalid.png";
            return false;
    }
    else {
            document.getElementById("conName").onfocus = conName;
            document.getElementById("validate").src = "../Resources/valid.png";
            return true;
    }
}

function dissContactMail(){
    var conMail = document.getElementById("conMail").value;
    var regexForContactMail = /^\S+@[a-z]+(.com)$/i;
        if (regexForContactMail.length <= 3 || regexForContactMail.test(conMail) == false) {
                document.getElementById("conMail").value = "Oops, Enter Valid Email !";
                document.getElementById("validate2").src = "../Resources/notvalid.png";
                return false;

        }
        else {
                document.getElementById("conMail").onfocus = conMail;
                document.getElementById("validate2").src = "../Resources/valid.png";
                return true;
                
        }

}

function dissContactPhone(){
    
    var conPhone = document.getElementById("conPhone").value;
    var regexForContactPhone = /^(010|011|012|015)\d{8}$/;
        if (regexForContactPhone.length <= 3 || regexForContactPhone.test(conPhone) == false) {
                document.getElementById("conPhone").value = "Oops, Enter Valid Phone !";
                document.getElementById("validate3").src = "../Resources/notvalid.png";
                return false;

        }
        else {
                document.getElementById("conPhone").onfocus = conPhone;
                document.getElementById("validate3").src = "../Resources/valid.png";
                return true;
                
        }
}