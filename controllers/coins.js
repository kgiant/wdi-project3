const Coin = require('../models/coin');

function indexRoute(req, res, next){ //need to adapt for api
  Coin
    .find()
    .exec()
    .then((coins) => res.json(coins))
    .catch(next);
}

function showRoute(req, res, next) {
  Coin
    .findById(req.params.id)
    .exec()
    .then((coin) => {
      if(!coin) return res.notFound();

      res.json(coin);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute
};
