let editingTask = null;

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");

function addTask() {
const newTask = taskInput.value.trim();

if (newTask === "") {
    alert("Please enter a task!");
    taskInput.focus();
    return;
}

if (editingTask !== null) {
    const taskText = editingTask.querySelector(".task-text");

    taskText.textContent = newTask;

    editingTask = null;
    addTaskButton.textContent = "Add Task";

    taskInput.value = "";

    updateCount();
    taskInput.focus();

    return;
}

const li = document.createElement("li");
li.classList.add("list-group-item");

const taskContent = document.createElement("div");
taskContent.classList.add("task-content");

const checkbox = document.createElement("input");
checkbox.type = "checkbox";
checkbox.classList.add("form-check-input", "task-checkbox");
checkbox.setAttribute("aria-label", "Mark task as completed");

const span = document.createElement("span");
span.classList.add("task-text");
span.textContent = newTask;

checkbox.addEventListener("change", function () {
    span.classList.toggle("completed", checkbox.checked);
    updateCount();
});

taskContent.append(checkbox, span);

const actions = document.createElement("div");
actions.classList.add("task-actions");

const editButton = document.createElement("button");
editButton.type = "button";
editButton.classList.add("btn", "btn-primary", "btn-sm");
editButton.textContent = "Edit";

editButton.addEventListener("click", function () {
    taskInput.value = span.textContent;
    editingTask = li;
    addTaskButton.textContent = "Update Task";
    taskInput.focus();
});

const deleteButton = document.createElement("button");
deleteButton.type = "button";
deleteButton.classList.add("btn", "btn-danger", "btn-sm");
deleteButton.textContent = "Delete";

deleteButton.addEventListener("click", function () {
    if (editingTask === li) {
        editingTask = null;
        addTaskButton.textContent = "Add Task";
        taskInput.value = "";
    }

    li.remove();
    updateCount();
});

actions.append(editButton, deleteButton);

li.append(taskContent, actions);

taskList.appendChild(li);

taskInput.value = "";

updateCount();
taskInput.focus();

}

function updateCount() {
const allTasks = taskList.querySelectorAll("li");

const completedTasks = taskList.querySelectorAll(
    'input[type="checkbox"]:checked'
);

const total = allTasks.length;
const completed = completedTasks.length;
const pending = total - completed;

document.getElementById("totalTask").textContent = total;
document.getElementById("complete").textContent = completed;
document.getElementById("pending").textContent = pending;

emptyMessage.hidden = total > 0;

}

addTaskButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", function (event) {
if (event.key === "Enter") {
addTask();
}
});

updateCount();