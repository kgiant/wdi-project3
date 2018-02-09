const rp = require('request-promise');

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
  const responseObject = {};
  rp({
    url: `http://coincap.io/page/${ req.params.id }`,
    method: 'GET',
    json: true
  })
    .then((coinResponse) => {
      responseObject.coinResponse = coinResponse;
      rp({
        url: `http://coincap.io/history/${ req.params.id }`,
        method: 'GET',
        json: true
      })
        .then((historyResponse) => {
          responseObject.historyResponse = historyResponse;
          res.json(responseObject);
        });
    })
    .catch((err) =>{
      res.json(err);
    });
}

// function coinProxy(req, res){
//   rp({
//     url: `http://coincap.io/page/${ req.params.id }`,
//     method: 'GET',
//     json: true
//   })
//     .then((response) => {
//       res.json(response);
//     })
//     .catch((err) =>{
//       res.json(err);
//     });
// }


module.exports = {
  coinsProxy,
  coinProxy
};



// globalProxy
// globalProxy();
// function globalProxy(req, res){
//   rp({
//     url: 'http://coincap.io/global',
//     method: 'GET',
//     json: true
//   })
//     .then((response) => {
//       res.json(response);
//     })
//     .catch((err) =>{
//       res.json(err);
//     });
// }
