const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // use filestack here
  article: String,
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }
});

postSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', postSchema);
