const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id,
      role: user.role }
      , JWT_SECRET, {
    expiresIn: JWT_EXPIRES_IN
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = generateToken(user);

  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
};

module.exports = { generateToken, createSendToken };
