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
    let div_addtask = document.querySelectorAll(".addTasks");
    let input = document.querySelectorAll(".text");
    let task_btn = document.querySelectorAll(".container .button");
    let div_tasks = document.querySelectorAll(".tasks");
    let tasks_p = document.querySelectorAll(".tasks p");
    let headlines = document.querySelectorAll(".container h1");
    let btn_finish = document.querySelectorAll(".tasks button");
    let parent_div = document.querySelectorAll(".container > div");

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

    div_addtask.forEach((div) => {
        div.style.backgroundColor = "rgb(227, 227, 227)";
    });
    input.forEach((inp) => {
        inp.style.color = "rgb(255, 134, 134)";
    });
    task_btn.forEach((btn) => {
        btn.style.backgroundColor = "rgb(255, 134, 134)";
        btn.style.color = "black";
    });
    div_tasks.forEach((div) => {
        div.style.backgroundColor = "rgb(227, 227, 227)";
    });
    tasks_p.forEach((p) => {
        p.style.color = "rgb(255, 134, 134)";
    });
    headlines.forEach((h1) => {
        h1.style.textDecoration = "4px solid rgb(255, 134, 134) underline";
        h1.style.color = "black";
    });
    btn_finish.forEach((btn) => {
        btn.style.backgroundColor = "rgb(255, 134, 134)";
        btn.style.color = "black";
    });
    parent_div.forEach((div) => {
        div.style.borderBottom = "4px solid rgb(227, 227, 227)";
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
    let div_addtask = document.querySelectorAll(".addTasks");
    let input = document.querySelectorAll(".text");
    let task_btn = document.querySelectorAll(".container .button");
    let div_tasks = document.querySelectorAll(".tasks");
    let tasks_p = document.querySelectorAll(".tasks p");
    let headlines = document.querySelectorAll(".container h1");
    let btn_finish = document.querySelectorAll(".tasks button");
    let parent_div = document.querySelectorAll(".container > div");

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
    
    div_addtask.forEach((div) => {
        div.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
    });
    input.forEach((inp) => {
        inp.style.color = "red";
    });
    task_btn.forEach((btn) => {
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
    });
    div_tasks.forEach((div) => {
        div.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
    });
    tasks_p.forEach((p) => {
        p.style.color = "red";
    });
    headlines.forEach((h1) => {
        h1.style.textDecoration = "4px solid red underline";
        h1.style.color = "white";
    });
    btn_finish.forEach((btn) => {
        btn.style.backgroundColor = "red";
        btn.style.color = "white";
    });
    parent_div.forEach((div) => {
        div.style.borderBottom = "4px solid rgb(0, 0, 0, 0.7)";
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

//                           ----------------------------  add Home Tasks  ----------------------------
let btn_add_HT = document.querySelector(".homeTasks .button");
let input_HT = document.querySelector(".homeTasks .text");
let div_home_tasks = document.querySelector(".homeTasks .tasks");
// function 
function createHomeTask(note){
    let div_task = document.createElement("div");
    div_task.classList.add("task");
    let p = document.createElement("p");
    let p_note = document.createTextNode(note);
    p.appendChild(p_note);
    let btn = document.createElement("button");
    let btn_note = document.createTextNode("Finish");
    btn.appendChild(btn_note);
    div_task.appendChild(p);
    div_task.appendChild(btn);
    div_home_tasks.appendChild(div_task);
}
btn_add_HT.addEventListener("click",function (){
    if (localStorage.homeTasks && input_HT.value != ""){
        let homeArray = JSON.parse(localStorage.homeTasks);
        homeArray.push(input_HT.value);
        localStorage.homeTasks = JSON.stringify(homeArray);
        location.reload();
    } else if (!localStorage.homeArray && input_HT.value != ""){
        window.localStorage.setItem("homeTasks",JSON.stringify([input_HT.value]));
        location.reload();
    }
});
// add task for div tasks
if (localStorage.homeTasks){
    let homeArray = JSON.parse(localStorage.homeTasks);
    if (homeArray.length > 0){
        document.querySelector(".homeTasks .tasks").style.display = "flex";
    }
    homeArray.forEach((ele) => {
        createHomeTask(ele);
        if (localStorage.Them == 1){
            Them1();
        } else if (localStorage.Them == 2){
            Them2();
        }
    });
}
// delete tasks
let btn_finish_HT = document.querySelectorAll(".homeTasks .task button");
btn_finish_HT.forEach((btn,index) => {
    btn.addEventListener("click",function (){
        let homeArray = JSON.parse(localStorage.homeTasks);
        homeArray.splice(index,1);
        localStorage.homeTasks = JSON.stringify(homeArray);
        location.reload();
    });
});
//                           ----------------------------  add Work Tasks  ----------------------------
let btn_add_WT = document.querySelector(".workTasks .button");
let input_WT = document.querySelector(".workTasks .text");
let div_work_tasks = document.querySelector(".workTasks .tasks");
// function 
function createWorkTask(note){
    let div_task = document.createElement("div");
    div_task.classList.add("task");
    let p = document.createElement("p");
    let p_note = document.createTextNode(note);
    p.appendChild(p_note);
    let btn = document.createElement("button");
    let btn_note = document.createTextNode("Finish");
    btn.appendChild(btn_note);
    div_task.appendChild(p);
    div_task.appendChild(btn);
    div_work_tasks.appendChild(div_task);
}
btn_add_WT.addEventListener("click",function (){
    if (localStorage.workTasks && input_WT.value != ""){
        let workArray = JSON.parse(localStorage.workTasks);
        workArray.push(input_WT.value);
        localStorage.workTasks = JSON.stringify(workArray);
        location.reload();
    } else if (!localStorage.workArray && input_WT.value != ""){
        window.localStorage.setItem("workTasks",JSON.stringify([input_WT.value]));
        location.reload();
    }
});
// add task for div tasks
if (localStorage.workTasks){
    let workArray = JSON.parse(localStorage.workTasks);
    if (workArray.length > 0){
        document.querySelector(".workTasks .tasks").style.display = "flex";
    }
    workArray.forEach((ele) => {
        createWorkTask(ele);
        if (localStorage.Them == 1){
            Them1();
        } else if (localStorage.Them == 2){
            Them2();
        }
    });
}
// delete tasks
let btn_finish_WT = document.querySelectorAll(".workTasks .task button");
btn_finish_WT.forEach((btn,index) => {
    btn.addEventListener("click",function (){
        let workArray = JSON.parse(localStorage.workTasks);
        workArray.splice(index,1);
        localStorage.workTasks = JSON.stringify(workArray);
        location.reload();
    });
});
//                           ----------------------------  add Universty Tasks  ----------------------------
let btn_add_UT = document.querySelector(".universtyTasks .button");
let input_UT = document.querySelector(".universtyTasks .text");
let div_Universty_tasks = document.querySelector(".universtyTasks .tasks");
// function 
function createUniverstyTask(note){
    let div_task = document.createElement("div");
    div_task.classList.add("task");
    let p = document.createElement("p");
    let p_note = document.createTextNode(note);
    p.appendChild(p_note);
    let btn = document.createElement("button");
    let btn_note = document.createTextNode("Finish");
    btn.appendChild(btn_note);
    div_task.appendChild(p);
    div_task.appendChild(btn);
    div_Universty_tasks.appendChild(div_task);
}
btn_add_UT.addEventListener("click",function (){
    if (localStorage.universtyTasks && input_UT.value != ""){
        let universtyArray = JSON.parse(localStorage.universtyTasks);
        universtyArray.push(input_UT.value);
        localStorage.universtyTasks = JSON.stringify(universtyArray);
        location.reload();
    } else if (!localStorage.universtyTasks && input_UT.value != ""){
        window.localStorage.setItem("universtyTasks",JSON.stringify([input_UT.value]));
        location.reload();
    }
});
// add task for div tasks
if (localStorage.universtyTasks){
    let universtyArray = JSON.parse(localStorage.universtyTasks);
    if (universtyArray.length > 0){
        document.querySelector(".universtyTasks .tasks").style.display = "flex";
    }
    universtyArray.forEach((ele) => {
        createUniverstyTask(ele);
        if (localStorage.Them == 1){
            Them1();
        } else if (localStorage.Them == 2){
            Them2();
        }
    });
}
// delete tasks
let btn_finish_UT = document.querySelectorAll(".universtyTasks .task button");
btn_finish_UT.forEach((btn,index) => {
    btn.addEventListener("click",function (){
        let universtyArray = JSON.parse(localStorage.universtyTasks);
        universtyArray.splice(index,1);
        localStorage.universtyTasks = JSON.stringify(universtyArray);
        location.reload();
    });
});
//                           ----------------------------  add Project Tasks  ----------------------------
let btn_add_PT = document.querySelector(".projectTasks .button");
let input_PT = document.querySelector(".projectTasks .text");
let div_Project_tasks = document.querySelector(".projectTasks .tasks");
// function 
function createProjectTask(note){
    let div_task = document.createElement("div");
    div_task.classList.add("task");
    let p = document.createElement("p");
    let p_note = document.createTextNode(note);
    p.appendChild(p_note);
    let btn = document.createElement("button");
    let btn_note = document.createTextNode("Finish");
    btn.appendChild(btn_note);
    div_task.appendChild(p);
    div_task.appendChild(btn);
    div_Project_tasks.appendChild(div_task);
}
btn_add_PT.addEventListener("click",function (){
    if (localStorage.projectTasks && input_PT.value != ""){
        let projectArray = JSON.parse(localStorage.projectTasks);
        projectArray.push(input_PT.value);
        localStorage.projectTasks = JSON.stringify(projectArray);
        location.reload();
    } else if (!localStorage.projectArray && input_PT.value != ""){
        window.localStorage.setItem("projectTasks",JSON.stringify([input_PT.value]));
        location.reload();
    }
});
// add task for div tasks
if (localStorage.projectTasks){
    let projectArray = JSON.parse(localStorage.projectTasks);
    if (projectArray.length > 0){
        document.querySelector(".projectTasks .tasks").style.display = "flex";
    }
    projectArray.forEach((ele) => {
        createProjectTask(ele);
        if (localStorage.Them == 1){
            Them1();
        } else if (localStorage.Them == 2){
            Them2();
        }
    });
}
// delete tasks
let btn_finish_PT = document.querySelectorAll(".projectTasks .task button");
btn_finish_PT.forEach((btn,index) => {
    btn.addEventListener("click",function (){
        let projectArray = JSON.parse(localStorage.projectTasks);
        projectArray.splice(index,1);
        localStorage.projectTasks = JSON.stringify(projectArray);
        location.reload();
    });
});
//                           ----------------------------  add Assignment Tasks  ----------------------------
let btn_add_AT = document.querySelector(".assignmentTasks .button");
let input_AT = document.querySelector(".assignmentTasks .text");
let div_Assignment_tasks = document.querySelector(".assignmentTasks .tasks");
// function 
function createAssignmentTask(note){
    let div_task = document.createElement("div");
    div_task.classList.add("task");
    let p = document.createElement("p");
    let p_note = document.createTextNode(note);
    p.appendChild(p_note);
    let btn = document.createElement("button");
    let btn_note = document.createTextNode("Finish");
    btn.appendChild(btn_note);
    div_task.appendChild(p);
    div_task.appendChild(btn);
    div_Assignment_tasks.appendChild(div_task);
}
btn_add_AT.addEventListener("click",function (){
    if (localStorage.assignmentTasks && input_AT.value != ""){
        let assignmentArray = JSON.parse(localStorage.assignmentTasks);
        assignmentArray.push(input_AT.value);
        localStorage.assignmentTasks = JSON.stringify(assignmentArray);
        location.reload();
    } else if (!localStorage.assignmentTasks && input_AT.value != ""){
        window.localStorage.setItem("assignmentTasks",JSON.stringify([input_AT.value]));
        location.reload();
    }
});
// add task for div tasks
if (localStorage.assignmentTasks){
    let assignmentArray = JSON.parse(localStorage.assignmentTasks);
    if (assignmentArray.length > 0){
        document.querySelector(".assignmentTasks .tasks").style.display = "flex";
    }
    assignmentArray.forEach((ele) => {
        createAssignmentTask(ele);
        if (localStorage.Them == 1){
            Them1();
        } else if (localStorage.Them == 2){
            Them2();
        }
    });
}
// delete tasks
let btn_finish_AT = document.querySelectorAll(".assignmentTasks .task button");
btn_finish_AT.forEach((btn,index) => {
    btn.addEventListener("click",function (){
        let assignmentArray = JSON.parse(localStorage.assignmentTasks);
        assignmentArray.splice(index,1);
        localStorage.assignmentTasks = JSON.stringify(assignmentArray);
        location.reload();
    });
});
//                           ----------------------------  add Permanent Tasks  ----------------------------
let btn_add_PAT = document.querySelector(".permanentTasks .button");
let input_PAT = document.querySelector(".permanentTasks .text");
let div_Permanent_tasks = document.querySelector(".permanentTasks .tasks");
// function 
function createPermanentTask(note){
    let div_task = document.createElement("div");
    div_task.classList.add("task");
    let p = document.createElement("p");
    let p_note = document.createTextNode(note);
    p.appendChild(p_note);
    let btn = document.createElement("button");
    let btn_note = document.createTextNode("Finish");
    btn.appendChild(btn_note);
    div_task.appendChild(p);
    div_task.appendChild(btn);
    div_Permanent_tasks.appendChild(div_task);
}
btn_add_PAT.addEventListener("click",function (){
    if (localStorage.permanentTasks && input_PAT.value != ""){
        let permanentArray = JSON.parse(localStorage.permanentTasks);
        permanentArray.push(input_PAT.value);
        localStorage.permanentTasks = JSON.stringify(permanentArray);
        location.reload();
    } else if (!localStorage.permanentTasks && input_PAT.value != ""){
        window.localStorage.setItem("permanentTasks",JSON.stringify([input_PAT.value]));
        location.reload();
    }
});
// add task for div tasks
if (localStorage.permanentTasks){
    let permanentArray = JSON.parse(localStorage.permanentTasks);
    if (permanentArray.length > 0){
        document.querySelector(".permanentTasks .tasks").style.display = "flex";
    }
    permanentArray.forEach((ele) => {
        createPermanentTask(ele);
        if (localStorage.Them == 1){
            Them1();
        } else if (localStorage.Them == 2){
            Them2();
        }
    });
}
// delete tasks
let btn_finish_PAT = document.querySelectorAll(".permanentTasks .task button");
btn_finish_PAT.forEach((btn,index) => {
    btn.addEventListener("click",function (){
        let permanentArray = JSON.parse(localStorage.permanentTasks);
        permanentArray.splice(index,1);
        localStorage.permanentTasks = JSON.stringify(permanentArray);
        location.reload();
    });
});