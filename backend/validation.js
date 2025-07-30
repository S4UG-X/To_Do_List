const {taskSchema,userSchema} = require("./schema.js")

module.exports.validateTask = (req,res,next)=>{
  let {error} = taskSchema.validate(req.body);
  if (error){
    res.status(400).json({ error: error.details[0].message });
  }else{
    next()
  }
}


module.exports.validateUser = (req,res,next)=>{
  let {error} = userSchema.validate(req.body);
  if (error){
    res.status(400).json({ error: error.details[0].message });
  }else{
    next()
  }
}