const express     = require('express');
const router      = express.Router();
const coins       = require('../controllers/coins');
const auth        = require('../controllers/auth');
// const secureRoute = require('../lib/secureRoute');

// Routes go here

router.get('/', (req, res) => res.render('../src/js/index'));

router.route('/coins')
  .get(coins.index);

router.route('/coins/:coinId')
  .get(coins.show); //secureRoute

router.route('/register') 
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// router.route('/industry')
//   .get(industry.index); //secureRoute
//
// router.route('/industry/:industryId')
//   .get(industry.show); //secureRoute
//
// router.route('/posts')
//   .get(posts.index) //secureRoute
//   .post(posts.create); //secureRoute
//
// router.route('/posts/:postId')
//   .get(posts.show)  //secureRoute
//   .put(posts.update) //secureRoute
//   .delete(posts.delete); //secureRoute

router.all('/*', (req, res) => res.notFound());

module.exports = router;
