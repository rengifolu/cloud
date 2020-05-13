//models/User.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var musicSchema = new Schema({
  name:String,
  size: Number,
  musicUrl:String,
  description:String
},{
  timestamps:true
});

module.exports = mongoose.model("Music", musicSchema);
