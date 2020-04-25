//models/User.js
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var videoSchema = new Schema({
  vid: {
    data: Buffer,
    contentType: String,
  },
});

module.exports = mongoose.model("Video", videoSchema);
