///<reference path='_reference.ts' />

/**
 * Entry-Point for server
 */

var config = {
    port: 3000
};
console.info("Server starting");

var http = require('http');
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require("cookie-parser");
var session = require("express-session");

var app = express();
var router = express.Router();

app.use(cookieParser('fettyBossy'));
app.use(session());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(function (req, res, next) {
    var err = req.session.error,
        msg = req.session.success;
    delete req.session.error;
    delete req.session.success;
    res.locals.message = '';
    if (err) res.locals.message = '<p class="msg error">' + err + '</p>';
    if (msg) res.locals.message = '<p class="msg success">' + msg + '</p>';
    next();
});

// routes
app.use('/api/', require('./routes/indexRoutes.js'));
app.use('/api/ratings', require('./routes/ratingRoutes.js'));
app.use('/api/recipes', require('./routes/recipeRoutes.js'));
app.use('/api/users', require('./routes/userRoutes.js'));

// static serving
app.use(express.static(__dirname + '/public'));

http.createServer(app).listen(3000);

console.info("Server startet on port: '" + config.port + "'");