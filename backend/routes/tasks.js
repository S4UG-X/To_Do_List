const express = require('express');
const router = express.Router();
const Task = require('../models/task.js');
const { isLoggedIn } = require('../middleware/auth');
const {validateTask} = require("../validation.js")

//to add task
router.post('/',isLoggedIn,validateTask, async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    const newTask = new Task({ title, description, dueDate, userId: req.user._id });
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});


//to show the tasks

router.get('/',isLoggedIn,validateTask, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user._id }).sort({ createdAt: -1 });
    console.log(req.user)
    console.log(req.user)
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//to edit task
router.patch('/:id',isLoggedIn,validateTask, async (req, res) => {
  try {
    const { id } = req.params;
    let task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.userId.toString() !== req.user._id) return res.status(403).json({ message: 'Unauthorized' });

    Object.assign(task, req.body);
    const updatedTask = await task.save();
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

//to delete task
router.delete('/:id',isLoggedIn,validateTask, async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.userId.toString() !== req.user.id) return res.status(403).json({ message: 'Unauthorized' });

    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
