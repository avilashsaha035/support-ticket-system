require('dotenv').config();
const express = require('express');
const session = require('express-session');
const authRoutes = require('./routes/authRoutes');

const app = express();

// built-in middlewire
app.use(express.json()); //convert json data(come from client req) to js object


//session middlewire
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

app.use('/api', authRoutes);

module.exports = app;