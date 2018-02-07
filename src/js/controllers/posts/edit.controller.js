angular
  .module('coinApp')
  .controller('PostEditCtrl', PostEditCtrl);

PostEditCtrl.$inject = ['$state', 'Post'];
function PostEditCtrl($state, Post) {
  const vm = this;
  vm.post = Post.get($state.params);
  vm.update = postUpdate;

  function postUpdate(){
    Post
      .update({id: $state.params.id}, vm.post)
      .$promise
      .then(() => {
        $state.go('postsShow', $state.params);
      });
  }
}
