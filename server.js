const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
const hbs = require('hbs');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const app = express();
const PORT = process.env.PORT || 3001;
const sess = {
    secret: 'super super super secret thing',
    cookie: {
        // Session will automatically expire in 10 minutes
        expires: 100 * 60 * 1000
    },
    resave: true,
    rolling: true,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    }),
};
app.use(session(sess));
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname: 'hbs',
    defaultLayout: 'home',
    layoutsDir: __dirname + '/views/layouts',
    partialDir: __dirname + '/views/partial',
    //cardioDir: __dirname + '/views/cardio'
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'LONG_RANDOM_STRING_HERE',
    resave: true,
    saveUninitialized: true
}));
app.get('/', (req, res) => { res.render("main") });
app.get('/login', (req, res) => { res.render("login") });
app.get('/signup', (req, res) => { res.render("signup") });
app.get('/aboutUs', (req, res) => { res.render("aboutUs") });
app.get('/dashboard', (req, res) => { res.render("dashboard") });

app.use(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => console.log('Now listening to port" 3001'));
});