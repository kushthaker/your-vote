var app = angular.module('vote', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/partials/postal.html',
  })
  .when('/member', {
    templateUrl: '../views/partials/member.html',
  })
  .otherwise({
    redirectTo: '/'
  })

});
