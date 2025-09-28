
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const User = require('../models/User');
const sendEmail = require('../utils/sendEmail');
const { getWelcomeEmailTemplate } = require('../utils/emailTemplates');

// @desc      Create user
// @route     POST /api/v1/users/waitlist
// @access    Private/Admin
exports.createWaitlist = asyncHandler(async (req, res, next) => {
  const user = await User.create(req.body);
  
  // Send welcome email after successful user creation
  try {
    const emailTemplate = getWelcomeEmailTemplate(user.name, user.role);
    
    await sendEmail({
      email: user.email,
      subject: emailTemplate.subject,
      html: emailTemplate.html,
      text: emailTemplate.text
    });
    
    console.log(`Welcome email sent to ${user.email}`);
  } catch (emailError) {
    console.error('Failed to send welcome email:', emailError);
    // Don't fail the registration if email fails - log the error
  }
  
  res.status(201).json({
    success: true,
    data: user,
    message: 'Welcome to GREiPR! Check your email for a welcome message.'
  });
});
