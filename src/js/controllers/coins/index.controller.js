angular
  .module('coinApp')
  .controller('CoinsIndexCtrl', CoinsIndexCtrl);

CoinsIndexCtrl.$inject = ['$state', '$http'];
function CoinsIndexCtrl($state, $http) {
  const vm = this;

  coinsIndex();
  function coinsIndex(){
    $http
      .get('/api/coins')
      .then((response) => {

        // vm.all = response.data;
        vm.all = response.data.frontResponse;
        vm.global = response.data.globalResponse;
        console.log(vm.global);
      });
  }

}
