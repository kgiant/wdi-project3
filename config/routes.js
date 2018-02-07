const express     = require('express');
const router      = express.Router();
const coins       = require('../controllers/coins');
const auth        = require('../controllers/auth');
// const industry    = require('../controllers/industries');
const posts       = require('../controllers/posts');
const secureRoute = require('../lib/secureRoute');

// Routes go here

router.get('/', (req, res) => res.render('../src/js/index'));

router.route('/coins')
  .get(coins.coinsProxy);    //coins listing data
  // .get(coins.globalProxy);  //global-aggregate coin data

router.route('/coins/:id')
  .get(coins.coinProxy);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

// router.route('/industry')
//   .get(industry.index);
//
// router.route('/industry/:industryId')
//   .get(industry.show); //secureRoute
//
router.route('/posts')
  .get(posts.index)
  .post(secureRoute, posts.create);

router.route('/posts/:id')
  .get(posts.show)
  .get(secureRoute, posts.edit)
  .put(secureRoute, posts.update)
  .delete(secureRoute, posts.delete);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
