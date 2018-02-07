angular
  .module('coinApp')
  .controller('PostShowCtrl', PostShowCtrl);

PostShowCtrl.$inject = ['$state', 'Post', '$http'];
function PostShowCtrl($state, Post, $http) {
  const vm = this;
  vm.post = Post.get($state.params);
  vm.show = postShow;
  vm.delete = postDelete;

  postShow();
  function postShow(){
    $http
      .get(`/api/posts/${$state.params.id}`)
      .then((response) => {
        vm.post = response.data;
      });
  }

  function postDelete(){
    Post
      .delete($state.params)
      .$promise
      .then(() => {
        $state.go('postsIndex');
      });
  }
}
