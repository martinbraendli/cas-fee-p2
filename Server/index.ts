/**
 * Entry-Point for server
 */
var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var session = require("express-session");
var app = express();

var router = express.Router();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// static serving
app.use(express.static(__dirname + '/public'));

http.createServer(app).listen(3000);
