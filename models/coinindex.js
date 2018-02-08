const mongoose        = require('mongoose');

const coinindexSchema = new mongoose.Schema({
  cap24hrChange: Number,
  long: String,
  mktcap: Number,
  perc: Number,
  price: Number,
  shapeshift: Boolean,
  short: String,
  supply: Number,
  usdVolume: Number,
  volume: Number,
  vwapData: Number,
  vwapDataBTC: Number
}, {
  timestamps: true
});

coinindexSchema.set('JSON', { getters: true, virtuals: true});

module.exports = mongoose.model('Coin', coinindexSchema);
