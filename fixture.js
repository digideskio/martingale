var Connector = require('./connector');

function Fixture() {
	this.cn = new Connector({
		host: 'localhost',
		user: 'root',
		password: '@bcd!234',
		database: 'martingale'
	});
}

Fixture.prototype.readFixture = function(fixtureId, cb) {
	this.cn.selectMatchById(fixtureId, cb);
};

Fixture.prototype.readNextFixture = function(team, date, cb) {
	this.cn.selectNextTeamMatch(team, date, cb);
};

module.exports = Fixture;