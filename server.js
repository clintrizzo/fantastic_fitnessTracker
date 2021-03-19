var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var User = require('./models/user');
var hbs = require('express-handlebars'); 
var path = require('path'); 
const { nextTick } = require('node:process');

// invoke an instance of express application.
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

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/view/layouts'}));
app.set('view engine', 'hbs');

app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user){
        res.clearCookie('user_sid');
    }
    next();
});

var hbsContent = {userName: '', loggedin: false, title: "You are not logged in", body: "hello"};

//middle ware function to check for logged in users
var sessionChecker = (req, res, next) => {
    if (req.session.user && req.cookes.user_sid) {
        res.redirect('/dashboard');
        } else {
            next();
        }
};
