function MemberCtrl(api, $location) {

	this.api = api;
	this.location = $location;
	this.postal_code = "";
	this.error = false;

}

angular.module('vote').controller('memberCtrl', MemberCtrl);

MemberCtrl.prototype.requestVotes = function() {

	var str = this.postal_code;

	str = str.replace(/\s/g, '');
	str = str.toUpperCase();

	if (str.length === 6 && /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/.test(str) === true) {
		this.api.requestVotes(str);
	}
	else {
		this.location.path('/');
		this.error = true;
	}

	
};

