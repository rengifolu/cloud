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


imageSchema.methods.setImgUrl =function setImgUrl (filename){
  const host = "http://localhost" 
  const port = "8000"
  this.imgUrl = `${host}:${port}/public/${filename}`
  //this.imgUrl = `./public/storage/imgs/${filename}`
  
}

module.exports = mongoose.model("Image", imageSchema);
