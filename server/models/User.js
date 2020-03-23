//models/User.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  user_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: String
});

module.exports = mongoose.model("User", userSchema);
