const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((err) => {
    console.log(err);
});

// Add Task
app.post("/addTask", async (req, res) => {
    try {
        const task = new Task({
            name: req.body.name,
            description: req.body.description
        });

        await task.save();

        res.json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get Tasks
app.get("/tasks", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Delete Task
app.delete("/deleteTask/:id", async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);

        res.json({ message: "Task Deleted" });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Complete Task
app.put("/completeTask/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        task.completed = !task.completed;

        await task.save();

        res.json(task);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});