console.log('Hello World!');

let inputBox = document.querySelectorAll(".input-box");
let mode = document.querySelectorAll(".mode")[0];
let header = document.querySelector("header");
let nav = document.querySelector("nav");
let technology = document.querySelector(".technology");
let sidebarBtn = document.querySelector('.sidebar-btn');


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

window.onscroll = function(){

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector("header").style.backgroundColor = "var(--gray)";
        document.querySelector("nav").style.backgroundColor = "var(--gray)";
        mode.style.backgroundColor="var(--light-gray)";

    } else {
        document.querySelector("header").style.backgroundColor = "";
        document.querySelector("nav").style.backgroundColor = "";
        mode.style.backgroundColor="var(--dark-gray)";
    }

    header.style.position="fixed";
    nav.style.position="fixed";
}

technology.children[1].onclick= function(){
    technology.children[0].classList.remove("technology-style");
    this.classList.add("technology-style");

    document.querySelector(".skills-icon").style.display="none";
    document.querySelector(".tools-icon").style.display="flex";
}

technology.children[0].onclick= function(){
    technology.children[1].classList.remove("technology-style");
    this.classList.add("technology-style");

    document.querySelector(".skills-icon").style.display="flex";
    document.querySelector(".tools-icon").style.display="none";
}

sidebarBtn.onclick=function(){
    document.querySelector("nav").classList.toggle("nav-top");

    sidebarBtn.children[0].classList.toggle("fa-xmark");
}