var app = angular.module('vote', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: '../views/partials/postal.html',
    controller: 'memberCtrl as ctrl'
  })
  .when('/member', {
    templateUrl: '../views/partials/member.html',
    controller: 'memberCtrl as ctrl'
  })
  .otherwise({
    redirectTo: '/'
  })

});
