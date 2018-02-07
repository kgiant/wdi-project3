angular
  .module('coinApp')
  .controller('PostIndexCtrl', PostIndexCtrl);

PostIndexCtrl.$inject = ['Post', '$state', '$http'];
function PostIndexCtrl(Post, $state, $http) {
  const vm = this;
  vm.posts = Post.query($state.params);

  postsIndex();
  function postsIndex(){
    $http
      .get('/api/posts')
      .then((response) => {
        vm.all = response.data;
        console.log(response);
      });
  }

}
