const mongoose = require('mongoose');

const coinhistorySchema = new mongoose.Schema({
  market_cap: [ { date: String,  dayCap: String } ] ,
  price: [ { date: String,  dayPrice: String } ],
  volume: [ { date: String,  dayVolume: String } ]
});
//unix time and USD values

coinhistorySchema.set('JSON', { virtuals: true});

module.exports = mongoose.model('History', coinhistorySchema);
