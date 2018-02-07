const mongoose = require('mongoose');

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

// Ensure that the number is saved as an integer but returned as a float
//see example below

coinindexSchema.path('price')
  .get(price => (price / 100).toFixed(2))
  .set(price => price * 100);

coinindexSchema.path('mktcap')
  .get(mktcap => mktcap.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'))
  .set(mktcap => mktcap.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,'));

// https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript

coinindexSchema.set('JSON', { getters: true, virtuals: true});

module.exports = mongoose.model('Coin', coinindexSchema);
