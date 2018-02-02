const mongoose = require('mongoose');

const globalSchema = new mongoose.Schema({
  altCap: String,
  bitnodesCount: String,
  btcCap: String,
  btcPrice: String,
  dom: String,
  totalCap: String,
  volumeAlt: String,
  volumeBtc: String,
  volumeTotal: String
});

globalSchema.set('JSON', { virtuals: true});

module.exports = mongoose.model('Global', globalSchema);
