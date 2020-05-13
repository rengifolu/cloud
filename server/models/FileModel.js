//models/User.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var fileSchema = new Schema({
  name:String,
  size: Number,
  fileUrl:String,
  description:String
},{
  timestamps:true
});

module.exports = mongoose.model("File", fileSchema);
