angular
  .module('coinApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/home.html' // does not exist
    })
    .state('coinsIndex', {
      url: '/coins',
      templateUrl: '/js/views/coins/index.html',
      controller: 'CoinsIndexCtrl as vm'
    })
    .state('coinsShow', {
      url: '/coins/:id',
      templateUrl: '/js/views/coins/show.html',
      controller: 'CoinsShowCtrl as vm'
    })
    //
    // .state('industriesIndex', {
    //   url: '/industries',
    //   templateUrl: '/js/views/industries/index.html',
    //   controller: 'IndustryIndexCtrl as vm'
    // })
    // .state('industriesShow', {
    //   url: '/industries/:id',
    //   templateUrl: '/js/views/industries/show.html',
    //   controller: 'IndustryShowCtrl as vm'
    // })
    //
    // .state('postsIndex', {
    //   url: '/posts',
    //   templateUrl: '/js/views/posts/index.html',
    //   controller: 'PostIndexCtrl as vm'
    // })
    // .state('postsNew', {
    //   url: '/posts/new',
    //   templateUrl: '/js/views/posts/new.html',
    //   controller: 'PostNewCtrl as vm'
    // })
    // .state('postsShow', {
    //   url: '/posts/:id',
    //   templateUrl: '/js/views/posts/show.html',
    //   controller: 'PostShowCtrl as vm'
    // })
    // .state('postsEdit', {
    //   url: '/posts/:id/edit',
    //   templateUrl: '/js/views/posts/edit.html',
    //   controller: 'PostEditCtrl as vm'
    // })

    .state('login', {
      url: '/login',
      templateUrl: '/js/views/auth/login.html',
      controller: 'LoginCtrl as vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/auth/register.html',
      controller: 'RegisterCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}
