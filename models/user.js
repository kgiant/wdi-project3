const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  organization: String,
  name: String,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});


userSchema.set('JSON', { virtuals: true});

module.exports = mongoose.model('User', userSchema);
