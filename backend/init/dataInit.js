
require('dotenv').config();
const mongoose = require('mongoose');
const User = require("../models/user.js")
const Task = require("../models/task.js")

mongoose.connect(process.env.MONGO_URL)
.then(() => {console.log('MongoDB connected') 
    dbinit();
})
.catch(err => console.error('Connection error:', err));

const dbinit = async () => {
  try {
    // Clear existing data
    await User.deleteMany({})
    await Task.deleteMany({})
    
    // Create users
    const user1 = new User({
      username: "saugat",
      email: "saugat@gmail.com",
      passwordHash: "hashedpassword1",
      createdAt: new Date().toISOString(),
    });
    
    const user2 = new User({
      username: "john_doe",
      email: "john@example.com",
      passwordHash: "$2b$10$abc123hashedpassword1",
      createdAt: "2025-07-29T09:00:00.000+00:00"
    });
    
    // Save users to get their IDs
    const savedUser1 = await user1.save();
    const savedUser2 = await user2.save();
    
    // Create tasks with proper user references
    const tasks = [
      {
        userId: savedUser1._id,
        title: "Finish Landing Page Design",
        description: "Complete the final UI tweaks and responsive fixes.",
        completed: false,
        dueDate: "2025-08-05T00:00:00.000+00:00",
        createdAt: "2025-07-29T09:30:00.000+00:00"
      },
      {
        userId: savedUser1._id,
        title: "Team Meeting",
        description: "Weekly sync with the dev team on project updates.",
        completed: true,
        dueDate: "2025-08-02T15:00:00.000+00:00",
        createdAt: "2025-07-28T11:00:00.000+00:00"
      },
      {
        userId: savedUser2._id,
        title: "Client Feedback Review",
        description: "Go through all feedback from the client and update tasks.",
        completed: false,
        dueDate: "2025-08-08T12:00:00.000+00:00",
        createdAt: "2025-07-29T13:15:00.000+00:00"
      }
    ];
    
    await Task.insertMany(tasks);
    
    console.log('Database initialized successfully!');
    console.log('Users created:', savedUser1.username, savedUser2.username);
    console.log('Tasks created:', tasks.length);
    
  } catch (error) {
    console.error('Error initializing database:', error);
  } finally {
    // Close the database connection
    await mongoose.connection.close();
    console.log('Database connection closed.');
  }
}

