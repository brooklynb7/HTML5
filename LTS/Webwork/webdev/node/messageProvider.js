var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

MessageProvider = function(host, port) {
	this.db = new Db('webdev', new Server(host, port, {
		safe: false
	}, {
		auto_reconnect: true
	}, {}));
	this.db.open(function() {});
};

MessageProvider.prototype.getCollection = function(callback) {
	this.db.collection('messages', function(error, msg_collection) {
		if (error) callback(error);
		else callback(null, msg_collection);
	});
};

//find all messages
MessageProvider.prototype.findAll = function(callback) {
	this.getCollection(function(error, msg_collection) {
		if (error) callback(error)
		else {
			msg_collection.find().sort({created_at: -1 }).toArray(function(error, results) {
				if (error) callback(error)
				else callback(null, results)
			});
		}
	});
};

//save new message
MessageProvider.prototype.save = function(message, callback) {
	this.getCollection(function(error, msg_collection) {
		if (error) callback(error)
		else {
			message.created_at = new Date().valueOf();
			msg_collection.insert(message, function() {
				callback(null, message);
			});
		}
	});
};

exports.MessageProvider = MessageProvider;