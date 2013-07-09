var app = {};

(function(){
	var express = require('express');
	app  		= express.createServer();
	app.rest 	= require("./rest").rest;
	app.port 	= 3000;

	//configuration
	app.configure(function(){
		app.use(express.bodyParser());
		app.use(express.methodOverride());
		app.use(app.router);
	});

	app.configure('development', function(){
		app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	});

	app.configure('production', function(){
		app.use(express.errorHandler());
	});

	//http config
	app.accessOrigin = "*";

	app.all('/*', function(req, res, next) {
		res.header("Access-Control-Allow-Origin",app.accessOrigin);
		res.header("Access-Control-Allow-Headers", "X-Requested-With,x-http-method-override");//,x-http-method-override
		res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
		res.contentType('application/json');
		next(); 
	});

	//start
	app.rest.begin(app);
	app.listen(app.port);
	console.log("Express server listening on port %d in %s mode",app.address().port,app.settings.env);
	
})();
 