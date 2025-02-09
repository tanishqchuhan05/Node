// Basic To-Do List App Script (Beginner-Friendly)

// Selecting HTML elements we need to work with
const taskInput = document.getElementById("task-input"); // Input field where user enters tasks
const addTaskBtn = document.getElementById("add-task-btn"); // Button to add new task
const taskList = document.getElementById("task-list"); // The list where tasks will be displayed

// Function to load tasks from the browser's local storage when the page is loaded
function loadTasks() {
  // Retrieve tasks from localStorage or set an empty array if no tasks are found
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  
  // Loop through the saved tasks and add them to the list
  tasks.forEach((task) => addTaskToDOM(task));
}

// Function to add a task to the HTML (to show it on the page)
function addTaskToDOM(taskText) {
  // Create a list item (li) element
  const li = document.createElement("li");
  li.className = "list-group-item d-flex align-items-center";

  // Create a span to hold the task text
  const taskSpan = document.createElement("span");
  taskSpan.textContent = taskText; // Set the task text
  taskSpan.className = "task-text me-2";

  // Create an Edit button
  const editBtn = document.createElement("button");
  editBtn.className = "btn btn-sm btn-warning me-2";
  editBtn.textContent = "Edit";

  // Create a Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-sm btn-danger";
  deleteBtn.textContent = "Delete";

  // Event: What happens when the Edit button is clicked
  editBtn.addEventListener("click", () => {
    const input = document.createElement("input"); // Input field for editing
    input.type = "text";
    input.value = taskSpan.textContent; // Set current task text as input value
    input.className = "form-control edit-input";

    const saveBtn = document.createElement("button"); // Save button
    saveBtn.textContent = "Save";
    saveBtn.className = "btn btn-sm btn-success edit-btn";

    // Save the updated task when Save button is clicked
    saveBtn.addEventListener("click", () => {
      const updatedText = input.value.trim(); // Get the updated text
      if (updatedText) {
        updateTask(taskSpan.textContent, updatedText); // Update in localStorage
        taskSpan.textContent = updatedText; // Update the span text
        li.replaceChild(taskSpan, input); // Replace input with span
        li.replaceChild(editBtn, saveBtn); // Replace Save button with Edit button
      }
    });

    // Replace task text with input and Edit button with Save button
    li.replaceChild(input, taskSpan);
    li.replaceChild(saveBtn, editBtn);
  });

  // Event: What happens when the Delete button is clicked
  deleteBtn.addEventListener("click", () => {
    removeTask(taskText); // Remove from localStorage
    li.remove(); // Remove from the page
  });

  // Add task text, Edit button, and Delete button to the list item
  li.appendChild(taskSpan);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);
}

// Function to save a new task to localStorage
function addTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Get existing tasks
  tasks.push(taskText); // Add new task to the array
  localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated array back to localStorage
}

// Function to remove a task from localStorage
function removeTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Get existing tasks
  const filteredTasks = tasks.filter((task) => task !== taskText); // Remove the task
  localStorage.setItem("tasks", JSON.stringify(filteredTasks)); // Save updated array back to localStorage
}

// Function to update an existing task in localStorage
function updateTask(oldTask, newTask) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || []; // Get existing tasks
  const taskIndex = tasks.indexOf(oldTask); // Find the index of the old task
  if (taskIndex > -1) {
    tasks[taskIndex] = newTask; // Replace old task with new task
    localStorage.setItem("tasks", JSON.stringify(tasks)); // Save updated array back to localStorage
  }
}

// Event: Add a new task when the Add button is clicked
addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim(); // Get the value from the input field
  if (taskText !== "") {
    addTaskToDOM(taskText); // Show the task on the page
    addTask(taskText); // Save the task in localStorage
    taskInput.value = ""; // Clear the input field
  }
});

// Load tasks from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);
