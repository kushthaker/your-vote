function ApiService($http) {

	this.http = $http;

	this.hello = 'negsdg';

	console.log('hello');

}

angular.module('vote').service('api', ApiService);

ApiService.prototype.checking = function(postal_code) {
	
	console.log('asdkjbfkjsabdjfk');

};


ApiService.prototype.requestVotes = function(postal_code) {
	
	var self = this;

	console.log(postal_code);
	debugger;

	return self.http.post('/api/votes/' + postal_code).
	then(function(response) {
		return response.data 
	}, function(response) {
		console.log('error in postalCode send')
	});
};