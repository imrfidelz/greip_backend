
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');


// @desc      Get user by ESN
// @route     GET /api/v1/users/esn/:esn
// @access    Public
exports.getUserByESN = asyncHandler(async (req, res, next) => {
  const user = await User.findOne({ esn: req.params.esn });

  if (!user) {
    return next(new ErrorResponse(`No user found with ESN ${req.params.esn}`, 404));
  }

  res.status(200).json({
    success: true,
    data: user
  });
});
