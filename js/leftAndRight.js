
let counter = 1;
let submitButton = document.getElementById("addbutton2");
submitButton.onclick = function(){
    let textarea = document.getElementById("textarea");
    console.log(textarea.value);
    if( textarea.value != "" ){
        let html = `<p id="element`+ counter +`" onclick=transferFromToDoToDone(this.id)> ` + textarea.value + `</p>` ;
        document.getElementById("addcard").innerHTML += html;
        counter++;
        textarea.value = "";
    }
}

let counterOfTheDone = 1;
function transferFromToDoToDone(id)
{
    console.log(id);
    console.log( document.getElementById(id) );
    let doneElement = document.getElementById(id).innerHTML ;
    
    document.getElementById("finishedcard").innerHTML += 
    `<p onclick="transferFromDonetoToDo(this.id)" id="doneElement`+counterOfTheDone+`">`+ doneElement +`</p>` ;
    document.getElementById(id).remove();

}

function transferFromDonetoToDo(elementID){
    let html = `<p id="element`+ counter +`" onclick=transferFromToDoToDone(this.id)> ` + document.getElementById(elementID).innerHTML + `</p>` ;
    document.getElementById("addcard").innerHTML += html;
    document.getElementById(elementID).remove();

}


document.getElementById("updateinfo").onclick = function(){
    window.open("../updateInfo/updateInfo.html");
}