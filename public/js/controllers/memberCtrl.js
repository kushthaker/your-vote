function MemberCtrl(apiService) {

	this.apiService = apiService;

	this.hello = "hello"	
	
}


angular.module('vote').controller('memberCtrl', MemberCtrl);

