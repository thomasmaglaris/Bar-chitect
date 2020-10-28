
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username:String,
    password:String
});

// To plug the passport with user schema so that the passport can authenticate users when a login request comes.
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User",UserSchema);