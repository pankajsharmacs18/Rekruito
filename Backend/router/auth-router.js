const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');
const { check } = require('express-validator');
const authMiddleware = require('../middleware/authMiddleware');

// Register route
router.post('/register', [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ], authController.register);

// Verify email route
router.get('/verify-email/:token', authController.verifyEmail);

// Login route
router.post('/login', [
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Password is required').exists()
    ], authController.login);
// Forgot password route
router.post(
    '/forgotpassword',
    [check('email', 'Please include a valid email').isEmail()],
    authController.forgotPassword
);

// Reset password route
router.patch(
    '/resetpassword/:token',
    [
        check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    authController.resetPassword
);

// Protect all routes after this middleware
router.use(authMiddleware.protect);

// Get current user route
router.get('/me', authController.getMe);

// Update user details route
router.put(
    '/updatedetails',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail()
    ],
    authController.updateDetails
);

// Update password route
router.put(
    '/updatepassword',
    [
        check('currentPassword', 'Current password is required').not().isEmpty(),
        check('newPassword', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
    ],
    authController.updatePassword
);

// Logout route
router.get('/logout', authController.logout);

module.exports = router;