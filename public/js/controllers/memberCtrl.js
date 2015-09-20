function MemberCtrl(api) {

	this.api = api;
	this.postal_code = "";


}

angular.module('vote').controller('memberCtrl', MemberCtrl);

MemberCtrl.prototype.requestVotes = function() {
	this.api.requestVotes(this.postal_code);
};

