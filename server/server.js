
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect('mongodb://localhost:27017/hackfeed')

app.use('/app', express.static(__dirname + "/app"));

app.use('/node_modules', express.static(__dirname + "/node_modules"));

app.get('/', function(req, res) {
	res.sendfile('./client/index.html');
});

app.listen('3000', function() {
	console.log('Listening for local host 3000');
});

