angular
  .module('coinApp')
  .controller('IndustryIndexCtrl', IndustryIndexCtrl);

IndustryIndexCtrl.$inject = [ 'Industry'];
function IndustryIndexCtrl(Industry) {
  const vm = this;
  vm.all = Industry.query();
}
