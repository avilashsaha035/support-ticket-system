const bcrypt = require('bcryptjs');
const { User } = require('../models');


// show pages
const showRegister = (req, res) => {
    res.render('register');
};

const showLogin = (req, res) => {
    res.render('login');
};

const showDashboard = (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('dashboard');
};


// handle register form submit
const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({
            where: { email }
        });

        if (existingUser) {
            return res.redirect('/register');
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        req.session.userId = user.id;

        res.redirect('/dashboard');

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// handle login form submit
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //find user
        const user = await User.findOne({
            where: { email }
        });

        if (!user) {
            return res.redirect('/login');
        }

        const isMatch = await bcrypt.compare(password, user.password); // compare password
        if(!isMatch) {
            return res.redirect('/login');
        }

        // saved session
        req.session.userId = user.id;
        req.session.role = user.role;

        if (user.role === 'admin') {
            return res.redirect('/admin/tickets');
        } else {
            return res.redirect('/dashboard');
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

// logout
const logout = (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login');
    });
};


module.exports = {
    showRegister,
    showLogin,
    showDashboard,
    register,
    login,
    logout
};