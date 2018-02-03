angular
  .module('coinApp')
  .controller('UserIndexCtrl', UserIndexCtrl);

UserIndexCtrl.$inject = [ 'User'];
function UserIndexCtrl(User) {
  const vm = this;
  vm.all = User.query();
}
