const router = require("express").Router();
//const Cocktail = require("../models/cocktails");
const User = require("../models/user");
const passport = require("passport");

router.post("/register", function (req, res) {
  User.register(
    new User({ username: req.body.username }),
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err);
        res.status(200).json({
          name: req.user.id,
        });
      }
      passport.authenticate("local")(req, res, function () {
        res.status(200).json({
          id: req.user.id,
        });
      });
    }
  );
});

router.post("/login", passport.authenticate("local"), function (req, res) {
  res.status(200).json({
    name: req.user.username,
    id: req.user.id,
  });
});

module.exports = router;
