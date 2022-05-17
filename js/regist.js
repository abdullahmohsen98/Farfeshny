
function myfunction() {
        if( disRegEmail() && disRegPass() && dissRegName() && RegConfirmPass() ) {

                // after all validations and the user should go to his profile
                let interestArray = new Array();
                let allCheckBoxes = document.getElementsByName("intereset");
                for(let i=0; i<allCheckBoxes.length; i++){
                        if( allCheckBoxes[i].checked == true )
                                interestArray.push( allCheckBoxes[i].value );
                }
                let newObj = 
                {
                        userName: document.getElementById("regname").value,
                        password: document.getElementById("regpsw").value,
                        interest: interestArray,
                        lasLogin: null
                };
                let allUsersArray = JSON.parse( localStorage.getItem("allUsers") );
                allUsersArray.push( newObj );
                console.log(allUsersArray);
                localStorage.setItem( "allUsers", JSON.stringify( allUsersArray ) );
                sessionStorage.setItem("currentUser", JSON.stringify(newObj) );
                localStorage.setItem( "currentUserIndex", JSON.stringify( allUsersArray.length -1 ) );
                window.open('../ProfilePage/Profile.html');

        }

}


function dissRegName() {
        var regName = document.getElementById("regname").value;
        let regexOfUserName = /^[a-z]{3,}$/i;
        if (regName == "" || regName == " Type Your Name " || regexOfUserName.test(regName) == false || regName.length > 10) {
                document.getElementById("regpsw").disabled = true;
                document.getElementById("regname").value = " Choose Valid UserName !";
                document.getElementById("validate").src = "../Resources/notvalid.png";
                return false;
        }
        else {
                document.getElementById("regpsw").disabled = false;
                document.getElementById("regname").onfocus = regName;
                document.getElementById("validate").src = "../Resources/valid.png";
                return true;
        }

}

var regPass = document.getElementById("regpsw");
function disRegPass() {
        if (regPass.value.length <= 3 || regPass.value.length > 10) {
                document.getElementById("validate2").src = "../Resources/notvalid.png";
                return false;

        }
        else {
                document.getElementById("validate2").src = "../Resources/valid.png";
                document.getElementById("regpsw").onfocus = regPass;
                return true;

        }
}

function disRegEmail() {
        var regEmail = document.getElementById("regemail");
        // console.log(regEmail.value.length);
        var regPattern = /^\S+@[a-z]+(.com)$/i;
        if (regEmail.value.length <= 3 || regPattern.test(regEmail.value) == false) {
                document.getElementById("regemail").value = " Enter Valid Email !";
                document.getElementById("validate3").src = "../Resources/notvalid.png";
                return false;

        }
        else {
                document.getElementById("regemail").onfocus = regEmail;
                document.getElementById("validate3").src = "../Resources/valid.png";
                return true;
                
        }
}

function RegConfirmPass(){
        var confirmPass = document.getElementById("confpass");
        if(confirmPass.value != regPass.value ){
                // document.getElementById("confpass").value = "PassWord didn't Match,Try again!";
                document.getElementById("validate4").src = "../Resources/notvalid.png";
                return false;

        }
        else if(confirmPass.value == regPass.value){
                // document.getElementById("confpass").onfocus = confirmPass;
                document.getElementById("validate4").src = "../Resources/valid.png";       
                return true;

        }
}



