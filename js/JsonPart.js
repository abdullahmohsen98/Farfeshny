
let newObject = 
{ 
    userName: "Youssef",
    password: "asdasdasd",
    interest: ["music","football"],
    lasLogin: null 
};


let allUsers;
let ajax = new XMLHttpRequest();
ajax.open("get","../JSONFolder/usersJSON.json");
ajax.send();
ajax.onreadystatechange = function(){

    if( ajax.readyState == 4 && ajax.status == 200 ){

        allUsers = JSON.parse( ajax.response ).users;
        console.log( allUsers );
        addNewUser();
    }

} 

function addNewUser(){

    let newAjax = XMLHttpRequest();
    newAjax.open("post","../JSONFolder/usersJSON.json");
    newAjax.send();
    

}



