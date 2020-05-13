//models/User.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var videoSchema = new Schema({
  name:String,
  size: Number,
  VideoUrl:String,
  description:String
},{
  timestamps:true
});

module.exports = mongoose.model("Video", videoSchema);
