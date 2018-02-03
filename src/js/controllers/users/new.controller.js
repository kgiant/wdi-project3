angular
  .module('coinApp')
  .controller('UserNewCtrl', UserNewCtrl);

UserNewCtrl.$inject = ['$state', 'User'];
function UserNewCtrl($state, User) {
  const vm  = this;
  vm.user = {};
  vm.create = userCreate;

  function userCreate(){
    User
      .save(vm.user)
      .$promise
      .then(() => {
        $state.go('usersIndex');
      });
  }
}
