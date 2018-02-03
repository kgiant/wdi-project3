angular
  .module('coinApp')
  .factory('Coin', Coin);

Coin.$inject = ['$resource', 'API'];
function Coin($resource, API){
  return $resource(`${API}/coins/:id`, { id: '@_id'}, {
    // 'update': { method: 'PUT' }
  });
}
