
const express = require('express');
const {
  createWaitlist
} = require('../controllers/waitlist');
const User = require('../models/User');
const router = express.Router({ mergeParams: true });
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

// Public route
router.post('/waitlist', createWaitlist);

module.exports = router;
