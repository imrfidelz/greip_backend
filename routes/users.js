
const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  toggleUserStatus,
  updateUserRole
} = require('../controllers/users');
const {
  createWaitlist
} = require('../controllers/waitlist');

const User = require('../models/User');

const router = express.Router({ mergeParams: true });
const advancedResults = require('../middleware/advancedResults');
const { protect, authorize } = require('../middleware/auth');

// Public route
router.post('/waitlist', createWaitlist);

// All routes below require authentication
router.use(protect);

// Regular user management routes (admin only)
router.use(authorize('admin'));

router
  .route('/')
  .get(advancedResults(User), getUsers)
  .post(createUser);

router
  .route('/:id')
  .put(updateUser)
  .delete(deleteUser);

// New routes for user status and role management
router.patch('/:id/status', toggleUserStatus);
router.patch('/:id/role', updateUserRole);

module.exports = router;
