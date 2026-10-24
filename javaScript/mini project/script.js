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

// MAIN FIRST-------------
function addTask(){
    const newTask = document.getElementById("taskInput").value.trim();

    
    const LI = document.createElement("li");
    LI.classList.add("p-3", "d-flex", "justify-content-between");

    const LI_DIV = document.createElement("div");
    LI_DIV.classList.add("p-3", "d-flex", "justify-content-between", "align-items-center");

    const PH = document.createElement("input");
    PH.type = "checkbox";
    PH.classList.add("form-check-input", "border-primary", "me-3");

    
   

    const SPAN = document.createElement("span");
    
    if(newTask==""){
        SPAN.textContent ="Error !!...";
        SPAN.classList.add("text-danger")
        
    }else{
        SPAN.textContent = newTask;
    }

    LI_DIV.append(PH, SPAN);
    //  document.body.appendChild(LI_DIV);

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

    
    
    LI.append(LI_DIV, DIV);

    document.getElementById("taskList").appendChild(LI);
    document.getElementById("taskInput").value = "";

    const taskList = document.getElementById("taskList");
    const totalTask = taskList.children.length;

    console.log(totalTask);

    // const totalTask = 0;
    // for (let i = 0; i < taskList.children.length; i++) {
    //     console.log(i);
    //     totalTask = i;

    // }

    

    // const CARD = document.createElement("div");
    // CARD.innerHTML = `
    //     <div class="container mt-3 p-4 border rounded shadow d-flex gap-3">
    //       <div class="row border m-2 w-100 fw-semibold" id="sec2Div">
    //         <div class="col-4 text-center"><span class="fs-2 fw-semibold" id="totalTask">${"totalTask"}</span> <br>Total Task</div>
    //         <div class="col-4 text-center"><span class="fs-2 fw-semibold" id="complete">4</span> <br>Complete</div>
    //         <div class="col-4 text-center"><span class="fs-2 fw-semibold">4</span> <br> Panding</div>
    //       </div>
    //     </div>`
    // document.getElementById("totalTask") = totalTask;

    // total task

    // const DIV_TOTAL = document.createElement("div");
    // DIV_TOTAL.classList.add("row", "border", "m-2", "w-100", "fw-semibold");

    // const DIV_SEC2 = document.getElementById("sec2Div");

    // const DIV_TOTAL = document.createElement("div");
    // DIV_TOTAL.classList.add("col-4", "text-center");






    }

// MAIN END-------------------

// ----------------------------------------------------
// let editingTask = null;

// function addTask() {
//     const taskInput = document.getElementById("taskInput");
//     const newTask = taskInput.value.trim();

//     if (newTask === "") {
//         alert("Please enter a task!");
//         return;
//     }

//     if (editingTask !== null) {
//         editingTask.querySelector("span").textContent = newTask;

//         editingTask = null;
//         document.getElementById("addTask").textContent = "Add Task";

//         taskInput.value = "";
//         updateCount();
//         return;
//     }

//     const LI = document.createElement("li");

//     LI.classList.add(
//         "p-3",
//         "d-flex",
//         "justify-content-between",
//         "align-items-center",
//         "border-bottom"
//     );

//     const LI_DIV = document.createElement("div");

//     LI_DIV.classList.add(
//         "d-flex",
//         "align-items-center",
//         "gap-2"
//     );

//     const PH = document.createElement("input");

//     PH.type = "checkbox";

//     PH.classList.add(
//         "form-check-input",
//         "border-primary",
//         "me-2"
//     );

//     PH.addEventListener("change", updateCount);

//     const SPAN = document.createElement("span");

//     SPAN.textContent = newTask;

//     PH.addEventListener("change", function () {
//         SPAN.classList.toggle(
//             "text-decoration-line-through",
//             PH.checked
//         );

//         SPAN.classList.toggle("text-secondary", PH.checked);
//     });

//     LI_DIV.append(PH, SPAN);

//     const DIV = document.createElement("div");

//     DIV.classList.add("d-flex", "gap-2");

//     const BUTTON_EDIT = document.createElement("button");

//     BUTTON_EDIT.classList.add("btn", "btn-primary", "btn-sm");

//     BUTTON_EDIT.textContent = "Edit";

//     BUTTON_EDIT.onclick = function () {
//         taskInput.value = SPAN.textContent;

//         editingTask = LI;

//         document.getElementById("addTask").textContent = "Update Task";

//         taskInput.focus();
//     };

//     const BUTTON_DELETE = document.createElement("button");

//     BUTTON_DELETE.classList.add("btn", "btn-danger", "btn-sm");

//     BUTTON_DELETE.textContent = "Delete";

//     BUTTON_DELETE.onclick = function () {
//         if (editingTask === LI) {
//             editingTask = null;

//             document.getElementById("addTask").textContent = "Add Task";

//             taskInput.value = "";
//         }

//         LI.remove();

//         updateCount();
//     };

//     DIV.append(BUTTON_EDIT, BUTTON_DELETE);

//     LI.append(LI_DIV, DIV);

//     document.getElementById("taskList").appendChild(LI);

//     taskInput.value = "";

//     updateCount();
// }

// function updateCount() {
//     const taskList = document.getElementById("taskList");

//     const allTasks = taskList.querySelectorAll("li");

//     const completedTasks = taskList.querySelectorAll(
//         'input[type="checkbox"]:checked'
//     );

//     const total = allTasks.length;

//     const completed = completedTasks.length;

//     const pending = total - completed;

//     document.getElementById("totalTask").textContent = total;

//     document.getElementById("complete").textContent = completed;

//     document.getElementById("pending").textContent = pending;
// }

// document.getElementById("taskInput").addEventListener(
//     "keydown",
//     function (event) {
//         if (event.key === "Enter") {
//             addTask();
//         }
//     }
// );

// updateCount();

// ------------------------------------------------
// function addTask() {
//     const newTask = document.getElementById("taskInput").value.trim();

//     const LI = document.createElement("li");
//     LI.classList.add("p-3", "d-flex", "justify-content-between", "align-items-center");

//     const LI_DIV = document.createElement("div");
//     LI_DIV.classList.add("d-flex", "align-items-center", "gap-2");

//     const PH = document.createElement("input");
//     PH.type = "checkbox";
//     PH.classList.add("form-check-input");

//     const SPAN = document.createElement("span");
//     SPAN.textContent = newTask;

//     LI_DIV.append(PH, SPAN);

//     const DIV = document.createElement("div");

//     const BUTTON_EDIT = document.createElement("button");
//     BUTTON_EDIT.classList.add("btn", "btn-primary", "btn-sm", "me-2");
//     BUTTON_EDIT.textContent = "Edit";

//     const BUTTON_DELETE = document.createElement("button");
//     BUTTON_DELETE.classList.add("btn", "btn-danger", "btn-sm");
//     BUTTON_DELETE.textContent = "Delete";
//     BUTTON_DELETE.onclick = () => LI.remove();

//     DIV.append(BUTTON_EDIT, BUTTON_DELETE);

//     LI.append(LI_DIV, DIV);

//     document.getElementById("taskList").appendChild(LI);
//     document.getElementById("taskInput").value = "";
// }

