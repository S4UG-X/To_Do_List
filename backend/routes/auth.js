const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const passport = require("passport");
const { validateUser } = require("../validation.js");
const asyncWrap = require("../middleware/asyncWrap.js");

router.post(
  "/signup",
  validateUser,
  asyncWrap(async (req, res, next) => {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
    });
    await User.register(user, req.body.password); // hashes & saves user

    req.login(user, (err) => {
      if (err) return next(err);
      res
        .status(201)
        .json({
          message: "User registered",
          user: { username: user.username, email: user.email },
        });
    });
  })
);

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    // console.log(user)
    if (err) return next(err);
    if (!user) return res.status(401).send("Invalid username or password");
    req.login(user, (err) => {
      if (err) return next(err);
      res
        .status(200)
        .json({
          message: "Login successful",
          user: { username: user.username, email: user.email },
        });
    });
  })(req, res, next);
});

router.get("/logout", (req, res, next) => {
  //no need of wrapAsync as they are callback, not promises
  req.logout((err) => {
    if (err) return next(err);
    req.session.destroy(() => {
      res.status(200).json({ message: "Logged out" });
    });
  });
});

module.exports = router;
