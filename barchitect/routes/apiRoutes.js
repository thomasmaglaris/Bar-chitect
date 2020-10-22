const router = require("express").Router();
const Cocktail = require("../models/cocktails");
const cocktailUser = require("../models/user");

router.get("/recipes", (req, res) => {
  ///***change /recipes */
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
  Cocktail.find({
    title: { $regex: new RegExp(req.query.q, "i") },
  })
    .then((recipes) => res.json(recipes))
    .catch((err) => res.status(422).end());
});

module.exports = router;

//
