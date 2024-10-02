const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

// Function to fetch and display tasks
async function fetchTasks() {
  const response = await fetch("http://localhost:5000/api/tasks");
  const tasks = await response.json();
  taskList.innerHTML = tasks
    .map(
      (task) => `
        <div>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Due Date: ${new Date(
              task.dueDate
            ).toLocaleDateString()}</small>
            <button onclick="deleteTask('${task._id}')">Delete</button>
            <hr>
        </div>
    `
    )
    .join("");
}

// Function to handle form submission
taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const reminderDate = document.getElementById("reminderDate").value; // Get the reminder date

  await fetch("http://localhost:5000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, description, dueDate, reminderDate }), // Include the reminder date
  });

  // Clear form fields
  taskForm.reset();
  // Refresh task list
  fetchTasks();
});

// Function to fetch and display tasks
async function fetchTasks() {
  const response = await fetch("http://localhost:5000/api/tasks");
  const tasks = await response.json();
  taskList.innerHTML = tasks
    .map(
      (task) => `
        <div>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Due Date: ${new Date(
              task.dueDate
            ).toLocaleDateString()}</small>
            ${
              task.reminderDate
                ? `<small>Reminder: ${new Date(
                    task.reminderDate
                  ).toLocaleDateString()}</small>`
                : ""
            }
            <button onclick="deleteTask('${task._id}')">Delete</button>
            <hr>
        </div>
    `
    )
    .join("");
}

// Function to fetch and display tasks
async function fetchTasks() {
  const response = await fetch("http://localhost:5000/api/tasks");
  const tasks = await response.json();
  taskList.innerHTML = tasks
    .map(
      (task) => `
        <div>
            <h3>${task.title}</h3>
            <p>${task.description}</p>
            <small>Due Date: ${new Date(
              task.dueDate
            ).toLocaleDateString()}</small>
            ${
              task.reminderDate
                ? `<small>Reminder: ${new Date(
                    task.reminderDate
                  ).toLocaleDateString()}</small>`
                : ""
            }
            <button onclick="deleteTask('${task._id}')">Delete</button>
            <hr>
        </div>
    `
    )
    .join("");
}

// Initial fetch
fetchTasks();
