const express     = require('express');
const router      = express.Router();
const coins       = require('../controllers/coins');
const auth        = require('../controllers/auth');
const posts       = require('../controllers/posts');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('../src/js/index'));

router.route('/coins')
  .get(coins.coinsProxy);     //coin rankings data and global data

router.route('/coins/:id')    //coin specific data
  .get(coins.coinProxy);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

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
