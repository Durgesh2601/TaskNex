// Validation middleware for creating or updating a task
const validateTask = (req, res, next) => {
  const { title, status } = req.body;

  if (!title || !status || !["To Do", "In Progress", "Done"].includes(status)) {
    return res.status(400).json({ error: "Invalid task data" });
  }

  next();
};

module.exports = validateTask;
