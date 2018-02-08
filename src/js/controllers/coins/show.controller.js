angular
  .module('coinApp')
  .controller('CoinsShowCtrl', CoinsShowCtrl);

CoinsShowCtrl.$inject = ['$state', '$http'];
function CoinsShowCtrl($state, $http) {

  const vm = this;

  vm.barlabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  vm.barseries = ['Series A', 'Series B'];
  vm.bardata = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];

  vm.pielabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  vm.piedata = [300, 500, 100];
  // // vm.piedata = [vm.coin.data.volumeAlt, vm.coin.data.volumeBtc, vm.coin.data.volumeTotal];
  // vm.piedata = [response.data.results.data.volumeAlt, response.data.results.data.volumeBtc, response.data.results.data.volumeTotal];


  coinShow();
  function coinShow(){
    $http.get(`/api/coins/${$state.params.id}`)
      .then((response) => {
        vm.coin = response.data.results;

        // vm.coin.price.map((element) => {
        // })

        console.log(response);
        console.log(vm.coin);

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


// import mapGeojsonExport from '../../assets/wgs84-projection-fewer-dps';

// new Date(market_cap[0].date)
// const coinhistorySchema = new mongoose.Schema({
//   market_cap: [ { date: Number,  dayCap: Number } ] ,
//   price: [ { date: Number,  dayPrice: Number } ],
//   volume: [ { date: Number,  dayVolume: Number } ]
// });
