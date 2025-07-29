const mongoose = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    createdAt: {
      type: Date,
      default: "2025"
    }
  });
  
  userSchema.plugin(passportLocalMongoose); // adds password hash + salt fields
  
  module.exports = mongoose.model("User", userSchema)

