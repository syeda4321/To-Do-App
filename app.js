let addTask = document.getElementById("addTask");
let task = document.getElementById("task");
let list = document.getElementById("list");

let editTaskElement = null; // yahan hum store karenge kon sa task edit ho raha hai

addTask.addEventListener("click", () => {
  if (addTask.innerHTML == "Add Task") {

    list.innerHTML += `<div class="main">
      <li>${task.value}</li> 
      <div> 
        <button onclick="edit(this)">Edit</button> 
        <button onclick="del(this)">Delete</button>
      </div> 
    </div>`;

    task.value = "";

  } else {
    // Save mode me update hoga
    editTaskElement.innerHTML = task.value;
    task.value = "";
    addTask.innerHTML = "Add Task";
  }
});

function edit(element) {
  // jis task ko edit karna hai uska li element pakro
  editTaskElement = element.parentNode.parentNode.querySelector("li");
  task.value = editTaskElement.innerHTML;
  addTask.innerHTML = "Save";
}

function del(element) {
  element.parentNode.parentNode.remove();
}