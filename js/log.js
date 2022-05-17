
function myfunction() {
	if ( disName() && disPass() ){
		
		// Load all data from json file and check if this user is already exist
		// after all validations and the user should go to his profile
		let x = document.getElementById("myUser"),y = document.getElementById("psw");
		let allUsersArray = JSON.parse( localStorage.getItem("allUsers") );
		let currentUser = null;
		for( let i=0; i<allUsersArray.length; i++ ){

			if( allUsersArray[i].userName == x.value && allUsersArray[i].password == y.value ){
				currentUser = allUsersArray[i];
				sessionStorage.setItem("currentUser", JSON.stringify(currentUser) );
				localStorage.setItem("currentUserIndex", JSON.stringify(i) );
				break;
			}

		}

		if( currentUser == null ){
			// please check userName or password
			alert("You aren't exist");
		}
		else{
			window.open('../ProfilePage/Profile.html',"_self");
		}


	}

}



function disName() {
	var name = document.getElementById("myUser").value;
	
	if (name == "" || name == " Type Your Name " || name.length <= 3 || name.length > 10) {
		document.getElementById("psw").disabled = true;
		document.getElementById("myUser").value = " Oops, InValid UserName !";
		document.getElementById("validate").src = "../Resources/notvalid.png";
		return false;

	}
	else {
		document.getElementById("psw").disabled = false;
		document.getElementById("myUser").onfocus = name;
		document.getElementById("psw").focus();
		document.getElementById("validate").src = "../Resources/valid.png";
		return true;


	}
}

function disPass() {
	var myPassword = document.getElementById("psw").value;

	if (myPassword.length <= 3 || myPassword.length > 10) {
		document.getElementById("invalid").innerHTML = " Oops, InValid PassWord !";
		document.getElementById("validate2").src = "../Resources/notvalid.png";
		document.getElementById("invalid").style.display = "block";
		return false;

	}
	else {
		document.getElementById("validate2").src = "../Resources/valid.png";
		document.getElementById("psw").onfocus = myPassword;
		document.getElementById("invalid").style.display = "none";
		return true;

	}
}





