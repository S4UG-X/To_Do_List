require('dotenv').config();
const express = require("express")
const app= express()
const mongoose = require('mongoose');
 
app.listen(8080, ()=>{
    console.log("Listening on port:", 8080)
})

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));




app.get("/", (req, res)=>{
    res.send("This is the data")
})  
