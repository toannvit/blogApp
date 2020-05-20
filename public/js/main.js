(() => {
  // create the module and name it scotchApp
  var blogApp = angular.module('blogApp', [
    'ngRoute',

    'loginModule',
    'newsModule'
  ]);

  // configure our routes
  blogApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
      // route for the home page
      .when('/', {
        redirectTo: '/tin-tuc'
      })
      .when('/tin-tuc', {
        templateUrl: 'pages/news.html',
        controller: 'newsController'
      })
      .when('/dang-nhap', {
        templateUrl: 'pages/login.html',
        controller: 'loginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
})()