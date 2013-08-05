/**
 * Module dependencies.
 */

var express = require('express'),
	routes = require('./routes'),
	user = require('./routes/user'),
	http = require('http'),
	path = require('path'),
	MessageProvider = require('./messageProvider').MessageProvider;

var app = express();
var relativePath = "/webdev/node";

app.configure(function() {
	app.set('port', process.env.PORT || 3000);
	app.set('views', __dirname + '/views');
	app.set('view engine', 'jade');
	app.set('view options', {
		layout: false
	});
	app.use(express.favicon());
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	app.use(app.router);
	app.use(require('stylus').middleware(__dirname + '/public'));
	app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function() {
	app.use(express.errorHandler());
});

var messageProvider = new MessageProvider('localhost', 27017);

app.get(relativePath, routes.index);
app.get(relativePath + '/users', user.list);

app.post(relativePath + '/message/new', function(req, res) {
	messageProvider.save({
		content: req.param('content'),
		ip: req.connection.remoteAddress
	}, function(error, message) {
		res.send(JSON.stringify(message));
	});
});

app.get(relativePath + '/messages', function(req, res) {
	messageProvider.findAll(function(error, messages) {
		res.send(JSON.stringify(messages));
	});
});

http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});