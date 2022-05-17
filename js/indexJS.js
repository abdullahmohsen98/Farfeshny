
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
let allUsersArray;

checkIfAllUsersAreExist();
function checkIfAllUsersAreExist(){

    if( localStorage.getItem("allUsers") ){
        let x = localStorage.getItem("allUsers")
        console.log( JSON.parse( x ) );
    }
        
    else{

        let ajaxObj = new XMLHttpRequest();
        ajaxObj.open("get","../JSONFolder/usersJSON.json");
        ajaxObj.send();
        ajaxObj.onreadystatechange = function(){
            if( ajaxObj.readyState == 4 && ajaxObj.status == 200 ){
                allUsersArray = JSON.parse( ajaxObj.response ).users;
                console.log(allUsersArray);
                localStorage.setItem("allUsers", JSON.stringify( allUsersArray ) );
            }
        }

    }

}