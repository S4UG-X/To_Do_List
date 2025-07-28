require('dotenv').config();
const express = require("express")
const app= express()
const mongoose = require('mongoose');
const User = require("./models/user.js")
app.listen(8080, ()=>{
    console.log("Listening on port:", 8080)
})

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));


const dbinit = async ()=>{
    await User.deleteMany({});
    
    // Insert dummy users
    await User.insertMany([
        {
            username: "alice",
            email: "alice@example.com",
            passwordHash: "hashedpassword1",
            createdAt: new Date().toISOString()
        },
        {
            username: "bob",
            email: "bob@example.com",
            passwordHash: "hashedpassword2",
            createdAt: new Date().toISOString()
        }
    ]);
    // await User.deleteMany({});
}


// dbinit()
app.get("/", (req, res)=>{
    res.send("This is the data")
})  
