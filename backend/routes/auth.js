const express = require('express');
const router = express.Router();
const User = require('../models/user.js');
const passport = require('passport');


 



router.post('/signup', async (req, res, next) => {
  const user = new User({ username: req.body.username, email: req.body.email });
  await User.register(user, req.body.password); // hashes & saves user

  req.login(user, (err) => {
    if (err) return next(err);
    return res.redirect('/');
  });
});


router.post(
  "/login",
  passport.authenticate("local", { 
    failureRedirect: "/login",
    failureFlash: true,
  }),
  (req, res) => {
    console.log("Log in Successfully")
    res.redirect("/")
  }
);


module.exports = router;
