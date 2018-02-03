angular
  .module('coinApp')
  .controller('PostShowCtrl', PostShowCtrl);

PostShowCtrl.$inject = ['$state', 'Post'];
function PostShowCtrl($state, Post) {
  const vm = this;
  vm.post = Post.get($state.params);
  vm.delete = postDelete;

  function postDelete(){
    Post.delete($state.params)
      .$promise
      .then(() => {
        $state.go('postsIndex');
      });
  }
}
