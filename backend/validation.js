const { taskSchema, userSchema } = require("./schema.js");

module.exports.validateTask = (req, res, next) => {
  let { error } = taskSchema.validate(req.body);
  if (error)
    return next({
      code: "VALIDATION_ERROR",
      status: 400,
      message: error.details[0].message,
    });

  next();
};

module.exports.validateUser = (req, res, next) => {
  let { error } = userSchema.validate(req.body);
  if (error)
    return next({
      code: "VALIDATION_ERROR",
      status: 400,
      message: error.details[0].message,
    });
  next();
};
