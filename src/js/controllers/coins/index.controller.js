angular
  .module('coinApp')
  .controller('CoinsIndexCtrl', CoinsIndexCtrl);

CoinsIndexCtrl.$inject = ['Coin', '$http'];
function CoinsIndexCtrl(Coin, $http) {
  const vm = this;
  vm.all = Coin.query();

  coinsIndex();

  function coinsIndex(){
    $http.get('http://coincap.io/front')
      .then((response) => {
        vm.all = response;

        console.log(response);
      });
  }

}
