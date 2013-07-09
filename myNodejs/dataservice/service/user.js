var user = function(){

	var rst = "",
		current_user = require("./../data/user"),
		successRes = {"responseCode":"200 OK"},
		filterConfigId = 10;

	//*****private start*****
	var getUserProfile = function(){
		return current_user.user;
	};

	var getFilterConfigs = function(){
		return JSON.stringify(current_user.filterConfigs);
	};

	var createFilterConfig = function(name, queryString){
		var newOne = {"id":""+ (filterConfigId++) +"","name":""+ name +"","queryString":""+ queryString +"","selected":"false"};
		current_user.filterConfigs.push(newOne);
		return newOne;
	};

	var setCurrentFilterConfig = function(configId){
		var i  = 0,
			c  = current_user.filterConfigs.length;
		for(;i<c; i++){
			current_user.filterConfigs[i].id == configId ? current_user.filterConfigs[i].selected = true : current_user.filterConfigs[i].selected = false;
		}

		return successRes;
	};

	var deleteFilterConfig = function(configId){
		var i    = 0,
			c    = current_user.filterConfigs.length;
		for(;i<c; i++){		
			if(current_user.filterConfigs[i].id == configId){
				current_user.filterConfigs.splice(i,1);
				break;
			}
		}

		return successRes;
	};

	var setUserLanguage = function(languageId){
		current_user.user.language = languageId;
		return successRes;
	};

	var setUserCountry = function(countryId){
		current_user.user.country = countryId;
		return successRes;
	};
 
	//*****private end*****
	var start = function(app,prefix,apiPath,version){

		//@GET
		app.get(prefix + apiPath + version + '/current_user/:active',function(req,res){
			var active = req.params.active.toLowerCase();
			if(active){
				switch(active){
					/* 
					 * @Get current user properties
	 				 * @url:/v1/current_user/profile
					 */
					case "profile":
						rst = getUserProfile();
						break;	
					/* 
					 * @Get current user saved filter configs
	 				 * @url:/v1/current_user/filter_configs
					 */
					case "filter_configs":
						rst = getFilterConfigs();
						break;				
					default:
						rst = 'failed';
						break;
				}
			}
			res.send(rst);			
		});	

		//@POST
		//Create a new filter config
	 	//url:/v1/current_user/filter_configs
		app.post(prefix + apiPath + version + '/current_user/filter_configs', function(req, res){
			var name        = req.body.name,
				queryString = req.body.queryString;
			rst = createFilterConfig(name,queryString);
			res.send(rst);
		});

		//@PUT
		//Set current selected filter config
	 	//url:/v1/current_user/filter_configs
		app.put(prefix + apiPath + version + '/current_user/filter_configs', function(req, res){
			var id = req.body.id;
			rst = setCurrentFilterConfig(id);
			res.send(rst);
		});

		//@DELETE
		//Delete a filter config
		//url:/v1/current_user/filter_configs
		app.delete(prefix + apiPath + version + '/current_user/filter_configs', function(req, res){
			var id = req.body.id;
			rst = deleteFilterConfig(id);
			res.send(rst);
		});

		//@PUT
		app.put(prefix + apiPath + version + '/current_user/profile/:active', function(req, res){
			var active = req.params.active.toLowerCase();
			if(active){
				switch(active){
					/* 
					 * @Get user language
	 				 * @url:/v1/current_user/profile/language
					 */
					case "language":
						var languageId = req.body.languageId;
						rst = setUserLanguage(languageId);
						break;	
					/* 
					 * @Get Set user country
	 				 * @url:/v1/current_user/profile/country
					 */
					case "country":
						var countryId = req.body.countryId;
						rst = setUserCountry(countryId);
						break;				
					default:
						rst = 'failed';
						break;
				}
			}

			res.send(rst);
		});
	};

	return {
		start:start
	};
			
}();

exports.user = user;