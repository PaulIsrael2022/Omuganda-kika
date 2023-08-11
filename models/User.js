const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
  type: String,
  required: true
  },
  password: {
  type: String,
  required: true
  },
  role: {
  type: String,
  enum: ['user', 'clan', 'admin'],
  default: 'user'
  }
  });
  
  UserSchema.pre('save', async function(next) {
  const user = this;
  if (user.isModified('password')) {
  user.password = await bcrypt.hash(user.password, 8);
  }
  next();
  });
  
  UserSchema.methods.comparePassword = async function(candidatePassword) {
  const user = this;
  return bcrypt.compare(candidatePassword, user.password).catch(e => false);
  }
  
  const User = mongoose.model('User', UserSchema);
  
  module.exports = User;