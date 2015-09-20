function ApiService($http) {

	this.http = $http;
	this.hello; 

}


angular.module('vote').service('api', ApiService);

ApiService.prototype.requestVotes = function(postal_code) {
	
	var self = this;

	console.log(postal_code);

	return self.http.get('/api/votes/' + postal_code)
		.then(function(response) {
			console.log('successful votes call');
			console.log(response);
		})
		.catch(function(response) {
			console.log('unsuccessful votes call');
		});
};

