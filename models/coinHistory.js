const mongoose = require('mongoose');

const coinhistorySchema = new mongoose.Schema({
  market_cap: [ { date: Number,  dayCap: Number } ] ,
  price: [ { date: Number,  dayPrice: Number } ],
  volume: [ { date: Number,  dayVolume: Number } ]
});
//unix time and USD values

coinhistorySchema.set('JSON', { virtuals: true});

module.exports = mongoose.model('History', coinhistorySchema);
