let tasks = [];

// Add a new task
function addTask() {
    // Get the task input value
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create a new task object
    tasks.push(taskText);

    // Clear the input field
    taskInput.value = "";

    console.log(tasks);
    displayTasks();
}

// Display tasks
function displayTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = tasks.map((task, index) => `
        <li>
            <span>${task}</span>
            <button onclick="deleteTask(${index})">Delete</button>
        </li>
    `).join("");
}

/**
 * Delete a task
 * @param {*} index - The index of the task to delete
 */
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}