const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({
  altCap: String,
  bitnodesCount: String,
  btcCap: String,
  btcPrice: String,
  dom: String,
  totalCap: String,
  volumeAlt: String,
  volumeBtc: String,
  volumeTotal: String,
  id: String,
  _id: String,
  cap24hrChange: String,
  display_name: String,
  status: String,
  supply: String,
  volume: String,
  vwap_h24: String,
  price_btc: String,
  price_eth: String,
  price_eur: String,
  price_usd: String,
  price_ltc: String,
  price_zec: String,
  market_cap: String,
  type: String,
  price: String
});

coinSchema.set('JSON', { virtuals: true});

module.exports = mongoose.model('Coin', coinSchema);
