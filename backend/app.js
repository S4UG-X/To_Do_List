require('dotenv').config();
const express = require("express")
const app= express()
const mongoose = require('mongoose');
const User = require("./models/user.js")
const Task = require("./models/task.js")
app.listen(8080, ()=>{
    console.log("Listening on port:", 8080)
})
app.use(express.json())

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));



//to delete the task
app.delete("/api/tasks/:id", async (req, res)=>{
  let {id}= req.params
  let task = await Task.findByIdAndDelete(id)

res.json(task)
})
//to add the task
app.patch("/api/tasks/:id", async (req,res)=>{
let {id} = req.params
let task = await Task.findById(id)
const updates = req.body;

// Find task and ensure it belongs to the user
if (!task) return res.status(404).json({ message: 'Task not found' });
// Update fields
Object.assign(task, updates);
const updatedTask = await task.save();
res.json(updatedTask);
})
//to creaete the task.
app.post('/api/tasks', async (req, res) => {
    try {
      const { title, description, dueDate } = req.body;
  
  
      const newTask = new Task({
       
        title,
        description,
        dueDate,
      });
  
      const savedTask = await newTask.save();
      res.status(201).json(savedTask); //sending the saved data to client side
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  });

  //to show the task of one user.
app.get("/api/tasks", async (req,res)=>{
  try {
    let userIdValue = "68881b69b53d3c921c78e85f"
    const tasks = await Task.find({ userId: userIdValue  }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
})

app.get("/", (req, res)=>{
    res.send("This is the data")
})  
