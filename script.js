let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function showTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    li.onclick = () => deleteTask(index);

    list.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  let input = document.getElementById("taskInput");

  if (input.value.trim() === "") {
    alert("Please enter a task");
    return;
  }

  tasks.push(input.value);
  input.value = "";
  showTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  showTasks();
}

showTasks();