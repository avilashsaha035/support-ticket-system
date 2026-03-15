const bcrypt = require('bcryptjs');
const { User } = require('../models');

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

module.exports = { register };