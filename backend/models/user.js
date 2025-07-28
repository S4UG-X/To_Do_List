const mongoose = require("mongoose")

const userSchema =  new mongoose.Schema({
    username: String,
    email: String,
    passwordHash: String,
    createdAt: String,

})
const User = mongoose.model("User", userSchema)

module.exports = User