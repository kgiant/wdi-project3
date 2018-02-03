angular
  .module('coinApp')
  .controller('UserShowCtrl', UserShowCtrl);

UserShowCtrl.$inject = ['$state', 'User'];
function UserShowCtrl($state, User) {
  const vm = this;
  vm.user = User.get($state.params);
  vm.delete = userDelete;

  function userDelete(){
    User.delete($state.params)
      .$promise
      .then(() => {
        $state.go('usersIndex');
      });
  }
}
