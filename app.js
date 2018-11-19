require('./api/data/db');
require('./api/data/model/user.model');
require('./api/data/model/posts.model');
require('./api/controllers/registration.controller');

const express = require('express');
const path = require('path');
const routes = require('./api/routes');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;
app.set('port', port);

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000,
        keys: ['bdhaijadhnichb']
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
})



app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/api', routes);

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!

    app.use(express.static(path.join(__dirname, './client/build')));
    // app.use(express.static('./client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    // const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'index.html'));
    });
  }



const server = app.listen(app.get('port'), (req, res) => {
    console.log("Server running on port no. " + server.address().port);
});