const jwt = require('jsonwebtoken');
const asyncHandler = require('./async');
const ErrorResponse = require('../utils/errorResponse');
const User = require('../models/User');

// Protect routes
exports.protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  } else if (req.cookies.token) {
    token = req.cookies.token;
  }

  console.log('Received token:', token);

  if (!token) {
    console.error('No token provided');
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log('Decoded token:', decoded);

    if (decoded.isTemp) {
      if (req.path !== '/auth/2fa/verify') {
        console.error('Temporary token used for non-2FA route:', req.path);
        return next(new ErrorResponse('Complete 2FA verification first', 403));
      }
      req.user = { id: decoded.id };
      return next();
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      console.error('User not found:', decoded.id);
      return next(new ErrorResponse('User not found', 401));
    }

    if (decoded.tokenVersion !== user.tokenVersion) {
      console.error('Token version mismatch:', {
        tokenVersion: decoded.tokenVersion,
        userTokenVersion: user.tokenVersion,
      });
      return next(new ErrorResponse('Session expired. Please log in again.', 401));
    }

    req.user = user;
    next();
  } catch (err) {
    console.error('Failed to verify token:', err.message);
    return next(new ErrorResponse('Not authorized to access this route', 401));
  }
});

// Grant access to specific roles
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new ErrorResponse(
          `User role ${req.user.role} is not authorized to access this route`,
          403
        )
      );
    }
    next();
  };
};


