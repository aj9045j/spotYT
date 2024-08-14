const User = require('../models/users.js')
const { v4: uuid } = require('uuid')
const { getUser, setUser } = require('../service/auth.js');

async function handlelogin(req, res) {
    const { email, password } = req.body;

    try {

        const user = await User.findOne({ email, password });
        if (user) {
            const sessionId = uuid();
            setUser(sessionId, user);

            res.status(200).json({ sessionId: sessionId });
        } else {

            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {

        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {
    handlelogin,
};