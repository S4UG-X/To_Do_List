const mongoose = require("mongoose")
const passportLocalMongoose = require('passport-local-mongoose');
const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: 3,
      maxlength: 30
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address']
    },
    createdAt: {
      type: Date,
      default: "2025"
    }
  });
  
  userSchema.plugin(passportLocalMongoose); // adds password hash + salt fields
  
  module.exports = mongoose.model("User", userSchema)

