let helloMessagesArray = [
    "يـلا نـفـرفـش يـا زعـيـم",
    "يـلا خـمـسـة فـرفـشـة",
    "بـيـنـا نـفـرفـش الـنـهـاردة",
    "اتـأخـرت لـيـه الـنـهـاردة"
];
let NoktSa5efa = [ "1 2 3",
"واحد جه ينشر السعادة ملقاش مشابك",
"مش فاكر تاني ههه"
];

if( !sessionStorage.getItem( "currentUser" ) )
    location.replace("../index.html");

let testObject = JSON.parse( sessionStorage.getItem("currentUser") );
let counterForInterests = -1, counterForNoktSa5efa = -1;
let arrayOfInterests = testObject.interest;
let myBtn = document.querySelector(".farfeshnyBtn");
let allUserLinks = translate();
showFarfeshnyBtn();

function showFarfeshnyBtn(){
    myBtn.style.opacity = "1";
    console.log( getComputedStyle(myBtn).top );
    let stopInterval = setInterval( function(){
        if( myBtn.style.top == "650px" )
            clearInterval(stopInterval);
        else{
            let prevValue = Number( getComputedStyle(myBtn).top.substring(0,getComputedStyle(myBtn).top.length - 2) ) ;
            console.log(prevValue);
            myBtn.style.top = prevValue - 10 + "px";
        }
    }, 20 );

    

}

myBtn.onclick = showTheRopot;
function showTheRopot(){
    let myImg = document.querySelector("#ropotFigure");
    myImg.style.display = "block";
    console.log( getComputedStyle(myImg).bottom );
    let stopInterval = setInterval( function(){
        if( myImg.style.bottom == "230px" ){
            clearInterval(stopInterval);
            showHelloMessage();
        }
        else{
            let prevValue = Number( getComputedStyle(myImg).bottom.substring(0,getComputedStyle(myImg).bottom.length - 2) ) ;
            console.log(prevValue);
            myImg.style.bottom = prevValue - 10 + "px";
        }
    }, 20 );
}

function showHelloMessage(){
    let text = document.querySelector("#ropotFigure>figcaption");
    console.log("helloMessagesArray" + helloMessagesArray);
    console.log("helloMessagesArrayLength" + helloMessagesArray.length);
    console.log("helloMessagesArray*Math" + Math.floor(Math.random()*helloMessagesArray.length) );
    text.innerHTML = helloMessagesArray[ Math.floor(Math.random()*helloMessagesArray.length) ];
    console.log(text.innerHTML);
    let stopInterval = setInterval( function(){
        if( text.style.left == "0px" ){
            clearInterval(stopInterval);
            changePhoto();
        }
        else{
            let prevValue = Number( getComputedStyle(text).left.substring(0,getComputedStyle(text).left.length - 2) ) ;
            text.style.left = prevValue - 20 + "px";
        }
    }, 20 );
}

function changePhoto(){
    let image = document.querySelector("#ropotFigure>img");
    image.src = "../Resources/face3.png";
    
    setTimeout( function(){

        document.querySelector("#ropotFigure>figcaption").innerHTML = 
    `<p class="captionOfPhotoUpdated">
        تـحـب اقـولـك نـكـتـة؟
        <br/>
        <button class="btn yes" onclick="sayNokta()">أقـول؟</button>
        <button class="btn no" onclick="startFromInterests()">فـاكـس؟</button>
    </p>`;

    }, 2500 );

}

function sayNokta(){

    counterForNoktSa5efa++;
    if( counterForNoktSa5efa == NoktSa5efa.length ){
        document.querySelector("#ropotFigure>figcaption").innerHTML = 
        `كـفـايـة عـلـيـك كـدة, انـا رايـح انـام`;
        counterForNoktSa5efa = -1;
        let image = document.querySelector("#ropotFigure>img");
        image.src = "../Resources/face.png";
        setTimeout( goHome, 3000 );
    }
    else{
        document.querySelector("#ropotFigure>figcaption").innerHTML = 
    `<p class="captionOfPhotoUpdated">
        بيقولك `+ NoktSa5efa[counterForNoktSa5efa] +`
        <br/>
        <button class="btn yes" onclick="sayNokta()">تـاخـد واحـدة كـمـان؟</button>
        <button class="btn no" onclick="startFromInterests()">فـاكـس؟</button>
    </p>`
    }

}

function startFromInterests(){
    counterForInterests++;
    if( counterForInterests == arrayOfInterests.length ){
        document.querySelector("#ropotFigure>figcaption").innerHTML = 
        `طـب يـلا شـوف وراك ايـه مـاتـتـعـبـنـيـش`;
        counterForInterests = -1;
        let image = document.querySelector("#ropotFigure>img");
        image.src = "../Resources/face.png";
        setTimeout( goHome, 3000 );
    }
    else{
        document.querySelector("#ropotFigure>figcaption").innerHTML = 
    `<p class="captionOfPhotoUpdated">
        تـحـب اجيبلك فيديو عن `+ arrayOfInterests[counterForInterests] +`؟
        <br/>
        <button class="btn yes" onclick="getFromInterests()">أقـول؟</button>
        <button class="btn no" onclick="startFromInterests()">فـاكـس؟</button>
    </p>`
    }
        
    
}

function getFromInterests(){

    // Here we will get the Link of All Videos. using counterForInterests
    let area = document.getElementById("ropotPart");
    let myIFrame = allUserLinks[counterForInterests];
    console.log(myIFrame);

    let html = `
        <div class="theRopotLeftPart">
            <img src="../Resources/Robots.jpg" id="rotatedImage" style="border-radius: 50%;animation: rotate; animation-duration: 3s; animation-iteration-count: 1;" width="100%" alt="Ropot" />
            <br>
            <button class="btn no" onclick="closeVideo()" >خلاص اقفل</button>
        </div>
        <div class="themovierightPart">
            `+ myIFrame +`
        </div>
        <div style="clear:both;"></div>
    `;

    area.innerHTML = html;



    console.log( getComputedStyle(myBtn).top );
    let stopInterval = setInterval( function(){
        if( myBtn.style.top == "800px" ){
            clearInterval(stopInterval);
            myBtn.style.opacity = "0";
        }
            
        else{
            let prevValue = Number( getComputedStyle(myBtn).top.substring(0,getComputedStyle(myBtn).top.length - 2) ) ;
            console.log(prevValue);
            myBtn.style.top = prevValue + 10 + "px";
        }
    }, 20 );

}

function goHome(){

    let element = document.getElementById("ropotFigure");
    document.querySelector("#ropotFigure>figcaption").innerHTML = "";
    document.querySelector("#ropotFigure>img").src = "../Resources/face1.png";
    setTimeout( function(){

        let stopInterval = setInterval( function(){

            if( getComputedStyle(element).bottom == "800px" ){
                element.style.display = "none"; 
                clearInterval(stopInterval);
            }
                
            else{
    
                let prevValue = Number( getComputedStyle(element).bottom.substring(0, getComputedStyle(element).bottom.length - 2 )   );
                element.style.bottom = prevValue + 5 + "px";
            }
    
        } , 20 );

    }, 1000 );

}

function translate(){

    let currentLinks = new Array();
    
    for( let i=0; i<arrayOfInterests.length; i++ ){
        if( arrayOfInterests[i] == "football" ){
            arrayOfInterests[i] = "كرة القدم";
            currentLinks.push(`<iframe width="100%" height="100%" src="https://www.youtube.com/embed/1YuN3POoNnQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        }
            
        else if( arrayOfInterests[i] == "music" ){
            arrayOfInterests[i] = "مزيكا";
            currentLinks.push(`<iframe width="100%" height="315" src="https://www.youtube.com/embed/guCwdHngTmM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        }
        else if( arrayOfInterests[i] == "reading" ){
            arrayOfInterests[i] = "القراءة";
            currentLinks.push(`<iframe width="100%" height="315" src="https://www.youtube.com/embed/EiMf3iwvEkc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
        }
    }
    
    // console.log( arrayOfInterests );
    return currentLinks;
        
}

function closeVideo(){

    document.getElementById("rotatedImage").style.animationIterationCount = "1";

    setTimeout( function(){

        showFarfeshnyBtn();
        let html = `
        <figure id="ropotFigure">
            <img src="../Resources/face.png" width="250" alt="Ropot Photo" />
            <figcaption>Test</figcaption>
        </figure>
        `;
        document.getElementById("ropotPart").innerHTML = html;
    }, 1000 );

}

getFromSessionToPage();
function getFromSessionToPage(){
    try{

        document.getElementById("username").innerHTML = JSON.parse( sessionStorage.getItem("currentUser") ).userName;
        document.getElementById("useractivity").innerHTML = JSON.parse( sessionStorage.getItem("currentUser") ).interest;

    }
    catch(e){
        console.log( e.message );
    }
}

function logout(){
    sessionStorage.removeItem("currentUser");
    location.replace("../index.html");
}

/* <h3>F For: Find something to do.</h3>
<h3>a For: After exhausting day</h3>
<h3>R For: Refresh Your mind with us.</h3>
<h3>F For: Finish your tasks</h3>
<h3>E For: End them with us</h3>
<h3>Sh For: Show our website to your friends</h3>
<h3>N For: New Features in next update</h3>
<h3>Y For: Yalla Bena</h3> */


/* <h2><span style="color:red;font-size: 23px">F</span>inding something to do 
<span style="color:red;font-size: 23px">A</span>fter exhausting day 
<span style="color:red;font-size: 23px">R</span>equires 
<span style="color:red;font-size: 23px">F</span>inding a good 
<span style="color:red;font-size: 23px">E</span>xercise to do 
so, if you let me <span style="color:red;font-size: 23px">Sh</span>ow you what i got in my website.. i'm sure that 
you will <span style="color:red;font-size: 23px">N</span>ever be exhausted. 
</h2>
<h2><span style="color:red;font-size: 23px">Y</span>ou read all of this and haven't signed up till now?</h2> */

