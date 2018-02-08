const Promise     = require('bluebird');
const jwt         = Promise.promisifyAll(require('jsonwebtoken'));
const { secret }  = require('../config/environment');
const User        = require('../models/user');

function secureRoute(req, res, next) {
  if (!req.headers.authorization) return res.unauthorized();

  const token = req.headers.authorization.replace('Bearer ', ''); //remove bearer AND a space

  jwt.verifyAsync(token, secret)
    .then((payload) => {
      // here payload is { userId: "8402njsfdk935jks"}
      return User.findById(payload.userId);
    })
    .then((user) => {
      if (!user) return res.unauthorized();
      req.user = user;
      next();
    })
    .catch(next);
}

module.exports = secureRoute;
