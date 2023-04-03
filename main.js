console.log('Hello World!');

let inputBox = document.querySelectorAll(".input-box");
let mode = document.querySelectorAll(".mode")[0];

for (let i = 0; i < 4; i++) {
    inputBox[i].addEventListener("focusin",function(){
        inputBox[0].children[0].style.backgroundColor="orangered"
        this.style.borderColor="orangered";
        inputBox[i].children[0].style.color="orangered"
        inputBox[i].children[1].style.color="orangered"
        inputBox[0].children[0].style.color="white"
    })
    
    inputBox[i].addEventListener("focusout",function(){
        this.style.borderColor="";
        inputBox[i].children[0].style.color=""
        inputBox[0].children[0].style.backgroundColor="none"
    })
}

mode.onclick = function(){
    let light = mode.children[0].classList;
    light.toggle("fa-moon");

    document.body.classList.toggle("dark-mode");
     
    if (light[2] == "fa-moon") {
        mode.style.justifyContent="flex-end";
        mode.children[0].style.color="white";
        
    } else {
        // console.log("thsn")
        mode.children[0].style.color=""
        mode.style.justifyContent="flex-start";
        
    }
}

