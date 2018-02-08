
function customResponses(req, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;

    throw err;
  };

  res.unauthorized = function unauthorized() {
    const err = new Error('Unauthorized');
    err.status = 401;

    throw err;
  };

  // res.unauthorized = function unauthorized(url='/login', message='You must be logged in') {
  //   req.flash('alert', message);
  //   return res.redirect(url);
  // };

  next();
}

module.exports = customResponses;
