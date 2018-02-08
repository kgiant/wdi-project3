const mongoose      = require('mongoose');

const globalSchema  = new mongoose.Schema({
  altCap: Number,
  bitnodesCount: Number,
  btcCap: Number,
  btcPrice: Number,
  dom: Number,
  totalCap: Number,
  volumeAlt: Number,
  volumeBtc: Number,
  volumeTotal: Number
});


globalSchema.set('JSON', { virtuals: true});

module.exports = mongoose.model('Global', globalSchema);
