var solutions = function(){

	var rst       = "",
		solutions = require("./../data/solutions");

	//*****private start*****
	var getRandom = function(seed){
		return Math.floor((Math.random()*seed));
	};

	var getSolutions = function(country,language,industry,lob,solutionArea,hotTopic,page,pageSize){
		var r = getRandom(50),
		    s = '{"total":"' + r + '",'+
				' "solutions":' + JSON.stringify(solutions.all) + '}';
		return s;
	};

	var getCoveredFilters = function(country,language,industry,lob,solutionArea,hotTopic,displayLanguage){
		var r = getRandom(7),
		    s = JSON.stringify(solutions.coveredFilters[r]);
		return s;
	};

	var getOneSolution = function(packageId,countryId,languageId){
		var s = "";
		if(packageId === "hana-erp-604-01" && countryId === "zzz"){
			s = JSON.stringify(solutions.oneSolution[0]);
		}
		else if(languageId === "zh"){
			s = JSON.stringify(solutions.oneSolution[1]);
		}
		else{
			s = JSON.stringify(solutions.oneSolution[2]);
		}

		return s;
	};

	var getAssets = function(packageId,countryId,languageId){
		var count  = getRandom(8),
			r,
		    array  = [],
		    i      = 0,
			assets = languageId === "zh"?solutions.assets_zh:solutions.assets;
		
		for(;i<count;i++){			
		    r = getRandom(6);
		    array.push(assets[r]);
		}

		return JSON.stringify(array);
	};

	var getOnePager = function(packageId,countryId,languageId){
		return 	languageId === "zh"?solutions.onePager_zh:solutions.onePager;
	};

	var getStepByStep = function(packageId,countryId,languageId){
		return 	languageId === "zh"?solutions.stepBystep_zh:solutions.stepBystep;
	};

	var getSalesGuide = function(packageId,countryId,languageId,category,role){
		var hash = require('hashish'),	objs;		
		if(role === "customer"){
			objs = languageId === "zh"?solutions.guide_customer_zh:solutions.guide_customer;
		}
		else{			
			objs = languageId === "zh"?solutions.guide_sales_zh:solutions.guide_sales;
		}
		return hash(objs).has(category)?objs[category]:objs[getRandom(5)];
	};
	//*****private start end*****

	//*****public start*****
	var start = function(app,prefix,apiPath,version){
		/*
		 * @GET solutions
		 * @url:/v1/solutions?country=cn&industry=1&lob=2&language=en&solution_area=2&hot_topic=hana&page=1&page_size=20
		 */
		app.get(prefix + apiPath + version + '/solutions',function(req,res){
			rst = getSolutions();
			res.send(rst);						
		});	

		//@GET
		app.get(prefix + apiPath + version + '/solutions/:active',function(req,res){
			var active = req.params.active.toLowerCase();
			if(active){
				switch(active){
					/*
					 *@Get solutions covered filters
					 *@url:/v1/solutions/covered_filters?country=cn&industry=1&lob=2&language=en&solution_area=2&hot_topic=hana&display_language=en
					 */
					case "covered_filters":
						rst = getCoveredFilters();
						break;				
					default:
						rst = 'failed';
						break;
				}
			}
			res.send(rst);	
		});	
		/*
		 * @Get one solution
		 * @url:/v1/solutions/{packageId}/{countryId}/{languageId}
		 */
		app.get(prefix + apiPath + version + '/solutions/:packageId/:countryId/:languageId',function(req,res){
			var packageId  = req.params.packageId.toLowerCase(),
			 	countryId  = req.params.countryId.toLowerCase(),
			 	languageId = req.params.languageId.toLowerCase() || "EN";
			
			rst = getOneSolution(packageId,countryId,languageId);			
			res.send(rst);	
		});	

		/**
		 * @Get
		 */
		app.get(prefix + apiPath + version + '/solutions/:packageId/:countryId/:languageId/:content',function(req,res){
			var content    = req.params.content.toLowerCase(),
			    packageId  = req.params.packageId.toLowerCase(),
			    countryId  = req.params.countryId.toLowerCase(),
			    languageId = req.params.languageId.toLowerCase() || "EN";
			
			if(content){
				switch(content){
					/*
					 *@Get assets of given solution
					 *@url:/v1/solutions/{packageId}/{countryId}/{languageId}/assets
					 */
					case "assets":
						rst = getAssets(packageId,countryId,languageId);
						break;	
					/*
					 *@Get assets of given solution
					 *@url:/v1/solutions/{packageId}/{countryId}/{languageId}/assets
					 */
					case "one_pager":
						rst = getOnePager(packageId,countryId,languageId);
						break;	
					/*
					 *@url:/v1/solutions/{packageId}/{countryId}/{languageId}/step_by_step
					 */
					case "step_by_step":
						rst = getStepByStep(packageId,countryId,languageId);
						break;				
					default:
						rst = 'failed';
						break;
				}
			}			
			res.send(rst);	
		});	
		/*
		 * @url:/v1/solutions/{packageId}/{countryId}/{languageId}/sales_guide/{category}
		 */
		app.get(prefix + apiPath + version + '/solutions/:packageId/:countryId/:languageId/sales_guide/:category/:role',function(req,res){
			var packageId  = req.params.packageId.toLowerCase(),
			    countryId  = req.params.countryId.toLowerCase(),
			    languageId = req.params.languageId.toLowerCase() || "EN",
			    category   = req.params.category.toLowerCase(),
			    role  	   = req.params.role.toLowerCase();
			
			rst = getSalesGuide(packageId,countryId,languageId,category,role);			
			res.send(rst);	
		});	

	};
	//*****public end*****

	return {
		start:start
	};
			
}();

exports.solutions = solutions;