angular
  .module('coinApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = {};
  vm.submit = submit; // make submit function available from the view file

  function submit() {
    $auth.signup(vm.user)
      .then(() => {
        $state.go('login');
      });
  }

}
