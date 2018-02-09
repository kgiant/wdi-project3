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

  coinShow();
  function coinShow(){
    $http.get(`/api/coins/${$state.params.id}`)
      .then((response) => {
        // vm.coin = response.data;
        vm.coin = response.data.coinResponse;
        vm.history = response.data.historyResponse;
        // vm.barlabels = []; vm.coin.
        // vm.barseries = ['Market Cap', 'Price'];
        // const seriesadata = vm.history.market_cap.map(market_cap() => {
        //   history.market_cap;
        // });
        // vm.bardata = [[],[]];

        console.log(vm.mktcap);
        console.log('respone =========>', response);
        // console.log('coin =======> ', vm.coin);
        // console.log('history ======> ', vm.history);

        vm.pielabels = ['volumeAlt', 'volumeBtc', 'volumeTotal'];
        vm.piedata = [vm.coin.volumeAlt, vm.coin.volumeBtc, vm.coin.volumeTotal];
      });
  }

}


// import mapGeojsonExport from '../../assets/wgs84-projection-fewer-dps';
// vm.coin.price.map((element) => {
// })

// new Date(market_cap[0].date)
// const coinhistorySchema = new mongoose.Schema({
//   market_cap: [ { date: Number,  dayCap: Number } ] ,
//   price: [ { date: Number,  dayPrice: Number } ],
//   volume: [ { date: Number,  dayVolume: Number } ]
// });
