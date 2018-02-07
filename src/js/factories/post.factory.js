angular
  .module('coinApp')
  .factory('Post', Post);

Post.$inject = ['$resource', 'API'];
function Post($resource, API){
  return $resource(`${API}/posts/:id`, { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}
