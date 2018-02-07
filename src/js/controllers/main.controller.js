angular
  .module('coinApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', '$state', '$transitions', '$auth'];
function MainCtrl($rootScope, $state, $transitions, $auth) {
  const vm = this;
  vm.isAuthenticated = $auth.isAuthenticated;

  $transitions.onSuccess({}, (transition) => {
    // closes the mobile menu each time the state changes
    vm.menuIsOpen = false;
    // attaches the state name to the main controller to be used as a class name on the body
    vm.pageName = transition.to().name;

    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
  });

  $rootScope.$on('error', (e, err) => {
    vm.message = err.data.message;

    if(err.status === 401 && vm.pageName !== 'login') {
      vm.stateHasChanged = false;
      $state.go('login');
    }
  });

  function logout() {
    $auth.logout();
    $state.go('home');
  }

  vm.logout = logout;
}
