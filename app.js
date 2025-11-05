let addTask = document.getElementById("addTask");
let task = document.getElementById("task");
let list = document.getElementById("list");

let currentEditing = null; // edit ke liye track

addTask.addEventListener("click", () => {
  let taskValue = task.value.trim();

  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  // Add Task
  if (addTask.innerHTML === "Add Task") {
    list.innerHTML += `
      <div class="main">
        <li>${taskValue}</li>
        <div>
          <button onclick="edit(this)">Edit</button>
          <button onclick="del(this)">Delete</button>
        </div>
      </div>
    `;
  } 
  
  // Save Edited Task
  else {
    currentEditing.innerText = taskValue;
    addTask.innerHTML = "Add Task";
  }

  task.value = "";
});

// Edit Function
function edit(element) {
  currentEditing = element.parentNode.parentNode.querySelector("li");
  task.value = currentEditing.innerText;
  addTask.innerHTML = "Save";
}

// Delete Function
function del(element) {
  element.parentNode.parentNode.remove();
}
