//require depenciess
var session = require('express-session');
var express = require('express');
var router = require('./app/routes');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mini');

var app = express();

app.set('view engine', 'ejs');
// configure app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({secret:"Shush! it is a secret", resave: false, saveUninitialized:true}));
app.use(router);


// start the server
app.listen(8080, function(){
    console.log("server is listening on port 8080");
})