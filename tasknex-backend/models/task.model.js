const mongoose = require("mongoose");

const task_schema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: {
    type: String,
    enum: ["To Do", "In Progress", "Done"],
    required: true,
  },
});

const Task = mongoose.model("Task", task_schema);

module.exports = Task;
