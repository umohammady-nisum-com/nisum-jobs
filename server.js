// Dependencies 
var express = require('express');
var mongodb = require("mongodb");
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

// Variables
var app = express();
var db; 

// Express 
app.use(express.static(__dirname + '/dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to Database 
mongodb.MongoClient.connect("mongodb://heroku_5vgn0sv7:h10heeas7lpoc2j1vj06p85gjt@ds135514.mlab.com:35514/heroku_5vgn0sv7", function (err, database) {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  // Save database object from the callback for reuse.
  db = database;
  console.log("Database connection ready");

  // Initialize the app.
  var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
  });
});

app.use('/api', require('./rest-api-server/routes/api'));


// Look in dist folder to render static template



// Start the app by listening on the default
// Heroku port
//app.listen(process.env.PORT || 8000);

// For all GET requests, send back index.html
// so that PathLocationStrategy can be usedd
//Routes 
