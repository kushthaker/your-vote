var app = angular.module('vote', ['ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: '../partials/postal.html',
		controller: 'memberCtrl as ctrl'
	})
	.when('/:riding', {
		templateUrl: '../partials/member.html',
		controller: 'memberCtrl as ctrl'
	})
	.otherwise({
		redirectTo: '/'
	})

});
