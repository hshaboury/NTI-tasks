// 2
let tasks = [];

const form = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskTypeSelect = document.getElementById('taskType');
const taskListDiv = document.getElementById('taskList');
const finalResultDiv = document.getElementById('finalResult');

// 3
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const taskName = taskNameInput.value;
  const taskType = taskTypeSelect.value;

  if (taskName === "") return;
  const newTask = {
    taskName,
    taskType,
    dateAdded: new Date().toLocaleString()
  };

  tasks.push(newTask);
  taskNameInput.value = "";
  displayTasks();
  showFinalResult();
});

// 4
function displayTasks() {
  taskListDiv.innerHTML = "";

  tasks.forEach((task, index) => {
    const taskDiv = document.createElement('div');
    const typeClass = task.taskType.toLowerCase().replace(" ", "-");

    taskDiv.className = `task ${typeClass}`;
    taskDiv.innerHTML = `
      <strong>${task.taskName}</strong><br>
      Type: ${task.taskType}<br>
      Date: ${task.dateAdded}
      <div class="actions">
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskListDiv.appendChild(taskDiv);
  });
}
// 6
function editTask(index) {
  const newName = prompt("Edit task name:", tasks[index].taskName);
  const newType = prompt("Edit task type (Task, In Progress, Done):", tasks[index].taskType);

  if (newName && newType) {
    tasks[index].taskName = newName;
    tasks[index].taskType = newType;
    displayTasks();
    showFinalResult();
  }
}
// 7
function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
  showFinalResult();
}
// 9
function showFinalResult() {
  console.log("Current Tasks:", tasks);        
  alert(`Current Tasks: ${tasks.length}`);     

  finalResultDiv.innerHTML = ""; 
  tasks.forEach(task => {                       
    finalResultDiv.innerHTML += `<div>${task.taskName} (${task.taskType}) - ${task.dateAdded}</div>`;
  });
}

