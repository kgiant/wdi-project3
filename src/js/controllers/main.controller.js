angular
  .module('coinApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$transitions'];
function MainCtrl($transitions) {
  const vm = this;

  $transitions.onSuccess({}, (transition) => {
    // closes the mobile menu each time the state changes
    vm.menuIsOpen = false;
    // attaches the state name to the main controller to be used as a class name on the body
    vm.pageName = transition.to().name;
    console.log(vm.pageName);
  });
}
