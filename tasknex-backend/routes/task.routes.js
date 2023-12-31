const express = require("express");
const router = express.Router();
const Task = require("../models/task.model");
const validateTask = require("../middlewares");

// Get all tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new task
router.post("/", validateTask, async (req, res) => {
  const task = new Task({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
  });

  try {
    const newTask = await task.save();
    res
      .status(201)
      .json({ data: newTask, message: "Task created successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a task
router.patch("/:id", validateTask, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ data: updatedTask, message: "Task updated successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a task
router.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json({ message: "Task deleted successfully!" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
