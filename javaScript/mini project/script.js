// function addTask(){
//     const newTask = document.getElementById("taskInput").value.trim();

//     const LI = document.createElement("li");
//     LI.classList.add("p-3", "d-flex", "justify-content-between");

//     const SPAN = document.createElement("span");
//     if(newTask==""){
//         SPAN.textContent ="Error !!...";
//         SPAN.classList.add("text-danger")
        
//     }else{
//         SPAN.textContent = newTask;
//     }

//     const BUTTON = document.createElement("button");
//     BUTTON.classList.add("btn", "btn-danger", "btn-sm");
//     BUTTON.textContent = "Delete";
//     BUTTON.onclick = () => LI.remove();

//     LI.appendChild(SPAN);
//     LI.appendChild(BUTTON);

//     document.getElementById("taskList").appendChild(LI);
//     document.getElementById("taskInput").value = "";

// }


function addTask(){
    const newTask = document.getElementById("taskInput").value.trim();

    const LI_DIV = document.createElement("div");
    LI_DIV.classList.add("p-3", "d-flex", "justify-content-between", "align-items-center");

    const PH = document.createElement("input");
    PH.type = "checkbox";
    const LI = document.createElement("li");
    LI.classList.add("p-3", "d-flex", "justify-content-between");

    LI_DIV.append(PH, LI);
    // document.body.appendChild(LI_DIV);

    const SPAN = document.createElement("span");
    if(newTask==""){
        SPAN.textContent ="Error !!...";
        SPAN.classList.add("text-danger")
        
    }else{
        SPAN.textContent = newTask;
    }

    const DIV = document.createElement("div");

    const BUTTON_EDIT = document.createElement("button");
    BUTTON_EDIT.classList.add("btn", "btn-primary", "btn-sm", "me-3");
    BUTTON_EDIT.textContent = "Edit";
    BUTTON_EDIT.onclick = () => LI.add();

    

    const BUTTON_DELETE = document.createElement("button");
    BUTTON_DELETE.classList.add("btn", "btn-danger", "btn-sm");
    BUTTON_DELETE.textContent = "Delete";
    BUTTON_DELETE.onclick = () => LI.remove();

    

    DIV.append(BUTTON_EDIT, BUTTON_DELETE);
    document.body.appendChild(DIV);

    LI.appendChild(SPAN);
    // LI.appendChild(BUTTON_DELETE);
    // LI.appendChild(BUTTON_EDIT);
    LI.appendChild(DIV);

    document.getElementById("taskList").appendChild(LI);
    document.getElementById("taskInput").value = "";

}

