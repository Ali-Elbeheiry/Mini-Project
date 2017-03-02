var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
	username: {type: String, unique: true},
	password: {type: String},
	firstname: String,
	lastname: String
});

var User = mongoose.model('myusers', userSchema);

module.exports = User;