const showAssBtn = document.getElementById("showAssignmentNotification");
const showAttBtn = document.getElementById("showAttendanceNotification");
const stopAssBtn = document.getElementById("stopAssignmentNotification");

const assPera = document.getElementById("assignmentNotification");
const attPera = document.getElementById("assignmentNotification");

function ShowAssignment(){
    assPera.textContent = "Your Assignment Deadline is approaching";
}

showAssBtn.addEventListener("click", ShowAssignment);

showAttBtn.addEventListener("click", ()=>{
    attPera.textContent = "Please check your Attendance status!";
});

stopAssBtn.removeEventListener("click", ()=>{
    // assPera.textContent = "Your Assignment Deadline is Stop";
    showAssBtn.addEventListener("click", ShowAssignment);
    assPera.textContent = "Your Assignment Deadline is Stop";
});

