const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/record",{ useNewUrlParser: true });

// Model of collection
const User= mongoose.model("User", {
  id:String,
  uname: String,
  Dob:Date,
  email: String,
  salary: Number,
gender:String,
});

module.exports = {
  User
  };