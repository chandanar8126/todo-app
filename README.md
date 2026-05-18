#  Task Manager Web Application

A modern Full Stack To-Do List / Task Manager web application built using:

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB

This application helps users manage daily tasks efficiently with a modern and responsive UI.

---

#  Features

##  Task Management
- Add tasks
- Delete tasks
- Mark tasks as completed

##  Modern UI
- Glassmorphism design
- Responsive layout
- Smooth animations

##  Theme Support
- Dark theme
- Light theme
- Custom color palette themes

##  Search Functionality
- Search tasks instantly

##  Productivity Tracker
- Live progress bar
- Completed task percentage
- Task completion counter

##  Motivational Quotes
- Random productivity quotes displayed dynamically

---

#  Technologies Used

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- MongoDB

## Additional Libraries
- Mongoose
- CORS

---

# 📂 Project Structure

```bash
todo-app/
│
├── models/
│   └── Task.js
│
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
└── README.md
```

---

#  Requirements

Before running the project, install the following:

## Required Software

### 1. Node.js
Download:
https://nodejs.org/

Recommended Version:
- Node.js v18 or above

Verify installation:

```bash
node -v
npm -v
```

---

### 2. MongoDB Community Server
Download:
https://www.mongodb.com/try/download/community

Recommended Version:
- MongoDB 7 or above

Verify installation:

```bash
mongod --version
```

---

#  Installation Steps

## Step 1 — Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Example:

```bash
git clone https://github.com/yourusername/todo-app.git
```

---

## Step 2 — Open Project Folder

```bash
cd todo-app
```

---

## Step 3 — Install Dependencies

```bash
npm install
```

---

# ▶️ Running the Application

## Step 1 — Start MongoDB

Open Command Prompt or PowerShell:

```bash
mongod
```

Keep this terminal running.

---

## Step 2 — Start Node Server

Open another terminal inside project folder:

```bash
node server.js
```

You should see:

```bash
Server Running on Port 5000
MongoDB Connected
```

---

# 🌐 Open Application

Open browser and visit:

```bash
http://localhost:5000
```

---

#  API Endpoints

## Get All Tasks

```http
GET /tasks
```

---

## Add Task

```http
POST /addTask
```

Body:

```json
{
  "name": "Study",
  "description": "Prepare for exam"
}
```

---

## Complete Task

```http
PUT /completeTask/:id
```

---

## Delete Task

```http
DELETE /deleteTask/:id
```

---



---

#  Future Enhancements

- User authentication
- Task deadlines
- Notifications
- Drag and drop tasks
- Cloud deployment
- Mobile app integration

---

# Author

Chandana R

B.E. Computer Science Engineering  
Garden City University

---

# License

This project is developed for educational and learning purposes.