var express = require('express');
var router = express.Router();
var proController = require('./controllers/proController');
var userController = require('./controllers/userController');


router.get('/healthcheck', proController.healthCheck);
router.get('/', proController.getPage);
router.post('/portofolio', proController.createEntry);
router.get('/portofolio', proController.getPortofolio);
router.get('/portofoliodata', proController.getData);

router.get('/visitorgetdata', proController.getVisitorData);
router.post('/editdata', proController.getEditData);
router.post('/editportofolio', proController.editData);
router.post('/delete', proController.deleteData);

router.get('/register', userController.getRegister);
router.post('/register', userController.register);
router.get('/getusers', userController.getUsers);
router.get('/login', userController.getLogin);
router.post('/login', userController.login);
router.get('/dashboard', userController.dashboard);
router.get('/logout', userController.logout);


module.exports = router;