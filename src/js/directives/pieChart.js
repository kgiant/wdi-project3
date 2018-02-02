// Markup
// <canvas id="pie" class="chart chart-pie"
//   chart-data="data" chart-labels="labels" chart-options="options">
// </canvas>

angular.module('app', ['chart.js']).controller('PieCtrl', function ($scope) {
  $scope.labels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  $scope.data = [300, 500, 100];
});
