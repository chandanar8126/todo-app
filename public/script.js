const api = "http://localhost:5000";


// QUOTES

const quotes = [

    "Small progress is still progress 💪",

    "Discipline creates success 🚀",

    "Stay focused and never quit 🔥",

    "One task at a time 🧠",

    "Success starts with consistency ✨"
];

document.getElementById("quote").innerText =
    quotes[Math.floor(Math.random() * quotes.length)];


// LOAD TASKS

async function loadTasks() {

    const response =
        await fetch(`${api}/tasks`);

    const tasks =
        await response.json();

    const taskList =
        document.getElementById("taskList");

    taskList.innerHTML = "";

    let completedTasks = 0;

    tasks.forEach(task => {

        if (task.completed) {

            completedTasks++;
        }

        const div =
            document.createElement("div");

        div.className = "task";

        div.innerHTML = `

            <h3 class="${task.completed ? 'completed' : ''}">
                ${task.name}
            </h3>

            <p>
                ${task.description}
            </p>

            <button onclick="completeTask('${task._id}')">
                Complete
            </button>

            <button onclick="deleteTask('${task._id}')">
                 Delete
            </button>
        `;

        taskList.appendChild(div);
    });


    // PROGRESS

    const totalTasks = tasks.length;

    const percent =
        totalTasks === 0
        ? 0
        : Math.round(
            (completedTasks / totalTasks) * 100
        );

    document.getElementById("taskCount").innerText =
        `${completedTasks}/${totalTasks} Completed`;

    document.getElementById("taskPercent").innerText =
        `${percent}%`;

    document.getElementById("progressFill").style.width =
        `${percent}%`;
}


// ADD TASK

async function addTask() {

    const name =
        document.getElementById("taskName").value;

    const description =
        document.getElementById("taskDescription").value;

    if (name === "" || description === "") {

        alert("Please fill all fields");

        return;
    }

    await fetch(`${api}/addTask`, {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            name,
            description
        })
    });

    document.getElementById("taskName").value = "";

    document.getElementById("taskDescription").value = "";

    loadTasks();
}


// DELETE TASK

async function deleteTask(id) {

    await fetch(`${api}/deleteTask/${id}`, {

        method: "DELETE"
    });

    loadTasks();
}


// COMPLETE TASK

async function completeTask(id) {

    await fetch(`${api}/completeTask/${id}`, {

        method: "PUT"
    });

    loadTasks();
}


// SEARCH TASKS

function searchTasks() {

    const input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const tasks =
        document.querySelectorAll(".task");

    tasks.forEach(task => {

        const text =
            task.innerText.toLowerCase();

        if (text.includes(input)) {

            task.style.display = "block";
        }

        else {

            task.style.display = "none";
        }
    });
}


// THEME

function setTheme(theme) {

    document.body.className = "";

    if (theme === "light") {

        document.body.classList.add("light-theme");
    }
}


// PALETTE

function togglePalette() {

    const palette =
        document.getElementById("palette");

    if (palette.style.display === "flex") {

        palette.style.display = "none";
    }

    else {

        palette.style.display = "flex";
    }
}


// CUSTOM COLORS

function setCustomTheme(color1, color2) {

    document.body.style.setProperty(
        "--primary1",
        color1
    );

    document.body.style.setProperty(
        "--primary2",
        color2
    );
}


loadTasks();