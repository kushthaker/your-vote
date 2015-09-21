function MemberCtrl(api, $location) {

	this.api = api;
	this.location = $location;
	this.postal_code = "";
	this.error = false;

	this.mp = this.api.getMPData();

	this.mpInfo = this.mp.mpInfo;

	this.mpBallots = this.filterBallots();
	
}

angular.module('vote').controller('memberCtrl', MemberCtrl);

MemberCtrl.prototype.requestVotes = function() {

	var self = this;

	var str = self.postal_code;

	str = str.replace(/\s/g, '');
	str = str.toUpperCase();

	if (str.length === 6 && /^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/.test(str) === true) {
		self.api.requestVotes(str).then(function(data) {
			self.mpInfo = JSON.parse(data.MP);
			self.mpBallots = data.ballots.map(function (curr) {

				if (curr.bill) {
					curr.bill = JSON.parse(curr.bill);
				}

				curr.vote = JSON.parse(curr.vote);
				return curr;

			});
		});
	}
	else {
		self.location.path('/');
		self.error = true;
	}
	
};

MemberCtrl.prototype.getMPData = function() {
	return
};

MemberCtrl.prototype.filterBallots = function() {

	var self = this;

	return self.mp.mpBallots.filter(function(curr) {
		if (curr.bill) {
			return curr;
		}
	})
}







