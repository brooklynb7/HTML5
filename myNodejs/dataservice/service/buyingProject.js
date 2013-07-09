var buyingProject = function(){

	var rst 		  = "",
		buyingProject = require("./../data/buyingProject");

	var start = function(app,prefix,apiPath,version){

		app.get(prefix + apiPath + version + '/buyingProject',function(req,res){

			var status = req.query["status"].toLowerCase();

			if(status == "closed"){
				rst = buyingProject.closed;
			}
			else if(status == "prepared"){
				rst = buyingProject.prepared;
			}
			else{
				rst = '{"content":"fail to get data"}';
			}
			
			res.send(rst);			
		});	
	};

	return {
		start:start
	};
			
}();

exports.buyingProject = buyingProject;