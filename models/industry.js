const mongoose = require('mongoose');

//this is not good, need to figure out how the mapping will work

const industrySchema = new mongoose.Schema({
  coinType: String, // two types digital currency and utility token
  industry: String, // highlevel classification e.g. Technology or Media & Entertainment
  sector: String,   // second level classification e.g. storage or identity or payments or gambling or news
  coinId: String  //this should be the same with the id at coin.js
});

industrySchema.set('JSON', { virtuals: true});

module.exports = mongoose.model('Industry', industrySchema);

// industry classification from coinist: ['Finance', 'Business', 'Technology & Science', 'Arts & Entertainment', 'Games', 'Shopping', 'Health', 'Society', 'News & Media'
