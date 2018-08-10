require('./api/data/db');
require('./api/data/model/user.model');
require('./api/data/model/posts.model');
require('./api/controllers/registration.controller');

const express = require('express');
const path = require('path');
const routes = require('./api/routes');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();


app.set('port', 5000);

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());

app.use(passport.session());

app.use('/api', routes);

const server = app.listen(app.get('port'), (req, res) => {
    console.log("Server running on port no. " + server.address().port);
});