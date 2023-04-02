console.log('Hello World!');

let inputBox = document.querySelectorAll(".input-box");

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