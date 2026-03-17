const express = require('express');
const router = express.Router();

// register page
router.get('/register', (req, res) => {
    res.render('register');
});

// login page
router.get('/login', (req, res) => {
    res.render('login');
});

// dashboard
router.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('dashboard');
});

module.exports = router;