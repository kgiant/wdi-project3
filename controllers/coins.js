// const Coin = require('../models/coin');
//
// function indexRoute(req, res, next){ //need to adapt for api
//   Coin
//     .find()
//     .exec()
//     .then((coins) => res.json(coins))
//     .catch(next);
// }
//
// function showRoute(req, res, next) {
//   Coin
//     .findById(req.params.id)
//     .exec()
//     .then((coin) => {
//       if(!coin) return res.notFound();
//
//       res.json(coin);
//     })
//     .catch(next);
// }
//
// module.exports = {
//   index: indexRoute,
//   show: showRoute
// };

const rp = require('request-promise'); //instead of http to make request to another api

function coinsProxy(req, res){
  const responseObject = {};
  rp({
    url: 'http://coincap.io/front',
    method: 'GET',
    json: true
  })
    .then((frontResponse) => {
      responseObject.frontResponse = frontResponse;
      rp({
        url: 'http://coincap.io/global',
        method: 'GET',
        json: true
      })
        .then((globalResponse) => {
          responseObject.globalResponse = globalResponse;
          res.json(responseObject);
        });
    })
    .catch((err) =>{
      res.json(err);
    });
}

function coinProxy(req, res){
  rp({
    url: 'http://coincap.io/page/${ req.params.id }',
    method: 'GET',
    json: true
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) =>{
      res.json(err);
    });
}

globalProxy();
function globalProxy(req, res){
  rp({
    url: 'http://coincap.io/global',
    method: 'GET',
    json: true
  })
    .then((response) => {
      res.json(response);
    })
    .catch((err) =>{
      res.json(err);
    });
}


module.exports = {
  coinsProxy,
  coinProxy,
  globalProxy
};
