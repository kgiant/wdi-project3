angular
  .module('coinApp')
  .controller('PostNewCtrl', PostNewCtrl);

PostNewCtrl.$inject = ['$state', 'Post'];
function PostNewCtrl($state, Post) {
  const vm  = this;
  vm.post = {};
  vm.create = postCreate;

  function postCreate(){
    Post
      .save(vm.post)
      .$promise
      .then(() => {
        $state.go('postsIndex');
      });
  }
}
