angular
  .module('coinApp')
  .controller('CoinsIndexCtrl', CoinsIndexCtrl);

CoinsIndexCtrl.$inject = [ 'Coin'];
function CoinsIndexCtrl(Coin) {
  const vm = this;
  vm.all = Coin.query();
}
