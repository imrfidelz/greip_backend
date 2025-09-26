const crypto = require('crypto');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: [true, 'Email has been taken'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email'
    ]
  },
  role: {
    type: String,
    enum: ['user', 'employers', 'admin'],
    default: 'user'
  },
  esn: {
    type: String,
    unique: true,
    immutable: true // <-- cannot be updated once set
  }
});

// Helper to generate ESN
function generateESN() {
  const numberPart = Math.floor(1000 + Math.random() * 9000); // 4-digit number
  const randomPart = crypto.randomBytes(4).toString('hex').toUpperCase(); // 8 chars
  return `ESN-${numberPart}-${randomPart}`;
}

// Pre-save hook to ensure unique ESN
UserSchema.pre('save', async function(next) {
  if (!this.esn) {
    let newESN;
    let exists = true;

    while (exists) {
      newESN = generateESN();
      const existingUser = await mongoose.models.User.findOne({ esn: newESN });
      if (!existingUser) {
        exists = false;
      }
    }

    this.esn = newESN;
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);
