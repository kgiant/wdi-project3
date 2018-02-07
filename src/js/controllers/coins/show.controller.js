angular
  .module('coinApp')
  .controller('CoinsShowCtrl', CoinsShowCtrl);

CoinsShowCtrl.$inject = ['$state', '$http'];
function CoinsShowCtrl($state, $http) {
  const vm = this;

  vm.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  vm.series = ['Series A', 'Series B'];

  vm.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

// new Date(market_cap[0].date)
  // const coinhistorySchema = new mongoose.Schema({
  //   market_cap: [ { date: Number,  dayCap: Number } ] ,
  //   price: [ { date: Number,  dayPrice: Number } ],
  //   volume: [ { date: Number,  dayVolume: Number } ]
  // });

  coinShow();
  function coinShow(){
    $http.get(`/api/coins/${$state.params.id}`)
      .then((response) => {
        vm.coin = response.data.results;

        console.log(response);
      });
  }

  // globalProxy();
  // function globalProxy(){
  //
  // }
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
