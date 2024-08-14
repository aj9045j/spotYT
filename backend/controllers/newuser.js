const User = require('../models/users.js');

async function register(req, res) {
    const { userid, email, password } = req.body;

    try {

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            res.status(400).json({ message: 'User already exists' });
            return;
        }


        const newUser = new User({ userid, email, password });
        await newUser.save();


        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }


}

module.exports = {
    register,
};