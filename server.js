const express = require("express");
const path = require("path");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes");
var cors = require("cors");

var LocalStrategy = require("passport-local"),
  bodyParser = require("body-parser"),
  passport = require("passport"),
  User = require("./models/user");

// Define middleware here
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  require("express-session")({
    secret: "hmson7",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// // Connect to the Mongo DB
mongoose.connect(
  "mongodb+srv://dbuser_89:hmson7@cluster0.nk6fa.mongodb.net/db_barchitect?retryWrites=true&w=majority",
  { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Use apiRoutes
app.use("/api", apiRoutes);

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
