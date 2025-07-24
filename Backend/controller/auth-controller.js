const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const { sendEmail } = require('../utils/email');
const crypto = require('crypto');
JWT_SECRET="9f8b9c9c8f993ef30a2093f74eaa5b3a6f8c0f7e4dcb8b5c3b3e5d4e91fc2f9e"
JWT_EXPIRES_IN="7d"
// Helper function to generate JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRES_IN
    });
};

// Helper function to create and send token
const createSendToken = (user, statusCode, res) => {
    const token = generateToken(user._id);

    // Remove password from output
    user.password = undefined;

    res.status(statusCode).json({
        status: 'success',
        token,
        data: {
            user
        }
    });
};

// @desc    Register a new user
// @route   POST /api/v1/auth/register
// @access  Public
register = async (req, res, next) => {
    try {
        console.log("I am called")
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password, role } = req.body;
        console.log(req)
        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 'error',
                message: 'User already exists with this email'
            });
        }

        // Create user
        const user = await User.create({
            name,
            email,
            password,
            role
        });

        // Generate verification token
        const verificationToken = user.generateVerificationToken();
        await user.save({ validateBeforeSave: false });

        // Send verification email
        const verificationUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/verify-email/${verificationToken}`;

        try {
            await sendEmail({
                email: user.email,
                subject: 'Email Verification',
                message: `Please verify your email by clicking on this link: ${verificationUrl}`
            });

            createSendToken(user, 201, res);
        } catch (err) {
            user.emailVerificationToken = undefined;
            user.emailVerificationExpires = undefined;
            await user.save({ validateBeforeSave: false });

            return res.status(500).json({
                status: 'error',
                message: 'There was an error sending the verification email. Please try again later.'
            });
        }
    } catch (err) {
        next(err);
    }
};

// @desc    Verify email
// @route   GET /api/v1/auth/verify-email/:token
// @access  Public
verifyEmail = async (req, res, next) => {
    try {
        const hashedToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex');

        const user = await User.findOne({
            emailVerificationToken: hashedToken,
            emailVerificationExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'Token is invalid or has expired'
            });
        }

        user.isEmailVerified = true;
        user.emailVerificationToken = undefined;
        user.emailVerificationExpires = undefined;
        await user.save();

        res.status(200).json({
            status: 'success',
            message: 'Email verified successfully'
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Login user
// @route   POST /api/v1/auth/login
// @access  Public
login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
console.log("UserLoginDATA ",email,password);
        // 1) Check if email and password exist
        if (!email || !password) {
            return res.status(400).json({
                status: 'error',
                message: 'Please provide email and password'
            });
        }

        // 2) Check if user exists && password is correct
        const user = await User.findOne({ email }).select('+password');

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({
                status: 'error',
                message: 'Incorrect email or password'
            });
        }

        // 3) If everything ok, send token to client
        createSendToken(user, 200, res);
    } catch (err) {
        next(err);
    }
};

// @desc    Get current logged in user
// @route   GET /api/v1/auth/me
// @access  Private
getMe = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id);

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Update user details
// @route   PUT /api/v1/auth/updatedetails
// @access  Private
updateDetails = async (req, res, next) => {
    try {
        const fieldsToUpdate = {
            name: req.body.name,
            email: req.body.email
        };

        const user = await User.findByIdAndUpdate(req.user.id, fieldsToUpdate, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        });
    } catch (err) {
        next(err);
    }
};

// @desc    Update password
// @route   PUT /api/v1/auth/updatepassword
// @access  Private
updatePassword = async (req, res, next) => {
    try {
        const user = await User.findById(req.user.id).select('+password');

        // 1) Check if POSTed current password is correct
        if (!(await bcrypt.compare(req.body.currentPassword, user.password))) {
            return res.status(401).json({
                status: 'error',
                message: 'Your current password is wrong'
            });
        }

        // 2) If so, update password
        user.password = req.body.newPassword;
        await user.save();

        // 3) Log user in, send JWT
        createSendToken(user, 200, res);
    } catch (err) {
        next(err);
    }
};

// @desc    Forgot password
// @route   POST /api/v1/auth/forgotpassword
// @access  Public
// @route   PATCH /api/v1/auth/resetpassword/:token
// @access  Public
resetPassword = async (req, res, next) => {
    try {
        // 1) Get user based on the token
        const hashedToken = crypto
            .createHash('sha256')
            .update(req.params.token)
            .digest('hex');

        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() }
        });

        // 2) If token has not expired, and there is user, set the new password
        if (!user) {
            return res.status(400).json({
                status: 'error',
                message: 'Token is invalid or has expired'
            });
        }

        user.password = req.body.password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;
        await user.save();

        // 3) Update changedPasswordAt property for the user
        // 4) Log the user in, send JWT
        createSendToken(user, 200, res);
    } catch (err) {
        next(err);
    }
};
forgotPassword = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: 'There is no user with that email address'
            });
        }

        // Generate the reset token
        const resetToken = user.generatePasswordResetToken();
        await user.save({ validateBeforeSave: false });

        // Send email with the reset link
        const resetUrl = `${req.protocol}://${req.get('host')}/api/v1/auth/resetpassword/${resetToken}`;
        const message = `You requested a password reset. Make a PATCH request to: ${resetUrl}`;

        try {
            await sendEmail({
                email: user.email,
                subject: 'Your password reset token (valid for 10 minutes)',
                message
            });

            res.status(200).json({
                status: 'success',
                message: 'Token sent to email!'
            });
        } catch (err) {
            user.passwordResetToken = undefined;
            user.passwordResetExpires = undefined;
            await user.save({ validateBeforeSave: false });

            return res.status(500).json({
                status: 'error',
                message: 'There was an error sending the email. Try again later.'
            });
        }
    } catch (err) {
        next(err);
    }
};
// @desc    Logout user
// @route   GET /api/v1/auth/logout
// @access  Private
logout = (req, res, next) => {
    // For JWT, logout is handled client-side by removing the token
    // If using cookies:
    // res.cookie('jwt', 'loggedout', {
    //   expires: new Date(Date.now() + 10 * 1000),
    //   httpOnly: true
    // });

    res.status(200).json({
        status: 'success',
        message: 'Logged out successfully'
    });
};
module.exports = {forgotPassword,logout,resetPassword,updatePassword,updateDetails,getMe,login,register,verifyEmail,createSendToken}