let User = require('../models/User');

let userController = {
	 register: function(req, res){
    	var username = req.body.username;
    	var password = req.body.password;
    	var firstname = req.body.firstname;
    	var lastname = req.body.lastname;

    	var newuser = new User();
    	newuser.username = username;
    	newuser.password = password;
    	newuser.firstname = firstname;
    	newuser.lastname = lastname;
        newuser.save(function(err, savedUser){
        	if (err){
        		console.log('Username Taken!');
        		console.log(err);
				res.status(500).render('register');
        	} else{
        		res.status(200).render('home');
        	}
        })
    },

     getRegister: function(req, res){
        res.render('register');
    },

    getUsers: function(req, res){
    	User.find({}, function(err, savedUser){
    		if (err){
    			console.log(err);
    			res.status(500).send();
    		} else{
    			res.send(savedUser);
    		}    		
    	})
    },

    login: function(req, res){
    	var username = req.body.username;
    	var password = req.body.password;

    	User.findOne({username: username, password: password}, function(err, user){
    		if (err){
    			console.log(err);
    			res.status(500).send();
    		} else{
    			if (!user){
    				return res.status(404).render('index');
    			} else{
    				req.session.user = user;
    				return res.status(200).render('dashboard');
    			}
    		}    		
    	});
    },

    getLogin: function(req, res){
        res.render('index');
    },

    dashboard: function(req, res){
    	if(!req.session.user){
    		res.status(401).render('index');
    	} else {
    		res.status(200).send('Welcome!')
    	}
    },

    logout: function(req, res){
    	req.session.destroy();
    	res.status(200).render('home');
    }

}

module.exports = userController;