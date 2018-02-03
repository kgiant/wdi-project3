angular
  .module('coinApp')
  .controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['$auth', '$state'];
function LoginCtrl($auth, $state) {
  const vm = this;
  vm.credentials = {};
  vm.submit = submit; // make submit function available from the view file

  function submit() {
    $auth.login(vm.credentials)
      .then(() => {
        $state.go('coinsIndex');
      });
  }

}
