var mongoose = require('mongoose');


var myProject = mongoose.Schema({
	username: String,
	name: String,
	url: String
});

var ProjectModel = mongoose.model('portofolio', myProject);

module.exports = ProjectModel;