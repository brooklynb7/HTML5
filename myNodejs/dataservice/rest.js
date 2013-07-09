var rest = function() {

	var prefix 	 	  = "/rdc",
		version  	  = "/v1",
		apiPath1 	  = "/gapi",
		apiPath2 	  = "/japi",
		buyingProject = require("./service/buyingProject").buyingProject,
		solutions 	  = require("./service/solutions").solutions,
		services 	  = require("./service/services").services,
		user 	      = require("./service/user").user,
		streamwork 	  = require("./service/streamwork").streamwork;

	var begin = function(app){
		buyingProject.start(app,prefix,apiPath1,"");
		solutions.start(app,prefix,apiPath2,version);
		services.start(app,prefix,apiPath2,version);
		user.start(app,prefix,apiPath2,version);
		streamwork.start(app,prefix,apiPath2,version);
	};

	return {
		begin:begin
	};	
	
}();

exports.rest = rest;