module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    const err = new Error("Not Authorized");
    err.status = 401;
    return next(err);
  }
  next();
};
