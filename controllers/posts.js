const Post = require('../models/post');


function indexRoute(req, res, next) {
  Post
    .find()
    .populate('createdBy')
    .exec()
    .then((posts) => res.json(posts))
    .catch(next);
}

function createRoute(req, res, next) {
  req.body.createdBy = req.user;
  Post
    .create(req.body)
    .then((post) => res.status(201).json(post))
    .catch(next);
}

function showRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((post) => {
      if(!post) return res.notFound();

      res.json(post);
    })
    .catch(next);
}

function editRoute(req, res, next) {
  Post
    .findById(req.params.id)
    .populate('createdBy')
    .exec()
    .then((post) => {
      if(!post) return res.redirect();
      if(!post.belongsTo(req.user)) return res.unauthorized(`/posts/${post.id}`, 'You do not have permission to edit this post');
      return res.render('posts/edit', { post });
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
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute
};
