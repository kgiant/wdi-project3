const Post = require('../models/post');


function indexRoute(req, res, next) {
  Post
    .find()
    .exec()
    .then((posts) => res.json(posts))
    .catch(next);
}

function createRoute(req, res, next) {
  Post
    .create(req.body)
    .then((post) => res.status(201).json(post))
    .catch(next);
}

function showRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      res.json(post);
    })
    .catch(next);
}

function updateRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      Object.assign(post, req.body);
      return post.save();
    })
    .then((post) => res.json(post))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      return post.remove();
    })
    .then(() => res.status(204).end())
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
