// Markup
// <canvas id="base" class="chart-bubble" chart-data="data"
//   chart-series="series" >
// </canvas>

angular.module('app', ['chart.js']).controller('PieCtrl', function ($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  $scope.data = [300, 500, 100];
});
