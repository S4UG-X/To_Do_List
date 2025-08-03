const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Task = require("../models/task.js");
const { isLoggedIn } = require("../middleware/auth");
const { validateTask } = require("../validation.js");
const asyncWrap = require("../middleware/asyncWrap.js");

//to add task
router.post(
  "/",
  isLoggedIn,
  validateTask,
  asyncWrap(async (req, res) => {
    const { title, description, dueDate } = req.body;
    const newTask = new Task({
      title,
      description,
      dueDate,
      userId: req.user._id,
    });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  })
);

//to show the tasks

router.get(
  "/",
  isLoggedIn,
  asyncWrap(async (req, res) => {
    // console.log(typeof req.user._id, req.user._id)
    const tasks = await Task.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(tasks);
  })
);

//to edit task
router.patch(
  "/:id",
  isLoggedIn,
  
  asyncWrap(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }
    let task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    if (task.userId.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Unauthorized" });

    Object.assign(task, req.body);
    const updatedTask = await task.save();
    res.json(updatedTask);
  })
);

//to delete task
router.delete(
  "/:id",
  isLoggedIn,
  asyncWrap(async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    if (task.userId.toString() !== req.user._id.toString())
      return res.status(403).json({ message: "Unauthorized" });

    await Task.findByIdAndDelete(id);
    res.json({ message: "Task deleted" });
  })
);

module.exports = router;
