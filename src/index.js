const express = require('express');
const morgan = require('morgan');
const path = require('path');

// Initializations
const app = express();
const { pool } = require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json()); //Los datos pasan por el servidor en formato json, se pueden usar es lo mismos que bodyParser

// Global Variables
app.use((req, res, next) => {

    next();
});

// Routes
app.use('api/task', require('./routes'))

// Statics Files
app.use(express.static(path.join(__dirname, 'public')));

// Starting the Server
app.listen(app.get('port'), () => {
    console.log('SERVER ON PORT ', app.get('port'));
});
