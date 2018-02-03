angular
  .module('coinApp')
  .controller('IndustryShowCtrl', IndustryShowCtrl);

IndustryShowCtrl.$inject = ['$state', 'Industry'];
function IndustryShowCtrl($state, Industry) {
  const vm = this;
  vm.industry = Industry.get($state.params);
  // vm.delete = industryDelete;
  //
  // function industryDelete(){
  //   Industry.delete($state.params)
  //     .$promise
  //     .then(() => {
  //       $state.go('industriesIndex');
  //     });
  // }
}
