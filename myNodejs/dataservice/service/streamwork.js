var streamwork = function(){

	var rst        = "",
		streamwork = require("./../data/streamwork");

	//*****private start*****
	var getFeedList = function(){
		return JSON.stringify(streamwork.feedList);
	};

	var getOwner = function(){
		return JSON.stringify(streamwork.owner);
	};
	//*****private start end*****

	//*****public start*****
	var start = function(app,prefix,apiPath,version){
		/*
		 * @GET solutions
		 * @url:/v1/solutions?country=cn&industry=1&lob=2&language=en&solution_area=2&hot_topic=hana&page=1&page_size=20
		 */
		app.get(prefix + apiPath + version + '/streamwork/feedlist',function(req,res){
			rst = getFeedList();
			res.send(rst);						
		});

		app.get(prefix + apiPath + version + '/streamwork/owner',function(req,res){
			rst = getOwner();
			res.send(rst);						
		});

	};
	//*****public end*****

	return {
		start:start
	};
			
}();

exports.streamwork = streamwork;