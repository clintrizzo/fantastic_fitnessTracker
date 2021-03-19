var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var User = require('./models/user');
var hbs = require('express-handlebars'); 
var path = require('path'); 

var app = express();
app.set('port', 9000);
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
        key: 'user_sid',
        secret: 'somesecret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 600000
        }
}));