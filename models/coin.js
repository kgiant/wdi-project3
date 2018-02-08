const mongoose   = require('mongoose');

const coinSchema = new mongoose.Schema({
  altCap: { type: Number },
  bitnodesCount: { type: Number },
  btcCap: { type: Number },
  btcPrice: { type: Number },
  dom: { type: Number },
  totalCap: { type: Number },
  volumeAlt: { type: Number },
  volumeBtc: { type: Number },
  volumeTotal: { type: Number },
  id: String,
  _id: String,
  cap24hrChange: { type: Number },
  display_name: String,
  status: String,
  supply: { type: Number },
  volume: { type: Number },
  vwap_h24: { type: Number },
  price_btc: { type: Number },
  price_eth: { type: Number },
  price_eur: { type: Number },
  price_usd: { type: Number },
  price_ltc: { type: Number },
  price_zec: { type: Number },
  market_cap: { type: Number },
  type: String,
  price: { type: Number }
}, {
  timestamps: true
});

coinSchema.set('JSON', { getters: true, virtuals: true});

module.exports = mongoose.model('Coin', coinSchema);


// Ensure that the number is saved as an integer but returned as a float
//see example below
// coinSchema.path('price')
//   .get(price => (price / 100).toFixed(2))
//   .set(price => price * 100);
