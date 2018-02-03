const Industry = require('../models/industry');

function indexRoute(req, res, next){ //need to adapt for api
  Industry
    .find()
    .exec()
    .then((industry) => res.json(industry))
    .catch(next);
}

function showRoute(req, res, next) {
  Industry
    .findById(req.params.id)
    .exec()
    .then((industry) => {
      if(!industry) return res.notFound();

      res.json(industry);
    })
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute
};
