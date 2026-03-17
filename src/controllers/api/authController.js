const bcrypt = require('bcryptjs');
const { User } = require('../../models');

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({
            where: { email }
        });

        if(existingUser) {
            return res.status(400).json({
                message: "Email Already Registered!!"
            })
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        res.status(201).json({
            message: "User registered successfully",
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        //find user
        const user = await User.findOne({
            where: { email }
        });

        if(!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(password, user.password); // compare password
        if(!isMatch) {
            return res.status(401).json({
                message: "Invalid password"
            });
        }

        // saved session
        req.session.userId = user.id;
        req.session.role = user.role;

        res.json({
            message: "Login Successful",
            user
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Server Error"
        });
    }
};

const logout = (req, res) => {
    req.session.destroy(() => {
        return res.json({ 
            message: "Logged out successfully" 
        });
    });
};

module.exports = { register, login, logout };