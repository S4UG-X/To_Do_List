require('dotenv').config();
const express = require("express")
const app= express()
const mongoose = require('mongoose');
const User = require("./models/user.js")
const Task = require("./models/task.js")
const passport = require("passport")
const session = require('express-session');
const LocalStrategy = require('passport-local').Strategy;
app.use(express.json())

app.use(session({
  secret: 'yoursecret',
  resave: false,
  saveUninitialized: false
}));

const flash = require('connect-flash');
const authRoutes = require('./routes/auth');
const taskRoutes = require('./routes/tasks');


app.listen(8080, ()=>{
    console.log("Listening on port:", 8080)
})


mongoose.connect(process.env.MONGO_URL)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('Connection error:', err));



  // creates req.session
app.use(passport.initialize());               // adds passport methods
app.use(passport.session());                  // hooks into req.session for login state
passport.use(new LocalStrategy(User.authenticate())); 
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use('/api', authRoutes);
app.use('/api/tasks', taskRoutes);




//app authentication

app.get("/", (req, res)=>{
    res.send("Successful. This redirects to app.js")
})  
