/*
 * Message router
 */
var MessageProvider = require('../messageProvider').MessageProvider;
var messageProvider = new MessageProvider('localhost', 27017);

exports.list = function(req, res) {
	messageProvider.findAll(function(error, messages) {
		res.send(JSON.stringify(messages));
	});
};

exports.insert = function(req, res) {
	messageProvider.save({
		content: req.param('content'),
		ip: req.headers['x-real-ip'] || req.connection.remoteAddress
	}, function(error, message) {
		res.send(JSON.stringify(message));
	});
};