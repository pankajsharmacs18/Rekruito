// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // adjust path

exports.protect = async (req, res, next) => {
    try {
        let token;

        // Check for token in headers
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1];
        }

        if (!token) {
            return res.status(401).json({
                status: 'error',
                message: 'You are not logged in! Please login to access this route.'
            });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Check if user still exists
        const currentUser = await User.findById(decoded.id);
        if (!currentUser) {
            return res.status(401).json({
                status: 'error',
                message: 'The user belonging to this token no longer exists.'
            });
        }

        // Grant access
        req.user = currentUser;
        next(); // Important! Move to the next route handler
    } catch (err) {
        console.error('Protect middleware error:', err.message);
        return res.status(401).json({
            status: 'error',
            message: 'Invalid or expired token'
        });
    }
};
