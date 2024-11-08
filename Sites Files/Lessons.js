let btnThem1 = document.querySelector("#Them1");
let btnThem2 = document.querySelector("#Them2");
// This code for give active page class "active"
// functions
function Them1(){
    // variables 
    let nav = document.querySelector("nav");
    let nav_h1 = document.querySelector("nav h1");
    let Author = document.querySelectorAll("nav h1 span");
    let nav_a = document.querySelectorAll("nav ul li a");    
    let container = document.querySelector(".container");
    let table = document.querySelector(".container table");
    let ths = document.querySelectorAll("table th");
    let tds = document.querySelectorAll("table td");

    // Change colors
    nav.style.borderBottom = "5px solid rgb(255, 134, 134)";
    nav.style.backgroundColor = "white";
    nav_h1.style.color = "black";
    Author.forEach((ele) => {
        ele.style.color = "rgb(255, 134, 134)";
    });
    nav_a.forEach((ele) => {
        ele.style.color = "black";
        ele.style.backgroundColor = "white";
        ele.addEventListener("mouseover",function (){
            ele.style.backgroundColor = "rgb(255, 134, 134)";
            ele.style.color = "white";
        });
        ele.addEventListener("mouseout",function (){
            ele.style.backgroundColor = "white";
            ele.style.color = "black";
        })
    });

    container.style.backgroundImage = 'url("Pictures/inline_image_preview.jpg")';

    table.style.color = "black";
    table.style.border = "4px solid rgb(255, 134, 134)";
    ths.forEach((th) => {
        th.style.border = "4px solid rgb(255, 134, 134)";
    });
    tds.forEach((td) => {
        td.style.border = "4px solid rgb(255, 134, 134)";
    });

    // add More Element
    btnThem2.style.display = "inline";
    btnThem1.style.display = "none";
    // Local Storage Them
    window.localStorage.Them = 1;
};
function Them2(){
    // variables 
    let nav = document.querySelector("nav");
    let nav_h1 = document.querySelector("nav h1");
    let Author = document.querySelectorAll("nav h1 span");
    let nav_a = document.querySelectorAll("nav ul li a");
    let container = document.querySelector(".container");
    let table = document.querySelector(".container table");
    let ths = document.querySelectorAll("table th");
    let tds = document.querySelectorAll("table td");

    // Change colors
    nav.style.borderBottom = "5px red solid";
    nav.style.backgroundColor = "black";
    nav_h1.style.color = "white";
    Author.forEach((ele) => {
        ele.style.color = "red";
    });
    nav_a.forEach((ele) => {
        ele.style.color = "white";
        ele.style.backgroundColor = "black";
        ele.addEventListener("mouseover",function (){
            ele.style.backgroundColor = "red";
            ele.style.color = "black";
        });
        ele.addEventListener("mouseout",function (){
            ele.style.backgroundColor = "black";
            ele.style.color = "white";
        })
    });

    container.style.backgroundImage = 'url("Pictures/hi-tech-background-futuristic-in-red-neon-square-created-with-3d-rendering_9633449.jpg")';

    table.style.color = "white";
    table.style.border = "4px solid red";
    ths.forEach((th) => {
        th.style.border = "4px solid red";
    });
    tds.forEach((td) => {
        td.style.border = "4px solid red";
    });

    // add More Element
    btnThem2.style.display = "none";
    btnThem1.style.display = "inline";
    // Local Storage THem
    window.localStorage.Them = 2;
};
btnThem2.addEventListener("click",function (){Them2()}); 
btnThem1.addEventListener("click",function (){Them1()});
if (localStorage.Them == 1){
    Them1();
} else if (localStorage.Them == 2){
    Them2();
}
// ------------------------------------------------------------- Nav -------------------------------------------------------------------//
