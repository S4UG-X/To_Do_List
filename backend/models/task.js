const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // default: "68881b69b53d3c921c78e85f",
        required: true
      },
      title: {
        type: String,
        required: [true, 'Task title is required'],
      
        trim: true
      },
      description: {
        type: String,
        trim: true
      },
      completed: {
        type: Boolean,
        default: false
      },
      dueDate: {
        type: Date
      },
      createdAt: {
        type: Date,
        default: Date.now
      }
})
const Task = mongoose.model("Task", taskSchema)
module.exports  = Task