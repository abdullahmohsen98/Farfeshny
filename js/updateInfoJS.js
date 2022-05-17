let testObject = JSON.parse( sessionStorage.getItem( "currentUser" ) );
console.log( testObject );
document.body.onload = displayForm;

function displayForm() {

    let userName = document.getElementById("userName");
    let password = document.getElementById("userPassword");
    let interests = testObject.interest;

    userName.value = testObject.userName;
    password.value = testObject.password;
    for (let i = 0; i < interests.length; i++) {
        try {
            document.getElementById(interests[i]).checked = true;
        }
        catch (e) { console.log("This interest isn't exist in my JSON."); };
    }

    document.getElementById("myBody").style.bottom = "25%";

}


let cancelBtn = document.getElementById("cancel");
cancelBtn.onclick = formDisappear;
function formDisappear() {
    document.getElementById("myBody").style.bottom = "100%";

    setTimeout(function () {
        location.replace("../ProfilePage/Profile.html");
    }, 2500);

    
    // setTimeout(     displayForm , 5000 )
}

let updateInfo = document.getElementById("update");
updateInfo.onclick = function () {

    let userName = document.getElementById("userName");
    let regexForName = /^\S{3,}$/i;
    let userPassword = document.getElementById("userPassword");
    let confirmPassword = document.getElementById("confirmPassword");
    // console.log( testObject);
    // console.log( testObject.interest);

    if (regexForName.test(userName.value)) {
        if ( userPassword.value == confirmPassword.value ) {
            let allCheckBoxes = document.getElementsByName("interest");
            testObject.userName = userName.value;
            testObject.password = userPassword.value;
            let newInterests = [];
            for( let i=0; i<allCheckBoxes.length; i++ )
                if( allCheckBoxes[i].checked == true )
                    newInterests.push( allCheckBoxes[i].value );
            
            testObject.interest = newInterests;
            console.log(testObject);


            sessionStorage.setItem("currentUser", JSON.stringify( testObject ) );
            let allUsersArray = JSON.parse( localStorage.getItem("allUsers") );
            allUsersArray.splice( JSON.parse( localStorage.getItem("currentUserIndex") ), 1 ,testObject  );
            localStorage.setItem( "allUsers", JSON.stringify( allUsersArray ) );


            // should go to the profile again after saying it's successfully
            formDisappear();
        }
        else
            userPassword.select();
    }
    else
        userName.select();



}