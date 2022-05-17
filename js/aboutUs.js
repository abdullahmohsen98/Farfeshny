
let ropotPhoto = document.querySelector(".DIV");
ropotPhoto.onclick = function(){

    document.querySelector(".displayedClass").style.display = "block";
    var x = document.getElementById("sitehint");
    x.style.visibility = "hidden";
   
}

let XButton = document.querySelector(".x");
XButton.onclick = function(){

    document.querySelector(".displayedClass").style.display = "none";
    var x = document.getElementById("sitehint");
    x.style.visibility = "visible";
}
