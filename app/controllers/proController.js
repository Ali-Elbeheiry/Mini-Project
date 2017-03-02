let Project = require('../models/Project');
let User = require('../models/User');

let proController ={

	healthCheck: function(req, res){
		var responseObject = {message: 'OK'};
		res.send(responseObject);
	},
    

    createEntry: function(req, res){
	let newProject = new Project();
	newProject.name = req.body.name;
	newProject.url = req.body.url;
	newProject.save(function(err, save){
		if(err){
			console.log(err);
			res.status(500).send('');
		} else{
			res.send(save);
		}
	});

    },
    

    getPage: function(req, res){
	res.render('home');
    },


    getData: function(req, res){

	var responseObject = undefined;
	
	Project.find({}, function(err, foundData){
		if (err){
			console.log(err);
			res.status(500).send();
		}else{
			if (foundData.length == 0){
				res.status(404).send(responseObject);
			}else
			{
				responseObject = foundData;
				res.send(responseObject);
			}

		}
	});
	
   },

   updateData: function(req, res){
	var id = req.params.id
	Choice.findOne({_id:id}, function(err, foundData){
		if (err){
			console.log(err);
			res.status(500).send();
		} else{
			if(!foundData) {
				res.status(404).send();
			} else{
				if(req.body.name) {
					foundData.name = req.body.name;
				}

				if (req.body.icecream){
					foundData.url = req.body.url;
				}

				foundData.save(function(err, updateData){
					if(err) {
						console.log(err);
						res.status(500).send();
					} else{
						res.send(updateData);
					}
				})
			}

		}
	});
   }



}

module.exports = proController;