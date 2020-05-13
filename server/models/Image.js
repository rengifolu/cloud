//models/User.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var imageSchema = new Schema({
  name:String,
  size: Number,
  imgUrl:String,
  description:String
},{
  timestamps:true
});

module.exports = mongoose.model("Image", imageSchema);
