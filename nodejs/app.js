
var express = require("express");
var dateTime = require('./dateTime');
var path = require('path');

var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", function(request, response){
    response.sendFile(path.join(__dirname + "/public/" + "index.html"));
});

app.get("/time", function(request, response){
	response.send(dateTime.getTime());
});

app.get("/date", function(request, response){
	response.send(dateTime.getDate());
});

app.listen(3000);