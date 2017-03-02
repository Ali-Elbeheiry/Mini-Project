var mongoose = require('mongoose');


var myProject = mongoose.Schema({
	name: String,
	url: String
});

var ProjectModel = mongoose.model('portofolio', myProject);

module.exports = ProjectModel;