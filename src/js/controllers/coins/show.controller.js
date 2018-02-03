angular
  .module('coinApp')
  .controller('CoinsShowCtrl', CoinsShowCtrl);

CoinsShowCtrl.$inject = ['$state', 'Coin'];
function CoinsShowCtrl($state, Coin) {
  const vm = this;
  vm.coin = Coin.get($state.params);
  // vm.delete = coinsDelete;
  //
  // function coinsDelete(){
  //   Coin.delete($state.params)
  //     .$promise
  //     .then(() => {
  //       $state.go('coinsIndex');
  //     });
  // }
}
