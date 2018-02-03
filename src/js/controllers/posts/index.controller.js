angular
  .module('coinApp')
  .controller('PostIndexCtrl', PostIndexCtrl);

PostIndexCtrl.$inject = [ 'Post'];
function PostIndexCtrl(Post) {
  const vm = this;
  vm.all = Post.query();
}
