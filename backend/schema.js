const Joi = require("joi");
module.exports.taskSchema = Joi.object({
  userId: Joi.string(),
  title: Joi.string().required(),
  description: Joi.string().required(),
  completed: Joi.boolean(),
  dueDate: Joi.date(),
  createdAt: Joi.date(),
});

module.exports.userSchema = Joi.object({
  username: Joi.string().min(3).max(30).trim().required(),
  password: Joi.string().min(6).max(128).required(),
  email: Joi.string().email().trim().required(),
});
