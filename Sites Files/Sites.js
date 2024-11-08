let btnThem1 = document.querySelector("#Them1");
let btnThem2 = document.querySelector("#Them2");
// functions
function Them1(){
    // variables 
    let nav = document.querySelector("nav");
    let nav_h1 = document.querySelector("nav h1");
    let Author = document.querySelectorAll("nav h1 span");
    let nav_a = document.querySelectorAll("nav ul li a");
    let container = document.querySelector(".container");
    let div_links = document.querySelectorAll(".container .link");
    let titles = document.querySelectorAll(".container .link h1");

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
    container.style.backgroundImage = 'url("Sites Files/Pictures/inline_image_preview.jpg")';
    div_links.forEach((ele) => {
        ele.style.boxShadow = "0 10px 5px 0 rgb(255, 134, 134)";
    });
    titles.forEach((ele) => {
        ele.addEventListener("mouseover",function (){
            ele.style.color = "rgb(255, 134, 134)";
        });
        ele.addEventListener("mouseout",function (){
            ele.style.color = "black";
        });
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
    let div_links = document.querySelectorAll(".container .link");
    let titles = document.querySelectorAll(".container .link h1");

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
    container.style.backgroundImage = 'url("Sites Files/Pictures/hi-tech-background-futuristic-in-red-neon-square-created-with-3d-rendering_9633449.jpg")';
    div_links.forEach((ele) => {
        ele.style.boxShadow = "0 10px 5px 0 red";
    });
    titles.forEach((ele) => {
        ele.addEventListener("mouseover",function (){
            ele.style.color = "red";
        });
        ele.addEventListener("mouseout",function (){
            ele.style.color = "black";
        });
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
let divs_link = document.querySelectorAll(".container .link");
divs_link.forEach((ele,index) => {
    let link_name = document.querySelectorAll(".container .link .title");
    ele.addEventListener("mouseover",function (){
        link_name[index].style.display = "Block";
    });
    ele.addEventListener("mouseout",function (){
        link_name[index].style.display = "none";
    });
});