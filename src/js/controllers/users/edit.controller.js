angular
  .module('coinApp')
  .controller('UserEditCtrl', UserEditCtrl);

UserEditCtrl.$inject = ['$state', 'User'];
function UserEditCtrl($state, User) {
  const vm = this;
  vm.user = User.get($state.params);
  vm.update = userUpdate;

  function userUpdate(){
    User
      .update($state.params, vm.user)
      .$promise
      .then(() => {
        $state.go('userShow', $state.params);
      });
  }
}
