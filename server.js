// Dependencies 
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');


// Express 

var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Start the DB
app.connect('mongodb://heroku_5vgn0sv7:h10heeas7lpoc2j1vj06p85gjt@ds135514.mlab.com:35514/heroku_5vgn0sv7');

// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8000);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
//Routes 
app.use('/api', require('./rest-api-server/routes/api'));
