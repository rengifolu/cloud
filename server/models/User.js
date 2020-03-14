//models/User.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    description: String,
    amount: Number,
    month: String,
    year: Number
});

module.exports = mongoose.model('User', userSchema);