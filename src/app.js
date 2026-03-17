require('dotenv').config();
const express = require('express');
const session = require('express-session');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const pageRoutes = require('./routes/pageRoutes');

const app = express();

// built-in middlewire
app.use(express.json()); //convert json data(come from client req) to js object

app.use(express.urlencoded({ extended: true })); // for HTML form data

//session middlewire
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static files (css/js)
app.use(express.static(path.join(__dirname, 'public')));

// UI routes
app.use('/', pageRoutes);

app.use('/api', authRoutes);

module.exports = app;