//models/User.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const saltRounds = 10;

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
    required: true,
    unique: true
  },
  password: String
});

userSchema.pre("save", function(next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified("password")) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds, function(err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

userSchema.methods.isCorrectPassword = function(password, callback) {
  bcrypt.compare(password, this.password, function(err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

module.exports = mongoose.model("User", userSchema);
