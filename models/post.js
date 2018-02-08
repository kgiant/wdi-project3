const mongoose   = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true }, // use filestack here
  article: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User'} //, required: true 
}, {
  timestamps: true
});

postSchema.methods.belongsTo = function belongsTo(user) {
  if(typeof this.createdBy.id === 'string') return this.createdBy.id === user.id;
  return user.id === this.createdBy.toString();
};

postSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Post', postSchema);
