//Create web server
var express = require('express');
var app = express();
var fs = require('fs');

//Create server
var server = app.listen(8080, function(){
    console.log('Server is running');
});