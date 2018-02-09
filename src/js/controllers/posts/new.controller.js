angular
  .module('coinApp')
  .controller('PostNewCtrl', PostNewCtrl);

PostNewCtrl.$inject = ['$state', '$http'];
function PostNewCtrl($state, $http) {
  const vm  = this;
  vm.post = {};
  vm.create = postCreate;
  console.log('1');
  // function postCreate(){
  //   Post
  //     .save(vm.post)
  //     .$promise
  //     .then(() => {
  //       $state.go('postsIndex');
  //     });
  // }

  function postCreate(){
    $http
      .post('/api/posts', vm.post)
      .then(() => {
        $state.go('postsIndex');
        console.log('2');

      });
  }
}
